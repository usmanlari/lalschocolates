"use client";

import { Currency } from "@/types";
import { montserrat } from "@/constants";
import { useContext, createContext, useState } from "react";

const RootContext = createContext<any>({});

const useRootContext = () => useContext(RootContext);

const RootContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [currency, setCurrency] = useState<Currency>("Rupees");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCurrencyConverterOpen, setIsCurrencyConverterOpen] =
    useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(true);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);
  const [isRecoverPasswordOpen, setIsRecoverPasswordOpen] =
    useState(false);
  const [isSortByOpen, setIsSortByOpen] = useState(false);
  const [wishlist, setWishlist] = useState<String[]>([]);
  const [cart, setCart] = useState<String[]>([]);

  return (
    <RootContext.Provider
      value={{
        currency,
        setCurrency,
        isMenuOpen,
        setIsMenuOpen,
        isSearchOpen,
        setIsSearchOpen,
        isAccountOpen,
        setIsAccountOpen,
        isCartOpen,
        setIsCartOpen,
        isCurrencyConverterOpen,
        setIsCurrencyConverterOpen,
        isFilterOpen,
        setIsFilterOpen,
        isLoginOpen,
        setIsLoginOpen,
        isRegisterOpen,
        setIsRegisterOpen,
        isRecoverPasswordOpen,
        setIsRecoverPasswordOpen,
        isSortByOpen,
        setIsSortByOpen,
        wishlist,
        setWishlist,
        cart,
        setCart,
      }}
    >
      <body
        className={`${
          (isMenuOpen ||
            isSearchOpen ||
            isAccountOpen ||
            isCartOpen ||
            isCurrencyConverterOpen ||
            isFilterOpen ||
            isSortByOpen) &&
          "overflow-hidden"
        } ${montserrat.className}`}
      >
        {children}
        <div
          style={{
            visibility:
              isMenuOpen ||
              isSearchOpen ||
              isAccountOpen ||
              isCartOpen ||
              isCurrencyConverterOpen ||
              isFilterOpen ||
              isSortByOpen
                ? "visible"
                : "hidden",
          }}
          className="backdrop"
          onClick={() => {
            if (isMenuOpen) {
              setIsMenuOpen(false);
            }
            if (isSearchOpen) {
              setIsSearchOpen(false);
            }
            if (isAccountOpen) {
              setIsAccountOpen(false);
            }
            if (isCartOpen) {
              setIsCartOpen(false);
            }
            if (isCurrencyConverterOpen) {
              setIsCurrencyConverterOpen(false);
            }
            if (isFilterOpen) {
              setIsFilterOpen(false);
            }
            if (isSortByOpen) {
              setIsSortByOpen(false);
            }
          }}
        ></div>
      </body>
    </RootContext.Provider>
  );
};

export { useRootContext, RootContextProvider };
