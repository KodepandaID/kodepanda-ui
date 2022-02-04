// Following the breadcrumb guideline WAI-ARIA 1.2
// https://www.w3.org/TR/2019/WD-wai-aria-practices-1.2-20191218/examples/breadcrumb/

import { base, Color, ColorContrast, ColorProps, Size, SpacingProps, StandardProps, text, VisualTextProps } from "@zenbu-ui/core"
import { Outline, Solid } from "@zenbu-ui/icon"
import { ThemeCtx } from "@zenbu-ui/provider"
import { createContext } from "@zenbu-ui/context"
import { useId } from "@reach/auto-id"
import * as React from "react"
import { BreadcrumbItem, BreadcrumbItemProps } from "./breadrumb-item"

const PROVIDER_NAME = "Breadcrumb"

interface BreadcrumbProps extends StandardProps, ColorProps, VisualTextProps, SpacingProps {
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
  const { dark, theme } = React.useContext(ThemeCtx)
  const id = useId("breadcrumb")

  const tb = theme?.breadcrumb?.[`${props.componentName}`]

  const cls = base({
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
      mx: tb?.mx !== undefined ? tb.mx : props.mx,
      my: tb?.my !== undefined ? tb.my : props.my,
      mb: tb?.mb !== undefined ? tb.mb : props.mb,
      ml: tb?.ml !== undefined ? tb.ml : props.ml,
      mr: tb?.mr !== undefined ? tb.mr : props.mr,
      mt: tb?.mt !== undefined ? tb.mt : props.mt,
      px: tb?.px !== undefined ? tb.px : props.px,
      py: tb?.py !== undefined ? tb.py : props.py,
      pb: tb?.pb !== undefined ? tb.pb : props.pb,
      pl: tb?.pl !== undefined ? tb.pl : props.pl,
      pr: tb?.pr !== undefined ? tb.pr : props.pr,
      pt: tb?.pt !== undefined ? tb.pt : props.pt
    }
  })

  const [BreadcrumbProvider, BreadcrumbContext] = createContext<BreadcrumbProps>(PROVIDER_NAME, {
    id: id,
    dark: dark,
    dividerIcon: props.dividerIcon,
    dividerHeight: tb?.dividerHeight !== undefined ? tb.dividerHeight : props.dividerHeight,
    color: tb?.color !== undefined ? tb.color : props.color,
    colorContrast: tb?.colorContrast !== undefined ? tb.colorContrast : props.colorContrast,
    colorHover: tb?.colorHover !== undefined ? tb.colorHover : props.colorHover,
    colorHoverContrast: tb?.colorHoverContrast !== undefined ? tb.colorHoverContrast : props.colorHoverContrast,
    darkColor: tb?.darkColor !== undefined ? tb.darkColor : props.darkColor,
    darkColorContrast: tb?.darkColorContrast !== undefined ? tb.darkColorContrast : props.darkColorContrast,
    darkColorHover: tb?.darkColorHover !== undefined ? tb.darkColorHover :  props.darkColorHover,
    darkColorHoverContrast: tb?.colorHoverContrast !== undefined ? tb.colorHoverContrast : props.darkColorHoverContrast,
    activeColor: tb?.activeColor !== undefined ? tb.activeColor : props.activeColor,
    activeColorContrast: tb?.activeColorContrast !== undefined ? tb.activeColorContrast : props.activeColorContrast,
    darkActiveColor: tb?.darkActiveColor !== undefined ? tb.darkActiveColor : props.darkActiveColor,
    darkActiveColorContrast: tb?.darkActiveColorContrast !== undefined ? tb.darkActiveColorContrast : props.darkActiveColorContrast,
    fontSize: tb?.fontSize !== undefined ? tb.fontSize : props.fontSize
  })
  useContext = BreadcrumbContext(PROVIDER_NAME)

  return(
    <BreadcrumbProvider>
      <nav id={id} aria-label="Breadcrumb">
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
