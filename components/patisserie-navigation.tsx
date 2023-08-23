"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PatisserieNavigation() {
  const isActive = usePathname().split("/")[1];

  return (
    <nav className="mt-10 sm:mt-12 lg:mt-14">
      <ul className="flex flex-row items-center justify-center flex-wrap px-4 gap-y-6 sm:gap-y-8 lg:gap-y-10 gap-x-2 sm:gap-x-4 lg:gap-x-6 text-xs sm:text-sm lg:text-base">
        <li>
          <Link
            style={{ transition: "color 0.2s ease" }}
            className={`${
              isActive === "macarons"
                ? "bg-green-custom font-semibold rounded-md"
                : "text-black hover:text-yellow-custom active:text-yellow-custom"
            } p-3`}
            href="/macarons"
          >
            MACARONS
          </Link>
        </li>
        <li>
          <Link
            style={{ transition: "color 0.2s ease" }}
            className={`${
              isActive === "snackables"
                ? "bg-green-custom font-semibold rounded-md"
                : "text-black hover:text-yellow-custom active:text-yellow-custom"
            } p-3`}
            href="/snackables"
          >
            SNACKABLES
          </Link>
        </li>
        <li>
          <Link
            style={{ transition: "color 0.2s ease" }}
            className={`${
              isActive === "cakes"
                ? "bg-green-custom font-semibold rounded-md"
                : "text-black hover:text-yellow-custom active:text-yellow-custom"
            } p-3`}
            href="/cakes"
          >
            CAKES
          </Link>
        </li>
      </ul>
    </nav>
  );
}
