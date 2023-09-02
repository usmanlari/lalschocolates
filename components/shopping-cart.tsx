"use client";

import type { Product } from "@/types";
import { libre_caslon_text, findItemCategory, imageMapping } from "@/constants";
import { TfiClose } from "react-icons/tfi";
import { BsBagX, BsFillTrash3Fill } from "react-icons/bs";
import { FiPlus, FiMinus } from "react-icons/fi";
import { useRootContext } from "@/context/root-context";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function ShoppingCart({
  products,
  dollarRate,
  poundRate,
}: {
  products: Product[];
  dollarRate: string;
  poundRate: string;
}) {
  const { isCartOpen, setIsCartOpen, currency, cart, setCart } =
    useRootContext();
  const router = useRouter();

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
      {cart.length > 0 ? (
        <div className="h-full flex flex-col justify-between">
          <div className="flex-1 flex flex-col gap-y-4 p-4 overflow-y-auto">
            {products
              .filter((product) => cart.includes(product.reference))
              .map((product, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-row items-center gap-x-4"
                  >
                    <Link
                      href={`/${findItemCategory(product.categories)}/${
                        product.reference
                      }`}
                      onClick={() => setIsCartOpen(false)}
                    >
                      <div className="h-28 w-28 overflow-hidden">
                        <Image
                          src={
                            imageMapping[
                              product.reference as keyof typeof imageMapping
                            ]
                          }
                          alt=""
                          placeholder="blur"
                        />
                      </div>
                    </Link>
                    <div>
                      <Link
                        href={`/${findItemCategory(product.categories)}/${
                          product.reference
                        }`}
                        onClick={() => setIsCartOpen(false)}
                      >
                        <h3 className="text-sm font-medium cart-title">
                          {product.title}
                        </h3>
                      </Link>
                      <p className="mt-1 text-sm text-gray-500">
                        {currency === "Rupees" &&
                          `PKR ${product.price.toLocaleString()}`}
                        {currency === "US Dollar" &&
                          `$ ${(product.price * Number(dollarRate)).toFixed(
                            2
                          )} USD`}
                        {currency === "British Pound" &&
                          `£ ${(product.price * Number(poundRate)).toFixed(
                            2
                          )} GBP`}
                      </p>
                      <div className="mt-2 h-9 w-fit flex flex-row border-1 border-black">
                        <button
                          className="px-2.5 py-1"
                          onClick={() => {
                            setCart(
                              cart
                                .slice(0, cart.indexOf(product.reference))
                                .concat(
                                  cart.slice(
                                    cart.indexOf(product.reference) + 1,
                                    cart.length
                                  )
                                )
                            );
                          }}
                        >
                          <FiMinus />
                        </button>
                        <div className="px-2.5 py-1">
                          <span className="font-semibold">
                            {
                              cart.filter(
                                (item: string) => item === product.reference
                              ).length
                            }
                          </span>
                        </div>
                        <button
                          className="px-2.5 py-1"
                          onClick={() => setCart([...cart, product.reference])}
                        >
                          <FiPlus />
                        </button>
                      </div>
                      <div className="mt-2">
                        <button>
                          <BsFillTrash3Fill
                            className="text-base"
                            onClick={() => {
                              setCart(
                                cart.filter(
                                  (item: string) => item !== product.reference
                                )
                              );
                            }}
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="h-44 p-4 shadow-md cart-shadow">
            <div className="flex flex-row justify-between">
              <div>
                <span className="font-semibold">Subtotal:</span>
              </div>
              <div>
                <span className="font-semibold">
                  {currency === "Rupees" &&
                    `PKR ${cart
                      .reduce((currentTotal: number, item: string) => {
                        const product = products.find(
                          (product) => product.reference === item
                        );
                        return currentTotal + product!.price;
                      }, 0)
                      .toLocaleString()}`}
                  {currency === "US Dollar" &&
                    `$ ${(
                      cart.reduce((currentTotal: number, item: string) => {
                        const product = products.find(
                          (product) => product.reference === item
                        );
                        return currentTotal + product!.price;
                      }, 0) * Number(dollarRate)
                    ).toFixed(2)} USD`}
                  {currency === "British Pound" &&
                    `£ ${(
                      cart.reduce((currentTotal: number, item: string) => {
                        const product = products.find(
                          (product) => product.reference === item
                        );
                        return currentTotal + product!.price;
                      }, 0) * Number(poundRate)
                    ).toFixed(2)} GBP`}
                </span>
              </div>
            </div>
            <div className="mt-4">
              <button
                className="w-full p-2 bg-black text-white text-sm font-semibold"
                onClick={() => {
                  router.push("/cart");
                  setIsCartOpen(false);
                }}
              >
                VIEW CART
              </button>
            </div>
          </div>
        </div>
      ) : (
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
      )}
    </div>
  );
}
