// app/api/user/route.js

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";

export async function PUT(request: any) {
  const session = await getServerSession({ req: request, ...authOptions });

  if (!session?.user?.email) {
    return new Response(JSON.stringify({ message: "Unauthorized" }), {
      status: 401,
    });
  }

  const user = await prismaClient.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!user) {
    return new Response(JSON.stringify({ message: "User not found" }), {
      status: 404,
    });
  }

  const data = await request.json();
  const { name, adress, phone } = data;

  const updatedUser = await prismaClient.user.update({
    where: {
      id: user.id,
    },
    data: {
      name,
      adress,
      phone,
    },
  });

  return new Response(JSON.stringify(updatedUser), {
    status: 200,
  });
}
