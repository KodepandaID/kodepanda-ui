import { AnimatePresence, motion } from "framer-motion"
import { base, ColorProps, SpacingProps, StandardProps, text, VisualTextProps } from "@zenbu-ui/core"
import * as React from "react"

interface BadgeProps extends StandardProps, ColorProps, VisualTextProps, SpacingProps {
  count: number,
  overflowCount?: number,
  preffix?: React.ReactNode,
  suffix?: React.ReactNode,
  href?: string,
  target?: "_self" | "_blank" | "_parent" | "_top"
}

export const Badge: React.FC<BadgeProps> = (props) => {
  const cls = base({
    model: {
      display: "inline-block"
    },
    positioning: {
      position: "relative"
    },
    spacing: {
      mx: props.mx,
      my: props.my,
      mb: props.mb,
      ml: props.ml,
      mr: props.mr,
      mt: props.mt
    }
  })

  const clsBadge = base({
    model: {
      overflow: "hidden",
      width: props.count < 100 ? "6" : "max",
      height: "6"
    },
    flexbox: {
      flex: true,
      alignItems: "center",
      justify: "center"
    },
    positioning: {
      position: "absolute",
      top: "-0.5",
      right: props.count < 100 ? "-1" : "-2",
      zIndex: "auto"
    },
    visual: {
      dark: false,
      bgColor: props.color,
      bgColorContrast: props.colorContrast,
      borderRadius: "full"
    },
    spacing: {
      px: props.count > 99 ? "2" : undefined
    }
  })

  const clsText = text({
    visualText: {
      dark: false,
      textColor: props.textColor,
      textColorContrast: props.textColorContrast,
      fontSize: props.fontSize,
      fontWeight: props.fontWeight,
      lineHeight: "tight"
    }
  })

  const motionVariant = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    }
  }

  const badgeCircle = (
    <span className="relative inline-block">
      <span>
        {props.preffix !== undefined && (props.preffix)}
        {((props.overflowCount !== undefined && props.count < props.overflowCount) || props.overflowCount === undefined) && props.count}
        {(props.overflowCount !== undefined && props.count > props.overflowCount) && `${props.overflowCount}+`}
        {props.suffix !== undefined && (props.suffix)}
      </span>
    </span>
  )

  return(
    <span id={props.id} className={cls}>
      {props.children}
      <AnimatePresence>
        {props.href === undefined ? (
          <motion.sup
          variants={motionVariant}
          initial="hidden"
          animate="visible"
          transition={{duration: 0.8}}
          className={[clsBadge, clsText].join(" ").trim()}
          title={`${props.count}`}>
            {badgeCircle}
          </motion.sup>
        ) : (
          <motion.a
          href={props.href}
          target={props.target}
          variants={motionVariant}
          initial="hidden"
          animate="visible"
          transition={{duration: 0.8}}
          className={[clsBadge, clsText].join(" ").trim()}
          title={`${props.count}`}>
            {badgeCircle}
          </motion.a>
        )}
      </AnimatePresence>
    </span>
  )
}

Badge.defaultProps = {
  color: "red",
  colorContrast: "500",
  textColor: "white",
  fontSize: "sm",
  fontWeight: "semibold",
  target: "_blank"
}
