// Following the tooltip guideline WAI-ARIA 1.2
// https://www.w3.org/TR/wai-aria-practices-1.2/#tooltip

import { base, ColorProps, element, ModelProps, SpacingProps, StandardProps, useEscKeyboardEvent, VisualProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@zenbu-ui/react-id"
import { motion, AnimatePresence } from "framer-motion"
import * as React from "react"

interface TooltipProps extends StandardProps, ColorProps, ModelProps, VisualProps, SpacingProps {
  popup?: boolean,
  disabled?: boolean,
  position?: "top" | "bottom" | "left" | "right",
  pointerArrow?: boolean,
  trigger: React.ReactElement,
  content: React.ReactNode
}

interface LooseObject {
  [key: string]: any
}

const position: LooseObject = {
  "top": {
    position: {
      top: undefined,
      bottom: "full",
      left: undefined,
      right: undefined
    },
    arrow: {
      top: undefined,
      bottom: "-4",
      left: undefined,
      right: undefined,
      rotate: undefined
    },
    pt: undefined,
    pb: 2,
    pl: undefined,
    pr: undefined
  },
  "bottom": {
    position: {
      top: "full",
      bottom: undefined,
      left: undefined,
      right: undefined
    },
    arrow: {
      top: "-4",
      bottom: undefined,
      left: undefined,
      right: undefined,
      rotate: "180"
    },
    pt: 2,
    pb: undefined,
    pl: undefined,
    pr: undefined
  },
  "left": {
    position: {
      top: undefined,
      bottom: undefined,
      left: undefined,
      right: "full"
    },
    arrow: {
      top: undefined,
      bottom: undefined,
      left: undefined,
      right: "-2",
      rotate: "-90"
    },
    pt: undefined,
    pb: undefined,
    pl: undefined,
    pr: 2
  },
  "right": {
    position: {
      top: undefined,
      bottom: undefined,
      left: "full",
      right: undefined
    },
    arrow: {
      top: undefined,
      bottom: undefined,
      left: "-2",
      right: undefined,
      rotate: "90"
    },
    pt: undefined,
    pb: undefined,
    pl: 2,
    pr: undefined
  }
}

export const Tooltip: React.FC<TooltipProps> = (props) => {
  const { dark } = React.useContext(ThemeCtx)
  const id = useId("tooltip")
  const node = React.useRef<HTMLDivElement>(null)

  const [expand, setExpand] = React.useState(false)

  const clsWrapper = base({
    model: {
      width: "max"
    },
    positioning: {
      position: "relative"
    },
    flexbox: {
      flex: true,
      alignItems: "center",
      justify: "center"
    },
    misc: {
      opacity: props.disabled ? "50" : undefined
    }
  })

  const clsTooltipWrapper = base({
    model: {
      display: expand ? "block" : "hidden",
      width: "max"
    },
    positioning: props.position !== undefined ? {
      position: "absolute",
      top: position[props.position].position.top,
      bottom: position[props.position].position.bottom,
      left: position[props.position].position.left,
      right: position[props.position].position.right,
      zIndex: "40"
    } : {},
    spacing: props.position !== undefined ? {
      pt: position[props.position].pt,
      pb: position[props.position].pb,
      pl: position[props.position].pl,
      pr: position[props.position].pr
    } : {}
  })

  const clsTooltip = base({
    model: {
      overflow: "hidden"
    },
    visual: {
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
    },
    spacing: {
      px: props.px,
      py: props.py
    }
  })

  const clsArrow = base({
    model: {
      display: "block"
    },
    visual: {
      dark: dark,
      fillColor: props.color,
      fillColorContrast: props.colorContrast,
      darkFillColor: props.darkColor,
      darkFillColorContrast: props.darkColorContrast,
      strokeColor: props.border ? props.borderColor : undefined,
      strokeColorContrast: props.border ? props.borderColorContrast : undefined,
    }
  })

  const clsArrowPosition = base(props.position !== undefined ? {
    positioning: {
      position: "absolute",
      top: position[props.position].arrow.top,
      bottom: position[props.position].arrow.bottom,
      left: position[props.position].arrow.left,
      right: position[props.position].arrow.right
    },
    spacing: {
      ml: props.position === "left" ? "1.5" : undefined,
      mr: props.position === "right" ? "1.5" : undefined,
    }
  }: {})

  const clsArrowPositionElm = element(props.position !== undefined ? {
    element: {
      transform: true,
      rotate: position[props.position].arrow.rotate
    }
  }: {})

  useEscKeyboardEvent(node, () => {
    if (expand && props.popup) {
      setExpand(false)
    }
  })

  return(
    <div
    ref={node}
    className={[
      clsWrapper,
      props.disabled ? "pointer-events-none" : "",
    ].join(" ").trim()}
    onMouseLeave={() => {if (props.popup) setExpand(false)}}
    onBlur={() => { if (props.popup) setExpand(false)}}>
      <div
      aria-labelledby={id}
      onMouseOver={() => setExpand(true)}
      onFocus={() => setExpand(true)}
      onMouseOut={() => {if (!props.popup) setExpand(false)}}
      onBlur={() => { if (!props.popup) setExpand(false)}}>
        {props.trigger}
      </div>

      <AnimatePresence initial={false}>
        <motion.div
        className={clsTooltipWrapper}
        style={(props.position === "top" || props.position === "bottom") ? {
          left: "calc(50% - 0)",
          transform: "translate(-50%, 155px) !important"
        } : {}}
        variants={{
          initial: {opacity: 0},
          visible: {scale: 1, opacity: 1, transition: {
            duration: 0.5,
            ease: [0, 0.2, 0.4, 1]
          }},
          hidden:{opacity: 0, scale: 0.95, transition: {
            duration: 0.1,
            ease: [0.4, 0, 1, 1]
          }}
        }}
        animate={expand ? "visible" : "hidden"}
        onMouseOver={() => {if (props.popup) setExpand(true)}}
        onFocus={() => { if (props.popup) setExpand(true)}}>
          <div
          id={id}
          className={clsTooltip}
          role="tooltip">
          <>
            {props.pointerArrow && (
              <span
              className={[
              clsArrowPosition,
              clsArrowPositionElm,
              "pointer-events-none"].join(" ").trim()}
              style={(props.position === "top" || props.position === "bottom") ?
              { left: "calc(50% - 5px)"} : { transform: "" }}>
                <span className="inline-block align-top pointer-events-none">
                  <svg
                  className={[
                    clsArrow,
                    props.border ? "stroke-2" : ""
                  ].join(" ").trim()}
                  width="10"
                  height="5"
                  viewBox="0 0 30 10"
                  preserveAspectRatio="none">
                    <polygon points="0,0 30,0 15,10"></polygon>
                  </svg>
                </span>
              </span>
            )}

            <div>{props.content}</div>
          </>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

Tooltip.defaultProps = {
  popup: false,
  disabled: false,
  pointerArrow: true,
  position: "bottom",
  color: "white",
  border: true,
  borderWidth: "normal",
  borderStyle: "solid",
  borderColor: "gray",
  borderColorContrast: "200",
  rounded: "md",
  px: "4",
  py: "2"
}
