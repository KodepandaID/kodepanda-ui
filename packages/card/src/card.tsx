import { AspectRatio, base, BorderRadius, ColorProps, element, ModelProps, ResponsiveProps, Size, SpacingProps, StandardProps, text, VisualProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@reach/auto-id"
import * as React from "react"

interface CardProps extends StandardProps, ResponsiveProps, ModelProps, ColorProps, VisualProps, SpacingProps {
  title?: React.ReactNode,
  bgImg?: string,
  cover?: string,
  coverAlt?: string,
  coverWidth?: Size,
  coverPosition?: "top" | "left" | "right" | "center"
  coverPadding?: boolean,
  coverRounded?: BorderRadius,
  coverAspectRatio?: AspectRatio | string,
  description?: React.ReactNode,
  footer?: React.ReactNode
}

export const Card: React.FC<CardProps> = (props) => {
  const { dark, theme } = React.useContext(ThemeCtx)
  const id = useId()

  if (props.cover !== undefined && props.coverAlt === undefined) {
    throw new Error("The `cover` property has been filled, but the `coverAlt` property is empty. You must fill the `coverAlt` property.")
  }

  const tcard = theme?.card?.[`${props.componentName}`]

  const cls = base({
    model: {
      display: "inline-block",
      width: tcard?.width !== undefined ? tcard.width : (props.coverPosition !== "top" && Number(props.width) < 96) ? "96" : props.width,
      overflow: "hidden"
    },
    responsive: {
      sm: tcard?.sm !== undefined ? tcard.sm : props.sm,
      md: tcard?.md !== undefined ? tcard.md : props.md,
      lg: tcard?.lg !== undefined ? tcard.lg : props.lg,
      xl: tcard?.xl !== undefined ? tcard.xl : props.xl,
      "2xl": tcard?.["2xl"] !== undefined ? tcard["2xl"] : props["2xl"]
    },
    positioning: {
      position: "relative"
    },
    visual: {
      dark: dark,
      bgColor: tcard?.color !== undefined ? tcard.color : props.color,
      bgColorContrast: tcard?.colorContrast !== undefined ? tcard.colorContrast : props.colorContrast,
      darkBgColor: tcard?.darkColor !== undefined ? tcard.darkColor : props.darkColor,
      darkBgColorContrast: tcard?.darkColorContrast !== undefined ? tcard.darkColorContrast : props.darkColorContrast,
      bgGradientPosition: tcard?.bgGradientPosition !== undefined ? tcard.bgGradientPosition : props.bgGradientPosition,
      bgGradientEndColor: tcard?.bgGradientEndColor !== undefined ? tcard.bgGradientEndColor : props.bgGradientEndColor,
      bgGradientEndColorContrast: tcard?.bgGradientEndColorContrast !== undefined ? tcard.bgGradientEndColorContrast : props.bgGradientEndColorContrast,
      bgGradientFromColor: tcard?.bgGradientFromColor !== undefined ? tcard.bgGradientFromColor : props.bgGradientFromColor,
      bgGradientFromColorContrast: tcard?.bgGradientFromColorContrast !== undefined ? tcard.bgGradientFromColorContrast : props.bgGradientFromColorContrast,
      bgGradientMiddleColor: tcard?.bgGradientMiddleColor !== undefined ? tcard.bgGradientMiddleColor : props.bgGradientMiddleColor,
      bgGradientMiddleColorContrast: tcard?.bgGradientMiddleColorContrast !== undefined ? tcard.bgGradientMiddleColorContrast : props.bgGradientMiddleColorContrast,
      borderWidth: (tcard?.border && tcard.borderWidth !== undefined) ? tcard.borderWidth : (props.border && tcard?.border === undefined) ? props.borderWidth : undefined,
      borderStyle: (tcard?.border && tcard.borderStyle !== undefined) ? tcard.borderStyle : (props.border && tcard?.border === undefined) ? props.borderStyle : undefined,
      borderColor: (tcard?.border && tcard.borderColor !== undefined) ? tcard.borderColor : (props.border && tcard?.border === undefined) ? props.borderColor : undefined,
      borderColorContrast: (tcard?.border && tcard.borderColorContrast !== undefined) ? tcard.borderColorContrast : (props.border && tcard?.border === undefined) ? props.borderColorContrast : undefined,
      borderRadius: tcard?.rounded !== undefined ? tcard.rounded : props.rounded,
      borderRadiusPosition: tcard?.roundedPosition !== undefined ? tcard.roundedPosition : props.roundedPosition,
      shadow: tcard?.shadow !== undefined ? tcard.shadow : props.shadow,
      shadowColor: (tcard?.shadow !== undefined && tcard.shadowColor !== undefined) ? tcard.shadowColor : props.shadow !== undefined ? props.shadowColor : undefined,
      shadowColorContrast: (tcard?.shadow !== undefined && tcard.shadowColorContrast !== undefined) ? tcard.shadowColorContrast : props.shadow !== undefined ? props.shadowColorContrast : undefined,
      shadowOpacity: (tcard?.shadow !== undefined && tcard.shadowOpacity !== undefined) ? tcard.shadowOpacity : props.shadow !== undefined ? props.shadowOpacity : undefined,
      darkShadowColor: (tcard?.shadow !== undefined && tcard.darkShadowColor !== undefined) ? tcard.darkShadowColor : props.shadow !== undefined ? props.darkShadowColor : undefined,
      darkShadowColorContrast: (tcard?.shadow !== undefined && tcard.darkShadowColorContrast !== undefined) ? tcard.darkShadowColorContrast : props.shadow !== undefined ? props.darkShadowColorContrast : undefined,
      darkShadowOpacity: (tcard?.shadow !== undefined && tcard.darkShadowOpacity !== undefined) ? tcard.darkShadowOpacity : props.shadow !== undefined ? props.darkShadowOpacity : undefined,
      selectionColor: tcard?.selectionColor !== undefined ? tcard.selectionColor : props.selectionColor,
      selectionColorContrast: tcard?.selectionColorContrast !== undefined ? tcard.selectionColorContrast : props.selectionColorContrast,
      darkSelectionColor: tcard?.darkSelectionColor !== undefined ? tcard.darkSelectionColor : props.darkSelectionColor,
      darkSelectionColorContrast: tcard?.darkSelectionColorContrast !== undefined ? tcard.darkSelectionColorContrast : props.darkSelectionColorContrast,
      selectionTextColor: tcard?.selectionTextColor !== undefined ? tcard.selectionTextColor : props.selectionTextColor,
      selectionTextColorContrast: tcard?.selectionTextColorContrast !== undefined ? tcard.selectionTextColorContrast : props.selectionTextColorContrast,
      darkSelectionTextColor: tcard?.darkSelectionTextColor !== undefined ? tcard.darkSelectionTextColor : props.darkSelectionTextColor,
      darkSelectionTextColorContrast: tcard?.darkSelectionTextColorContrast !== undefined ? tcard.darkSelectionTextColorContrast : props.darkSelectionTextColorContrast
    },
    spacing: {
      mx: tcard?.mx !== undefined ? tcard.mx : props.mx,
      my: tcard?.my !== undefined ? tcard.my : props.my,
      mb: tcard?.mb !== undefined ? tcard.mb : props.mb,
      ml: tcard?.ml !== undefined ? tcard.ml : props.ml,
      mr: tcard?.mr !== undefined ? tcard.mr : props.mr,
      mt: tcard?.mt !== undefined ? tcard.mt : props.mt
    }
  })

  const clsFlex = base({
    flexbox: {
      flex: true,
      direction:((props.coverPosition === "left" && tcard?.coverPosition === undefined) || tcard?.coverPosition === "left") ?
      "row" : ((props.coverPosition === "right" && tcard?.coverPosition === undefined) || tcard?.coverPosition === "right") ? "row-reverse" : "col"
    }
  })

  const clsWrapper = base({
    spacing: {
      px: tcard?.px !== undefined ? tcard.px : props.px,
      py: tcard?.py !== undefined ? tcard.py : props.py,
      pb: tcard?.pb !== undefined ? tcard.pb : props.pb,
      pl: tcard?.pl !== undefined ? tcard.pl : props.pl,
      pr: tcard?.pr !== undefined ? tcard.pr : props.pr,
      pt: tcard?.pt !== undefined ? tcard.pt : props.pt
    },
  })

  let clsCover = element({
    model: {
      width: tcard?.coverWidth !== undefined ? tcard.coverWidth : props.coverWidth
    },
    element: {
      aspectRatio: tcard?.coverAspectRatio !== undefined ? tcard.coverAspectRatio : props.coverAspectRatio,
      objectFit: "cover"
    }
  })

  if ((props.coverRounded !== "none" && tcard?.coverRounded === undefined) || tcard?.coverRounded !== "none") {
    const clsCoverRounded = base({
      visual: {
        dark: false,
        borderRadius: tcard?.coverRounded !== undefined ? tcard.coverRounded : props.coverRounded
      }
    })

    clsCover = [clsCover, clsCoverRounded].join(" ").trim()
  }

  const clsText = text({
    visualText: {
      dark: false,
      wordBreak: "words"
    }
  })

  const CoverElement = () => {
    return(
      <React.Fragment>
        {(props.cover !== undefined && ((!props.coverPadding && tcard?.coverPadding === undefined) || tcard?.coverPadding === false)) && (
          <img className={clsCover} src={props.cover} alt={props.coverAlt} />
        )}

        {(props.cover !== undefined && ((props.coverPadding && tcard?.coverPadding === undefined) || tcard?.coverPadding)) && (
          <div className={clsWrapper}>
            <img className={clsCover} src={props.cover} alt={props.coverAlt} />
          </div>
        )}
      </React.Fragment>
    )
  }

  if (props.bgImg !== undefined) {
    const overlay = base({
      visual: {
        dark: false,
        bgColor: "black",
        bgOpacity: 50
      }
    })

    return(
      <div
      id={`card-${id}`}
      className={[
        cls,
        "bg-cover",
        "bg-center",
        clsText
      ].join(" ").trim()}
      style={{backgroundImage: `url(${props.bgImg})`}}>
        <div className={[clsFlex, overlay].join(" ").trim()}>
          {((props.coverPosition !== "center" && tcard?.coverPosition === undefined) || tcard?.coverPosition !== "center") && (<CoverElement />)}

          <div>
            {props.title !== undefined && (
              <div className={clsWrapper}>{props.title}</div>
            )}

            {((props.coverPosition === "center" && tcard?.coverPosition === undefined) || tcard?.coverPosition === "center") && (<CoverElement />)}

            {props.description !== undefined && (
              <div className={clsWrapper}>{props.description}</div>
            )}

            {props.footer !== undefined && (
              <div>{props.footer}</div>
            )}
          </div>
        </div>
      </div>
    )
  }

  return(
    <div
    id={`card-${id}`}
    className={[
      cls,
      clsText
    ].join(" ").trim()}>
      <div className={clsFlex}>
        {((props.coverPosition !== "center" && tcard?.coverPosition === undefined) && tcard?.coverPosition !== "center") && (<CoverElement />)}

        <div>
          {props.title !== undefined && (
            <div className={clsWrapper}>{props.title}</div>
          )}

          {((props.coverPosition === "center" && tcard?.coverPosition === undefined) || tcard?.coverPosition === "center") && (<CoverElement />)}

          {props.description !== undefined && (
            <div className={clsWrapper}>{props.description}</div>
          )}

          {props.footer !== undefined && (
            <div>{props.footer}</div>
          )}
        </div>
      </div>
    </div>
  )
}

Card.defaultProps = {
  width: "72",
  coverWidth: "full",
  coverPosition: "top",
  coverPadding: false,
  coverRounded: "none",
  coverAspectRatio: "3/1.464",
  color: "white",
  border: true,
  borderWidth: "normal",
  borderStyle: "solid",
  borderColor: "gray",
  borderColorContrast: "300",
  shadowColor: "gray",
  shadowColorContrast: "400",
  shadowOpacity: 50,
  rounded: "md",
  px: "4",
  py: "2"
}
