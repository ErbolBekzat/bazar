"use client";
import { createContext, useContext } from "react";

export type Dict = any;
export const DictContext = createContext<Dict | null>(null);

export const useDict = () => {
  const context = useContext(DictContext);
  if (!context) throw new Error("useDict must be used within DictProvider");
  return context;
};
