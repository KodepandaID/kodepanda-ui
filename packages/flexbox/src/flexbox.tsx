import { AlignContent, AlignItems, AriaProps, base, content, FlexDirection, FlexWrap, Gap, JustifyContent, JustifyItems, ModelProps, ResponsiveProps, SpaceBetween, SpacingProps, StandardProps, responsiveStyle } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
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
  const { theme } = React.useContext(ThemeCtx)

  const tf = theme?.flexbox?.[`${props.componentName}`]

  const cls = base({
    model: {
      width: tf?.width !== undefined ? tf.width : props.width,
      height: tf?.height !== undefined ? tf.height : props.height
    },
    responsive: {
      sm: tf?.sm !== undefined ? tf.sm : props.sm,
      md: tf?.md !== undefined ? tf.md : props.md,
      lg: tf?.lg !== undefined ? tf.lg : props.lg,
      xl: tf?.xl !== undefined ? tf.xl : props.xl,
      "2xl": tf?.["2xl"] !== undefined ? tf["2xl"] : props["2xl"]
    },
    flexbox: {
      flex: true,
      flex1: tf?.flex1 !== undefined ? tf.flex1 : props.flex1,
      flexAuto: tf?.flexAuto !== undefined ? tf.flexAuto : props.flexAuto,
      flexInitial: tf?.flexInitial !== undefined ? tf.flexInitial : props.flexInitial,
      flexNone: tf?.flexNone !== undefined ? tf.flexNone : props.flexNone,
      direction: tf?.direction !== undefined ? tf.direction : props.direction !== undefined ? props.direction : undefined,
      wrap: tf?.wrap !== undefined ? tf.wrap : props.wrap !== undefined ? props.wrap : undefined,
      justify: tf?.justify !== undefined ? tf.justify : props.justify !== undefined ? props.justify : undefined,
      justifyItems: tf?.justifyItems !== undefined ? tf.justifyItems : props.justifyItems !== undefined ? props.justifyItems : undefined,
      alignContent: tf?.alignContent !== undefined ? tf.alignContent : props.alignContent !== undefined ? props.alignContent : undefined,
      alignItems: tf?.alignItems !== undefined ? tf.alignItems : props.alignItems !== undefined ? props.alignItems : undefined,
      grow: tf?.grow !== undefined ? tf.grow : props.grow,
      unGrow: tf?.unGrow !== undefined ? tf.unGrow : props.unGrow,
      shrink: tf?.shrink !== undefined ? tf.shrink : props.shrink,
      unShrink: tf?.unShrink !== undefined ? tf.unShrink : props.unShrink,
      gap: tf?.gap !== undefined ? tf.gap : props.gap
    },
    spacing: {
      mx: tf?.mx !== undefined ? tf.mx : props.mx,
      my: tf?.my !== undefined ? tf.my : props.my,
      mb: tf?.mb !== undefined ? tf.mb : props.mb,
      ml: tf?.ml !== undefined ? tf.ml : props.ml,
      mr: tf?.mr !== undefined ? tf.mr : props.mr,
      mt: tf?.mt !== undefined ? tf.mt : props.mt,
      px: tf?.px !== undefined ? tf.px : props.px,
      py: tf?.py !== undefined ? tf.py : props.py,
      pb: tf?.pb !== undefined ? tf.pb : props.pb,
      pl: tf?.pl !== undefined ? tf.pl : props.pl,
      pr: tf?.pr !== undefined ? tf.pr : props.pr,
      pt: tf?.pt !== undefined ? tf.pt : props.pt
    }
  })

  const clsContent = content({
    spaceBetween: {
      xReverse: tf?.spaceXReverse !== undefined ? tf.spaceXReverse : props.spaceXReverse,
      yReverse: tf?.spaceYReverse !== undefined ? tf.spaceYReverse : props.spaceYReverse,
      x: tf?.spaceX !== undefined ? tf.spaceX : props.spaceX,
      y: tf?.spaceY !== undefined ? tf.spaceY : props.spaceY
    }
  })

  const clsResponsive = responsiveStyle({
    responsiveFlexbox: {
      sm: tf?.sm !== undefined ? tf.sm : props.sm,
      md: tf?.md !== undefined ? tf.md : props.md,
      lg: tf?.lg !== undefined ? tf.lg : props.lg,
      xl: tf?.xl !== undefined ? tf.xl : props.xl,
      "2xl": tf?.["2xl"] !== undefined ? tf["2xl"] : props["2xl"]
    }
  })

  return(
    <div
    id={props.id}
    className={[cls, clsContent, clsResponsive].join(" ").trim()}
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
