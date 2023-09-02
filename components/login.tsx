"use client";

import { libre_caslon_text } from "@/constants";
import { TfiClose } from "react-icons/tfi";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { useRootContext } from "@/context/root-context";

export default function Login() {
  const {
    isAccountOpen,
    setIsAccountOpen,
    isLoginOpen,
    setIsLoginOpen,
    setIsRegisterOpen,
    setIsRecoverPasswordOpen,
  } = useRootContext();

  return (
    <div
      style={{ transition: "right 0.2s ease" }}
      className={`fixed h-full top-0 bg-white w-80 sm:w-88 z-40 ${
        isAccountOpen && isLoginOpen ? "right-0" : "-right-80 sm:-right-88"
      }`}
    >
      <header className="border-b-1 border-gray-200 h-14 flex flex-row items-center justify-between">
        <h3 className={`${libre_caslon_text.className} pl-4`}>LOGIN</h3>
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
            htmlFor="login-email"
            className="required text-sm text-gray-500"
          >
            Email
          </label>
          <input
            style={{ transition: "border 0.2s ease" }}
            className="mt-1.5 p-2.5 flex-1 text-sm text-gray-500 border-1 border-gray-300 focus:outline-0 focus:border-black"
            type="email"
            name="email"
            id="login-email"
            required
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="login-password"
            className="required text-sm text-gray-500"
          >
            Password
          </label>
          <input
            style={{ transition: "border 0.2s ease" }}
            className="mt-1.5 p-2.5 flex-1 text-sm text-gray-500 border-1 border-gray-300 focus:outline-0 focus:border-black"
            type="password"
            name="password"
            id="login-password"
            required
          />
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="w-full font-semibold text-sm mt-1.5 text-white bg-black p-2.5"
          >
            SIGN IN
          </button>
        </div>
      </form>
      <div className="px-4 py-2 flex flex-col gap-y-2">
        <p className="text-sm">
          New customer?{" "}
          <button
            type="button"
            style={{ transition: "color 0.2s ease" }}
            className="text-gray-500 hover:text-yellow-custom active:text-yellow-custom"
            onClick={() => {
              setIsLoginOpen(false);
              setIsRegisterOpen(true);
            }}
          >
            Create your account
          </button>
        </p>
        <p className="text-sm">
          Forgot password?{" "}
          <button
            type="button"
            style={{ transition: "color 0.2s ease" }}
            className="text-gray-500 hover:text-yellow-custom active:text-yellow-custom"
            onClick={() => {
              setIsLoginOpen(false);
              setIsRecoverPasswordOpen(true);
            }}
          >
            Recover password
          </button>
        </p>
      </div>
      <div className="px-4 py-2 flex flex-row items-center">
        <div className="h-px bg-black flex-1"></div>
        <p className="px-2 font-semibold text-sm">OR</p>
        <div className="h-px bg-black flex-1"></div>
      </div>
      <div className="px-4 py-2 flex flex-col gap-y-4">
        <button
          style={{ transition: "color 0.2s ease, background 0.2s ease" }}
          type="button"
          className="px-4 py-2.5 flex flex-row items-center justify-center gap-x-2 border-1 border-black text-black bg-white hover:text-white active:text-white hover:bg-black active:bg-black"
        >
          <FcGoogle />
          <span className="text-sm font-semibold">Continue with Google</span>
        </button>
      </div>
    </div>
  );
}
