import * as React from "react"
import { text, TextProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"

export const Text: React.FC<TextProps> = (props) => {
  const { dark } = React.useContext(ThemeCtx)

  const cls = text({
    className: props.className,
    visual: props.code ? {
      dark: dark,
      borderWidth: "normal",
      borderStyle: "solid",
      borderColor: props.color,
      borderColorContrast: (Number(props.colorContrast) < 800 && Number(props.colorContrast) > 50) ? Number(props.colorContrast) + 100 : props.colorContrast ,
      shadow: "sm"
    } : undefined,
    visualText: {
      dark: dark,
      bgColor: (props.mark || props.code) ? props.color : undefined,
      bgColorContrast: (props.mark || props.code) ? props.colorContrast : undefined,
      bgColorHover: (props.mark || props.code) ? props.colorHover : undefined,
      bgColorHoverContrast: (props.mark || props.code) ? props.colorHoverContrast : undefined,
      textColor: (!props.mark && !props.code) ? props.color : undefined,
      textColorContrast: (!props.mark && !props.code) ? props.colorContrast : undefined,
      darkTextColor: props.darkColor,
      darkTextColorContrast: props.darkColorContrast,
      textHoverColor: props.colorHover,
      textHoverColorContrast: props.colorHoverContrast,
      fontSize: props.fontSize,
      fontWeight: props.strong ? "bold" : props.fontWeight,
      lineHeight: props.lineHeight,
      textAlign: props.textAlign,
      textDecoration: props.underline ? "underline" : props.delete ? "line-through" : props.textDecoration,
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
      mt: props.mt,
      px: (props.code && props.px === undefined) ? 1 : props.px,
      py: (props.code && props.py === undefined) ? 0.5 : props.py,
      pb: props.pb,
      pl: props.pl,
      pr: props.pr,
      pt: props.pt
    }
  })


  if (props.mark) {
    return React.createElement(
      "mark",
      {id: props.id, className: cls},
      props.children
    )
  } else if (props.code) {
    return React.createElement(
      "code",
      {id: props.id, className: cls},
      props.children
    )
  } else if (props.strong) {
    return React.createElement(
      "strong",
      {id: props.id, className: cls},
      props.children
    )
  } else if (props.italic) {
    return React.createElement(
      "i",
      {id: props.id, className: cls},
      props.children
    )
  }

  return React.createElement(
    "p",
    {id: props.id, className: cls},
    props.children
  )
}

Text.defaultProps = {
  text: true,
  italic: false,
  strong: false,
  mark: false,
  code: false,
  underline: false,
  delete: false,
  color: "black",
  colorContrast: 500,
  darkColor: "white",
  darkColorContrast: 500,
  fontSize: "base",
  fontWeight: "normal"
}
