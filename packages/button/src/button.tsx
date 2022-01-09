// Following the button guideline WAI-ARIA 1.2
// https://w3c.github.io/aria-practices/examples/button/button.html

import { AriaProps, base, Color, ColorContrast, ColorProps, element, ModelProps, ResponsiveProps, Size, SpacingProps, StandardProps, text, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { Icon, Outline, Solid } from "@zenbu-ui/icon"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@zenbu-ui/react-id"
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
  const { dark } = React.useContext(ThemeCtx)
  const id = useId("button")

  if (props.circle && props.width === "max") {
    throw new Error("If you want to use the `circle` property, you can't fill the `width` property value with `full` `screen` or `max` you must fill with size number.")
  }

  const cls = base({
    model: {
      display: "inline-block",
      width: props.fluid ? "full" : props.width,
      height: props.circle ? props.width : props.height
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
      bgHoverColor: props.colorHover !== undefined ? props.colorHover : props.color,
      bgHoverColorContrast: (Number(props.colorContrast) < 800 && Number(props.colorContrast) > 50 && props.colorHoverContrast === undefined) ? Number(props.colorContrast) + ((Number(props.colorContrast) + 200 <= 800) ? 200 : 100) : props.colorHoverContrast,
      darkBgColor: props.darkColor,
      darkBgColorContrast: props.darkColorContrast,
      darkBgHoverColor: props.darkColorHover !== undefined ? props.darkColorHover : props.darkColor,
      darkBgHoverColorContrast: (Number(props.darkColorContrast) < 800 && Number(props.darkColorContrast) > 50 && props.darkColorHoverContrast === undefined) ? Number(props.darkColorContrast) + ((Number(props.colorContrast) + 200 <= 800) ? 200 : 100) : props.darkColorHoverContrast,
      bgGradientFromColor: props.bgGradientFromColor,
      bgGradientFromColorContrast: props.bgGradientFromColorContrast,
      bgGradientMiddleColor: props.bgGradientMiddleColor,
      bgGradientMiddleColorContrast: props.bgGradientMiddleColorContrast,
      bgGradientEndColor: props.bgGradientEndColor,
      bgGradientEndColorContrast: props.bgGradientEndColorContrast,
      borderRadius: props.circle ? "full" : props.rounded,
      borderWidth: props.border ? props.borderWidth : undefined,
      borderStyle: props.border ? props.borderStyle : undefined,
      borderColor: props.border ? props.borderColor : undefined,
      borderColorContrast: props.border ? props.borderColorContrast : undefined,
      shadow: props.shadow,
      shadowColor: props.shadow !== undefined ? props.shadowColor : undefined,
      shadowColorContrast: props.shadow !== undefined ? props.shadowColorContrast : undefined,
      shadowOpacity: props.shadow !== undefined ? props.shadowOpacity : undefined,
      darkShadowColor: props.shadow !== undefined ? props.darkShadowColor : undefined,
      darkShadowColorContrast: props.shadow !== undefined ? props.darkShadowColorContrast : undefined,
      darkShadowOpacity: props.shadow !== undefined ? props.darkShadowOpacity : undefined,
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
    focus: {
      dark: dark,
      focusOutline: "none",
      focusColor: props.colorHover !== undefined ? props.colorHover : props.color,
      focusColorContrast: (Number(props.colorContrast) < 800 && Number(props.colorContrast) > 50 && props.colorHoverContrast === undefined) ? Number(props.colorContrast) + ((Number(props.colorContrast) + 200 <= 800) ? 200 : 100) : props.colorHoverContrast,
    }
  })

  const clsText = text({
    visualText: {
      dark: dark,
      textColor: props.textColor,
      textColorContrast: props.textColorContrast,
      darkTextColor: props.darkTextColor,
      darkTextColorContrast: props.darkTextColorContrast,
      fontSize: props.fontSize,
      fontWeight: props.fontWeight
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
              <Icon icon={props.icon} height={props.iconHeight === undefined ? "5" : props.iconHeight}
              color={props.iconColor} colorContrast={props.iconColorContrast}
              darkColor={props.darkIconColor} darkColorContrast={props.darkIconColorContrast} />
            </span>
          )}

          {props.children !== undefined && (
            <span>{props.children}</span>
          )}
        </span>
      </a>
    )
  }

  if (props.loading) {
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
            <Icon icon={props.icon} height={props.iconHeight === undefined ? "5" : props.iconHeight}
            color={props.iconColor} colorContrast={props.iconColorContrast}
            darkColor={props.darkIconColor} darkColorContrast={props.darkIconColorContrast} />
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
