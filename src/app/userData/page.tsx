import { authOptions } from "@/lib/auth";
import { prismaClient } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import UserForm from "./coomponents/form"; 

export const dynamic = "force-dynamic";

export default async function UserSettingsPage() {
  const session = await getServerSession(authOptions);

  if (!session?.user?.email) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-2 p-5">
        <h2 className="font-bold">Вы не авторизованы!</h2>
      </div>
    );
  }

  const user = await prismaClient.user.findUnique({
    where: {
      email: session.user.email,
    },
  });

  if (!user) {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-2 p-5">
        <h2 className="font-bold">Пользователь не найден!</h2>
      </div>
    );
  }

  return <UserForm user={user} />;
}