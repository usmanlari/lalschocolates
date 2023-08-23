import { Category, Product } from "@/types";
import Link from "next/link";
import { BsChevronRight } from "react-icons/bs";

export default function Breadcrumbs({
  product,
  category,
}: {
  product: Product;
  category: Category;
}) {
  return (
    <div className="bg-gray-100">
      <div className="h-full p-4 max-w-7xl mx-auto flex flex-row items-center flex-wrap gap-2">
        <Link
          style={{ transition: "color 0.2s ease" }}
          href="/"
          className="text-sm text-black hover:text-yellow-custom active:text-yellow-custom whitespace-nowrap"
        >
          HOME
        </Link>
        <BsChevronRight className="text-xs" />
        <Link
          style={{ transition: "color 0.2s ease" }}
          href={`/${category}`}
          className="text-sm text-black hover:text-yellow-custom active:text-yellow-custom whitespace-nowrap"
        >
          {category
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ")
            .toUpperCase()}
        </Link>
        <BsChevronRight className="text-xs" />
        <span className="text-sm">
          {product.title.toUpperCase()}
        </span>
      </div>
    </div>
  );
}
