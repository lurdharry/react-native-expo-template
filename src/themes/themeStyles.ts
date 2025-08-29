import colors from "./colors";
import fonts from "./fonts";
import { fontSizing, hSpacing, namedSpacing, rawSpacing, spacing, vSpacing } from "./spacing";
import typography from "./typography";

const themeStyles = {
  colors,
  dimensions: {
    borderRadius: 6,
    borderRadiusCard: 8,
    button: {
      borderWidth: 1,
    },
  },
  fontSizing,
  fonts,
  hSpacing,
  namedSpacing,
  rawSpacing,
  spacing,
  typography,
  vSpacing,
};

export type Theme = typeof themeStyles;

export default themeStyles;
