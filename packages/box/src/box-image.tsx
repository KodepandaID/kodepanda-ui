import { base, element, ModelProps, ObjectFit, PositioningProps, ZIndex } from "@zenbu-ui/core"
import { useId } from "@reach/auto-id"
import * as React from "react"

export interface BoxImageProps extends ModelProps, PositioningProps {
  src: string,
  alt: string,
  objectFit?: ObjectFit
  zIndex?: ZIndex
}

export const BoxImage: React.FC<BoxImageProps> = (props) => {
  const id = useId("box-image")

  const cls = base({
    positioning: {
      position: props.position,
      top: props.top,
      bottom: props.bottom,
      left: props.left,
      right: props.right,
      zIndex: props.zIndex
    },
    model: {
      width: props.width,
      height: props.height
    }
  })

  const clsElm = element({
    element: {
      objectFit: props.objectFit
    }
  })

  return React.createElement("img", { id: id, alt: props.alt, src: props.src, className: [cls, clsElm].join(" ").trim() })
}

BoxImage.defaultProps = {
  position: "absolute"
}
