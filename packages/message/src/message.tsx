import { base, ColorProps, ModelProps, ResponsiveProps, SpacingProps, StandardProps, text, VisualProps } from "@zenbu-ui/core"
import { Icon } from "@zenbu-ui/icon"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@zenbu-ui/react-id"
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

  const { dark, theme } = React.useContext(ThemeCtx)
  const id = useId("message")

  const tm = theme?.message?.[`${props.componentName}`]

  const [visible, setVisible] = React.useState(props.visible)

  React.useEffect(() => {
    if (props.visible !== undefined) setVisible(props.visible)
  }, [props.visible])

  const cls = base({
    model: {
      overflow: "hidden",
      width: tm?.width !== undefined ? tm.width : props.width,
    },
    positioning: (tm?.fixed || (props.fixed && tm?.fixed === undefined)) ? {
      position: "fixed",
      bottom: (tm?.position === "bottom" || (props.position === "bottom" && tm?.position === undefined)) ? "0" : undefined,
      top: (tm?.position === "top" || (props.position === "top" && tm?.position === undefined)) ? "0" : undefined,
      zIndex: (tm?.fixed || (props.fixed && tm?.fixed === undefined)) ? "20" : undefined
    } : undefined,
    responsive: {
      sm: tm?.sm !== undefined ? tm.sm : props.sm,
      md: tm?.md !== undefined ? tm.md : props.md,
      lg: tm?.lg !== undefined ? tm.lg : props.lg,
      xl: tm?.xl !== undefined ? tm.xl : props.xl,
      "2xl": tm?.["2xl"] !== undefined ? tm["2xl"] : props["2xl"]
    },
    visual: {
      dark: dark,
      bgColor: tm?.color !== undefined ? tm.color : props.color,
      bgColorContrast: tm?.colorContrast !== undefined ? tm.colorContrast : props.colorContrast,
      darkBgColor: tm?.darkColor !== undefined ? tm.darkColor : props.darkColor,
      darkBgColorContrast: tm?.darkColorContrast !== undefined ? tm.darkColorContrast : props.darkColorContrast,
      bgGradientPosition: tm?.bgGradientPosition !== undefined ? tm.bgGradientPosition : props.bgGradientPosition,
      bgGradientEndColor: tm?.bgGradientEndColor !== undefined ? tm.bgGradientEndColor : props.bgGradientEndColor,
      bgGradientEndColorContrast: tm?.bgGradientEndColorContrast !== undefined ? tm.bgGradientEndColorContrast : props.bgGradientEndColorContrast,
      bgGradientFromColor: tm?.bgGradientFromColor !== undefined ? tm.bgGradientFromColor : props.bgGradientFromColor,
      bgGradientFromColorContrast: tm?.bgGradientFromColorContrast !== undefined ? tm.bgGradientFromColorContrast : props.bgGradientFromColorContrast,
      bgGradientMiddleColor: tm?.bgGradientMiddleColor !== undefined ? tm.bgGradientMiddleColor : props.bgGradientMiddleColor,
      bgGradientMiddleColorContrast: tm?.bgGradientMiddleColorContrast !== undefined ? tm.bgGradientMiddleColorContrast : props.bgGradientMiddleColorContrast,
      borderWidth: (tm?.border && tm.borderWidth !== undefined) ? tm.borderWidth : (props.border && tm?.border === undefined) ? props.borderWidth : undefined,
      borderStyle: (tm?.border && tm.borderStyle !== undefined) ? tm.borderStyle : (props.border && tm?.border === undefined) ? props.borderStyle : undefined,
      borderColor: (tm?.border && tm.borderColor !== undefined) ? tm.borderColor : (props.border && tm?.border === undefined) ? props.borderColor : undefined,
      borderColorContrast: (tm?.border && tm.borderColorContrast !== undefined) ? tm.borderColorContrast : (props.border && tm?.border === undefined) ? props.borderColorContrast : undefined,
      borderRadius: tm?.rounded !== undefined ? tm.rounded : props.rounded,
      borderRadiusPosition: tm?.roundedPosition !== undefined ? tm.roundedPosition : props.roundedPosition,
      shadow: tm?.shadow !== undefined ? tm.shadow : props.shadow,
      shadowColor: (tm?.shadow !== undefined && tm.shadowColor !== undefined) ? tm.shadowColor : props.shadow !== undefined ? props.shadowColor : undefined,
      shadowColorContrast: (tm?.shadow !== undefined && tm.shadowColorContrast !== undefined) ? tm.shadowColorContrast : props.shadow !== undefined ? props.shadowColorContrast : undefined,
      shadowOpacity: (tm?.shadow !== undefined && tm.shadowOpacity !== undefined) ? tm.shadowOpacity : props.shadow !== undefined ? props.shadowOpacity : undefined,
      darkShadowColor: (tm?.shadow !== undefined && tm.darkShadowColor !== undefined) ? tm.darkShadowColor : props.shadow !== undefined ? props.darkShadowColor : undefined,
      darkShadowColorContrast: (tm?.shadow !== undefined && tm.darkShadowColorContrast) ? tm.darkShadowColorContrast : props.shadow !== undefined ? props.darkShadowColorContrast : undefined,
      darkShadowOpacity: (tm?.shadow !== undefined && tm.darkShadowOpacity !== undefined) ? tm.darkShadowOpacity : props.shadow !== undefined ? props.darkShadowOpacity : undefined,
      selectionColor: tm?.selectionColor !== undefined ? tm.selectionColor : props.selectionColor,
      selectionColorContrast: tm?.selectionColorContrast !== undefined ? tm.selectionColorContrast : props.selectionColorContrast,
      darkSelectionColor: tm?.darkSelectionColor !== undefined ? tm.darkSelectionColor : props.darkSelectionColor,
      darkSelectionColorContrast: tm?.darkSelectionColorContrast !== undefined ? tm.darkSelectionColorContrast : props.darkSelectionColorContrast,
      selectionTextColor: tm?.selectionTextColor !== undefined ? tm.selectionTextColor : props.selectionTextColor,
      selectionTextColorContrast: tm?.selectionTextColorContrast !== undefined ? tm.selectionTextColorContrast : props.selectionTextColorContrast,
      darkSelectionTextColor: tm?.darkSelectionTextColor !== undefined ? tm.darkSelectionTextColor : props.darkSelectionTextColor,
      darkSelectionTextColorContrast: tm?.darkSelectionTextColorContrast !== undefined ? tm.darkSelectionTextColorContrast : props.darkSelectionTextColorContrast
    },
    spacing: {
      mx: tm?.mx !== undefined ? tm.mx : props.mx,
      my: tm?.my !== undefined ? tm.my : props.my,
      mb: tm?.mb !== undefined ? tm.mb : props.mb,
      ml: tm?.ml !== undefined ? tm.ml : props.ml,
      mr: tm?.mr !== undefined ? tm.mr : props.mr,
      mt: tm?.mt !== undefined ? tm.mt : props.mt,
      px: tm?.px !== undefined ? tm.px : props.px,
      py: tm?.py !== undefined ? tm.py : props.py,
      pb: tm?.pb !== undefined ? tm.pb : props.pb,
      pl: tm?.pl !== undefined ? tm.pl : props.pl,
      pr: tm?.pr !== undefined ? tm.pr : props.pr,
      pt: tm?.pt !== undefined ? tm.pt : props.pt
    }
  })

  const clsContent = base({
    positioning: {
      position: "relative"
    },
    flexbox: {
      flex: true,
      alignItems: "center",
      justify: (tm?.contentCenter || (props.contentCenter && tm?.contentCenter === undefined)) ? "center" : undefined
    }
  })

  const HeaderAndDescription = () => {
    const cls = text({
      visualText: {
        dark: false,
        textColor: ((props.color === "white" && tm?.color === undefined) || tm?.color === "white" || (props.color === "gray" && tm?.color === undefined) || tm?.color === "gray") ? "black" : "white"
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

  if (!visible) return null

  return(
    <div
    id={id}
    className={[cls,
      (tm?.fixed || (props.fixed && tm?.fixed === undefined)) ? "inset-x-0" : ""].join(" ").trim()}>
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
            <Icon icon="x-solid" color={((props.color === "white" && tm?.color === undefined) || tm?.color === "white" || (props.color === "gray" && tm?.color === undefined) || tm?.color === "gray") ? "black" : "white"} height="5" />
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
  shadowColor: "gray",
  shadowColorContrast: "400",
  shadowOpacity: 50,
  rounded: "md",
  closable: false,
  px: "4",
  py: "3"
}
