import type { Metadata } from "next";
import { libre_caslon_text } from "@/constants";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 Not Found - Lals - Chocolate and Gifting Brand in Pakistan",
};

export default function NotFound() {
  return (
    <main>
      <div className="py-48">
        <h3 className="text-center text-8xl font-bold">404</h3>
        <p
          className={`text-center mt-2.5 text-lg ${libre_caslon_text.className}`}
        >
          SORRY! PAGE YOU ARE LOOKING CAN'T BE FOUND.
        </p>
        <p className="text-center mt-2.5">
          Go back to the{" "}
          <Link
            style={{ transition: "color 0.2s ease, background 0.2s ease" }}
            className="p-1 font-semibold relative text-black bg-white hover:text-white active:text-white hover:bg-black active:bg-black"
            href="/"
          >
            homepage
            <span className="absolute inset-x-0 bottom-0 h-0.5 bg-black transform translate-y-0"></span>
          </Link>
        </p>
      </div>
    </main>
  );
}
