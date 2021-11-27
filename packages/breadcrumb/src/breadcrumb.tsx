// Following the breadcrumb guideline WAI-ARIA 1.2
// https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/breadcrumb/

import { base, Color, ColorContrast, Size, SpacingProps, StandardProps, text, TextProps } from "@zenbu-ui/core"
import { Outline, Solid } from "@zenbu-ui/icon"
import { ThemeCtx } from "@zenbu-ui/provider"
import { createContext } from "@zenbu-ui/react-id"
import * as React from "react"
import { BreadcrumbItem, BreadcrumbItemProps } from "./breadrumb-item"

const PROVIDER_NAME = "Breadcrumb"

interface BreadcrumbProps extends StandardProps, TextProps, SpacingProps {
  dividerIcon?: Outline | Solid,
  dividerHeight?: Size,
  activeColor?: Color,
  activeColorContrast?: ColorContrast,
  darkActiveColor?: Color,
  darkActiveColorContrast?: ColorContrast
}

export let useContext: BreadcrumbProps
export const Breadcrumb: React.FC<BreadcrumbProps> & {
  Item: React.FC<BreadcrumbItemProps>
} = (props) => {
  const { dark } = React.useContext(ThemeCtx)

  const cls = base({
    className: props.className,
    flexbox: {
      flex: true,
      wrap: "wrap"
    }
  })

  const clsText = text({
    visualText: {
      dark: dark,
      lineHeight: "relaxed",
      listType: "none"
    },
    spacing: {
      mx: props.mx,
      my: props.my,
      mb: props.mb,
      ml: props.ml,
      mr: props.mr,
      mt: props.mt,
      px: props.px,
      py: props.py,
      pb: props.pb,
      pl: props.pl,
      pr: props.pr,
      pt: props.pt
    }
  })

  const [BreadcrumbProvider, BreadcrumbContext] = createContext<BreadcrumbProps>(PROVIDER_NAME, {
    dark: dark,
    dividerIcon: props.dividerIcon,
    dividerHeight: props.dividerHeight,
    color: props.color,
    colorContrast: props.colorContrast,
    colorHover: props.colorHover,
    colorHoverContrast: props.colorHoverContrast,
    darkColor: props.darkColor,
    darkColorContrast: props.darkColorContrast,
    darkColorHover: props.darkColorHover,
    darkColorHoverContrast: props.darkColorHoverContrast,
    activeColor: props.activeColor,
    activeColorContrast: props.activeColorContrast,
    darkActiveColor: props.darkActiveColor,
    darkActiveColorContrast: props.darkActiveColorContrast,
    fontSize: props.fontSize
  })
  useContext = BreadcrumbContext(PROVIDER_NAME)

  return(
    <BreadcrumbProvider>
      <nav id={props.id} aria-label="Breadcrumb">
        <ol className={[cls, clsText].join(" ").trim()}>
          {props.children}
        </ol>
      </nav>
    </BreadcrumbProvider>
  )
}

Breadcrumb.Item = BreadcrumbItem

Breadcrumb.defaultProps = {
  dividerIcon: "chevron-right-solid",
  dividerHeight: "3",
  color: "blue",
  colorContrast: "500",
  colorHover: "blue",
  colorHoverContrast: "600",
  activeColor: "gray",
  activeColorContrast: "500",
  fontSize: "sm"
}
