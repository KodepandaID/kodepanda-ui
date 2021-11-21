import React from "react";
import { BorderRadius, BorderRadiusPosition, BorderStyle, BorderWidth, BoxShadow, Color, ColorContrast, Display, Float, FontSize, FontWeight, LineHeight, PositionScale, Rotate, Scale, Size, TextAlignment, TextDecoration, TextOverflow, TextTransform, Translate, WordBreak } from "."
import { responsiveType } from "./generator";

export interface StandardProps {
  id?: string
  className?: string,
  children?: React.ReactNode,
}

export interface ResponsiveProps {
  sm?: responsiveType,
  md?: responsiveType,
  lg?: responsiveType,
  xl?: responsiveType,
  "2xl"?: responsiveType
}

export interface ModelProps {
  display?: Display,
  float?: Float,
  flowRoot?: boolean,
  width?: Size,
  height?: Size
}

export interface VisualProps {
  bgColor?: Color,
  bgColorContrast?: ColorContrast,
  bgColorHover?: Color,
  bgColorHoverContrast?: ColorContrast,
  darkBgColor?: Color,
  darkBgColorContrast?: ColorContrast,
  darkBgColorHover?: Color,
  darkBgColorHoverContrast?: ColorContrast,
  bgGradientPosition?: "top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right" | "left" | "right",
  bgGradientFromColor?: Color,
  bgGradientFromColorContrast?: ColorContrast,
  bgGradientFromHoverColor?: Color,
  bgGradientFromHoverColorContrast?: ColorContrast,
  bgGradientMiddleColor?: Color,
  bgGradientMiddleColorContrast?: ColorContrast,
  bgGradientMiddleHoverColor?: Color,
  bgGradientMiddleHoverColorContrast?: ColorContrast,
  bgGradientEndColor?: Color,
  bgGradientEndColorContrast?: ColorContrast,
  bgGradientEndHoverColor?: Color,
  bgGradientEndHoverColorContrast?: ColorContrast,
  borderPosition?: "top" | "bottom" | "left" | "right",
  borderWidth?: BorderWidth,
  borderColor?: Color,
  borderColorContrast?: ColorContrast | number,
  borderHoverColor?: Color,
  borderHoverColorContrast?: ColorContrast,
  borderStyle?: BorderStyle,
  roundedPosition?: BorderRadiusPosition,
  rounded?: BorderRadius,
  shadow?: BoxShadow,
  shadowOffset?: Color
}

export interface SpacingProps {
  mx?: PositionScale,
  my?: PositionScale,
  mb?: PositionScale,
  ml?: PositionScale,
  mr?: PositionScale,
  mt?: PositionScale
  px?: PositionScale,
  py?: PositionScale,
  pb?: PositionScale,
  pl?: PositionScale,
  pr?: PositionScale,
  pt?: PositionScale
}

export interface TextProps extends StandardProps, SpacingProps {
  text?: boolean,
  italic?: boolean,
  strong?: boolean,
  mark?: boolean,
  code?: boolean,
  underline?: boolean,
  delete?: boolean,
  color?: Color,
  colorContrast?: ColorContrast,
  colorHover?: Color,
  colorHoverContrast?: ColorContrast,
  darkColor?: Color,
  darkColorContrast?: ColorContrast,
  darkColorHover?: Color,
  darkColorHoverContrast?: ColorContrast,
  fontSize?: FontSize,
  fontWeight?: FontWeight,
  lineHeight?: LineHeight,
  textAlign?: TextAlignment,
  textDecoration?: TextDecoration,
  textTransform?: TextTransform,
  textOverflow?: TextOverflow,
  wordBreak?: WordBreak,
}

export interface ElementProps {
  rotate?: Rotate,
  translate?: {
    all?: Translate,
    x?: Translate,
    y?: Translate
  }
  scale?: {
    all?: Scale,
    x?: Scale,
    y?: Scale
  }
}
