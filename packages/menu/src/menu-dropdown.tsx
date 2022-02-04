import { arrowNavigation, arrowNavigationHorizontal, base, BorderRadius, BoxShadow, Color, ColorContrast, element, FontSize, ModelProps, PositionScale, Size, SpacingProps, StandardProps, text, useEscKeyboardEvent, useOnClickOutside, VisualTextProps } from "@zenbu-ui/core"
import { Icon, Outline, Solid } from "@zenbu-ui/icon"
import { createContext } from "@zenbu-ui/context"
import { useId } from "@reach/auto-id"
import { motion, AnimatePresence } from "framer-motion"
import * as React from "react"
import { useContext, useSidebarContext } from "."
import { MenuDropdownItem, MenuDropdownItemProps } from "./menu-dropdown-item"

const PROVIDER_NAME = "MenuDropdown"

export interface MenuDropdownProps extends StandardProps, ModelProps, VisualTextProps, SpacingProps {
  title: React.ReactNode,
  id?: string,
  active?: boolean,
  content?: boolean,
  contentFull?: boolean,
  href?: string,
  orientation?: "vertical" | "horizontal",
  sidebar?: boolean,
  target?: "_self" | "_blank" | "_parent" | "_top",
  icon?: Solid | Outline,
  iconHeight?: Size,
  iconColor?: Color,
  iconColorContrast?: ColorContrast
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
  dropdownMX?: PositionScale,
  dropdownMY?: PositionScale,
  dropdownMB?: PositionScale,
  dropdownML?: PositionScale,
  dropdownMR?: PositionScale,
  dropdownMT?: PositionScale
  dropdownItemPX?: PositionScale,
  dropdownItemPY?: PositionScale,
  dropdownItemPB?: PositionScale,
  dropdownItemPL?: PositionScale,
  dropdownItemPR?: PositionScale,
  dropdownItemPT?: PositionScale
}

export let useDropdownContext: MenuDropdownProps
export const MenuDropdown: React.FC<MenuDropdownProps> & {
  Item: React.FC<MenuDropdownItemProps>
} = (props) => {
  const menu = props.id?.includes("sidebar") ? useSidebarContext : useContext
  const node = React.useRef<HTMLLIElement>(null)
  const nodeDropdown = React.useRef<HTMLDivElement>(null)
  const id = useId("menu")
  const idMenu = useId("menu-dropdown")

  const [expand, setExpand] = React.useState(false)
  const [expandWithEnter, setExpandWithEnter] = React.useState(false)
  const [MenuDropdownProvider, MenuDropdownContext] = createContext<MenuDropdownProps>(PROVIDER_NAME, {
    id: props.id,
    title: props.title,
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
    dropdownItemPX: props.dropdownItemPX,
    dropdownItemPY: props.dropdownItemPY,
    dropdownItemPB: props.dropdownItemPB,
    dropdownItemPR: props.dropdownItemPR,
    dropdownItemPL: props.dropdownItemPL,
    dropdownItemPT: props.dropdownItemPT
  })
  useDropdownContext = MenuDropdownContext(PROVIDER_NAME)

  const clsWrapper = base({
    positioning: {
      position: props.contentFull ? undefined : "relative"
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

  const cls = base({
    flexbox: {
      flex: true,
      alignItems: "center",
      justify: (props.sidebar || props.orientation === "vertical") ? "between" : undefined
    },
    visual: {
      dark: menu.dark === undefined ? false : menu.dark,
      bgColor: props.active ? menu.itemBgColorHover : menu.itemBgColor,
      bgColorContrast: props.active ? menu.itemBgColorHoverContrast : menu.itemBgColorContrast,
      bgHoverColor: (props.sidebar && expand) ? undefined : menu.itemBgColorHover,
      bgHoverColorContrast: menu.itemBgColorHoverContrast,
      borderRadius: menu.itemRounded,
      borderWidth: menu.itemBorder ? menu.itemBorderHoverWidth : undefined,
      borderStyle: menu.itemBorder ? menu.itemBorderHoverStyle : undefined,
      borderPosition: menu.itemBorder ? "bottom" : undefined,
      borderColor: (menu.itemBorder && props.active) ? menu.itemBorderHoverColor : "transparent",
      borderColorContrast: (menu.itemBorder && props.active) ? menu.itemBorderHoverColorContrast : undefined,
      borderHoverColor: menu.itemBorder ? menu.itemBorderHoverColor : undefined,
      borderHoverColorContrast: menu.itemBorder ? menu.itemBorderHoverColorContrast : undefined
    },
    spacing: {
      mx: props.mx,
      my: props.my,
      mb: props.mb,
      ml: props.ml,
      mr: props.mr,
      mt: props.mt,
      px: menu.itemPX,
      py: menu.itemPY,
      pb: menu.itemPB,
      pl: menu.itemPL,
      pr: menu.itemPR,
      pt: menu.itemPT
    }
  })

  const clsText = text({
    visualText: {
      dark: menu.dark === undefined ? false : menu.dark,
      textColor: props.active ? menu.itemTextColorHover : menu.itemTextColor,
      textColorContrast: props.active ? menu.itemTextColorHoverContrast : menu.itemTextColorContrast,
      textHoverColor: menu.itemTextColorHover,
      textHoverColorContrast: menu.itemTextColorHoverContrast,
      darkTextColor: menu.darkItemTextColor,
      darkTextColorContrast: menu.darkItemTextColorContrast,
      darkTextHoverColor: menu.darkItemTextColorHover,
      darkTextHoverColorContrast: menu.darkItemTextColorHoverContrast,
      fontSize: menu.fontSize,
      fontWeight: (props.active && menu.itemActiveFontWeight !== undefined) ? menu.itemActiveFontWeight : menu.fontWeight,
      textDecoration: "no-underline"
    }
  })

  const clsElm = element({
    transition: {
      transition: "colors",
      delay: "100",
      ease: "in-out"
    }
  })

  const clsFocus = element({
    focus: {
      dark: menu.dark === undefined ? false : menu.dark,
      focusColor: menu.itemBgColorHover,
      focusColorContrast: menu.itemBgColorHoverContrast,
      focusTextColor: menu.itemTextColorHover,
      focusTextColorContrast: menu.itemTextColorHoverContrast,
      focusDarkTextColor: menu.darkItemTextColorHover,
      focusDarkTextColorContrast: menu.darkItemTextColorHoverContrast,
      focusBorderColor: menu.itemBorder ? menu.itemBorderHoverColor : undefined,
      focusBorderColorContrast: menu.itemBorder ? menu.itemBorderHoverColorContrast : undefined,
      focusBorderWidth: menu.itemBorder ? menu.itemBorderHoverWidth : undefined,
      focusBorderPosition: menu.itemBorder ? "bottom" : undefined
    }
  })

  const clsDropdownWrapper = base({
    model: {
      display: "block",
      width: props.width
    },
    positioning: {
      position: "absolute",
      top: "full",
      left: props.contentFull ? "0" : undefined,
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
      dark: menu.dark === undefined ? false : menu.dark,
      bgColor: props.dropdownBgColor,
      bgColorContrast: props.dropdownBgColorContrast,
      darkBgColor: props.darkDropdownBgColor,
      darkBgColorContrast: props.darkDropdownBgColorContrast,
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
      mx: props.dropdownMX,
      my: props.dropdownMY,
      mb: props.dropdownMB,
      ml: props.dropdownML,
      mr: props.dropdownMR,
      mt: props.dropdownMT,
      px: "0.5",
      py: "0.5"
    }
  })

  const clsContent = base({
    model: {
      display: "block",
      overflow: "hidden"
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
          transform: "translate(-50%, 155px) !important",
          left: (node.current?.clientWidth !== undefined && menu.itemPosition === "left" && !props.contentFull) ? `${(node.current.clientWidth / 8) - 1}px` : undefined,
          right: (node.current?.clientWidth !== undefined && menu.itemPosition === "right" && !props.contentFull) ? `${(node.current.clientWidth / 8) - 1}px` : undefined
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
          {!props.content ? (
            <ul
            id={idMenu}
            className={clsDropdown}
            role="menu"
            aria-labelledby={id}
            aria-orientation="vertical"
            >
              {React.Children.map(props.children, (elm, idx) => {
                const e = elm as React.ReactElement<any>
                if (e.type === MenuDropdownItem) {
                  return(
                    <MenuDropdownItem id={`${idMenu}-${idx+1}`} key={`dropdown-menu-${idx+1}`} {...e.props} />
                  )
                }
              })}
            </ul>
          ) : (
            <div
            id={idMenu}
            className={clsDropdown}
            role="menu"
            aria-labelledby={id}
            aria-orientation="vertical"
            >{props.children}</div>
          )}
        </motion.div>
      </AnimatePresence>
    )
  }

  useOnClickOutside(node, () => {
    if (expand && !props.sidebar) {
      setExpand(false)
      setExpandWithEnter(false)
    }
  })

  useEscKeyboardEvent(node, () => {
    if (expand && !props.sidebar) {
      setExpand(false)
      setExpandWithEnter(false)
    }
  })

  React.useEffect(() => {
    if (expandWithEnter) {
      document.getElementById(`${idMenu}-1`)?.focus()
    }
  }, [expandWithEnter, idMenu])

  return(
    <MenuDropdownProvider title={props.title}>
      <li
      ref={node}
      className={clsWrapper}
      aria-current={(props.active && props.href === undefined) ? "page" : undefined}
      role="menuitem"
      onClick={() => {if (menu.dropdownMode === "click" || props.sidebar) setExpand(!expand)}}
      onMouseOver={() => {if (menu.dropdownMode === "hover") setExpand(true)}}
      onMouseLeave={() => {if (menu.dropdownMode === "hover") setExpand(false)}}
      onFocus={() => {if (menu.dropdownMode === "hover") setExpand(true)}}
      onBlur={() => {if (menu.dropdownMode === "hover") setExpand(false)}}
      onKeyDown={(e) => {
        if (props.orientation === "vertical") arrowNavigation(e, props.id, (code) => {
          if (code === "Enter" || code === "Space") {
            setExpand(!expand)
            setExpandWithEnter(!expandWithEnter)
          }
        })
        else arrowNavigationHorizontal(e, props.id, (code) => {
          if (code === "Enter" || code === "Space") {
            setExpand(!expand)
            setExpandWithEnter(!expandWithEnter)
          }
        })
      }}>
        {props.href !== undefined ? (
          <a
          id={props.id}
          className={[
            cls,
            clsText,
            clsElm,
            clsFocus,
            "hover:select-none",
            "focus:outline-none"
          ].join(" ").trim()}
          href={props.href}
          target={props.target}
          aria-current={props.active ? "page" : undefined}>
            {props.icon !== undefined ? (
              <span className="flex items-center space-x-2">
                <span><Icon icon={props.icon} color={props.iconColor} colorContrast={props.iconColorContrast} height={props.iconHeight} /></span>
                {!props.sidebar ? (
                  <span className={props.sidebar ? "hidden lg:block" : undefined}>{props.children}</span>
                ) : (
                  <span>{props.title}</span>
                )}
              </span>
            ) : (props.title)}
            <span>
              <Icon icon="chevron-down" height="3" ml="3" />
            </span>
          </a>
        ) : (
          <div
          id={props.id}
          className={[
            cls,
            clsText,
            clsElm,
            clsFocus,
            "cursor-pointer",
            "hover:select-none",
            "focus:outline-none"
          ].join(" ")}
          role="menuitem"
          tabIndex={0}>
            {props.icon !== undefined ? (
              <span className="flex items-center space-x-2">
                <span><Icon icon={props.icon} color={props.iconColor} colorContrast={props.iconColorContrast} height={props.iconHeight} /></span>
                {!props.sidebar ? (
                  <span className={props.sidebar ? "hidden lg:block" : undefined}>{props.children}</span>
                ) : (
                  <span>{props.title}</span>
                )}
              </span>
            ) : (props.title)}
            <span>
              <Icon icon="chevron-down" height="3" ml="3" />
            </span>
          </div>
        )}

        {(expand && !props.sidebar) && (<DropdownMenu />)}

        {props.sidebar && (
          <AnimatePresence initial={false}>
            <motion.div
            className={clsContent}
            role="region"
            aria-labelledby={props.id}
            initial="collapsed"
            animate={expand ? "open" : "collapsed"}
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}>
              <ul>
                {React.Children.map(props.children, (elm, idx) => {
                  const e = elm as React.ReactElement<any>
                  if (e.type === MenuDropdownItem) {
                    return(
                      <MenuDropdown.Item sidebar
                      id={`${props.id}-${idx}`} {...e.props} rounded="none"
                      colorHover={menu.itemBgColor} colorHoverContrast={menu.itemBgColorContrast}
                      textColor={menu.itemTextColor} textColorContrast={menu.itemTextColorContrast}
                      pl={`${Number(props.iconHeight) + Number(menu.itemPX) + 2}`} px="0" py={menu.itemPY} pr={menu.itemPX} />
                    )
                  }
                })}
              </ul>
            </motion.div>
          </AnimatePresence>
        )}
      </li>
    </MenuDropdownProvider>
  )
}

MenuDropdown.Item = MenuDropdownItem

MenuDropdown.defaultProps = {
  sidebar: false,
  content: false,
  contentFull: false,
  width: "max",
  iconHeight: "4",
  dropdownBgColor: "white",
  dropdownBgHoverColor: "blue",
  dropdownBgHoverColorContrast: "500",
  dropdownTextColor: "black",
  dropdownTextHoverColor: "white",
  dropdownBorder: true,
  dropdownBorderColor: "gray",
  dropdownBorderColorContrast: "100",
  dropdownFontSize: "sm",
  dropdownRounded: "md",
  dropdownShadow: "lg"
}
