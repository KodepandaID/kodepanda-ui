import * as React from "react"
import { ColorProps, SpacingProps, StandardProps, text, VisualTextProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"

interface LinkProps extends StandardProps, ColorProps, SpacingProps, VisualTextProps {
  href: string,
  target?: "_self" | "_blank" | "_parent" | "_top"
}

export const Link: React.FC<LinkProps> = (props) => {
  const { dark, theme } = React.useContext(ThemeCtx)

  const tl = theme?.link?.[`${props.componentName}`]

  const cls = text({
    visualText: {
      dark: dark,
      textColor: tl?.color !== undefined ? tl.color : props.color,
      textColorContrast: tl?.colorContrast !== undefined ? tl.colorContrast : props.colorContrast,
      darkTextColor: tl?.darkColor !== undefined ? tl.darkColor : props.darkColor,
      darkTextColorContrast: tl?.darkColorContrast !== undefined ? tl.darkColorContrast : props.darkColorContrast,
      textHoverColor: tl?.colorHover !== undefined ? tl.colorHover : props.colorHover,
      textHoverColorContrast: tl?.colorHoverContrast !== undefined ? tl.colorHoverContrast : props.colorHoverContrast,
      darkTextHoverColor: tl?.darkColorHover !== undefined ? tl.darkColorHover : props.darkColorHover,
      darkTextHoverColorContrast: tl?.darkColorHoverContrast !== undefined ? tl.darkColorHoverContrast : props.darkColorHoverContrast,
      fontSize: tl?.fontSize !== undefined ? tl.fontSize : props.fontSize,
      fontWeight: tl?.fontWeight !== undefined ? tl.fontWeight : props.fontWeight,
      lineHeight: tl?.lineHeight !== undefined ? tl.lineHeight : props.lineHeight,
      textAlign: tl?.textAlign !== undefined ? tl.textAlign : props.textAlign,
      textTransform: tl?.textTransform !== undefined ? tl.textTransform : props.textTransform,
      textOverflow: tl?.textOverflow !== undefined ? tl.textOverflow : props.textOverflow,
      wordBreak: tl?.wordBreak !== undefined ? tl.wordBreak : props.wordBreak
    },
    spacing: {
      mx: tl?.mx !== undefined ? tl.mx : props.mx,
      my: tl?.my !== undefined ? tl.my : props.my,
      mb: tl?.mb !== undefined ? tl.mb : props.mb,
      ml: tl?.ml !== undefined ? tl.ml : props.ml,
      mr: tl?.mr !== undefined ? tl.mr : props.mr,
      mt: tl?.mt !== undefined ? tl.mt : props.mt
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
