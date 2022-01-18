import { AriaProps, base, ModelProps, SpacingProps, StandardProps } from "@zenbu-ui/core"
import * as React from "react"

export interface MenuFooterContentProps extends AriaProps, StandardProps, ModelProps, SpacingProps {}

export const MenuFooterContent: React.FC<MenuFooterContentProps> = (props) => {
  const cls = base({
    model: {
      width: props.width
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
    <div
    id={props.id}
    className={cls}
    aria-label={props.ariaLabel}>
      {props.children}
    </div>
  )
}

MenuFooterContent.defaultProps = {
  width: "max"
}
