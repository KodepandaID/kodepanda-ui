import * as React from "react"
import { ColorProps, SpacingProps, StandardProps, text, VisualTextProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"

interface LinkProps extends StandardProps, ColorProps, SpacingProps, VisualTextProps {
  href: string,
  target?: "_self" | "_blank" | "_parent" | "_top"
}

export const Link: React.FC<LinkProps> = (props) => {
  const { dark } = React.useContext(ThemeCtx)

  const cls = text({
    visualText: {
      dark: dark,
      textColor: props.color,
      textColorContrast: props.colorContrast,
      darkTextColor: props.darkColor,
      darkTextColorContrast: props.darkColorContrast,
      textHoverColor: props.colorHover,
      textHoverColorContrast: props.colorHoverContrast,
      darkTextHoverColor: props.darkColorHover,
      darkTextHoverColorContrast: props.darkColorHoverContrast,
      fontSize: props.fontSize,
      fontWeight: props.fontWeight,
      lineHeight: props.lineHeight,
      textAlign: props.textAlign,
      textTransform: props.textTransform,
      textOverflow: props.textOverflow,
      wordBreak: props.wordBreak
    },
    spacing: {
      mx: props.mx,
      my: props.my,
      mb: props.mb,
      ml: props.ml,
      mr: props.mr,
      mt: props.mt
    },
    transition: {
      transition: "colors",
      duration: "500"
    },
    misc: {
      cursor: "pointer"
    }
  })
  return(
    <a
    id={props.id}
    className={cls}
    href={props.href}
    target={props.target}>
      {props.children}
    </a>
  )
}

Link.defaultProps = {
  color: "blue",
  colorContrast: "500",
  colorHover: "blue",
  colorHoverContrast: "700",
  target: "_blank"
}
