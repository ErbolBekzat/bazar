"use client";
import { createContext, useContext } from "react";

export type Dict = {
  nav: {
    home: string;
    shops: string;
    profile: string;
    login: string;
  };
  homePage: {
    discover: string;
    description: string;
    exploreStores: string;
    addMyStore: string;
    featuredShops: string;
  };
  product: {
    add: string;
    price: string;
    stock: string;
  };
  shopDirectory: {
    shopsDirectory: string;
  };
  shopPage: {
    description: string;
    shopNotFound: string;
    products: string;
  };
  footer: {
    copyright: string;
    contact: string;
  };
  button: {
    visitShop: string;
  };
};

export const DictContext = createContext<Dict | null>(null);

export const useDict = () => {
  const context = useContext(DictContext);
  if (!context) throw new Error("useDict must be used within DictProvider");
  return context;
};