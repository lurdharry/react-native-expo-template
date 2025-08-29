import { Dimensions, PixelRatio } from "react-native";

const { height, width } = Dimensions.get("screen");

export const PICKER_WHEEL_VALUE_HEIGHT = 7;
export const BASIC_DEVICE_WIDTH = 360;
export const BASIC_DEVICE_HEIGHT = 758;
export const BASELINE_GRID: number = 8;
export const BASIC_PIXEL_RATIO: number = 3;

export type Scaling = number;

export interface BiasedRatioProps {
  common: number;
  horizontal: number;
  vertical: number;
}

// PixelRatio description: https://facebook.github.io/react-native/docs/pixelratio#get
// BASELINE_GRID, BASIC_DEVICE_WIDTH, BASIC_DEVICE_HEIGHT are taken from design template as basic values

const biasedRatio: BiasedRatioProps = {
  common: PixelRatio.get() / BASIC_PIXEL_RATIO,
  horizontal: width / BASIC_DEVICE_WIDTH,
  vertical: height / BASIC_DEVICE_HEIGHT,
};

const scalingFactor = (scaling: Scaling): number => scaling;

// for elements with fixed sizes over all of the screen dimensions: Fab button
const rawSpacing = (scaling: Scaling = 1): number => scalingFactor(scaling);

// to apply spacing to elements with no particular direction: border corner radiuses, ect.
const spacing = (scaling: Scaling = 1): number => scalingFactor(scaling) * biasedRatio.common;

// hSpacing for "horizontal spacing": top and bottom margins/paddings, View's heigth, etc.
const hSpacing = (scaling: Scaling = 1): number =>
  PixelRatio.roundToNearestPixel(scalingFactor(scaling) * biasedRatio.horizontal);
// vSpacing for "vertical spacing": right and left margins/paddinggs, View's width, etc.
const vSpacing = (scaling: Scaling = 1): number =>
  PixelRatio.roundToNearestPixel(scalingFactor(scaling) * biasedRatio.vertical);

const fontSizing = (value: number) => (hSpacing(value) + vSpacing(value)) / 2;

const SPACING = {
  lg: 32,
  md: 24,
  none: 0,
  sm: 16,
  xl: 48,
  xs: 8,
  xxl: 64,
  xxs: 4,
};

/**
 * rawSpacing -> namedSpacing
 * ----
 * - **0** - "none" | 0
 * - **.5** - "xxs" (4)
 * - **1** - "xs" (8)
 * - **2** - "sm" (16),
 * - **3** - "md" (24),
 * - **4** - "lg" (32),
 * - **6** - "xl" (48),
 * - **8** - "xxl" (64),
 */

export type Factor = keyof typeof SPACING;

const namedSpacing = (factor: Factor) => SPACING[factor];

export { fontSizing, hSpacing, namedSpacing, rawSpacing, spacing, vSpacing };
