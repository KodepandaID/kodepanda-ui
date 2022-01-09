import { content, Gap, GridCols, SpacingProps, StandardProps } from "@zenbu-ui/core"
import { createContext, useId } from "@zenbu-ui/react-id"
import * as React from "react"
import { GridColumn, GridColumnProps } from "./grid-column"

const PROVIDER_NAME = "Grid"

interface GridProps extends StandardProps, SpacingProps {
  columns?: GridCols,
  gap?: Gap,
  autoFlow?: boolean
}

export let useContext: GridProps
export const Grid: React.FC<GridProps> & {
  Column: React.FC<GridColumnProps>
} = (props) => {
  const id = useId("grid")

  const [GridProvider, GridContext] = createContext<GridProps>(PROVIDER_NAME, {
    id: id,
    autoFlow: props.autoFlow,
    gap: props.gap,
    px: props.px,
    py: props.py,
    pb: props.pb,
    pl: props.pl,
    pr: props.pr,
    pt: props.pt
  })
  useContext = GridContext(PROVIDER_NAME)

  const cls = content({
    className: props.className,
    grid: {
      grid: props.autoFlow ? true : false,
      autoFlow: props.autoFlow ? "flow-col" : undefined
    }
  })

  return(
    <GridProvider>
      <div id={id} className={[
        !props.autoFlow ? "block" : "",
        !props.autoFlow ? "lg:flex" : "",
        cls,
        props.autoFlow ? `lg:grid-cols-${props.columns}` : "",
        `lg:gap-${props.gap}`,
        `lg:space-y-0`,
        `space-y-${props.gap}`].join(" ").trim()}>
        {props.children}
      </div>
    </GridProvider>
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
