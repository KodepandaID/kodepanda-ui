import cx from "clsx"
import { elementType, miscType, rotate, spacing, spacingType, translate } from "./generator"

interface Config {
  className?: string,
  element?: elementType,
  misc?: miscType,
  spacing?: spacingType
}

export function element(config: Config): string {
  const className = []

  if (config.className !== undefined) className.push(config.className)

  if (config.element !== undefined) {
    const e = config.element
    const cls = cx(
      (e.transform !== undefined && e.transform) && "transform",
      e.objectFit !== undefined && `object-${e.objectFit}`,
      e.rotate !== undefined && rotate(e.rotate),
      e.scale?.all !== undefined && `scale-${e.scale.all}`,
      e.scale?.x !== undefined && `scale-x-${e.scale.x}`,
      e.scale?.y !== undefined && `scale-y-${e.scale.y}`,
      e.translate !== undefined && translate(e.translate)
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
