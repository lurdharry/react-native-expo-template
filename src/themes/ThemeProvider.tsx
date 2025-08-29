import React, { ReactNode } from "react";

import ThemeContext from "./ThemeContext";
import themeStyles from "./themeStyles";

type ThemeProviderProps = {
  children: ReactNode;
};

export default function ThemeProvider({ children }: ThemeProviderProps) {
  return <ThemeContext.Provider value={themeStyles}>{children}</ThemeContext.Provider>;
}
