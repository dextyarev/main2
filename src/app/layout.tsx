"use client"
import Footer from "@/components/ui/footer";
import Header from "@/components/ui/header";
import { AuthProvider } from "@/providers/auth";
import CartProvider from "@/providers/cart";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: any;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-full flex-col">
          <AuthProvider>
            <CartProvider>
              <Header />
              <div className="div flex-1">{children}</div>
              <Footer />
            </CartProvider>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
