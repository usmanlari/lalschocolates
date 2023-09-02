"use client";

import type { Product } from "@/types";
import { findItemCategory, imageMapping } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { BsFillTrash3Fill } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";
import { useRootContext } from "@/context/root-context";

export default function WishlistCatalog({
  products,
  dollarRate,
  poundRate,
}: {
  products: Product[];
  dollarRate: string;
  poundRate: string;
}) {
  const { currency, wishlist, setWishlist, setIsCartOpen, cart, setCart } =
    useRootContext();

  return (
    <div className="max-w-7xl mx-auto px-4">
      {wishlist.length > 0 ? (
        <div className="mt-10 sm:mt-12 lg:mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8">
          {products
            .filter((product) => wishlist.includes(product.reference))
            .map((product, index) => {
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
                      <button
                        className="trash p-2"
                        onClick={() => {
                          setWishlist(
                            wishlist.filter(
                              (item: String) => item !== product.reference
                            )
                          );
                        }}
                      >
                        <BsFillTrash3Fill className="text-lg sm:text-xl" />
                      </button>
                      <div className="relative -top-px hidden lg:flex flex-row justify-center items-center">
                        <div className="border-6 border-y-transparent border-l-transparent border-black w-0 h-0"></div>
                        <span className="py-1 px-3 bg-black text-white text-xs font-bold">
                          Remove from Wishlist
                        </span>
                      </div>
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
      ) : (
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
      )}
    </div>
  );
}
