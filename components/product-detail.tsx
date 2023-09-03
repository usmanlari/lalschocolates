"use client";

import { Category, Product } from "@/types";
import { imageMapping, libre_caslon_text } from "@/constants";
import { FiMinus, FiPlus, FiHeart } from "react-icons/fi";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import { useRootContext } from "@/context/root-context";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function ProductDetail({
  product,
  category,
  dollarRate,
  poundRate,
}: {
  product: Product;
  category: Category;
  dollarRate: string;
  poundRate: string;
}) {
  const router = useRouter();
  const { currency, wishlist, setWishlist, setIsCartOpen, cart, setCart } =
    useRootContext();
  const [isGreetingCardDropdownOpen, setIsGreetingCardDropdownOpen] =
    useState<boolean>(false);
  const [isDisclaimerDropdownOpen, setIsDisclaimerDropdownOpen] =
    useState<boolean>(false);
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="px-4 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 sm:mt-12 lg:mt-14">
      <div className="flex-1">
        <Image
          src={imageMapping[product.reference as keyof typeof imageMapping]}
          alt=""
          placeholder="blur"
        />
      </div>
      <div className="flex-1">
        <h2 className={`text-2.5xl ${libre_caslon_text.className}`}>
          {product.title}
        </h2>
        <hr className="mt-3 h-1 bg-black w-12 rounded-full" />
        <p className="mt-6 font-semibold text-xl">
          {currency === "Rupees" && `PKR ${product.price.toLocaleString()}`}
          {currency === "US Dollar" &&
            `$ ${(product.price * Number(dollarRate)).toFixed(2)} USD`}
          {currency === "British Pound" &&
            `£ ${(product.price * Number(poundRate)).toFixed(2)} GBP`}
        </p>
        <p className="mt-3 text-sm leading-6">{product.description}</p>
        <p className="mt-3 text-sm font-semibold">
          {category === "cakes" &&
            "Cakes are only available for delivery in Karachi."}
        </p>
        <p className="mt-3 text-sm font-semibold text-green-600">
          {product.categories.includes("free-delivery") &&
            "This product is applicable for FREE DELIVERY in Karachi & Lahore"}
        </p>
        <div className="mt-8 flex flex-row items-center gap-x-2">
          <div className="h-11 flex flex-row border-1 border-black">
            <button
              className="px-3.5 py-2"
              onClick={() => {
                return quantity > 1 ? setQuantity(quantity - 1) : null;
              }}
            >
              <FiMinus />
            </button>
            <div className="px-2.5 w-8 py-2">
              <p className="font-semibold text-center">{quantity}</p>
            </div>
            <button
              className="px-3.5 py-2"
              onClick={() => setQuantity(quantity + 1)}
            >
              <FiPlus />
            </button>
          </div>
          <button
            className="h-11 px-5 py-2 text-white bg-black text-sm font-semibold"
            onClick={() => {
              const newItems = [];
              for (let i = 0; i < quantity; i++) {
                newItems.push(product.reference);
              }
              setCart([...cart, ...newItems]);
              setIsCartOpen(true);
            }}
          >
            ADD TO CART
          </button>
        </div>
        <div className="mt-8">
          {wishlist.includes(product.reference) ? (
            <button
              onClick={() => router.push("/wishlist")}
              className="heart flex flex-row items-center gap-x-1"
            >
              <FaHeart className="text-rose-600 text-sm stroke-2" />
              <span className="text-sm font-semibold">Browse Wishlist</span>
            </button>
          ) : (
            <button
              onClick={() => setWishlist([...wishlist, product.reference])}
              className="heart flex flex-row items-center gap-x-1"
            >
              <FiHeart className="text-sm stroke-2" />
              <span className="text-sm font-semibold">Add to Wishlist</span>
            </button>
          )}
        </div>
        <div className="mt-8">
          <button
            onClick={() =>
              setIsGreetingCardDropdownOpen(!isGreetingCardDropdownOpen)
            }
            className="bg-green-custom text-sm font-semibold w-full flex flex-row items-center justify-between p-2.5"
          >
            Greeting card instructions
            {isGreetingCardDropdownOpen ? <FiMinus /> : <FiPlus />}
          </button>
          <div
            className={`text-sm py-1 px-5 leading-6 overflow-hidden ${
              isGreetingCardDropdownOpen ? "h-fit" : "h-0"
            }`}
          >
            A complimentary greeting card can be included with each purchase.
            The greeting card may be delivered either blank or with a custom
            message of your choice (Limit 180 characters). If you opt for the
            custom message on your card, please specify your desired message in
            the 'Greeting card message box' section at checkout. Your greeting
            card message will appear in the confirmation email that you will
            receive upon submitting your order.
          </div>
        </div>
        <div>
          <button
            onClick={() =>
              setIsDisclaimerDropdownOpen(!isDisclaimerDropdownOpen)
            }
            className="bg-green-custom text-sm font-semibold w-full flex flex-row items-center justify-between p-2.5"
          >
            Disclaimer
            {isDisclaimerDropdownOpen ? <FiMinus /> : <FiPlus />}
          </button>
          <div
            className={`text-sm py-1 px-5 leading-6 overflow-hidden ${
              isDisclaimerDropdownOpen ? "h-fit" : "h-0"
            }`}
          >
            Please note that Lals may modify our product packaging slightly
            based on the availability of raw materials. These changes are made
            with care to maintain our high standards of quality. Thank you for
            your continued support.
          </div>
        </div>
      </div>
    </div>
  );
}
