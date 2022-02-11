import { base, Color, ColorContrast, content, ResponsiveProps, SpaceBetween, SpacingProps, StandardProps, VisualTextProps, VisualProps, ModelProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { createContext } from "@zenbu-ui/context"
import { useId } from "@reach/auto-id"
import * as React from "react"
import { ListItemProps } from "./list-item"
import { ListItemBox } from "./list-item-box"

const PROVIDER_NAME = "ListBox"

export interface ListBoxProps extends StandardProps, ModelProps, ResponsiveProps, VisualProps, VisualTextProps, SpacingProps {
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
  const { dark, theme } = React.useContext(ThemeCtx)
  const id = useId()

  const tl = theme?.listBox?.[`${props.componentName}`]

  const [ListBoxProvider, ListBoxContext] = createContext<ListBoxProps>(PROVIDER_NAME, {
    id: `list-box-${id}`,
    dark: dark,
    vertical: tl?.vertical !== undefined ? tl.vertical : props.vertical,
    horizontal: tl?.horizontal !== undefined ? tl.horizontal : props.horizontal,
    separator: tl?.separator !== undefined ? tl.separator : props.separator,
    textColor: tl?.textColor !== undefined ? tl.textColor : props.textColor,
    textColorContrast: tl?.textColorContrast !== undefined ? tl.textColorContrast : props.textColorContrast,
    textActiveColor: tl?.textActiveColor !== undefined ? tl.textActiveColor : props.textActiveColor,
    textActiveColorContrast: tl?.textActiveColorContrast !== undefined ? tl.textActiveColorContrast : props.textActiveColorContrast,
    bgColor: tl?.bgColor !== undefined ? tl.bgColor : props.bgColor,
    bgColorContrast: tl?.bgColorContrast !== undefined ? tl.bgColorContrast : props.bgColorContrast,
    darkBgColor: tl?.darkBgColor !== undefined ? tl.darkBgColor : props.darkBgColor,
    darkBgColorContrast: tl?.darkBgColorContrast !== undefined ? tl.darkBgColorContrast : props.darkBgColorContrast,
    bgColorHover: tl?.bgColorHover !== undefined ? tl.bgColorHover : props.bgColorHover,
    bgColorHoverContrast: tl?.bgColorHoverContrast !== undefined ? tl.bgColorHoverContrast : props.bgColorHoverContrast,
    darkBgColorHover: tl?.darkBgColorHover !== undefined ? tl.darkBgColorHover : props.darkBgColorHover,
    darkBgColorHoverContrast: tl?.darkBgColorHoverContrast !== undefined ? tl.darkBgColorHoverContrast : props.darkBgColorHoverContrast,
    bgActiveColor: tl?.bgActiveColor !== undefined ? tl.bgActiveColor : props.bgActiveColor,
    bgActiveColorContrast: tl?.bgActiveColorContrast !== undefined ? tl.bgActiveColorContrast : props.bgActiveColorContrast,
    darkBgActiveColor: tl?.darkBgActiveColor !== undefined ? tl.darkBgActiveColor : props.darkBgActiveColor,
    darkBgActiveColorContrast: tl?.darkBgActiveColorContrast !== undefined ? tl.darkBgActiveColorContrast : props.darkBgActiveColorContrast,
    space: tl?.space !== undefined ? tl.space : props.space,
    border: tl?.border !== undefined ? tl.border : props.border,
    borderWidth: tl?.borderWidth !== undefined ? tl.borderWidth : props.borderWidth,
    borderStyle: tl?.borderStyle !== undefined ? tl.borderStyle : props.borderStyle,
    borderColor: tl?.borderColor !== undefined ? tl.borderColor : props.borderColor,
    borderColorContrast: tl?.borderColorContrast !== undefined ? tl.borderColorContrast : props.borderColorContrast,
    rounded: tl?.rounded !== undefined ? tl.rounded : props.rounded,
    px: tl?.px !== undefined ? tl.px : props.px,
    py: tl?.py !== undefined ? tl.py : props.py
  })
  useBoxContext = ListBoxContext(PROVIDER_NAME)

  const cls = base({
    model: {
      width: props.width,
      overflow: "hidden"
    },
    flexbox: {
      flex: true,
      direction: (tl?.horizontal || (props.horizontal && tl?.horizontal === undefined)) ? "row" : "col"
    },
    responsive: {
      sm: props.sm,
      md: props.md,
      lg: props.lg,
      xl: props.xl,
      "2xl": props["2xl"]
    },
    visual: {
      dark: false,
      borderWidth: (tl?.border && tl?.space === undefined) ? "normal" : (props.border && tl?.border === undefined && props.space === undefined) ? "normal" : undefined,
      borderStyle: (tl?.border && tl?.space === undefined) ? "solid" : (props.border && tl?.border === undefined && props.space === undefined) ? "solid" : undefined,
      borderColor: (tl?.border && tl?.space === undefined) ? "gray" : (props.border && tl?.border === undefined && props.space === undefined) ? "gray" : undefined,
      borderColorContrast: (tl?.border && tl?.space === undefined) ? "200" : (props.border && tl?.border === undefined && props.space === undefined) ? 200 : undefined,
      borderRadius: (tl?.space === undefined && tl?.rounded !== undefined) ? tl.rounded : props.space === undefined ? props.rounded : undefined,
      divideColor: (tl?.border && tl?.space === undefined && tl.borderColor !== undefined) ? tl.borderColor : (props.border && tl?.border === undefined && props.space === undefined) ? props.borderColor : undefined,
      divideColorContrast: (tl?.border && tl?.space === undefined && tl.borderColorContrast !== undefined) ? tl.borderColorContrast : (props.border && tl?.border === undefined && props.space === undefined) ? props.borderColorContrast : undefined
    },
    misc: (props.border && props.space === undefined && tl?.border === undefined) ? {
      divideX: props.horizontal ? "normal" : undefined,
      divideY: !props.horizontal ? "normal" : undefined,
    } : tl?.border ? {
      divideX: tl?.horizontal ? "normal" : undefined,
      divideY: !tl?.horizontal ? "normal" : undefined,
    } : undefined
  })

  const clsElm = content({
    spaceBetween: (props.space !== undefined && tl?.space === undefined) ? {
      x: props.horizontal ? props.space : undefined,
      y: !props.horizontal ? props.space : undefined
    } : tl?.space !== undefined ? {
      x: tl.horizontal ? tl.space : undefined,
      y: !tl.horizontal ? tl.space : undefined
    } : undefined
  })

  return(
    <ListBoxProvider>
      <div id={`list-box-${id}`} role="list" className={[cls, clsElm].join(" ").trim()}>
        {props.children}
      </div>
    </ListBoxProvider>
  )
}

ListBox.Item = ListItemBox

ListBox.defaultProps = {
  width: "max",
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
