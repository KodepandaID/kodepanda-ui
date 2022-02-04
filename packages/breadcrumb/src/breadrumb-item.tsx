import { base, text } from "@zenbu-ui/core"
import { Icon } from "@zenbu-ui/icon"
import { useId } from "@reach/auto-id"
import * as React from "react"
import { useContext } from "."

export interface BreadcrumbItemProps {
  active?: boolean,
  href: string,
  target?: "_self" | "_blank" | "_parent" | "_top"
}

export const BreadcrumbItem: React.FC<BreadcrumbItemProps> = (props) => {
  const breadcrumb = useContext
  const id = useId()
  const key = useId()

  const clsBase = base({
    flexbox: {
      flex: true,
      direction: "row",
      alignItems: "center"
    }
  })

  const cls = text({
    visualText: {
      dark: breadcrumb.dark ? true : false,
      textColor: props.active ? breadcrumb.activeColor : breadcrumb.color,
      textColorContrast: props.active ? breadcrumb.activeColorContrast : breadcrumb.colorContrast,
      textHoverColor: !props.active ? breadcrumb.colorHover : undefined,
      textHoverColorContrast: !props.active ? breadcrumb.colorHoverContrast : undefined,
      fontSize: breadcrumb.fontSize,
    }
  })

  const clsSeparator = text({
    visualText: {
      dark: breadcrumb.dark ? true : false,
      textColor: breadcrumb.activeColor,
      textColorContrast: breadcrumb.activeColorContrast
    },
    spacing: {
      px: "1"
    }
  })

  return(
    <li
    key={`${breadcrumb.id}-${key}`}
    id={`${breadcrumb.id}-${id}`}
    className={[clsBase, cls].join(" ").trim()}>
      <a
        className={props.active ? "pointer-events-none" : ""}
        href={props.href}
        target={props.target}
        aria-current={props.active ? "page" : undefined}>
        {props.children}
      </a>
      {!props.active && (
        <span className={clsSeparator} aria-hidden="true">
          <Icon icon={breadcrumb.dividerIcon !== undefined ? breadcrumb.dividerIcon : "chevron-right-solid"} height={breadcrumb.dividerHeight} />
        </span>
      )}
    </li>
  )
}

BreadcrumbItem.defaultProps = {
  target: "_self"
}
