"use client";

import type { User } from "@/types";
import { libre_caslon_text } from "@/constants";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export default function AccountDashboard({ users }: { users: User[] }) {
  const { data: session, status } = useSession();
  const user =
    status === "authenticated"
      ? (users.find((user) => user.email === session?.user?.email) as User)
      : undefined;

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [address, setAddress] = useState(user?.address);
  const [city, setCity] = useState(user?.city);
  const [phoneNumber, setPhoneNumber] = useState(user?.phoneNumber);

  useEffect(() => {
    const user =
      status === "authenticated"
        ? (users.find((user) => {
            return user.email === session?.user?.email;
          }) as User)
        : undefined;

    setName(user?.name);
    setEmail(user?.email);
  }, [session]);

  return (
    <main>
      <div className="bg-green-custom text-center py-16">
        <h3
          className={`px-4 text-xl sm:text-2xl ${libre_caslon_text.className}`}
        >
          MY ACCOUNT
        </h3>
      </div>
      <div className="px-4 mt-10 sm:mt-12 lg:mt-14 mx-auto md:max-w-3xl flex flex-col md:flex-row gap-8">
        {status === "authenticated" ? (
          <>
            <div>
              <ul className="border-1 border-gray-300">
                <li className="md:w-72 h-10 flex flex-row border-b-1 border-gray-300">
                  <Link
                    className="flex flex-row items-center flex-1 text-sm pl-4 bg-gray-100"
                    href="/account"
                  >
                    Dashboard
                  </Link>
                </li>
                <li className="md:w-72 h-10 flex flex-row">
                  <Link
                    style={{
                      transition: "color 0.2s ease, background 0.2s ease",
                    }}
                    href=""
                    className="flex flex-row items-center flex-1 text-sm pl-4 hover:bg-gray-100 active:bg-gray-100 hover:text-yellow-custom active:text-yellow-custom"
                    onClick={() => signOut()}
                  >
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
            <form className="flex flex-col flex-1 gap-y-4">
              <div className="flex flex-col">
                <label htmlFor="account-name" className="text-sm text-gray-500">
                  Name
                </label>
                <input
                  style={{ transition: "border 0.2s ease" }}
                  className="mt-1.5 p-2.5 flex-1 text-sm text-gray-500 border-1 border-gray-300 focus:outline-0 focus:border-black"
                  type="text"
                  name="name"
                  value={name || ""}
                  id="account-name"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="account-email"
                  className="text-sm text-gray-500"
                >
                  Email
                </label>
                <input
                  style={{ transition: "border 0.2s ease" }}
                  className="mt-1.5 p-2.5 flex-1 text-sm text-gray-500 border-1 border-gray-300 focus:outline-0 focus:border-black"
                  type="email"
                  name="email"
                  value={email || ""}
                  id="account-email"
                  disabled
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="account-address"
                  className="text-sm text-gray-500"
                >
                  Address
                </label>
                <input
                  style={{ transition: "border 0.2s ease" }}
                  className="mt-1.5 p-2.5 flex-1 text-sm text-gray-500 border-1 border-gray-300 focus:outline-0 focus:border-black"
                  type="text"
                  name="address"
                  value={address || ""}
                  id="account-address"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="account-city" className="text-sm text-gray-500">
                  City
                </label>
                <input
                  style={{ transition: "border 0.2s ease" }}
                  className="mt-1.5 p-2.5 flex-1 text-sm text-gray-500 border-1 border-gray-300 focus:outline-0 focus:border-black"
                  type="text"
                  name="city"
                  value={city || ""}
                  id="account-city"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="account-phone-number"
                  className="text-sm text-gray-500"
                >
                  Phone Number
                </label>
                <input
                  style={{ transition: "border 0.2s ease" }}
                  className="mt-1.5 p-2.5 flex-1 text-sm text-gray-500 border-1 border-gray-300 focus:outline-0 focus:border-black"
                  type="text"
                  name="phoneNumber"
                  value={phoneNumber || ""}
                  id="account-phone-number"
                />
              </div>
              <div className="w-full">
                <button
                  type="submit"
                  className="w-full font-semibold text-sm mt-1.5 text-white bg-black p-2.5"
                >
                  SAVE CHANGES
                </button>
              </div>
            </form>
          </>
        ) : (
          <></>
        )}
      </div>
    </main>
  );
}
