// Following the menubar guideline WAI-ARIA 1.2
// https://www.w3.org/TR/wai-aria-practices/examples/menubar/menubar-1/menubar-1.html

import { AriaProps, base, BorderRadius, BorderStyle, BorderWidth, Color, ColorContrast, ColorProps, FontWeight, ModelProps, PositionScale, SpacingProps, StandardProps, useEscKeyboardEvent, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { Icon } from "@zenbu-ui/icon"
import { ThemeCtx } from "@zenbu-ui/provider"
import { createContext } from "@zenbu-ui/context"
import { useId } from "@reach/auto-id"
import { motion, AnimatePresence } from "framer-motion"
import * as React from "react"
import { MenuContent, MenuContentProps } from "./menu-content"
import { MenuDropdown, MenuDropdownProps } from "./menu-dropdown"
import { MenuItem, MenuItemProps } from "./menu-item"
import { MenuItems, MenuItemsProps } from "./menu-items"

const PROVIDER_NAME = "Navbar"

interface MenuProps extends AriaProps, StandardProps, ModelProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {
  iconOnly?: boolean,
  fixed?: boolean,
  fixedPosition?: "top" | "bottom",
  responsive?: boolean,
  dropdownMode?: "click" | "hover"
  logo?: React.ReactNode,
  logoPosition?: "left" | "right",
  itemPosition?: "left" | "right" | "center",
  itemRounded?: BorderRadius,
  itemActiveFontWeight?: FontWeight,
  itemBorder?: boolean,
  itemBorderHoverWidth?: BorderWidth,
  itemBorderHoverStyle?: BorderStyle,
  itemBorderHoverColor?: Color,
  itemBorderHoverColorContrast?: ColorContrast,
  itemTextColor?: Color,
  itemTextColorContrast?: ColorContrast,
  itemTextColorHover?: Color,
  itemTextColorHoverContrast?: ColorContrast,
  darkItemTextColor?: Color,
  darkItemTextColorContrast?: ColorContrast,
  darkItemTextColorHover?: Color,
  darkItemTextColorHoverContrast?: ColorContrast,
  itemBgColor?: Color,
  itemBgColorContrast?: ColorContrast,
  itemBgColorHover?: Color,
  itemBgColorHoverContrast?: ColorContrast
  darkItemBgColor?: Color,
  darkItemBgColorContrast?: ColorContrast,
  darkItemBgColorHover?: Color,
  darkItemBgColorHoverContrast?: ColorContrast,
  itemPX?: PositionScale,
  itemPY?: PositionScale,
  itemPB?: PositionScale,
  itemPL?: PositionScale,
  itemPR?: PositionScale,
  itemPT?: PositionScale
}

export let useContext: MenuProps
export const Menu: React.FC<MenuProps> & {
  Content: React.FC<MenuContentProps>
  Dropdown: React.FC<MenuDropdownProps>
  Item: React.FC<MenuItemProps>
  Items: React.FC<MenuItemsProps>
} = (props) => {
  const { dark, theme } = React.useContext(ThemeCtx)
  const nodeResponsive = React.useRef<HTMLDivElement>(null)
  const id = useId()
  const idResponsive = useId()

  const tm = theme?.menu?.[`${props.componentName}`]

  const [expand, setExpand] = React.useState(false)
  const [expandWithEnter, setExpandWithEnter] = React.useState(false)

  useEscKeyboardEvent(nodeResponsive, () => {
    if (expand) {
      setExpand(false)
      setExpandWithEnter(false)
    }
  })

  React.useEffect(() => {
    if (expandWithEnter) {
      document.getElementById(`zenbu-menu-responsive-${idResponsive}-1`)?.focus()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expandWithEnter])

  const [MenuProvider, MenuContext] = createContext<MenuProps>(PROVIDER_NAME, {
    id: `zenbu-menu-${id}`,
    dark: dark,
    iconOnly: tm?.iconOnly !== undefined ? tm.iconOnly : props.iconOnly,
    dropdownMode: tm?.dropdownMode !== undefined ? tm.dropdownMode : props.dropdownMode,
    fontSize: tm?.fontSize !== undefined ? tm.fontSize : props.fontSize,
    fontWeight: tm?.fontWeight !== undefined ? tm.fontWeight : props.fontWeight,
    itemPosition: tm?.itemPosition !== undefined ? tm.itemPosition : props.itemPosition,
    itemRounded: tm?.itemRounded !== undefined ? tm.itemRounded : props.itemRounded,
    itemActiveFontWeight: tm?.itemActiveFontWeight !== undefined ? tm.itemActiveFontWeight : props.itemActiveFontWeight,
    itemBorder: tm?.itemBorder !== undefined ? tm.itemBorder : props.itemBorder,
    itemBorderHoverWidth: tm?.itemBorderHoverWidth !== undefined ? tm.itemBorderHoverWidth : props.itemBorderHoverWidth,
    itemBorderHoverStyle: tm?.itemBorderHoverStyle !== undefined ? tm.itemBorderHoverStyle : props.itemBorderHoverStyle,
    itemBorderHoverColor: tm?.itemBorderHoverColor !== undefined ? tm.itemBorderHoverColor : props.itemBorderHoverColor,
    itemBorderHoverColorContrast: tm?.itemBorderHoverColorContrast !== undefined ? tm.itemBorderHoverColorContrast : props.itemBorderHoverColorContrast,
    itemTextColor: tm?.itemTextColor !== undefined ? tm.itemTextColor : props.itemTextColor,
    itemTextColorContrast: tm?.itemTextColorContrast !== undefined ? tm.itemTextColorContrast : props.itemTextColorContrast,
    itemTextColorHover: tm?.itemTextColorHover !== undefined ? tm.itemTextColorHover : props.itemTextColorHover,
    itemTextColorHoverContrast: tm?.itemTextColorHoverContrast !== undefined ? tm.itemTextColorHoverContrast : props.itemTextColorHoverContrast,
    darkItemTextColor: tm?.itemTextColor !== undefined ? tm.itemTextColor : props.itemTextColor,
    darkItemTextColorContrast: tm?.itemTextColorContrast !== undefined ? tm.itemTextColorContrast : props.itemTextColorContrast,
    darkItemTextColorHover: tm?.itemTextColorHover !== undefined ? tm.itemTextColorHover : props.itemTextColorHover,
    darkItemTextColorHoverContrast: tm?.itemTextColorHoverContrast !== undefined ? tm.itemTextColorHoverContrast : props.itemTextColorHoverContrast,
    itemBgColor: tm?.itemBgColor !== undefined ? tm.itemBgColor : props.itemBgColor,
    itemBgColorContrast: tm?.itemBgColorContrast !== undefined ? tm.itemBgColorContrast : props.itemBgColorContrast,
    itemBgColorHover: tm?.itemBgColorHover !== undefined ? tm.itemBgColorHover : props.itemBgColorHover,
    itemBgColorHoverContrast: tm?.itemBgColorHoverContrast !== undefined ? tm.itemBgColorHoverContrast : props.itemBgColorHoverContrast,
    darkItemBgColor: tm?.darkItemBgColor !== undefined ? tm.darkItemBgColor : props.darkItemBgColor,
    darkItemBgColorContrast: tm?.darkItemBgColorContrast !== undefined ? tm.darkItemBgColorContrast : props.darkItemBgColorContrast,
    darkItemBgColorHover: tm?.darkItemBgColorHover !== undefined ? tm.darkItemBgColorHover : props.darkItemBgColorHover,
    darkItemBgColorHoverContrast: tm?.darkItemBgColorHoverContrast !== undefined ? tm.darkItemBgColorHoverContrast : props.darkItemBgColorHoverContrast,
    itemPX: tm?.itemPX !== undefined ? tm.itemPX : props.itemPX,
    itemPY: tm?.itemPY !== undefined ? tm.itemPY : props.itemPY,
    itemPB: tm?.itemPB !== undefined ? tm.itemPB : props.itemPB,
    itemPL: tm?.itemPL !== undefined ? tm.itemPL : props.itemPL,
    itemPR: tm?.itemPR !== undefined ? tm.itemPR : props.itemPR,
    itemPT: tm?.itemPT !== undefined ? tm.itemPT : props.itemPT
  })
  useContext = MenuContext(PROVIDER_NAME)

  const cls = base({
    positioning: {
      position: (tm?.fixed || (props.fixed && tm?.fixed === undefined)) ? "fixed" : "relative",
      top: ((tm?.fixed && tm.fixedPosition === "top") || (props.fixed && props.fixedPosition === "top" && tm?.fixed === undefined && tm?.fixedPosition === undefined)) ? "0" : undefined,
      bottom: ((tm?.fixed && tm.fixedPosition === "bottom") || (props.fixed && props.fixedPosition === "bottom" && tm?.fixed === undefined && tm?.fixedPosition === undefined)) ? "0" : undefined,
      left: (tm?.fixed || (props.fixed && tm?.fixed === undefined)) ? "0" : undefined,
      right: (tm?.fixed || (props.fixed && tm?.fixed === undefined)) ? "0" : undefined,
      zIndex: (tm?.fixed || (props.fixed && tm?.fixed === undefined)) ? "50" : undefined
    },
    visual: {
      dark: dark,
      bgColor: tm?.color !== undefined ? tm.color : props.color,
      bgColorContrast: tm?.colorContrast !== undefined ? tm.colorContrast : props.colorContrast,
      darkBgColor: tm?.darkColor !== undefined ? tm.darkColor : props.darkColor,
      darkBgColorContrast: tm?.darkColorContrast !== undefined ? tm.darkColorContrast : props.darkColorContrast,
      borderWidth: (tm?.border && tm.borderWidth !== undefined) ? tm.borderWidth : (props.border && tm?.border === undefined) ? props.borderWidth : undefined,
      borderStyle: (tm?.border && tm.borderStyle !== undefined) ? tm.borderStyle : (props.border && tm?.border === undefined) ? props.borderStyle : undefined,
      borderColor: (tm?.border && tm.borderColor !== undefined) ? tm.borderColor : (props.border && tm?.border === undefined) ? props.borderColor : undefined,
      borderColorContrast: (tm?.border && tm.borderColorContrast !== undefined) ? tm.borderColorContrast : (props.border && tm?.border === undefined) ? props.borderColorContrast : undefined,
      borderRadius: tm?.rounded !== undefined ? tm.rounded : props.rounded,
      shadow: tm?.shadow !== undefined ? tm.shadow : props.shadow,
      shadowColor: (tm?.shadow !== undefined && tm.shadowColor !== undefined) ? tm.shadowColor : props.shadow !== undefined ? props.shadowColor : undefined,
      shadowColorContrast: (tm?.shadow !== undefined && tm.shadowColorContrast !== undefined) ? tm.shadowColorContrast : props.shadow !== undefined ? props.shadowColorContrast : undefined,
      shadowOpacity: (tm?.shadow !== undefined && tm.shadowOpacity !== undefined) ? tm.shadowOpacity : props.shadow !== undefined ? props.shadowOpacity : undefined,
      darkShadowColor: (tm?.shadow !== undefined && tm.darkShadowColor !== undefined) ? tm.darkShadowColor : props.shadow !== undefined ? props.darkShadowColor : undefined,
      darkShadowColorContrast: (tm?.shadow !== undefined && tm.darkShadowColorContrast) ? tm.darkShadowColorContrast : props.shadow !== undefined ? props.darkShadowColorContrast : undefined,
      darkShadowOpacity: (tm?.shadow !== undefined && tm.darkShadowOpacity !== undefined) ? tm.darkShadowOpacity : props.shadow !== undefined ? props.darkShadowOpacity : undefined,
    },
    spacing: {
      mx: tm?.mx !== undefined ? tm.mx : props.mx,
      my: tm?.my !== undefined ? tm.my : props.my,
      mb: tm?.mb !== undefined ? tm.mb : props.mb,
      ml: tm?.ml !== undefined ? tm.ml : props.ml,
      mr: tm?.mr !== undefined ? tm.mr : props.mr,
      mt: tm?.mt !== undefined ? tm.mt : props.mt
    }
  })

  const clsWrapper = base({
    model: {
      width: tm?.width !== undefined ? tm.width : props.width
    },
    flexbox: {
      flex: true,
      alignItems: "center",
      justify: "between",
    },
    spacing: {
      px: tm?.px !== undefined ? tm.px : props.px,
      py: tm?.py !== undefined ? tm.py : props.py,
      pb: tm?.pb !== undefined ? tm.pb : props.pb,
      pl: tm?.pl !== undefined ? tm.pl : props.pl,
      pr: tm?.pr !== undefined ? tm.pr : props.pr,
      pt: tm?.pt !== undefined ? tm.pt : props.pt
    }
  })

  const clsMenu = base({
    flexbox: {
      flex: true,
      alignItems: "center",
    }
  })

  const clsDropdownWrapper = base({
    model: {
      display: "block",
      width: "full"
    },
    positioning: {
      position: "absolute",
      top: "full",
      zIndex: "40"
    },
    misc: {
      cursor: "pointer",
      userSelect: "none"
    }
  })

  const clsDropdown = base({
    model: {
      overflow: "hidden"
    },
    visual: {
      dark: dark,
      bgColor: tm?.color !== undefined ? tm.color : props.color,
      bgColorContrast: tm?.colorContrast !== undefined ? tm.colorContrast : props.colorContrast,
      darkBgColor: tm?.darkColor !== undefined ? tm.darkColor : props.darkColor,
      darkBgColorContrast: tm?.darkColorContrast !== undefined ? tm.darkColorContrast : props.darkColorContrast,
      borderWidth: (tm?.border || (props.border && tm?.border === undefined)) ? "normal" : undefined,
      borderStyle: (tm?.border || (props.border && tm?.border === undefined)) ? "solid" : undefined,
      borderColor: (tm?.border || (props.border && tm?.border === undefined)) ? tm?.borderColor !== undefined ? tm.borderColor : props.borderColor : undefined,
      borderColorContrast: (tm?.border || (props.border && tm?.border === undefined)) ? tm?.borderColorContrast !== undefined ? tm.borderColorContrast : props.borderColorContrast : undefined,
      borderRadius: tm?.rounded !== undefined ? tm.rounded : props.rounded,
      shadow: tm?.shadow !== undefined ? tm.shadow : props.shadow,
      shadowColor: (tm?.shadow !== undefined && tm.shadowColor !== undefined) ? tm.shadowColor : props.shadow !== undefined ? props.shadowColor : undefined,
      shadowColorContrast: (tm?.shadow !== undefined && tm.shadowColorContrast !== undefined) ? tm.shadowColorContrast : props.shadow !== undefined ? props.shadowColorContrast : undefined,
      shadowOpacity: (tm?.shadow !== undefined && tm.shadowOpacity !== undefined) ? tm.shadowOpacity : props.shadow !== undefined ? props.shadowOpacity : undefined,
      darkShadowColor: (tm?.shadow !== undefined && tm.darkShadowColor !== undefined) ? tm.darkShadowColor : props.shadow !== undefined ? props.darkShadowColor : undefined,
      darkShadowColorContrast: (tm?.shadow !== undefined && tm.darkShadowColorContrast) ? tm.darkShadowColorContrast : props.shadow !== undefined ? props.darkShadowColorContrast : undefined,
      darkShadowOpacity: (tm?.shadow !== undefined && tm.darkShadowOpacity !== undefined) ? tm.darkShadowOpacity : props.shadow !== undefined ? props.darkShadowOpacity : undefined,
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

  const DropdownMenu = () => {
    return(
      <AnimatePresence initial={false}>
        <motion.div
        key={`zenbu-menu-responsive-${idResponsive}`}
        ref={nodeResponsive}
        className={[
          clsDropdownWrapper,
          "lg:hidden"
        ].join(" ")}
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
          <ul
          id={`zenbu-menu-responsive-${idResponsive}`}
          className={clsDropdown}
          role="menu"
          aria-labelledby={`zenbu-menu-${id}`}
          aria-orientation="vertical"
          >
            {React.Children.map(props.children, (elm, idx) => {
              const e = elm as React.ReactElement<any>
              if (e.type === MenuItem) {
                return(
                  <MenuItem orientation="vertical" id={`zenbu-menu-responsive-item-${idResponsive}-${idx+1}`} key={`dropdown-menu-${idx+1}`} {...e.props} />
                )
              } else if (e.type === MenuDropdown) {
                return(
                  <MenuDropdown orientation="vertical" id={`zenbu-menu-responsive-item-${idResponsive}-${idx+1}`} key={`dropdown-menu-${idx+1}`} {...e.props} sidebar={true} />
                )
              }
            })}
          </ul>
        </motion.div>
      </AnimatePresence>
    )
  }

  return(
    <MenuProvider>
      <nav className={cls}>
        <div className={[clsWrapper, "space-x-3"].join(" ")} style={{flexWrap: "inherit"}}>
          {((props.logo !== undefined && tm?.logoPosition === "left") ||
            (props.logo !== undefined && props.logoPosition === "left" && tm?.logoPosition === undefined)) && (
            <div className="whitespace-nowrap no-underline ml-2">
              {props.logo}
            </div>
          )}

          {React.Children.map(props.children, (elm) => {
            const e = elm as React.ReactElement<any>
            if (e.type === MenuContent && e.props.position === "left") {
              return(
                <div className="w-max flex grow justify-end" style={{flexBasis: "auto"}}>
                  <MenuContent id={`zenbu-menu-${id}-0`} {...e.props} />
                </div>
              )
            }
          })}

          <div className={[
            (tm?.responsive || (props.responsive && tm?.responsive === undefined)) ? "hidden lg:flex lg:grow" : "flex grow",
            (props.itemPosition === "center" && tm?.itemPosition === undefined) ? "justify-center" : (props.itemPosition === "right" && tm?.itemPosition === undefined) ? "justify-end" : "",
            tm?.itemPosition === "center" ? "justify-center" : tm?.itemPosition === "right" ? "justify-end" : ""
          ].join(" ")} style={{flexBasis: "auto"}}>
            <ul className={clsMenu} role="menubar">
              {React.Children.map(props.children, (elm, idx) => {
                const e = elm as React.ReactElement<any>
                if (e.type === MenuItem) {
                  return(
                    <MenuItem id={`zenbu-menu-${id}-1-${idx+1}`} key={`${id}-${idx+1}`} {...e.props} />
                  )
                } else if (e.type === MenuDropdown) {
                  return(
                    <MenuDropdown id={`zenbu-menu-${id}-1-${idx+1}`} key={`${id}-${idx+1}`} {...e.props} />
                  )
                }
              })}
            </ul>
          </div>

          {React.Children.map(props.children, (elm) => {
            const e = elm as React.ReactElement<any>
            if (e.type === MenuContent && e.props.position === "right") {
              return(
                <div className="w-max flex grow justify-end" style={{flexBasis: "auto"}}>
                  <MenuContent id={`zenbu-menu-${id}-0`} {...e.props} />
                </div>
              )
            }
          })}

          {props.responsive && (
            <div className={[
              "ml-2 -my-1 lg:hidden flex content-end",
              base({
                spacing: {
                  px: tm?.itemPX !== undefined ? tm.itemPX : props.itemPX,
                  py: tm?.itemPY !== undefined ? tm.itemPY : props.itemPY,
                  pb: tm?.itemPB !== undefined ? tm.itemPB : props.itemPB,
                  pl: tm?.itemPL !== undefined ? tm.itemPL : props.itemPL,
                  pr: tm?.itemPR !== undefined ? tm.itemPR : props.itemPR,
                  pt: tm?.itemPT !== undefined ? tm.itemPT : props.itemPT
                }
              })
            ].join(" ")}>
              <span className="sr-only">Navigation</span>
              <button className="flex items-center justify-end" style={{flex: "1 1 0%"}}
              onClick={(e) => {
                setExpand(!expand)
                setExpandWithEnter(false)
                if (e.screenX === 0 && e.screenY === 0) {
                  setExpandWithEnter(!expand)
                }
              }}>
                {expand ? (
                  <Icon icon="x" height="6"
                  color={tm?.itemTextColor !== undefined ? tm.itemTextColor : props.itemTextColor}
                  colorContrast={tm?.itemTextColorContrast !== undefined ? tm.itemTextColorContrast : props.itemTextColorContrast} />
                ) : (
                  <Icon icon="menu" height="6"
                  color={tm?.itemTextColor !== undefined ? tm.itemTextColor : props.itemTextColor}
                  colorContrast={tm?.itemTextColorContrast !== undefined ? tm.itemTextColorContrast : props.itemTextColorContrast} />
                )}
              </button>
            </div>
          )}

          {((props.logo !== undefined && tm?.logoPosition === "right") ||
            (props.logo !== undefined && props.logoPosition === "right" && tm?.logoPosition === undefined)) && (
            <div className="whitespace-nowrap no-underline">
              {props.logo}
            </div>
          )}
        </div>

        {expand && <DropdownMenu />}
      </nav>
    </MenuProvider>
  )
}

Menu.Content = MenuContent
Menu.Dropdown = MenuDropdown
Menu.Item = MenuItem
Menu.Items = MenuItems

Menu.defaultProps = {
  width: "full",
  iconOnly: false,
  fixed: false,
  fixedPosition: "top",
  responsive: false,
  dropdownMode: "click",
  logoPosition: "left",
  itemPosition: "left",
  color: "white",
  itemTextColor: "gray",
  itemTextColorContrast: "500",
  itemTextColorHover: "gray",
  itemTextColorHoverContrast: "700",
  border: true,
  borderWidth: "normal",
  borderStyle: "solid",
  borderColor: "gray",
  borderColorContrast: "100",
  itemBorder: false,
  itemBorderHoverWidth: "normal",
  itemBorderHoverStyle: "solid",
  fontSize: "sm",
  px: "5",
  py: "3",
  itemPX: "5",
  itemPY: "3"
}
