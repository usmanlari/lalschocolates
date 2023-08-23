"use client";

import type { Sort } from "@/types";
import { getSortDisplayValue } from "@/constants";
import { TfiClose } from "react-icons/tfi";
import { VscChevronDown } from "react-icons/vsc";
import { useRootContext } from "@/context/root-context";
import { useState, useCallback } from "react";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

export default function SortBy() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { isSortByOpen, setIsSortByOpen } = useRootContext();
  const [isSortDropdownOpen, setIsSortDropdownOpen] = useState<boolean>(false);
  const [sort, setSort] = useState<Sort>(
    (searchParams.get("sort") as Sort) || "price-asc"
  );

  const createSortSearchParam = useCallback(
    (sort: Sort) => {
      const params = new URLSearchParams(searchParams);
      params.set("sort", sort);
      setSort(sort);
      return params.toString();
    },
    [searchParams]
  );

  return (
    <>
      <div className="relative hidden sm:block w-48 z-10">
        <button
          type="button"
          onClick={() => setIsSortDropdownOpen(!isSortDropdownOpen)}
          onBlur={() => setIsSortDropdownOpen(false)}
          style={{ transition: "color 0.2s ease" }}
          className="h-10 flex flex-row w-full justify-between items-center border-1 border-gray-200 text-gray-500 hover:text-yellow-custom active:text-yellow-custom rounded-3xl px-3.5"
        >
          <span className="text-sm">{getSortDisplayValue(sort)}</span>
          <VscChevronDown
            className={`chevron ${isSortDropdownOpen && "chevron-rotate"}`}
          />
        </button>
        <div
          className={`sort-dropdown absolute top-12 w-48 bg-white text-sm shadow-xl rounded-sm ${
            isSortDropdownOpen && "sort-dropdown-open"
          }`}
        >
          <ul className="py-4">
            <li>
              <button
                type="button"
                onClick={() => {
                  router.push(
                    pathname + "?" + createSortSearchParam("price-asc"),
                    {
                      scroll: false,
                    }
                  );
                  setIsSortDropdownOpen(false);
                }}
                className={`h-11 px-3.5 w-full flex flex-row items-center justify-start ${
                  sort === "price-asc"
                    ? "text-black bg-gray-100"
                    : "text-gray-500 hover:text-black active:text-black hover:bg-gray-100 active:bg-gray-100"
                }`}
              >
                Price, low to high
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  router.push(
                    pathname + "?" + createSortSearchParam("price-desc"),
                    {
                      scroll: false,
                    }
                  );
                  setIsSortDropdownOpen(false);
                }}
                className={`h-11 px-3.5 w-full flex flex-row items-center justify-start ${
                  sort === "price-desc"
                    ? "text-black bg-gray-100"
                    : "text-gray-500 hover:text-black active:text-black hover:bg-gray-100 active:bg-gray-100"
                }`}
              >
                Price, high to low
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  router.push(
                    pathname + "?" + createSortSearchParam("title-asc"),
                    {
                      scroll: false,
                    }
                  );
                  setIsSortDropdownOpen(false);
                }}
                className={`h-11 px-3.5 w-full flex flex-row items-center justify-start ${
                  sort === "title-asc"
                    ? "text-black bg-gray-100"
                    : "text-gray-500 hover:text-black active:text-black hover:bg-gray-100 active:bg-gray-100"
                }`}
              >
                Alphabetically, A-Z
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => {
                  router.push(
                    pathname + "?" + createSortSearchParam("title-desc"),
                    {
                      scroll: false,
                    }
                  );
                  setIsSortDropdownOpen(false);
                }}
                className={`h-11 px-3.5 w-full flex flex-row items-center justify-start ${
                  sort === "title-desc"
                    ? "text-black bg-gray-100"
                    : "text-gray-500 hover:text-black active:text-black hover:bg-gray-100 active:bg-gray-100"
                }`}
              >
                Alphabetically, Z-A
              </button>
            </li>
          </ul>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setIsSortByOpen(true)}
        className="relative py-1.5 pl-1.5 block sm:hidden flex flex-row items-center gap-x-0.5 z-10"
      >
        <span className="text-xs">Sort by</span>
        <VscChevronDown className="relative top-px" />
      </button>
      <div
        style={{ transition: "bottom 0.2s ease" }}
        className={`bg-white h-70 w-full fixed left-0 z-40 ${
          isSortByOpen ? "bottom-0" : "-bottom-70"
        }`}
      >
        <header className="border-b-1 border-gray-200 bg-black h-14 flex flex-row items-center justify-between">
          <h3 className="font-semibold pl-4 text-white">SORT BY</h3>
          <button className="close p-4" onClick={() => setIsSortByOpen(false)}>
            <TfiClose className="text-white text-lg" />
          </button>
        </header>
        <ul className="py-4">
          <li>
            <button
              type="button"
              onClick={() => {
                router.push(
                  pathname + "?" + createSortSearchParam("price-asc"),
                  {
                    scroll: false,
                  }
                );
                setIsSortByOpen(false);
              }}
              className={`h-12 px-4 w-full flex flex-row items-center justify-start ${
                sort === "price-asc"
                  ? "text-black bg-gray-100"
                  : "text-gray-500 hover:text-black active:text-black hover:bg-gray-100 active:bg-gray-100"
              }`}
            >
              Price, low to high
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                router.push(
                  pathname + "?" + createSortSearchParam("price-desc"),
                  {
                    scroll: false,
                  }
                );
                setIsSortByOpen(false);
              }}
              className={`h-12 px-4 w-full flex flex-row items-center justify-start ${
                sort === "price-desc"
                  ? "text-black bg-gray-100"
                  : "text-gray-500 hover:text-black active:text-black hover:bg-gray-100 active:bg-gray-100"
              }`}
            >
              Price, high to low
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                router.push(
                  pathname + "?" + createSortSearchParam("title-asc"),
                  {
                    scroll: false,
                  }
                );
                setIsSortByOpen(false);
              }}
              className={`h-12 px-4 w-full flex flex-row items-center justify-start ${
                sort === "title-asc"
                  ? "text-black bg-gray-100"
                  : "text-gray-500 hover:text-black active:text-black hover:bg-gray-100 active:bg-gray-100"
              }`}
            >
              Alphabetically, A-Z
            </button>
          </li>
          <li>
            <button
              type="button"
              onClick={() => {
                router.push(
                  pathname + "?" + createSortSearchParam("title-desc"),
                  {
                    scroll: false,
                  }
                );
                setIsSortByOpen(false);
              }}
              className={`h-12 px-4 w-full flex flex-row items-center justify-start ${
                sort === "title-desc"
                  ? "text-black bg-gray-100"
                  : "text-gray-500 hover:text-black active:text-black hover:bg-gray-100 active:bg-gray-100"
              }`}
            >
              Alphabetically, Z-A
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
