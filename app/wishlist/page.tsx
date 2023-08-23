import type { Metadata } from "next";
import { FiHeart } from "react-icons/fi";
import Link from "next/link";

export const metadata: Metadata = {
  title: "My Wishlist Page - Lals - Chocolate and Gifting Brand in Pakistan",
};

export default function Wishlist() {
  return (
    <main>
      <div className="bg-green-custom text-center py-16">
        <h3 className="px-4 text-sm">View your wishlist products</h3>
      </div>
      <div className="px-4 mx-auto py-32 flex flex-col items-center gap-y-6">
        <FiHeart className="text-8xl" />
        <h3 className="text-3xl font-bold text-center">WISHLIST IS EMPTY</h3>
        <div>
          <p className="text-sm text-center">
            You don't have any products in the wishlist yet.
          </p>
          <p className="text-sm text-center">
            You will find a lot of interesting products on our "Shop" page.
          </p>
        </div>
        <Link
          className="font-semibold text-sm text-white bg-black py-2.5 px-4"
          href="/"
        >
          RETURN TO SHOP
        </Link>
      </div>
    </main>
  );
}
