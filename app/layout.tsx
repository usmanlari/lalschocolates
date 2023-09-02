import "./globals.css";
import { RootContextProvider } from "@/context/root-context";
import TopBanner from "@/components/top-banner";
import Header from "@/components/header";
import Toolbar from "@/components/toolbar";
import ShoppingCart from "@/components/shopping-cart";
import Search from "@/components/search";
import RecoverPassword from "@/components/recover-password";
import Register from "@/components/register";
import Menu from "@/components/menu";
import Login from "@/components/login";
import Footer from "@/components/footer";
import CurrencyConverter from "@/components/currency-converter";
import { Analytics } from "@vercel/analytics/react";

const fetchProducts = async () => {
  try {
    const apiUrlProducts = process.env.NEXT_PUBLIC_API_PRODUCTS;

    const res = await fetch(apiUrlProducts as string, {
      next: { revalidate: 900 },
    });

    if (res.ok) {
      return res.json();
    }
  } catch (error) {
    console.log(error);
  }
};

const fetchDollarRate = async () => {
  const url =
    "https://community-neutrino-currency-conversion.p.rapidapi.com/convert";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "98d07bd56bmsh0173f455518c460p124447jsn105454016d52",
      "X-RapidAPI-Host":
        "community-neutrino-currency-conversion.p.rapidapi.com",
    },
    body: new URLSearchParams({
      "from-value": "1",
      "from-type": "PKR",
      "to-type": "USD",
    }),
  };

  try {
    const res = await fetch(url, options);
    if (res.ok) {
      return res.json();
    }
    return { result: "0.0034" };
  } catch (error) {
    console.error(error);
  }
};

const fetchPoundRate = async () => {
  const url =
    "https://community-neutrino-currency-conversion.p.rapidapi.com/convert";
  const options = {
    method: "POST",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key": "98d07bd56bmsh0173f455518c460p124447jsn105454016d52",
      "X-RapidAPI-Host":
        "community-neutrino-currency-conversion.p.rapidapi.com",
    },
    body: new URLSearchParams({
      "from-value": "1",
      "from-type": "PKR",
      "to-type": "GBP",
    }),
  };

  try {
    const res = await fetch(url, options);
    if (res.ok) {
      return res.json();
    }
    return { result: "0.0027" };
  } catch (error) {
    console.error(error);
  }
};

export const dynamicParams = false;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { products } = await fetchProducts();
  const { result: dollarRate = "0.0034" } = await fetchDollarRate();
  const { result: poundRate = "0.0027" } = await fetchPoundRate();

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/favicon.ico" />
      </head>
      <RootContextProvider>
        <TopBanner />
        <Header />
        {children}
        <Footer />
        <Toolbar />
        <Menu />
        <Search
          products={products}
          dollarRate={dollarRate}
          poundRate={poundRate}
        />
        <Login />
        <RecoverPassword />
        <Register />
        <ShoppingCart
          products={products}
          dollarRate={dollarRate}
          poundRate={poundRate}
        />
        <CurrencyConverter />
      </RootContextProvider>
      <Analytics />
    </html>
  );
}
