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
  const { dark, theme } = React.useContext(ThemeCtx)
  const id = useId("icon")
  const Elm = props.icon.includes("solid") ? SolidKeys[props.icon] : OutlineKeys[props.icon]

  const tic = theme?.icon?.[`${props.componentName}`]

  const cls = text({
    visualText: {
      dark: dark,
      textColor: tic?.color !== undefined ? tic.color : props.color,
      textColorContrast: tic?.colorContrast !== undefined ? tic.colorContrast : props.colorContrast,
      textHoverColor: tic?.colorHover !== undefined ? tic.colorHover : props.colorHover,
      textHoverColorContrast: tic?.colorHoverContrast !== undefined ? tic.colorHoverContrast : props.colorHoverContrast,
      darkTextColor: tic?.darkColor !== undefined ? tic.darkColor : props.darkColor,
      darkTextColorContrast: tic?.darkColorContrast !== undefined ? tic.darkColorContrast : props.darkColorContrast,
      darkTextHoverColor: tic?.darkColorHover !== undefined ? tic.darkColorHover : props.darkColorHover,
      darkTextHoverColorContrast: tic?.darkColorHoverContrast !== undefined ? tic.darkColorHoverContrast : props.darkColorHoverContrast
    },
    spacing: {
      mx: tic?.mx !== undefined ? tic.mx : props.mx,
      my: tic?.my !== undefined ? tic.my : props.my,
      mb: tic?.mb !== undefined ? tic.mb : props.mb,
      ml: tic?.ml !== undefined ? tic.ml : props.ml,
      mr: tic?.mr !== undefined ? tic.mr : props.mr,
      mt: tic?.mt !== undefined ? tic.mt : props.mt
    }
  })

  const clsBase = base({
    model: {
      height: tic?.height !== undefined ? tic.height : props.height
    }
  })

  return(
    <Elm id={id} className={[props.className, clsBase, cls].join(" ").trim()} />
  )
}

Icon.defaultProps = {
  height: "12"
}
