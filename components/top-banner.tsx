"use client";

import { getFlag } from "@/constants";
import { BsTelephone } from "react-icons/bs";
import { VscChevronDown } from "react-icons/vsc";
import { useRootContext } from "@/context/root-context";
import { useState } from "react";
import Link from "next/link";

export default function TopBanner() {
  const { currency, setCurrency } = useRootContext();
  const [isCurrencyDropdownOpen, setIsCurrencyDropdownOpen] =
    useState<boolean>(false);

  return (
    <section className={`lg:h-12 bg-green-custom`}>
      <div className="max-w-7xl h-full mx-auto px-4 py-2 lg:py-0 flex flex-col lg:flex-row items-center gap-y-1.5 lg:gap-y-0">
        <a
          href="tel:+923041115257"
          className="h-full flex flex-row items-center gap-x-1"
        >
          <BsTelephone />
          <span className="text-xs">+92-304-111-LALS</span>
        </a>
        <div className="lg:flex-1 mx-4 h-full w-full overflow-hidden">
          <div className="animate-container h-full lg:max-w-md flex flex-row justify-center">
            <Link
              className="hover-link text-black hover:text-yellow-custom active:text-yellow-custom text-xs whitespace-nowrap flex flex-row items-center justify-center h-full"
              href="/products"
            >
              You can place your order now. Deliveries will start from 4th
              August 2023.
            </Link>
          </div>
        </div>
        <div
          className={`dropdown ${
            isCurrencyDropdownOpen ? "dropdown-open" : ""
          } h-full relative hidden lg:block`}
          onMouseEnter={() => setIsCurrencyDropdownOpen(true)}
          onMouseLeave={() => setIsCurrencyDropdownOpen(false)}
        >
          <button className="h-full flex flex-row items-center gap-x-1">
            <img className="h-3 w-4" src={getFlag(currency)} alt="" />
            <span className="text-xs">{currency}</span>
            <VscChevronDown className="relative top-px" />
          </button>
          <div className="shadow-md rounded-sm absolute top-10 -right-2 w-32 py-3.5 px-3 bg-gray-100 z-30">
            <ul className="flex flex-col gap-y-1">
              <li
                style={{ transition: "color 0.2s ease" }}
                className={`flex flex-row items-center gap-x-1 cursor-pointer ${
                  currency === "British Pound"
                    ? "text-black"
                    : "text-gray-500 hover:text-yellow-custom"
                }`}
                onClick={() => {
                  if (currency !== "British Pound") {
                    setCurrency("British Pound");
                    setIsCurrencyDropdownOpen(false);
                  }
                }}
              >
                <img className="h-3 w-4" src="/assets/gb.svg" alt="" />
                <span className="text-xs">British Pound</span>
              </li>
              <li
                style={{ transition: "color 0.2s ease" }}
                className={`flex flex-row items-center gap-x-1 cursor-pointer ${
                  currency === "Rupees"
                    ? "text-black"
                    : "text-gray-500 hover:text-yellow-custom"
                }`}
                onClick={() => {
                  if (currency !== "Rupees") {
                    setCurrency("Rupees");
                    setIsCurrencyDropdownOpen(false);
                  }
                }}
              >
                <img className="h-3 w-4" src="/assets/pk.svg" alt="" />
                <span className="text-xs">Rupees</span>
              </li>
              <li
                style={{ transition: "color 0.2s ease" }}
                className={`flex flex-row items-center gap-x-1 cursor-pointer ${
                  currency === "US Dollar"
                    ? "text-black"
                    : "text-gray-500 hover:text-yellow-custom"
                }`}
                onClick={() => {
                  if (currency !== "US Dollar") {
                    setCurrency("US Dollar");
                    setIsCurrencyDropdownOpen(false);
                  }
                }}
              >
                <img className="h-3 w-4" src="/assets/us.svg" alt="" />
                <span className="text-xs">US Dollar</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
