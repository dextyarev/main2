"use client";

import {
  HomeIcon,
  ListOrderedIcon,
  LogIn,
  LogOut,
  MenuIcon,
  PackageCheckIcon,
  Settings,
  PercentCircle,
  ShoppingCart,
} from "lucide-react";
import logo from "./logo.png"
import Image from 'next/image'

import { Button } from "./button";
import { Card } from "./card";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "./sheet";

import { signIn, signOut, useSession } from "next-auth/react";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Separator } from "./separator";
import Link from "next/link";
import Cart from "./cart";

const Header = () => {
  const { status, data } = useSession();

  console.log(status, data)

  const handleLoginClick = async () => {
    await signIn();
  };

  const handleLogoutClick = async () => {
    await signOut();
  };
  return (
    <Card className="flex items-center justify-between p-[2rem]">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <MenuIcon />
          </Button>
        </SheetTrigger>

        <SheetContent side="left">
          <SheetHeader className="text-left text-lg font-semibold">
            Меню
          </SheetHeader>

          {status === "authenticated" && data?.user && (
            <div className="flex flex-col">
              <div className="my-4 flex items-center gap-2">

                <div className="flex flex-col">
                  <p className="font-medium">{data.user.email}</p>
                  <p className="text-sm opacity-75">Добро пожаловать</p>
                </div>
              </div>
              <Separator />
            </div>
          )}

          <div className="mt-2 flex flex-col gap-4">
            {status === "unauthenticated" && (
              <Button
                onClick={handleLoginClick}
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <LogIn size={16} />
                Войти
              </Button>
            )}

            {status === "authenticated" && (
              <Button
                onClick={handleLogoutClick}
                variant="outline"
                className="w-full justify-start gap-2"
              >
                <LogOut size={16} />
                Выйти
              </Button>
            )}
            <SheetClose asChild>
              <Link href="/">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <HomeIcon size={16} />
                  Главная
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/orders">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <PackageCheckIcon size={16} />
                  Мои заказы
                </Button>
              </Link>
            </SheetClose>

            <SheetClose asChild>
              <Link href="/deals">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <PercentCircle size={16} />
                  Скидки
                </Button>
              </Link>
            </SheetClose>

            {status === "authenticated" && (
              <SheetClose asChild>
                <Link href="/userData">
                  <Button
                    variant="outline"
                    className="w-full justify-start gap-2"
                  >
                    <Settings size={16} />
                    Настройки
                  </Button>
                </Link>
              </SheetClose>
            )}

            <SheetClose asChild>
              <Link href="/catalog">
                <Button
                  variant="outline"
                  className="w-full justify-start gap-2"
                >
                  <ListOrderedIcon size={16} />
                  Каталог
                </Button>
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>

      <Link href="/">
        <h1 className="text-lg font-semibold">
        <Image
          src={logo}
          width={200}
          height={300}
          alt="Picture of the author"
        />
        </h1>
      </Link>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon">
            <ShoppingCart />
          </Button>
        </SheetTrigger>

        <SheetContent>
          <Cart/>
        </SheetContent>
      </Sheet>
    </Card>
  );
};

export default Header;
