// Following the meter guideline WAI-ARIA 1.2
// https://w3c.github.io/aria-practices/examples/meter/meter.html

import { base, Color, ColorContrast, ColorProps, ModelProps, SpacingProps, StandardProps, text, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@reach/auto-id"
import * as React from "react"

interface ProgressProps extends StandardProps, ColorProps, ModelProps, VisualProps, VisualTextProps, SpacingProps {
  percentage?: number
  showPercentage?: boolean,
  completeColor?: Color,
  completeColorContrast?: ColorContrast,
  completeText?: string
}

export const Progress: React.FC<ProgressProps> = (props) => {
  const { theme } = React.useContext(ThemeCtx)
  const id = useId("progress")

  const tp = theme?.progress?.[`${props.componentName}`]

  const clsBackground = base({
    model: {
      display: "flex",
      overflow: "hidden",
      width: tp?.width !== undefined ? tp.width : props.width,
      height: tp?.height !== undefined ? tp?.height : props.height
    },
    visual: {
      dark: false,
      bgColor: tp?.bgColor !== undefined ? tp?.bgColor : props.bgColor,
      bgColorContrast: tp?.bgColorContrast !== undefined ? tp.bgColorContrast : props.bgColorContrast,
      borderRadius: tp?.rounded !== undefined ? tp?.rounded : props.rounded
    }
  })

  const clsMeter = base({
    model: {
      overflow: "hidden"
    },
    flexbox: {
      flex: true,
      direction: "col",
      justify: "center"
    },
    visual: {
      dark: false,
      bgColor: (tp?.completeColor !== undefined && props.percentage === 100) ? tp.completeColor : tp?.color !== undefined ? tp.color : props.completeColor === undefined ? props.color : (props.percentage === 100 && props.completeColor !== undefined) ? props.completeColor : props.color,
      bgColorContrast: (props.completeColorContrast === undefined && props.percentage === 100) ? props.colorContrast : (props.percentage === 100 && props.completeColorContrast !== undefined) ? props.completeColorContrast : tp?.colorContrast !== undefined ? tp.colorContrast : props.colorContrast,
    }
  })

  const clsMeterText = text({
    visualText: {
      dark: false,
      textColor: tp?.textColor !== undefined ? tp.textColor : props.textColor,
      textColorContrast: tp?.textColorContrast !== undefined ? tp.textColorContrast : props.textColorContrast,
      fontSize: tp?.fontSize !== undefined ? tp.fontSize : props.fontSize,
      fontWeight: tp?.fontWeight !== undefined ? tp.fontWeight : props.fontWeight
    }
  })

  return(
    <div className={clsBackground}>
      <div
      id={id}
      className={[clsMeter, "text-center"].join(" ").trim()}
      role="progressbar"
      style={{width: `${props.percentage}%`, transition: "width 2s"}}
      aria-valuenow={props.percentage}
      aria-valuemin={0}
      aria-valuemax={100}>
        {props.showPercentage && (
          <span className={clsMeterText}>
            {(props.completeText === undefined || (props.completeText !== undefined && props.percentage !== 100)) && `${props.percentage}%`}
            {(props.completeText !== undefined && props.percentage === 100) && props.completeText}
          </span>
        )}
      </div>
    </div>
  )
}

Progress.defaultProps = {
  percentage: 0,
  showPercentage: false,
  width: "full",
  height: "3",
  color: "blue",
  colorContrast: "600",
  bgColor: "gray",
  bgColorContrast: "200",
  textColor: "white",
  fontSize: "xs",
  rounded: "md"
}


