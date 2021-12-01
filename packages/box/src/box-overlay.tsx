import { base, Opacity } from "@zenbu-ui/core"
import * as React from "react"

export interface BoxOverlayProps {
  opacity?: Opacity
}

export const BoxOverlay: React.FC<BoxOverlayProps> = (props) => {
  const cls = base({
    model: {
      width: "full",
      height: "full"
    },
    positioning: {
      position: "absolute"
    },
    visual: {
      dark: false,
      bgColor: "black",
    },
    misc: {
      opacity: props.opacity
    }
  })

  return(
    <div className={cls}></div>
  )
}

BoxOverlay.defaultProps = {
  opacity: "50"
}
