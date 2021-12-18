import { AspectRatio, base, BorderRadius, ColorProps, element, ModelProps, ResponsiveProps, Size, SpacingProps, StandardProps, text, VisualProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
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
  const { dark } = React.useContext(ThemeCtx)

  if (props.cover !== undefined && props.coverAlt === undefined) {
    throw new Error("The `cover` property has been filled, but the `coverAlt` property is empty. You must fill the `coverAlt` property.")
  }

  const cls = base({
    model: {
      display: "inline-block",
      width: (props.coverPosition !== "top" && Number(props.width) < 96) ? "96" : props.width,
      overflow: "hidden"
    },
    responsive: {
      sm: props.sm,
      md: props.md,
      lg: props.lg,
      xl: props.xl,
      "2xl": props["2xl"]
    },
    positioning: {
      position: "relative"
    },
    visual: {
      dark: dark,
      bgColor: props.color,
      bgColorContrast: props.colorContrast,
      darkBgColor: props.darkColor,
      darkBgColorContrast: props.darkColorContrast,
      bgGradientPosition: props.bgGradientPosition,
      bgGradientEndColor: props.bgGradientEndColor,
      bgGradientEndColorContrast: props.bgGradientEndColorContrast,
      bgGradientFromColor: props.bgGradientFromColor,
      bgGradientFromColorContrast: props.bgGradientFromColorContrast,
      bgGradientMiddleColor: props.bgGradientMiddleColor,
      bgGradientMiddleColorContrast: props.bgGradientMiddleColorContrast,
      borderRadius: props.rounded,
      borderRadiusPosition: props.roundedPosition,
      shadow: props.shadow,
      shadowColor: props.shadow !== undefined ? props.shadowColor : undefined,
      shadowColorContrast: props.shadow !== undefined ? props.shadowColorContrast : undefined,
      shadowOpacity: props.shadow !== undefined ? props.shadowOpacity : undefined,
      darkShadowColor: props.shadow !== undefined ? props.darkShadowColor : undefined,
      darkShadowColorContrast: props.shadow !== undefined ? props.darkShadowColorContrast : undefined,
      darkShadowOpacity: props.shadow !== undefined ? props.darkShadowOpacity : undefined,
      selectionColor: props.selectionColor,
      selectionColorContrast: props.selectionColorContrast,
      darkSelectionColor: props.darkSelectionColor,
      darkSelectionColorContrast: props.darkSelectionColorContrast,
      selectionTextColor: props.selectionTextColor,
      selectionTextColorContrast: props.selectionTextColorContrast,
      darkSelectionTextColor: props.darkSelectionTextColor,
      darkSelectionTextColorContrast: props.darkSelectionTextColorContrast
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

  const clsFlex = base({
    flexbox: {
      flex: true,
      direction: props.coverPosition === "left" ? "row" : props.coverPosition === "right" ? "row-reverse" : "col"
    }
  })

  const clsWrapper = base({
    spacing: {
      px: props.px,
      py: props.py,
      pb: props.pb,
      pl: props.pl,
      pr: props.pr,
      pt: props.pt
    },
  })

  let clsCover = element({
    model: {
      width: props.coverWidth
    },
    element: {
      aspectRatio: props.coverAspectRatio,
      objectFit: "cover"
    }
  })

  if (props.coverRounded !== "none") {
    const clsCoverRounded = base({
      visual: {
        dark: false,
        borderRadius: props.coverRounded
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
        {(props.cover !== undefined && !props.coverPadding) && (
          <img className={clsCover} src={props.cover} alt={props.coverAlt} />
        )}

        {(props.cover !== undefined && props.coverPadding) && (
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
      <div className={[
        cls,
        `bg-[url(${props.bgImg})]`,
        "bg-cover",
        "bg-center",
        clsText
      ].join(" ").trim()}>
        <div className={[clsFlex, overlay].join(" ").trim()}>
          {props.coverPosition !== "center" && (<CoverElement />)}

          <div>
            {props.title !== undefined && (
              <div className={clsWrapper}>{props.title}</div>
            )}

            {props.coverPosition === "center" && (<CoverElement />)}

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
    <div className={[
      cls,
      clsText
    ].join(" ").trim()}>
      <div className={clsFlex}>
        {props.coverPosition !== "center" && (<CoverElement />)}

        <div>
          {props.title !== undefined && (
            <div className={clsWrapper}>{props.title}</div>
          )}

          {props.coverPosition === "center" && (<CoverElement />)}

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
