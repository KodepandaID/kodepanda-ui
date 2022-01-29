import * as React from "react"
import { base, ColorProps, SpacingProps, StandardProps, text, VisualTextProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"

interface TextProps extends StandardProps, ColorProps, VisualTextProps, SpacingProps {
  text?: boolean,
  span?: boolean,
  italic?: boolean,
  strong?: boolean,
  mark?: boolean,
  code?: boolean,
  underline?: boolean,
  delete?: boolean,
}

export const Text: React.FC<TextProps> = (props) => {
  const { dark, theme } = React.useContext(ThemeCtx)

  const tt = theme?.text?.[`${props.componentName}`]

  const cls = text({
    className: props.className,
    visual: props.code ? {
      dark: dark,
      borderWidth: "normal",
      borderStyle: "solid",
      borderColor: tt?.color !== undefined ? tt.color : props.color,
      borderColorContrast: tt?.colorContrast !== undefined ? tt.colorContrast : (Number(props.colorContrast) < 800 && Number(props.colorContrast) > 50) ? Number(props.colorContrast) + 100 : props.colorContrast ,
      shadow: "sm"
    } : undefined,
    visualText: {
      dark: dark,
      bgColor: (props.mark || props.code) ? tt?.color !== undefined ? tt.color : props.color : undefined,
      bgColorContrast: (props.mark || props.code) ? tt?.colorContrast !== undefined ? tt.colorContrast : props.colorContrast : undefined,
      bgColorHover: (props.mark || props.code) ? tt?.colorHover !== undefined ? tt.colorHover : props.colorHover : undefined,
      bgColorHoverContrast: (props.mark || props.code) ? tt?.colorHoverContrast !== undefined ? tt.colorHoverContrast : props.colorHoverContrast : undefined,
      textColor: (!props.mark && !props.code && props.color !== "transparent") ? tt?.color !== undefined ? tt?.color : props.color : undefined,
      textColorContrast: (!props.mark && !props.code) ? tt?.colorContrast !== undefined ? tt.colorContrast : props.colorContrast : undefined,
      darkTextColor: tt?.darkColor !== undefined ? tt.darkColor : props.darkColor,
      darkTextColorContrast: tt?.darkColorContrast !== undefined ? tt.darkColorContrast : props.darkColorContrast,
      textHoverColor: tt?.colorHover !== undefined ? tt.colorHover : props.colorHover !== "transparent" ? props.colorHover : undefined,
      textHoverColorContrast: tt?.colorHoverContrast !== undefined ? tt.colorHoverContrast : props.colorHoverContrast,
      fontSize: tt?.fontSize !== undefined ? tt.fontSize : props.fontSize,
      fontWeight: tt?.fontWeight !== undefined ? tt.fontWeight : props.strong ? "bold" : props.fontWeight,
      lineHeight: tt?.lineHeight !== undefined ? tt.lineHeight : props.lineHeight,
      textAlign: tt?.textAlign !== undefined ? tt.textAlign : props.textAlign,
      textDecoration: tt?.textDecoration !== undefined ? tt.textDecoration : props.underline ? "underline" : props.delete ? "line-through" : props.textDecoration,
      textDecorationStyle: tt?.textDecorationStyle !== undefined ? tt.textDecorationStyle : props.textDecorationStyle,
      textDecorationColor: tt?.textDecorationColor !== undefined ? tt.textDecorationColor : props.textDecorationColor,
      textDecorationColorContrast: tt?.textDecorationColorContrast !== undefined ? tt.textDecorationColorContrast : props.textDecorationColorContrast,
      darkTextDecorationColor: tt?.darkTextDecorationColor !== undefined ? tt.darkTextDecorationColor : props.darkTextDecorationColor,
      darkTextDecorationColorContrast: tt?.darkTextDecorationColorContrast !== undefined ? tt.darkTextDecorationColorContrast : props.darkTextDecorationColorContrast,
      textDecorationWidth: tt?.textDecorationWidth !== undefined ? tt.textDecorationWidth : props.textDecorationWidth,
      textTransform: tt?.textTransform !== undefined ? tt.textTransform : props.textTransform,
      textOverflow: tt?.textOverflow !== undefined ? tt.textOverflow : props.textOverflow,
      textUnderlineOffset: tt?.textUnderlineOffset !== undefined ? tt.textUnderlineOffset : props.textUnderlineOffset,
      textIndent: tt?.textIndent !== undefined ? tt.textIndent : props.textIndent,
      firstLetterFontSize: tt?.firstLetterFontSize !== undefined ? tt.firstLetterFontSize : props.firstLetterFontSize,
      firstLetterFontWeight: tt?.firstLetterFontWeight !== undefined ? tt.firstLetterFontWeight : props.firstLetterFontWeight,
      firstLetterTextColor: tt?.firstLetterTextColor !== undefined ? tt.firstLetterTextColor : props.firstLetterTextColor,
      firstLetterTextColorContrast: tt?.firstLetterTextColorContrast !== undefined ? tt.firstLetterTextColorContrast : props.firstLetterTextColorContrast,
      firstLetterTextTransform: tt?.firstLetterTextTransform !== undefined ? tt.firstLetterTextTransform : props.firstLetterTextTransform,
      firstLetterSpacing: tt?.firstLetterSpacing !== undefined ? tt.firstLetterSpacing : props.firstLetterSpacing,
      firstLetterFloat: tt?.firstLetterFloat !== undefined ? tt.firstLetterFloat : props.firstLetterFloat,
      wordBreak: tt?.wordBreak !== undefined ? tt.wordBreak : props.wordBreak
    },
    spacing: {
      mx: tt?.mx !== undefined ? tt.mx : props.mx,
      my: tt?.my !== undefined ? tt.my : props.my,
      mb: tt?.mb !== undefined ? tt.mb : props.mb,
      ml: tt?.ml !== undefined ? tt.ml : props.ml,
      mr: tt?.mr !== undefined ? tt.mr : props.mr,
      mt: tt?.mt !== undefined ? tt.mt : props.mt,
      px: (props.code && props.px === undefined && tt?.px === undefined) ? "1" : tt?.px !== undefined ? tt.px : props.px,
      py: (props.code && props.py === undefined && tt?.py === undefined) ? "0.5" : tt?.py !== undefined ? tt.py : props.py,
      pb: tt?.pb !== undefined ? tt.pb : props.pb,
      pl: tt?.pl !== undefined ? tt.pl : props.pl,
      pr: tt?.pr !== undefined ? tt.pr : props.pr,
      pt: tt?.pt !== undefined ? tt.pt : props.pt
    }
  })

  const clsBase = base({
    visual: {
      dark: dark,
      selectionColor: tt?.selectionColor !== undefined ? tt.selectionColor : props.selectionColor,
      selectionColorContrast: tt?.selectionColorContrast !== undefined ? tt.selectionColorContrast : props.selectionColorContrast,
      darkSelectionColor: tt?.darkSelectionColor !== undefined ? tt.darkSelectionColor : props.darkSelectionColor,
      darkSelectionColorContrast: tt?.darkSelectionColorContrast !== undefined ? tt.darkSelectionColorContrast : props.darkSelectionColorContrast,
      selectionTextColor: tt?.selectionTextColor !== undefined ? tt.selectionTextColor : props.selectionTextColor,
      selectionTextColorContrast: tt?.selectionTextColorContrast !== undefined ? tt.selectionTextColorContrast : props.selectionTextColorContrast,
      darkSelectionTextColor: tt?.darkSelectionTextColor !== undefined ? tt.darkSelectionTextColor : props.darkSelectionTextColor,
      darkSelectionTextColorContrast: tt?.darkSelectionTextColorContrast !== undefined ? tt.darkSelectionTextColorContrast : props.darkSelectionTextColorContrast
    }
  })


  if (props.mark) {
    return React.createElement(
      "mark",
      {id: props.id, className: [cls, "", clsBase].join(" ").trim()},
      props.children
    )
  } else if (props.code) {
    return React.createElement(
      "code",
      {id: props.id, className: [cls, clsBase].join(" ").trim()},
      props.children
    )
  } else if (props.strong) {
    return React.createElement(
      "strong",
      {id: props.id, className: [cls, clsBase].join(" ").trim()},
      props.children
    )
  } else if (props.italic) {
    return React.createElement(
      "i",
      {id: props.id, className: [cls, clsBase].join(" ").trim()},
      props.children
    )
  } else if (props.span) {
    return React.createElement(
      "span",
      {id: props.id, className: [cls, clsBase].join(" ").trim()},
      props.children
    )
  }

  return React.createElement(
    "p",
    {id: props.id, className: [cls, clsBase].join(" ").trim()},
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
  colorContrast: "500",
  darkColor: "white",
  darkColorContrast: "500",
  fontSize: "base",
  fontWeight: "normal"
}
