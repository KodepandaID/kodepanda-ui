import { base, SpacingProps, StandardProps, TailwindColor, text, VisualProps } from "@zenbu-ui/core"
import * as React from "react"

interface SeparatorProps extends StandardProps, VisualProps, SpacingProps {
  text?: React.ReactNode
}

export const Separator: React.FC<SeparatorProps> = (props) => {
  const cls = text({
    visual: {
      dark: false,
      borderWidth: props.borderWidth !== "normal" ? props.borderWidth : undefined,
      borderStyle: props.borderStyle,
      borderColor: props.borderColor,
      borderColorContrast: props.borderColorContrast
    },
    visualText: {
      dark: false,
      lineHeight: "relaxed",
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

  if (props.text !== undefined) {
    const clsBase = base({
      flexbox: {
        flex: true,
        alignItems: "center"
      }
    })

    const style = {"--border-bottom": `${props.borderWidth === "normal" ? 1 : props.borderWidth}px ${props.borderStyle} ${(props.borderColor === "black" || props.borderColor === "white") ? TailwindColor[`${props.borderColor}`] : TailwindColor[`${props.borderColor}`][`${props.borderColorContrast}`]}`} as React.CSSProperties
    return(
      <div
      role="separator"
      id={props.id}
      className={["separator", clsBase, cls].join(" ").trim()}
      style={style}>
        {props.text}
      </div>
    )
  }

  return React.createElement("hr",
  {id: props.id, className: [cls].join(" ").trim()})
}

Separator.defaultProps = {
  borderWidth: "normal",
  borderStyle: "solid",
  borderColor: "gray",
  borderColorContrast: "200"
}
