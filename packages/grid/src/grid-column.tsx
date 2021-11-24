import { content, GridSize, ResponsiveProps, StandardProps } from "@zenbu-ui/core";
import * as React from "react"
import { GridCtx } from ".";

export interface GridColumnProps extends StandardProps, ResponsiveProps {
  width?: GridSize
}

export const GridColumn: React.FC<GridColumnProps> = (props) => {
  const grid = React.useContext(GridCtx)

  const cls = content({
    className: props.className,
    model: {
      display: "block",
      width: props.width !== "auto" ? props.width : undefined
    },
    responsive: {
      sm: props.sm,
      md: props.md,
      lg: props.lg,
      xl: props.xl,
      "2xl": props["2xl"]
    },
    flexbox: !grid.autoFlow ? {
      flex: false,
      flexNone: true,
      flexGrow: true,
      flexShrink: true
    } : undefined,
    spacing: {
      px: grid.px,
      py: grid.py,
      pb: grid.pb,
      pl: grid.pl,
      pr: grid.pr,
      pt: grid.pt
    }
  })

  return React.createElement("div",
  {id: props.id, className: cls},
  props.children)
}

GridColumn.defaultProps = {
  width: "auto"
}
