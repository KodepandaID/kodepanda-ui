import { base, ColorProps, element, ElementProps, ModelProps, ResponsiveProps, Rotate, SpacingProps, StandardProps, VisualProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import * as React from "react"
import { BoxContent } from "./box-content"
import { BoxImage, BoxImageProps } from "./box-image"
import { BoxOverlay, BoxOverlayProps } from "./box-overlay"

interface BoxProps extends StandardProps, ResponsiveProps, ModelProps, ColorProps, VisualProps, ElementProps, SpacingProps {
  rotate?: Rotate,
  image?: React.ReactNode,
  bgImage?: string,
  overlay?: boolean
}

export const Box: React.FC<BoxProps> & {
  Content: React.FC<StandardProps & SpacingProps>
  Image: React.FC<BoxImageProps>
  Overlay: React.FC<BoxOverlayProps>
} = (props) => {
  const { dark } = React.useContext(ThemeCtx)

  const cls = base({
    positioning: {
      position: "relative"
    },
    model: {
      display: "block",
      width: props.width,
      height: props.height,
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
      borderWidth: props.border ? props.borderWidth : undefined,
      borderStyle: props.border ? props.borderStyle : undefined,
      borderColor: props.border ? props.borderColor : undefined,
      borderColorContrast: props.border ? props.borderColorContrast : undefined,
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
      mt: props.mt,
      px: props.px,
      py: props.py,
      pb: props.pb,
      pl: props.pl,
      pr: props.pr,
      pt: props.pt
    }
  })

  const clsElm = element({
    element: {
      transform: props.rotate !== undefined ? true : undefined,
      rotate: props.rotate
    }
  })

  return(
    <div id={props.id} className={[cls, clsElm].join(" ").trim()}>
      {props.image !== undefined && (props.image)}
      {props.overlay && (<BoxOverlay />)}
      {props.children}
    </div>
  )
}

Box.Content = BoxContent
Box.Image = BoxImage
Box.Overlay = BoxOverlay

Box.defaultProps = {
  width: "full",
  overlay: false,
  color: "white",
  border: true,
  borderWidth: "normal",
  borderStyle: "solid",
  borderColor: "gray",
  borderColorContrast: "200",
  rounded: "md",
  px: "5",
  py: "5"
}
