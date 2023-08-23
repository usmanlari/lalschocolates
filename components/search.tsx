"use client";

import type { Category, Product } from "@/types";
import {
  filterProductsByTitle,
  libre_caslon_text,
  imageMapping,
  filterProductsByCategory,
  findItemCategory,
} from "@/constants";
import { TfiClose } from "react-icons/tfi";
import { VscChevronDown } from "react-icons/vsc";
import { HiOutlineSearch } from "react-icons/hi";
import { useRootContext } from "@/context/root-context";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Search({
  products,
  dollarRate,
  poundRate,
}: {
  products: Product[];
  dollarRate: string;
  poundRate: string;
}) {
  const { currency, isSearchOpen, setIsSearchOpen } = useRootContext();
  const [input, setInput] = useState("");
  const [selectedOption, setSelectedOption] = useState<Category>("all");

  return (
    <div
      style={{ transition: "right 0.2s ease" }}
      className={`fixed h-full top-0 bg-white w-80 sm:w-88 z-40 flex flex-col ${
        isSearchOpen ? "right-0" : "-right-80 sm:-right-88"
      }`}
    >
      <header className="border-b-1 border-gray-200 h-14 flex flex-row items-center justify-between">
        <h3 className={`${libre_caslon_text.className} pl-4`}>
          SEARCH OUR SITE
        </h3>
        <button
          type="button"
          className="close p-4"
          onClick={() => setIsSearchOpen(false)}
        >
          <TfiClose className="text-lg" />
        </button>
      </header>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="py-6 px-4 flex flex-col items-center justify-center gap-y-5 border-gray-200 border-b-1"
      >
        <div className="w-full relative">
          <VscChevronDown className="pointer-events-none absolute top-2.5 right-3 text-gray-500 text-lg" />
          <select
            className="px-2.5 h-10 text-sm w-full border-1 border-gray-200 focus:outline-0"
            onChange={(e) => setSelectedOption(e.target.value as Category)}
          >
            <option value="all">All Categories</option>
            <option value="chocolate-bars">Chocolate Bars</option>
            <option value="chocolate-barks">Chocolate Barks</option>
            <option value="chocolate-platters">Chocolate Platters</option>
            <option value="macarons">Macarons</option>
            <option value="snackables">Snackables</option>
            <option value="cakes">Cakes</option>
          </select>
        </div>
        <div className="w-full relative flex flex-row items-center">
          <input
            onChange={(e) => setInput(e.target.value)}
            type="text"
            name="searchresult"
            placeholder="Search for products"
            className="pl-2.5 flex-1 h-10 text-sm border-y-1 border-l-1 border-gray-200 focus:outline-0 focus:placeholder:text-transparent"
          />
          <button
            type="submit"
            className="px-3 h-10 border-y-1 border-r-1 border-gray-200"
          >
            <HiOutlineSearch className="text-gray-500 text-lg" />
          </button>
        </div>
      </form>
      <div className="px-4 py-2.5 shadow-md">
        <span className="font-semibold text-sm">
          {input === "" ? "Need some inspiration?" : "Search Results:"}
        </span>
      </div>
      <div className="overflow-auto flex-1 p-4 flex flex-col gap-y-4">
        {filterProductsByTitle(
          input,
          filterProductsByCategory(selectedOption, products)
        ).map((product, index) => {
          return (
            <div key={index} className="flex flex-row items-center gap-x-4">
              <Link
                href={`/${findItemCategory(product.categories)}/${
                  product.reference
                }`}
                onClick={() => setIsSearchOpen(false)}
              >
                <div className="h-24 w-24 overflow-hidden">
                  <Image
                    src={
                      imageMapping[
                        product.reference as keyof typeof imageMapping
                      ]
                    }
                    alt=""
                  />
                </div>
              </Link>
              <div>
                <Link
                  href={`/${findItemCategory(product.categories)}/${
                    product.reference
                  }`}
                  onClick={() => setIsSearchOpen(false)}
                >
                  <h3 className="text-sm font-medium">{product.title}</h3>
                </Link>
                <p className="mt-1.5 text-sm text-gray-500">
                  {currency === "Rupees" &&
                    `PKR ${product.price.toLocaleString()}`}
                  {currency === "US Dollar" &&
                    `$ ${(product.price * Number(dollarRate)).toFixed(2)} USD`}
                  {currency === "British Pound" &&
                    `£ ${(product.price * Number(poundRate)).toFixed(2)} GBP`}
                </p>
                <button
                  type="button"
                  style={{ transition: "color 0.2s ease, border 0.2s ease" }}
                  className="mt-1.5 text-xs font-medium border-black border-1 py-1 px-6 hover:text-yellow-custom hover:border-yellow-custom
                  active:text-yellow-custom active:border-yellow-custom"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
