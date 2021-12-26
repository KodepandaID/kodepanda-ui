import { AriaProps, StandardProps } from "@zenbu-ui/core"
import * as React from "react"
import { ButtonDropdownItem } from "./button-dropdown-item"

export const ButtonDropdownHorizontal: React.FC<StandardProps & AriaProps> = (props) => {
  return(
    <div
    id={props.id}
    className={props.className}
    role="menu"
    aria-labelledby={props.ariaLabelledBy}
    aria-orientation="horizontal">
      {React.Children.map(props.children, (elm, idx) => {
        const e = elm as React.ReactElement<any>
        if (e.type === ButtonDropdownItem) {
          return(
            <ButtonDropdownItem id={`${props.id}-${idx+1}`} key={`${props.id}-${idx+1}`} {...e.props} />
          )
        }
      })}
    </div>
  )
}
