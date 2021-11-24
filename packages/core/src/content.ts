import cx from "clsx"
import { flexboxType, gridType, modelType, responsive, responsiveType, spaceBetween, spaceBetweenType, spacing, spacingType } from "./generator"

interface Config {
  className?: string,
  flexbox?: flexboxType,
  grid?: gridType,
  model?: modelType,
  responsive?: {
    sm?: responsiveType,
    md?: responsiveType,
    lg?: responsiveType,
    xl?: responsiveType,
    "2xl"?: responsiveType
  },
  spacing?: spacingType,
  spaceBetween?: spaceBetweenType
}

export function content(config: Config): string {
  const className = []

  if (config.className !== undefined) className.push(config.className)

  if (config.flexbox !== undefined) {
    const f = config.flexbox
    const cls = cx(
      f.flex && "flex",
      f.flexNone && "flex-none",
      f.flexGrow && "flex-grow",
      f.flexShrink && "flex-shrink",
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

  if (config.grid !== undefined) {
    const g = config.grid
    const cls = cx(
      g.grid && "grid",
      g.autoFlow !== undefined && `grid-${g.autoFlow}`,
      g.autoColumn !== undefined && `auto-${g.autoColumn}`,
      g.cols !== undefined && `grid-cols-${g.cols}`,
      g.rows !== undefined && `grid-rows-${g.rows}`,
      g.gap !== undefined && `gap-${g.gap}`,
      g.gapX !== undefined && `gap-x-${g.gapX}`,
      g.gapY !== undefined && `gap-y-${g.gapY}`
    )

    if (cls !== "") className.push(cls)
  }

  if (config.model !== undefined) {
    const m = config.model
    const cls = cx(
      m.display !== undefined && m.display,
      m.float !== undefined && `float-${m.float}`,
      (m.flowRoot !== undefined && m.flowRoot) && `flow-root`,
      m.width !== undefined && `w-${m.width}`,
      m.height !== undefined && `h-${m.height}`
    )

    if (cls !== "") className.push(cls)
  }

  if (config.responsive !== undefined) {
    const r = config.responsive
    const cls = responsive(r, config.model?.width, config.model?.height)

    if (cls !== "") className.push(cls)
  }

  if (config.spacing !== undefined) {
    const s = config.spacing
    const cls = spacing(s, undefined)

    if (cls !== "") className.push(cls)
  }

  if (config.spaceBetween !== undefined) {
    const s = config.spaceBetween
    const cls = spaceBetween(s)

    if (cls !== "") className.push(cls)
  }

  return cx(...className)
}
