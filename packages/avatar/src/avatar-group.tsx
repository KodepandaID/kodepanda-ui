import { content, SpaceBetween, StandardProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@reach/auto-id"
import * as React from "react"

interface AvatarGroupProps extends StandardProps {
  space?: SpaceBetween
}

export const AvatarGroup: React.FC<AvatarGroupProps> = (props) => {
  const { theme } = React.useContext(ThemeCtx)
  const id = useId()

  const tav = theme?.avatarGroup?.[`${props.componentName}`]

  const cls = content({
    flexbox: {
      flex: true,
      direction: "row"
    },
    spaceBetween: {
      x: tav?.space !== undefined ? tav.space : props.space
    }
  })

  return React.createElement("div",
  {id: `zenbu-avatar-group-${id}`, className: cls},
  props.children)
}

AvatarGroup.defaultProps = {
  space: "-4"
}
