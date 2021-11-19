import React from "react";
import { BorderRadius, BorderRadiusPosition, BorderStyle, BorderWidth, BoxShadow, Color, ColorContrast, Display, Float, FontSize, FontWeight, LineHeight, PositionScale, Size, TextAlignment, TextDecoration, TextOverflow, TextTransform, WordBreak } from "."
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
  bgHoverColor?: Color,
  bgHoverColorContrast?: ColorContrast,
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
  borderRadiusPosition?: BorderRadiusPosition,
  borderRadius?: BorderRadius,
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
  darkColor?: Color,
  darkColorContrast?: ColorContrast,
  colorHover?: Color,
  colorHoverContrast?: ColorContrast,
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

export interface LinkProps extends StandardProps, SpacingProps, TextProps {
  href: string,
  target?: "_self" | "_blank" | "_parent" | "_top"
}

export interface HeaderProps extends StandardProps, SpacingProps, TextProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
  uppercase?: boolean,
  lowercase?: boolean,
  capitalize?: boolean,
  ellipsis?: boolean
}

export interface BlockquoteProps extends ResponsiveProps, ModelProps, StandardProps, VisualProps, SpacingProps, TextProps {
  cite?: string,
  quote?: boolean,
  quoteColor?: Color,
  quoteColorContrast?: ColorContrast,
  darkQuoteColor?: Color,
  darkQuoteColorContrast?: ColorContrast,
  bgCaptionGradientPosition?: "top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right" | "left" | "right",
  bgCaptionColor?: Color,
  bgCaptionColorContrast?: ColorContrast
  darkBgCaptionColor?: Color,
  darkBgCaptionColorContrast?: ColorContrast,
  bgCaptionGradientFromColor?: Color,
  bgCaptionGradientFromColorContrast?: ColorContrast,
  bgCaptionGradientMiddleColor?: Color,
  bgCaptionGradientMiddleColorContrast?: ColorContrast,
  bgCaptionGradientEndColor?: Color,
  bgCaptionGradientEndColorContrast?: ColorContrast,
  caption?: React.ReactNode
}
