// Following the alert-dialog guideline WAI-ARIA 1.2
// https://www.w3.org/TR/wai-aria-practices-1.2/examples/dialog-modal/alertdialog.html

import { base, Color, ColorContrast, ColorProps, ModelProps, ResponsiveProps, SpacingProps, StandardProps, useEscKeyboardEvent, VisualProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { motion, AnimatePresence } from "framer-motion"
import FocusLock from "react-focus-lock"
import * as React from "react"
import { Button } from "@zenbu-ui/button"
import { useId } from "@reach/auto-id"

interface AlertDialogProps extends StandardProps, ResponsiveProps, ColorProps, ModelProps, VisualProps, SpacingProps {
  visible: boolean,
  footer?: React.ReactNode,
  footerColor?: Color,
  footerColorContrast?: ColorContrast,
  darkFooterColor?: Color,
  darkFooterColorContrast?: ColorContrast,
  okText?: string,
  okColor?: Color,
  okColorContrast?: ColorContrast,
  okTextColor?: Color,
  okTextColorContrast?: ColorContrast,
  darkOkColor?: Color,
  darkOkColorContrast?: ColorContrast,
  darkOkTextColor?: Color,
  darkOkTextColorContrast?: ColorContrast,
  cancelText?: string,
  cancelColor?: Color,
  cancelColorContrast?: ColorContrast,
  cancelTextColor?: Color,
  cancelTextColorContrast?: ColorContrast,
  darkCancelColor?: Color,
  darkCancelColorContrast?: ColorContrast,
  darkCancelTextColor?: Color,
  darkCancelTextColorContrast?: ColorContrast,
  onOk?: () => void,
  onCancel?: () => void
}

export const AlertDialog: React.FC<AlertDialogProps> = (props) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const { dark, theme } = React.useContext(ThemeCtx)
  const id = useId()

  const tad = theme?.alertDialog?.[`${props.componentName}`]

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
      width: tad?.width !== undefined ? tad.width : props.width,
      overflow: "hidden"
    },
    flexbox: {
      flex: true,
      direction: "col"
    },
    visual: {
      dark: dark,
      borderWidth: (tad?.border && tad.borderWidth !== undefined) ? tad.borderWidth : (props.border && tad?.border === undefined) ? props.borderWidth : undefined,
      borderStyle: (tad?.border && tad.borderStyle !== undefined) ? tad.borderStyle : (props.border && tad?.border === undefined) ? props.borderStyle : undefined,
      borderColor: (tad?.border && tad.borderColor !== undefined) ? tad.borderColor : (props.border && tad?.border === undefined) ? props.borderColor : undefined,
      borderColorContrast: (tad?.border && tad.borderColorContrast !== undefined) ? tad.borderColorContrast : (props.border && tad?.border === undefined) ? props.borderColorContrast : undefined,
      borderRadius: tad?.rounded !== undefined ? tad.rounded : props.rounded,
      borderRadiusPosition: tad?.roundedPosition !== undefined ? tad.roundedPosition : props.roundedPosition,
      shadow: tad?.shadow !== undefined ? tad.shadow : props.shadow,
      shadowColor: (tad?.shadow !== undefined && tad.shadowColor !== undefined) ? tad.shadowColor : (props.shadow !== undefined && tad?.shadow === undefined) ? props.shadowColor : undefined,
      shadowColorContrast: (tad?.shadow !== undefined && tad.shadowColorContrast !== undefined) ? tad.shadowColorContrast : (props.shadow !== undefined && tad?.shadow === undefined) ? props.shadowColorContrast : undefined,
      shadowOpacity: (tad?.shadow !== undefined && tad.shadowOpacity !== undefined) ? tad.shadowOpacity : (props.shadow !== undefined && tad?.shadow === undefined) ? props.shadowOpacity : undefined,
      darkShadowColor: (tad?.shadow !== undefined && tad.darkShadowColor !== undefined) ? tad.darkShadowColor : (props.shadow !== undefined && tad?.shadow === undefined) ? props.darkShadowColor : undefined,
      darkShadowColorContrast: (tad?.shadow !== undefined && tad.darkShadowColorContrast !== undefined) ? tad.darkShadowColorContrast : (props.shadow !== undefined && tad?.shadow === undefined) ? props.darkShadowColorContrast : undefined,
      darkShadowOpacity: (tad?.shadow !== undefined && tad.darkShadowOpacity !== undefined) ? tad.darkShadowOpacity : (props.shadow !== undefined && tad?.shadow === undefined) ? props.darkShadowOpacity : undefined,
      selectionColor: tad?.selectionColor !== undefined ? tad.selectionColor : props.selectionColor,
      selectionColorContrast: tad?.selectionColorContrast !== undefined ? tad.selectionColorContrast : props.selectionColorContrast,
      darkSelectionColor: tad?.darkSelectionColor !== undefined ? tad.darkSelectionColor : props.darkSelectionColor,
      darkSelectionColorContrast: tad?.darkSelectionColorContrast !== undefined ? tad.darkSelectionColorContrast : props.darkSelectionColorContrast,
      selectionTextColor: tad?.selectionTextColor !== undefined ? tad.selectionTextColor : props.selectionTextColor,
      selectionTextColorContrast: tad?.selectionTextColorContrast !== undefined ? tad.selectionTextColorContrast : props.selectionTextColorContrast,
      darkSelectionTextColor: tad?.darkSelectionTextColor !== undefined ? tad.darkSelectionTextColor : props.darkSelectionTextColor,
      darkSelectionTextColorContrast: tad?.darkSelectionTextColorContrast !== undefined ? tad.darkSelectionTextColorContrast : props.darkSelectionTextColorContrast
    },
    spacing: {
      mx: (tad?.mx !== undefined) ? tad.mx : props.mx,
      my: (tad?.my !== undefined) ? tad.my : props.my,
      mb: (tad?.mb !== undefined) ? tad.mb : props.mb,
      ml: (tad?.ml !== undefined) ? tad.ml : props.ml,
      mr: (tad?.mr !== undefined) ? tad.mr : props.mr,
      mt: (tad?.mt !== undefined) ? tad.mt : props.mt,
    }
  })

  const clsOverlay = base({
    model: {
      width: "full",
      height: "full"
    },
    positioning: {
      position: "fixed",
      zIndex: "50"
    },
    visual: {
      dark: false,
      bgColor: "black",
      bgOpacity: 50
    }
  })

  const clsWrapper = base({
    visual: {
      dark: dark,
      bgColor: tad?.color !== undefined ? tad.color : props.color,
      bgColorContrast: tad?.colorContrast !== undefined ? tad.colorContrast : props.colorContrast,
      darkBgColor: tad?.darkColor !== undefined ? tad.darkColor : props.darkColor,
      darkBgColorContrast: tad?.darkColorContrast !== undefined ? tad.darkColorContrast : props.darkColorContrast,
      bgGradientPosition: tad?.bgGradientPosition !== undefined ? tad.bgGradientPosition : props.bgGradientPosition,
      bgGradientEndColor: tad?.bgGradientEndColor !== undefined ? tad.bgGradientEndColor : props.bgGradientEndColor,
      bgGradientEndColorContrast: tad?.bgGradientEndColorContrast !== undefined ? tad.bgGradientEndColorContrast : props.bgGradientEndColorContrast,
      bgGradientFromColor: tad?.bgGradientFromColor !== undefined ? tad.bgGradientFromColor : props.bgGradientFromColor,
      bgGradientFromColorContrast: tad?.bgGradientFromColorContrast !== undefined ? tad.bgGradientFromColorContrast : props.bgGradientFromColorContrast,
      bgGradientMiddleColor: tad?.bgGradientMiddleColor !== undefined ? tad.bgGradientMiddleColor : props.bgGradientMiddleColor,
      bgGradientMiddleColorContrast: tad?.bgGradientMiddleColorContrast !== undefined ? tad.bgGradientMiddleColorContrast : props.bgGradientMiddleColorContrast,
    },
    spacing: {
      px: (tad?.px !== undefined) ? tad.px : props.px,
      py: (tad?.py !== undefined) ? tad.py : props.py,
      pb: (tad?.pb !== undefined) ? tad.pb : props.pb,
      pl: (tad?.pl !== undefined) ? tad.pl : props.pl,
      pr: (tad?.pr !== undefined) ? tad.pr : props.pr,
      pt: (tad?.pt !== undefined) ? tad.pt : props.pt
    }
  })

  const clsFooter = base({
    flexbox: {
      flex: true,
      alignItems: "center",
      justify: props.footer === undefined ? "end" : undefined,
    },
    visual: {
      dark: false,
      bgColor: tad?.footerColor !== undefined ? tad.footerColor : props.footerColor !== undefined ? props.footerColor : props.color,
      bgColorContrast: tad?.footerColorContrast !== undefined ? tad.footerColorContrast : props.footerColorContrast !== undefined ? props.footerColorContrast : props.colorContrast,
      darkBgColor: tad?.darkColor !== undefined ? tad.darkColor : props.darkColor,
      darkBgColorContrast: tad?.darkColorContrast !== undefined ? tad.darkColorContrast : props.darkColorContrast,
      bgGradientPosition: tad?.bgGradientPosition !== undefined ? tad.bgGradientPosition : props.bgGradientPosition,
      bgGradientEndColor: tad?.bgGradientEndColor !== undefined ? tad.bgGradientEndColor : props.bgGradientEndColor,
      bgGradientEndColorContrast: tad?.bgGradientEndColorContrast !== undefined ? tad.bgGradientEndColorContrast : props.bgGradientEndColorContrast,
      bgGradientFromColor: tad?.bgGradientFromColor !== undefined ? tad.bgGradientFromColor : props.bgGradientFromColor,
      bgGradientFromColorContrast: tad?.bgGradientFromColorContrast !== undefined ? tad.bgGradientFromColorContrast : props.bgGradientFromColorContrast,
      bgGradientMiddleColor: tad?.bgGradientMiddleColor !== undefined ? tad.bgGradientMiddleColor : props.bgGradientMiddleColor,
      bgGradientMiddleColorContrast: tad?.bgGradientMiddleColorContrast !== undefined ? tad.bgGradientMiddleColorContrast : props.bgGradientMiddleColorContrast,
      borderWidth: (tad?.border && tad.borderWidth !== undefined) ? tad.borderWidth : (props.border && tad?.border === undefined) ? props.borderWidth : undefined,
      borderStyle: (tad?.border && tad.borderStyle !== undefined) ? tad.borderStyle : (props.border && tad?.border === undefined) ? props.borderStyle : undefined,
      borderColor: (tad?.border && tad.borderColor !== undefined) ? tad.borderColor : (props.border && tad?.border === undefined) ? props.borderColor : undefined,
      borderColorContrast: (tad?.border && tad.borderColorContrast !== undefined) ? tad.borderColorContrast : (props.border && tad?.border === undefined) ? props.borderColorContrast : undefined,
      borderPosition: "top"
    },
    spacing: {
      px: (tad?.px !== undefined) ? tad.px : props.px,
      py: (tad?.py !== undefined) ? tad.py : props.py,
      pb: (tad?.pb !== undefined) ? tad.pb : props.pb,
      pl: (tad?.pl !== undefined) ? tad.pl : props.pl,
      pr: (tad?.pr !== undefined) ? tad.pr : props.pr,
      pt: (tad?.pt !== undefined) ? tad.pt : props.pt
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

  const okHandler = () => {
    setVisible(false)
    if (props.onOk !== undefined) props.onOk()
  }

  const closeHandler = () => {
    setVisible(false)
    if (props.onCancel !== undefined) props.onCancel()
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
        exit="exit"></motion.div>
        <div className={[clsContainer, "inset-0"].join(" ")}>
          <FocusLock>
            <motion.div
            ref={ref}
            key="alert-dialog"
            id={`zenbu-alert-dialog-${id}`}
            className={cls}
            role="alertdialog"
            tabIndex={-1}
            variants={variants}
            initial="hidden"
            animate="visible"
            exit="exit">
              <div className={clsWrapper}>
                {props.children}
              </div>
              {props.footer === undefined ? (
                <div className={[clsFooter, "space-x-3"].join(" ").trim()}>
                  <Button
                  border={false}
                  color={tad?.cancelColor !== undefined ? tad.cancelColor : props.cancelColor}
                  colorContrast={tad?.cancelColorContrast !== undefined ? tad.cancelColorContrast : props.cancelColorContrast}
                  darkColor={tad?.darkCancelColor !== undefined ? tad.darkCancelColor : props.darkCancelColor}
                  darkColorContrast={tad?.darkCancelColorContrast !== undefined ? tad.darkCancelColorContrast : props.darkCancelColorContrast}
                  textColor={tad?.cancelTextColor !== undefined ? tad.cancelTextColor : props.cancelTextColor}
                  textColorContrast={tad?.cancelTextColorContrast !== undefined ? tad.cancelTextColorContrast : props.cancelTextColorContrast}
                  fontWeight="semibold"
                  rounded={tad?.rounded !== undefined ? tad.rounded : props.rounded}
                  onClick={() => closeHandler()}>
                    {props.cancelText}
                  </Button>
                  <Button
                  border={false}
                  color={tad?.okColor !== undefined ? tad.okColor : props.okColor}
                  colorContrast={tad?.okColorContrast !== undefined ? tad.okColorContrast : props.okColorContrast}
                  darkColor={tad?.darkOkColor !== undefined ? tad.darkOkColor : props.darkOkColor}
                  darkColorContrast={tad?.darkOkColorContrast !== undefined ? tad.darkOkColorContrast : props.darkOkColorContrast}
                  textColor={tad?.okTextColor !== undefined ? tad.okTextColor : props.okTextColor}
                  textColorContrast={tad?.okTextColorContrast !== undefined ? tad.okTextColorContrast : props.okTextColorContrast}
                  fontWeight="semibold"
                  rounded={tad?.rounded !== undefined ? tad.rounded : props.rounded}
                  onClick={() => okHandler()}>
                    {props.okText}
                  </Button>
                </div>
              ) : (
                <div className={[clsFooter].join(" ").trim()}>
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

AlertDialog.defaultProps = {
  visible: false,
  width: "96",
  color: "white",
  border: true,
  borderWidth: "normal",
  borderStyle: "solid",
  borderColor: "gray",
  borderColorContrast: "300",
  rounded: "md",
  okText: "Yes",
  okColor: "red",
  okColorContrast: "500",
  okTextColor: "white",
  cancelText: "Cancel",
  cancelColor: "gray",
  cancelColorContrast: "200",
  cancelTextColor: "gray",
  cancelTextColorContrast: "700",
  px: "4",
  py: "3"
}
