import type { Currency, Sort, Category, Product } from "@/types";
import { Montserrat, Libre_Caslon_Text } from "next/font/google";

import AlmondMilk56 from "@/app/images/almond-milk-56.webp";
import RawOrganicDark70 from "@/app/images/raw-organic-dark-70.webp";
import SmoothMilk36 from "@/app/images/smooth-milk-36.webp";
import PinkSaltDark56 from "@/app/images/pink-salt-dark-56.webp";
import OrangeDark56 from "@/app/images/orange-dark-56.webp";
import PureDark56 from "@/app/images/pure-dark-56.webp";
import NougatInMilkChocolateBarkPouch from "@/app/images/nougat-in-milk-chocolate-bark-pouch.webp";
import RoastedAlmondsAndSeaSaltInDarkChocolateBarkPouch from "@/app/images/roasted-almonds-and-sea-salt-in-dark-chocolate-bark-pouch.webp";
import RoastedHazelnutInMilkChocolateBarkPouch from "@/app/images/roasted-hazelnut-in-milk-chocolate-bark-pouch.webp";
import CranberriesNutsAndMarzipanHeartsDarkChocolateBarkPouch from "@/app/images/cranberries-nuts-and-marzipan-hearts-dark-chocolate-bark-pouch.webp";
import NougatInDarkChocolateBarkPouch from "@/app/images/nougat-in-dark-chocolate-bark-pouch.webp";
import RaisinsPistachiosAndAlmondsInDarkChocolateBarkPouch from "@/app/images/raisins-pistachios-and-almonds-in-dark-chocolate-bark-pouch.webp";
import BiscuitsFudgeAndMarshmallowsInMilkChocolateBarkPouch from "@/app/images/biscuits-fudge-and-marshmallows-in-milk-chocolate-bark-pouch.webp";
import ChocolateGoldPlatter from "@/app/images/chocolate-gold-platter.webp";
import MarbleChocolatePlatterKhiAndLhrOnly from "@/app/images/marble-chocolate-platter-khi-and-lhr-only.webp";
import FestiveChocolateTrayKhiAndLhrOnly from "@/app/images/festive-chocolate-tray-khi-and-lhr-only.webp";
import GlassChocolatePlatter from "@/app/images/glass-chocolate-platter.webp";
import RewariJar150 from "@/app/images/rewari-jar-150.webp";
import ChocolateCoatedAlmonds150 from "@/app/images/chocolate-coated-almonds-150.webp";
import HoneyRoastedAlmonds150 from "@/app/images/honey-roasted-almonds-150.webp";
import ChocolateBiscotti120 from "@/app/images/chocolate-biscotti-120.webp";
import AssortedFrenchMacaronsBoxOf4 from "@/app/images/assorted-french-macarons-box-of-4.webp";
import AssortedFrenchMacaronsBoxOf8 from "@/app/images/assorted-french-macarons-box-of-8.webp";
import CaramelCrunchCakeKhiOnly from "@/app/images/caramel-crunch-cake-khi-only.webp";
import ClassicChocolateCakeKhiOnly from "@/app/images/classic-chocolate-cake-khi-only.webp";
import TiramisuCakeKhiOnly from "@/app/images/tiramisu-cake-khi-only.webp";
import CappuccinoCakeKhiOnly from "@/app/images/cappuccino-cake-khi-only.webp";
import ChocolateMouseCakeKhiOnly from "@/app/images/chocolate-mouse-cake-khi-only.webp";
import NewYorkCheesecakeKhiOnly from "@/app/images/new-york-cheesecake-khi-only.webp";
import FloralLayeredCakeKhiOnly from "@/app/images/floral-layered-cake-khi-only.webp";
import ToffeeAlmondCakeGlutenFreeKhiOnly from "@/app/images/toffee-almond-cake-gluten-free-khi-only.webp";
import LemonCakeKhiOnly from "@/app/images/lemon-cake-khi-only.webp";
import BlueberryCheesecakeKhiOnly from "@/app/images/blueberry-cheesecake-khi-only.webp";
import TripleLayerChocolateCakeKhiOnly from "@/app/images/triple-layer-chocolate-cake-khi-only.webp";
import CarrotCakeKhiOnly from "@/app/images/carrot-cake-khi-only.webp";
import RedVelvetHeartCakeKhiOnly from "@/app/images/red-velvet-heart-cake-khi-only.webp";
import FestiveDarkChocolateCakeKhiOnly from "@/app/images/festive-dark-chocolate-cake-khi-only.webp";
import MangoSpongeCake from "@/app/images/mango-sponge-cake.webp";
import BarbieCakeKhiOnly from "@/app/images/barbie-cake-khi-only.webp";
import AlmondBiscotti from "@/app/images/almond-biscotti.webp";
import TraditionalBiscuits from "@/app/images/traditional-biscuits.webp";
import ChocolateAlmondSpread from "@/app/images/chocolate-almond-spread.webp";
import ButterCookies from "@/app/images/butter-cookies.webp";
import StrawberryJam from "@/app/images/strawberry-jam.webp";
import RosetteMeringues from "@/app/images/rosette-meringues.webp";
import TrailMix from "@/app/images/trail-mix.webp";
import SavouryPuffs from "@/app/images/savoury-puffs.webp";
import SugarFreeCookies from "@/app/images/sugar-free-cookies.webp";
import CheckerboardCookies from "@/app/images/checkerboard-cookies.webp";
import ChocolateButterCrunch from "@/app/images/chocolate-butter-crunch.webp";
import HoneyRoastedGranola from "@/app/images/honey-roasted-granola.webp";
import PeanutBrittle from "@/app/images/peanut-brittle.webp";
import ChocolateChipPancakeMix from "@/app/images/chocolate-chip-pancake-mix.webp";
import ChocolateDigestives from "@/app/images/chocolate-digestives.webp";
import RasmalaiBar from "@/app/images/rasmalai-bar.webp";

export const imageMapping = {
  "almond-milk-56": AlmondMilk56,
  "raw-organic-dark-70": RawOrganicDark70,
  "smooth-milk-36": SmoothMilk36,
  "pink-salt-dark-56": PinkSaltDark56,
  "orange-dark-56": OrangeDark56,
  "pure-dark-56": PureDark56,
  "nougat-in-milk-chocolate-bark-pouch": NougatInMilkChocolateBarkPouch,
  "roasted-almonds-and-sea-salt-in-dark-chocolate-bark-pouch":
    RoastedAlmondsAndSeaSaltInDarkChocolateBarkPouch,
  "roasted-hazelnut-in-milk-chocolate-bark-pouch":
    RoastedHazelnutInMilkChocolateBarkPouch,
  "cranberries-nuts-and-marzipan-hearts-dark-chocolate-bark-pouch":
    CranberriesNutsAndMarzipanHeartsDarkChocolateBarkPouch,
  "nougat-in-dark-chocolate-bark-pouch": NougatInDarkChocolateBarkPouch,
  "raisins-pistachios-and-almonds-in-dark-chocolate-bark-pouch":
    RaisinsPistachiosAndAlmondsInDarkChocolateBarkPouch,
  "biscuits-fudge-and-marshmallows-in-milk-chocolate-bark-pouch":
    BiscuitsFudgeAndMarshmallowsInMilkChocolateBarkPouch,
  "chocolate-gold-platter": ChocolateGoldPlatter,
  "marble-chocolate-platter-khi-and-lhr-only":
    MarbleChocolatePlatterKhiAndLhrOnly,
  "festive-chocolate-tray-khi-and-lhr-only": FestiveChocolateTrayKhiAndLhrOnly,
  "glass-chocolate-platter": GlassChocolatePlatter,
  "rewari-jar-150": RewariJar150,
  "chocolate-coated-almonds-150": ChocolateCoatedAlmonds150,
  "honey-roasted-almonds-150": HoneyRoastedAlmonds150,
  "chocolate-biscotti-120": ChocolateBiscotti120,
  "assorted-french-macarons-box-of-4": AssortedFrenchMacaronsBoxOf4,
  "assorted-french-macarons-box-of-8": AssortedFrenchMacaronsBoxOf8,
  "caramel-crunch-cake-khi-only": CaramelCrunchCakeKhiOnly,
  "classic-chocolate-cake-khi-only": ClassicChocolateCakeKhiOnly,
  "tiramisu-cake-khi-only": TiramisuCakeKhiOnly,
  "cappuccino-cake-khi-only": CappuccinoCakeKhiOnly,
  "chocolate-mouse-cake-khi-only": ChocolateMouseCakeKhiOnly,
  "new-york-cheesecake-khi-only": NewYorkCheesecakeKhiOnly,
  "floral-layered-cake-khi-only": FloralLayeredCakeKhiOnly,
  "toffee-almond-cake-gluten-free-khi-only": ToffeeAlmondCakeGlutenFreeKhiOnly,
  "lemon-cake-khi-only": LemonCakeKhiOnly,
  "blueberry-cheesecake-khi-only": BlueberryCheesecakeKhiOnly,
  "triple-layer-chocolate-cake-khi-only": TripleLayerChocolateCakeKhiOnly,
  "carrot-cake-khi-only": CarrotCakeKhiOnly,
  "red-velvet-heart-cake-khi-only": RedVelvetHeartCakeKhiOnly,
  "festive-dark-chocolate-cake-khi-only": FestiveDarkChocolateCakeKhiOnly,
  "mango-sponge-cake": MangoSpongeCake,
  "barbie-cake-khi-only": BarbieCakeKhiOnly,
  "almond-biscotti": AlmondBiscotti,
  "traditional-biscuits": TraditionalBiscuits,
  "chocolate-almond-spread": ChocolateAlmondSpread,
  "butter-cookies": ButterCookies,
  "strawberry-jam": StrawberryJam,
  "rosette-meringues": RosetteMeringues,
  "trail-mix": TrailMix,
  "savoury-puffs": SavouryPuffs,
  "sugar-free-cookies": SugarFreeCookies,
  "checkerboard-cookies": CheckerboardCookies,
  "chocolate-butter-crunch": ChocolateButterCrunch,
  "honey-roasted-granola": HoneyRoastedGranola,
  "peanut-brittle": PeanutBrittle,
  "chocolate-chip-pancake-mix": ChocolateChipPancakeMix,
  "chocolate-digestives": ChocolateDigestives,
  "rasmalai-bar": RasmalaiBar,
};

export const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const libre_caslon_text = Libre_Caslon_Text({
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
});

export const getFlag = (currency: Currency) => {
  switch (currency) {
    case "British Pound":
      return "/assets/gb.svg";
    case "Rupees":
      return "/assets/pk.svg";
    case "US Dollar":
      return "/assets/us.svg";
  }
};

export const getSortDisplayValue = (sort: Sort) => {
  switch (sort) {
    case "price-asc":
      return "Price, low to high";
    case "price-desc":
      return "Price, high to low";
    case "title-asc":
      return "Alphabetically, A-Z";
    case "title-desc":
      return "Alphabetically, Z-A";
  }
};

export const getMaxPriceByCategory = (
  category: Category,
  products: Product[]
): number => {
  let maxPrice = -Infinity;

  for (const product of products) {
    if (product.categories.includes(category)) {
      maxPrice = Math.max(maxPrice, product.price);
    }
  }

  return maxPrice;
};

export const getCategories = (category: Category): Category[] => {
  switch (category) {
    case "all":
      return [
        "chocolate-bars",
        "chocolate-barks",
        "chocolate-platters",
        "macarons",
        "snackables",
        "cakes",
      ];
    case "free-delivery":
      return ["free-delivery"];
    case "chocolates":
      return ["chocolate-bars", "chocolate-barks", "chocolate-platters"];
    case "chocolate-bars":
      return ["chocolate-bars"];
    case "chocolate-barks":
      return ["chocolate-barks"];
    case "chocolate-platters":
      return ["chocolate-platters"];
    case "patisserie":
      return ["macarons", "snackables", "cakes"];
    case "macarons":
      return ["macarons"];
    case "snackables":
      return ["snackables"];
    case "cakes":
      return ["cakes"];
  }
};

export const getItemCountByCategory = (
  category: Category,
  products: Product[]
) => {
  let itemCount = 0;

  for (const product of products) {
    if (product.categories.includes(category)) {
      itemCount++;
    }
  }

  return itemCount;
};

export const filterProductsByCategory = (
  category: Category,
  products: Product[]
) => {
  return products.filter((product) => product.categories.includes(category));
};

export const filterProductsByTitle = (input: string, products: Product[]) => {
  const lowerCaseInput = input.toLowerCase();
  return products.filter((product) =>
    product.title.toLowerCase().includes(lowerCaseInput)
  );
};

export const sortProducts = (sort: Sort, products: Product[]) => {
  if (sort === "price-desc") {
    return products.sort((a, b) => b.price - a.price);
  }

  if (sort === "title-asc") {
    return products.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (sort === "title-desc") {
    return products.sort((a, b) => b.title.localeCompare(a.title));
  } else {
    return products.sort((a, b) => a.price - b.price);
  }
};

export const filterProductsByPrice = (price: number, products: Product[]) => {
  return products.filter((product) => product.price <= price);
};

export const findItemCategory = (array: Category[]) => {
  const categories: Category[] = [
    "chocolate-bars",
    "chocolate-barks",
    "chocolate-platters",
    "macarons",
    "snackables",
    "cakes",
  ];

  for (const category of categories) {
    if (array.includes(category)) {
      return category;
    }
  }
};

export const removeDuplicates = (arr: String[]) => {
  return Array.from(new Set(arr));
};
