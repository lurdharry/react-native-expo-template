import { TextStyle } from "react-native";

import fonts from "./fonts";
import { fontSizing } from "./spacing";

export type TextVariant =
  | "h1"
  | "h3"
  | "h5"
  | "h6"
  | "body2"
  | "body1"
  | "body3"
  | "caption"
  | "overline"
  | "subtitle2"
  | "subtitle3"
  | "label"
  | "subtitle1"
  | "subtitle";
// | 'h4'
// | 'button'
// | 'h2'
// | 'subtitle1'
// | 'subtitle2'
// | 'subtitle4'

type TypographyStyle = {
  [key in TextVariant]: TextStyle;
};

const typography: TypographyStyle = {
  body1: {
    fontFamily: fonts.regular,
    fontSize: fontSizing(14),
  },

  // subtitle4: {
  //   fontSize: 14,

  //   fontFamily: fonts.semibold,
  // },
  body2: {
    fontFamily: fonts.regular,
    fontSize: fontSizing(16),
  },
  body3: {
    fontFamily: fonts.regular,
    fontSize: fontSizing(18),
  },
  caption: {
    fontFamily: fonts.regular,
    fontSize: fontSizing(12),
  },
  h1: {
    fontFamily: fonts.light,
    fontSize: 44,
  },

  // h2: {
  //   fontSize: 40,
  //   fontFamily: fonts.medium,
  // },
  h3: {
    fontFamily: fonts.light,
    fontSize: 40,
  },

  // h4: {
  //   fontSize: 32,
  //   fontFamily: fonts.medium,
  // },
  h5: {
    fontFamily: fonts.light,
    fontSize: 36,
  },

  h6: {
    fontFamily: fonts.regular,
    fontSize: fontSizing(32),
  },
  label: {
    fontFamily: fonts.regular,
    fontSize: 10,
  },
  overline: {
    fontFamily: fonts.bold,
    fontSize: 14,

    textTransform: "uppercase",
  },
  subtitle: {
    fontFamily: fonts.medium,
    fontSize: fontSizing(20),
  },
  subtitle1: {
    fontFamily: fonts.medium,
    fontSize: fontSizing(24),
  },
  subtitle2: {
    fontFamily: fonts.regular,
    fontSize: fontSizing(14),
  },
  subtitle3: {
    fontFamily: fonts.regular,
    fontSize: fontSizing(14),
  },
};

export default typography;
