// Following the button guideline WAI-ARIA 1.2
// https://w3c.github.io/aria-practices/examples/button/button.html

import { AriaProps, base, Color, ColorContrast, ColorProps, element, ModelProps, ResponsiveProps, Size, SpacingProps, StandardProps, text, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { Icon, Outline, Solid } from "@zenbu-ui/icon"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@reach/auto-id"
import * as React from "react"

interface ButtonProps extends StandardProps, AriaProps, ResponsiveProps, ColorProps, ModelProps, VisualProps, VisualTextProps, SpacingProps {
  type?: "button" | "submit",
  fluid?: boolean,
  loading?: boolean,
  loadingText?: string,
  disabled?: boolean,
  circle?: boolean,
  icon?: Outline | Solid,
  iconHeight?: Size,
  iconColor?: Color,
  iconColorContrast?: ColorContrast,
  darkIconColor?: Color,
  darkIconColorContrast?: ColorContrast,
  href?: string,
  target?: "_self" | "_blank" | "_parent" | "_top",
  onClick?: () => void
}

export const Button: React.FC<ButtonProps> = (props) => {
  const { dark, theme } = React.useContext(ThemeCtx)
  const id = useId("button")

  if (props.circle && props.width === "max") {
    throw new Error("If you want to use the `circle` property, you can't fill the `width` property value with `full` `screen` or `max` you must fill with size number.")
  }

  const tb = theme?.button?.[`${props.componentName}`]

  const cls = base({
    model: {
      display: "inline-block",
      width: tb?.fluid ? "full" : (props.fluid && tb?.fluid === undefined) ? "full" : tb?.width !== undefined ? tb.width : props.width,
      height: (tb?.circle && tb.width !== undefined) ? tb.width : (props.circle && tb?.circle === undefined) ? tb?.width !== undefined ? tb.width : props.width : tb?.height !== undefined ? tb.height : props.height
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
      bgColor: tb?.color !== undefined ? tb.color : props.color,
      bgColorContrast: tb?.colorContrast !== undefined ? tb.colorContrast : props.colorContrast,
      bgHoverColor: tb?.colorHover !== undefined ? tb.colorHover : props.colorHover !== undefined ? props.colorHover : tb?.color !== undefined ? tb.color : props.color,
      bgHoverColorContrast: tb?.colorHoverContrast !== undefined ? tb.colorHoverContrast : (Number(props.colorContrast) < 800 && Number(props.colorContrast) > 50 && props.colorHoverContrast === undefined) ? Number(props.colorContrast) + ((Number(props.colorContrast) + 200 <= 800) ? 200 : 100) : props.colorHoverContrast,
      darkBgColor: tb?.darkColor !== undefined ? tb.darkColor : props.darkColor,
      darkBgColorContrast: tb?.darkColorContrast !== undefined ? tb.darkColorContrast : props.darkColorContrast,
      darkBgHoverColor: tb?.darkColorHover !== undefined ? tb.darkColorHover : props.darkColorHover !== undefined ? props.darkColorHover : tb?.darkColor !== undefined ? tb.darkColor : props.darkColor,
      darkBgHoverColorContrast: tb?.darkColorHoverContrast !== undefined ? tb.darkColorHoverContrast : (Number(props.darkColorContrast) < 800 && Number(props.darkColorContrast) > 50 && props.darkColorHoverContrast === undefined) ? Number(props.darkColorContrast) + ((Number(props.colorContrast) + 200 <= 800) ? 200 : 100) : props.darkColorHoverContrast,
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
      borderRadius: (tb?.circle || (props.circle && tb?.circle === undefined)) ? "full" : tb?.rounded !== undefined ? tb.rounded : props.rounded,
      borderRadiusPosition: tb?.roundedPosition !== undefined ? tb.roundedPosition : props.roundedPosition,
      shadow: tb?.shadow !== undefined ? tb.shadow : props.shadow,
      shadowColor: (tb?.shadow !== undefined && tb.shadowColor !== undefined) ? tb.shadowColor : props.shadow !== undefined ? props.shadowColor : undefined,
      shadowColorContrast: (tb?.shadow !== undefined && tb.shadowColorContrast !== undefined) ? tb.shadowColorContrast : props.shadow !== undefined ? props.shadowColorContrast : undefined,
      shadowOpacity: (tb?.shadow !== undefined && tb.shadowOpacity !== undefined) ? tb.shadowOpacity : props.shadow !== undefined ? props.shadowOpacity : undefined,
      darkShadowColor: (tb?.shadow !== undefined && tb.darkShadowColor !== undefined) ? tb.darkShadowColor : props.shadow !== undefined ? props.darkShadowColor : undefined,
      darkShadowColorContrast: (tb?.shadow !== undefined && tb.darkShadowColorContrast !== undefined) ? tb.darkShadowColorContrast : props.shadow !== undefined ? props.darkShadowColorContrast : undefined,
      darkShadowOpacity: (tb?.shadow !== undefined && tb.darkShadowOpacity !== undefined) ? tb.darkShadowOpacity : props.shadow !== undefined ? props.darkShadowOpacity : undefined,
    },
    misc: {
      opacity: props.disabled ? "50" : undefined,
      userSelect: "none"
    },
    transition: {
      transition: "colors",
      ease: "in-out",
      duration: "200"
    },
    spacing: {
      mx: tb?.mx !== undefined ? tb.mx : props.mx,
      my: tb?.my !== undefined ? tb.my : props.my,
      mb: tb?.mb !== undefined ? tb.mb : props.mb,
      ml: tb?.ml !== undefined ? tb.ml : props.ml,
      mr: tb?.mr !== undefined ? tb.mr : props.mr,
      mt: tb?.mt !== undefined ? tb.mt : props.mt,
      px: tb?.px !== undefined ? tb.px : props.px,
      py: tb?.py !== undefined ? tb.py : props.py,
      pb: tb?.pb !== undefined ? tb.pb : props.pb,
      pl: tb?.pl !== undefined ? tb.pl : props.pl,
      pr: tb?.pr !== undefined ? tb.pr : props.pr,
      pt: tb?.pt !== undefined ? tb.pt : props.pt
    }
  })

  const clsElm = element({
    focus: {
      dark: dark,
      focusOutline: "none",
      focusColor: tb?.colorHover !== undefined ? tb.colorHover : props.colorHover !== undefined ? props.colorHover : tb?.color !== undefined ? tb.color : props.color,
      focusColorContrast: tb?.colorHoverContrast !== undefined ? tb.colorHoverContrast : (Number(props.colorContrast) < 800 && Number(props.colorContrast) > 50 && props.colorHoverContrast === undefined) ? Number(props.colorContrast) + ((Number(props.colorContrast) + 200 <= 800) ? 200 : 100) : props.colorHoverContrast,
    }
  })

  const clsText = text({
    visualText: {
      dark: dark,
      textColor: tb?.textColor !== undefined ? tb.textColor : props.textColor,
      textColorContrast: tb?.textColorContrast !== undefined ? tb.textColorContrast : props.textColorContrast,
      darkTextColor: tb?.darkTextColor !== undefined ? tb.darkTextColor : props.darkTextColor,
      darkTextColorContrast: tb?.darkTextColorContrast !== undefined ? tb.darkTextColorContrast : props.darkTextColorContrast,
      fontSize: tb?.fontSize !== undefined ? tb.fontSize : props.fontSize,
      fontWeight: tb?.fontWeight !== undefined ? tb.fontWeight : props.fontWeight
    }
  })

  if (props.href !== undefined) {
    return(
      <a
      id={id}
      className={[
        cls,
        clsElm,
        clsText,
        props.disabled ? "pointer-events-none" : ""].join(" ").trim()}
      tabIndex={0}
      role="button"
      aria-label={props.ariaLabel}
      aria-labelledby={props.ariaLabelledBy}
      aria-disabled={props.disabled ? "true" : undefined}
      href={props.href}
      target={props.target}>
        <span className="flex justify-center space-x-4">
          {props.icon !== undefined && (
            <span className="flex items-center justify-center" style={{
              marginLeft: "calc(-0.5em - 1px)",
              marginRight: "calc(-.5em - 1px)"
            }}>
              <Icon icon={props.icon} height={tb?.iconHeight !== undefined ? tb.iconHeight : props.iconHeight === undefined ? "5" : props.iconHeight}
              color={tb?.iconColor !== undefined ? tb.iconColor : props.iconColor}
              colorContrast={tb?.iconColorContrast !== undefined ? tb.iconColorContrast : props.iconColorContrast}
              darkColor={tb?.darkIconColor !== undefined ? tb.darkIconColor : props.darkIconColor}
              darkColorContrast={tb?.darkIconColorContrast !== undefined ? tb.darkIconColorContrast : props.darkIconColorContrast} />
            </span>
          )}

          {props.children !== undefined && (
            <span>{props.children}</span>
          )}
        </span>
      </a>
    )
  }

  if ((props.loading && !tb?.loading) || tb?.loading) {
    return(
      <button
      id={id}
      type={props.type}
      disabled={props.disabled}
      aria-label={props.ariaLabel}
      aria-labelledby={props.ariaLabelledBy}
      aria-disabled={props.disabled ? "true" : undefined}
      aria-live="assertive"
      aria-busy="true"
      className={[
        cls,
        clsElm,
        clsText,
        props.disabled ? "pointer-events-none" : ""].join(" ").trim()}
      onClick={() => {
        if (props.onClick !== undefined) props.onClick()
      }}>
        <span className="flex items-center justify-center" style={{
          marginLeft: "calc(-0.5em - 1px)",
          marginRight: "calc(-.5em - 1px)"
        }}>
          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          {props.loadingText !== undefined && (
            <span className={[clsText, "ml-2"].join(" ").trim()}>{props.loadingText}</span>
          )}
        </span>
      </button>
    )
  }

  return(
    <button
    id={id}
    type={props.type}
    disabled={props.disabled}
    aria-label={props.ariaLabel}
    aria-labelledby={props.ariaLabelledBy}
    aria-disabled={props.disabled ? "true" : undefined}
    className={[
      cls,
      clsElm,
      clsText,
      props.disabled ? "pointer-events-none" : ""].join(" ").trim()}
    onClick={() => {
      if (props.onClick !== undefined) props.onClick()
    }}>
      <span className="flex justify-center space-x-4">
        {props.icon !== undefined && (
          <span className="flex items-center justify-center" style={{
            marginLeft: "calc(-0.5em - 1px)",
            marginRight: "calc(-.5em - 1px)"
          }}>
            <Icon icon={props.icon}
            height={tb?.iconHeight !== undefined ? tb?.iconHeight : props.iconHeight === undefined ? "5" : props.iconHeight}
            color={tb?.iconColor !== undefined ? tb.iconColor : props.iconColor}
            colorContrast={tb?.iconColorContrast !== undefined ? tb.iconColorContrast : props.iconColorContrast}
            darkColor={tb?.darkIconColor !== undefined ? tb.darkIconColor : props.darkIconColor}
            darkColorContrast={tb?.darkIconColorContrast !== undefined ? tb.darkIconColorContrast : props.darkIconColorContrast} />
          </span>
        )}

        {props.children !== undefined && (
          <span>{props.children}</span>
        )}
      </span>
    </button>
  )
}

Button.defaultProps = {
  width: "max",
  type: "button",
  fluid: false,
  loading: false,
  disabled: false,
  circle: false,
  target: "_self",
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
