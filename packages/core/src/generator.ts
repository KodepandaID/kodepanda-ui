import cx from "clsx"
import { Blur, BorderRadiusPosition, TextDecoration } from "."
import { AlignContent, AlignItems, Animation, BorderRadius, BorderStyle, BorderWidth, BoxShadow, Color, ColorContrast,Cursor, Delay, Display, Duration, FlexDirection, FlexWrap, Float, FontSize, FontWeight, Gap, GridCols, GridRows, JustifyContent, JustifyItems, LineHeight, ObjectFit, Opacity, Position, PositionScale, Rotate, Scale, Size, SpaceBetween, TextAlignment, TextOverflow, TextTransform, TimingFunction, Transition, Translate, UserSelect, WordBreak } from "./types"

export type responsiveType = {
  width?: Size,
  height?: Size,
  mx?: PositionScale,
  my?: PositionScale,
  mb?: PositionScale,
  ml?: PositionScale,
  mr?: PositionScale,
  mt?: PositionScale,
  px?: PositionScale,
  py?: PositionScale,
  pb?: PositionScale,
  pl?: PositionScale,
  pr?: PositionScale,
  pt?: PositionScale
}

export type positioningType = {
  position?: Position,
  visible?: boolean,
  top?: PositionScale,
  right?: PositionScale,
  bottom?: PositionScale,
  left?: PositionScale,
  zIndex?: PositionScale
}

export type flexboxType = {
  flex: boolean,
  direction?: FlexDirection,
  wrap?: FlexWrap,
  grow?: boolean,
  shrink?: boolean,
  justify?: JustifyContent,
  justifyItems?: JustifyItems,
  alignContent?: AlignContent,
  alignItems?: AlignItems
}

export type gridType = {
  cols?: GridCols,
  rows?: GridRows,
  gap?: Gap
}

export type modelType = {
  display?: Display,
  float?: Float,
  flowRoot?: boolean,
  width?: Size,
  height?: Size
}

export type visualType = {
  dark: boolean,
  bgColor?: Color,
  bgColorContrast?: ColorContrast,
  darkBgColor?: Color,
  darkBgColorContrast?: ColorContrast,
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

export type visualTextType = {
  dark: boolean,
  bgColor?: Color,
  bgColorContrast?: ColorContrast,
  bgColorHover?: Color,
  bgColorHoverContrast?: ColorContrast,
  textColor?: Color,
  textColorContrast?: ColorContrast,
  darkTextColor?: Color,
  darkTextColorContrast?: ColorContrast,
  textHoverColor?: Color,
  textHoverColorContrast?: ColorContrast,
  darkTextHoverColor?: Color,
  darkTextHoverColorContrast?: ColorContrast,
  fontSize?: FontSize | string,
  fontWeight?: FontWeight,
  lineHeight?: LineHeight,
  textAlign?: TextAlignment,
  textDecoration?: TextDecoration,
  textTransform?: TextTransform,
  textOverflow?: TextOverflow,
  wordBreak?: WordBreak
}

export type elementType = {
  objectFit?: ObjectFit,
  transform?: boolean,
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

export type spacingType = {
  mx?: PositionScale,
  my?: PositionScale,
  mb?: PositionScale,
  ml?: PositionScale,
  mr?: PositionScale,
  mt?: PositionScale,
  px?: PositionScale,
  py?: PositionScale,
  pb?: PositionScale,
  pl?: PositionScale,
  pr?: PositionScale,
  pt?: PositionScale
}

export type spaceBetweenType = {
  x?: SpaceBetween,
  y?: SpaceBetween
}

export type transitionType = {
  transition?: Transition,
  duration?: Duration,
  ease?: TimingFunction,
  delay?: Delay,
  animation?: Animation
}

export type filterType = {
  blur?: Blur
}

export type miscType = {
  cursor?: Cursor,
  opacity?: Opacity,
  userSelect?: UserSelect
}

export function positioning(p: string, s: PositionScale | undefined): string {
  if (p === undefined || s === undefined) return ""

  const cls = cx(
    typeof s === "string" && `${p}-${s}`,
    (typeof s === "number" && s >= 0) ? `${p}-${s}` : `-${p}-${s}`,
  )

  return cls
}

export function responsive(s: {
  sm?: responsiveType,
  md?: responsiveType,
  lg?: responsiveType,
  xl?: responsiveType,
  "2xl"?: responsiveType
}, width: Size | undefined, height: Size | undefined): string {
  if (s === undefined) return ""

  const cls = cx(
    s.sm?.width !== undefined && `w-${s.sm.width}`,
    (s.md?.width !== undefined && s.sm !== undefined) && `md:w-${s.md.width}`,
    (s.md?.width !== undefined && s.sm === undefined) && `w-${s.md.width}`,
    s.lg?.width !== undefined && `lg:w-${s.lg.width}`,
    s.xl?.width !== undefined && `xl:w-${s.xl.width}`,
    s["2xl"] !== undefined && `2xl:w-${s["2xl"].width}`,
    (width !== undefined && s.sm?.width === undefined && s.md?.width === undefined) && `w-${width}`,
    (width !== undefined && s.sm?.width !== undefined && s.lg?.width === undefined) && `lg:w-${width}`,
    (width !== undefined && s.sm?.width === undefined && s.md?.width !== undefined && s.lg?.width === undefined) && `lg:w-${width}`,
    height !== undefined && `h-${height}`
  )

  return cls
}

export function coloring(t: "bg" | "text" | "border" | "from" | "via" | "to", color: Color | undefined, contrast: ColorContrast | number | undefined): string {
  if (color === undefined) return ""

  if (color !== undefined && contrast === undefined) contrast = 700
  return `${t}-${color}${(color === "white" || color === "black" || color === "transparent") ? "":`-${contrast}`}`
}

export function gradient(g: string | undefined): string {
  const p: any = {
    "top": "bg-gradient-to-t",
    "top-left": "bg-gradient-to-tl",
    "top-right": "bg-gradient-to-tr",
    "bottom": "bg-gradient-to-b",
    "bottom-left": "bg-gradient-to-bl",
    "bottom-right": "bg-gradient-to-br",
    "left": "bg-gradient-to-l",
    "right": "bg-gradient-to-r"
  }

  const cls = g !== undefined && p[g]

  return cls
}

export function bordered(b: string | undefined, s: string | number | undefined): string {
  const p: any = {
    "top": "border-t",
    "bottom": "border-b",
    "left": "border-l",
    "right": "border-r"
  }

  const cls = cx(
    (b === undefined && s === "normal") && "border",
    (b === undefined && s !== "normal") && `border-${s}`,
    (s === "normal" && b !== undefined) && p[b],
    (s !== "normal" && b !== undefined && s !== undefined) && `${p[b]}-${s}`
  )

  return cls
}

export function radius(r: string | undefined, s: string | number | undefined): string {
  const p: any = {
    "top": "rounded-t",
    "top-left": "rounded-tl",
    "top-right": "rounded-tr",
    "bottom": "rounded-b",
    "bottom-left": "rounded-bl",
    "bottom-right": "rounded-br",
    "left": "rounded-l",
    "right": "rounded-r"
  }

  const cls = cx(
    (s === "normal" && r !== undefined) && p[r],
    (s !== "normal" && r !== undefined && s !== undefined) && `${p[r]}-${s}`
  )

  return cls
}

export function spacing(s: spacingType, rs: {
  sm?: responsiveType,
  md?: responsiveType,
  lg?: responsiveType,
  xl?: responsiveType,
  "2xl"?: responsiveType
} | undefined): string {
  const className: string[] = []

  const keys = Object.keys(s)
  keys.forEach((key) => {
    const val = (s as any)[key]
    if (rs !== undefined) {
      const sm = (rs.sm as any)?.[key]
      const md = (rs.md as any)?.[key]
      const lg = (rs.lg as any)?.[key]
      const xl = (rs.xl as any)?.[key]
      const xxl = (rs["2xl"] as any)?.[key]

      if ((sm !== undefined && sm >= 0) || (sm !== undefined && sm === "auto")) className.push(`${key}-${sm}`)
      if (sm !== undefined && sm < 0) className.push(`-${key}-${sm}`)

      if ((md !== undefined && md >= 0) || (md !== undefined && md === "auto")) className.push(`md:${key}-${md}`)
      if (md !== undefined && md < 0) className.push(`md:-${key}-${md}`)

      if ((lg !== undefined && lg >= 0) || (lg !== undefined && lg === "auto")) className.push(`lg:${key}-${lg}`)
      if (lg !== undefined && lg < 0) className.push(`lg:-${key}-${lg}`)

      if ((xl !== undefined && xl >= 0) || (xl !== undefined && xl === "auto")) className.push(`xl:${key}-${xl}`)
      if (xl !== undefined && xl < 0) className.push(`xl:-${key}-${xl}`)

      if ((xxl !== undefined && xxl >= 0) || (xxl !== undefined && xxl === "auto")) className.push(`2xl:${key}-${xxl}`)
      if (xxl !== undefined && xxl < 0) className.push(`2xl:-${key}-${xxl}`)

      if ((val !== undefined && val >= 0) || val === "auto") {
        className.push(cx(
          (val !== undefined && (rs.sm as any)?.[key] === undefined && (rs.md as any)?.[key] === undefined) && `${key}-${val}`,
          (val !== undefined && (rs.sm as any)?.[key] !== undefined && (rs.lg as any)?.[key] === undefined) && `lg:${key}-${val}`,
          (val !== undefined && (rs.sm as any)?.[key] === undefined && (rs.md as any)?.[key] !== undefined && (rs.lg as any)[key] === undefined) && `lg:${key}-${val}`,
        ))
      }

      if (val !== undefined && val < 0) {
        className.push(cx(
          (val !== undefined && (rs.sm as any)?.[key] === undefined && (rs.md as any)?.[key] === undefined) && `-${key}-${val}`,
          (val !== undefined && (rs.sm as any)?.[key] !== undefined && (rs.lg as any)?.[key] === undefined) && `lg:-${key}-${val}`,
          (val !== undefined && (rs.sm as any)?.[key] === undefined && (rs.md as any)?.[key] !== undefined && (rs.lg as any)[key] === undefined) && `lg:-${key}-${val}`,
        ))
      }
    } else {
      if ((val !== undefined && val >= 0) || val === "auto") className.push(`${key}-${val}`)
      if (val !== undefined && val < 0) className.push(`-${key}-${val}`)
    }
  })

  const cls = cx(...className)

  return cls
}

export function spaceBetween(s: spaceBetweenType):string {
  const cls = cx(
    (s.x !== undefined && s.x >= 0) && `space-x-${s.x}`,
    (s.x !== undefined && s.x < 0) && `-space-x-${s.x}`,
    (s.y !== undefined && s.y >= 0) && `space-y-${s.y}`,
    (s.y !== undefined && s.y < 0) && `-space-y-${s.y}`
  )

  return cls
}

export function rotate(r: Rotate):string {
  const cls = cx(
    (r !== undefined && r >= 0) && `rotate-${rotate}`,
    (r !== undefined && r < 0) && `-rotate-${rotate}`
  )

  return cls
}

export function translate(t: {
  all?: Translate,
  x?: Translate,
  y?: Translate
}): string {
  const cls = cx(
    (t.all !== undefined && t.all >= 0) && `translate-${t.all}`,
    (t.all !== undefined && t.all < 0) && `-translate${t.all}`,
    (t.all !== undefined && typeof t.all === "string" && !t.all.includes("-")) && `translate-${t.all}`,
    (t.all !== undefined && typeof t.all === "string" && t.all.includes("-")) && `-translate${t.all}`,
    (t.x !== undefined && t.x >= 0) && `translate-x-${t.x}`,
    (t.x !== undefined && t.x < 0) && `-translate-x${t.x}`,
    (t.x !== undefined && typeof t.x === "string" && !t.x.includes("-")) && `translate-x-${t.x}`,
    (t.x !== undefined && typeof t.x === "string" && t.x.includes("-")) && `-translate-x${t.x}`,
    (t.y !== undefined && t.y >= 0) && `translate-y-${t.y}`,
    (t.y !== undefined && t.y < 0) && `-translate-y${t.y}`,
    (t.y !== undefined && typeof t.y === "string" && !t.y.includes("-")) && `translate-y-${t.y}`,
    (t.y !== undefined && typeof t.y === "string" && t.y.includes("-")) && `-translate-y${t.y}`
  )

  return cls
}
