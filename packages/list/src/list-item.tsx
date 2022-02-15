import { base, Size, StandardProps, text } from "@zenbu-ui/core"
import { Icon, Outline, Solid } from "@zenbu-ui/icon"
import { useId } from "@reach/auto-id"
import * as React from "react"
import { useContext } from "."
import { ListNested } from "./list-nested"

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
  const id = useId()

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
      textColor: list.textColor !== undefined ? list.textColor : "blue",
      textColorContrast: list.textColorContrast !== undefined ? list.textColorContrast : "600",
      darkTextColor: list.dark ? list.darkTextColor : undefined,
      darkTextColorContrast: list.dark ? list.darkTextColorContrast : undefined,
      textHoverColor: list.textColorHover !== undefined ? list.textColorHover : "blue",
      textHoverColorContrast: list.textColorHoverContrast !== undefined ? list.textColorHoverContrast : "700",
      darkTextHoverColor: list.dark ? list.darkTextColorHover : undefined,
      darkTextHoverColorContrast: list.dark ? list.darkTextColorHoverContrast : undefined,
    },
    misc: {
      cursor: props.disabled ? "not-allowed" : "pointer",
      opacity: props.disabled ? "25" : undefined
    }
  })

  const ListElm = () => {
    return(
      <>
        {(props.children !== undefined && props.header === undefined) && (
          <div key={`${list.id}-${id}`} className={[cls, "space-x-2"].join(" ").trim()}>
            {props.icon !== undefined && (
              <Icon icon={props.icon} height={list.iconHeight} color={list.textColor} colorContrast={list.textColorContrast} />
            )}
            <span className={clsText}>{props.children}</span>
          </div>
        )}
        {props.header !== undefined && (
          <div key={`${list.id}-${id}`} className={[cls, "space-x-2"].join(" ").trim()}>
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
      </>
    )
  }

  return(
    <li
    id={`${list.id}-${id}`}
    key={`${list.id}-${id}`}
    className={[clsText, clsLI].join(" ").trim()}>
      {props.link === undefined ? (<ListElm />) : (
        <>
          <a className={[cls, clsLink, clsText].join(" ")} href={props.link} target={props.target}>
            {(props.children !== undefined && props.header === undefined) && (
              <>
                {props.icon !== undefined && (
                  <Icon icon={props.icon} height={list.iconHeight} color={list.textColor} colorContrast={list.textColorContrast} />
                )}
                {React.Children.map(props.children, (elm) => {
                  const e = elm as React.ReactElement<any>
                  if (e !== null && e.type !== ListNested) {
                    return(e)
                  }
                })}
              </>
            )}

            {props.header !== undefined && (
              <>
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
              </>
            )}
          </a>

          {React.Children.map(props.children, (elm) => {
            const e = elm as React.ReactElement<any>
            if (e !== null && e.type === ListNested) {
              return(e)
            }
          })}
        </>
      )}
    </li>
  )
}

ListItem.defaultProps = {
  target: "_blank"
}
