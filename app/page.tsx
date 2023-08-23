import type { Metadata } from "next";
import ChocolateBarsBanner from "@/app/images/chocolate-bars-banner.webp";
import Image from "next/image";
import Navigation from "@/components/navigation";
import ProductCatalog from "@/components/product-catalog";

export const metadata: Metadata = {
  title: "Lals - Chocolate and Gifting Brand in Pakistan",
  description:
    "Discover the perfect blend of taste and thoughtfulness with our range of artisan chocolates and unique gifting options. Shop now to experience the finest chocolate treats and gifts, made in Pakistan with love.",
};

const fetchProducts = async () => {
  try {
    const apiUrlProducts = process.env.NEXT_PUBLIC_API_PRODUCTS;

    const res = await fetch(apiUrlProducts as string, {
      next: { revalidate: 3600 },
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

export default async function Home() {
  const { products } = await fetchProducts();
  const { result: dollarRate } = await fetchDollarRate();
  const { result: poundRate } = await fetchPoundRate();

  return (
    <main>
      <Image
        className="w-full h-auto"
        src={ChocolateBarsBanner}
        alt=""
        priority
      />
      <Navigation />
      <ProductCatalog
        products={products}
        category="all"
        dollarRate={dollarRate}
        poundRate={poundRate}
      />
    </main>
  );
}
