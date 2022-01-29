import { base, Color, ColorContrast, ModelProps, ResponsiveProps, SpacingProps, StandardProps, text, VisualTextProps, VisualProps, ColorProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import * as React from "react"

interface BlockquoteProps extends StandardProps, ColorProps, ResponsiveProps, ModelProps, VisualProps, SpacingProps, VisualTextProps {
  cite?: string,
  quote?: boolean,
  quoteColor?: Color,
  quoteColorContrast?: ColorContrast,
  darkQuoteColor?: Color,
  darkQuoteColorContrast?: ColorContrast,
  bgCaptionGradientPosition?: "top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right" | "left" | "right",
  bgCaptionColor?: Color,
  bgCaptionColorContrast?: ColorContrast
  darkBgCaptionColor?: Color,
  darkBgCaptionColorContrast?: ColorContrast,
  bgCaptionGradientFromColor?: Color,
  bgCaptionGradientFromColorContrast?: ColorContrast,
  bgCaptionGradientMiddleColor?: Color,
  bgCaptionGradientMiddleColorContrast?: ColorContrast,
  bgCaptionGradientEndColor?: Color,
  bgCaptionGradientEndColorContrast?: ColorContrast,
  caption?: React.ReactNode
}

export const Blockquote: React.FC<BlockquoteProps> = (props) => {
  const { dark, theme } = React.useContext(ThemeCtx)

  const tb = theme?.blockquote?.[`${props.componentName}`]

  const clsFigure = base({
    className: props.className,
    model: {
      width: tb?.width !== undefined ? tb.width : props.width,
      height: tb?.height !== undefined ? tb.height : props.height,
      flowRoot: false
    },
    responsive: {
      sm: tb?.sm !== undefined ? tb.sm : props.sm,
      md: tb?.md !== undefined ? tb.md : props.md,
      lg: tb?.lg !== undefined ? tb.lg : props.lg,
      xl: tb?.xl !== undefined ? tb.xl : props.xl,
      "2xl": tb?.["2xl"] !== undefined ? tb["2xl"] : props["2xl"]
    },
    visual: {
      dark: dark,
      bgColor: tb?.bgColor !== undefined ? tb.bgColor : props.bgColor,
      bgColorContrast: tb?.bgColorContrast !== undefined ? tb.bgColorContrast : props.bgColorContrast,
      bgGradientFromColor: tb?.bgGradientFromColor !== undefined ? tb.bgGradientFromColor : props.bgGradientFromColor,
      bgGradientFromColorContrast: tb?.bgGradientFromColorContrast !== undefined ? tb.bgGradientFromColorContrast : props.bgGradientFromColorContrast,
      bgGradientMiddleColor: tb?.bgGradientMiddleColor !== undefined ? tb.bgGradientMiddleColor : props.bgGradientMiddleColor,
      bgGradientMiddleColorContrast: tb?.bgGradientMiddleColorContrast !== undefined ? tb.bgGradientMiddleColorContrast : props.bgGradientMiddleColorContrast,
      bgGradientEndColor: tb?.bgGradientEndColor !== undefined ? tb.bgGradientEndColor : props.bgGradientEndColor,
      bgGradientEndColorContrast: tb?.bgGradientEndColorContrast !== undefined ? tb.bgGradientEndColorContrast : props.bgGradientEndColorContrast,
      borderWidth: (tb?.border && tb.borderWidth !== undefined) ? tb.borderWidth : (props.border && tb?.border === undefined) ? props.borderWidth : undefined,
      borderStyle: (tb?.border && tb.borderStyle !== undefined) ? tb.borderStyle : (props.border && tb?.border === undefined) ? props.borderStyle : undefined,
      borderColor: (tb?.border && tb.borderColor !== undefined) ? tb.borderColor : (props.border && tb?.border === undefined) ? props.borderColor : undefined,
      borderColorContrast: (tb?.border && tb.borderColorContrast !== undefined) ? tb.borderColorContrast : (props.border && tb?.border === undefined) ? props.borderColorContrast : undefined,
      borderRadius: tb?.rounded !== undefined ? tb.rounded : props.rounded,
      borderRadiusPosition: tb?.roundedPosition !== undefined ? tb.roundedPosition : props.roundedPosition,
      shadow: tb?.shadow !== undefined ? tb.shadow : props.shadow,
      shadowColor: (tb?.shadow !== undefined && tb.shadowColor !== undefined) ? tb.shadowColor : props.shadow !== undefined ? props.shadowColor : undefined,
      shadowColorContrast: (tb?.shadow !== undefined && tb.shadowColorContrast !== undefined) ? tb.shadowColorContrast : props.shadow !== undefined ? props.shadowColorContrast : undefined,
      shadowOpacity: (tb?.shadow !== undefined && tb.shadowOpacity !== undefined) ? tb.shadowOpacity : props.shadow !== undefined ? props.shadowOpacity : undefined,
      darkShadowColor: (tb?.shadow !== undefined && tb.darkShadowColor !== undefined) ? tb.darkShadowColor : props.shadow !== undefined ? props.darkShadowColor : undefined,
      darkShadowColorContrast: (tb?.shadow !== undefined && tb.darkShadowColorContrast) ? tb.darkShadowColorContrast : props.shadow !== undefined ? props.darkShadowColorContrast : undefined,
      darkShadowOpacity: (tb?.shadow !== undefined && tb.darkShadowOpacity !== undefined) ? tb.darkShadowOpacity : props.shadow !== undefined ? props.darkShadowOpacity : undefined,
      selectionColor: tb?.selectionColor !== undefined ? tb.selectionColor : props.selectionColor,
      selectionColorContrast: tb?.selectionColorContrast !== undefined ? tb.selectionColorContrast : props.selectionColorContrast,
      darkSelectionColor: tb?.darkSelectionColor !== undefined ? tb.darkSelectionColor : props.darkSelectionColor,
      darkSelectionColorContrast: tb?.darkSelectionColorContrast !== undefined ? tb.darkSelectionColorContrast : props.darkSelectionColorContrast,
      selectionTextColor: tb?.selectionTextColor !== undefined ? tb.selectionTextColor : props.selectionTextColor,
      selectionTextColorContrast: tb?.selectionTextColorContrast !== undefined ? tb.selectionTextColorContrast : props.selectionTextColorContrast,
      darkSelectionTextColor: tb?.darkSelectionTextColor !== undefined ? tb.darkSelectionTextColor : props.darkSelectionTextColor,
      darkSelectionTextColorContrast: tb?.darkSelectionTextColorContrast !== undefined ? tb.darkSelectionTextColorContrast : props.darkSelectionTextColorContrast
    },
    spacing: {
      mx: tb?.mx !== undefined ? tb.mx : props.mx,
      my: tb?.my !== undefined ? tb.my : props.my,
      mb: tb?.mb !== undefined ? tb.mb : props.mb,
      ml: tb?.ml !== undefined ? tb.ml : props.ml,
      mr: tb?.mr !== undefined ? tb.mr : props.mr,
      mt: tb?.mt !== undefined ? tb.mt : props.mt
    }
  })

  const clsBlock = base({
    spacing: {
      px: tb?.px !== undefined ? tb.px : props.px,
      py: tb?.py !== undefined ? tb.py : props.py,
      pb: tb?.pb !== undefined ? tb.pb : props.pb,
      pl: tb?.pl !== undefined ? tb.pl : props.pl,
      pr: tb?.pr !== undefined ? tb.pr : props.pr,
      pt: tb?.pt !== undefined ? tb.pt : props.pt
    }
  })

  const clsText = text({
    visualText: {
      dark: dark,
      textColor: tb?.color !== undefined ? tb.color : props.color,
      textColorContrast: tb?.colorContrast !== undefined ? tb.colorContrast : props.colorContrast,
      darkTextColor: tb?.darkColor !== undefined ? tb.darkColor : props.darkColor,
      darkTextColorContrast: tb?.darkColorContrast !== undefined ? tb.darkColorContrast : props.darkColorContrast,
      textHoverColor: tb?.colorHover !== undefined ? tb.colorHover : props.colorHover,
      textHoverColorContrast: tb?.colorHoverContrast !== undefined ? tb.colorHoverContrast : props.colorHoverContrast,
      fontSize: tb?.fontSize !== undefined ? tb.fontSize : props.fontSize,
      fontWeight: tb?.fontWeight !== undefined ? tb.fontWeight : props.fontWeight,
      lineHeight: tb?.lineHeight !== undefined ? tb.lineHeight : props.lineHeight,
      textAlign: tb?.textAlign !== undefined ? tb.textAlign : props.textAlign,
      textDecoration: tb?.textDecoration !== undefined ? tb.textDecoration : props.textDecoration,
      textTransform: tb?.textTransform !== undefined ? tb.textTransform : props.textTransform,
      textOverflow: tb?.textOverflow !== undefined ? tb.textOverflow : props.textOverflow,
      wordBreak: tb?.wordBreak !== undefined ? tb.wordBreak : props.wordBreak
    }
  })

  const clsCaption = base({
    model: {
      flowRoot: false
    },
    visual: {
      dark: dark,
      bgColor: tb?.bgCaptionColor !== undefined ? tb.bgCaptionColor : props.bgCaptionColor,
      bgColorContrast: tb?.bgCaptionColorContrast !== undefined ? tb.bgCaptionColorContrast : props.bgCaptionColorContrast,
      darkBgColor: tb?.darkBgCaptionColor !== undefined ? tb.darkBgCaptionColor : props.darkBgCaptionColor,
      darkBgColorContrast: tb?.darkBgCaptionColorContrast !== undefined ? tb.darkBgCaptionColorContrast : props.darkBgCaptionColorContrast,
      bgGradientFromColor: tb?.bgCaptionGradientFromColor !== undefined ? tb.bgCaptionGradientFromColor : props.bgCaptionGradientFromColor,
      bgGradientFromColorContrast: tb?.bgGradientFromColorContrast !== undefined ? tb.bgGradientFromColorContrast : props.bgCaptionGradientFromColorContrast,
      bgGradientMiddleColor: tb?.bgGradientMiddleColor !== undefined ? tb.bgGradientMiddleColor : props.bgCaptionGradientMiddleColor,
      bgGradientMiddleColorContrast: tb?.bgGradientMiddleColorContrast !== undefined ? tb.bgGradientMiddleColorContrast : props.bgCaptionGradientMiddleColorContrast,
      bgGradientEndColor: tb?.bgGradientEndColor !== undefined ? tb.bgGradientEndColor : props.bgCaptionGradientEndColor,
      bgGradientEndColorContrast: tb?.bgGradientEndColorContrast !== undefined ? tb.bgGradientEndColorContrast : props.bgCaptionGradientEndColorContrast,
      borderRadius: tb?.rounded !== undefined ? tb.rounded : props.rounded,
      borderRadiusPosition: ((tb?.rounded !== undefined && props.caption !== undefined) || (props.rounded !== undefined && tb?.rounded === undefined && props.caption !== undefined)) ? "bottom" : props.roundedPosition,
      shadow: tb?.shadow !== undefined ? tb.shadow : props.shadow,
      shadowColor: (tb?.shadow !== undefined && tb.shadowColor !== undefined) ? tb.shadowColor : props.shadow !== undefined ? props.shadowColor : undefined,
      shadowColorContrast: (tb?.shadow !== undefined && tb.shadowColorContrast !== undefined) ? tb.shadowColorContrast : props.shadow !== undefined ? props.shadowColorContrast : undefined,
      shadowOpacity: (tb?.shadow !== undefined && tb.shadowOpacity !== undefined) ? tb.shadowOpacity : props.shadow !== undefined ? props.shadowOpacity : undefined,
      darkShadowColor: (tb?.shadow !== undefined && tb.darkShadowColor !== undefined) ? tb.darkShadowColor : props.shadow !== undefined ? props.darkShadowColor : undefined,
      darkShadowColorContrast: (tb?.shadow !== undefined && tb.darkShadowColorContrast) ? tb.darkShadowColorContrast : props.shadow !== undefined ? props.darkShadowColorContrast : undefined,
      darkShadowOpacity: (tb?.shadow !== undefined && tb.darkShadowOpacity !== undefined) ? tb.darkShadowOpacity : props.shadow !== undefined ? props.darkShadowOpacity : undefined,
    },
    spacing: {
      px: tb?.px !== undefined ? tb.px : props.px,
      py: tb?.py !== undefined ? tb.py : props.py,
      pb: tb?.pb !== undefined ? tb.pb : props.pb,
      pl: tb?.pl !== undefined ? tb.pl : props.pl,
      pr: tb?.pr !== undefined ? tb.pr : props.pr,
      pt: tb?.pt !== undefined ? tb.pt : props.pt
    }
  })

  const clsQuote = text({
    visualText: {
      dark: dark,
      textColor: tb?.quoteColor !== undefined ? tb.quoteColor : props.quoteColor,
      textColorContrast: tb?.quoteColorContrast !== undefined ? tb.quoteColorContrast : props.quoteColorContrast,
      darkTextColor: tb?.darkQuoteColor !== undefined ? tb.darkQuoteColor : props.darkQuoteColor,
      darkTextColorContrast: tb?.darkQuoteColorContrast !== undefined ? tb.darkQuoteColorContrast : props.darkQuoteColorContrast
    }
  })

  return(
    <figure className={clsFigure}>
      <blockquote className={clsBlock} cite={props.cite}>
        {props.quote && (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={`my-3 fill-current ${clsQuote} opacity-20`}><path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"/></svg>
        )}
        {typeof props.children === "string" ? (
          <p className={clsText}>{props.children}</p>
        ) : (props.children)}
      </blockquote>
      {props.caption !== undefined && (
        <figcaption className={clsCaption}>{props.caption}</figcaption>
      )}
    </figure>
  )
}

Blockquote.defaultProps = {
  quote: true,
  bgColor: "white",
  border: true,
  borderWidth: "normal",
  borderStyle: "solid",
  borderColor: "gray",
  borderColorContrast: "200",
  shadowColor: "gray",
  shadowColorContrast: "400",
  shadowOpacity: 50,
  rounded: "md",
  fontSize: "base",
  py: "4",
  px: "3",
  mx: "3",
  my: "3"
}
