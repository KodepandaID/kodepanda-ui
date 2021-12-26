// Following the alert-dialog guideline WAI-ARIA 1.2
// https://www.w3.org/TR/wai-aria-practices-1.2/examples/dialog-modal/alertdialog.html

import { base, Color, ColorContrast, ColorProps, ModelProps, ResponsiveProps, SpacingProps, StandardProps, useEscKeyboardEvent, VisualProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { motion, AnimatePresence } from "framer-motion"
import FocusLock from "react-focus-lock"
import * as React from "react"
import { Button } from "@zenbu-ui/button"

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
  const { dark } = React.useContext(ThemeCtx)
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

  const clsFooter = base({
    flexbox: {
      flex: true,
      alignItems: "center",
      justify: props.footer === undefined ? "end" : undefined,
    },
    visual: {
      dark: false,
      bgColor: props.footerColor !== undefined ? props.footerColor : props.color,
      bgColorContrast: props.footerColorContrast !== undefined ? props.footerColorContrast : props.colorContrast,
      darkBgColor: props.darkColor,
      darkBgColorContrast: props.darkColorContrast,
      bgGradientPosition: props.bgGradientPosition,
      bgGradientEndColor: props.bgGradientEndColor,
      bgGradientEndColorContrast: props.bgGradientEndColorContrast,
      bgGradientFromColor: props.bgGradientFromColor,
      bgGradientFromColorContrast: props.bgGradientFromColorContrast,
      bgGradientMiddleColor: props.bgGradientMiddleColor,
      bgGradientMiddleColorContrast: props.bgGradientMiddleColorContrast,
      borderWidth: !props.border ? undefined : props.borderWidth,
      borderStyle: !props.border ? undefined : props.borderStyle,
      borderColor: !props.border ? undefined : props.borderColor,
      borderColorContrast: !props.border ? undefined : props.borderColorContrast,
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

  const okHandler = () => {
    setVisible(false)
    if (props.onOk !== undefined) props.onOk()
  }

  const closeHandler = () => {
    setVisible(false)
    if (props.onCancel !== undefined) props.onCancel()
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
        exit="exit"></motion.div>
        <div className={clsContainer}>
          <FocusLock>
            <motion.div
            ref={ref}
            key="alert-dialog"
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
                  color={props.cancelColor} colorContrast={props.cancelColorContrast}
                  darkColor={props.darkCancelColor} darkColorContrast={props.darkCancelColorContrast}
                  textColor={props.cancelTextColor} textColorContrast={props.cancelTextColorContrast} fontWeight="semibold"
                  rounded={props.rounded}
                  onClick={() => closeHandler()}>
                    {props.cancelText}
                  </Button>
                  <Button
                  border={false}
                  color={props.okColor} colorContrast={props.okColorContrast}
                  darkColor={props.darkOkColor} darkColorContrast={props.darkOkColorContrast}
                  textColor={props.okTextColor} textColorContrast={props.okTextColorContrast} fontWeight="semibold"
                  rounded={props.rounded}
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
