import { base, SpacingProps, StandardProps } from "@zenbu-ui/core"
import * as React from "react"

export const BoxContent: React.FC<StandardProps & SpacingProps> = (props) => {
  const cls = base({
    positioning: {
      position: "relative"
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

  return(
    <section className={cls}>{props.children}</section>
  )
}
