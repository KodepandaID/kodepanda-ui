import { AnimatePresence, motion } from "framer-motion"
import { base, ColorProps, ModelProps, SpacingProps, StandardProps, VisualProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import * as React from "react"
import { useId } from "@zenbu-ui/react-id"

interface SkeletonProps extends StandardProps, ColorProps, ModelProps, VisualProps, SpacingProps {
  circle?: boolean
}

export const Skeleton: React.FC<SkeletonProps> = (props) => {
  const { dark } = React.useContext(ThemeCtx)
  const id = useId("skeleton")

  const cls = base({
    model: {
      display: "inline-block",
      width: props.width,
      height: props.circle ? props.width : props.height
    },
    visual: {
      dark: dark,
      bgColor: props.color,
      bgColorContrast: props.colorContrast,
      darkBgColor: props.darkBgColor,
      darkBgColorContrast: props.darkBgColorContrast,
      borderRadius: props.circle ? "full" : props.rounded
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
