import { HeaderProps, text } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import * as React from "react"

const sizes = {
  "h1": "8xl",
  "h2": "7xl",
  "h3": "6xl",
  "h4": "5xl",
  "h5": "4xl",
  "h6": "3xl"
}

export const Header: React.FC<HeaderProps> = (props) => {
  const { dark } = React.useContext(ThemeCtx)

  const cls = text({
    className: props.className,
    visualText: {
      dark: dark,
      textColor: props.color,
      textColorContrast: props.colorContrast,
      darkTextColor: props.darkColor,
      darkTextColorContrast: props.darkColorContrast,
      textHoverColor: props.colorHover,
      textHoverColorContrast: props.colorHoverContrast,
      fontSize: sizes[props.as],
      fontWeight: props.fontWeight,
      lineHeight: props.lineHeight,
      textAlign: props.textAlign,
      textTransform: props.capitalize ? "capitalize" : props.lowercase ? "lowercase" : props.uppercase ? "uppercase" : "normal-case",
      textOverflow: props.ellipsis ? "truncate" : props.textOverflow,
      wordBreak: props.wordBreak
    },
    spacing: {
      mx: props.mx,
      my: props.my,
      mb: props.mb,
      ml: props.ml,
      mr: props.mr,
      mt: props.mt
    }
  })

  return React.createElement(
    props.as,
    {id: props.id, className: cls},
    props.children
  )
}

Header.defaultProps = {
  as: "h1",
  fontWeight: "semibold",
  uppercase: false,
  lowercase: false,
  capitalize: false
}
