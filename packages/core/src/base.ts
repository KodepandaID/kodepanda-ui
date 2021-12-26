import cx from "clsx"
import { bordered, coloring, filterType, flexboxType, gradient, miscType, modelType, positioning, positioningType, radius, responsive, responsiveType, spacing, spacingType, transitionType, visualType } from "./generator"

interface Config {
  className?: string,
  positioning?: positioningType,
  model?: modelType,
  flexbox?: flexboxType,
  responsive?: {
    sm?: responsiveType,
    md?: responsiveType,
    lg?: responsiveType,
    xl?: responsiveType,
    "2xl"?: responsiveType
  },
  visual?: visualType,
  spacing?: spacingType,
  filter?: filterType,
  transition?: transitionType,
  misc?: miscType
}

export function base(config: Config): string {
  const className = []

  if (config.className !== undefined) className.push(config.className)

  if (config.positioning !== undefined) {
    const p = config.positioning
    const cls = cx(
      (p.visible !== undefined && p.visible) && "visible",
      (p.visible !== undefined && !p.visible) && "invisible",
      p.position !== undefined && p.position,
      positioning("top", p.top),
      positioning("bottom", p.bottom),
      positioning("left", p.left),
      positioning("right", p.right),
      p.zIndex !== undefined && `z-${p.zIndex}`,
    )

    if (cls !== "") className.push(cls)
  }

  if (config.model !== undefined) {
    const m = config.model
    const cls = cx(
      m.display !== undefined && m.display,
      m.float !== undefined && `float-${m.float}`,
      (m.flowRoot !== undefined && m.flowRoot) && `flow-root`,
      m.overflow !== undefined && `overflow-${m.overflow}`,
      m.overflowX !== undefined && `overflow-x-${m.overflowX}`,
      m.overflowY !== undefined && `overflow-y-${m.overflowY}`,
      responsive(config.responsive, m.width, m.height)
    )

    if (cls !== "") className.push(cls)
  }

  if (config.flexbox !== undefined) {
    const f = config.flexbox
    const cls = cx(
      f.flex && "flex",
      f.direction !== undefined && `flex-${f.direction}`,
      f.wrap !== undefined && `flex-${f.wrap}`,
      f.justify !== undefined && `justify-${f.justify}`,
      f.justifyItems !== undefined && `justify-items-${f.justifyItems}`,
      f.alignContent !== undefined && `content-${f.alignContent}`,
      f.alignItems !== undefined && `items-${f.alignItems}`,
      f.verticalAlign !== undefined && `align-${f.verticalAlign}`
    )

    if (cls !== "") className.push(cls)
  }

  if (config.visual !== undefined) {
    const v = config.visual
    const cls = cx(
      `${coloring("bg", v.bgColor, v.bgColorContrast)}${v.bgOpacity !== undefined ? `/${v.bgOpacity}` : ""}`,
      (v.darkBgColor !== undefined && v.dark) && `dark:${coloring("bg", v.darkBgColor, v.darkBgColorContrast)}`,
      v.bgHoverColor !== undefined && `hover:${coloring("bg", v.bgHoverColor, v.bgHoverColorContrast)}`,
      v.bgGroupHoverColor !== undefined && `group-hover:${coloring("bg", v.bgGroupHoverColor, v.bgGroupHoverColorContrast)}`,
      (v.darkBgHoverColor !== undefined && v.dark) && `dark:hover:${coloring("bg", v.darkBgHoverColor, v.darkBgHoverColorContrast)}`,
      (v.darkBgGroupHoverColor !== undefined && v.dark) && `dark:group-hover:${coloring("bg", v.darkBgGroupHoverColor, v.darkBgGroupHoverColorContrast)}`,
      v.bgGradientPosition !== undefined && gradient(v.bgGradientPosition),
      coloring("from", v.bgGradientFromColor, v.bgGradientFromColorContrast),
      v.bgGradientFromHoverColor !== undefined && `hover:${coloring("from", v.bgGradientFromHoverColor, v.bgGradientFromHoverColorContrast)}`,
      coloring("via", v.bgGradientMiddleColor, v.bgGradientMiddleColorContrast),
      v.bgGradientMiddleHoverColor !== undefined && `hover:${coloring("via", v.bgGradientMiddleHoverColor, v.bgGradientMiddleHoverColorContrast)}`,
      coloring("to", v.bgGradientEndColor, v.bgGradientEndColorContrast),
      v.bgGradientEndHoverColor !== undefined && `hover:${coloring("to", v.bgGradientEndHoverColor, v.bgGradientEndHoverColorContrast)}`,
      v.borderWidth !== undefined && bordered(v.borderPosition, v.borderWidth),
      v.borderStyle !== undefined && `border-${v.borderStyle}`,
      v.borderColor !== undefined && coloring("border", v.borderColor, v.borderColorContrast),
      (v.darkBorderColor !== undefined && v.dark) && `dark:${coloring("border", v.darkBorderColor, v.darkBorderColorContrast)}`,
      v.borderHoverColor !== undefined && `hover:${coloring("border", v.borderHoverColor, v.borderHoverColorContrast)}`,
      (v.borderRadiusPosition !== undefined && v.borderRadius !== undefined) && `${radius(v.borderRadiusPosition, v.borderRadius)}`,
      (v.borderRadiusPosition === undefined && v.borderRadius !== undefined) && `rounded-${v.borderRadius}`,
      v.fillColor !== undefined && coloring("fill", v.fillColor, v.fillColorContrast),
      (v.darkFillColor !== undefined && v.dark) && `dark:${coloring("fill", v.darkFillColor, v.darkFillColorContrast)}`,
      v.strokeColor !== undefined && coloring("stroke", v.strokeColor, v.strokeColorContrast),
      v.shadow !== undefined && `shadow-${v.shadow}`,
      v.shadowColor !== undefined && `${coloring("shadow", v.shadowColor, v.shadowColorContrast)}/${v.shadowOpacity}`,
      (v.darkShadowColor !== undefined && v.dark) && `dark:${coloring("shadow", v.darkShadowColor, v.darkShadowColorContrast)}/${v.darkShadowOpacity}`,
      v.selectionColor !== undefined && `selection:${coloring("bg", v.selectionColor, v.selectionColorContrast === undefined ? 600 : v.selectionColorContrast)}`,
      (v.darkSelectionColor !== undefined && v.dark) && `selection:${coloring("bg", v.darkSelectionColor, v.darkSelectionColorContrast === undefined ? 600 : v.darkSelectionColorContrast)}`,
      v.selectionTextColor !== undefined && `selection:${coloring("text", v.selectionTextColor, v.selectionTextColorContrast)}`,
      (v.darkSelectionTextColor && v.dark) !== undefined && `selection:${coloring("text", v.darkSelectionTextColor, v.darkSelectionTextColorContrast)}`,
    )

    if (cls !== "") className.push(cls)
  }

  if (config.filter !== undefined) {
    const f = config.filter
    const cls = cx(
      f.blur !== undefined && `filter blur${f.blur !== "normal" ? `-${f.blur}` : ""}`
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
    const cls = spacing(s, config.responsive)

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
