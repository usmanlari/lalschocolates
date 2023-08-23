import { VscChevronDown } from "react-icons/vsc";
import ChocolateBars from "@/app/images/chocolate-bars.webp";
import ChocolateBarks from "@/app/images/chocolate-barks.webp";
import Snackables from "@/app/images/snackables.webp";
import Macarons from "@/app/images/macarons.webp";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const isActive = usePathname().split("/")[1];
  const [isChocolatesDropdownOpen, setIsChocolatesDropdownOpen] =
    useState<boolean>(false);
  const [isPatisserieDropdownOpen, setIsPatisserieDropdownOpen] =
    useState<boolean>(false);

  return (
    <nav className="max-w-7xl mx-auto px-4 hidden lg:block border-gray-200 border-t-1">
      <ul className="flex flex-row justify-center h-full items-center gap-x-2 relative">
        <li className="h-full">
          <Link
            href="/free-delivery"
            style={{ transition: "color 0.2s ease" }}
            className={`h-full p-4 text-base text-black flex flex-row items-center ${
              isActive === "free-delivery"
                ? "font-bold"
                : "hover:text-yellow-custom"
            }`}
          >
            FREE DELIVERY
          </Link>
        </li>
        <li
          className={`dropdown ${
            isChocolatesDropdownOpen && "dropdown-open"
          } h-full`}
          onMouseEnter={() => setIsChocolatesDropdownOpen(true)}
          onMouseLeave={() => setIsChocolatesDropdownOpen(false)}
        >
          <Link
            href="/chocolates"
            style={{ transition: "color 0.2s ease" }}
            className={`h-full p-4 text-base text-black flex flex-row items-center gap-x-1.5 ${
              isActive === "chocolates" ||
              isActive === "chocolate-bars" ||
              isActive === "chocolate-barks" ||
              isActive === "chocolate-platters"
                ? "font-bold"
                : "hover:text-yellow-custom"
            }`}
            onClick={() => setIsChocolatesDropdownOpen(false)}
          >
            <span>CHOCOLATES</span>
            <VscChevronDown />
          </Link>
          <div className="w-200 h-72 shadow-lg absolute bg-green-custom left-60 p-6 flex flex-row gap-x-6 text-sm">
            <div className="flex-1">
              <ul>
                <li className="border-b-1 border-yellow-custom flex flex-row">
                  <Link
                    className="pb-2 font-medium"
                    href="/chocolates"
                    onClick={() => setIsChocolatesDropdownOpen(false)}
                  >
                    CHOCOLATES
                  </Link>
                </li>
                <li className="flex flex-row">
                  <Link
                    style={{ transition: "color 0.2s ease" }}
                    className="pt-2 pb-1 text-gray-500 hover:text-black"
                    href="/chocolate-bars"
                    onClick={() => setIsChocolatesDropdownOpen(false)}
                  >
                    Chocolate Bars
                  </Link>
                </li>
                <li className="flex flex-row">
                  <Link
                    style={{ transition: "color 0.2s ease" }}
                    className="pt-2 pb-1 text-gray-500 hover:text-black"
                    href="/chocolate-barks"
                    onClick={() => setIsChocolatesDropdownOpen(false)}
                  >
                    Chocolate Barks
                  </Link>
                </li>
                <li className="flex flex-row">
                  <Link
                    style={{ transition: "color 0.2s ease" }}
                    className="pt-2 pb-1 text-gray-500 hover:text-black"
                    href="/chocolate-platters"
                    onClick={() => setIsChocolatesDropdownOpen(false)}
                  >
                    Chocolate Platters
                  </Link>
                </li>
              </ul>
            </div>
            <div className="relative flex-1">
              <Image className="h-full w-full" src={ChocolateBars} alt="" />
              <Link
                className="dropdown-backdrop absolute w-full h-full top-0 left-0"
                href="/chocolate-bars"
                onClick={() => setIsChocolatesDropdownOpen(false)}
              >
                <div className="absolute top-36 w-full">
                  <div className="flex flex-row justify-center">
                    <span className="text-white text-lg font-bold">
                      CHOCOLATE BARS
                    </span>
                  </div>
                  <div className="flex flex-row justify-center">
                    <span className="text-white text-2xs font-bold bg-yellow-custom py-0.5 px-6">
                      SHOP NOW
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="relative flex-1">
              <Image className="h-full w-full" src={ChocolateBarks} alt="" />
              <Link
                className="dropdown-backdrop absolute w-full h-full top-0 left-0"
                href="/chocolate-barks"
                onClick={() => setIsChocolatesDropdownOpen(false)}
              >
                <div className="absolute top-36 w-full">
                  <div className="flex flex-row justify-center">
                    <span className="text-white text-lg font-bold">
                      CHOCOLATE BARKS
                    </span>
                  </div>
                  <div className="flex flex-row justify-center">
                    <span className="text-white text-2xs font-bold bg-yellow-custom py-0.5 px-6">
                      SHOP NOW
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </li>
        <li
          className={`dropdown ${
            isPatisserieDropdownOpen && "dropdown-open"
          } h-full`}
          onMouseEnter={() => setIsPatisserieDropdownOpen(true)}
          onMouseLeave={() => setIsPatisserieDropdownOpen(false)}
        >
          <Link
            href="/patisserie"
            style={{ transition: "color 0.2s ease" }}
            className={`h-full p-4 text-base text-black flex flex-row items-center gap-x-1.5 ${
              isActive === "patisserie" ||
              isActive === "macarons" ||
              isActive === "snackables" ||
              isActive === "cakes"
                ? "font-bold"
                : "hover:text-yellow-custom"
            }`}
            onClick={() => setIsPatisserieDropdownOpen(false)}
          >
            <span>PATISSERIE</span>
            <VscChevronDown />
          </Link>
          <div className="w-200 h-72 shadow-lg absolute bg-green-custom left-60 p-6 flex flex-row gap-x-6 text-sm">
            <div className="flex-1">
              <ul>
                <li className="border-b-1 border-yellow-custom flex flex-row">
                  <Link
                    className="pb-2 font-medium"
                    href="/patisserie"
                    onClick={() => setIsPatisserieDropdownOpen(false)}
                  >
                    PATISSERIE
                  </Link>
                </li>
                <li className="flex flex-row">
                  <Link
                    style={{ transition: "color 0.2s ease" }}
                    className="pt-2 pb-1 text-gray-500 hover:text-black"
                    href="/macarons"
                    onClick={() => setIsPatisserieDropdownOpen(false)}
                  >
                    Macarons
                  </Link>
                </li>
                <li className="flex flex-row">
                  <Link
                    style={{ transition: "color 0.2s ease" }}
                    className="pt-2 pb-1 text-gray-500 hover:text-black"
                    href="/snackables"
                    onClick={() => setIsPatisserieDropdownOpen(false)}
                  >
                    Snackables
                  </Link>
                </li>
                <li className="flex flex-row">
                  <Link
                    style={{ transition: "color 0.2s ease" }}
                    className="pt-2 pb-1 text-gray-500 hover:text-black"
                    href="/cakes"
                    onClick={() => setIsPatisserieDropdownOpen(false)}
                  >
                    Cakes
                  </Link>
                </li>
              </ul>
            </div>
            <div className="relative flex-1">
              <Image className="h-full w-full" src={Macarons} alt="" />
              <Link
                className="dropdown-backdrop absolute w-full h-full top-0 left-0"
                href="/macarons"
                onClick={() => setIsPatisserieDropdownOpen(false)}
              >
                <div className="absolute top-36 w-full">
                  <div className="flex flex-row justify-center">
                    <span className="text-white text-lg font-bold">
                      MACARONS
                    </span>
                  </div>
                  <div className="flex flex-row justify-center">
                    <span className="text-white text-2xs font-bold bg-yellow-custom py-0.5 px-6">
                      SHOP NOW
                    </span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="relative flex-1">
              <Image className="h-full w-full" src={Snackables} alt="" />
              <Link
                className="dropdown-backdrop absolute w-full h-full top-0 left-0"
                href="/snackables"
                onClick={() => setIsPatisserieDropdownOpen(false)}
              >
                <div className="absolute top-36 w-full">
                  <div className="flex flex-row justify-center">
                    <span className="text-white text-lg font-bold">
                      SNACKABLES
                    </span>
                  </div>
                  <div className="flex flex-row justify-center">
                    <span className="text-white text-2xs font-bold bg-yellow-custom py-0.5 px-6">
                      SHOP NOW
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </li>
      </ul>
    </nav>
  );
}
