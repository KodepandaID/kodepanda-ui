import { base, ColorProps, element, ElementProps, ModelProps, ResponsiveProps, Rotate, SpacingProps, StandardProps, VisualProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@reach/auto-id"
import * as React from "react"
import { BoxContent } from "./box-content"
import { BoxImage, BoxImageProps } from "./box-image"

interface BoxProps extends StandardProps, ResponsiveProps, ModelProps, ColorProps, VisualProps, ElementProps, SpacingProps {
  as?: "div" | "main" | "article" | "section",
  rotate?: Rotate,
  image?: React.ReactNode,
  bgImage?: string,
  overlay?: boolean
}

export const Box: React.FC<BoxProps> & {
  Content: React.FC<StandardProps & SpacingProps>
  Image: React.FC<BoxImageProps>
} = (props) => {
  const { dark, theme } = React.useContext(ThemeCtx)
  const id = useId()

  const tbox = theme?.box?.[`${props.componentName}`]

  const cls = base({
    positioning: {
      position: "relative"
    },
    model: {
      display: "block",
      width: tbox?.width !== undefined ? tbox.width : props.width,
      height: tbox?.height !== undefined ? tbox.height : props.height,
    },
    responsive: {
      sm: tbox?.sm !== undefined ? tbox.sm : props.sm,
      md: tbox?.md !== undefined ? tbox.md : props.md,
      lg: tbox?.lg !== undefined ? tbox.lg : props.lg,
      xl: tbox?.xl !== undefined ? tbox.xl : props.xl,
      "2xl": tbox?.["2xl"] !== undefined ? tbox["2xl"] : props["2xl"]
    },
    visual: {
      dark: dark,
      bgColor: tbox?.color !== undefined ? tbox.color : props.color,
      bgColorContrast: tbox?.colorContrast !== undefined ? tbox.colorContrast : props.colorContrast,
      darkBgColor: tbox?.darkColor !== undefined ? tbox.darkColor : props.darkColor,
      darkBgColorContrast: tbox?.darkColorContrast !== undefined ? tbox.darkColorContrast : props.darkColorContrast,
      bgGradientPosition: tbox?.bgGradientPosition !== undefined ? tbox.bgGradientPosition : props.bgGradientPosition,
      bgGradientEndColor: tbox?.bgGradientEndColor !== undefined ? tbox.bgGradientEndColor : props.bgGradientEndColor,
      bgGradientEndColorContrast: tbox?.bgGradientEndColorContrast !== undefined ? tbox.bgGradientEndColorContrast : props.bgGradientEndColorContrast,
      bgGradientFromColor: tbox?.bgGradientFromColor !== undefined ? tbox.bgGradientFromColor : props.bgGradientFromColor,
      bgGradientFromColorContrast: tbox?.bgGradientFromColorContrast !== undefined ? tbox.bgGradientFromColorContrast : props.bgGradientFromColorContrast,
      bgGradientMiddleColor: tbox?.bgGradientMiddleColor !== undefined ? tbox.bgGradientMiddleColor : props.bgGradientMiddleColor,
      bgGradientMiddleColorContrast: tbox?.bgGradientMiddleColorContrast !== undefined ? tbox.bgGradientMiddleColorContrast : props.bgGradientMiddleColorContrast,
      borderWidth: (tbox?.border && tbox.borderWidth !== undefined) ? tbox.borderWidth : (props.border && tbox?.border === undefined) ? props.borderWidth : undefined,
      borderPosition: (tbox?.border && tbox.borderPosition !== undefined) ? tbox.borderPosition : (props.border && tbox?.border === undefined) ? props.borderPosition : undefined,
      borderStyle: (tbox?.border && tbox.borderStyle !== undefined) ? tbox.borderStyle : (props.border && tbox?.border === undefined) ? props.borderStyle : undefined,
      borderColor: (tbox?.border && tbox.borderColor !== undefined) ? tbox.borderColor : (props.border && tbox?.border === undefined) ? props.borderColor : undefined,
      borderColorContrast: (tbox?.border && tbox.borderColorContrast !== undefined) ? tbox.borderColorContrast : (props.border && tbox?.border === undefined) ? props.borderColorContrast : undefined,
      darkBorderColor: (tbox?.border || (props.border && tbox?.border === undefined)) ? tbox?.darkBorderColor !== undefined ? tbox.darkBorderColor : props.darkBorderColor : undefined,
      darkBorderColorContrast: (tbox?.border || (props.border && tbox?.border === undefined)) ? tbox?.darkBorderColorContrast !== undefined ? tbox.darkBorderColorContrast : props.darkBorderColorContrast : undefined,
      borderRadius: tbox?.rounded !== undefined ? tbox.rounded : props.rounded,
      borderRadiusPosition: tbox?.roundedPosition !== undefined ? tbox.roundedPosition : props.roundedPosition,
      shadow: tbox?.shadow !== undefined ? tbox.shadow : props.shadow,
      shadowColor: (tbox?.shadow !== undefined && tbox.shadowColor !== undefined) ? tbox.shadowColor : props.shadow !== undefined ? props.shadowColor : undefined,
      shadowColorContrast: (tbox?.shadow !== undefined && tbox.shadowColorContrast !== undefined) ? tbox.shadowColorContrast : props.shadow !== undefined ? props.shadowColorContrast : undefined,
      shadowOpacity: (tbox?.shadow !== undefined && tbox.shadowOpacity !== undefined) ? tbox.shadowOpacity : props.shadow !== undefined ? props.shadowOpacity : undefined,
      darkShadowColor: (tbox?.shadow !== undefined && tbox.darkShadowColor !== undefined) ? tbox.darkShadowColor : props.shadow !== undefined ? props.darkShadowColor : undefined,
      darkShadowColorContrast: (tbox?.shadow !== undefined && tbox.darkShadowColorContrast) ? tbox.darkShadowColorContrast : props.shadow !== undefined ? props.darkShadowColorContrast : undefined,
      darkShadowOpacity: (tbox?.shadow !== undefined && tbox.darkShadowOpacity !== undefined) ? tbox.darkShadowOpacity : props.shadow !== undefined ? props.darkShadowOpacity : undefined,
      selectionColor: tbox?.selectionColor !== undefined ? tbox.selectionColor : props.selectionColor,
      selectionColorContrast: tbox?.selectionColorContrast !== undefined ? tbox.selectionColorContrast : props.selectionColorContrast,
      darkSelectionColor: tbox?.darkSelectionColor !== undefined ? tbox.darkSelectionColor : props.darkSelectionColor,
      darkSelectionColorContrast: tbox?.darkSelectionColorContrast !== undefined ? tbox.darkSelectionColorContrast : props.darkSelectionColorContrast,
      selectionTextColor: tbox?.selectionTextColor !== undefined ? tbox.selectionTextColor : props.selectionTextColor,
      selectionTextColorContrast: tbox?.selectionTextColorContrast !== undefined ? tbox.selectionTextColorContrast : props.selectionTextColorContrast,
      darkSelectionTextColor: tbox?.darkSelectionTextColor !== undefined ? tbox.darkSelectionTextColor : props.darkSelectionTextColor,
      darkSelectionTextColorContrast: tbox?.darkSelectionTextColorContrast !== undefined ? tbox.darkSelectionTextColorContrast : props.darkSelectionTextColorContrast
    },
    spacing: {
      mx: (tbox?.mx !== undefined) ? tbox.mx : props.mx,
      my: (tbox?.my !== undefined) ? tbox.my : props.my,
      mb: (tbox?.mb !== undefined) ? tbox.mb : props.mb,
      ml: (tbox?.ml !== undefined) ? tbox.ml : props.ml,
      mr: (tbox?.mr !== undefined) ? tbox.mr : props.mr,
      mt: (tbox?.mt !== undefined) ? tbox.mt : props.mt,
      px: (tbox?.px !== undefined) ? tbox.px : props.px,
      py: (tbox?.py !== undefined) ? tbox.py : props.py,
      pb: (tbox?.pb !== undefined) ? tbox.pb : props.pb,
      pl: (tbox?.pl !== undefined) ? tbox.pl : props.pl,
      pr: (tbox?.pr !== undefined) ? tbox.pr : props.pr,
      pt: (tbox?.pt !== undefined) ? tbox.pt : props.pt
    }
  })

  const clsElm = element({
    element: {
      transform: tbox?.rotate !== undefined ? true : props.rotate !== undefined ? true : undefined,
      rotate: tbox?.rotate !== undefined ? tbox.rotate : props.rotate
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

  const Child = () => {
    return(
      (tbox?.overlay || (props.overlay && tbox?.overlay === undefined)) ? (
        <div className={overlay}>
          {props.image !== undefined && (props.image)}
          {props.children}
        </div>
      ) : (
        <React.Fragment>
          {props.image !== undefined && (props.image)}
          {props.children}
        </React.Fragment>
      )
    )
  }

  return React.createElement(
    `${props.as}`,
    {id: id, style: props.bgImage !== undefined ? {backgroundImage: `url(${props.bgImage})`} : undefined, className: [
      cls,
      props.bgImage !== undefined ? `bg-cover bg-center` : "",
      clsElm
    ].join(" ").trim()},
    <Child />
  )
}

Box.Content = BoxContent
Box.Image = BoxImage

Box.defaultProps = {
  as: "div",
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
