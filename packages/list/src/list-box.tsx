import { base, Color, ColorContrast, content, SpaceBetween, SpacingProps, StandardProps, TextProps, VisualProps } from "@zenbu-ui/core";
import { ThemeCtx } from "@zenbu-ui/provider";
import * as React from "react"

export interface ListBoxProps extends StandardProps, VisualProps, TextProps, SpacingProps {
  vertical?: boolean,
  horizontal?: boolean,
  separator?: boolean,
  textColor?: Color,
  textColorContrast?: ColorContrast,
  textActiveColor?: Color,
  textActiveColorContrast?: ColorContrast,
  bgActiveColor?: Color,
  bgActiveColorContrast?: ColorContrast,
  darkBgActiveColor?: Color,
  darkBgActiveColorContrast?: ColorContrast,
  space?: SpaceBetween
}

export const ListBoxCtx = React.createContext<ListBoxProps>({})

export const ListBox: React.FC<ListBoxProps> = (props) => {
  const { dark } = React.useContext(ThemeCtx)

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
    <ListBoxCtx.Provider value={{
      id: "list-box",
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
    }}>
      <div id={props.id} role="list" className={[cls, clsElm].join(" ").trim()}>
        {props.children}
      </div>
    </ListBoxCtx.Provider>
  )
}

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
