import { PrismaAdapter } from "@auth/prisma-adapter";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";
import { prismaClient } from "./prisma";
import { verifyPassword } from "@/helpers/auth";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prismaClient),
  pages: {
    signIn: '/auth/signin'
  },
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const { email, password } = credentials as { email: string; password: string };
        
        var re = /\S+@\S+\.\S+/;
        if (re.test(email) === false) {
          throw new Error("1");
        }

        let user = await prismaClient.user.findUnique({
          where: { email: email }, 
        });
        
        if (!user) {
          user = await prismaClient.user.create({
            data: {
              email: email,
              password: password
            }
          })
        }

        const isValidPassword = await verifyPassword(password, user.password!);
        if (isValidPassword === false) {
          throw new Error("2");
        }
        console.log(user);
        return user;
      },
    }),
  ]
};
