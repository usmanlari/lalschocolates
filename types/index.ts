export interface Product {
  _id: string;
  title: string;
  price: number;
  description: string;
  categories: Category[];
  reference: string;
}

export type Currency = "British Pound" | "Rupees" | "US Dollar";

export type Category =
  | "all"
  | "free-delivery"
  | "chocolates"
  | "chocolate-bars"
  | "chocolate-barks"
  | "chocolate-platters"
  | "patisserie"
  | "macarons"
  | "snackables"
  | "cakes";

export type Sort = "price-asc" | "price-desc" | "title-asc" | "title-desc";
