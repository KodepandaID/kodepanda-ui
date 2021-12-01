import { base, element, ModelProps, ObjectFit, PositioningProps, ZIndex } from "@zenbu-ui/core"
import * as React from "react"

export interface BoxImageProps extends ModelProps, PositioningProps {
  src: string,
  alt: string,
  background?: boolean,
  objectFit?: ObjectFit
  zIndex?: ZIndex
}

export const BoxImage: React.FC<BoxImageProps> = (props) => {
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

  if (props.background) {
    return React.createElement("img", { alt: props.alt, src: props.src, className: "absolute w-full h-full z-0 block" })
  }

  return React.createElement("img", { alt: props.alt, src: props.src, className: [cls, clsElm].join(" ").trim() })
}

BoxImage.defaultProps = {
  position: "absolute"
}
