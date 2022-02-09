import cx from "clsx"
import { responsiveFlexbox, responsiveText, responsiveType } from "./generator"

interface Config {
  responsiveFlexbox?: {
    sm?: responsiveType,
    md?: responsiveType,
    lg?: responsiveType,
    xl?: responsiveType,
    "2xl"?: responsiveType
  },
  responsiveText?: {
    sm?: responsiveType,
    md?: responsiveType,
    lg?: responsiveType,
    xl?: responsiveType,
    "2xl"?: responsiveType
  },
}

export function responsiveStyle(config: Config): string {
  const className = []

  if (config.responsiveFlexbox !== undefined) {
    const f = config.responsiveFlexbox
    const cls = responsiveFlexbox(f)
    if (cls !== "") className.push(cls)
  }

  if (config.responsiveText !== undefined) {
    const t = config.responsiveText
    const cls = responsiveText(t)
    if (cls !== "") className.push(cls)
  }

  return cx(...className)
}
