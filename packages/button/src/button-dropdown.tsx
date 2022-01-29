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
  const { dark, theme } = React.useContext(ThemeCtx)
  const node = React.useRef<HTMLButtonElement>(null)
  const nodeWrapper = React.useRef<HTMLDivElement>(null)
  const nodeDropdown = React.useRef<HTMLDivElement>(null)
  const id = useId("menubutton")
  const idMenu = useId("menu-dropdown")

  const tb = theme?.buttonDropdown?.[`${props.componentName}`]

  const [expand, setExpand] = React.useState(false)
  const [expandWithEnter, setExpandWithEnter] = React.useState(false)

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

  const [ButtonDropdownProvider, ButtonDropdownContext] = createContext<ButtonDropdownProps>(PROVIDER_NAME, {
    dropdownBgColor: tb?.dropdownBgColor !== undefined ? tb.dropdownBgColor : props.dropdownBgColor,
    dropdownBgColorContrast: tb?.dropdownBgColorContrast !== undefined ? tb.dropdownBgColorContrast : props.dropdownBgColorContrast,
    darkDropdownBgColor: tb?.darkDropdownBgColor !== undefined ? tb.darkDropdownBgColor : props.darkDropdownBgColor,
    darkDropdownBgColorContrast: tb?.darkDropdownBgColorContrast !== undefined ? tb.darkDropdownBgColorContrast : props.darkDropdownBgColorContrast,
    dropdownBgHoverColor: tb?.dropdownBgHoverColor !== undefined ? tb.dropdownBgHoverColor : props.dropdownBgHoverColor,
    dropdownBgHoverColorContrast: tb?.dropdownBgHoverColorContrast !== undefined ? tb.dropdownBgHoverColorContrast : props.dropdownBgHoverColorContrast,
    darkDropdownBgHoverColor: tb?.darkDropdownBgHoverColor !== undefined ? tb.darkDropdownBgHoverColor : props.darkDropdownBgHoverColor,
    darkDropdownBgHoverColorContrast: tb?.darkDropdownBgHoverColorContrast !== undefined ? tb.darkDropdownBgHoverColorContrast : props.darkDropdownBgHoverColorContrast,
    dropdownTextColor: tb?.dropdownTextColor !== undefined ? tb.dropdownTextColor : props.dropdownTextColor,
    dropdownTextColorContrast: tb?.dropdownTextColorContrast !== undefined ? tb.dropdownTextColorContrast : props.dropdownTextColorContrast,
    darkDropdownTextColor: tb?.darkDropdownTextColor !== undefined ? tb.darkDropdownTextColor : props.darkDropdownTextColor,
    darkDropdownTextColorContrast: tb?.darkDropdownTextColorContrast !== undefined ? tb.darkDropdownTextColorContrast : props.darkDropdownTextColorContrast,
    dropdownTextHoverColor: tb?.dropdownTextHoverColor !== undefined ? tb.dropdownTextHoverColor : props.dropdownTextHoverColor,
    dropdownTextHoverColorContrast: tb?.dropdownTextHoverColorContrast !== undefined ? tb.dropdownTextHoverColorContrast : props.dropdownTextHoverColorContrast,
    darkDropdownTextHoverColor: tb?.darkDropdownTextHoverColor !== undefined ? tb.darkDropdownTextHoverColor : props.darkDropdownTextHoverColor,
    darkDropdownTextHoverColorContrast: tb?.darkDropdownTextHoverColorContrast !== undefined ? tb.darkDropdownTextHoverColorContrast : props.darkDropdownTextHoverColorContrast,
    dropdownBorder: tb?.dropdownBorder !== undefined ? tb.dropdownBorder : props.dropdownBorder,
    dropdownBorderColor: tb?.dropdownBorderColor !== undefined ? tb.dropdownBorderColor : props.dropdownBorderColor,
    dropdownBorderColorContrast: tb?.dropdownBorderColorContrast !== undefined ? tb.dropdownBorderColorContrast : props.dropdownBorderColorContrast,
    dropdownRounded: tb?.dropdownRounded !== undefined ? tb.dropdownRounded : props.dropdownRounded,
    dropdownFontSize: tb?.dropdownFontSize !== undefined ? tb.dropdownFontSize : props.dropdownFontSize,
    dropdownIconHeight: tb?.dropdownIconHeight !== undefined ? tb.dropdownIconHeight : props.dropdownIconHeight,
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
      width: (tb?.fluid || (props.fluid && tb?.fluid === undefined)) ? "full" : tb?.width !== undefined ? tb.width : props.width,
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
      bgColor: tb?.dropdownBgColor !== undefined ? tb.dropdownBgColor : props.dropdownBgColor,
      bgColorContrast: tb?.dropdownBgColorContrast !== undefined ? tb.dropdownBgColorContrast : props.dropdownBgColorContrast,
      darkBgColor: tb?.darkDropdownBgColor !== undefined ? tb.darkDropdownBgColor : props.darkDropdownBgColor,
      darkBgColorContrast: tb?.darkDropdownBgColorContrast !== undefined ? tb.darkDropdownBgColorContrast : props.darkBgColorContrast,
      borderWidth: tb?.dropdownBorder ? "normal" : (props.dropdownBorder && tb?.dropdownBorder === undefined) ? "normal" : undefined,
      borderStyle: tb?.dropdownBorder ? "solid" : (props.dropdownBorder && tb?.dropdownBorder === undefined) ? "solid" : undefined,
      borderColor: (tb?.dropdownBorder && tb.dropdownBorderColor !== undefined) ? tb.dropdownBorderColor : (props.dropdownBorder && tb?.dropdownBorder === undefined) ? props.dropdownBorderColor : undefined,
      borderColorContrast: (tb?.dropdownBorder && tb.dropdownBorderColorContrast !== undefined) ? tb.dropdownBorderColorContrast : (props.dropdownBorder && tb?.dropdownBorder === undefined) ? props.dropdownBorderColorContrast : undefined,
      borderRadius: tb?.dropdownRounded !== undefined ? tb.dropdownRounded : props.dropdownRounded,
      shadow: tb?.dropdownShadow !== undefined ? tb.dropdownShadow : props.dropdownShadow,
      shadowColor: (tb?.dropdownShadow !== undefined && tb.dropdownShadowColor !== undefined) ? tb.dropdownShadowColor : props.dropdownShadow !== undefined ? props.dropdownShadowColor : undefined,
      shadowColorContrast: (tb?.dropdownShadow !== undefined && tb.dropdownShadowColorContrast !== undefined) ? tb.dropdownShadowColorContrast : props.dropdownShadow !== undefined ? props.dropdownShadowColorContrast : undefined,
      shadowOpacity: (tb?.dropdownShadow !== undefined && tb.dropdownShadowOpacity !== undefined) ? tb.dropdownShadowOpacity : props.dropdownShadow !== undefined ? props.dropdownShadowOpacity : undefined
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
      fillColor: tb?.dropdownBgColor !== undefined ? tb.dropdownBgColor : props.dropdownBgColor,
      fillColorContrast: tb?.dropdownBgColorContrast !== undefined ? tb.dropdownBgColorContrast : props.dropdownBgColorContrast,
      darkFillColor: tb?.darkDropdownBgColor !== undefined ? tb.darkDropdownBgColor : props.darkDropdownBgColor,
      darkFillColorContrast: tb?.darkDropdownBgColorContrast !== undefined ? tb.darkDropdownBgColorContrast : props.darkBgColorContrast,
      strokeColor: tb?.border && tb?.borderColor !== undefined ? tb.borderColor : props.border ? props.borderColor : undefined,
      strokeColorContrast: tb?.border && tb?.borderColorContrast !== undefined ? tb.borderColorContrast : props.border ? props.borderColorContrast : undefined,
    }
  })

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
                    (tb?.border || (props.border && tb?.border === undefined)) ? "stroke-2" : ""
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
          <span className="flex justify-center space-x-4">
            {props.icon !== undefined && (
              <span className="flex items-center justify-center" style={{
                marginLeft: "calc(-0.5em - 1px)",
                marginRight: "calc(-.5em - 1px)"
              }}>
                <Icon icon={props.icon}
                height={tb?.iconHeight !== undefined ? tb.iconHeight : props.iconHeight === undefined ? "5" : props.iconHeight}
                color={tb?.iconColor !== undefined ? tb.iconColor : props.iconColor}
                colorContrast={tb?.iconColorContrast !== undefined ? tb.iconColorContrast : props.iconColorContrast}
                darkColor={tb?.darkIconColor !== undefined ? tb.darkIconColor : props.darkIconColor}
                darkColorContrast={tb?.darkIconColorContrast !== undefined ? tb.darkIconColorContrast : props.darkIconColorContrast} />
              </span>
            )}

            <span className="flex items-center justify-center">
              {React.Children.map(props.children, (elm: React.ReactNode) => {
                const e = elm as React.ReactElement<any>
                if (e.type !== ButtonDropdownItem) {
                  return(
                    <span>{elm}</span>
                  )
                }
              })}
              <Icon icon="chevron-down-solid"
              height={tb?.iconHeight !== undefined ? tb.iconHeight : props.iconHeight === undefined ? "5" : props.iconHeight}
              color={tb?.iconColor !== undefined ? tb.iconColor : props.iconColor}
              colorContrast={tb?.iconColorContrast !== undefined ? tb.iconColorContrast : props.iconColorContrast}
              darkColor={tb?.darkIconColor !== undefined ? tb.darkIconColor : props.darkIconColor}
              darkColorContrast={tb?.darkIconColorContrast !== undefined ? tb.darkIconColorContrast : props.darkIconColorContrast} ml="2" />
            </span>
          </span>
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
