"use client";

import { useRootContext } from "@/context/root-context";

export default function CartDetails() {
  const { cart } = useRootContext();

  return (
    <>
      {cart.length > 0 && (
        <div className="px-4 max-w-7xl mx-auto">
          <div className="bg-green-custom">
            <div className="text-sm mx-auto max-w-4xl px-4 py-10 sm:py-12 lg:py-14">
              <p className="text-center">
                Taxes and shipping calculated at checkout
              </p>
              <p className="mt-6 text-center text-red-600 font-medium">
                Cakes can only be delivered to Karachi.
              </p>
              <p className="mt-6 text-center">
                Note: The expected delivery time would be between 11:00 am to
                6:00 pm.
              </p>
              <div className="flex flex-row justify-center mt-6">
                <button className="font-semibold text-sm text-white bg-black py-2.5 px-4">
                  CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
