"use client";

import { libre_caslon_text } from "@/constants";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FiCheck, FiInfo } from "react-icons/fi";
import { TfiClose } from "react-icons/tfi";
import { useState, FormEvent } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    setEmail(email.trim());

    if (!emailRegex.test(email)) {
      setMessage("Email is invalid");
      return;
    }

    try {
      const apiUrlSubscribers = `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/api/subscribers`;

      const res = await fetch(apiUrlSubscribers as string, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if ([201, 409, 422].includes(res.status)) {
        const { message } = await res.json();
        setMessage(message);
        setEmail("");
        return;
      }
    } catch (error) {
      console.log(error);
      return;
    }
  };

  return (
    <footer className="mb-12.5 lg:mb-0 mt-10 sm:mt-12 lg:mt-14">
      <div className="py-20 bg-green-custom">
        <div className="max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto gap-y-4 lg:gap-y-0">
          <div className="px-4">
            <h3
              className={`pb-2 ${libre_caslon_text.className} border-b-1 border-yellow-custom`}
            >
              Lals
            </h3>
            <ul className="mt-6">
              <li className="font-medium my-3 text-sm">
                <span>Main Line</span>
                <br />
                <a
                  style={{ transition: "color 0.2s ease" }}
                  href="tel:+923041115257"
                  className="text-black hover:text-yellow-custom active:text-yellow-custom"
                >
                  +92304-111LALS
                </a>
              </li>
              <li className="font-medium my-3 text-sm">
                <span>Website order queries</span>
                <br />
                <a
                  style={{ transition: "color 0.2s ease" }}
                  href="tel:+923041115257"
                  className="text-black hover:text-yellow-custom active:text-yellow-custom"
                >
                  +92304-111LALS
                </a>
              </li>
              <li className="font-medium my-3 text-sm">
                <span>Karachi outlet</span>
                <br />
                <a
                  style={{ transition: "color 0.2s ease" }}
                  href="tel:+923171115257"
                  className="text-black hover:text-yellow-custom active:text-yellow-custom"
                >
                  +92317-111LALS
                </a>
              </li>
              <li className="font-medium my-3 text-sm">
                <span>Lahore outlet</span>
                <br />
                <a
                  style={{ transition: "color 0.2s ease" }}
                  href="tel:+923171115257"
                  className="text-black hover:text-yellow-custom active:text-yellow-custom"
                >
                  +92305-111LALS
                </a>
              </li>
              <li className="font-medium my-3 text-sm">
                <span>Email</span>
                <br />
                <a
                  style={{ transition: "color 0.2s ease" }}
                  href="tel:+923171115257"
                  className="text-black hover:text-yellow-custom active:text-yellow-custom"
                >
                  lals@siardigital.com
                </a>
              </li>
            </ul>
          </div>
          <div className="px-4">
            <h3
              className={`pb-2 ${libre_caslon_text.className} border-b-1 border-yellow-custom`}
            >
              Useful Links
            </h3>
            <nav>
              <ul className="mt-6">
                <li className="font-medium my-3 text-sm">
                  <Link
                    style={{ transition: "color 0.2s ease" }}
                    href=""
                    className="text-black hover:text-yellow-custom active:text-yellow-custom"
                  >
                    Menu
                  </Link>
                </li>
                <li className="font-medium my-3 text-sm">
                  <Link
                    style={{ transition: "color 0.2s ease" }}
                    href=""
                    className="text-black hover:text-yellow-custom active:text-yellow-custom"
                  >
                    About Us
                  </Link>
                </li>
                <li className="font-medium my-3 text-sm">
                  <Link
                    style={{ transition: "color 0.2s ease" }}
                    href=""
                    className="text-black hover:text-yellow-custom active:text-yellow-custom"
                  >
                    Contact
                  </Link>
                </li>
                <li className="font-medium my-3 text-sm">
                  <Link
                    style={{ transition: "color 0.2s ease" }}
                    href=""
                    className="text-black hover:text-yellow-custom active:text-yellow-custom"
                  >
                    In the News
                  </Link>
                </li>
                <li className="font-medium my-3 text-sm">
                  <Link
                    style={{ transition: "color 0.2s ease" }}
                    href=""
                    className="text-black hover:text-yellow-custom active:text-yellow-custom"
                  >
                    FAQs
                  </Link>
                </li>
                <li className="font-medium my-3 text-sm">
                  <Link
                    style={{ transition: "color 0.2s ease" }}
                    href=""
                    className="text-black hover:text-yellow-custom active:text-yellow-custom"
                  >
                    Shipping & Return Policy
                  </Link>
                </li>
                <li className="font-medium my-3 text-sm">
                  <Link
                    style={{ transition: "color 0.2s ease" }}
                    href=""
                    className="text-black hover:text-yellow-custom active:text-yellow-custom"
                  >
                    Blogs & Recipes
                  </Link>
                </li>
                <li className="font-medium my-3 text-sm">
                  <Link
                    style={{ transition: "color 0.2s ease" }}
                    href=""
                    className="text-black hover:text-yellow-custom active:text-yellow-custom"
                  >
                    Lals Corporate Gifting
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="px-4">
            <h3
              className={`pb-2 ${libre_caslon_text.className} border-b-1 border-yellow-custom`}
            >
              Newsletter
            </h3>
            <p className="mt-6 text-sm font-medium">
              Subscribe for Latest Updates and Trends
            </p>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="email"
                value={email}
                placeholder="Your email address"
                className="mt-6 py-2 text-sm w-full border-b-1 border-b-yellow-custom placeholder:text-black bg-inherit font-medium focus:outline-0 focus:placeholder:text-transparent"
                required
                autoComplete="true"
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
              <button
                style={{ transition: "color 0.2s ease, border 0.2s ease" }}
                className="hover:text-yellow-custom hover:border-yellow-custom mt-9 text-xs px-12 py-1 font-semibold border-1 border-black"
              >
                SUBSCRIBE!
              </button>
            </form>
            {message === "Thanks for subscribing" && (
              <div className="mt-6 border-2 border-green-700 py-3.5 px-5 text-green-700 flex flex-row items-center gap-x-2">
                <FiCheck className="text-xl relative stroke-2 top-px" />
                <span className="text-sm font-medium">
                  Thanks for subscribing
                </span>
              </div>
            )}
            {message === "Email is invalid" && (
              <div className="mt-6 border-2 border-red-600 py-3.5 px-5 text-red-600 flex flex-row items-center gap-x-2">
                <TfiClose className="text-sm relative stroke-1 top-px" />
                <span className="text-sm font-medium">Email is invalid</span>
              </div>
            )}
            {message === "Email is already subscribed" && (
              <div className="mt-6 border-2 border-teal-500 py-3.5 px-5 text-teal-500 flex flex-row items-center gap-x-2">
                <FiInfo className="text-lg relative stroke-2 top-px" />
                <span className="text-sm font-medium">
                  Email is already subscribed
                </span>
              </div>
            )}
            <nav className="mt-16 ml-8">
              <ul className="flex flex-row gap-x-5 items-center">
                <li>
                  <Link
                    style={{ transition: "color 0.2s ease" }}
                    className="relative social-link text-black hover:text-blue-600"
                    href=""
                  >
                    <BsFacebook className="text-lg" />
                    <div className="absolute -top-9 -left-8.5 flex flex-col justify-center items-center">
                      <span className="py-1 px-3 bg-black text-white text-xs font-bold">
                        Facebook
                      </span>
                      <div className="border-6 border-x-transparent border-b-transparent border-black w-0 h-0"></div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ transition: "color 0.2s ease" }}
                    className="relative social-link text-black hover:text-pink-500"
                    href=""
                  >
                    <BsInstagram className="text-lg" />
                    <div className="absolute -top-9 -left-8.5 flex flex-col justify-center items-center">
                      <span className="py-1 px-3 bg-black text-white text-xs font-bold">
                        Instagram
                      </span>
                      <div className="border-6 border-x-transparent border-b-transparent border-black w-0 h-0"></div>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link
                    style={{ transition: "color 0.2s ease" }}
                    className="relative social-link text-black hover:text-lime-400"
                    href=""
                  >
                    <BsWhatsapp className="text-lg" />
                    <div className="absolute -top-9 -left-8.5 flex flex-col justify-center items-center">
                      <span className="py-1 px-3 bg-black text-white text-xs font-bold">
                        Whatsapp
                      </span>
                      <div className="border-6 border-x-transparent border-b-transparent border-black w-0 h-0"></div>
                    </div>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div className="py-3 md:py-4 bg-gray-100 text-gray-600">
        <div className="max-w-7xl px-4 mx-auto flex flex-col gap-y-1 md:gap-y-0 md:flex-row items-center justify-between">
          <nav>
            <ul className="flex flex-row text-xs md:text-sm">
              <li>
                <Link
                  href=""
                  style={{ transition: "color 0.2s ease" }}
                  className="py-2 pl-2 pr-2  md:pl-0 hover:text-blue-custom"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  style={{ transition: "color 0.2s ease" }}
                  className="p-2 hover:text-blue-custom"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </nav>
          <div>
            <span className="text-xs md:text-sm">
              © 2023 LALS | Powered by{" "}
              <Link
                href=""
                style={{ transition: "color 0.2s ease" }}
                className="hover:text-blue-custom"
              >
                Usman Lari
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
