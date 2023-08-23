"use client";

import { HiOutlineSearch } from "react-icons/hi";
import { FiMenu, FiHeart, FiUser } from "react-icons/fi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useRootContext } from "@/context/root-context";
import Link from "next/link";

export default function Toolbar() {
  const { setIsMenuOpen, setIsSearchOpen, setIsCartOpen, setIsAccountOpen } =
    useRootContext();

  return (
    <div className="fixed z-30 -bottom-px w-full left-0 bg-green-custom block lg:hidden flex flex-row flex-nowrap items-center justify-evenly">
      <button
        type="button"
        style={{ transition: "color 0.2s ease" }}
        onClick={() => setIsMenuOpen(true)}
        className="flex flex-col px-2.5 pb-1 pt-2 gap-y-1 items-center text-black hover:text-yellow-custom active:text-yellow-custom"
      >
        <FiMenu className="text-xl sm:text-2xl" />
        <span className="text-xs font-medium">Menu</span>
      </button>
      <button
        type="button"
        style={{ transition: "color 0.2s ease" }}
        onClick={() => setIsSearchOpen(true)}
        className="flex flex-col px-2.5 pb-1 pt-2 gap-y-1 items-center text-black hover:text-yellow-custom active:text-yellow-custom"
      >
        <HiOutlineSearch className="text-xl sm:text-2xl" />
        <span className="text-xs font-medium">Search</span>
      </button>
      <Link
        href="/wishlist"
        className="relative flex flex-col px-2.5 pb-1 pt-2 gap-y-1 items-center text-black hover:text-yellow-custom active:text-yellow-custom"
      >
        <FiHeart className="text-xl sm:text-2xl" />
        <div className="flex flex-row justify-center items-center absolute top-1.25 right-4.5 bg-yellow-custom h-3.5 w-3.5 shadow-lg rounded-full text-2xs text-white">
          <span>0</span>
        </div>
        <span className="text-xs font-medium">Wishlist</span>
      </Link>
      <button
        type="button"
        style={{ transition: "color 0.2s ease" }}
        onClick={() => setIsCartOpen(true)}
        className="relative flex flex-col px-2.5 pb-1 pt-2 gap-y-1 items-center text-black hover:text-yellow-custom active:text-yellow-custom"
      >
        <AiOutlineShoppingCart className="text-xl sm:text-2xl" />
        <div className="flex flex-row justify-center items-center absolute top-1.25 right-1.5 bg-yellow-custom h-3.5 w-3.5 shadow-lg rounded-full text-2xs text-white">
          <span>0</span>
        </div>
        <span className="text-xs font-medium">Cart</span>
      </button>
      <button
        type="button"
        style={{ transition: "color 0.2s ease" }}
        onClick={() => setIsAccountOpen(true)}
        className="flex flex-col px-2.5 pb-1 pt-2 gap-y-1 items-center text-black hover:text-yellow-custom active:text-yellow-custom"
      >
        <FiUser className="text-xl sm:text-2xl" />
        <span className="text-xs font-medium">Account</span>
      </button>
    </div>
  );
}
