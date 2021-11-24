import { content, GridSize, ResponsiveProps, SpacingProps, StandardProps } from "@zenbu-ui/core";
import * as React from "react"
import { GridCtx } from ".";

export interface GridColumnProps extends StandardProps, ResponsiveProps, SpacingProps {
  nested?: boolean,
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
    spacing: !props.nested ? {
      px: grid.px,
      py: grid.py,
      pb: grid.pb,
      pl: grid.pl,
      pr: grid.pr,
      pt: grid.pt
    } : undefined
  })

  if (props.nested) {
    const clsSpacing = content({
      spacing: {
        px: props.px,
        py: props.py,
        pb: props.pb,
        pl: props.pl,
        pr: props.pr,
        pt: props.pt
      },
    })
    return(
      <div id={props.id} className={[
        "lg:flex",
        cls,
        `lg:gap-${grid.gap}`,
        `lg:space-y-0`,
        `space-y-${grid.gap}`,
        clsSpacing].join(" ").trim()}>
        {props.children}
      </div>
    )
  }

  return React.createElement("div",
  {id: props.id, className: cls},
  props.children)
}

GridColumn.defaultProps = {
  width: "auto"
}
