"use client";

import { HiOutlineSearch } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";
import { FiHeart } from "react-icons/fi";
import { CgShoppingBag } from "react-icons/cg";
import { useRootContext } from "@/context/root-context";
import logo from "@/app/images/logo.png";
import Navbar from "./navbar";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const {
    setIsMenuOpen,
    setIsSearchOpen,
    setIsAccountOpen,
    setIsCartOpen,
    wishlist,
    cart,
  } = useRootContext();

  return (
    <header className="bg-white sticky -top-px shadow-sm z-20">
      <div className="max-w-7xl mx-auto px-4 h-full grid grid-cols-12">
        <div className="col-span-3 flex flex-row items-center justify-start">
          <button
            type="button"
            className="py-4 pr-4 block lg:hidden"
            onClick={() => setIsMenuOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="16"
              viewBox="0 0 30 16"
            >
              <rect width="30" height="1.5"></rect>
              <rect y="7" width="20" height="1.5"></rect>
              <rect y="14" width="30" height="1.5"></rect>
            </svg>
          </button>
        </div>
        <div className="col-span-6 flex flex-row justify-center items-center">
          <Link href="/" className="py-1">
            <Image
              src={logo}
              alt="Lal's logo"
              className="h-12 lg:h-20 w-auto"
              priority
            />
          </Link>
        </div>
        <div className="col-span-3 flex flex-row items-center justify-end">
          <button
            type="button"
            className="p-1.5 sm:p-2"
            onClick={() => setIsSearchOpen(true)}
          >
            <HiOutlineSearch className="text-lg sm:text-xl" />
          </button>
          <button
            type="button"
            className="p-1.5 sm:p-2 hidden sm:block"
            onClick={() => setIsAccountOpen(true)}
          >
            <VscAccount className="text-lg sm:text-xl" />
          </button>
          <Link href="/wishlist" className="relative p-1.5 sm:p-2">
            <FiHeart className="text-lg lg:text-xl" />
            <div
              className="flex flex-row justify-center items-center absolute top-0.5 sm:top-1 right-0 sm:right-px bg-yellow-custom h-3.5 w-3.5
            shadow-lg rounded-full text-2xs text-white"
            >
              <span>{wishlist.length}</span>
            </div>
          </Link>
          <button
            type="button"
            className="relative pl-1.5 sm:pl-2 py-1.5 sm:py-2"
            onClick={() => setIsCartOpen(true)}
          >
            <CgShoppingBag className="text-lg lg:text-xl" />
            <div
              className="flex flex-row justify-center items-center absolute top-0.5 sm:top-1 -right-1 bg-yellow-custom h-3.5 w-3.5
            shadow-lg rounded-full text-2xs text-white"
            >
              <span>{cart.length}</span>
            </div>
          </button>
        </div>
      </div>
      <Navbar />
    </header>
  );
}
