"use client";

import type { Product } from "@/types";
import { FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import { libre_caslon_text } from "@/constants";
import Link from "next/link";
import { findItemCategory, imageMapping } from "@/constants";
import Image from "next/image";
import { useRootContext } from "@/context/root-context";
import { useRouter } from "next/navigation";

export default function Extras({
  products,
  product,
  dollarRate,
  poundRate,
}: {
  products: Product[];
  product: Product;
  dollarRate: string;
  poundRate: string;
}) {
  const { currency, wishlist, setWishlist, setIsCartOpen, cart, setCart } =
    useRootContext();
  const router = useRouter();
  const index = products.findIndex((item) => {
    return item.reference === product.reference;
  });
  const newIndex = index % 49;

  return (
    <div className="px-4 mx-auto max-w-7xl mt-10 sm:mt-12 lg:mt-14">
      <h2 className={`text-center ${libre_caslon_text.className}`}>
        YOU MAY ALSO LIKE
      </h2>
      <hr className="bg-yellow-custom mt-2 h-px sm:h-0.5"></hr>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 mt-6 sm:mt-8 lg:mt-10">
        {products.slice(newIndex + 1, newIndex + 5).map((product, index) => {
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
                  `$ ${(product.price * Number(dollarRate)).toFixed(2)} USD`}
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
    </div>
  );
}
