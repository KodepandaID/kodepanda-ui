import { base, ColorProps, element, ElementProps, ModelProps, ResponsiveProps, Rotate, SpacingProps, StandardProps, VisualProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@zenbu-ui/react-id"
import * as React from "react"
import { BoxContent } from "./box-content"
import { BoxImage, BoxImageProps } from "./box-image"

interface BoxProps extends StandardProps, ResponsiveProps, ModelProps, ColorProps, VisualProps, ElementProps, SpacingProps {
  rotate?: Rotate,
  image?: React.ReactNode,
  bgImage?: string,
  overlay?: boolean
}

export const Box: React.FC<BoxProps> & {
  Content: React.FC<StandardProps & SpacingProps>
  Image: React.FC<BoxImageProps>
} = (props) => {
  const { dark } = React.useContext(ThemeCtx)
  const id = useId("box")

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

  const overlay = base({
    model: {
      width: "full",
      height: "full"
    },
    visual: {
      dark: false,
      bgColor: "black",
      bgOpacity: 50
    }
  })

  return(
    <div
    id={id}
    className={[
      cls,
      props.bgImage !== undefined ? `bg-[url(${props.bgImage})] bg-cover bg-center` : "",
      clsElm
    ].join(" ").trim()}>
      {props.overlay ? (
        <div className={overlay}>
          {props.image !== undefined && (props.image)}
          {props.children}
        </div>
      ) : (
        <React.Fragment>
          {props.image !== undefined && (props.image)}
          {props.children}
        </React.Fragment>
      )}
    </div>
  )
}

Box.Content = BoxContent
Box.Image = BoxImage

Box.defaultProps = {
  width: "full",
  overlay: false,
  color: "white",
  border: true,
  borderWidth: "normal",
  borderStyle: "solid",
  borderColor: "gray",
  borderColorContrast: "200",
  shadowColor: "gray",
  shadowColorContrast: "400",
  shadowOpacity: 50,
  rounded: "md",
  px: "5",
  py: "5"
}
