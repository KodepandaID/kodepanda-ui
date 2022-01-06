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
  const { dark } = React.useContext(ThemeCtx)
  const id = useId("accordion")

  const [AccordionProvider, AccordionContext] = createContext<AccordionProps>(PROVIDER_NAME, {
    id: id,
    dark: dark,
    simple: props.simple,
    separator: props.separator,
    separatorColor: props.separatorColor,
    separatorColorContrast: props.separatorColorContrast,
    colorContent: props.colorContent,
    colorContentContrast: props.colorContentContrast,
    darkColorContent: props.darkColorContent,
    darkColorContentContrast: props.darkColorContentContrast,
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
    focusColor: props.focusColor,
    focusColorContrast: props.focusColorContrast,
    darkFocusColor: props.darkFocusColor,
    darkFocusColorContrast: props.darkFocusColorContrast,
    px: props.px,
    py: props.py,
    pb: props.pb,
    pl: props.pl,
    pr: props.pr,
    pt: props.pt
  })
  useContext = AccordionContext(PROVIDER_NAME)

  const clsWrapper = base({
    model: {
      display: "block",
      overflow: "hidden",
      width: props.width
    },
    visual: !props.simple ? {
      dark: dark,
      bgColor: props.color,
      bgColorContrast: props.colorContrast,
      darkBgColor: props.darkColor,
      darkBgColorContrast: props.darkColorContrast,
      borderWidth: props.border ? props.borderWidth : undefined,
      borderStyle: props.border ? props.borderStyle : undefined,
      borderColor: props.border ? props.borderColor : undefined,
      borderColorContrast: props.border ? props.borderColorContrast : undefined,
      borderRadius: props.rounded,
      shadow: props.shadow,
      shadowColor: props.shadowColor,
      shadowColorContrast: props.shadowColorContrast,
      shadowOpacity: props.shadowOpacity
    } : undefined,
    spacing: {
      mx: props.mx,
      my: props.my,
      mb: props.mb,
      ml: props.ml,
      mr: props.mr,
      mt: props.mt
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
