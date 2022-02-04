import { AnimatePresence, motion } from "framer-motion"
import { base, ColorProps, ModelProps, SpacingProps, StandardProps, VisualProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import * as React from "react"
import { useId } from "@reach/auto-id"

interface SkeletonProps extends StandardProps, ColorProps, ModelProps, VisualProps, SpacingProps {
  circle?: boolean
}

export const Skeleton: React.FC<SkeletonProps> = (props) => {
  const { dark, theme } = React.useContext(ThemeCtx)
  const id = useId("skeleton")

  const ts = theme?.skeleton?.[`${props.componentName}`]

  const cls = base({
    model: {
      display: "inline-block",
      width: ts?.width !== undefined ? ts.width : props.width,
      height: (ts?.circle || (props.circle && ts?.circle === undefined)) ? props.width : props.height
    },
    visual: {
      dark: dark,
      bgColor: ts?.color !== undefined ? ts.color : props.color,
      bgColorContrast: ts?.colorContrast !== undefined ? ts.colorContrast : props.colorContrast,
      darkBgColor: ts?.darkColor !== undefined ? ts.darkColor : props.darkColor,
      darkBgColorContrast: ts?.darkColorContrast !== undefined ? ts.darkColorContrast : props.darkColorContrast,
      borderRadius: (ts?.circle || (props.circle && ts?.circle === undefined)) ? "full" : ts?.rounded !== undefined ? ts.rounded : props.rounded
    },
    spacing: {
      mx: ts?.mx !== undefined ? ts.mx : props.mx,
      my: ts?.my !== undefined ? ts.my : props.my,
      mb: ts?.mb !== undefined ? ts.mb : props.mb,
      ml: ts?.ml !== undefined ? ts.ml : props.ml,
      mr: ts?.mr !== undefined ? ts.mr : props.mr,
      mt: ts?.mt !== undefined ? ts.mt : props.mt,
      px: ts?.px !== undefined ? ts.px : props.px,
      py: ts?.py !== undefined ? ts.py : props.py,
      pb: ts?.pb !== undefined ? ts.pb : props.pb,
      pl: ts?.pl !== undefined ? ts.pl : props.pl,
      pr: ts?.pr !== undefined ? ts.pr : props.pr,
      pt: ts?.pt !== undefined ? ts.pt : props.pt
    }
  })

  return(
    <AnimatePresence>
      <motion.span
      animate={{ opacity: [0.3, 0.5, 0.8, 0.5, 0.3] }}
      transition={{ duration: 2, repeat: Infinity }}
      id={id}
      className={cls}
      role="status"
      aria-label="Loading"
      />
    </AnimatePresence>
  )
}

Skeleton.defaultProps = {
  width: "full",
  height: "2",
  color: "gray",
  colorContrast: "300",
  rounded: "md"
}
