import type { Category } from "@/types";
import ProductCatalog from "@/components/product-catalog";
import Navigation from "@/components/navigation";
import ChocolatesNavigation from "@/components/chocolates-navigation";
import PatisserieNavigation from "@/components/patisserie-navigation";
import Banner from "@/app/images/banner.jpg";
import ChocolateBarsBanner from "@/app/images/chocolate-bars-banner.webp";
import FreeDeliveryBanner from "@/app/images/free-delivery-banner.webp";
import Image from "next/image";

export async function generateStaticParams() {
  return [
    { category: "free-delivery" },
    { category: "chocolates" },
    { category: "chocolate-bars" },
    { category: "chocolate-barks" },
    { category: "chocolate-platters" },
    { category: "patisserie" },
    { category: "macarons" },
    { category: "snackables" },
    { category: "cakes" },
  ];
}

export async function generateMetadata({
  params,
}: {
  params: { category: Category };
}) {
  const { category } = params;
  const title = category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  return {
    title: `${title} - Lals - Chocolate and Gifting Brand in Pakistan`,
  };
}

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

const fetchProducts = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/products`, {
      next: { revalidate: 900 },
    });

    if (res.ok) {
      return res.json();
    }
  } catch (error) {
    console.log(error);
    return [];
  }
};

export default async function Category({
  params,
}: {
  params: { category: Category };
}) {
  const { result: dollarRate = "0.0034" } = await fetchDollarRate();
  const { result: poundRate = "0.0027" } = await fetchPoundRate();
  const { category } = params;
  const { products } = await fetchProducts();

  return (
    <main>
      {category === "free-delivery" ? (
        <Image
          className="w-full h-auto"
          src={FreeDeliveryBanner}
          alt=""
          priority
          placeholder="blur"
        />
      ) : category === "chocolates" || category === "chocolate-bars" ? (
        <Image
          className="w-full h-auto"
          src={ChocolateBarsBanner}
          alt=""
          priority
          placeholder="blur"
        />
      ) : (
        <Image
          className="w-full h-auto"
          src={Banner}
          alt=""
          priority
          placeholder="blur"
        />
      )}
      {category === "free-delivery" ? (
        <Navigation />
      ) : category === "chocolates" ||
        category === "chocolate-bars" ||
        category === "chocolate-barks" ||
        category === "chocolate-platters" ? (
        <ChocolatesNavigation />
      ) : (
        <PatisserieNavigation />
      )}
      <ProductCatalog
        products={products}
        category={category}
        dollarRate={dollarRate}
        poundRate={poundRate}
      />
    </main>
  );
}
