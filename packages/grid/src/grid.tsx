import { content, Gap, GridCols, SpacingProps, StandardProps } from "@zenbu-ui/core"
import { createContext, useId } from "@zenbu-ui/react-id"
import * as React from "react"
import { GridColumn, GridColumnProps } from "./grid-column"

const PROVIDER_NAME = "Grid"

interface GridProps extends StandardProps, SpacingProps {
  columns?: GridCols,
  gap?: Gap,
  gapX?: Gap,
  gapY?: Gap
}

export let useContext: GridProps
export const Grid: React.FC<GridProps> & {
  Column: React.FC<GridColumnProps>
} = (props) => {
  const id = useId("grid")

  const [GridProvider, GridContext] = createContext<GridProps>(PROVIDER_NAME, {
    id: id,
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
    flexbox: {
      flex: true
    },
    grid: {
      gap: props.gap,
      gapX: props.gapX,
      gapY: props.gapY
    }
  })

  return(
    <GridProvider>
      <div id={id} className={[
        cls,
        `flex-col lg:flex-row`
      ].join(" ").trim()}>
        {props.children}
      </div>
    </GridProvider>
  )
}

Grid.Column = GridColumn

Grid.defaultProps = {
  columns: "3",
  gap: "4",
  px: "5",
  py: "3"
}
