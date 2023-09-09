"use client";

import { Product } from "@/types";
import { useRootContext } from "@/context/root-context";
import { findItemCategory, imageMapping } from "@/constants";
import Link from "next/link";
import Image from "next/image";
import { BsBagX, BsFillTrash3Fill } from "react-icons/bs";
import { FiMinus, FiPlus } from "react-icons/fi";

export default function CartList({
  products,
  dollarRate,
  poundRate,
}: {
  products: Product[];
  dollarRate: string;
  poundRate: string;
}) {
  const { currency, cart, setCart } = useRootContext();

  return (
    <>
      {cart.length > 0 ? (
        <div className="px-4 mt-10 sm:mt-12 lg:mt-14 mx-auto md:max-w-7xl">
          <div className="w-full hidden md:flex flex-row text-sm font-semibold pb-2 gap-x-8">
            <div className="flex-1">
              <span>PRODUCT</span>
            </div>
            <div className="flex-1 flex flex-row justify-between">
              <div>
                <span>PRICE</span>
              </div>
              <div>
                <span>QUANTITY</span>
              </div>
              <div>
                <span>TOTAL</span>
              </div>
            </div>
          </div>
          {products
            .filter((product) => cart.includes(product.reference))
            .map((product, index) => {
              return (
                <div
                  key={index}
                  className="w-full flex flex-row py-4 border-t-1 border-gray-200 gap-x-2 md:gap-x-8 items-center"
                >
                  <div className="md:flex-1 flex flex-row items-center gap-x-4">
                    <Link
                      href={`/${findItemCategory(product.categories)}/${
                        product.reference
                      }`}
                    >
                      <div className="h-36 w-36 md:h-32 md:w-32 overflow-hidden">
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
                    <div className="flex flex-col gap-y-2">
                      <div className="hidden md:block">
                        <Link
                          href={`/${findItemCategory(product.categories)}/${
                            product.reference
                          }`}
                        >
                          <span className="text-sm font-medium">
                            {product.title}
                          </span>
                        </Link>
                      </div>
                      <div className="hidden md:block">
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
                  <div className="flex-1 flex flex-col md:flex-row justify-between items-start md:items-center gap-y-2">
                    <div className="block md:hidden">
                      <Link
                        href={`/${findItemCategory(product.categories)}/${
                          product.reference
                        }`}
                      >
                        <span className="text-sm font-medium">
                          {product.title}
                        </span>
                      </Link>
                    </div>
                    <div className="block md:hidden">
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
                    <div>
                      <span className="text-sm">
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
                      </span>
                    </div>
                    <div className="h-9 w-fit flex flex-row border-1 border-black">
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
                      <div className="px-1.5 w-8 py-1">
                        <p className="font-semibold text-center">
                          {
                            cart.filter(
                              (item: string) => item === product.reference
                            ).length
                          }
                        </p>
                      </div>
                      <button
                        className="px-2.5 py-1"
                        onClick={() => setCart([...cart, product.reference])}
                      >
                        <FiPlus />
                      </button>
                    </div>
                    <div className="hidden md:block">
                      <span className="text-sm">
                        {currency === "Rupees" &&
                          `PKR ${cart
                            .reduce((currentTotal: number, item: string) => {
                              if (item === product.reference) {
                                return currentTotal + product!.price;
                              }
                              return currentTotal;
                            }, 0)
                            .toLocaleString()}`}
                        {currency === "US Dollar" &&
                          `$ ${(
                            cart.reduce(
                              (currentTotal: number, item: string) => {
                                if (item === product.reference) {
                                  return currentTotal + product!.price;
                                }
                                return currentTotal;
                              },
                              0
                            ) * Number(dollarRate)
                          ).toFixed(2)} USD`}
                        {currency === "British Pound" &&
                          `£ ${(
                            cart.reduce(
                              (currentTotal: number, item: string) => {
                                if (item === product.reference) {
                                  return currentTotal + product!.price;
                                }
                                return currentTotal;
                              },
                              0
                            ) * Number(poundRate)
                          ).toFixed(2)} GBP`}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      ) : (
        <div className="max-w-7xl mx-auto px-4">
          <div className="px-4 mx-auto py-32 flex flex-col items-center gap-y-6">
            <BsBagX className="text-8xl" />
            <h3 className="text-3xl font-bold text-center">
              YOUR CART IS EMPTY
            </h3>
            <div>
              <p className="text-sm text-center">
                Before proceed to checkout you must add some products to your
                shopping cart.
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
        </div>
      )}
    </>
  );
}
