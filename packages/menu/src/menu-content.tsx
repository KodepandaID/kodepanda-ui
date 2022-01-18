import { base, SpacingProps, StandardProps } from "@zenbu-ui/core"
import * as React from "react"
import { MenuItem } from "./menu-item"

export interface MenuContentProps extends StandardProps, SpacingProps {
  id?: string,
  position?: "left" | "right" | "top" | "bottom"
}

export const MenuContent: React.FC<MenuContentProps> = (props) => {
  const clsMenu = base({
    flexbox: {
      flex: (props.position === "top" || props.position === "bottom") ? false : true,
      alignItems: (props.position === "top" || props.position === "bottom") ? undefined : "center"
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

  return(
    <ul className={clsMenu}>
      {React.Children.map(props.children, (elm, idx) => {
        const e = elm as React.ReactElement<any>
        if (e.type === MenuItem) {
          return(
            <MenuItem id={`${props.id}-${idx+1}`} key={`${props.id}-${idx+1}`} {...e.props} py="0" />
          )
        }
      })}
    </ul>
  )
}

MenuContent.defaultProps = {
  position: "left"
}
