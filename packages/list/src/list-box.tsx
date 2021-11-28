import { base, Color, ColorContrast, content, SpaceBetween, SpacingProps, StandardProps, VisualTextProps, VisualProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { createContext } from "@zenbu-ui/react-id"
import * as React from "react"
import { ListItemProps } from "./list-item"
import { ListItemBox } from "./list-item-box"

const PROVIDER_NAME = "ListBox"

export interface ListBoxProps extends StandardProps, VisualProps, VisualTextProps, SpacingProps {
  vertical?: boolean,
  horizontal?: boolean,
  separator?: boolean,
  textActiveColor?: Color,
  textActiveColorContrast?: ColorContrast,
  bgActiveColor?: Color,
  bgActiveColorContrast?: ColorContrast,
  darkBgActiveColor?: Color,
  darkBgActiveColorContrast?: ColorContrast,
  space?: SpaceBetween
}

export let useBoxContext: ListBoxProps
export const ListBox: React.FC<ListBoxProps> & {
  Item: React.FC<ListItemProps>
} = (props) => {
  const { dark } = React.useContext(ThemeCtx)
  const [ListBoxProvider, ListBoxContext] = createContext<ListBoxProps>(PROVIDER_NAME, {
    dark: dark,
    vertical: props.vertical,
    horizontal: props.horizontal,
    separator: props.separator,
    textColor: props.textColor,
    textColorContrast: props.textColorContrast,
    textActiveColor: props.textActiveColor,
    textActiveColorContrast: props.textActiveColorContrast,
    bgColor: props.bgColor,
    bgColorContrast: props.bgColorContrast,
    darkBgColor: props.darkBgColor,
    darkBgColorContrast: props.darkBgColorContrast,
    bgColorHover: props.bgColorHover,
    bgColorHoverContrast: props.bgColorHoverContrast,
    bgActiveColor: props.bgActiveColor,
    bgActiveColorContrast: props.bgActiveColorContrast,
    darkBgActiveColor: props.darkBgActiveColor,
    darkBgActiveColorContrast: props.darkBgActiveColorContrast,
    space: props.space,
    border: props.border,
    borderWidth: props.borderWidth,
    borderStyle: props.borderStyle,
    borderColor: props.borderColor,
    borderColorContrast: props.borderColorContrast,
    rounded: props.rounded,
    px: props.px,
    py: props.py
  })
  useBoxContext = ListBoxContext(PROVIDER_NAME)

  const cls = base({
    model: {
      width: "max",
      overflow: "hidden"
    },
    flexbox: {
      flex: true,
      direction: props.horizontal ? "row" : "col"
    },
    visual: {
      dark: false,
      borderWidth: (props.border && props.space === undefined) ? "normal" : undefined,
      borderStyle: (props.border && props.space === undefined) ? "solid" : undefined,
      borderColor: (props.border && props.space === undefined) ? "gray" : undefined,
      borderColorContrast: (props.border && props.space === undefined) ? 200 : undefined,
      borderRadius: props.space === undefined ? props.rounded : undefined,
      divideColor: (props.border && props.space === undefined) ? props.borderColor : undefined,
      divideColorContrast: (props.border && props.space === undefined) ? props.borderColorContrast : undefined
    },
    misc: (props.border && props.space === undefined) ? {
      divideX: props.horizontal ? "normal" : undefined,
      divideY: !props.horizontal ? "normal" : undefined,
    } : undefined
  })

  const clsElm = content({
    spaceBetween: props.space !== undefined ? {
      x: props.horizontal ? props.space : undefined,
      y: !props.horizontal ? props.space : undefined
    } : undefined
  })

  return(
    <ListBoxProvider>
      <div id={props.id} role="list" className={[cls, clsElm].join(" ").trim()}>
        {props.children}
      </div>
    </ListBoxProvider>
  )
}

ListBox.Item = ListItemBox

ListBox.defaultProps = {
  vertical: true,
  horizontal: false,
  separator: false,
  bgColor: "white",
  bgColorHover: "gray",
  bgColorHoverContrast: "100",
  bgActiveColor: "blue",
  bgActiveColorContrast: "500",
  border: true,
  rounded: "md",
  px: "4",
  py: "3"
}
