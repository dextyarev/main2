import { Badge } from "@/components/ui/badge";
import { Category } from "@prisma/client";
import Link from "next/link";

interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <Badge
        variant="outline"
        className="flex items-center justify-center gap-5 rounded-lg py-10 hover:bg-blue-500 duration-500"
      >
        <span className="font-medium text-[20px] uppercase">{category.name}</span>
      </Badge>
    </Link>
  );
};

export default CategoryItem;
