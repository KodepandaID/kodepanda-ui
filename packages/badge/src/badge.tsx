import { AnimatePresence, motion } from "framer-motion"
import { base, ColorProps, SpacingProps, StandardProps, text, VisualTextProps } from "@zenbu-ui/core"
import * as React from "react"
import { useId } from "@reach/auto-id"
import { ThemeCtx } from "@zenbu-ui/provider"

interface BadgeProps extends StandardProps, ColorProps, VisualTextProps, SpacingProps {
  count: number,
  overflowCount?: number,
  preffix?: React.ReactNode,
  suffix?: React.ReactNode,
  href?: string,
  target?: "_self" | "_blank" | "_parent" | "_top"
}

export const Badge: React.FC<BadgeProps> = (props) => {
  const { theme } = React.useContext(ThemeCtx)
  const id = useId()

  const tb = theme?.badge?.[`${props.componentName}`]

  const cls = base({
    model: {
      display: "inline-block"
    },
    positioning: {
      position: "relative"
    },
    spacing: {
      mx: tb?.mx !== undefined ? tb.mx : props.mx,
      my: tb?.my !== undefined ? tb.my : props.my,
      mb: tb?.mb !== undefined ? tb.mb : props.mb,
      ml: tb?.ml !== undefined ? tb.ml : props.ml,
      mr: tb?.mr !== undefined ? tb.mr : props.mr,
      mt: tb?.mt !== undefined ? tb.mt : props.mt
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
      top: "-1.5",
      right: props.count < 100 ? "-1" : "-2",
      zIndex: "auto"
    },
    visual: {
      dark: false,
      bgColor: tb?.color !== undefined ? tb.color : props.color,
      bgColorContrast: tb?.colorContrast !== undefined ? tb.colorContrast : props.colorContrast,
      borderRadius: "full"
    },
    spacing: {
      px: props.count > 99 ? "2" : undefined
    }
  })

  const clsText = text({
    visualText: {
      dark: false,
      textColor: tb?.textColor !== undefined ? tb.textColor : props.textColor,
      textColorContrast: tb?.textColorContrast !== undefined ? tb.textColorContrast : props.textColorContrast,
      fontSize: tb?.fontSize !== undefined ? tb.fontSize : props.fontSize,
      fontWeight: tb?.fontWeight !== undefined ? tb.fontWeight : props.fontWeight,
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
    <span id={`zenbu-badge-${id}`} className={cls}>
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
