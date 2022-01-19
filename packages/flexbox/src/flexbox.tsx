import { AlignContent, AlignItems, AriaProps, base, content, FlexDirection, FlexWrap, Gap, JustifyContent, JustifyItems, ModelProps, ResponsiveProps, SpaceBetween, SpacingProps, StandardProps } from "@zenbu-ui/core"
import * as React from "react"

interface FlexboxProps extends AriaProps, StandardProps, ModelProps, ResponsiveProps, SpacingProps {
  children?: React.ReactNode,
  direction?: FlexDirection,
  wrap?: FlexWrap,
  justify?: JustifyContent,
  justifyItems?: JustifyItems,
  alignContent?: AlignContent,
  alignItems?: AlignItems,
  flex1?: boolean,
  flexAuto?: boolean,
  flexInitial?: boolean,
  flexNone?: boolean,
  grow?: boolean,
  unGrow?: boolean,
  shrink?: boolean,
  unShrink?: boolean,
  gap?: Gap,
  spaceX?: SpaceBetween,
  spaceY?: SpaceBetween,
  spaceXReverse?: boolean,
  spaceYReverse?: boolean
}

export const Flexbox: React.FC<FlexboxProps> = (props) => {
  const cls = base({
    model: {
      width: props.width,
      height: props.height
    },
    responsive: {
      sm: props.sm,
      md: props.md,
      lg: props.lg,
      xl: props.xl,
      "2xl": props["2xl"]
    },
    flexbox: {
      flex: true,
      flex1: props.flex1,
      flexAuto: props.flexAuto,
      flexInitial: props.flexInitial,
      flexNone: props.flexNone,
      direction: props.direction !== undefined ? props.direction : undefined,
      wrap: props.wrap !== undefined ? props.wrap : undefined,
      justify: props.justify !== undefined ? props.justify : undefined,
      justifyItems: props.justifyItems !== undefined ? props.justifyItems : undefined,
      alignContent: props.alignContent !== undefined ? props.alignContent : undefined,
      alignItems: props.alignItems !== undefined ? props.alignItems : undefined,
      grow: props.grow,
      unGrow: props.unGrow,
      shrink: props.shrink,
      unShrink: props.unShrink,
      gap: props.gap
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

  const clsContent = content({
    spaceBetween: {
      xReverse: props.spaceXReverse,
      yReverse: props.spaceYReverse,
      x: props.spaceX,
      y: props.spaceY
    }
  })

  return(
    <div
    id={props.id}
    className={[cls, clsContent].join(" ").trim()}
    aria-label={props.ariaLabel}
    aria-labelledby={props.ariaLabelledBy}>
      {props.children}
    </div>
  )
}

Flexbox.defaultProps = {
  grow: false,
  unGrow: false,
  shrink: false,
  unShrink: false,
  flex1: false,
  flexAuto: false,
  flexInitial: false,
  flexNone: false,
  spaceXReverse: false,
  spaceYReverse: false
}
