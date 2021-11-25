import { StandardProps } from "@zenbu-ui/core"
import * as React from "react"
import { useContext } from "."

export const ListNested: React.FC<StandardProps> = (props) => {
  const list = useContext

  if (list.type === "decimal") {
    return React.createElement("ol",
    {id: props.id, className: "ordered"},
    props.children)
  }

  return React.createElement("ul",
  {id: props.id, className: "ordered"},
  props.children)
}
