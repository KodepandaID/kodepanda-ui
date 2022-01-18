import { arrowNavigation, arrowNavigationHorizontal, base, Color, ColorContrast, element, Size, SpacingProps, text } from "@zenbu-ui/core"
import { Icon, Outline, Solid } from "@zenbu-ui/icon"
import * as React from "react"
import { useContext, useSidebarContext } from "."
import { useFooterContext } from "./menu-footer"

export interface MenuItemProps extends SpacingProps {
  id?: string,
  active?: boolean,
  sidebar?: boolean,
  orientation?: "vertical" | "horizontal",
  iconOnly?: boolean,
  title?: string,
  href?: string,
  target?: "_self" | "_blank" | "_parent" | "_top",
  icon?: Solid | Outline,
  iconHeight?: Size,
  iconColor?: Color,
  iconColorContrast?: ColorContrast,
  onClick?: () => void
}

export const MenuItem: React.FC<MenuItemProps> = (props) => {
  const menu = props.id?.includes("sidebar") ? useSidebarContext : props.id?.includes("footer") ? useFooterContext : useContext

  const clsWrapper = base({
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
    model: {
      display: "block"
    },
    flexbox: (menu.iconOnly || props.iconOnly) ? {
      flex: true,
      justify: "center"
    } : undefined,
    visual: props.href !== undefined ? {
      dark: menu.dark === undefined ? false : menu.dark,
      bgColor: props.active ? menu.itemBgColorHover : menu.itemBgColor,
      bgColorContrast: props.active ? menu.itemBgColorHoverContrast : menu.itemBgColorContrast,
      bgHoverColor: menu.itemBgColorHover,
      bgHoverColorContrast: menu.itemBgColorHoverContrast,
      borderRadius: menu.itemRounded,
      borderWidth: menu.itemBorder ? menu.itemBorderHoverWidth : undefined,
      borderStyle: menu.itemBorder ? menu.itemBorderHoverStyle : undefined,
      borderPosition: (menu.itemBorder && props.orientation === undefined) ? "bottom" : props.orientation === "vertical" ? "left" : undefined,
      borderColor: (menu.itemBorder && props.active) ? menu.itemBorderHoverColor : "transparent",
      borderColorContrast: (menu.itemBorder && props.active) ? menu.itemBorderHoverColorContrast : undefined,
      borderHoverColor: menu.itemBorder ? menu.itemBorderHoverColor : undefined,
      borderHoverColorContrast: menu.itemBorder ? menu.itemBorderHoverColorContrast : undefined
    } : undefined,
    spacing: {
      mx: props.mx,
      my: props.my,
      mb: props.mb,
      ml: props.ml,
      mr: props.mr,
      mt: props.mt,
      px: props.px !== undefined ? props.px : menu.itemPX,
      py: props.py !== undefined ? props.py : menu.itemPY,
      pb: props.pb !== undefined ? props.pb : menu.itemPB,
      pl: props.pl !== undefined ? props.pl : menu.itemPL,
      pr: props.pr !== undefined ? props.pr : menu.itemPR,
      pt: props.pt !== undefined ? props.pt : menu.itemPT
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

  return(
    <li
    className={[clsWrapper, "list-none"].join(" ")}
    aria-current={(props.active && props.href === undefined) ? "page" : undefined}
    role="menuitem"
    title={props.title}
    onClick={() => {
      if (props.onClick !== undefined) props.onClick()
    }}
    onKeyDown={(e) => {
      if (props.orientation === "vertical") arrowNavigation(e, props.id, (code) => {
        if (code === "Enter" && props.onClick !== undefined) props.onClick()
      })
      else arrowNavigationHorizontal(e, props.id, (code) => {
        if (code === "Enter" && props.onClick !== undefined) props.onClick()
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
              {!props.iconOnly && (
                <span className={props.sidebar ? "hidden lg:block" : undefined}>{props.children}</span>
              )}
            </span>
          ) : (props.children)}
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
        ].join(" ").trim()}>
          {props.icon !== undefined ? (
            <span className="flex items-center space-x-2">
              <span><Icon icon={props.icon} color={props.iconColor} colorContrast={props.iconColorContrast} height={props.iconHeight} /></span>
              {!props.iconOnly && (
                <span className={props.sidebar ? "hidden lg:block" : undefined}>{props.children}</span>
              )}
            </span>
          ) : (props.children)}
        </div>
      )}
    </li>
  )
}

MenuItem.defaultProps = {
  active: false,
  iconHeight: "4"
}
