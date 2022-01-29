import { base, ColorProps, ModelProps, ResponsiveProps, SpacingProps, StandardProps, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { createContext, useId } from "@zenbu-ui/react-id"
import * as React from "react"
import { ButtonGroupItem, ButtonGroupItemProps } from "./button-group-item"

export interface ButtonGroupProps extends StandardProps, ResponsiveProps, ColorProps, ModelProps, VisualProps, VisualTextProps, SpacingProps {
  fluid?: boolean,
  disabled?: boolean
}

const PROVIDER_NAME = "ButtonGroup"

export let useContext: ButtonGroupProps
export const ButtonGroup: React.FC<ButtonGroupProps> & {
  Item: React.FC<ButtonGroupItemProps>
} = (props) => {
  const { dark, theme } = React.useContext(ThemeCtx)
  const id = useId("button-group")

  const tb = theme?.buttonGroup?.[`${props.componentName}`]

  const [ButtonGroupProvider, ButtonGroupContext] = createContext<ButtonGroupProps>(PROVIDER_NAME, {
    id: id,
    dark: dark,
    color: tb?.color !== undefined ? tb.color : props.color,
    colorContrast: tb?.colorContrast !== undefined ? tb.colorContrast : props.colorContrast,
    colorHover: tb?.colorHover !== undefined ? tb.colorHover : props.colorHover,
    colorHoverContrast: tb?.colorHoverContrast !== undefined ? tb.colorHoverContrast : props.colorHoverContrast,
    darkColor: tb?.darkColor !== undefined ? tb.darkColor : props.darkColor,
    darkColorContrast: tb?.darkColorContrast !== undefined ? tb.darkColorContrast : props.darkColorContrast,
    darkColorHover: tb?.darkColorHover !== undefined ? tb.darkColorHover : props.darkColorHover,
    darkColorHoverContrast: tb?.darkColorHoverContrast !== undefined ? tb.darkColorHoverContrast : props.darkColorHoverContrast,
    textColor: tb?.textColor !== undefined ? tb.textColor : props.textColor,
    textColorContrast: tb?.textColorContrast !== undefined ? tb.textColorContrast : props.textColorContrast,
    darkTextColor: tb?.darkTextColor !== undefined ? tb.darkTextColor : props.darkTextColor,
    darkTextColorContrast: tb?.darkTextColorContrast !== undefined ? tb.darkTextColorContrast : props.darkTextColorContrast,
    bgGradientFromColor: tb?.bgGradientFromColor !== undefined ? tb.bgGradientFromColor : props.bgGradientFromColor,
    bgGradientFromColorContrast: tb?.bgGradientFromColorContrast !== undefined ? tb.bgGradientFromColorContrast : props.bgGradientFromColorContrast,
    bgGradientMiddleColor: tb?.bgGradientMiddleColor !== undefined ? tb.bgGradientMiddleColor : props.bgGradientMiddleColor,
    bgGradientMiddleColorContrast: tb?.bgGradientMiddleColorContrast !== undefined ? tb.bgGradientMiddleColorContrast : props.bgGradientMiddleColorContrast,
    bgGradientEndColor: tb?.bgGradientEndColor !== undefined ? tb.bgGradientEndColor : props.bgGradientEndColor,
    bgGradientEndColorContrast: tb?.bgGradientEndColorContrast !== undefined ? tb.bgGradientEndColorContrast : props.bgGradientEndColorContrast,
    border: tb?.border !== undefined ? tb.border : props.border,
    borderWidth: tb?.borderWidth !== undefined ? tb.borderWidth : props.borderWidth,
    borderStyle: tb?.borderStyle !== undefined ? tb.borderStyle : props.borderStyle,
    borderColor: tb?.borderColor !== undefined ? tb.borderColor : props.borderColor,
    borderColorContrast: tb?.borderColorContrast !== undefined ? tb.borderColorContrast : props.borderColorContrast,
    rounded: tb?.rounded !== undefined ? tb.rounded : props.rounded,
    fontSize: tb?.fontSize !== undefined ? tb.fontSize : props.fontSize,
    fontWeight: tb?.fontWeight !== undefined ? tb.fontWeight : props.fontWeight,
    px: tb?.px !== undefined ? tb.px : props.px,
    py: tb?.py !== undefined ? tb.py : props.py,
    pb: tb?.pb !== undefined ? tb.pb : props.pb,
    pl: tb?.pl !== undefined ? tb.pl : props.pl,
    pr: tb?.pr !== undefined ? tb.pr : props.pr,
    pt: tb?.pt !== undefined ? tb.pt : props.pt
  })
  useContext = ButtonGroupContext(PROVIDER_NAME)

  const cls = base({
    model: {
      display: "inline-block",
      width: (tb?.fluid || (props.fluid && tb?.fluid === undefined)) ? "full" : tb?.width !== undefined ? tb.width : props.width,
      overflow: "hidden"
    },
    positioning: {
      position: "relative"
    },
    flexbox: {
      flex: true,
    },
    responsive: {
      sm: tb?.sm !== undefined ? tb.sm : props.sm,
      md: tb?.md !== undefined ? tb.md : props.md,
      lg: tb?.lg !== undefined ? tb.lg : props.lg,
      xl: tb?.xl !== undefined ? tb.xl : props.xl,
      "2xl": tb?.["2xl"] !== undefined ? tb["2xl"] : props["2xl"]
    },
    visual: {
      dark: false,
      borderRadius: tb?.rounded !== undefined ? tb.rounded : props.rounded,
      borderWidth: (tb?.border && tb.borderWidth !== undefined) ? tb.borderWidth : (props.border && tb?.border === undefined) ? props.borderWidth : undefined,
      borderStyle: (tb?.border && tb.borderStyle !== undefined) ? tb.borderStyle : (props.border && tb?.border === undefined) ? props.borderStyle : undefined,
      borderColor: (tb?.border && tb.borderColor !== undefined) ? tb.borderColor : (props.border && tb?.border === undefined) ? props.borderColor : undefined,
      borderColorContrast: (tb?.border && tb.borderColorContrast !== undefined) ? tb.borderColorContrast : (props.border && tb?.border === undefined) ? props.borderColorContrast : undefined,
      shadow: tb?.shadow !== undefined ? tb.shadow : props.shadow,
      shadowColor: (tb?.shadow !== undefined && tb.shadowColor !== undefined) ? tb.shadowColor : props.shadow !== undefined ? props.shadowColor : undefined,
      shadowColorContrast: (tb?.shadow !== undefined && tb.shadowColorContrast !== undefined) ? tb.shadowColorContrast : props.shadow !== undefined ? props.shadowColorContrast : undefined,
      shadowOpacity: (tb?.shadow !== undefined && tb.shadowOpacity !== undefined) ? tb.shadowOpacity : props.shadow !== undefined ? props.shadowOpacity : undefined,
      darkShadowColor: (tb?.shadow !== undefined && tb.darkShadowColor !== undefined) ? tb.darkShadowColor : props.shadow !== undefined ? props.darkShadowColor : undefined,
      darkShadowColorContrast: (tb?.shadow !== undefined && tb.darkShadowColorContrast !== undefined) ? tb.darkShadowColorContrast : props.shadow !== undefined ? props.darkShadowColorContrast : undefined,
      darkShadowOpacity: (tb?.shadow !== undefined && tb.darkShadowOpacity !== undefined) ? tb.darkShadowOpacity : props.shadow !== undefined ? props.darkShadowOpacity : undefined,
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

  return(
    <ButtonGroupProvider>
      <div
      id={id}
      className={cls}
      role="group">
        {props.children}
      </div>
    </ButtonGroupProvider>
  )
}

ButtonGroup.Item = ButtonGroupItem

ButtonGroup.defaultProps = {
  width: "max",
  fluid: false,
  disabled: false,
  color: "blue",
  colorContrast: "500",
  textColor: "white",
  border: false,
  borderWidth: "normal",
  borderStyle: "solid",
  shadowColor: "gray",
  shadowColorContrast: "400",
  shadowOpacity: 50,
  fontSize: "sm",
  fontWeight: "normal",
  rounded: "md",
  px: "4",
  py: "2"
}
