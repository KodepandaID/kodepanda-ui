import { base, SpacingProps, StandardProps, TailwindColor, text, VisualProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@zenbu-ui/react-id"
import * as React from "react"
import styled from "styled-components"

interface SeparatorProps extends StandardProps, VisualProps, SpacingProps {
  text?: React.ReactNode
}

export const Separator: React.FC<SeparatorProps> = (props) => {
  const { theme } = React.useContext(ThemeCtx)
  const id = useId("separator")

  const ts = theme?.separator?.[`${props.componentName}`]

  const cls = text({
    visual: props.text === undefined ? {
      dark: false,
      borderWidth: ts?.borderWidth !== undefined ? ts.borderWidth : props.borderWidth,
      borderStyle: ts?.borderStyle !== undefined ? ts.borderStyle : props.borderStyle,
      borderColor: ts?.borderColor !== undefined ? ts.borderColor : props.borderColor,
      borderColorContrast: ts?.borderColorContrast !== undefined ? ts.borderColorContrast : props.borderColorContrast
    } : undefined,
    visualText: {
      dark: false,
      lineHeight: "relaxed",
    },
    spacing: {
      mx: ts?.mx !== undefined ? ts.mx : props.mx,
      my: ts?.my !== undefined ? ts.my : props.my,
      mb: ts?.mb !== undefined ? ts.mb : props.mb,
      ml: ts?.ml !== undefined ? ts.ml : props.ml,
      mr: ts?.mr !== undefined ? ts.mr : props.mr,
      mt: ts?.mt !== undefined ? ts.mt : props.mt,
      px: ts?.px !== undefined ? ts.px : props.px,
      py: ts?.py !== undefined ? ts.py : props.py,
      pb: ts?.pb !== undefined ? ts.pb : props.pb,
      pl: ts?.pl !== undefined ? ts.pl : props.pl,
      pr: ts?.pr !== undefined ? ts.pr : props.pr,
      pt: ts?.pt !== undefined ? ts.pt : props.pt
    }
  })

  if (props.text !== undefined) {
    const clsBase = base({
      flexbox: {
        flex: true,
        alignItems: "center"
      }
    })

    const style = {"--border-bottom": `${(ts?.borderWidth !== "normal" && ts?.borderWidth !== undefined) ? ts.borderWidth : (ts?.borderWidth === "normal" || props.borderWidth === "normal") ? 1 : props.borderWidth}px ${ts?.borderStyle !== undefined ? ts.borderStyle : props.borderStyle} ${((ts?.borderColor === "black" || props.borderColor === "black") || (ts?.borderColor === "white" || props.borderColor === "white")) ? TailwindColor[`${ts?.borderColor !== undefined ? ts.borderColor : props.borderColor}`] : TailwindColor[`${ts?.borderColor !== undefined ? ts.borderColor :  props.borderColor}`][`${ts?.borderColorContrast !== undefined ? ts.borderColorContrast :  props.borderColorContrast}`]}`} as React.CSSProperties

    const SeparatorDiv = styled.div`
      &:before {
        content: '';
        flex: 1;
        border-bottom: var(--border-bottom, 1px solid #000);
      }

      &:after {
        content: '';
        flex: 1;
        border-bottom: var(--border-bottom, 1px solid #000);
      }

      &:not(:empty)::before {
        margin-right: 1.25em;
      }

      &:not(:empty)::after {
        margin-left: 1.25em;
      }
    `

    return(
      <SeparatorDiv
      role="separator"
      id={id}
      className={[clsBase, cls].join(" ").trim()}
      style={style}>
        {props.text}
      </SeparatorDiv>
    )
  }

  return React.createElement("hr",
  {id: id, className: [cls].join(" ").trim()})
}

Separator.defaultProps = {
  borderWidth: "normal",
  borderStyle: "solid",
  borderColor: "gray",
  borderColorContrast: "200"
}
