// Following the menubar guideline WAI-ARIA 1.2
// https://www.w3.org/TR/wai-aria-practices/examples/menubar/menubar-1/menubar-1.html

import { AriaProps, base, BorderRadius, BorderStyle, BorderWidth, Color, ColorContrast, ColorProps, FontWeight, ModelProps, PositionScale, SpacingProps, StandardProps, useEscKeyboardEvent, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { Icon } from "@zenbu-ui/icon"
import { ThemeCtx } from "@zenbu-ui/provider"
import { createContext, useId } from "@zenbu-ui/react-id"
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
  const { dark } = React.useContext(ThemeCtx)
  const nodeResponsive = React.useRef<HTMLDivElement>(null)
  const id = useId("navbar")
  const idResponsive = useId("navbar-responsive")

  const [expand, setExpand] = React.useState(false)
  const [expandWithEnter, setExpandWithEnter] = React.useState(false)
  const [MenuProvider, MenuContext] = createContext<MenuProps>(PROVIDER_NAME, {
    id: id,
    dark: dark,
    iconOnly: props.iconOnly,
    dropdownMode: props.dropdownMode,
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
    itemPosition: props.itemPosition,
    itemRounded: props.itemRounded,
    itemActiveFontWeight: props.itemActiveFontWeight,
    itemBorder: props.itemBorder,
    itemBorderHoverWidth: props.itemBorderHoverWidth,
    itemBorderHoverStyle: props.itemBorderHoverStyle,
    itemBorderHoverColor: props.itemBorderHoverColor,
    itemBorderHoverColorContrast: props.itemBorderHoverColorContrast,
    itemTextColor: props.itemTextColor,
    itemTextColorContrast: props.itemTextColorContrast,
    itemTextColorHover: props.itemTextColorHover,
    itemTextColorHoverContrast: props.itemTextColorHoverContrast,
    darkItemTextColor: props.itemTextColor,
    darkItemTextColorContrast: props.itemTextColorContrast,
    darkItemTextColorHover: props.itemTextColorHover,
    darkItemTextColorHoverContrast: props.itemTextColorHoverContrast,
    itemBgColor: props.itemBgColor,
    itemBgColorContrast: props.itemBgColorContrast,
    itemBgColorHover: props.itemBgColorHover,
    itemBgColorHoverContrast: props.itemBgColorHoverContrast,
    darkItemBgColor: props.itemBgColor,
    darkItemBgColorContrast: props.itemBgColorContrast,
    darkItemBgColorHover: props.itemBgColorHover,
    darkItemBgColorHoverContrast: props.itemBgColorHoverContrast,
    itemPX: props.itemPX,
    itemPY: props.itemPY,
    itemPB: props.itemPB,
    itemPL: props.itemPL,
    itemPR: props.itemPR,
    itemPT: props.itemPT
  })
  useContext = MenuContext(PROVIDER_NAME)

  const cls = base({
    positioning: {
      position: props.fixed ? "fixed" : "relative",
      top: (props.fixed && props.fixedPosition === "top") ? "0" : undefined,
      bottom: (props.fixed && props.fixedPosition === "bottom") ? "0" : undefined,
      left: props.fixed ? "0" : undefined,
      right: props.fixed ? "0" : undefined,
      zIndex: props.fixed ? "50" : undefined
    },
    visual: {
      dark: dark,
      bgColor: props.color,
      bgColorContrast: props.colorContrast,
      darkBgColor: props.darkColor,
      darkBgColorContrast: props.darkColorContrast,
      borderWidth: props.border ? props.borderWidth : undefined,
      borderStyle: props.border ? props.borderStyle : undefined,
      borderColor: props.border ? props.borderColor : undefined,
      borderColorContrast: props.border ? props.borderColorContrast : undefined,
      borderRadius: props.rounded,
      shadow: props.shadow,
      shadowColor: props.shadowColor,
      shadowColorContrast: props.shadowColorContrast,
      shadowOpacity: props.shadowOpacity,
      darkShadowColor: props.darkShadowColor,
      darkShadowColorContrast: props.darkShadowColorContrast,
      darkShadowOpacity: props.darkShadowOpacity
    },
    spacing: {
      mx: props.mx,
      my: props.my,
      mb: props.mb,
      ml: props.ml,
      mr: props.mr,
      mt: props.mt
    }
  })

  const clsWrapper = base({
    model: {
      width: props.width
    },
    flexbox: {
      flex: true,
      alignItems: "center",
      justify: "between",
    },
    spacing: {
      px: props.px,
      py: props.py,
      pb: props.pb,
      pl: props.pl,
      pr: props.pr,
      pt: props.pt
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
      bgColor: props.color,
      bgColorContrast: props.colorContrast,
      darkBgColor: props.darkColor,
      darkBgColorContrast: props.darkColorContrast,
      borderWidth: props.border ? "normal" : undefined,
      borderStyle: props.border ? "solid" : undefined,
      borderColor: props.border ? props.borderColor : undefined,
      borderColorContrast: props.border ? props.borderColorContrast : undefined,
      borderRadius: props.rounded,
      shadow: props.shadow,
      shadowColor: props.shadow !== undefined ? props.shadowColor : undefined,
      shadowColorContrast: props.shadow !== undefined ? props.shadowColorContrast : undefined,
      shadowOpacity: props.shadow !== undefined ? props.shadowOpacity : undefined
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
        key={idResponsive}
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
          id={idResponsive}
          className={clsDropdown}
          role="menu"
          aria-labelledby={id}
          aria-orientation="vertical"
          >
            {React.Children.map(props.children, (elm, idx) => {
              const e = elm as React.ReactElement<any>
              if (e.type === MenuItem) {
                return(
                  <MenuItem orientation="vertical" id={`${idResponsive}-${idx+1}`} key={`dropdown-menu-${idx+1}`} {...e.props} />
                )
              } else if (e.type === MenuDropdown) {
                return(
                  <MenuDropdown orientation="vertical" id={`${idResponsive}-${idx+1}`} key={`dropdown-menu-${idx+1}`} {...e.props} sidebar={true} />
                )
              }
            })}
          </ul>
        </motion.div>
      </AnimatePresence>
    )
  }

  useEscKeyboardEvent(nodeResponsive, () => {
    if (expand) {
      setExpand(false)
      setExpandWithEnter(false)
    }
  })

  React.useEffect(() => {
    if (expandWithEnter) {
      document.getElementById(`${idResponsive}-1`)?.focus()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expandWithEnter])

  return(
    <MenuProvider>
      <nav className={cls}>
        <div className={[clsWrapper, "space-x-3"].join(" ")} style={{flexWrap: "inherit"}}>
          {(props.logo !== undefined && props.logoPosition === "left") && (
            <div className="whitespace-nowrap no-underline ml-2">
              {props.logo}
            </div>
          )}

          {React.Children.map(props.children, (elm) => {
            const e = elm as React.ReactElement<any>
            if (e.type === MenuContent && e.props.position === "left") {
              return(
                <div className="w-max flex grow justify-end" style={{flexBasis: "auto"}}>
                  <MenuContent id={`${id}-0`} {...e.props} />
                </div>
              )
            }
          })}

          <div className={[
            props.responsive ? "hidden lg:flex lg:grow" : "flex grow",
            props.itemPosition === "center" ? "justify-center" : props.itemPosition === "right" ? "justify-end" : ""
          ].join(" ")} style={{flexBasis: "auto"}}>
            <ul className={clsMenu} role="menubar">
              {React.Children.map(props.children, (elm, idx) => {
                const e = elm as React.ReactElement<any>
                if (e.type === MenuItem) {
                  return(
                    <MenuItem id={`${id}-1-${idx+1}`} key={`${id}-${idx+1}`} {...e.props} />
                  )
                } else if (e.type === MenuDropdown) {
                  return(
                    <MenuDropdown id={`${id}-1-${idx+1}`} key={`${id}-${idx+1}`} {...e.props} />
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
                  <MenuContent id={`${id}-0`} {...e.props} />
                </div>
              )
            }
          })}

          {props.responsive && (
            <div className={[
              "ml-2 -my-1 lg:hidden flex content-end",
              base({
                spacing: {
                  px: props.itemPX,
                  py: props.itemPY,
                  pb: props.itemPB,
                  pl: props.itemPL,
                  pr: props.itemPR,
                  pt: props.itemPT
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
                  <Icon icon="x" height="6" color={props.itemTextColor} colorContrast={props.itemTextColorContrast} />
                ) : (
                  <Icon icon="menu" height="6" color={props.itemTextColor} colorContrast={props.itemTextColorContrast} />
                )}
              </button>
            </div>
          )}

          {(props.logo !== undefined && props.logoPosition === "right") && (
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
