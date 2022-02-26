// Following the alert guideline WAI-ARIA 1.2
// https://w3c.github.io/aria-practices/examples/alert/alert.html

import { base, ColorProps, ModelProps, SpacingProps, StandardProps, VisualProps } from "@zenbu-ui/core"
import { Icon } from "@zenbu-ui/icon"
import { ThemeCtx } from "@zenbu-ui/provider"
import { motion, AnimatePresence } from "framer-motion"
import * as React from "react"

export interface NotificationProps extends StandardProps, ColorProps, ModelProps, VisualProps, SpacingProps {
  position?: "top-right" | "top-left" | "top-center" | "bottom-right" | "bottom-left" | "bottom-center",
  visible?: boolean,
  autoHide?: boolean,
  autoHideDelay?: number,
  closable?: boolean,
  onClick?: () => void
}

type NotificationContext = {
  queue: Array<NotificationQueue>
  add(id: string, data: NotificationQueueType): void
  addCustom(id: string, data: NotificationQueueType): void
  remove(id: string): void
}

interface NotificationQueue {
  id: string
  data: NotificationQueueType
}

type NotificationQueueType = {
  title?: React.ReactNode
  description: React.ReactNode
  custom?: React.ReactNode
} | {
  title?: React.ReactNode
  description?: React.ReactNode
  custom: React.ReactNode
}

export const Context = React.createContext<NotificationContext | undefined>(undefined)

export function useNotification() {
  const ctx = React.useContext(Context)
  if (ctx === undefined) {
    throw Error("Missing <NotificationProvider>, you must wrap your component with NotificationProvider. Read the documentation here https://zenbu-ui.com/docs/notification")
  }

  return ctx
}

export const NotificationProvider: React.FC<NotificationProps> = (props) => {
  const { dark, theme } = React.useContext(ThemeCtx)
  const [queue, setQueue] = React.useState<Array<NotificationQueue>>([])

  const tn = theme?.notification?.[`${props.componentName}`]

  const add = React.useCallback(
    (
      id: string,
      data: NotificationQueueType
    ) => {
      setQueue((prevQueue) => [...prevQueue, {
        id: id,
        data: data
      }])
    },
    [setQueue]
  )

  const addCustom = React.useCallback(
    (
      id: string,
      data: NotificationQueueType
    ) => {
      setQueue((prevQueue) => [...prevQueue, {
        id: id,
        data: data
      }])
    },
    [setQueue]
  )

  const remove = React.useCallback(
    (
      id: string
    ) => {
      setQueue((prevQueue) => prevQueue.filter((e) => e.id !== id))
    },
    [setQueue]
  )

  const removeFirstQueue = React.useCallback(
    () => {
      if (queue.length > 0) {
        setQueue((prevQueue) => prevQueue.filter((e) => e.id !== prevQueue[0].id))
      }
    },
    [queue]
  )

  const Queue = React.useCallback(() => {
    return {
      queue: queue,
      add: add,
      addCustom: addCustom,
      remove
    }
  }, [
    queue,
    add,
    addCustom,
    remove
  ])

  React.useEffect(() => {
    if (props.autoHide) {
      setTimeout(() => {
        removeFirstQueue()
      }, props.autoHideDelay)
    }
  }, [props.autoHide, props.autoHideDelay, removeFirstQueue])

  const clsFloating = base({
    positioning: {
      position: "fixed",
      top: ((props.position === "top-right" && tn?.position === undefined) || (props.position === "top-left" && tn?.position === undefined) || tn?.position === "top-right" || tn?.position === "top-left") ? "0" : undefined,
      bottom: ((props.position === "bottom-right" && tn?.position === undefined) || (props.position === "bottom-left" && tn?.position === undefined) || tn?.position === "bottom-right" || tn?.position === "bottom-left") ? "0" : undefined,
      left: ((props.position === "top-left" && tn?.position === undefined) || (props.position === "bottom-left" && tn?.position === undefined) || tn?.position === "top-left" || tn?.position === "bottom-left") ? "0" : undefined,
      right: ((props.position === "top-right" && tn?.position === undefined) || (props.position === "bottom-right" && tn?.position === undefined) || tn?.position === "top-right" || tn?.position === "bottom-right") ? "0" : undefined,
      zIndex: "50"
    },
    spacing: {
      px: "3",
      py: "3"
    }
  })

  const cls = base({
    model: {
      overflow: "hidden",
      width: tn?.width !== undefined ? tn.width : props.width
    },
    visual: {
      dark: dark,
      bgColor: tn?.color !== undefined ? tn.color : props.color,
      bgColorContrast: tn?.colorContrast !== undefined ? tn.colorContrast : props.colorContrast,
      darkBgColor: tn?.darkColor !== undefined ? tn.darkColor : props.darkColor,
      darkBgColorContrast: tn?.darkColorContrast !== undefined ? tn.darkColorContrast : props.darkColorContrast,
      borderWidth: (tn?.border && tn.borderWidth !== undefined) ? tn.borderWidth : (props.border && tn?.border === undefined) ? props.borderWidth : undefined,
      borderStyle: (tn?.border && tn.borderStyle !== undefined) ? tn.borderStyle : (props.border && tn?.border === undefined) ? props.borderStyle : undefined,
      borderColor: (tn?.border && tn.borderColor !== undefined) ? tn.borderColor : (props.border && tn?.border === undefined) ? props.borderColor : undefined,
      borderColorContrast: (tn?.border && tn.borderColorContrast !== undefined) ? tn.borderColorContrast : (props.border && tn?.border === undefined) ? props.borderColorContrast : undefined,
      borderRadius: tn?.rounded !== undefined ? tn.rounded : props.rounded,
      borderRadiusPosition: tn?.roundedPosition !== undefined ? tn.roundedPosition : props.roundedPosition,
      shadow: tn?.shadow !== undefined ? tn.shadow : props.shadow,
      shadowColor: (tn?.shadow !== undefined && tn.shadowColor !== undefined) ? tn.shadowColor : props.shadow !== undefined ? props.shadowColor : undefined,
      shadowColorContrast: (tn?.shadow !== undefined && tn.shadowColorContrast !== undefined) ? tn.shadowColorContrast : props.shadow !== undefined ? props.shadowColorContrast : undefined,
      shadowOpacity: (tn?.shadow !== undefined && tn.shadowOpacity !== undefined) ? tn.shadowOpacity : props.shadow !== undefined ? props.shadowOpacity : undefined,
      darkShadowColor: (tn?.shadow !== undefined && tn.darkShadowColor !== undefined) ? tn.darkShadowColor : props.shadow !== undefined ? props.darkShadowColor : undefined,
      darkShadowColorContrast: (tn?.shadow !== undefined && tn.darkShadowColorContrast) ? tn.darkShadowColorContrast : props.shadow !== undefined ? props.darkShadowColorContrast : undefined,
      darkShadowOpacity: (tn?.shadow !== undefined && tn.darkShadowOpacity !== undefined) ? tn.darkShadowOpacity : props.shadow !== undefined ? props.darkShadowOpacity : undefined,
      selectionColor: tn?.selectionColor !== undefined ? tn.selectionColor : props.selectionColor,
      selectionColorContrast: tn?.selectionColorContrast !== undefined ? tn.selectionColorContrast : props.selectionColorContrast,
      darkSelectionColor: tn?.darkSelectionColor !== undefined ? tn.darkSelectionColor : props.darkSelectionColor,
      darkSelectionColorContrast: tn?.darkSelectionColorContrast !== undefined ? tn.darkSelectionColorContrast : props.darkSelectionColorContrast,
      selectionTextColor: tn?.selectionTextColor !== undefined ? tn.selectionTextColor : props.selectionTextColor,
      selectionTextColorContrast: tn?.selectionTextColorContrast !== undefined ? tn.selectionTextColorContrast : props.selectionTextColorContrast,
      darkSelectionTextColor: tn?.darkSelectionTextColor !== undefined ? tn.darkSelectionTextColor : props.darkSelectionTextColor,
      darkSelectionTextColorContrast: tn?.darkSelectionTextColorContrast !== undefined ? tn.darkSelectionTextColorContrast : props.darkSelectionTextColorContrast
    },
    misc: props.onClick !== undefined ? {
      cursor: "pointer"
    } : undefined
  })

  const clsTitle = base({
    flexbox: {
      flex: true,
      alignItems: "center"
    },
    visual: {
      dark: false,
      borderWidth: "normal",
      borderStyle: "solid",
      borderColor: (tn?.border && tn.borderColor !== undefined) ? tn.borderColor : props.border ? props.borderColor : "gray",
      borderColorContrast: (tn?.border && tn.borderColorContrast !== undefined) ? tn.borderColorContrast : props.border ? props.borderColorContrast : "200",
      borderPosition: "bottom"
    },
    spacing: {
      px: tn?.px !== undefined ? tn.px : props.px,
      py: tn?.py !== undefined ? tn.py : props.py
    }
  })

  const clsContent = base({
    spacing: {
      mx: tn?.mx !== undefined ? tn.mx : props.mx,
      my: tn?.my !== undefined ? tn.my : props.my,
      mb: tn?.mb !== undefined ? tn.mb : props.mb,
      ml: tn?.ml !== undefined ? tn.ml : props.ml,
      mr: tn?.mr !== undefined ? tn.mr : props.mr,
      mt: tn?.mt !== undefined ? tn.mt : props.mt,
      px: tn?.px !== undefined ? tn.px : props.px,
      py: tn?.py !== undefined ? tn.py : props.py,
      pb: tn?.pb !== undefined ? tn.pb : props.pb,
      pl: tn?.pl !== undefined ? tn.pl : props.pl,
      pr: tn?.pr !== undefined ? tn.pr : props.pr,
      pt: tn?.pt !== undefined ? tn.pt : props.pt
    }
  })

  return(
    <Context.Provider value={Queue()}>
      <div
      className={[clsFloating, "space-y-3"].join(" ").trim()}
      style={((props.position === "top-center" && tn?.position === undefined) || (props.position === "bottom-center" && tn?.position === undefined) || tn?.position === "top-center" || tn?.position === "bottom-center") ? {
        transform: "translateX(-50%)",
        left: "50%"
      } : undefined}>
        <AnimatePresence initial={false}>
          {queue.map(({ id, data }) => (
            <motion.div
            key={id}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            initial={{ opacity: 0, y: 50, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}>
              {data.custom === undefined ? (
                <div className={cls}>
                    {data.title !== undefined && (
                      <div className={clsTitle}>
                        <span className="mr-auto">{data.title}</span>
                        {props.closable && (
                          <span
                          className="ml-2 cursor-pointer"
                          onClick={() => remove(id)}
                          onKeyPress={(e) => {
                            if (e.key === "Enter") remove(id)
                          }}
                          aria-label="close"
                          role="button"
                          tabIndex={0}>
                            <Icon icon="x-solid" color={((props.color === "white" && tn?.color === undefined) || tn?.color === "white" || (props.color === "gray" && tn?.color === undefined) || tn?.color === "gray") ? "black" : "white"} height="3" />
                          </span>
                        )}
                      </div>
                    )}
                    <div className={["break-words", clsContent].join(" ").trim()}>
                      <span className="relative flex items-center">
                        <span className="mr-auto">{data.description}</span>
                        {(props.closable && data.title === undefined) && (
                          <span
                          className="ml-2 cursor-pointer"
                          onClick={() => remove(id)}
                          onKeyPress={(e) => {
                            if (e.key === "Enter") remove(id)
                          }}
                          aria-hidden="true"
                          role="button"
                          tabIndex={0}>
                            <Icon icon="x-solid" color={((props.color === "white" && tn?.color === undefined) || tn?.color === "white" || (props.color === "gray" && tn?.color === undefined) || tn?.color === "gray") ? "black" : "white"} height="3" />
                          </span>
                        )}
                      </span>
                    </div>
                </div>
              ) : (data.custom)}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
      {props.children}
    </Context.Provider>
  )
}

NotificationProvider.defaultProps = {
  position: "bottom-right",
  visible: false,
  autoHide: false,
  autoHideDelay: 3000,
  closable: false,
  width: "96",
  color: "white",
  border: true,
  borderWidth: "normal",
  borderColor: "gray",
  borderColorContrast: "200",
  shadowColor: "gray",
  shadowColorContrast: "400",
  shadowOpacity: 50,
  rounded: "md",
  px: "3",
  py: "3"
}
