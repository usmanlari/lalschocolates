"use client";

import { libre_caslon_text, getFlag } from "@/constants";
import { TfiClose } from "react-icons/tfi";
import { VscChevronDown } from "react-icons/vsc";
import { useRootContext } from "@/context/root-context";

export default function CurrencyConverter() {
  const {
    currency,
    setCurrency,
    isCurrencyConverterOpen,
    setIsCurrencyConverterOpen,
  } = useRootContext();

  return (
    <>
      <button
        type="button"
        className="block lg:hidden fixed z-30 bottom-16 sm:bottom-18 left-3 bg-gray-100 rounded-sm shadow-md p-3 flex flex-row items-center gap-x-1"
        onClick={() => setIsCurrencyConverterOpen(true)}
      >
        <img className="h-3 w-4" src={getFlag(currency)} alt="" />
        <span className="text-xs">{currency}</span>
        <VscChevronDown className="relative top-px" />
      </button>
      <div
        style={{ transition: "right 0.2s ease" }}
        className={`fixed h-full top-0 bg-white w-80 sm:w-88 z-40 flex flex-col ${
          isCurrencyConverterOpen ? "right-0" : "-right-80 sm:-right-88"
        }`}
      >
        <header className="border-b-1 border-gray-200 bg-black h-14 flex flex-row items-center justify-between">
          <h3 className={`${libre_caslon_text.className} text-white pl-4`}>
            SELECT YOUR CURRENCY
          </h3>
          <button
            type="button"
            className="close p-4"
            onClick={() => setIsCurrencyConverterOpen(false)}
          >
            <TfiClose className="text-white text-lg" />
          </button>
        </header>
        <ul className="text-sm">
          <li className="h-12 border-b-1 border-gray-200">
            <button
              type="button"
              className={`px-4 h-full w-full flex flex-row items-center gap-x-2 hover:bg-gray-100 active:bg-gray-100 ${
                currency === "British Pound" && "bg-gray-100"
              }`}
              onClick={() => {
                setCurrency("British Pound");
                setIsCurrencyConverterOpen(false);
              }}
            >
              <img className="h-3 w-4" src="/assets/gb.svg" alt="" />
              <span className="text-sm">British Pound</span>
            </button>
          </li>
          <li className="h-12 border-b-1 border-gray-200">
            <button
              type="button"
              className={`px-4 h-full w-full flex flex-row items-center gap-x-2 hover:bg-gray-100 active:bg-gray-100 ${
                currency === "Rupees" && "bg-gray-100"
              }`}
              onClick={() => {
                setCurrency("Rupees");
                setIsCurrencyConverterOpen(false);
              }}
            >
              <img className="h-3 w-4" src="/assets/pk.svg" alt="" />
              <span className="text-sm">Rupees</span>
            </button>
          </li>
          <li className="h-12 border-b-1 border-gray-200">
            <button
              type="button"
              className={`px-4 h-full w-full flex flex-row items-center gap-x-2 hover:bg-gray-100 active:bg-gray-100 ${
                currency === "US Dollar" && "bg-gray-100"
              }`}
              onClick={() => {
                setCurrency("US Dollar");
                setIsCurrencyConverterOpen(false);
              }}
            >
              <img className="h-3 w-4" src="/assets/us.svg" alt="" />
              <span className="text-sm">US Dollar</span>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}
