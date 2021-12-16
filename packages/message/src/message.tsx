import { base, ColorProps, ModelProps, ResponsiveProps, SpacingProps, StandardProps, text, VisualProps } from "@zenbu-ui/core"
import { Icon } from "@zenbu-ui/icon"
import * as React from "react"

interface MessageProps extends StandardProps, ResponsiveProps, ModelProps, ColorProps, VisualProps, SpacingProps {
  visible?: boolean
  header?: React.ReactNode,
  description?: React.ReactNode,
  icon?: React.ReactNode,
  fixed?: boolean,
  position?: "bottom" | "top",
  contentCenter?: boolean,
  closable?: boolean,
  onClose?: () => void
}

export const Message: React.FC<MessageProps> = (props) => {
  if (props.fixed && props.position === undefined) {
    throw new Error("You must fill the `position` property with bottom or top if you want to use a `fixed` property")
  }

  const [visible, setVisible] = React.useState(props.visible)

  const cls = base({
    model: {
      overflow: "hidden",
      width: props.width,
    },
    positioning: props.fixed ? {
      position: "fixed",
      bottom: props.position === "bottom" ? "0" : undefined,
      top: props.position === "top" ? "0" : undefined,
      zIndex: props.fixed ? "20" : undefined
    } : undefined,
    responsive: {
      sm: props.sm,
      md: props.md,
      lg: props.lg,
      xl: props.xl,
      "2xl": props["2xl"]
    },
    visual: {
      dark: false,
      bgColor: props.color,
      bgColorContrast: props.colorContrast,
      bgGradientPosition: props.bgGradientPosition,
      bgGradientEndColor: props.bgGradientEndColor,
      bgGradientEndColorContrast: props.bgGradientEndColorContrast,
      bgGradientFromColor: props.bgGradientFromColor,
      bgGradientFromColorContrast: props.bgGradientFromColorContrast,
      bgGradientMiddleColor: props.bgGradientMiddleColor,
      bgGradientMiddleColorContrast: props.bgGradientMiddleColorContrast,
      borderWidth: props.border ? props.borderWidth : undefined,
      borderStyle: props.border ? props.borderStyle : undefined,
      borderColor: props.border ? props.borderColor : undefined,
      borderColorContrast: props.border ? props.borderColorContrast : undefined,
      borderRadius: props.rounded,
      borderRadiusPosition: props.roundedPosition,
      shadow: props.shadow
    },
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

  const clsContent = base({
    positioning: {
      position: "relative"
    },
    flexbox: {
      flex: true,
      alignItems: "center",
      justify: props.contentCenter ? "center" : undefined
    }
  })

  const HeaderAndDescription = () => {
    const cls = text({
      visualText: {
        dark: false,
        textColor: (props.color === "white" || props.color === "gray") ? "black" : "white"
      }
    })

    return(
      <div className="flex flex-col space-y-1">
        {typeof props.header === "string" ? (
          <h3 className={[cls, "font-bold"].join(" ").trim()}>{props.header}</h3>
        ) : (props.header)}
        {typeof props.description === "string" ? (
          <p className={[cls, "text-sm"].join(" ").trim()}>{props.description}</p>
        ) : (props.description)}
      </div>
    )
  }

  const MessageWithIcon = () => {
    return(
      <div className="flex flex-row space-x-1.5">
        <div className="flex items-center">
          {props.icon}
        </div>
        <div className="block">
          <HeaderAndDescription />
        </div>
      </div>
    )
  }

  React.useEffect(() => {
    if (props.visible !== undefined) setVisible(props.visible)
  }, [props.visible])

  if (!visible) return null

  return(
    <div className={[cls,
      props.fixed ? "inset-x-0" : ""].join(" ").trim()}>
      <span className={clsContent}>
        {(props.header !== undefined && props.icon === undefined) && (<HeaderAndDescription />)}
        {(props.header !== undefined && props.icon !== undefined) && (<MessageWithIcon />)}

        {props.children}

        {props.closable && (
          <span
          className="absolute right-2 cursor-pointer"
          onClick={() => {
            setVisible(false)
            if (props.onClose !== undefined) props.onClose()
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") setVisible(false)
          }}
          aria-label="close"
          role="button"
          tabIndex={0}>
            <Icon icon="x-solid" color={(props.color === "white" || props.color === "gray") ? "black" : "white"} height="5" />
          </span>
        )}
      </span>
    </div>
  )
}

Message.defaultProps = {
  visible: true,
  fixed: false,
  contentCenter: false,
  width: "full",
  color: "gray",
  colorContrast: "200",
  border: true,
  borderWidth: "normal",
  borderStyle: "solid",
  borderColor: "gray",
  borderColorContrast: "300",
  rounded: "md",
  closable: false,
  px: "4",
  py: "3"
}
