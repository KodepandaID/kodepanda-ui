import { content, SpaceBetween, StandardProps } from "@zenbu-ui/core";
import { useId } from "@zenbu-ui/react-id";
import * as React from "react"

interface AvatarGroupProps extends StandardProps {
  space?: SpaceBetween
}

export const AvatarGroup: React.FC<AvatarGroupProps> = (props) => {
  const id = useId("avatar")

  const cls = content({
    flexbox: {
      flex: true,
      direction: "row"
    },
    spaceBetween: {
      x: props.space
    }
  })

  return React.createElement("div",
  {id: id, className: cls},
  props.children)
}

AvatarGroup.defaultProps = {
  space: "-4"
}
