import { Color, ColorContrast, content, ListStyleType, Size, SpaceBetween, SpacingProps, StandardProps, text, VisualTextProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { createContext } from "@zenbu-ui/context"
import { useId } from "@reach/auto-id"
import * as React from "react"
import styled from "styled-components"
import { ListItem, ListItemProps } from "./list-item"
import { ListNested } from "./list-nested"

const PROVIDER_NAME = "List"

interface ListProps extends StandardProps, VisualTextProps, SpacingProps {
  type?: ListStyleType,
  ordered?: boolean,
  vertical?: boolean,
  horizontal?: boolean,
  separator?: boolean,
  iconHeight?: Size,
  listColor?: Color,
  listColorContrast?: ColorContrast,
  space?: SpaceBetween
}

export let useContext: ListProps
export const List: React.FC<ListProps> & {
  Item: React.FC<ListItemProps>,
  Nested: React.FC<StandardProps>
} = (props) => {
  const { dark, theme } = React.useContext(ThemeCtx)
  const id = useId()

  const tl = theme?.list?.[`${props.componentName}`]

  const cls = content({
    model: (tl?.horizontal || (props.horizontal && tl?.horizontal === undefined)) ? {
      display: "inline-flex"
    } : undefined,
    spaceBetween: {
      x: ((tl?.horizontal && tl.space === "0") || (props.horizontal && props.space === "0" && tl?.horizontal === undefined)) ? "2" : ((tl?.horizontal && tl.space !== "0") || (props.horizontal && props.space !== "0" && tl?.horizontal === undefined)) ? tl?.space !== undefined ? tl.space : props.space : undefined,
      y: (tl?.vertical && tl.space !== undefined) ? tl.space : props.vertical ? props.space : undefined
    }
  })

  const clsList = text({
    visualText: {
      dark: dark,
      listStylePosition: ((props.type !== undefined && tl?.type === undefined) || tl?.type !== undefined) ? "inside" : undefined,
      listType: tl?.type !== undefined ? tl.type : props.type,
      listColor: tl?.listColor !== undefined ? tl.listColor : props.listColor,
      listColorContrast: tl?.listColorContrast !== undefined ? tl.listColorContrast : props.listColorContrast
    },
    misc: (props.separator && tl?.separator === undefined) ? {
      divideX: props.horizontal ? "normal" : undefined,
      divideY: !props.horizontal ? "normal" : undefined
    } : tl?.separator ? {
      divideX: tl?.horizontal ? "normal" : undefined,
      divideY: !tl?.horizontal ? "normal" : undefined
    } : undefined
  })

  const [ListProvider, ListContext] = createContext<ListProps>(PROVIDER_NAME, {
    id: `zenbu-list-${id}`,
    dark: dark,
    className: [cls, clsList].join(" ").trim(),
    type: tl?.type !== undefined ? tl.type : props.type,
    horizontal: tl?.horizontal !== undefined ? tl.horizontal : props.horizontal,
    separator: tl?.separator !== undefined ? tl.separator : props.separator,
    iconHeight: tl?.iconHeight !== undefined ? tl.iconHeight : props.iconHeight,
    textColor: tl?.textColor !== undefined ? tl.textColor : props.textColor,
    textColorContrast: tl?.textColorContrast !== undefined ? tl.textColorContrast : props.textColorContrast,
    darkTextColor: tl?.darkTextColor !== undefined ? tl.darkTextColor : props.darkTextColor,
    darkTextColorContrast: tl?.darkTextColorContrast !== undefined ? tl.darkTextColorContrast : props.darkTextColorContrast,
    darkTextColorHover: tl?.darkTextColorHover !== undefined ? tl.darkTextColorHover : props.darkTextColorHover,
    darkTextColorHoverContrast: tl?.darkTextColorHoverContrast !== undefined ? tl.darkTextColorHoverContrast : props.darkTextColorHoverContrast,
    fontSize: tl?.fontSize !== undefined ? tl.fontSize : props.fontSize
  })
  useContext = ListContext(PROVIDER_NAME)

  const OrderedList = styled.ol`
    > li {
      counter-increment: item;
    }
  `

  return(
    <ListProvider>
      {((props.type !== "decimal" && tl?.type === undefined) || (tl?.type !== undefined && tl?.type !== "decimal")) ? (
        <ul id={`zenbu-list-${id}`} className={[cls, clsList].join(" ").trim()}>
          {props.children}
        </ul>
      ) : (
        <OrderedList id={`zenbu-list-${id}`} className={[cls, clsList].join(" ").trim()}>
          {props.children}
        </OrderedList>
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
  listColorContrast: "600",
  space: "0"
}
