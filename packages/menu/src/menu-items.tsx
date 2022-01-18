import { base, SpacingProps, StandardProps } from "@zenbu-ui/core"
import * as React from "react"
import { MenuDropdown } from "."
import { useContext } from "./menu"
import { MenuItem } from "./menu-item"
import { useSidebarContext } from "./menu-sidebar"

export interface MenuItemsProps extends StandardProps, SpacingProps {
  idx?: number,
  sidebar?: boolean,
  iconOnly?: boolean,
  mini?: boolean,
  orientation?: "vertical" | "horizontal",
  footer?: boolean,
  title?: React.ReactNode,
}

export const MenuItems: React.FC<MenuItemsProps> = (props) => {
  const menu = props.id?.includes("sidebar") ? useSidebarContext : useContext

  const cls = base({
    spacing: (!props.mini && !props.iconOnly) ? {
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
    } : undefined
  })

  return(
    <React.Fragment>
      {props.title !== undefined && (
        <li className={[
          cls,
          (props.mini || props.iconOnly) ? `lg:block flex justify-center my-4 lg:px-${menu.itemPX}` : ""
        ].join(" ").trim()}>{props.title}</li>
      )}
      {React.Children.map(props.children, (elm, idx) => {
        const e = elm as React.ReactElement<any>
        if (e.type === MenuItem) {
          return(
            <MenuItem
            orientation={props.orientation}
            sidebar={props.sidebar} id={`${props.id}-${idx+1}`} key={`${props.id}-${idx+1}`}
            iconOnly={props.iconOnly} {...e.props} />
          )
        } else if (e.type === MenuDropdown && !props.footer) {
          return(
            <MenuDropdown
            id={`${props.id}-${idx+1}`} key={`${props.id}-${idx+1}`} {...e.props}
            sidebar orientation={props.orientation} />
          )
        }
      })}
    </React.Fragment>
  )
}

MenuItems.defaultProps = {
  mini: false,
  footer: false,
  mt: "5"
}
