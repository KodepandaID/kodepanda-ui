import { base, Size, StandardProps, text } from "@zenbu-ui/core"
import { Icon, Outline, Solid } from "@zenbu-ui/icon"
import { useKey } from "@zenbu-ui/react-id"
import * as React from "react"
import { useContext } from "."
import { useBoxContext } from "./list-box"

export interface ListItemProps extends StandardProps {
  active?: boolean,
  disabled?: boolean,
  icon?: Outline | Solid,
  iconSVG?: React.ReactNode,
  iconHeight?: Size,
  link?: string,
  target?: "_self" | "_blank" | "_parent" | "_top"
  header?: React.ReactNode,
  subHeader?: React.ReactNode,
  onClick?: () => void
}

export const ListItem: React.FC<ListItemProps> = (props) => {
  const list = useContext
  const listBox = useBoxContext
  const key = useKey("list")

  const cls = base({
    model: {
      display: "inline-flex"
    },
    spacing: {
      pt: list.separator ? "2" : undefined,
      pl: (list.horizontal && list.separator) ? "2" : undefined
    }
  })

  const clsLI = base({
    flexbox: {
      flex: false,
      alignItems: "center",
      justify: "center",
      verticalAlign: "middle"
    }
  })

  const clsText = text({
    visualText: {
      dark: list.dark === undefined ? false : list.dark,
      textColor: props.link === undefined ? list.textColor : undefined,
      textColorContrast:  props.link === undefined ? list.textColorContrast : undefined,
      darkTextColor: list.dark ? list.darkTextColor : undefined,
      darkTextColorContrast: list.dark ? list.darkTextColorContrast : undefined,
      fontSize: list.fontSize
    }
  })

  const clsLink = text({
    visualText: {
      dark: list.dark === undefined ? false : list.dark,
      textColor: "blue",
      textColorContrast: "600",
      darkTextColor: list.dark ? list.darkTextColor : undefined,
      darkTextColorContrast: list.dark ? list.darkTextColorContrast : undefined,
      textHoverColor: "blue",
      textHoverColorContrast: "700",
      darkTextHoverColor: list.dark ? list.darkTextColorHover : undefined,
      darkTextHoverColorContrast: list.dark ? list.darkTextColorHoverContrast : undefined,
    },
    misc: {
      cursor: props.disabled ? "not-allowed" : "pointer",
      opacity: props.disabled ? "25" : undefined
    }
  })

  const listElm = (
    <React.Fragment>
      {(props.children !== undefined && props.header === undefined) && (
        <div key={key} className={[cls, "space-x-2"].join(" ").trim()}>
          {props.icon !== undefined && (
            <Icon icon={props.icon} height={list.iconHeight} color={list.textColor} colorContrast={list.textColorContrast} />
          )}
          <span className={clsText}>{props.children}</span>
        </div>
      )}
      {props.header !== undefined && (
        <div key={key} className={[cls, "space-x-2"].join(" ").trim()}>
          {props.icon !== undefined && (
            <Icon icon={props.icon} height={list.iconHeight} color={list.textColor} colorContrast={list.textColorContrast} />
          )}
          {props.iconSVG !== undefined && (props.iconSVG)}

          <span className="flex flex-col">
            <strong className="font-bold">{props.header}</strong>
            {props.subHeader !== undefined && (
              <span className="font-light">{props.subHeader}</span>
            )}
          </span>
        </div>
      )}
    </React.Fragment>
  )

  if (listBox !== undefined) {
    const cls = base({
      positioning: {
        position: "relative",
        zIndex: props.active ? "10" : undefined
      },
      model: {
        display: "block",
      },
      visual: {
        dark: false,
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
        borderColorContrast: (listBox.border && listBox.space !== undefined) ? 200 : undefined,
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
      id={props.id}
      key={key}
      role="listitem"
      aria-current={props.active ? true : undefined}
      className={[cls, clsText].join(" ").trim()}>
        {props.children}
      </div>
    )
  }

  return(
    <li
    id={props.id}
    key={key}
    className={[clsText, clsLI].join(" ").trim()}>
      {props.link === undefined ? (listElm) : (
        <a className={clsLink} href={props.link} target={props.target}>
          {listElm}
        </a>
      )}
    </li>
  )
}

ListItem.defaultProps = {
  target: "_blank"
}
