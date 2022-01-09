import { base, element, ModelProps, SpacingProps, StandardProps,  text,  VisualTextProps,  VisualProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@zenbu-ui/react-id"
import * as React from "react"
import { AvatarGroup } from "./avatar-group"

interface AvatarProps extends StandardProps, ModelProps, VisualProps, VisualTextProps, SpacingProps {
  alt: string,
  src?: string,
  text?: string,
  blur?: boolean
}

export const Avatar: React.FC<AvatarProps> & { Group: React.FC } = (props) => {
  const { dark } = React.useContext(ThemeCtx)
  const id = useId("avatar")

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
  fontWeight: "normal"
}

Avatar.Group = AvatarGroup
