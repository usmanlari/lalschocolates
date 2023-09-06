"use client";

import { libre_caslon_text } from "@/constants";
import { TfiClose } from "react-icons/tfi";
import { PiPlusLight, PiMinusLight } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { useRootContext } from "@/context/root-context";
import { useState } from "react";
import Link from "next/link";

export default function Menu() {
  const { isMenuOpen, setIsMenuOpen } = useRootContext();
  const [isMenuChocolatesDropdownOpen, setIsMenuChocolatesDropdownOpen] =
    useState(false);
  const [isMenuPatisserieDropdownOpen, setIsMenuPatisserieDropdownOpen] =
    useState(false);

  return (
    <div
      style={{ transition: "left 0.2s ease" }}
      className={`bg-white w-72 sm:w-80 h-full fixed top-0 z-40 ${
        isMenuOpen ? "left-0" : "-left-72 sm:-left-80"
      }`}
    >
      <button
        type="button"
        style={{ transition: "opacity 0.1s ease, visibility 0.1s ease" }}
        className={`absolute h-12 w-12 -right-12 bg-black ${
          isMenuOpen ? "opacity-70 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <TfiClose className="text-2xl mx-auto text-white" />
      </button>
      <header className="h-14 bg-green-custom border-b-2  border-gray-800 flex flex-row items-center justify-center">
        <span className="text-xs font-medium">MENU</span>
      </header>
      <nav>
        <ul className={`${libre_caslon_text.className} text-sm`}>
          <li className="h-12 border-b-1 border-gray-200">
            <Link
              className="px-4 h-full flex flex-row items-center justify-start hover:bg-gray-100 active:bg-gray-100"
              href="/free-delivery"
              onClick={() => setIsMenuOpen(false)}
            >
              Free Delivery
            </Link>
          </li>
          <li>
            <div className="h-12 relative h-full flex flex-row border-b-1 border-gray-200">
              <Link
                className="px-4 h-12 flex-1 flex flex-row items-center justify-start hover:bg-gray-100 active:bg-gray-100"
                href="/chocolates"
                onClick={() => setIsMenuOpen(false)}
              >
                Chocolates
              </Link>
              <button
                type="button"
                className="px-4 my-1 border-l-1"
                onClick={() =>
                  setIsMenuChocolatesDropdownOpen(!isMenuChocolatesDropdownOpen)
                }
              >
                <PiPlusLight
                  className={`plus relative top-2 text-lg ${
                    isMenuChocolatesDropdownOpen && "plus-rotate"
                  }`}
                />
                <PiMinusLight
                  className={`minus relative -top-2.5 text-lg ${
                    isMenuChocolatesDropdownOpen && "minus-rotate"
                  }`}
                />
              </button>
            </div>
            <ul
              style={{ transition: "height 0.2s ease" }}
              className={`overflow-hidden ${
                isMenuChocolatesDropdownOpen ? "h-36" : "h-0"
              }`}
            >
              <li className="h-12 text-gray-500 border-b-1 border-gray-200">
                <Link
                  href="/chocolate-bars"
                  className="px-6 h-full flex flex-row items-center justify-start hover:bg-gray-100 active:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Chocolate Bars
                </Link>
              </li>
              <li className="h-12 text-gray-500 border-b-1 border-gray-200">
                <Link
                  href="/chocolate-barks"
                  className="px-6 h-full flex flex-row items-center justify-start hover:bg-gray-100 active:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Chocolate Barks
                </Link>
              </li>
              <li className="h-12 text-gray-500 border-b-1 border-gray-200">
                <Link
                  href="/chocolate-platters"
                  className="px-6 h-full flex flex-row items-center justify-start hover:bg-gray-100 active:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Chocolate Platters
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <div className="h-12 relative h-full flex flex-row border-b-1 border-gray-200">
              <Link
                className="px-4 h-12 flex-1 flex flex-row items-center justify-start hover:bg-gray-100 active:bg-gray-100"
                href="/patisserie"
                onClick={() => setIsMenuOpen(false)}
              >
                Patisserie
              </Link>
              <button
                type="button"
                className="px-4 my-1 border-l-1"
                onClick={() =>
                  setIsMenuPatisserieDropdownOpen(!isMenuPatisserieDropdownOpen)
                }
              >
                <PiPlusLight
                  className={`plus relative top-2 text-lg ${
                    isMenuPatisserieDropdownOpen && "plus-rotate"
                  }`}
                />
                <PiMinusLight
                  className={`minus relative -top-2.5 text-lg ${
                    isMenuPatisserieDropdownOpen && "minus-rotate"
                  }`}
                />
              </button>
            </div>
            <ul
              style={{ transition: "height 0.2s ease" }}
              className={`overflow-hidden ${
                isMenuPatisserieDropdownOpen ? "h-36" : "h-0"
              }`}
            >
              <li className="h-12 text-gray-500 border-b-1 border-gray-200">
                <Link
                  href="/macarons"
                  className="px-6 h-full flex flex-row items-center justify-start hover:bg-gray-100 active:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Macarons
                </Link>
              </li>
              <li className="h-12 text-gray-500 border-b-1 border-gray-200">
                <Link
                  href="/snackables"
                  className="px-6 h-full flex flex-row items-center justify-start hover:bg-gray-100 active:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Snackables
                </Link>
              </li>
              <li className="h-12 text-gray-500 border-b-1 border-gray-200">
                <Link
                  href="/cakes"
                  className="px-6 h-full flex flex-row items-center justify-start hover:bg-gray-100 active:bg-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Cakes
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div
        className={`px-4 py-3 border-b-1 border-gray-200 ${libre_caslon_text.className}`}
      >
        <p className="text-sm">Contact us</p>
        <a
          href="tel:+923071115257"
          className="flex flex-row items-center justify-start gap-x-1.5 mt-2.5"
        >
          <BsTelephone />
          <span className="text-sm">+92307-111LALS</span>
        </a>
        <a
          href="mailto:lals@siardigital.com"
          className="flex flex-row items-center justify-start gap-x-2 mt-2.5"
        >
          <GoMail />
          <span className="text-sm">lals@siardigital.com</span>
        </a>
      </div>
    </div>
  );
}
