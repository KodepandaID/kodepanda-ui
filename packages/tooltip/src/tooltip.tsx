// Following the tooltip guideline WAI-ARIA 1.2
// https://www.w3.org/TR/wai-aria-practices-1.2/#tooltip

import { base, ColorProps, element, ModelProps, SpacingProps, StandardProps, useEscKeyboardEvent, VisualProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { motion, AnimatePresence } from "framer-motion"
import { useId } from "@reach/auto-id"
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
  const { dark, theme } = React.useContext(ThemeCtx)
  const id = useId()
  const node = React.useRef<HTMLDivElement>(null)

  const tt = theme?.tooltip?.[`${props.componentName}`]

  const [expand, setExpand] = React.useState(false)

  useEscKeyboardEvent(node, () => {
    if (expand && props.popup) {
      setExpand(false)
    }
  })

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
    positioning: (tt?.position === undefined && props.position !== undefined) ? {
      position: "absolute",
      top: position[props.position].position.top,
      bottom: position[props.position].position.bottom,
      left: position[props.position].position.left,
      right: position[props.position].position.right,
      zIndex: "40"
    } : tt?.position !== undefined ? {
      position: "absolute",
      top: position[tt.position].position.top,
      bottom: position[tt.position].position.bottom,
      left: position[tt.position].position.left,
      right: position[tt.position].position.right,
      zIndex: "40"
    } : {},
    spacing: (tt?.position === undefined && props.position !== undefined) ? {
      pt: position[props.position].pt,
      pb: position[props.position].pb,
      pl: position[props.position].pl,
      pr: position[props.position].pr
    } : tt?.position !== undefined ? {
      pt: position[tt.position].pt,
      pb: position[tt.position].pb,
      pl: position[tt.position].pl,
      pr: position[tt.position].pr
    } : {}
  })

  const clsTooltip = base({
    model: {
      overflow: "hidden"
    },
    visual: {
      dark: dark,
      bgColor: tt?.color !== undefined ? tt.color : props.color,
      bgColorContrast: tt?.colorContrast !== undefined ? tt.colorContrast : props.colorContrast,
      darkBgColor: tt?.darkColor !== undefined ? tt.darkColor : props.darkColor,
      darkBgColorContrast: tt?.darkColorContrast !== undefined ? tt.darkColorContrast : props.darkColorContrast,
      borderWidth: (tt?.border && tt.borderWidth !== undefined) ? tt.borderWidth : (props.border && tt?.border === undefined) ? props.borderWidth : undefined,
      borderStyle: (tt?.border && tt.borderStyle !== undefined) ? tt.borderStyle : (props.border && tt?.border === undefined) ? props.borderStyle : undefined,
      borderColor: (tt?.border && tt.borderColor !== undefined) ? tt.borderColor : (props.border && tt?.border === undefined) ? props.borderColor : undefined,
      borderColorContrast: (tt?.border && tt.borderColorContrast !== undefined) ? tt.borderColorContrast : (props.border && tt?.border === undefined) ? props.borderColorContrast : undefined,
      borderRadius: tt?.rounded !== undefined ? tt.rounded : props.rounded,
      borderRadiusPosition: tt?.roundedPosition !== undefined ? tt.roundedPosition : props.roundedPosition,
      shadow: tt?.shadow !== undefined ? tt.shadow : props.shadow,
      shadowColor: (tt?.shadow !== undefined && tt.shadowColor !== undefined) ? tt.shadowColor : props.shadow !== undefined ? props.shadowColor : undefined,
      shadowColorContrast: (tt?.shadow !== undefined && tt.shadowColorContrast !== undefined) ? tt.shadowColorContrast : props.shadow !== undefined ? props.shadowColorContrast : undefined,
      shadowOpacity: (tt?.shadow !== undefined && tt.shadowOpacity !== undefined) ? tt.shadowOpacity : props.shadow !== undefined ? props.shadowOpacity : undefined,
      darkShadowColor: (tt?.shadow !== undefined && tt.darkShadowColor !== undefined) ? tt.darkShadowColor : props.shadow !== undefined ? props.darkShadowColor : undefined,
      darkShadowColorContrast: (tt?.shadow !== undefined && tt.darkShadowColorContrast) ? tt.darkShadowColorContrast : props.shadow !== undefined ? props.darkShadowColorContrast : undefined,
      darkShadowOpacity: (tt?.shadow !== undefined && tt.darkShadowOpacity !== undefined) ? tt.darkShadowOpacity : props.shadow !== undefined ? props.darkShadowOpacity : undefined,
    },
    spacing: {
      px: tt?.px !== undefined ? tt.px : props.px,
      py: tt?.py !== undefined ? tt.py : props.py
    }
  })

  const clsArrow = base({
    model: {
      display: "block"
    },
    visual: {
      dark: dark,
      fillColor: tt?.color !== undefined ? tt.color : props.color,
      fillColorContrast: tt?.colorContrast !== undefined ? tt.colorContrast : props.colorContrast,
      darkFillColor: tt?.darkColor !== undefined ? tt.darkColor : props.darkColor,
      darkFillColorContrast: tt?.darkColorContrast !== undefined ? tt.darkColorContrast : props.darkColorContrast,
      strokeColor: (tt?.border && tt.borderColor !== undefined) ? tt.borderColor : props.border ? props.borderColor : undefined,
      strokeColorContrast: (tt?.border && tt.borderColorContrast !== undefined) ? tt.borderColorContrast : props.border ? props.borderColorContrast : undefined,
    }
  })

  const clsArrowPosition = base({
    positioning: (tt?.position === undefined && props.position !== undefined) ? {
      position: "absolute",
      top: position[props.position].arrow.top,
      bottom: position[props.position].arrow.bottom,
      left: position[props.position].arrow.left,
      right: position[props.position].arrow.right
    } : tt?.position !== undefined ? {
      position: "absolute",
      top: position[tt.position].arrow.top,
      bottom: position[tt.position].arrow.bottom,
      left: position[tt.position].arrow.left,
      right: position[tt.position].arrow.right
    } : {},
    spacing: {
      ml: tt?.position === "left" ? "1.5" : props.position === "left" ? "1.5" : undefined,
      mr: tt?.position === "right" ? "1.5" : props.position === "right" ? "1.5" : undefined,
    }
  })

  const clsArrowPositionElm = element({
    element: (tt?.position === undefined && props.position !== undefined) ?  {
      transform: true,
      rotate: position[props.position].arrow.rotate
    } : tt?.position !== undefined ? {
      transform: true,
      rotate: position[tt.position].arrow.rotate
    } : {}
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
        style={((tt?.position === "top" || (props.position === "top" && tt?.position === undefined)) || (tt?.position === "bottom" || (props.position === "bottom" && tt?.position === undefined))) ? {
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
            {(tt?.pointerArrow || (props.pointerArrow && tt?.pointerArrow === undefined)) && (
              <span
              className={[
              clsArrowPosition,
              clsArrowPositionElm,
              "pointer-events-none"].join(" ").trim()}
              style={((tt?.position === "top" || (props.position === "top" && tt?.position === undefined)) || (tt?.position === "bottom" || (props.position === "bottom" && tt?.position === undefined))) ?
              { left: "calc(50% - 5px)"} : { transform: "" }}>
                <span className="inline-block align-top pointer-events-none">
                  <svg
                  className={[
                    clsArrow,
                    (tt?.border || (props.border && tt?.border === undefined)) ? "stroke-2" : ""
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
