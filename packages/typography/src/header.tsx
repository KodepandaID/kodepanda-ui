import { Color, ColorContrast, coloring, ColorProps, Rotate, rotateTransform, SpacingProps, StandardProps, text, VisualTextProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import * as React from "react"

interface HeaderProps extends StandardProps, ColorProps, SpacingProps, VisualTextProps {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
  marker?: boolean,
  markerColor?: Color,
  markerColorContrast?: ColorContrast,
  markerRotate?: Rotate,
  uppercase?: boolean,
  lowercase?: boolean,
  capitalize?: boolean,
  ellipsis?: boolean
}

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

  if (props.marker) {
    const clsText = text({
      visualText: {
        dark: false,
        textColor: props.color,
        textColorContrast: props.colorContrast,
        fontSize: sizes[props.as],
        fontWeight: props.fontWeight,
        lineHeight: props.lineHeight,
        textAlign: props.textAlign,
        textTransform: props.capitalize ? "capitalize" : props.lowercase ? "lowercase" : props.uppercase ? "uppercase" : "normal-case",
        textOverflow: props.ellipsis ? "truncate" : props.textOverflow,
        wordBreak: props.wordBreak
      },
    })

    return(
      <span className={[
        "before:block before:absolute before:-inset-1",
        `before:${coloring("bg", props.markerColor, props.markerColorContrast)}`,
        props.markerRotate !== undefined ? `before:${rotateTransform(props.markerRotate)}` : "",
        "mx-1.5",
        "relative inline-block"
      ].join(" ").trim()
      }>
        <span className={[
          "relative",
          clsText
        ].join(" ").trim()}>annoyed</span>
      </span>
    )
  }

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
