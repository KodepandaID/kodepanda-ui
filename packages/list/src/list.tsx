import { Color, ColorContrast, content, FontSize, ListStyleType, Size, SpaceBetween, SpacingProps, StandardProps, text, TextProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { createContext } from "@zenbu-ui/react-id"
import * as React from "react"
import { ListItem, ListItemProps } from "./list-item"
import { ListNested } from "./list-nested"

const PROVIDER_NAME = "List"

interface ListProps extends StandardProps, TextProps, SpacingProps {
  type?: ListStyleType,
  vertical?: boolean,
  horizontal?: boolean,
  separator?: boolean,
  iconHeight?: Size,
  textColor?: Color,
  textColorContrast?: ColorContrast,
  darkTextColor?: Color,
  darkTextColorContrast?: ColorContrast,
  darkTextColorHover?: Color,
  darkTextColorHoverContrast?: ColorContrast,
  fontSize?: FontSize,
  space?: SpaceBetween
}

export let useContext: ListProps
export const List: React.FC<ListProps> & {
  Item: React.FC<ListItemProps>,
  Nested: React.FC<StandardProps>
} = (props) => {
  const { dark } = React.useContext(ThemeCtx)

  const cls = content({
    className: props.className,
    model: props.horizontal ? {
      display: "inline-flex"
    } : undefined,
    spaceBetween: {
      x: (props.horizontal && props.space === "0") ? "2" : (props.horizontal && props.space !== "0") ? props.space : undefined,
      y: props.vertical ? props.space : undefined
    }
  })

  const clsList = text({
    visualText: {
      dark: dark,
      listStylePosition: props.type !== undefined ? "inside" : undefined,
      listType: props.type,
    },
    misc: props.separator ? {
      divideX: props.horizontal ? "normal" : undefined,
      divideY: !props.horizontal ? "normal" : undefined
    } : undefined
  })

  const [ListProvider, ListContext] = createContext<ListProps>(PROVIDER_NAME, {
    dark: dark,
    className: [cls, clsList].join(" ").trim(),
    type: props.type,
    horizontal: props.horizontal,
    separator: props.separator,
    iconHeight: props.iconHeight,
    textColor: props.textColor,
    textColorContrast: props.textColorContrast,
    darkTextColor: props.darkTextColor,
    darkTextColorContrast: props.darkTextColorContrast,
    darkTextColorHover: props.darkTextColorHover,
    darkTextColorHoverContrast: props.darkTextColorHoverContrast,
    fontSize: props.fontSize
  })
  useContext = ListContext(PROVIDER_NAME)

  return(
    <ListProvider>
      {props.type !== "decimal" ? (
        <ul id={props.id} className={["list", cls, clsList].join(" ").trim()}>
          {props.children}
        </ul>
      ) : (
        <ol id={props.id} className={["list", cls, clsList].join(" ").trim()}>
          {props.children}
        </ol>
      )}
    </ListProvider>
  )
}

List.Item = ListItem
List.Nested = ListNested

List.defaultProps = {
  type: "none",
  vertical: true,
  horizontal: false,
  separator: false,
  iconHeight: "5",
  textColor: "black",
  fontSize: "sm",
  border: false,
  space: "0"
}
