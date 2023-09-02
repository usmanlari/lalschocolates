import type { Category, Product } from "@/types";
import ProductDetail from "@/components/product-detail";
import Breadcrumbs from "@/components/breadcrumbs";
import Extras from "@/components/extras";

export async function generateStaticParams() {
  const categories: Category[] = [
    "chocolate-bars",
    "chocolate-barks",
    "chocolate-platters",
    "macarons",
    "snackables",
    "cakes",
  ];

  const apiUrlProducts = process.env.NEXT_PUBLIC_API_PRODUCTS;

  const { products } = await fetch(apiUrlProducts as string, {
    next: { revalidate: 900 },
  }).then((res) => res.json());

  let productsByCategory: { category: Category; reference: string }[] = [];

  for (const category of categories) {
    const productsInCategory = products.filter((product: Product) =>
      product.categories.includes(category)
    );
    const productsInCategoryArray = productsInCategory.map(
      (product: Product) => ({
        category,
        reference: product.reference,
      })
    );
    productsByCategory = productsByCategory.concat(productsInCategoryArray);
  }

  return productsByCategory;
}

export async function generateMetadata({
  params,
}: {
  params: { category: Category; reference: string };
}) {
  const { reference } = params;
  const title = reference
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
    const apiUrlProducts = process.env.NEXT_PUBLIC_API_PRODUCTS;

    const res = await fetch(apiUrlProducts as string, {
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

export default async function Product({
  params,
}: {
  params: {
    category: Category;
    reference: string;
  };
}) {
  const { result: dollarRate = "0.0034" } = await fetchDollarRate();
  const { result: poundRate = "0.0027" } = await fetchPoundRate();
  const { category, reference } = params;
  const { products } = await fetchProducts();
  const product = products.find(
    (product: Product) => reference === product.reference
  );

  return (
    <main>
      <Breadcrumbs product={product} category={category} />
      <ProductDetail
        product={product}
        dollarRate={dollarRate}
        poundRate={poundRate}
        category={category}
      />
      <Extras
        products={products}
        product={product}
        dollarRate={dollarRate}
        poundRate={poundRate}
      />
    </main>
  );
}
