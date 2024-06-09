"use server";

import { prismaClient } from "@/lib/prisma";
import { CartProduct } from "@/providers/cart";

export const createOrder = async (
  cartProducts: CartProduct[],
  email: string,
) => {

  const userData = await prismaClient.user.findUnique({
        where: {
          email: email
        }
  });

  if (!userData || !userData.adress) {
    return;
  }
  
  const order = await prismaClient.order.create({
    data: {
      
      userId: userData.id,
      status: "WAITING_FOR_PAYMENT",
      orderAdress: userData.adress,
      orderProducts: {
        createMany: {
          data: cartProducts.map((product) => ({
            basePrice: product.basePrice,
            discountPercentage: product.discountPercentage,
            productId: product.id,
            quantity: product.quantity,
          })),
        },
      },
    },
  });

  return order;
};