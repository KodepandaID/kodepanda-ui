import { StandardProps } from "@zenbu-ui/core"
import * as React from "react"
import { ListCtx } from "."

export const ListNested: React.FC<StandardProps> = (props) => {
  const { type } = React.useContext(ListCtx)

  if (type === "decimal") {
    return React.createElement("ol",
    {id: props.id, className: "ordered"},
    props.children)
  }

  return React.createElement("ul",
  {id: props.id, className: "ordered"},
  props.children)
}
