import ProductItem from "@/components/ui/product-item";
import { computeProductTotalPrice } from "@/helpers/product";
import { Product } from "@prisma/client";

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className="flex w-full gap-8 overflow-hidden px-5 [&::-webkit-scrollbar]:hidden">
      {products.slice(0,3).map((product) => (
        <div key={product.id} className="w-[270px] max-w-[270px]">
          <ProductItem product={computeProductTotalPrice(product)} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
