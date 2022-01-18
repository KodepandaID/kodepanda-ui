import { arrowNavigation, base, ColorProps, element, SpacingProps, StandardProps, text, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import * as React from "react"
import { useDropdownContext } from "./menu-dropdown"

export interface MenuDropdownItemProps extends StandardProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {
  sidebar?: boolean,
  href: string,
  target?: "_self" | "_blank" | "_parent" | "_top"
}

export const MenuDropdownItem: React.FC<MenuDropdownItemProps> = (props) => {
  const { dark } = React.useContext(ThemeCtx)
  const dropdown = useDropdownContext

  const cls = base({
    flexbox: {
      flex: true,
      alignItems: "center",
      justify: "between"
    },
    visual: {
      dark: dark,
      bgHoverColor: props.colorHover !== undefined ? props.colorHover : dropdown.dropdownBgHoverColor,
      bgHoverColorContrast: props.colorHoverContrast !== undefined ? props.colorHoverContrast : dropdown.dropdownBgHoverColorContrast,
      darkBgHoverColor: props.darkColorHover !== undefined ? props.darkColorHover : dropdown.darkDropdownBgHoverColor,
      darkBgHoverColorContrast: props.darkColorHoverContrast !== undefined ? props.darkColorHoverContrast : dropdown.darkDropdownBgHoverColorContrast,
      borderRadius: props.rounded !== undefined ? props.rounded : dropdown.dropdownRounded
    },
    misc: {
      userSelect: "none"
    },
    spacing: {
      px: props.px !== undefined ? props.px : dropdown.dropdownItemPX,
      py: props.py !== undefined ? props.py : dropdown.dropdownItemPY,
      pb: props.pb !== undefined ? props.pb : dropdown.dropdownItemPB,
      pl: props.pl !== undefined ? props.pl : dropdown.dropdownItemPL,
      pr: props.pr !== undefined ? props.pr : dropdown.dropdownItemPR,
      pt: props.pt !== undefined ? props.pt : dropdown.dropdownItemPT
    }
  })

  const clsElm = element({
    focus: {
      dark: dark,
      focusColor: props.colorHover !== undefined ? props.colorHover : dropdown.dropdownBgHoverColor,
      focusColorContrast: props.colorHoverContrast !== undefined ? props.colorHoverContrast : dropdown.dropdownBgHoverColorContrast,
      focusDarkColor: props.darkColorHover !== undefined ? props.darkColorHover : dropdown.darkDropdownBgHoverColor,
      focusDarkColorContrast: props.darkColorHoverContrast !== undefined ? props.darkColorHoverContrast : dropdown.darkDropdownBgHoverColorContrast,
      focusTextColor: props.textColorHover !== undefined ? props.textColorHover : dropdown.dropdownTextHoverColor,
      focusTextColorContrast: props.textColorHoverContrast !== undefined ? props.textColorHoverContrast : dropdown.dropdownTextHoverColorContrast,
      focusDarkTextColor: props.darkTextColorHover !== undefined ? props.darkTextColorHover : dropdown.dropdownTextHoverColor,
      focusDarkTextColorContrast: props.darkTextColorHoverContrast !== undefined ? props.darkTextColorHoverContrast : dropdown.darkTextColorHoverContrast
    }
  })

  const clsText = text({
    visualText: {
      dark: dark,
      fontSize: props.fontSize !== undefined ? props.fontSize : dropdown.dropdownFontSize,
      textColor: props.textColor !== undefined ? props.textColor : dropdown.dropdownTextColor,
      textColorContrast: props.textColorContrast !== undefined ? props.textColorContrast : dropdown.dropdownTextColorContrast,
      darkTextColor: props.darkTextColor !== undefined ? props.darkTextColor : dropdown.darkDropdownTextColor,
      darkTextColorContrast: props.darkTextColorContrast !== undefined ? props.darkTextColorContrast : dropdown.darkDropdownTextColorContrast,
      textHoverColor: props.textColorHover !== undefined ? props.textColorHover : dropdown.dropdownTextHoverColor,
      textHoverColorContrast: props.textColorHoverContrast !== undefined ? props.textColorHoverContrast : dropdown.dropdownTextHoverColorContrast,
      darkTextHoverColor: props.darkTextColorHover !== undefined ? props.darkTextColorHover : dropdown.dropdownTextHoverColor,
      darkTextHoverColorContrast: props.darkTextColorHoverContrast !== undefined ? props.darkTextColorHoverContrast : dropdown.darkTextColorHoverContrast
    }
  })

  return(
    <li role="menuitem">
      <a
      href={props.href}
      target={props.target}
      id={props.id}
      className={[
        cls,
        "focus:outline-none",
        clsElm,
        clsText
      ].join(" ").trim()}
      onKeyDown={(e) => arrowNavigation(e, props.id, () => {})}>
        {props.children}
      </a>
    </li>
  )
}

MenuDropdownItem.defaultProps = {
  sidebar: false,
  target: "_self",
  px: "3",
  py: "1"
}
