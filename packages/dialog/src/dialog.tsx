// Following the dialog guideline WAI-ARIA 1.2
// https://www.w3.org/TR/wai-aria-practices-1.2/examples/dialog-modal/dialog.html

import { base, Color, ColorContrast, ColorProps, ModelProps, ResponsiveProps, SpacingProps, StandardProps, useEscKeyboardEvent, VisualProps } from "@zenbu-ui/core"
import { Icon } from "@zenbu-ui/icon"
import { ThemeCtx } from "@zenbu-ui/provider"
import { motion, AnimatePresence } from "framer-motion"
import FocusLock from "react-focus-lock"
import * as React from "react"
import { useId } from "@reach/auto-id"

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
  const { dark, theme } = React.useContext(ThemeCtx)
  const id = useId()

  const td = theme?.dialog?.[`${props.componentName}`]

  const [visible, setVisible] = React.useState(props.visible)

  useEscKeyboardEvent(ref, () => {
    if (visible) {
      closeHandler()
    }
  })

  React.useEffect(() => {
    setVisible(props.visible)
  }, [props.visible])

  const clsContainer = base({
    model: {
      width: "full",
      height: "full"
    },
    positioning: {
      position: "fixed",
      zIndex: "50"
    },
    flexbox: {
      flex: true,
      alignItems: "center",
      justify: "center",
    }
  })

  const cls = base({
    model: {
      width: td?.width !== undefined ? td.width : props.width,
      overflow: "hidden"
    },
    flexbox: {
      flex: true,
      direction: "col"
    },
    visual: {
      dark: dark,
      borderWidth: (td?.border && td.borderWidth !== undefined) ? td.borderWidth : (props.border && td?.border === undefined) ? props.borderWidth : undefined,
      borderStyle: (td?.border && td.borderStyle !== undefined) ? td.borderStyle : (props.border && td?.border === undefined) ? props.borderStyle : undefined,
      borderColor: (td?.border && td.borderColor !== undefined) ? td.borderColor : (props.border && td?.border === undefined) ? props.borderColor : undefined,
      borderColorContrast: (td?.border && td.borderColorContrast !== undefined) ? td.borderColorContrast : (props.border && td?.border === undefined) ? props.borderColorContrast : undefined,
      borderRadius: td?.rounded !== undefined ? td.rounded : props.rounded,
      borderRadiusPosition: td?.roundedPosition !== undefined ? td.roundedPosition : props.roundedPosition,
      shadow: td?.shadow !== undefined ? td.shadow : props.shadow,
      shadowColor: (td?.shadow !== undefined && td.shadowColor !== undefined) ? td.shadowColor : props.shadow !== undefined ? props.shadowColor : undefined,
      shadowColorContrast: (td?.shadow !== undefined && td.shadowColorContrast !== undefined) ? td.shadowColorContrast : props.shadow !== undefined ? props.shadowColorContrast : undefined,
      shadowOpacity: (td?.shadow !== undefined && td.shadowOpacity !== undefined) ? td.shadowOpacity : props.shadow !== undefined ? props.shadowOpacity : undefined,
      darkShadowColor: (td?.shadow !== undefined && td.darkShadowColor !== undefined) ? td.darkShadowColor : props.shadow !== undefined ? props.darkShadowColor : undefined,
      darkShadowColorContrast: (td?.shadow !== undefined && td.darkShadowColorContrast !== undefined) ? td.darkShadowColorContrast : props.shadow !== undefined ? props.darkShadowColorContrast : undefined,
      darkShadowOpacity: (td?.shadow !== undefined && td.darkShadowOpacity !== undefined) ? td.darkShadowOpacity : props.shadow !== undefined ? props.darkShadowOpacity : undefined,
      selectionColor: td?.selectionColor !== undefined ? td.selectionColor : props.selectionColor,
      selectionColorContrast: td?.selectionColorContrast !== undefined ? td.selectionColorContrast : props.selectionColorContrast,
      darkSelectionColor: td?.darkSelectionColor !== undefined ? td.darkSelectionColor : props.darkSelectionColor,
      darkSelectionColorContrast: td?.darkSelectionColorContrast !== undefined ? td.darkSelectionColorContrast : props.darkSelectionColorContrast,
      selectionTextColor: td?.selectionTextColor !== undefined ? td.selectionTextColor : props.selectionTextColor,
      selectionTextColorContrast: td?.selectionTextColorContrast !== undefined ? td.selectionTextColorContrast : props.selectionTextColorContrast,
      darkSelectionTextColor: td?.darkSelectionTextColor !== undefined ? td.darkSelectionTextColor : props.darkSelectionTextColor,
      darkSelectionTextColorContrast: td?.darkSelectionTextColorContrast !== undefined ? td.darkSelectionTextColorContrast : props.darkSelectionTextColorContrast
    },
    spacing: {
      mx: td?.mx !== undefined ? td.mx : props.mx,
      my: td?.my !== undefined ? td.my : props.my,
      mb: td?.mb !== undefined ? td.mb : props.mb,
      ml: td?.ml !== undefined ? td.ml : props.ml,
      mr: td?.mr !== undefined ? td.mr : props.mr,
      mt: td?.mt !== undefined ? td.mt : props.mt
    }
  })

  const clsOverlay = base({
    model: {
      width: "full",
      height: "full"
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
      px: td?.px !== undefined ? td.px : props.px,
      py: td?.py !== undefined ? td.py : props.py,
      pb: td?.pb !== undefined ? td.pb : props.pb,
      pl: td?.pl !== undefined ? td.pl : props.pl,
      pr: td?.pr !== undefined ? td.pr : props.pr,
      pt: td?.pt !== undefined ? td.pt : props.pt
    }
  })

  const clsTitle = base({
    flexbox: {
      flex: true,
      alignItems: "center"
    },
    visual: {
      dark: false,
      bgColor: td?.titleColor !== undefined ? td.titleColor : td?.color !== undefined ? td.color : props.titleColor !== undefined ? props.titleColor : props.color,
      bgColorContrast: td?.titleColorContrast !== undefined ? td.titleColorContrast : td?.colorContrast !== undefined ? td.colorContrast :props.titleColorContrast !== undefined ? props.titleColorContrast : props.colorContrast,
      darkBgColor: td?.darkTitleColor !== undefined ? td.darkTitleColor : props.darkTitleColor !== undefined ? props.darkTitleColor : props.darkColor,
      darkBgColorContrast: td?.darkTitleColorContrast !== undefined ? td.darkTitleColorContrast : props.darkTitleColorContrast !== undefined ? props.darkTitleColorContrast : props.darkColorContrast,
      bgGradientPosition: td?.bgGradientPosition !== undefined ? td.bgGradientPosition : props.bgGradientPosition,
      bgGradientEndColor: td?.bgGradientEndColor !== undefined ? td.bgGradientEndColor : props.bgGradientEndColor,
      bgGradientEndColorContrast: td?.bgGradientEndColorContrast !== undefined ? td.bgGradientEndColorContrast : props.bgGradientEndColorContrast,
      bgGradientFromColor: td?.bgGradientFromColor !== undefined ? td.bgGradientFromColor : props.bgGradientFromColor,
      bgGradientFromColorContrast: td?.bgGradientFromColorContrast !== undefined ? td.bgGradientFromColorContrast : props.bgGradientFromColorContrast,
      bgGradientMiddleColor: td?.bgGradientMiddleColor !== undefined ? td.bgGradientMiddleColor : props.bgGradientMiddleColor,
      bgGradientMiddleColorContrast: td?.bgGradientMiddleColorContrast !== undefined ? td.bgGradientMiddleColorContrast : props.bgGradientMiddleColorContrast,
      borderWidth:  props.title === undefined ? undefined : td?.borderWidth !== undefined ? td.borderWidth : props.borderWidth,
      borderStyle: props.title === undefined ? undefined : td?.borderStyle !== undefined ? td.borderStyle : props.borderStyle,
      borderColor: props.title === undefined ? undefined : td?.borderColor !== undefined ? td.borderColor : props.borderColor,
      borderColorContrast: props.title === undefined ? undefined : td?.borderColorContrast !== undefined ? td.borderColorContrast : props.borderColorContrast,
      borderPosition: props.title !== undefined ? "bottom" : undefined
    },
    spacing: {
      px: td?.px !== undefined ? td.px : props.px,
      py: td?.py !== undefined ? td.py : props.py,
      pb: td?.pb !== undefined ? td.pb : props.pb,
      pl: td?.pl !== undefined ? td.pl : props.pl,
      pr: td?.pr !== undefined ? td.pr : props.pr,
      pt: td?.pt !== undefined ? td.pt : props.pt
    }
  })

  const clsContent = base({
    visual: {
      dark: dark,
      bgColor: td?.color !== undefined ? td.color : props.color,
      bgColorContrast: td?.colorContrast !== undefined ? td.colorContrast : props.colorContrast,
      darkBgColor: td?.darkColor !== undefined ? td.darkColor : props.darkColor,
      darkBgColorContrast: td?.darkColorContrast !== undefined ? td.darkColorContrast : props.darkColorContrast,
      bgGradientPosition: td?.bgGradientPosition !== undefined ? td.bgGradientPosition : props.bgGradientPosition,
      bgGradientEndColor: td?.bgGradientEndColor !== undefined ? td.bgGradientEndColor : props.bgGradientEndColor,
      bgGradientEndColorContrast: td?.bgGradientEndColorContrast !== undefined ? td.bgGradientEndColorContrast : props.bgGradientEndColorContrast,
      bgGradientFromColor: td?.bgGradientFromColor !== undefined ? td.bgGradientFromColor : props.bgGradientFromColor,
      bgGradientFromColorContrast: td?.bgGradientFromColorContrast !== undefined ? td.bgGradientFromColorContrast : props.bgGradientFromColorContrast,
      bgGradientMiddleColor: td?.bgGradientMiddleColor !== undefined ? td.bgGradientMiddleColor : props.bgGradientMiddleColor,
      bgGradientMiddleColorContrast: td?.bgGradientMiddleColorContrast !== undefined ? td.bgGradientMiddleColorContrast : props.bgGradientMiddleColorContrast,
    }
  })

  const clsFooter = base({
    flexbox: {
      flex: true,
      alignItems: "center"
    },
    visual: {
      dark: false,
      bgColor: td?.footerColor !== undefined ? td.footerColor : td?.color !== undefined ? td.color : props.footerColor !== undefined ? props.footerColor : props.color,
      bgColorContrast: td?.footerColorContrast !== undefined ? td.footerColorContrast : td?.colorContrast !== undefined ? td.colorContrast : props.footerColorContrast !== undefined ? props.footerColorContrast : props.colorContrast,
      darkBgColor: td?.darkFooterColor !== undefined ? td.darkFooterColor : props.darkFooterColor !== undefined ? props.darkFooterColor : props.darkColor,
      darkBgColorContrast: td?.darkFooterColorContrast !== undefined ? td.darkFooterColorContrast : props.darkFooterColorContrast !== undefined ? props.darkFooterColorContrast : props.darkColorContrast,
      bgGradientPosition: td?.bgGradientPosition !== undefined ? td.bgGradientPosition : props.bgGradientPosition,
      bgGradientEndColor: td?.bgGradientEndColor !== undefined ? td.bgGradientEndColor : props.bgGradientEndColor,
      bgGradientEndColorContrast: td?.bgGradientEndColorContrast !== undefined ? td.bgGradientEndColorContrast : props.bgGradientEndColorContrast,
      bgGradientFromColor: td?.bgGradientFromColor !== undefined ? td.bgGradientFromColor : props.bgGradientFromColor,
      bgGradientFromColorContrast: td?.bgGradientFromColorContrast !== undefined ? td.bgGradientFromColorContrast : props.bgGradientFromColorContrast,
      bgGradientMiddleColor: td?.bgGradientMiddleColor !== undefined ? td.bgGradientMiddleColor : props.bgGradientMiddleColor,
      bgGradientMiddleColorContrast: td?.bgGradientMiddleColorContrast !== undefined ? td.bgGradientMiddleColorContrast : props.bgGradientMiddleColorContrast,
      borderWidth: props.footer === undefined ? undefined : td?.borderWidth !== undefined ? td.borderWidth : props.borderWidth,
      borderStyle: props.footer === undefined ? undefined : td?.borderStyle !== undefined ? td.borderStyle : props.borderStyle,
      borderColor: props.footer === undefined ? undefined : td?.borderColor !== undefined ? td.borderColor : props.borderColor,
      borderColorContrast: props.footer === undefined ? undefined : td?.borderColorContrast !== undefined ? td.borderColorContrast : props.borderColorContrast,
      borderPosition: "top"
    },
    spacing: {
      px: td?.px !== undefined ? td.px : props.px,
      py: td?.py !== undefined ? td.py : props.py,
      pb: td?.pb !== undefined ? td.pb : props.pb,
      pl: td?.pl !== undefined ? td.pl : props.pl,
      pr: td?.pr !== undefined ? td.pr : props.pr,
      pt: td?.pt !== undefined ? td.pt : props.pt
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
        <div className={[clsContainer, "inset-0"].join(" ")}>
          <FocusLock>
            <motion.div
            ref={ref}
            key="modal-dialog"
            id={`zenbu-dialog-${id}`}
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
                      <Icon icon="x-solid" color={((props.color === "white" && td?.color === undefined) || td?.color === "white" || (props.color === "gray" && td?.color === undefined) || td?.color === "gray") ? "black" : "white"} height="4" />
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
                    <Icon icon="x-solid" color={((props.color === "white" && td?.color === undefined) || td?.color === "white" || (props.color === "gray" && td?.color === undefined) || td?.color === "gray") ? "black" : "white"} height="4" />
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
