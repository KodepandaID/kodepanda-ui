import { content, StandardProps } from "@zenbu-ui/core"
import { useId } from "@reach/auto-id"
import * as React from "react"
import { useContext } from "."
import { css } from "@emotion/css"

export const ListNested: React.FC<StandardProps> = (props) => {
  const list = useContext
  const id = useId()

  const cls = content({
    spaceBetween: {
      x: (list.horizontal && list.space === "0") ? "2" : list.horizontal ? list.space : undefined,
      y: (!list.horizontal && list.space === "0") ? "2" : !list.horizontal ? list.space : undefined,
    },
    spacing: {
      mt: list.space
    }
  })

  if (list.type === "decimal") {
    return(
      <ol id={`${list.id}-${id}`} className={[
        css`
        counter-reset: item;
        > li {
          counter-increment: item;
        }
        > li:before {
          content: counters(item, '.') '. ';
        }`,
        cls
      ].join(" ")}>{props.children}</ol>
    )
  }

  return React.createElement("ul",
  {id: id, className: cls}, props.children)
}
