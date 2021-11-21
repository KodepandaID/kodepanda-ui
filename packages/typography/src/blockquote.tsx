import { base, BlockquoteProps, text } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import * as React from "react"

export const Blockquote: React.FC<BlockquoteProps> = (props) => {
  const { dark } = React.useContext(ThemeCtx)

  const clsFigure = base({
    className: props.className,
    model: {
      width: props.width,
      height: props.height,
      flowRoot: false
    },
    responsive: {
      sm: props.sm,
      md: props.md,
      lg: props.lg,
      xl: props.xl,
      "2xl": props["2xl"]
    },
    visual: {
      dark: dark,
      bgColor: props.bgColor,
      bgColorContrast: props.bgColorContrast,
      bgGradientFromColor: props.bgGradientFromColor,
      bgGradientFromColorContrast: props.bgGradientFromColorContrast,
      bgGradientMiddleColor: props.bgGradientMiddleColor,
      bgGradientMiddleColorContrast: props.bgGradientMiddleColorContrast,
      bgGradientEndColor: props.bgGradientEndColor,
      bgGradientEndColorContrast: props.bgGradientEndColorContrast,
      borderWidth: props.borderWidth,
      borderColor: props.borderColor,
      borderColorContrast: props.borderColorContrast,
      borderStyle: props.borderStyle,
      borderRadius: props.rounded,
      borderRadiusPosition: props.roundedPosition,
      shadow: props.shadow
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

  const clsBlock = base({
    spacing: {
      px: props.px,
      py: props.py,
      pb: props.pb,
      pl: props.pl,
      pr: props.pr,
      pt: props.pt
    }
  })

  const clsText = text({
    visualText: {
      dark: dark,
      textColor: props.color,
      textColorContrast: props.colorContrast,
      darkTextColor: props.darkColor,
      darkTextColorContrast: props.darkColorContrast,
      textHoverColor: props.colorHover,
      textHoverColorContrast: props.colorHoverContrast,
      fontSize: props.fontSize,
      fontWeight: props.fontWeight,
      lineHeight: props.lineHeight,
      textAlign: props.textAlign,
      textDecoration: props.textDecoration,
      textTransform: props.textTransform,
      textOverflow: props.textOverflow,
      wordBreak: props.wordBreak
    }
  })

  const clsCaption = base({
    model: {
      flowRoot: false
    },
    visual: {
      dark: dark,
      bgColor: props.bgCaptionColor,
      bgColorContrast: props.bgCaptionColorContrast,
      darkBgColor: props.darkBgCaptionColor,
      darkBgColorContrast: props.darkBgCaptionColorContrast,
      bgGradientFromColor: props.bgCaptionGradientFromColor,
      bgGradientFromColorContrast: props.bgCaptionGradientFromColorContrast,
      bgGradientMiddleColor: props.bgCaptionGradientMiddleColor,
      bgGradientMiddleColorContrast: props.bgCaptionGradientMiddleColorContrast,
      bgGradientEndColor: props.bgCaptionGradientEndColor,
      bgGradientEndColorContrast: props.bgCaptionGradientEndColorContrast,
      borderWidth: props.borderWidth,
      borderColor: props.borderColor,
      borderColorContrast: props.borderColorContrast,
      borderStyle: props.borderStyle,
      borderRadius: props.rounded,
      borderRadiusPosition: (props.rounded !== undefined && props.caption !== undefined) ? "bottom" : props.roundedPosition,
      shadow: props.shadow
    },
    spacing: {
      px: props.px,
      py: props.py,
      pb: props.pb,
      pl: props.pl,
      pr: props.pr,
      pt: props.pt
    }
  })

  const clsQuote = text({
    visualText: {
      dark: dark,
      textColor: props.quoteColor,
      textColorContrast: props.quoteColorContrast,
      darkTextColor: props.darkQuoteColor,
      darkTextColorContrast: props.darkQuoteColorContrast
    }
  })

  return(
    <figure className={clsFigure}>
      <blockquote className={clsBlock} cite={props.cite}>
        {props.quote && (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" className={`my-3 fill-current ${clsQuote} opacity-20`}><path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"/></svg>
        )}
        <p className={clsText}>{props.children}</p>
      </blockquote>
      {props.caption !== undefined && (
        <figcaption className={clsCaption}>{props.caption}</figcaption>
      )}
    </figure>
  )
}

Blockquote.defaultProps = {
  quote: true,
  bgColor: "gray",
  bgColorContrast: 200,
  rounded: "md",
  py: 2,
  px: 3,
  mx: 3,
  my: 3
}
