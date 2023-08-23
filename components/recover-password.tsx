"use client";

import { libre_caslon_text } from "@/constants";
import { TfiClose } from "react-icons/tfi";
import { useRootContext } from "@/context/root-context";

export default function RecoverPassword() {
  const {
    isAccountOpen,
    setIsAccountOpen,
    setIsLoginOpen,
    isRecoverPasswordOpen,
    setIsRecoverPasswordOpen,
  } = useRootContext();

  return (
    <div
      style={{ transition: "right 0.2s ease" }}
      className={`fixed h-full top-0 bg-white w-80 sm:w-88 z-40 ${
        isAccountOpen && isRecoverPasswordOpen
          ? "right-0"
          : "-right-80 sm:-right-88"
      }`}
    >
      <header className="border-b-1 border-gray-200 h-14 flex flex-row items-center justify-between">
        <h3 className={`${libre_caslon_text.className} text-gray-800 pl-4`}>
          RECOVER PASSWORD
        </h3>
        <button
          type="button"
          className="close p-4"
          onClick={() => setIsAccountOpen(false)}
        >
          <TfiClose className="text-lg" />
        </button>
      </header>
      <form className="p-4 flex flex-col gap-y-4">
        <div className="flex flex-col">
          <label
            htmlFor="recover-email"
            className="required text-sm text-gray-500"
          >
            Email address
          </label>
          <input
            style={{ transition: "border 0.2s ease" }}
            className="mt-1.5 p-2.5 flex-1 text-sm text-gray-500 border-1 border-gray-300 focus:outline-0 focus:border-black"
            type="email"
            name="email"
            id="recover-email"
            required
          />
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="w-full font-semibold text-sm mt-1.5 text-white bg-black p-2.5"
          >
            RESET PASSWORD
          </button>
        </div>
      </form>
      <div className="px-4 py-2">
        <p className="text-sm">
          Remember your password?{" "}
          <button
            type="button"
            style={{ transition: "color 0.2s ease" }}
            className="text-gray-500 hover:text-yellow-custom active:text-yellow-custom"
            onClick={() => {
              setIsRecoverPasswordOpen(false);
              setIsLoginOpen(true);
            }}
          >
            Back to login
          </button>
        </p>
      </div>
    </div>
  );
}
