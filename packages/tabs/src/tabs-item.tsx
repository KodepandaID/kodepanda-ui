// Following the tabs guideline WAI-ARIA 1.2
// https://www.w3.org/TR/wai-aria-practices-1.2/examples/tabs/tabs-1/tabs.html

import { AriaProps, base, ColorProps, StandardProps } from "@zenbu-ui/core"
import * as React from "react"
import { useContext } from "."

export interface TabsItemProps extends AriaProps, ColorProps, StandardProps {
  active?: boolean,
  index?: number,
  title: React.ReactNode
}

export const TabsItem: React.FC<TabsItemProps> = (props) => {
  const tabs = useContext

  const cls = base({
    visual: {
      dark: tabs.dark === undefined ? false : tabs.dark,
      bgColor: props.color,
      bgColorContrast: props.colorContrast,
      darkBgColor: props.darkColor,
      darkBgColorContrast: props.darkColorContrast
    },
    spacing: {
      px: tabs.px,
      py: tabs.py,
      pb: tabs.pb,
      pl: tabs.pl,
      pr: tabs.pr,
      pt: tabs.pt
    }
  })

  return(
    <div
    id={props.id}
    className={[
      cls,
      "grow focus:outline-none"
    ].join(" ").trim()}
    role="tabpanel"
    aria-labelledby={`${tabs.id}-${props.index}`}
    hidden={props.active ? true : undefined}>
      {props.children}
    </div>
  )
}
