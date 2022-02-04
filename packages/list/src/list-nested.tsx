import { StandardProps } from "@zenbu-ui/core"
import { useId } from "@reach/auto-id"
import * as React from "react"
import { useContext } from "."
import styled from "styled-components"

export const ListNested: React.FC<StandardProps> = (props) => {
  const list = useContext
  const id = useId()

  if (list.type === "decimal") {
    const OrderedList = styled.ol`
      counter-reset: item;
      > li {
        counter-increment: item;
      }
      > li:before {
        content: counters(item, '.') '. ';
      }
    `
    return(
      <OrderedList id={`${list.id}-${id}`}>{props.children}</OrderedList>
    )
  }

  return React.createElement("ul",
  {id: id}, props.children)
}
