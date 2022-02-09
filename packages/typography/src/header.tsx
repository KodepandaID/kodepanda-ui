import { Color, ColorContrast, coloring, ColorProps, ResponsiveProps, responsiveStyle, Rotate, rotateTransform, SpacingProps, StandardProps, text, VisualTextProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import * as React from "react"

interface HeaderProps extends StandardProps, ColorProps, SpacingProps, ResponsiveProps, VisualTextProps {
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
  const { dark, theme } = React.useContext(ThemeCtx)

  const th = theme?.header?.[`${props.componentName}`]

  const cls = text({
    visualText: {
      dark: dark,
      textColor: th?.color !== undefined ? th.color : props.color,
      textColorContrast: th?.colorContrast !== undefined ? th.colorContrast : props.colorContrast,
      darkTextColor: th?.darkColor !== undefined ? th.darkColor : props.darkColor,
      darkTextColorContrast: th?.darkColorContrast !== undefined ? th.darkColorContrast : props.darkColorContrast,
      textHoverColor: th?.colorHover !== undefined ? th.colorHover : props.colorHover,
      textHoverColorContrast: th?.colorHoverContrast !== undefined ? th.colorHoverContrast : props.colorHoverContrast,
      darkTextHoverColor: th?.darkColorHover !== undefined ? th.darkColorHover : props.darkColorHover,
      darkTextHoverColorContrast: th?.darkColorHoverContrast !== undefined ? th.darkColorHoverContrast : props.darkColorHoverContrast,
      fontSize: sizes[props.as],
      fontWeight: th?.fontWeight !== undefined ? th.fontWeight : props.fontWeight,
      lineHeight: th?.lineHeight !== undefined ? th.lineHeight : props.lineHeight,
      textAlign: th?.textAlign !== undefined ? th.textAlign : props.textAlign,
      textTransform: (th?.capitalize || (props.capitalize && th?.capitalize === undefined)) ? "capitalize" : (th?.lowercase || (props.lowercase && th?.lowercase === undefined)) ? "lowercase" : (th?.uppercase || (props.uppercase && th?.uppercase === undefined)) ? "uppercase" : "normal-case",
      textOverflow: (th?.ellipsis || (props.ellipsis && th?.ellipsis === undefined)) ? "truncate" : th?.textOverflow !== undefined ? th?.textOverflow : props.textOverflow,
      wordBreak: th?.wordBreak !== undefined ? th.wordBreak : props.wordBreak
    },
    spacing: {
      mx: th?.mx !== undefined ? th.mx : props.mx,
      my: th?.my !== undefined ? th.my : props.my,
      mb: th?.mb !== undefined ? th.mb : props.mb,
      ml: th?.ml !== undefined ? th.ml : props.ml,
      mr: th?.mr !== undefined ? th.mr : props.mr,
      mt: th?.mt !== undefined ? th.mt : props.mt
    }
  })

  const clsResponsive = responsiveStyle({
    responsiveText: {
      sm: th?.sm !== undefined ? th.sm : props.sm,
      md: th?.md !== undefined ? th.md : props.md,
      lg: th?.lg !== undefined ? th.lg : props.lg,
      xl: th?.xl !== undefined ? th.xl : props.xl,
      "2xl": th?.["2xl"] !== undefined ? th["2xl"] : props["2xl"]
    }
  })

  if (props.marker) {
    const clsText = text({
      visualText: {
        dark: false,
        textColor: th?.color !== undefined ? th.color : props.color,
        textColorContrast: th?.colorContrast !== undefined ? th.colorContrast : props.colorContrast,
        fontSize: sizes[props.as],
        fontWeight: th?.fontWeight !== undefined ? th.fontWeight : props.fontWeight,
        lineHeight: th?.lineHeight !== undefined ? th.lineHeight : props.lineHeight,
        textAlign: th?.textAlign !== undefined ? th.textAlign : props.textAlign,
        textTransform: (th?.capitalize || (props.capitalize && !th?.capitalize)) ? "capitalize" : (th?.lowercase || props.lowercase) ? "lowercase" : (th?.uppercase || props.uppercase) ? "uppercase" : "normal-case",
        textOverflow: (th?.ellipsis || (props.ellipsis && !th?.ellipsis)) ? "truncate" : th?.textOverflow !== undefined ? th?.textOverflow : props.textOverflow,
        wordBreak: th?.wordBreak !== undefined ? th.wordBreak : props.wordBreak
      },
    })

    return(
      <span className={[
        "before:block before:absolute before:-inset-1",
        `before:${coloring("bg", th?.markerColor !== undefined ? th.markerColor : props.markerColor, th?.markerColorContrast !== undefined ? th.markerColorContrast : props.markerColorContrast)}`,
        th?.markerRotate !== undefined ? `before:${rotateTransform(th.markerRotate)}` : "",
        (props.markerRotate !== undefined && th?.markerRotate === undefined) ? `before:${rotateTransform(props.markerRotate)}` : "",
        "mx-1.5",
        "relative inline-block"
      ].join(" ").trim()
      }>
        <span className={[
          "relative",
          clsText,
          clsResponsive
        ].join(" ").trim()}>{props.children}</span>
      </span>
    )
  }

  return React.createElement(
    props.as,
    {id: props.id, className: [cls, clsResponsive].join(" ")},
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
