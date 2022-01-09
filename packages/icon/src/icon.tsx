import { base, ColorProps, Size, SpacingProps, StandardProps, text } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { Outline, OutlineKeys } from "./icon-outline"
import * as React from "react"
import { Solid, SolidKeys } from "./icon-solid"
import { useId } from "@zenbu-ui/react-id"

interface IconProps extends StandardProps, ColorProps, SpacingProps  {
  icon: Outline | Solid,
  height?: Size
}

export const Icon: React.FC<IconProps> = (props) => {
  const { dark } = React.useContext(ThemeCtx)
  const id = useId("icon")
  const Elm = props.icon.includes("solid") ? SolidKeys[props.icon] : OutlineKeys[props.icon]

  const cls = text({
    visualText: {
      dark: dark,
      textColor: props.color,
      textColorContrast: props.colorContrast,
      textHoverColor: props.colorHover,
      textHoverColorContrast: props.colorHoverContrast,
      darkTextColor: props.darkColor,
      darkTextColorContrast: props.darkColorContrast,
      darkTextHoverColor: props.darkColorHover,
      darkTextHoverColorContrast: props.darkColorHoverContrast
    },
    spacing: {
      mx: props.mx,
      my: props.my,
      mb: props.mb,
      ml: props.ml,
      mr: props.mr,
      mt: props.mt
    }
  })

  const clsBase = base({
    model: {
      height: props.height
    }
  })

  return(
    <Elm id={id} className={[props.className, clsBase, cls].join(" ").trim()} />
  )
}

Icon.defaultProps = {
  height: "12"
}
