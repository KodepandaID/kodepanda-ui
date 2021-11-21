import { base, Color, ColorContrast, element, FontSize, FontWeight, ModelProps, SpacingProps, StandardProps,  text,  VisualProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import * as React from "react"
import { AvatarGroup } from "./avatar-group"

interface AvatarProps extends StandardProps, ModelProps, VisualProps, SpacingProps {
  alt: string,
  src?: string,
  text?: string,
  textColor?: Color,
  textColorContrast?: ColorContrast,
  darkTextColor?: Color,
  darkTextColorContrast?: ColorContrast,
  fontSize?: FontSize,
  fontWeight?: FontWeight,
  blur?: boolean,
  border?: boolean
}

export const Avatar: React.FC<AvatarProps> & { Group: React.FC } = (props) => {
  const { dark } = React.useContext(ThemeCtx)

  if (props.src === undefined && props.text === undefined) {
    throw new Error("`src` props cannot be empty, if you don't want to use `src` props you must fill the `text` props.")
  }

  const clsSpan = base({
    className: props.className,
    model: {
      display: "inline-flex",
      overflow: "hidden",
      width: props.width,
      height: props.width
    },
    flexbox: {
      flex: false,
      alignItems: "center",
      justify: "center",
      verticalAlign: "middle"
    },
    visual: {
      dark: dark,
      bgColor: props.bgColor,
      bgColorContrast: props.bgColorContrast,
      darkBgColor: props.darkBgColor,
      darkBgColorContrast: props.darkBgColorContrast,
      borderWidth: (props.border && props.borderWidth === undefined) ? "normal" : props.borderWidth,
      borderColor: props.borderColor,
      borderColorContrast: props.borderColorContrast,
      borderRadius: "full"
    },
    filter: {
      blur: props.blur ? "normal" : undefined
    },
    misc: {
      userSelect: "none"
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

  const clsImg = element({
    element: {
      objectFit: "cover"
    }
  })

  const clsText = text({
    visualText: {
      dark: dark,
      textColor: props.textColor,
      textColorContrast: props.textColorContrast,
      darkTextColor: props.darkTextColor,
      darkTextColorContrast: props.darkTextColorContrast,
      fontSize: props.fontSize,
      fontWeight: props.fontWeight
    }
  })

  return(
    <span className={clsSpan}>
      {props.src !== undefined && (
        <img id={props.id} className={["w-full", "h-full", clsImg].join(" ").trim()} alt={props.alt} src={props.src}/>
      )}

      {(props.src === undefined && props.text !== undefined) && (
        <span className={clsText}>{props.text}</span>
      )}
    </span>
  )
}

Avatar.defaultProps = {
  width: 12,
  blur: false,
  bgColor: "white",
  textColor: "blue",
  textColorContrast: 700,
  fontSize: "sm",
  fontWeight: "normal"
}

Avatar.Group = AvatarGroup
