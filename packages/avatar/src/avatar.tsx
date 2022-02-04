import { base, element, ModelProps, SpacingProps, StandardProps,  text,  VisualTextProps,  VisualProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@reach/auto-id"
import * as React from "react"
import { AvatarGroup } from "./avatar-group"

interface AvatarProps extends StandardProps, ModelProps, VisualProps, VisualTextProps, SpacingProps {
  alt: string,
  src?: string,
  text?: string,
  blur?: boolean
}

export const Avatar: React.FC<AvatarProps> & { Group: React.FC } = (props) => {
  const { dark, theme } = React.useContext(ThemeCtx)
  const id = useId("avatar")

  if (props.src === undefined && props.text === undefined) {
    throw new Error("`src` props cannot be empty, if you don't want to use `src` props you must fill the `text` props.")
  }

  const tav = theme?.avatar?.[`${props.componentName}`]

  const clsSpan = base({
    model: {
      display: "inline-flex",
      overflow: "hidden",
      width: tav?.width !== undefined ? tav.width : props.width,
      height: tav?.width !== undefined ? tav.width : props.width,
    },
    flexbox: {
      flex: false,
      alignItems: "center",
      justify: "center",
      verticalAlign: "middle"
    },
    visual: {
      dark: dark,
      bgColor: tav?.bgColor !== undefined ? tav.bgColor : props.bgColor,
      bgColorContrast: tav?.bgColorContrast !== undefined ? tav.bgColorContrast : props.bgColorContrast,
      darkBgColor: tav?.darkBgColor !== undefined ? tav.darkBgColor : props.darkBgColor,
      darkBgColorContrast: tav?.darkBgColorContrast !== undefined ? tav.darkBgColorContrast : props.darkBgColorContrast,
      borderWidth: (tav?.border && tav.borderWidth !== undefined) ? tav.borderWidth : (props.border && tav?.border === undefined) ? props.borderWidth : undefined,
      borderStyle: (tav?.border && tav.borderStyle !== undefined) ? tav.borderStyle : (props.border && tav?.border === undefined) ? props.borderStyle : undefined,
      borderColor: (tav?.border && tav.borderColor !== undefined) ? tav.borderColor : (props.border && tav?.border === undefined) ? props.borderColor : undefined,
      borderColorContrast: (tav?.border && tav.borderColorContrast !== undefined) ? tav.borderColorContrast : (props.border && tav?.border === undefined) ? props.borderColorContrast : undefined,
      borderRadius: tav?.rounded !== undefined ? tav.rounded : props.rounded,
    },
    filter: {
      blur: tav?.blur ? "normal" : (props.blur && tav?.blur === undefined) ? "normal" : undefined
    },
    misc: {
      userSelect: "none"
    },
    spacing: {
      mx: (tav?.mx !== undefined) ? tav.mx : props.mx,
      my: (tav?.my !== undefined) ? tav.my : props.my,
      mb: (tav?.mb !== undefined) ? tav.mb : props.mb,
      ml: (tav?.ml !== undefined) ? tav.ml : props.ml,
      mr: (tav?.mr !== undefined) ? tav.mr : props.mr,
      mt: (tav?.mt !== undefined) ? tav.mt : props.mt,
      px: (tav?.px !== undefined) ? tav.px : props.px,
      py: (tav?.py !== undefined) ? tav.py : props.py,
      pb: (tav?.pb !== undefined) ? tav.pb : props.pb,
      pl: (tav?.pl !== undefined) ? tav.pl : props.pl,
      pr: (tav?.pr !== undefined) ? tav.pr : props.pr,
      pt: (tav?.pt !== undefined) ? tav.pt : props.pt
    }
  })

  const clsImg = element({
    element: {
      objectFit: "cover"
    }
  })

  const clsText = text({
    visualText: {
      dark: dark,
      textColor: tav?.textColor !== undefined ? tav.textColor : props.textColor,
      textColorContrast: tav?.textColorContrast !== undefined ? tav.textColorContrast : props.textColorContrast,
      darkTextColor: tav?.darkTextColor !== undefined ? tav.darkTextColor : props.darkTextColor,
      darkTextColorContrast: tav?.darkTextColorContrast !== undefined ? tav.darkTextColorContrast : props.darkTextColorContrast,
      fontSize: tav?.fontSize !== undefined ? tav.fontSize : props.fontSize,
      fontWeight: tav?.fontWeight !== undefined ? tav.fontWeight : props.fontWeight
    }
  })

  return(
    props.src !== undefined ? (
      <figure className={clsSpan}>
        <img id={id} className={["w-full", "h-full", clsImg].join(" ").trim()} alt={props.alt} src={props.src}/>
      </figure>
    ) : (
      <div id={id} className={clsSpan}>
        <span className={clsText}>{props.text}</span>
      </div>
    )
  )
}

Avatar.defaultProps = {
  width: "12",
  blur: false,
  bgColor: "white",
  textColor: "blue",
  textColorContrast: "700",
  fontSize: "sm",
  fontWeight: "normal",
  rounded: "full"
}

Avatar.Group = AvatarGroup
