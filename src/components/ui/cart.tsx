"use client"
import { createCheckout } from "@/actions/checkout";
import { createOrder } from "@/actions/order";
import { computeProductTotalPrice } from "@/helpers/product";
import { CartContext } from "@/providers/cart";
import { loadStripe } from "@stripe/stripe-js";
import { ShoppingCartIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import { useContext } from "react";
import { Badge } from "./badge";
import { message } from "antd";
import { Button } from "./button";
import CartItem from "./cart-item";
import { ScrollArea } from "./scroll-area";
import { Separator } from "./separator";

const Cart = () => {
  const { data } = useSession();

  const { products, totalDiscount, total, subTotal } = useContext(CartContext);

  const handleFinishPurchaseClick = async () => {
    if (!data?.user) {
      window.location.href = "http://localhost:3000/auth/signin";
      return;
    }

    const order = await createOrder(products, (data?.user as any).email).then(() => message.success("Заявка отправлена")).catch((err) => message.error("Проверьте данные аккаунта"));

  };
  return (
    <div className="flex h-full flex-col gap-8">
      <Badge
        className="w-fit gap-2 border-2 border-primary px-3 py-[0.365rem] text-base font-bold uppercase"
        variant="outline"
      >
        <ShoppingCartIcon size={16} />
        КОРЗИНА
      </Badge>

      <div className="flex h-full flex-col gap-5 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="flex h-full flex-col gap-4">
            {products.length > 0 ? (
              products.map((product) => (
                <CartItem
                  key={product.id}
                  product={computeProductTotalPrice(product as any) as any}
                />
              ))
            ) : (
              <p className="text-center font-semibold">Корзина пуста</p>
            )}
          </div>
        </ScrollArea>
      </div>

      {products.length > 0 && (
        <div className="flex flex-col gap-3">
          <Separator />
          <div className="flex items-center justify-between text-xs">
            <p>Подитог</p>
            <p>{subTotal.toFixed(2)} RUB</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-xs">
            <p>Доставка</p>
            <p>Бесплатно</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-xs">
            <p>Скидка</p>
            <p>{totalDiscount.toFixed(2)} RUB</p>
          </div>

          <Separator />

          <div className="flex items-center justify-between text-sm font-bold">
            <p>Итог</p>
            <p>{total.toFixed(2)} RUB</p>
          </div>

          <Button
            className="mt-7 font-bold uppercase"
            onClick={handleFinishPurchaseClick}
          >
            Подтвердить заявку
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
