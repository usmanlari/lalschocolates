"use client";

import { libre_caslon_text } from "@/constants";
import { TfiClose } from "react-icons/tfi";
import { BsBagX } from "react-icons/bs";
import { useRootContext } from "@/context/root-context";
import Link from "next/link";

export default function ShoppingCart() {
  const { isCartOpen, setIsCartOpen } = useRootContext();

  return (
    <div
      style={{ transition: "right 0.2s ease" }}
      className={`fixed h-full top-0 bg-white w-80 sm:w-88 z-40 ${
        isCartOpen ? "right-0" : "-right-80 sm:-right-88"
      }`}
    >
      <header className="border-b-1 border-gray-200 h-14 flex flex-row items-center justify-between">
        <h3 className={`${libre_caslon_text.className} pl-4`}>SHOPPING CART</h3>
        <button
          type="button"
          className="close p-4"
          onClick={() => setIsCartOpen(false)}
        >
          <TfiClose className="text-lg" />
        </button>
      </header>
      <div className="px-4 py-16 flex flex-col items-center gap-y-4">
        <BsBagX className="text-5xl" />
        <p className="text-sm text-center">Your cart is empty</p>
        <Link
          className="font-semibold text-sm text-white bg-black py-2.5 px-4"
          href="/"
          onClick={() => setIsCartOpen(false)}
        >
          RETURN TO SHOP
        </Link>
      </div>
    </div>
  );
}
