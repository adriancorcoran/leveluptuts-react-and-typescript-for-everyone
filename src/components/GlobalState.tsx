import { createContext } from "react";

export const initialValues = {
  rValue: true,
};

export const GlobalContext = createContext(initialValues);
