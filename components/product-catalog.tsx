"use client";

import type { Category, Product, Sort } from "@/types";
import {
  imageMapping,
  getMaxPriceByCategory,
  filterProductsByCategory,
  sortProducts,
  filterProductsByPrice,
  findItemCategory,
} from "@/constants";
import { TfiClose } from "react-icons/tfi";
import { useRootContext } from "@/context/root-context";
import Filter from "./filter";
import SortBy from "./sort-by";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";

export default function ProductCatalog({
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
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { currency, setIsCartOpen, wishlist, setWishlist, cart, setCart } =
    useRootContext();

  const removeSearchParam = (...names: string[]) => {
    const params = new URLSearchParams(searchParams);

    names.forEach((name) => {
      params.delete(name);
    });
    return params.toString();
  };

  return (
    <section className="mt-6 sm:mt-8 lg:mt-10">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-row items-center justify-between">
          <Filter
            category={category}
            products={products}
            dollarRate={dollarRate}
            poundRate={poundRate}
          />
          <SortBy />
        </div>
        {(searchParams.has("category") || searchParams.has("pricelte")) && (
          <div className="flex flex-row items-center justify-start flex-wrap gap-y-2 mt-6 sm:mt-8 lg:mt-10">
            {(searchParams.has("category") || searchParams.has("pricelte")) && (
              <div className="pr-3">
                <span className="text-sm font-semibold">
                  {
                    sortProducts(
                      searchParams.has("sort")
                        ? (searchParams.get("sort") as Sort)
                        : "price-asc",
                      filterProductsByPrice(
                        Number(searchParams.get("pricelte")) ||
                          getMaxPriceByCategory(category, products),
                        filterProductsByCategory(
                          (searchParams.get("category") as Category) ||
                            category,
                          products
                        )
                      )
                    ).length
                  }{" "}
                  Products Found
                </span>
              </div>
            )}
            {searchParams.has("pricelte") && (
              <div className="px-3 border-l-1 border-gray-300">
                <button
                  onClick={() => {
                    router.push(
                      pathname + "?" + removeSearchParam("pricelte"),
                      {
                        scroll: false,
                      }
                    );
                  }}
                  type="button"
                  style={{ transition: "color 0.2s ease" }}
                  className="py-1.5 flex flex-row items-center gap-x-1.5 text-black hover:text-yellow-custom active:text-yellow-custom"
                >
                  <TfiClose className="text-2xs stroke-2" />
                  <span className="text-sm">
                    {currency === "Rupees" &&
                      `PKR 0 — PKR ${Number(
                        searchParams.get("pricelte")
                      ).toLocaleString()}`}
                    {currency === "US Dollar" &&
                      `$ 0.00 USD — $ ${(
                        Number(searchParams.get("pricelte")) *
                        Number(dollarRate)
                      ).toFixed(2)} USD`}
                    {currency === "British Pound" &&
                      `£ 0.00 GBP — ${(
                        Number(searchParams.get("pricelte")) * Number(poundRate)
                      ).toFixed(2)} GBP`}
                  </span>
                </button>
              </div>
            )}
            {searchParams?.has("category") && (
              <div className="px-3 border-l-1 border-gray-300">
                <button
                  onClick={() => {
                    router.push(
                      pathname + "?" + removeSearchParam("category"),
                      {
                        scroll: false,
                      }
                    );
                  }}
                  style={{ transition: "color 0.2s ease" }}
                  type="button"
                  className="py-1.5 flex flex-row items-center gap-x-1.5 text-black hover:text-yellow-custom active:text-yellow-custom"
                >
                  <TfiClose className="text-2xs stroke-2" />
                  <span className="text-sm">
                    {searchParams
                      ?.get("category")
                      ?.split("-")
                      .map(
                        (word) => word.charAt(0).toUpperCase() + word.slice(1)
                      )
                      .join(" ")}
                  </span>
                </button>
              </div>
            )}
            {searchParams.has("category") && searchParams.has("pricelte") && (
              <div className="px-3 border-l-1 border-gray-300">
                <button
                  onClick={() => {
                    router.push(
                      pathname +
                        "?" +
                        removeSearchParam("pricelte", "category"),
                      {
                        scroll: false,
                      }
                    );
                  }}
                  style={{ transition: "color 0.2s ease" }}
                  type="button"
                  className="flex flex-row items-center gap-x-1.5 bg-black text-white rounded-full px-3 py-1.5"
                >
                  <TfiClose className="text-2xs stroke-2" />
                  <span className="text-sm">Clear All Filters</span>
                </button>
              </div>
            )}
          </div>
        )}
        {sortProducts(
          searchParams.has("sort")
            ? (searchParams.get("sort") as Sort)
            : "price-asc",
          filterProductsByPrice(
            Number(searchParams.get("pricelte")) ||
              getMaxPriceByCategory(category, products),
            filterProductsByCategory(
              (searchParams.get("category") as Category) || category,
              products
            )
          )
        ).length > 0 && (
          <div className="mt-10 sm:mt-12 lg:mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
            {sortProducts(
              searchParams.has("sort")
                ? (searchParams.get("sort") as Sort)
                : "price-asc",
              filterProductsByPrice(
                Number(searchParams.get("pricelte")) ||
                  getMaxPriceByCategory(category, products),
                filterProductsByCategory(
                  (searchParams.get("category") as Category) || category,
                  products
                )
              )
            ).map((product, index) => {
              return (
                <div key={index} className="flex flex-col">
                  <div className="relative overflow-hidden max-h-76 flex-1">
                    <Link
                      href={`/${findItemCategory(product.categories)}/${
                        product.reference
                      }`}
                    >
                      <Image
                        className="product-catalog-image h-full w-full"
                        src={
                          imageMapping[
                            product.reference as keyof typeof imageMapping
                          ]
                        }
                        alt=""
                        placeholder="blur"
                      />
                    </Link>
                    <div className="absolute flex flex-row items-center top-2 sm:top-4 left-2 cursor-pointer">
                      {wishlist.includes(product.reference) ? (
                        <>
                          <button
                            className="heart p-2"
                            onClick={() => router.push("/wishlist")}
                          >
                            <FaHeart className="text-rose-600 text-lg sm:text-xl" />
                          </button>
                          <div className="relative -top-px hidden lg:flex flex-row justify-center items-center">
                            <div className="border-6 border-y-transparent border-l-transparent border-black w-0 h-0"></div>
                            <span className="py-1 px-3 bg-black text-white text-xs font-bold">
                              Browse Wishlist
                            </span>
                          </div>
                        </>
                      ) : (
                        <>
                          <button
                            className="heart p-2"
                            onClick={() =>
                              setWishlist([...wishlist, product.reference])
                            }
                          >
                            <FiHeart className="text-lg sm:text-xl" />
                          </button>
                          <div className="relative -top-px hidden lg:flex flex-row justify-center items-center">
                            <div className="border-6 border-y-transparent border-l-transparent border-black w-0 h-0"></div>
                            <span className="py-1 px-3 bg-black text-white text-xs font-bold">
                              Add to Wishlist
                            </span>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                  <Link
                    href={`/${findItemCategory(product.categories)}/${
                      product.reference
                    }`}
                    className="text-center"
                  >
                    <h3 className="mt-2.5 md:mt-3.5 libre-caslon-text text-sm md:text-base">
                      {product.title}
                    </h3>
                  </Link>
                  <p className="product-catalog-description mt-2.5 md:mt-3.5 text-xs">
                    {product.description}
                  </p>
                  <p className="mt-2.5 md:mt-3.5 text-base font-medium text-center text-sm md:text-base">
                    {currency === "Rupees" &&
                      `PKR ${product.price.toLocaleString()}`}
                    {currency === "US Dollar" &&
                      `$ ${(product.price * Number(dollarRate)).toFixed(
                        2
                      )} USD`}
                    {currency === "British Pound" &&
                      `£ ${(product.price * Number(poundRate)).toFixed(2)} GBP`}
                  </p>
                  <div className="flex flex-row items-center justify-center mt-2.5 md:mt-3.5">
                    <button
                      type="button"
                      style={{
                        transition: "color 0.2s ease, border 0.2s ease",
                      }}
                      className="text-xs font-medium border-black border-1 py-1.5 px-6 hover:text-yellow-custom hover:border-yellow-custom active:text-yellow-custom active:border-yellow-custom"
                      onClick={() => {
                        setCart([...cart, product.reference]);
                        setIsCartOpen(true);
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
