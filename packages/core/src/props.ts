import React from "react";
import { BorderRadius, BorderRadiusPosition, BorderStyle, BorderWidth, BoxShadow, Color, ColorContrast, Display, Float, FontSize, FontWeight, LineHeight, Position, PositionScale, Rotate, Scale, Size, TextAlignment, TextDecoration, TextOverflow, TextTransform, Translate, WordBreak, ZIndex } from "."
import { responsiveType } from "./generator";

export interface StandardProps {
  id?: string
  className?: string,
  dark?: boolean,
  border?: boolean,
  children?: React.ReactNode
}

export interface AriaProps {
  ariaLabel?: string,
  ariaLabelledBy?: string
}

export interface ColorProps {
  color?: Color,
  colorContrast?: ColorContrast,
  colorHover?: Color,
  colorHoverContrast?: ColorContrast,
  darkColor?: Color,
  darkColorContrast?: ColorContrast,
  darkColorHover?: Color,
  darkColorHoverContrast?: ColorContrast
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

export interface PositioningProps {
  position?: Position,
  visible?: boolean,
  top?: PositionScale,
  right?: PositionScale,
  bottom?: PositionScale,
  left?: PositionScale,
  zIndex?: ZIndex
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
  borderColorContrast?: ColorContrast,
  darkBorderColor?: Color,
  darkBorderColorContrast?: ColorContrast,
  borderHoverColor?: Color,
  borderHoverColorContrast?: ColorContrast,
  borderStyle?: BorderStyle,
  roundedPosition?: BorderRadiusPosition,
  rounded?: BorderRadius,
  shadow?: BoxShadow,
  shadowColor?: Color,
  shadowColorContrast?: ColorContrast,
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

export interface VisualTextProps {
  textColor?: Color,
  textColorContrast?: ColorContrast,
  textColorHover?: Color,
  textColorHoverContrast?: ColorContrast,
  darkTextColor?: Color,
  darkTextColorContrast?: ColorContrast,
  darkTextColorHover?: Color,
  darkTextColorHoverContrast?: ColorContrast,
  decorationColor?: Color,
  decorationColorContrast?: ColorContrast
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
