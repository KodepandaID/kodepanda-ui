import { StandardProps } from "@zenbu-ui/core"
import { useId } from "@zenbu-ui/react-id"
import * as React from "react"
import { useContext } from "."

export const ListNested: React.FC<StandardProps> = (props) => {
  const list = useContext
  const id = useId(list.id)

  if (list.type === "decimal") {
    return React.createElement("ol",
    {id: id, className: "ordered"},
    props.children)
  }

  return React.createElement("ul",
  {id: id, className: "ordered"},
  props.children)
}
