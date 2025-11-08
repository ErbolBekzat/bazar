"use client";
import { ReactNode } from "react";
import { DictContext, Dict } from "./dict-context";

export const DictProvider = ({
  dict,
  children,
}: {
  dict: Dict;
  children: ReactNode;
}) => {
  return <DictContext.Provider value={dict}>{children}</DictContext.Provider>;
};
