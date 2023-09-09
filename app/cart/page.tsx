import CartDetails from "@/components/cart-details";
import CartList from "@/components/cart-list";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Shopping Cart - Lals - Chocolate and Gifting Brand in Pakistan",
};

const fetchProducts = async () => {
  try {
    const res = await fetch(process.env.NEXT_PUBLIC_API_PRODUCTS as string, {
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

export default async function Cart() {
  const { products } = await fetchProducts();
  const { result: dollarRate = "0.0034" } = await fetchDollarRate();
  const { result: poundRate = "0.0027" } = await fetchPoundRate();

  return (
    <main>
      <CartList
        products={products}
        dollarRate={dollarRate}
        poundRate={poundRate}
      />
      <CartDetails />
    </main>
  );
}
