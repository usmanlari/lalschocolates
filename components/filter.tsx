"use client";

import type { Category, Product } from "@/types";
import {
  libre_caslon_text,
  getMaxPriceByCategory,
  getItemCountByCategory,
  filterProductsByPrice,
  getCategories,
} from "@/constants";
import { HiOutlineAdjustments } from "react-icons/hi";
import { TfiClose } from "react-icons/tfi";
import { useRootContext } from "@/context/root-context";
import { useState, ChangeEvent, useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function Filter({
  products,
  category,
  dollarRate,
  poundRate,
}: {
  products: Product[];
  category: Category;
  dollarRate: string;
  poundRate: string;
}) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const { currency, isFilterOpen, setIsFilterOpen } = useRootContext();
  const [pricelte, setPricelte] = useState(
    Number(searchParams.get("pricelte")) ||
      getMaxPriceByCategory(category, products)
  );

  const initialProgress =
    (pricelte /
      parseInt(getMaxPriceByCategory(category, products).toString(), 10)) *
    100;

  const handlePriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    const tempPrice = parseInt(event.currentTarget.value, 10);
    setPricelte(tempPrice);

    const progress = (tempPrice / parseInt(event.currentTarget.max, 10)) * 100;

    event.currentTarget.style.background = `linear-gradient(to right, #000 ${progress}%, #e5e7eb ${progress}%)`;
  };

  const createPricelteSearchParam = useCallback(
    (price: number) => {
      const params = new URLSearchParams(searchParams);
      params.set("pricelte", price.toString());
      return params.toString();
    },
    [searchParams]
  );

  const createCategorySearchParam = useCallback(
    (category: Category) => {
      const params = new URLSearchParams(searchParams);
      params.set("category", category);
      return params.toString();
    },
    [searchParams]
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setIsFilterOpen(true)}
        style={{ transition: "color 0.2s ease" }}
        className="py-1.5 pr-1.5 flex flex-row items-center text-gray-500 hover:text-yellow-custom active:text-yellow-custom gap-x-0.5"
      >
        <HiOutlineAdjustments className="text-lg relative top-0 sm:top-px z-10" />
        <span className="text-xs sm:text-sm">Filter</span>
      </button>
      <div
        style={{ transition: "left 0.2s ease" }}
        className={`fixed h-full top-0 bg-white w-80 sm:w-88 z-40 flex flex-col ${
          isFilterOpen ? "left-0" : "-left-80 sm:-left-88"
        }`}
      >
        <header className="border-b-1 border-gray-200 bg-black h-14 flex flex-row items-center justify-between">
          <h3 className="text-white pl-4 font-semibold">FILTER</h3>
          <button
            type="button"
            className="close p-4"
            onClick={() => {
              setIsFilterOpen(false);
            }}
          >
            <TfiClose className="text-white text-lg" />
          </button>
        </header>
        <form onSubmit={(e) => e.preventDefault()}>
          <fieldset className="px-4 py-5 border-b-1 border-gray-200">
            <label
              htmlFor="price"
              className={`${libre_caslon_text.className} text-lg`}
            >
              Price
            </label>
            <hr className="w-16 bg-black h-0.5" />
            <input
              type="range"
              min="0"
              max={getMaxPriceByCategory(category, products)}
              value={pricelte}
              id="price"
              className="range mt-7 price"
              onChange={handlePriceChange}
              style={{
                background: `linear-gradient(to right, #000 ${initialProgress}%, #e5e7eb ${initialProgress}%)`,
              }}
            />
            <p className="mt-4 text-sm text-gray-500">
              Price:{" "}
              <span className="text-black font-semibold">
                {currency === "Rupees" &&
                  `PKR 0 — PKR ${pricelte.toLocaleString()}`}
                {currency === "US Dollar" &&
                  `$ 0.00 USD — $ ${(pricelte * Number(dollarRate)).toFixed(
                    2
                  )} USD`}
                {currency === "British Pound" &&
                  `£ 0.00 GBP — ${(pricelte * Number(poundRate)).toFixed(
                    2
                  )} GBP`}
              </span>
            </p>
            <button
              onClick={() => {
                router.push(
                  pathname + "?" + createPricelteSearchParam(pricelte),
                  {
                    scroll: false,
                  }
                );
                setIsFilterOpen(false);
              }}
              style={{ transition: "background 0.2s ease, color 0.2s ease" }}
              type="submit"
              className="text-xs border-black px-6 py-2.5 border-2 mt-3 w-fit font-semibold hover:bg-black active:bg-black hover:text-white active:text-white"
            >
              FILTER
            </button>
          </fieldset>
          <fieldset className="px-4 py-5 border-b-1 border-gray-200">
            <label
              htmlFor="category"
              className={`${libre_caslon_text.className} text-lg`}
            >
              Category
            </label>
            <hr className="w-16 bg-black h-0.5" />
            <div className="mt-4">
              {getCategories(category).map((category, index) => {
                return (
                  <button
                    onClick={() => {
                      router.push(
                        pathname + "?" + createCategorySearchParam(category),
                        {
                          scroll: false,
                        }
                      );
                      setIsFilterOpen(false);
                    }}
                    className="block py-0.5 text-sm"
                    key={index}
                  >
                    {category
                      .split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}{" "}
                    <span className="text-gray-500">
                      (
                      {getItemCountByCategory(
                        category,
                        filterProductsByPrice(
                          Number(searchParams.get("pricelte")) ||
                            getMaxPriceByCategory(category, products),
                          products
                        )
                      )}
                      )
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>
        </form>
      </div>
    </>
  );
}
