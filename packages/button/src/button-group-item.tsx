// Following the button guideline WAI-ARIA 1.2
// https://w3c.github.io/aria-practices/examples/button/button.html

import { AriaProps, base, Color, ColorContrast, ColorProps, element, ModelProps, ResponsiveProps, Size, SpacingProps, StandardProps, text, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { Icon, Outline, Solid } from "@zenbu-ui/icon"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useContext } from "./button-group"
import * as React from "react"

export interface ButtonGroupItemProps extends StandardProps, AriaProps, ResponsiveProps, ColorProps, ModelProps, VisualProps, VisualTextProps, SpacingProps {
  disabled?: boolean,
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

export const ButtonGroupItem: React.FC<ButtonGroupItemProps> = (props) => {
  const { dark } = React.useContext(ThemeCtx)
  const buttonGroup = useContext

  const cls = base({
    model: {
      display: "inline-block",
      width: props.width
    },
    visual: {
      dark: dark,
      bgColor: buttonGroup.color,
      bgColorContrast: buttonGroup.colorContrast,
      bgHoverColor: buttonGroup.colorHover !== undefined ? buttonGroup.colorHover : buttonGroup.color,
      bgHoverColorContrast: (Number(buttonGroup.colorContrast) < 800 && Number(buttonGroup.colorContrast) > 50 && buttonGroup.colorHoverContrast === undefined) ? Number(buttonGroup.colorContrast) + 100 : buttonGroup.colorHoverContrast,
      darkBgColor: buttonGroup.darkColor,
      darkBgColorContrast: buttonGroup.darkColorContrast,
      darkBgHoverColor: buttonGroup.darkColorHover !== undefined ? buttonGroup.darkColorHover : buttonGroup.darkColor,
      darkBgHoverColorContrast: (Number(buttonGroup.darkColorContrast) < 800 && Number(buttonGroup.darkColorContrast) > 50 && buttonGroup.darkColorHoverContrast === undefined) ? Number(buttonGroup.darkColorContrast) + 100 : buttonGroup.darkColorHoverContrast,
      bgGradientFromColor: buttonGroup.bgGradientFromColor,
      bgGradientFromColorContrast: buttonGroup.bgGradientFromColorContrast,
      bgGradientMiddleColor: buttonGroup.bgGradientMiddleColor,
      bgGradientMiddleColorContrast: buttonGroup.bgGradientMiddleColorContrast,
      bgGradientEndColor: buttonGroup.bgGradientEndColor,
      bgGradientEndColorContrast: buttonGroup.bgGradientEndColorContrast
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
      px: buttonGroup.px,
      py: buttonGroup.py,
      pb: buttonGroup.pb,
      pl: buttonGroup.pl,
      pr: buttonGroup.pr,
      pt: buttonGroup.pt
    }
  })

  const clsElm = element({
    focus: {
      dark: dark,
      focusOutline: "none",
      focusColor: buttonGroup.colorHover !== undefined ? buttonGroup.colorHover : buttonGroup.color,
      focusColorContrast: (Number(buttonGroup.colorContrast) < 800 && Number(buttonGroup.colorContrast) > 50 && buttonGroup.colorHoverContrast === undefined) ? Number(buttonGroup.colorContrast) + 100 : buttonGroup.colorHoverContrast,
    }
  })

  const clsText = text({
    visualText: {
      dark: dark,
      textColor: buttonGroup.textColor,
      textColorContrast: buttonGroup.textColorContrast,
      darkTextColor: buttonGroup.darkTextColor,
      darkTextColorContrast: buttonGroup.darkTextColorContrast,
      fontSize: buttonGroup.fontSize,
      fontWeight: buttonGroup.fontWeight
    }
  })

  if (props.href !== undefined) {
    return(
      <a
      id={props.id}
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
        {props.icon !== undefined ? (
          <span className="flex items-center justify-center" style={{
            marginLeft: "calc(-0.5em - 1px)",
            marginRight: "calc(-.5em - 1px)"
          }}>
            <Icon icon={props.icon} height={props.iconHeight === undefined ? "5" : props.iconHeight}
            color={props.iconColor} colorContrast={props.iconColorContrast}
            darkColor={props.darkIconColor} darkColorContrast={props.darkIconColorContrast} />
          </span>
        ) : (props.children)}
      </a>
    )
  }

  return(
    <button
    id={props.id}
    type="button"
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
      {props.icon !== undefined ? (
        <span className="flex items-center justify-center" style={{
          marginLeft: "calc(-0.5em - 1px)",
          marginRight: "calc(-.5em - 1px)"
        }}>
          <Icon icon={props.icon} height={props.iconHeight === undefined ? "5" : props.iconHeight}
          color={props.iconColor} colorContrast={props.iconColorContrast}
          darkColor={props.darkIconColor} darkColorContrast={props.darkIconColorContrast} />
        </span>
      ) : (props.children)}
    </button>
  )
}

ButtonGroupItem.defaultProps = {
  width: "max",
  disabled: false,
  target: "_self"
}
