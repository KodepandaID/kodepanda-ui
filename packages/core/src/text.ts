import cx from "clsx"
import { bordered, coloring, miscType, spacing, spacingFirstLetter, spacingType, transitionType, visualTextType, visualType } from "./generator"

interface Config {
  className?: string,
  visual?: visualType,
  visualText?: visualTextType,
  spacing?: spacingType,
  transition?: transitionType,
  misc?: miscType
}

export function text(config: Config): string {
  const className = []

  if (config.className !== undefined) className.push(config.className)

  if (config.visual !== undefined) {
    const v = config.visual
    const cls = cx(
      v.borderWidth !== undefined && bordered(v.borderPosition, v.borderWidth),
      coloring("border", v.borderColor, v.borderColorContrast),
      v.borderStyle !== undefined && `border-${v.borderStyle}`,
      v.shadow !== undefined && `shadow-${v.shadow}`
    )

    if (cls !== "") className.push(cls)
  }

  if (config.visualText !== undefined) {
    const v = config.visualText
    const cls = cx(
      v.bgColor !== undefined && coloring("bg", v.bgColor, v.bgColorContrast),
      v.bgColorHover !== undefined && `hover:${coloring("bg", v.bgColorHover, v.bgColorHoverContrast)}`,
      v.textColor !== undefined && coloring("text", v.textColor, v.textColorContrast),
      (v.darkTextColor !== undefined && v.dark) && `dark:${coloring("text", v.darkTextColor, v.darkTextColorContrast)}`,
      v.textHoverColor !== undefined && `hover:${coloring("text", v.textHoverColor, v.textHoverColorContrast)}`,
      (v.darkTextHoverColor !== undefined && v.dark) && `dark:hover:${coloring("text", v.darkTextHoverColor, v.darkTextHoverColorContrast)}`,
      v.fontSize !== undefined && `text-${v.fontSize}`,
      v.fontWeight !== undefined && `font-${v.fontWeight}`,
      v.lineHeight !== undefined && `leading-${v.lineHeight}`,
      v.textAlign !== undefined && `text-${v.textAlign}`,
      v.textDecoration !== undefined && v.textDecoration,
      (v.textDecoration !== undefined && v.textDecorationColor !== undefined) && `${coloring("decoration", v.textDecorationColor, v.textDecorationColorContrast)}`,
      (v.textDecoration !== undefined && v.darkTextDecorationColor !== undefined) && `dark:${coloring("decoration", v.darkTextDecorationColor, v.darkTextDecorationColorContrast)}`,
      v.textDecorationStyle !== undefined && `decoration-${v.textDecorationStyle}`,
      v.textDecorationWidth !== undefined && `decoration-${v.textDecorationWidth}`,
      v.textTransform !== undefined && v.textTransform,
      v.textOverflow !== undefined && v.textOverflow,
      v.textUnderlineOffset !== undefined && `underline-offset-${v.textUnderlineOffset}`,
      v.textIndent !== undefined && `indent-${v.textIndent}`,
      v.firstLetterTextTransform !== undefined && `first-letter:${v.textTransform}`,
      v.firstLetterTextColor !== undefined && `first-letter:${coloring("text", v.firstLetterTextColor, v.firstLetterTextColorContrast)}`,
      v.firstLetterFontWeight !== undefined && `first-letter:font-${v.firstLetterFontWeight}`,
      v.firstLetterFontSize !== undefined && `first-letter:text-${v.firstLetterFontSize}`,
      v.firstLetterSpacing !== undefined && spacingFirstLetter(v.firstLetterSpacing),
      v.firstLetterFloat !== undefined && `first-letter:float-${v.firstLetterFloat}`,
      v.listStylePosition !== undefined && `list-${v.listStylePosition}`,
      v.listType !== undefined && `list-${v.listType}`,
      v.wordBreak !== undefined && `break-${v.wordBreak}`
    )

    if (cls !== "") className.push(cls)
  }

  if (config.transition !== undefined) {
    const t = config.transition
    const cls = cx(
      (t.transition !== undefined && t.transition !== "normal") && `transition-${t.transition}`,
      (t.transition !== undefined && t.transition === "normal") && "transition",
      t.duration !== undefined && `duration-${t.duration}`,
      t.ease !== undefined && `ease-${t.ease}`,
      t.delay !== undefined && `delay-${t.delay}`,
      t.animation !== undefined && `animate-${t.animation}`
    )

    if (cls !== "") className.push(cls)
  }

  if (config.spacing !== undefined) {
    const s = config.spacing
    const cls = spacing(s, undefined)

    if (cls !== "") className.push(cls)
  }

  if (config.misc !== undefined) {
    const m = config.misc
    const cls = cx(
      m.cursor !== undefined && `cursor-${m.cursor}`,
      m.opacity !== undefined && `opacity-${m.opacity}`,
      m.userSelect !== undefined && `select-${m.userSelect}`,
      (m.divideX !== undefined && m.divideX === "normal") && "divide-x",
      (m.divideX !== undefined && m.divideX !== "normal") && `divide-x-${m.divideX}`,
      (m.divideY !== undefined && m.divideY === "normal") && "divide-y",
      (m.divideY !== undefined && m.divideY !== "normal") && `divide-y-${m.divideY}`
    )

    if (cls !== "") className.push(cls)
  }

  return cx(...className)
}
