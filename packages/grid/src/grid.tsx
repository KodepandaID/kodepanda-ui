import { content, Gap, GridCols, SpacingProps, StandardProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { createContext } from "@zenbu-ui/context"
import { useId } from "@reach/auto-id"
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
  const { theme } = React.useContext(ThemeCtx)
  const id = useId("grid")

  const tg = theme?.grid?.[`${props.componentName}`]

  const [GridProvider, GridContext] = createContext<GridProps>(PROVIDER_NAME, {
    id: id,
    gap: tg?.gap !== undefined ? tg.gap : props.gap,
    px: tg?.px !== undefined ? tg.px : props.px,
    py: tg?.py !== undefined ? tg.py : props.py,
    pb: tg?.pb !== undefined ? tg.pb : props.pb,
    pl: tg?.pl !== undefined ? tg.pl : props.pl,
    pr: tg?.pr !== undefined ? tg.pr : props.pr,
    pt: tg?.pt !== undefined ? tg.pt : props.pt
  })
  useContext = GridContext(PROVIDER_NAME)

  const cls = content({
    flexbox: {
      flex: true
    },
    grid: {
      gap: tg?.gap !== undefined ? tg.gap : props.gap,
      gapX: tg?.gapX !== undefined ? tg.gapX : props.gapX,
      gapY: tg?.gapY !== undefined ? tg.gapY : props.gapY
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
