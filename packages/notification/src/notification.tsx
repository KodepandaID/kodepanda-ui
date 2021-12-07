// Following the alert guideline WAI-ARIA 1.2
// https://w3c.github.io/aria-practices/examples/alert/alert.html

import { base, ColorProps, ModelProps, SpacingProps, StandardProps, VisualProps } from "@zenbu-ui/core"
import { Icon } from "@zenbu-ui/icon"
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
  const [queue, setQueue] = React.useState<Array<NotificationQueue>>([])

  const clsFloating = base({
    positioning: {
      position: "fixed",
      top: (props.position === "top-right" || props.position === "top-left") ? "0" : undefined,
      bottom: (props.position === "bottom-right" || props.position === "bottom-left") ? "0" : undefined,
      left: (props.position === "top-left" || props.position === "bottom-left") ? "0" : undefined,
      right: (props.position === "top-right" || props.position === "bottom-right") ? "0" : undefined,
      zIndex: "20"
    },
    spacing: {
      px: "3",
      py: "3"
    }
  })

  const cls = base({
    model: {
      overflow: "hidden",
      width: props.width
    },
    visual: {
      dark: false,
      bgColor: props.color,
      bgColorContrast: props.colorContrast,
      borderWidth: props.border ? props.borderWidth : undefined,
      borderStyle: props.border ? props.borderStyle : undefined,
      borderColor: props.border ? props.borderColor : undefined,
      borderColorContrast: props.border ? props.borderColorContrast : undefined,
      borderRadius: props.rounded,
      borderRadiusPosition: props.roundedPosition,
      shadow: props.shadow,
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
      borderColor: props.border ? props.borderColor : "gray",
      borderColorContrast: props.border ? props.borderColorContrast : "200",
      borderPosition: "bottom"
    },
    spacing: {
      px: props.px,
      py: props.py
    }
  })

  const clsContent = base({
    spacing: {
      mx: props.mx,
      my: props.my,
      mb: props.mb,
      ml: props.ml,
      mr: props.mr,
      mt: props.mt,
      px: props.px,
      py: props.py,
      pb: props.pb,
      pl: props.pl,
      pr: props.pr,
      pt: props.pt
    }
  })

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

  return(
    <Context.Provider value={Queue()}>
      <div
      className={[clsFloating, "space-y-3"].join(" ").trim()}
      style={(props.position === "top-center" || props.position === "bottom-center") ? {
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
                          aria-hidden="true"
                          role="button"
                          tabIndex={0}>
                            <Icon icon="x-solid" color={(props.color === "white" || props.color === "gray") ? "black" : "white"} height="3" />
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
                            <Icon icon="x-solid" color={(props.color === "white" || props.color === "gray") ? "black" : "white"} height="3" />
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
  rounded: "md",
  px: "3",
  py: "3"
}
