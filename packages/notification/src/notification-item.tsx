import { base, ColorProps, ModelProps, SpacingProps, StandardProps, VisualProps } from "@zenbu-ui/core"
import { Icon } from "@zenbu-ui/icon"
import * as React from "react"
import { useNotification } from "."

interface NotificationProps extends StandardProps, ColorProps, ModelProps, VisualProps, SpacingProps {
  id: string,
  title?: React.ReactNode,
  description: React.ReactNode,
  position?: "top-right" | "top-left" | "top-center" | "bottom-right" | "bottom-left" | "bottom-center",
  visible?: boolean,
  autoHide?: boolean,
  autoHideDelay?: number,
  closable?: boolean,
  onClick?: () => void
}

export const Notification: React.FC<NotificationProps> = (props) => {
  const notify = useNotification()

  const cls = base({
    model: {
      overflow: "hidden",
      width: props.width,
    },
    positioning: {
      zIndex: "50",
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

  return(
    <div className={cls}>
        {props.title !== undefined && (
          <div className={clsTitle}>
            <span className="mr-auto">{props.title}</span>
            {props.closable && (
              <span
              className="ml-2 cursor-pointer"
              onClick={() => notify.remove(props.id)}
              onKeyPress={(e) => {
                if (e.key === "Enter") notify.remove(props.id)
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
            <span className="mr-auto">{props.description}</span>
            {(props.closable && props.title === undefined) && (
              <span
              className="ml-2 cursor-pointer"
              onClick={() => notify.remove(props.id)}
              onKeyPress={(e) => {
                if (e.key === "Enter") notify.remove(props.id)
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
  )
}

Notification.defaultProps = {
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
