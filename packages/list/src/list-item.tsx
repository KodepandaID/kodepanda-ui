import { base, Size, StandardProps, text } from "@zenbu-ui/core"
import { Icon, Outline, Solid } from "@zenbu-ui/icon"
import { useId, useKey } from "@zenbu-ui/react-id"
import * as React from "react"
import { useContext } from "."

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
  const id = useId(list.id)
  const key = useKey("list-item")

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

  return(
    <li
    id={id}
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
