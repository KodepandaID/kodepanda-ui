import { content, Gap, GridCols, SpacingProps, StandardProps } from "@zenbu-ui/core"
import * as React from "react"
import { GridColumn, GridColumnProps } from "./grid-column"

interface GridProps extends StandardProps, SpacingProps {
  columns?: GridCols,
  gap?: Gap,
  autoFlow?: boolean
}

export const GridCtx = React.createContext<GridProps>({})

export const Grid: React.FC<GridProps> & {
  Column: React.FC<GridColumnProps>
} = (props) => {
  const cls = content({
    className: props.className,
    grid: {
      grid: props.autoFlow ? true : false,
      autoFlow: props.autoFlow ? "flow-col" : undefined
    }
  })

  return(
    <GridCtx.Provider value={{
      autoFlow: props.autoFlow,
      gap: props.gap,
      px: props.px,
      py: props.py,
      pb: props.pb,
      pl: props.pl,
      pr: props.pr,
      pt: props.pt
    }}>
      <div id={props.id} className={[
        !props.autoFlow ? "block" : "",
        !props.autoFlow ? "lg:flex" : "",
        cls,
        props.autoFlow ? `lg:grid-cols-${props.columns}` : "",
        `lg:gap-${props.gap}`,
        `lg:space-y-0`,
        `space-y-${props.gap}`].join(" ").trim()}>
        {props.children}
      </div>
    </GridCtx.Provider>
  )
}

Grid.Column = GridColumn

Grid.defaultProps = {
  columns: "3",
  gap: "4",
  autoFlow: false,
  px: "5",
  py: "3"
}
