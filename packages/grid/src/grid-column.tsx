import { base, GridSize, SpacingProps, StandardProps } from "@zenbu-ui/core"
import { useId, useKey } from "@zenbu-ui/react-id"
import * as React from "react"
import { useContext } from "."

export interface GridColumnProps extends StandardProps, SpacingProps {
  nested?: boolean,
  width?: GridSize
}

export const GridColumn: React.FC<GridColumnProps> = (props) => {
  const grid = useContext
  const id = useId(grid.id)
  const key = useKey("grid-column")

  const [hasNested, setHasNested] = React.useState(false)

  const cls = base({
    className: props.className,
    model: {
      display: "block",
      width: "full"
    },
    responsive: props.width !== "full" ? {
      lg: {
        width: props.width
      },
    } : undefined,
    flexbox: {
      flex: (props.nested || hasNested) ? true : false,
      direction: hasNested ? "col" : undefined,
      grow: true,
      gap: (props.nested || hasNested ) ? grid.gap : undefined
    },
    spacing: !props.nested ? {
      px: grid.px,
      py: grid.py,
      pb: grid.pb,
      pl: grid.pl,
      pr: grid.pr,
      pt: grid.pt
    } : undefined
  })

  React.useEffect(() => {
    React.Children.map(props.children, (elm) => {
      const e = elm as React.ReactElement<any>
      if (e.type === GridColumn && e.props.nested) {
        setHasNested(true)
      }
    })
  })

  return React.createElement("div",
  {id: id, key: key, className: [
    cls,
    props.nested ? `flex-col lg:flex-row` : undefined
  ].join(" ").trim()},
  props.children)
}

GridColumn.defaultProps = {
  width: "auto"
}
