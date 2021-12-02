// Following the meter guideline WAI-ARIA 1.2
// https://w3c.github.io/aria-practices/examples/meter/meter.html

import { base, Color, ColorContrast, ColorProps, ModelProps, SpacingProps, StandardProps, text, VisualProps, VisualTextProps } from "@zenbu-ui/core";
import * as React from "react"

interface ProgressProps extends StandardProps, ColorProps, ModelProps, VisualProps, VisualTextProps, SpacingProps {
  percentage?: number
  showPercentage?: boolean,
  completeColor?: Color,
  completeColorContrast?: ColorContrast,
  completeText?: string
}

export const Progress: React.FC<ProgressProps> = (props) => {
  const clsBackground = base({
    model: {
      display: "flex",
      overflow: "hidden",
      width: props.width,
      height: props.height
    },
    visual: {
      dark: false,
      bgColor: props.bgColor,
      bgColorContrast: props.bgColorContrast,
      borderRadius: props.rounded
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
      bgColor: props.completeColor === undefined ? props.color : (props.percentage === 100 && props.completeColor !== undefined) ? props.completeColor : props.color,
      bgColorContrast: props.completeColorContrast === undefined ? props.colorContrast : (props.percentage === 100 && props.completeColorContrast !== undefined) ? props.completeColorContrast : props.colorContrast,
    }
  })

  const clsMeterText = text({
    visualText: {
      dark: false,
      textColor: props.textColor,
      textColorContrast: props.textColorContrast,
      fontSize: props.fontSize,
      fontWeight: props.fontWeight
    }
  })

  return(
    <div className={clsBackground}>
      <div
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


