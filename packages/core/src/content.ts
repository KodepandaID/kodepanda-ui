import cx from "clsx"
import { flexboxType, modelType, spaceBetween, spaceBetweenType } from "./generator"

interface Config {
  className?: string,
  flexbox?: flexboxType,
  model?: modelType,
  spaceBetween?: spaceBetweenType
}

export function content(config: Config): string {
  const className = []

  if (config.className !== undefined) className.push(config.className)

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

  if (config.spaceBetween !== undefined) {
    const s = config.spaceBetween
    const cls = spaceBetween(s)

    if (cls !== "") className.push(cls)
  }

  return cx(...className)
}
