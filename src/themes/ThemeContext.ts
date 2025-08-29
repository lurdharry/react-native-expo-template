import { createContext } from "react";

import themeStyles, { Theme } from "./themeStyles";

const ThemeContext = createContext<Theme>(themeStyles);

export default ThemeContext;
