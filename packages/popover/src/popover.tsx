// Following the dialog-modal guideline WAI-ARIA 1.2
// htpps://www.w3.org/TR/wai-aria-practices-1.2/examples/dialog-modal/dialog.html

import { AriaProps, base, ColorProps, element, Size, SpacingProps, StandardProps, useEscKeyboardEvent, useOnClickOutside, VisualProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@zenbu-ui/react-id"
import { motion, AnimatePresence } from "framer-motion"
import FocusLock from "react-focus-lock"
import * as React from "react"
import { Icon } from "@zenbu-ui/icon"

interface PopoverProps extends AriaProps, StandardProps, ColorProps, VisualProps, SpacingProps {
  closable?: boolean,
  disabled?: boolean
  position?: "top" | "bottom" | "left" | "right",
  pointerArrow?: boolean,
  trigger: React.ReactElement,
  content: React.ReactNode,
  closeIconHeight?: Size,
  onOpen?: () => void,
  onClose?: () => void
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
      top: "full",
      bottom: undefined,
      left: undefined,
      right: undefined,
      rotate: undefined
    },
    mt: undefined,
    mb: 2,
    ml: undefined,
    mr: undefined
  },
  "bottom": {
    position: {
      top: "full",
      bottom: undefined,
      left: undefined,
      right: undefined
    },
    arrow: {
      top: undefined,
      bottom: "full",
      left: undefined,
      right: undefined,
      rotate: "180"
    },
    mt: 2,
    mb: undefined,
    ml: undefined,
    mr: undefined
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
      left: "full",
      right: undefined,
      rotate: "-90"
    },
    mt: undefined,
    mb: undefined,
    ml: undefined,
    mr: 2
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
      left: undefined,
      right: "full",
      rotate: "90"
    },
    mt: undefined,
    mb: undefined,
    ml: 2,
    mr: undefined
  }
}

export const Popover: React.FC<PopoverProps> = (props) => {
  const { dark, theme } = React.useContext(ThemeCtx)
  const node = React.useRef<HTMLDivElement>(null)
  const id = useId("popover")
  const idPopover = useId("popover-dialog")

  const tp = theme?.popover?.[`${props.componentName}`]

  const [expand, setExpand] = React.useState(false)

  useOnClickOutside(node, () => {
    if (expand) closeHandler()
  })

  useEscKeyboardEvent(node, () => {
    if (expand) {
      setExpand(false)
      if (props.onClose !== undefined) props.onClose()
      if (props.onOpen !== undefined && !expand) props.onOpen()
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

  const clsDialogWrapper = base({
    model: {
      display: "block",
      width: "max"
    },
    positioning: (tp?.position === undefined && props.position !== undefined) ? {
      position: "absolute",
      top: position[props.position].position.top,
      bottom: position[props.position].position.bottom,
      left: position[props.position].position.left,
      right: position[props.position].position.right,
      zIndex: "40"
    } : tp?.position !== undefined ? {
      position: "absolute",
      top: position[tp.position].position.top,
      bottom: position[tp.position].position.bottom,
      left: position[tp.position].position.left,
      right: position[tp.position].position.right,
      zIndex: "40"
    } : {},
    spacing: (tp?.position === undefined && props.position !== undefined) ? {
      mt: position[props.position].mt,
      mb: position[props.position].mb,
      ml: position[props.position].ml,
      mr: position[props.position].mr
    } : tp?.position !== undefined ? {
      mt: position[tp.position].mt,
      mb: position[tp.position].mb,
      ml: position[tp.position].ml,
      mr: position[tp.position].mr
    } : {}
  })

  const clsDialog = base({
    model: {
      overflow: "hidden"
    },
    visual: {
      dark: dark,
      bgColor: tp?.color !== undefined ? tp.color : props.color,
      bgColorContrast: tp?.colorContrast !== undefined ? tp.colorContrast : props.colorContrast,
      darkBgColor: tp?.darkColor !== undefined ? tp.darkColor : props.darkColor,
      darkBgColorContrast: tp?.darkColorContrast !== undefined ? tp.darkColorContrast : props.darkColorContrast,
      borderWidth: (tp?.border && tp.borderWidth !== undefined) ? tp.borderWidth : (props.border && tp?.border === undefined) ? props.borderWidth : undefined,
      borderStyle: (tp?.border && tp.borderStyle !== undefined) ? tp.borderStyle : (props.border && tp?.border === undefined) ? props.borderStyle : undefined,
      borderColor: (tp?.border && tp.borderColor !== undefined) ? tp.borderColor : (props.border && tp?.border === undefined) ? props.borderColor : undefined,
      borderColorContrast: (tp?.border && tp.borderColorContrast !== undefined) ? tp.borderColorContrast : (props.border && tp?.border === undefined) ? props.borderColorContrast : undefined,
      borderRadius: tp?.rounded !== undefined ? tp.rounded : props.rounded,
      borderRadiusPosition: tp?.roundedPosition !== undefined ? tp.roundedPosition : props.roundedPosition,
      shadow: tp?.shadow !== undefined ? tp.shadow : props.shadow,
      shadowColor: (tp?.shadow !== undefined && tp.shadowColor !== undefined) ? tp.shadowColor : props.shadow !== undefined ? props.shadowColor : undefined,
      shadowColorContrast: (tp?.shadow !== undefined && tp.shadowColorContrast !== undefined) ? tp.shadowColorContrast : props.shadow !== undefined ? props.shadowColorContrast : undefined,
      shadowOpacity: (tp?.shadow !== undefined && tp.shadowOpacity !== undefined) ? tp.shadowOpacity : props.shadow !== undefined ? props.shadowOpacity : undefined,
      darkShadowColor: (tp?.shadow !== undefined && tp.darkShadowColor !== undefined) ? tp.darkShadowColor : props.shadow !== undefined ? props.darkShadowColor : undefined,
      darkShadowColorContrast: (tp?.shadow !== undefined && tp.darkShadowColorContrast) ? tp.darkShadowColorContrast : props.shadow !== undefined ? props.darkShadowColorContrast : undefined,
      darkShadowOpacity: (tp?.shadow !== undefined && tp.darkShadowOpacity !== undefined) ? tp.darkShadowOpacity : props.shadow !== undefined ? props.darkShadowOpacity : undefined,
    },
    spacing: {
      px: tp?.px !== undefined ? tp.px : props.px,
      py: tp?.py !== undefined ? tp.py : props.py
    }
  })

  const clsArrow = base({
    model: {
      display: "block"
    },
    visual: {
      dark: dark,
      fillColor: tp?.color !== undefined ? tp.color : props.color,
      fillColorContrast: tp?.colorContrast !== undefined ? tp.colorContrast : props.colorContrast,
      darkFillColor: tp?.darkColor !== undefined ? tp.darkColor : props.darkColor,
      darkFillColorContrast: tp?.darkColorContrast !== undefined ? tp.darkColorContrast : props.darkColorContrast,
      strokeColor: (tp?.border && tp.borderColor !== undefined) ? tp.borderColor : props.border ? props.borderColor : undefined,
      strokeColorContrast: (tp?.border && tp.borderColorContrast !== undefined) ? tp.borderColorContrast : props.border ? props.borderColorContrast : undefined,
    }
  })

  const clsArrowPosition = base({
    positioning: (tp?.position === undefined && props.position !== undefined) ? {
      position: "absolute",
      top: position[props.position].arrow.top,
      bottom: position[props.position].arrow.bottom,
      left: position[props.position].arrow.left,
      right: position[props.position].arrow.right
    } : tp?.position !== undefined ? {
      position: "absolute",
      top: position[tp.position].arrow.top,
      bottom: position[tp.position].arrow.bottom,
      left: position[tp.position].arrow.left,
      right: position[tp.position].arrow.right
    } : {},
    spacing: {
      ml: tp?.position === "left" ? "1.5" : props.position === "left" ? "1.5" : undefined,
      mr: tp?.position === "right" ? "1.5" : props.position === "right" ? "1.5" : undefined,
    }
  })

  const clsArrowPositionElm = element({
    element: (tp?.position === undefined && props.position !== undefined) ? {
      transform: true,
      rotate: position[props.position].arrow.rotate
    } : tp?.position !== undefined ? {
      transform: true,
      rotate: position[tp.position].arrow.rotate
    } : {}
  })

  const closeHandler = () => {
    setExpand(!expand)
    if (props.onClose !== undefined && expand) props.onClose()
    if (props.onOpen !== undefined && !expand) props.onOpen()
  }

  return(
    <div
    ref={node}
    className={[
      clsWrapper,
      props.disabled ? "pointer-events-none" : "",
    ].join(" ").trim()}>
      <div
      id={id}
      aria-label={props.ariaLabel}
      aria-labelledby={props.ariaLabelledBy}
      aria-haspopup="dialog"
      aria-controls={idPopover}
      aria-expanded={expand ? "true" : "false"}
      aria-disabled={props.disabled ? "true" : undefined}
      role="button"
      tabIndex={0}
      onClick={() => {
        if (!props.disabled) closeHandler()
      }}
      onKeyDown={(e) => {
        if (e.code === "Enter" && !props.disabled) closeHandler()
      }}>
        {props.trigger}
      </div>

      {expand && (
        <AnimatePresence initial={false}>
          <motion.div
          className={clsDialogWrapper}
          style={((tp?.position === "top" || (props.position === "top" && tp?.position === undefined)) || (tp?.position === "bottom" || (props.position === "bottom" && tp?.position === undefined))) ? {
            left: "calc(50% - 0)",
            transform: "translate(-50%, 155px) !important"
          } : {}}
          initial={{opacity: 0}}
          animate={{scale: 1, opacity: 1, transition: {
            duration: 0.5,
            ease: [0, 0.2, 0.4, 1]
          }}}
          exit={{opacity: 0, scale: 0.95, transition: {
            duration: 0.1,
            ease: [0.4, 0, 1, 1]
          }}}
          >
            <FocusLock>
              <div
              id={idPopover}
              className={clsDialog}
              role="dialog">
                <>
                  {(tp?.pointerArrow || (props.pointerArrow && tp?.pointerArrow === undefined)) && (
                    <span
                    className={[
                    clsArrowPosition,
                    clsArrowPositionElm,
                    "pointer-events-none"].join(" ").trim()}
                    style={((tp?.position === "top" || (props.position === "top" && tp?.position === undefined)) || (tp?.position === "bottom" || (props.position === "bottom" && tp?.position === undefined))) ?
                    { left: "calc(50% - 5px)"} : { transform: "" }}>
                      <span className="inline-block align-top pointer-events-none">
                        <svg
                        className={[
                          clsArrow,
                          (tp?.border || (props.border && tp?.border === undefined)) ? "stroke-2" : ""
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

                  {props.closable && (
                    <div className="w-full mb-5">
                      <span
                      className="absolute right-2 cursor-pointer"
                      onClick={() => closeHandler()}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") closeHandler()
                      }}
                      aria-label="close"
                      role="button"
                      tabIndex={0}>
                        <Icon icon="x-solid"
                        color={((props.color === "white" && tp?.color === undefined) || tp?.color === "white" || (props.color === "gray" && tp?.color === undefined) || tp?.color === "gray") ? "black" : "white"}
                        height={tp?.closeIconHeight !== undefined ? tp.closeIconHeight : props.closeIconHeight} />
                      </span>
                    </div>
                  )}
                  <div>{props.content}</div>
                </>
              </div>
            </FocusLock>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  )
}

Popover.defaultProps = {
  closable: false,
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
  closeIconHeight: "3",
  px: "4",
  py: "2"
}
