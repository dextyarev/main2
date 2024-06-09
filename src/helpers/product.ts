import { Product } from "@prisma/client";

export interface ProductWithTotalPrice extends Product {
  totalPrice: number;
  formattedPrice: string;
}

export const computeProductTotalPrice = (
  product: Product,
): ProductWithTotalPrice => {
  let totalPriceWithDiscount: number;

  if (product.discountPercentage === 0) {
    totalPriceWithDiscount = Number(product.basePrice);
  } else {
    const totalDiscount = Number(product.basePrice) * (product.discountPercentage / 100);
    totalPriceWithDiscount = Number(product.basePrice) - totalDiscount;
  }

  // Formatando o preço total com desconto em reais
  const formattedPrice = totalPriceWithDiscount.toLocaleString('ru-RU', { style: 'currency', currency: 'RUB' });

  // Retornando apenas totalPrice e adicionando a formatação
  return {
    ...product,
    totalPrice: totalPriceWithDiscount,
    formattedPrice: formattedPrice, // Adicionando a formatação como uma nova propriedade
  };
};
