// Following the button guideline WAI-ARIA 1.2
// https://www.w3.org/TR/wai-aria-practices-1.2/examples/menu-button/menu-button-links.html

import { AriaProps, base, BorderRadius, BoxShadow, Color, ColorContrast, ColorProps, element, FontSize, ModelProps, ResponsiveProps, Size, SpacingProps, StandardProps, text, useEscKeyboardEvent, useOnClickOutside, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { Icon, Outline, Solid } from "@zenbu-ui/icon"
import { ThemeCtx } from "@zenbu-ui/provider"
import { createContext, useId } from "@zenbu-ui/react-id"
import { motion, AnimatePresence } from "framer-motion"
import * as React from "react"
import { ButtonDropdownItem, ButtonDropdownItemProps } from "./button-dropdown-item"

export interface ButtonDropdownProps extends StandardProps, AriaProps, ResponsiveProps, ColorProps, ModelProps, VisualProps, VisualTextProps, SpacingProps {
  disabled?: boolean,
  fluid?: boolean,
  circle?: boolean,
  icon?: Outline | Solid,
  iconHeight?: Size,
  iconColor?: Color,
  iconColorContrast?: ColorContrast,
  darkIconColor?: Color,
  darkIconColorContrast?: ColorContrast,
  dropdownBgColor?: Color,
  dropdownBgColorContrast?: ColorContrast,
  darkDropdownBgColor?: Color,
  darkDropdownBgColorContrast?: ColorContrast,
  dropdownBgHoverColor?: Color,
  dropdownBgHoverColorContrast?: ColorContrast,
  darkDropdownBgHoverColor?: Color,
  darkDropdownBgHoverColorContrast?: ColorContrast,
  dropdownTextColor?: Color,
  dropdownTextColorContrast?: ColorContrast,
  darkDropdownTextColor?: Color,
  darkDropdownTextColorContrast?: ColorContrast,
  dropdownTextHoverColor?: Color,
  dropdownTextHoverColorContrast?: ColorContrast,
  darkDropdownTextHoverColor?: Color,
  darkDropdownTextHoverColorContrast?: ColorContrast,
  dropdownFontSize?: FontSize,
  dropdownBorder?: boolean,
  dropdownBorderColor?: Color,
  dropdownBorderColorContrast?: ColorContrast,
  dropdownRounded?: BorderRadius,
  dropdownIconHeight?: Size,
  dropdownShadow?: BoxShadow,
  dropdownShadowColor?: Color,
  dropdownShadowColorContrast?: ColorContrast,
  dropdownShadowOpacity?: number,
}

const PROVIDER_NAME = "ButtonDropdown"

export let useDropdownContext: ButtonDropdownProps
export const ButtonDropdown: React.FC<ButtonDropdownProps> & {
  Item: React.FC<ButtonDropdownItemProps>
} = (props) => {
  const { dark } = React.useContext(ThemeCtx)
  const node = React.useRef<HTMLButtonElement>(null)
  const nodeWrapper = React.useRef<HTMLDivElement>(null)
  const nodeDropdown = React.useRef<HTMLDivElement>(null)
  const id = useId("menubutton")
  const idMenu = useId("menu-dropdown")

  const [expand, setExpand] = React.useState(false)
  const [expandWithEnter, setExpandWithEnter] = React.useState(false)
  const [ButtonDropdownProvider, ButtonDropdownContext] = createContext<ButtonDropdownProps>(PROVIDER_NAME, {
    dropdownBgColor: props.dropdownBgColor,
    dropdownBgColorContrast: props.dropdownBgColorContrast,
    darkDropdownBgColor: props.darkDropdownBgColor,
    darkDropdownBgColorContrast: props.darkDropdownBgColorContrast,
    dropdownBgHoverColor: props.dropdownBgHoverColor,
    dropdownBgHoverColorContrast: props.dropdownBgHoverColorContrast,
    darkDropdownBgHoverColor: props.darkDropdownBgHoverColor,
    darkDropdownBgHoverColorContrast: props.darkDropdownBgHoverColorContrast,
    dropdownTextColor: props.dropdownTextColor,
    dropdownTextColorContrast: props.dropdownTextColorContrast,
    darkDropdownTextColor: props.darkDropdownTextColor,
    darkDropdownTextColorContrast: props.darkDropdownTextColorContrast,
    dropdownTextHoverColor: props.dropdownTextHoverColor,
    dropdownTextHoverColorContrast: props.dropdownTextHoverColorContrast,
    darkDropdownTextHoverColor: props.darkDropdownTextHoverColor,
    darkDropdownTextHoverColorContrast: props.darkDropdownTextHoverColorContrast,
    dropdownBorder: props.dropdownBorder,
    dropdownBorderColor: props.dropdownBorderColor,
    dropdownBorderColorContrast: props.dropdownBorderColorContrast,
    dropdownRounded: props.dropdownRounded,
    dropdownFontSize: props.dropdownFontSize,
    dropdownIconHeight: props.dropdownIconHeight,
  })
  useDropdownContext = ButtonDropdownContext(PROVIDER_NAME)

  const clsWrapper = base({
    model: {
      width: "max"
    },
    positioning: {
      position: "relative"
    },
    flexbox: {
      flex: true,
      alignItems: "center",
      justify: "center"
    },
    misc: {
      userSelect: "none"
    }
  })

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
    spacing:  {
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

  const clsDropdownWrapper = base({
    model: {
      display: "block",
      width: "max"
    },
    positioning: {
      position: "absolute",
      top: "full",
      zIndex: "40"
    },
    misc: {
      cursor: "pointer",
      userSelect: "none"
    },
    spacing: {
      mt: "2"
    }
  })

  const clsDropdown = base({
    model: {
      overflow: "hidden"
    },
    visual: {
      dark: dark,
      bgColor: props.dropdownBgColor,
      bgColorContrast: props.dropdownBgColorContrast,
      darkBgColor: props.darkDropdownBgColor,
      darkBgColorContrast: props.darkBgColorContrast,
      borderWidth: props.dropdownBorder ? "normal" : undefined,
      borderStyle: props.dropdownBorder ? "solid" : undefined,
      borderColor: props.dropdownBorder ? props.dropdownBorderColor : undefined,
      borderColorContrast: props.dropdownBorder ? props.dropdownBorderColorContrast : undefined,
      borderRadius: props.dropdownRounded,
      shadow: props.dropdownShadow,
      shadowColor: props.dropdownShadow !== undefined ? props.dropdownShadowColor : undefined,
      shadowColorContrast: props.dropdownShadow !== undefined ? props.dropdownShadowColorContrast : undefined,
      shadowOpacity: props.dropdownShadow !== undefined ? props.dropdownShadowOpacity : undefined
    },
    misc: {
      cursor: "pointer",
      userSelect: "none"
    },
    spacing: {
      px: "0.5",
      py: "0.5"
    }
  })

  const clsArrow = base({
    model: {
      display: "block"
    },
    visual: {
      dark: dark,
      fillColor: props.dropdownBgColor,
      fillColorContrast: props.dropdownBgColorContrast,
      darkFillColor: props.darkDropdownBgColor,
      darkFillColorContrast: props.darkBgColorContrast,
      strokeColor: props.border ? props.borderColor : undefined,
      strokeColorContrast: props.border ? props.borderColorContrast : undefined,
    }
  })

  useOnClickOutside(nodeWrapper, () => {
    if (expand) {
      setExpand(false)
      setExpandWithEnter(false)
    }
  })

  useEscKeyboardEvent(node, () => {
    if (expand) {
      setExpand(false)
      setExpandWithEnter(false)
    }
  })

  React.useEffect(() => {
    if (expandWithEnter) {
      document.getElementById(`${idMenu}-1`)?.focus()
    }
  }, [expandWithEnter, idMenu])

  const DropdownMenu = () => {
    return(
      <AnimatePresence initial={false}>
        <motion.div
        key={idMenu}
        ref={nodeDropdown}
        className={clsDropdownWrapper}
        style={{
          left: "50% !important",
          transform: "translate(-50%, 155px) !important"
        }}
        initial={{opacity: 0}}
        animate={{scale: 1, opacity: 1, transition: {
          duration: 0.5,
          ease: [0, 0.2, 0.4, 1]
        }}}
        exit={{opacity: 0, scale: 0.95, transition: {
          duration: 0.1,
          ease: [0.4, 0, 1, 1]
        }}}
        >
          <div
          id={idMenu}
          className={clsDropdown}
          role="menu"
          aria-labelledby={id}
          aria-orientation="vertical"
          >
            <>
              <span
              className="absolute bottom-full transform rotate-180 pointer-events-none"
              style={{ left: "calc(50% - 5px)"}}>
                <span className="inline-block align-top pointer-events-none">
                  <svg
                  className={[
                    clsArrow,
                    props.border ? "stroke-2" : ""
                  ].join(" ").trim()}
                  width="10"
                  height="5"
                  viewBox="0 0 30 10"
                  preserveAspectRatio="none">
                    <polygon points="0,0 30,0 15,10"></polygon>
                  </svg>
                </span>
              </span>
              {React.Children.map(props.children, (elm, idx) => {
                const e = elm as React.ReactElement<any>
                if (e.type === ButtonDropdownItem) {
                  return(
                    <ButtonDropdownItem id={`${idMenu}-${idx}`} key={`dropdown-menu-${idx}`} {...e.props} />
                  )
                }
              })}
            </>
          </div>
        </motion.div>
      </AnimatePresence>
    )
  }

  return(
    <ButtonDropdownProvider>
      <div
      ref={nodeWrapper}
      className={clsWrapper}>
        <button
        id={id}
        ref={node}
        type="button"
        disabled={props.disabled}
        aria-label={props.ariaLabel}
        aria-labelledby={props.ariaLabelledBy}
        aria-haspopup="menu"
        aria-controls={idMenu}
        aria-expanded={expand ? "true" : "false"}
        aria-disabled={props.disabled ? "true" : undefined}
        className={[
          cls,
          clsElm,
          clsText,
          props.disabled ? "pointer-events-none" : ""].join(" ").trim()}
        onClick={(e) => {
          setExpand(!expand)

          if (e.screenX === 0 && e.screenY === 0) {
            setExpandWithEnter(true)
          }
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
          ) : (
            <span className="flex items-center justify-center">
              {React.Children.map(props.children, (elm: React.ReactNode) => {
                const e = elm as React.ReactElement<any>
                if (e.type !== ButtonDropdownItem) {
                  return(
                    <span>{elm}</span>
                  )
                }
              })}
              <Icon icon="chevron-down-solid" height={props.iconHeight === undefined ? "5" : props.iconHeight}
              color={props.iconColor} colorContrast={props.iconColorContrast}
              darkColor={props.darkIconColor} darkColorContrast={props.darkIconColorContrast} ml="2" />
            </span>
          )}
        </button>

        {expand && (<DropdownMenu />)}
      </div>
    </ButtonDropdownProvider>
  )
}

ButtonDropdown.Item = ButtonDropdownItem

ButtonDropdown.defaultProps = {
  width: "max",
  fluid: false,
  disabled: false,
  circle: false,
  color: "blue",
  colorContrast: "500",
  dropdownBgColor: "white",
  dropdownBgHoverColor: "blue",
  dropdownBgHoverColorContrast: "500",
  textColor: "white",
  dropdownTextColor: "black",
  dropdownTextHoverColor: "white",
  border: false,
  borderWidth: "normal",
  borderStyle: "solid",
  shadowColor: "gray",
  shadowColorContrast: "400",
  shadowOpacity: 50,
  dropdownShadowColor: "gray",
  dropdownShadowColorContrast: "400",
  dropdownShadowOpacity: 50,
  dropdownBorder: true,
  dropdownBorderColor: "gray",
  dropdownBorderColorContrast: "200",
  fontSize: "sm",
  dropdownFontSize: "sm",
  fontWeight: "normal",
  rounded: "md",
  dropdownRounded: "md",
  px: "4",
  py: "2"
}
