// Following the accordion guideline WAI-ARIA 1.2
// https://www.w3.org/TR/wai-aria-practices-1.2/examples/accordion/accordion.html

import { AriaProps, base, Color, ColorContrast, ColorProps, ModelProps, SpacingProps, StandardProps, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { createContext, useId } from "@zenbu-ui/react-id"
import * as React from "react"
import { AccordionItem, AccordionItemProps } from "./accordion-item"

const PROVIDER_NAME = "Accordion"

interface AccordionProps extends AriaProps, StandardProps, ColorProps, ModelProps, VisualProps, VisualTextProps, SpacingProps {
  simple?: boolean,
  separator?: boolean,
  separatorColor?: Color,
  separatorColorContrast?: ColorContrast,
  colorContent?: Color,
  colorContentContrast?: ColorContrast,
  darkColorContent?: Color,
  darkColorContentContrast?: ColorContrast,
  focusColor?: Color,
  focusColorContrast?: ColorContrast,
  darkFocusColor?: Color,
  darkFocusColorContrast?: ColorContrast
}

export let useContext: AccordionProps
export const Accordion: React.FC<AccordionProps> & {
  Item: React.FC<AccordionItemProps>
} = (props) => {
  const { dark, theme } = React.useContext(ThemeCtx)
  const id = useId("accordion")

  const tac = theme?.accordion?.[`${props.componentName}`]

  const [AccordionProvider, AccordionContext] = createContext<AccordionProps>(PROVIDER_NAME, {
    id: id,
    dark: dark,
    simple: tac?.simple !== undefined ? tac.simple : props.simple,
    separator: tac?.separator !== undefined ? tac.separator : props.separator,
    separatorColor: tac?.separatorColor !== undefined ? tac.separatorColor : props.separatorColor,
    separatorColorContrast: tac?.separatorColorContrast !== undefined ? tac.separatorColorContrast : props.separatorColorContrast,
    colorContent: tac?.colorContent !== undefined ? tac.colorContent : props.colorContent,
    colorContentContrast: tac?.colorContentContrast !== undefined ? tac.colorContentContrast : props.colorContentContrast,
    darkColorContent: tac?.darkColorContent !== undefined ? tac.darkColorContent : props.darkColorContent,
    darkColorContentContrast: tac?.darkColorContentContrast !== undefined ? tac.darkColorContentContrast : props.darkColorContentContrast,
    fontSize: tac?.fontSize !== undefined ? tac.fontSize : props.fontSize,
    fontWeight: tac?.fontWeight !== undefined ? tac.fontWeight : props.fontWeight,
    focusColor: tac?.focusColor !== undefined ? tac.focusColor : props.focusColor,
    focusColorContrast: tac?.focusColorContrast !== undefined ? tac.focusColorContrast : props.focusColorContrast,
    darkFocusColor: tac?.darkFocusColor !== undefined ? tac.darkFocusColor : props.darkFocusColor,
    darkFocusColorContrast: tac?.darkFocusColorContrast !== undefined ? tac.darkFocusColorContrast : props.darkFocusColorContrast,
    px: tac?.px !== undefined ? tac.px : props.px,
    py: tac?.py !== undefined ? tac.py : props.py,
    pb: tac?.pb !== undefined ? tac.pb : props.pb,
    pl: tac?.pl !== undefined ? tac.pl : props.pl,
    pr: tac?.pr !== undefined ? tac.pr : props.pr,
    pt: tac?.pt !== undefined ? tac.pt : props.pt
  })
  useContext = AccordionContext(PROVIDER_NAME)

  const clsWrapper = base({
    model: {
      display: "block",
      overflow: "hidden",
      width: tac?.width !== undefined ? tac.width : props.width
    },
    visual: (tac?.simple || (!props.simple && tac?.simple === undefined)) ? {
      dark: dark,
      bgColor: tac?.color !== undefined ? tac.color : props.color,
      bgColorContrast: tac?.colorContrast !== undefined ? tac.colorContrast : props.colorContrast,
      darkBgColor: tac?.darkColor !== undefined ? tac.darkColor : props.darkColor,
      darkBgColorContrast: tac?.darkColorContrast !== undefined ? tac.darkColorContrast : props.darkColorContrast,
      borderWidth: (tac?.border && tac.borderWidth !== undefined) ? tac.borderWidth : (props.border && tac?.border === undefined) ? props.borderWidth : undefined,
      borderStyle: (tac?.border && tac.borderStyle !== undefined) ? tac.borderStyle : (props.border && tac?.border === undefined) ? props.borderStyle : undefined,
      borderColor: (tac?.border && tac.borderColor !== undefined) ? tac.borderColor : (props.border && tac?.border === undefined) ? props.borderColor : undefined,
      borderColorContrast: (tac?.border && tac.borderColorContrast !== undefined) ? tac.borderColorContrast : (props.border && tac?.border === undefined) ? props.borderColorContrast : undefined,
      borderRadius: tac?.rounded !== undefined ? tac.rounded : props.rounded,
      shadow: tac?.shadow !== undefined ? tac.shadow : props.shadow,
      shadowColor: (tac?.shadow !== undefined && tac.shadowColor) ? tac.shadowColor : (props.shadow !== undefined && tac?.shadow === undefined) ? props.shadowColor : undefined,
      shadowColorContrast: (tac?.shadow !== undefined && tac.shadowColorContrast) ? tac.shadowColorContrast : (props.shadow !== undefined && tac?.shadow === undefined) ? props.shadowColorContrast : undefined,
      shadowOpacity: (tac?.shadow !== undefined && tac.shadowOpacity) ? tac.shadowOpacity : (props.shadow !== undefined && tac?.shadow === undefined) ? props.shadowOpacity : undefined,
      darkShadowColor: (tac?.shadow !== undefined && tac.darkShadowColor) ? tac.darkShadowColor : (props.shadow !== undefined && tac?.shadow === undefined) ? props.darkShadowColor : undefined,
      darkShadowColorContrast: (tac?.shadow !== undefined && tac.darkShadowColorContrast) ? tac.darkShadowColorContrast : (props.shadow !== undefined && tac?.shadow === undefined) ? props.darkShadowColorContrast : undefined,
      darkShadowOpacity: (tac?.shadow !== undefined && tac.darkShadowOpacity) ? tac.darkShadowOpacity : (props.shadow !== undefined && tac?.shadow === undefined) ? props.darkShadowOpacity : undefined,
    } : undefined,
    spacing: {
      mx: (tac?.mx !== undefined) ? tac.mx : props.mx,
      my: (tac?.my !== undefined) ? tac.my : props.my,
      mb: (tac?.mb !== undefined) ? tac.mb : props.mb,
      ml: (tac?.ml !== undefined) ? tac.ml : props.ml,
      mr: (tac?.mr !== undefined) ? tac.mr : props.mr,
      mt: (tac?.mt !== undefined) ? tac.mt : props.mt,
    }
  })

  return(
    <AccordionProvider>
      <div id={id} className={clsWrapper}>
        {React.Children.map(props.children, (elm, idx) => {
          const e = elm as React.ReactElement<any>
          if (e.type === AccordionItem) {
            return(
              <AccordionItem id={`${id}-${idx+1}`} key={`${id}-${idx+1}`} {...e.props} last={idx === React.Children.count(props.children) - 1 ? true : false} />
            )
          }
        })}
      </div>
    </AccordionProvider>
  )
}

Accordion.Item = AccordionItem

Accordion.defaultProps = {
  width: "64",
  simple: false,
  separator: true,
  color: "white",
  colorContent: "gray",
  colorContentContrast: "100",
  textColor: "gray",
  textColorContrast: "600",
  separatorColor: "gray",
  separatorColorContrast: "200",
  border: true,
  borderWidth: "normal",
  borderStyle: "solid",
  borderColor: "gray",
  borderColorContrast: "200",
  focusColor: "gray",
  focusColorContrast: "100",
  rounded: "md",
  fontSize: "sm",
  fontWeight: "normal",
  px: "4",
  py: "3"
}
