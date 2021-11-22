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
      (config.responsive === undefined && m.width !== undefined) && `w-${m.width}`,
      (config.responsive === undefined && m.height !== undefined) && `h-${m.height}`
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

  if (config.responsive !== undefined) {
    const r = config.responsive
    const cls = responsive(r, config.model?.width, config.model?.height)

    if (cls !== "") className.push(cls)
  }

  if (config.visual !== undefined) {
    const v = config.visual
    const cls = cx(
      coloring("bg", v.bgColor, v.bgColorContrast),
      (v.darkBgColor !== undefined && v.dark) && `dark:${coloring("bg", v.darkBgColor, v.darkBgColorContrast)}`,
      v.bgHoverColor !== undefined && `hover:${coloring("bg", v.bgHoverColor, v.bgHoverColorContrast)}`,
      (v.darkBgHoverColor !== undefined && v.dark) && `dark:hover:${coloring("bg", v.darkBgHoverColor, v.darkBgHoverColorContrast)}`,
      v.bgGradientPosition !== undefined && gradient(v.bgGradientPosition),
      coloring("from", v.bgGradientFromColor, v.bgGradientFromColorContrast),
      v.bgGradientFromHoverColor !== undefined && `hover:${coloring("from", v.bgGradientFromHoverColor, v.bgGradientFromHoverColorContrast)}`,
      coloring("via", v.bgGradientMiddleColor, v.bgGradientMiddleColorContrast),
      v.bgGradientMiddleHoverColor !== undefined && `hover:${coloring("via", v.bgGradientMiddleHoverColor, v.bgGradientMiddleHoverColorContrast)}`,
      coloring("to", v.bgGradientEndColor, v.bgGradientEndColorContrast),
      v.bgGradientEndHoverColor !== undefined && `hover:${coloring("to", v.bgGradientEndHoverColor, v.bgGradientEndHoverColorContrast)}`,
      v.borderWidth !== undefined && bordered(v.borderPosition, v.borderWidth),
      v.borderStyle !== undefined && `border-${v.borderStyle}`,
      coloring("border", v.borderColor, v.borderColorContrast),
      v.borderHoverColor !== undefined && `hover:${coloring("border", v.borderHoverColor, v.borderHoverColorContrast)}`,
      (v.borderRadiusPosition !== undefined && v.borderRadius !== undefined) && `${radius(v.borderRadiusPosition, v.borderRadius)}`,
      (v.borderRadiusPosition === undefined && v.borderRadius !== undefined) && `rounded-${v.borderRadius}`,
      v.shadow !== undefined && `shadow-${v.shadow}`,
      v.shadowOffset !== undefined && `shadow-offset-${v.shadowOffset}`
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
