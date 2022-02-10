import { base, text } from "@zenbu-ui/core"
import { useId } from "@reach/auto-id"
import * as React from "react"
import { useBoxContext } from "."
import { ListItemProps } from "./list-item"

export const ListItemBox: React.FC<ListItemProps> = (props) => {
  const listBox = useBoxContext
  const id = useId()

  const cls = base({
    positioning: {
      position: "relative",
      zIndex: props.active ? "10" : undefined
    },
    model: {
      display: "block",
    },
    visual: {
      dark: listBox.dark === undefined ? false : listBox.dark,
      bgColor: props.active ? listBox.bgActiveColor : listBox.bgColor,
      bgColorContrast: props.active ? listBox.bgActiveColorContrast : listBox.bgColorContrast,
      darkBgColor: (props.active && listBox.dark) ? listBox.darkBgActiveColor : undefined,
      darkBgColorContrast: (props.active && listBox.dark) ? listBox.darkBgActiveColorContrast : undefined,
      bgHoverColor: !props.active ? listBox.bgColorHover : undefined,
      bgHoverColorContrast: !props.active ? listBox.bgColorHoverContrast : undefined,
      darkBgHoverColor: (props.active && listBox.dark) ? listBox.darkBgColorHover : undefined,
      darkBgHoverColorContrast: (props.active && listBox.dark) ? listBox.darkBgColorHoverContrast : undefined,
      borderWidth: (listBox.border && listBox.space !== undefined) ? "normal" : undefined,
      borderStyle: (listBox.border && listBox.space !== undefined) ? "solid" : undefined,
      borderColor: (listBox.border && listBox.space !== undefined) ? "gray" : undefined,
      borderColorContrast: (listBox.border && listBox.space !== undefined) ? "200" : undefined,
      borderRadius: listBox.space !== undefined ? listBox.rounded : undefined,
      divideColor: (listBox.border && listBox.space !== undefined) ? listBox.borderColor : undefined,
      divideColorContrast: (listBox.border && listBox.space !== undefined) ? listBox.borderColorContrast : undefined
    },
    spacing: {
      px: listBox.px,
      py: listBox.py
    }
  })

  const clsText = text({
    visualText: {
      dark: false,
      textColor: props.active ? listBox.textActiveColor : listBox.textColor,
      textColorContrast: props.active ? listBox.textActiveColorContrast : listBox.textColorContrast
    }
  })

  return(
    <div
    id={`${listBox.id}-${id}`}
    key={`${listBox.id}-${id}`}
    role="listitem"
    aria-current={props.active ? true : undefined}
    className={[cls, clsText].join(" ").trim()}>
      {props.children}
    </div>
  )
}
