// Following the dialog guideline WAI-ARIA 1.2
// https://www.w3.org/TR/wai-aria-practices-1.2/examples/dialog-modal/dialog.html

import { base, Color, ColorContrast, ColorProps, ModelProps, ResponsiveProps, SpacingProps, StandardProps, useEscKeyboardEvent, VisualProps } from "@zenbu-ui/core"
import { Icon } from "@zenbu-ui/icon"
import { ThemeCtx } from "@zenbu-ui/provider"
import { motion, AnimatePresence } from "framer-motion"
import FocusLock from "react-focus-lock"
import * as React from "react"
import { useId } from "@zenbu-ui/react-id"

interface DialogProps extends StandardProps, ResponsiveProps, ModelProps, ColorProps, VisualProps, SpacingProps {
  visible?: boolean,
  closable?: boolean,
  closeClickOutside?: boolean,
  title?: React.ReactNode,
  titleColor?: Color,
  titleColorContrast?: ColorContrast,
  darkTitleColor?: Color,
  darkTitleColorContrast?: ColorContrast,
  footer?: React.ReactNode,
  footerColor?: Color,
  footerColorContrast?: ColorContrast
  darkFooterColor?: Color,
  darkFooterColorContrast?: ColorContrast
  onClose?: () => void
}

export const Dialog: React.FC<DialogProps> = (props) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const { dark } = React.useContext(ThemeCtx)
  const id = useId("dialog")

  const [visible, setVisible] = React.useState(props.visible)

  const clsContainer = base({
    model: {
      width: "screen",
      height: "screen"
    },
    flexbox: {
      flex: true,
      alignItems: "center",
      justify: "center"
    }
  })

  const cls = base({
    model: {
      width: props.width,
      overflow: "hidden"
    },
    flexbox: {
      flex: true,
      direction: "col"
    },
    visual: {
      dark: dark,
      borderWidth: props.border ? props.borderWidth : undefined,
      borderStyle: props.border ? props.borderStyle : undefined,
      borderColor: props.border ? props.borderColor : undefined,
      borderColorContrast: props.border ? props.borderColorContrast : undefined,
      borderRadius: props.rounded,
      borderRadiusPosition: props.roundedPosition,
      shadow: props.shadow,
      shadowColor: props.shadow !== undefined ? props.shadowColor : undefined,
      shadowColorContrast: props.shadow !== undefined ? props.shadowColorContrast : undefined,
      shadowOpacity: props.shadow !== undefined ? props.shadowOpacity : undefined,
      darkShadowColor: props.shadow !== undefined ? props.darkShadowColor : undefined,
      darkShadowColorContrast: props.shadow !== undefined ? props.darkShadowColorContrast : undefined,
      darkShadowOpacity: props.shadow !== undefined ? props.darkShadowOpacity : undefined,
      selectionColor: props.selectionColor,
      selectionColorContrast: props.selectionColorContrast,
      darkSelectionColor: props.darkSelectionColor,
      darkSelectionColorContrast: props.darkSelectionColorContrast,
      selectionTextColor: props.selectionTextColor,
      selectionTextColorContrast: props.selectionTextColorContrast,
      darkSelectionTextColor: props.darkSelectionTextColor,
      darkSelectionTextColorContrast: props.darkSelectionTextColorContrast
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

  const clsOverlay = base({
    model: {
      width: "screen",
      height: "screen"
    },
    positioning: {
      position: "fixed"
    },
    visual: {
      dark: false,
      bgColor: "black",
      bgOpacity: 50
    }
  })

  const clsWrapper = base({
    spacing: {
      px: props.px,
      py: props.py,
      pb: props.pb,
      pl: props.pl,
      pr: props.pr,
      pt: props.pt
    }
  })

  const clsTitle = base({
    flexbox: {
      flex: true,
      alignItems: "center"
    },
    visual: {
      dark: false,
      bgColor: props.titleColor !== undefined ? props.titleColor : props.color,
      bgColorContrast: props.titleColorContrast !== undefined ? props.titleColorContrast : props.colorContrast,
      darkBgColor: props.darkTitleColor !== undefined ? props.darkTitleColor : props.darkColor,
      darkBgColorContrast: props.darkTitleColorContrast !== undefined ? props.darkTitleColorContrast : props.darkColorContrast,
      bgGradientPosition: props.bgGradientPosition,
      bgGradientEndColor: props.bgGradientEndColor,
      bgGradientEndColorContrast: props.bgGradientEndColorContrast,
      bgGradientFromColor: props.bgGradientFromColor,
      bgGradientFromColorContrast: props.bgGradientFromColorContrast,
      bgGradientMiddleColor: props.bgGradientMiddleColor,
      bgGradientMiddleColorContrast: props.bgGradientMiddleColorContrast,
      borderWidth: props.title === undefined ? undefined : props.borderWidth,
      borderStyle: props.title === undefined ? undefined : props.borderStyle,
      borderColor: props.title === undefined ? undefined : props.borderColor,
      borderColorContrast: props.title === undefined ? undefined : props.borderColorContrast,
      borderPosition: props.title !== undefined ? "bottom" : undefined
    },
    spacing: {
      px: props.px,
      py: props.py,
      pb: props.pb,
      pl: props.pl,
      pr: props.pr,
      pt: props.pt
    }
  })

  const clsContent = base({
    visual: {
      dark: dark,
      bgColor: props.color,
      bgColorContrast: props.colorContrast,
      darkBgColor: props.darkColor,
      darkBgColorContrast: props.darkColorContrast,
      bgGradientPosition: props.bgGradientPosition,
      bgGradientEndColor: props.bgGradientEndColor,
      bgGradientEndColorContrast: props.bgGradientEndColorContrast,
      bgGradientFromColor: props.bgGradientFromColor,
      bgGradientFromColorContrast: props.bgGradientFromColorContrast,
      bgGradientMiddleColor: props.bgGradientMiddleColor,
      bgGradientMiddleColorContrast: props.bgGradientMiddleColorContrast,
    }
  })

  const clsFooter = base({
    flexbox: {
      flex: true,
      alignItems: "center"
    },
    visual: {
      dark: false,
      bgColor: props.footerColor !== undefined ? props.footerColor : props.color,
      bgColorContrast: props.footerColorContrast !== undefined ? props.footerColorContrast : props.colorContrast,
      darkBgColor: props.darkFooterColor !== undefined ? props.darkFooterColor : props.darkColor,
      darkBgColorContrast: props.darkFooterColorContrast !== undefined ? props.darkFooterColorContrast : props.darkColorContrast,
      bgGradientPosition: props.bgGradientPosition,
      bgGradientEndColor: props.bgGradientEndColor,
      bgGradientEndColorContrast: props.bgGradientEndColorContrast,
      bgGradientFromColor: props.bgGradientFromColor,
      bgGradientFromColorContrast: props.bgGradientFromColorContrast,
      bgGradientMiddleColor: props.bgGradientMiddleColor,
      bgGradientMiddleColorContrast: props.bgGradientMiddleColorContrast,
      borderWidth: props.footer === undefined ? undefined : props.borderWidth,
      borderStyle: props.footer === undefined ? undefined : props.borderStyle,
      borderColor: props.footer === undefined ? undefined : props.borderColor,
      borderColorContrast: props.footer === undefined ? undefined : props.borderColorContrast,
      borderPosition: "top"
    },
    spacing: {
      px: props.px,
      py: props.py,
      pb: props.pb,
      pl: props.pl,
      pr: props.pr,
      pt: props.pt
    }
  })

  const variants = {
    hidden: {
      y: "-100vh",
      opacity: 0,
    },
    visible: {
      y: "0",
      opacity: 1,
      transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
      },
    },
    exit: {
      y: "100vh",
      opacity: 0,
    },
  }

  const closeHandler = () => {
    setVisible(false)
    if (props.onClose !== undefined) props.onClose()
  }

  useEscKeyboardEvent(ref, () => {
    if (visible) {
      closeHandler()
    }
  })

  React.useEffect(() => {
    setVisible(props.visible)
  }, [props.visible])

  return(
    visible ? (
      <AnimatePresence initial={false}>
        <motion.div
        key="dialog-overlay"
        className={[clsOverlay, "inset-0"].join(" ")}
        tabIndex={-1}
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="exit">
        </motion.div>
        <div className={clsContainer}>
          <FocusLock>
            <motion.div
            ref={ref}
            key="modal-dialog"
            id={id}
            className={cls}
            role="dialog"
            aria-modal="true"
            tabIndex={-1}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit">
              {(props.closable && props.title !== undefined) && (
                <div className={clsTitle}>
                  <span className="mr-auto">{props.title}</span>
                  {props.closable && (
                    <span
                    className="ml-2 cursor-pointer"
                    onClick={() => closeHandler()}
                    onKeyPress={(e) => {
                      if (e.key === "Enter") closeHandler()
                    }}
                    aria-label="close"
                    role="button"
                    tabIndex={0}>
                      <Icon icon="x-solid" color={(props.color === "white" || props.color === "gray") ? "black" : "white"} height="4" />
                    </span>
                  )}
                </div>
              )}
              {(props.closable && props.title === undefined) && (
                <div className={clsTitle}>
                  <span
                  className="fixed top-3 right-3 cursor-pointer"
                  onClick={() => closeHandler()}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") closeHandler()
                  }}
                  aria-label="close"
                  role="button"
                  tabIndex={0}>
                    <Icon icon="x-solid" color={(props.color === "white" || props.color === "gray") ? "black" : "white"} height="4" />
                  </span>
                </div>
              )}

              <div className={[clsContent, clsWrapper].join(" ").trim()}>
                {props.children}
              </div>

              {props.footer !== undefined && (
                <div className={clsFooter}>
                  {props.footer}
                </div>
              )}
            </motion.div>
          </FocusLock>
        </div>
      </AnimatePresence>
    ) : null
  )
}

Dialog.defaultProps = {
  visible: false,
  closable: true,
  closeClickOutside: false,
  width: "96",
  color: "white",
  border: false,
  borderWidth: "normal",
  borderStyle: "solid",
  borderColor: "gray",
  borderColorContrast: "300",
  rounded: "md",
  px: "4",
  py: "3"
}
