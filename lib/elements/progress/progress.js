import React, { useEffect, useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import { border, color, size } from "../../types";

import { Color } from "../../utils/color";
import { RoundedSize } from "../../utils/rounded";

const CircleSize = {
  "xs": {
    size: 10,
    sizeSvg: 50,
    radius: 15,
    stroke: 5,
    cx: 25,
    cy: 25,
    textSize: "text-xs",
  },
  "sm": {
    size: 20,
    sizeSvg: 70,
    radius: 25,
    stroke: 7,
    cx: 35,
    cy: 35,
    textSize: "text-xs",
  },
  "md": {
    size: 30,
    sizeSvg: 100,
    radius: 45,
    stroke: 9,
    cx: 49,
    cy: 49,
    textSize: "text-md",
  },
  "lg": {
    size: 50,
    sizeSvg: 230,
    radius: 100,
    stroke: 15,
    cx: 115,
    cy: 115,
    textSize: "text-lg",
  },
  "xl": {
    size: 72,
    sizeSvg: 270,
    radius: 120,
    stroke: 20,
    cx: 130,
    cy: 135,
    textSize: "text-xl",
  }
}

const Progress = ({ circle, circleSize, width, percentage, rounded,
  color, colorContrast, bgColor, bgColorContrast, textColor, textColorContrast,
  showPercentage, showPercentagePosition, completedText }) => {
  if (percentage > 100) percentage = 100;
  if (bgColorContrast > 300) bgColorContrast = 300;
  
  const [progress, setProgress] = useState(0);
  const [circumference, setCircumference] = useState(0);

  const wrapperClasses = cx(
    `w-${width}`,
    showPercentage ? "h-full" : "h-1",
    Color("bg", bgColor, bgColorContrast),
    RoundedSize[rounded]
  )

  const baseClasses = cx(
    showPercentage ? "h-full" : "h-1",
    Color("bg", color, colorContrast),
    RoundedSize[rounded],
    showPercentage && "text-center text-xs py-0.5",
    showPercentage && Color("text", textColor, textColorContrast),
    "transition"
  )

  const circleSvgClasses = cx(
    "transform",
    "-rotate-90"
  )
  
  const circleTextClasses = cx(
    "absolute",
    CircleSize[circleSize].textSize
  )

  useEffect(() => {
    if (circumference === 0) setCircumference(2 * 22 / 7 * CircleSize[circleSize].radius)

    setProgress(percentage)
  }, [percentage])

  return(
    <>
      {!circle && (
        <div className={`w-${width} flex flex-row items-center space-x-3`}>
          <div className={wrapperClasses}>
            <div className={baseClasses} style={{width: `${progress}%`, transition: "width 2s"}}>
              {(showPercentage && showPercentagePosition === "inside") && (<span>{progress}% {progress === 100 && (completedText)}</span>)}
            </div>
          </div>
          {(showPercentage && showPercentagePosition === "outside") && (<span className="text-xs">{progress}% {progress === 100 && (completedText)}</span>)}
        </div>
      )}

      {circle && (
        <div className="relative flex items-center justify-center">
          <svg className={circleSvgClasses} width={CircleSize[circleSize].sizeSvg} height={CircleSize[circleSize].sizeSvg}>
            <circle
              className={Color("text", bgColor, bgColorContrast)}
              strokeWidth={CircleSize[circleSize].stroke}
              stroke="currentColor"
              fill="transparent"
              r={CircleSize[circleSize].radius}
              cx={CircleSize[circleSize].cx}
              cy={CircleSize[circleSize].cy}
            />
            <circle
              className={Color("text", color, colorContrast)}
              strokeWidth={CircleSize[circleSize].stroke}
              strokeDasharray={circumference}
              strokeDashoffset={circumference - percentage / 100 * circumference}
              strokeLinecap="round"
              stroke="currentColor"
              fill="transparent"
              r={CircleSize[circleSize].radius}
              cx={CircleSize[circleSize].cx}
              cy={CircleSize[circleSize].cy}
              style={{transition: "stroke-dashoffset 1s"}}
            />
          </svg>
          <span className={circleTextClasses}>{progress}% {progress === 100 && (completedText)}</span>
        </div>
      )}
    </>
  )
}

Progress.propTypes = {
  circle: PropTypes.bool,
  circleSize: PropTypes.oneOf(Object.keys(CircleSize)),
  percentage: PropTypes.number,
  showPercentage: PropTypes.bool,
  showPercentagePosition: PropTypes.oneOf(["inside", "outside"]),
  completedText: PropTypes.string,
  ...size,
  ...border,
  ...color
}

Progress.defaultProps = {
  circle: false,
  circleSize: "xs",
  width: "full",
  percentage: 0,
  color: "blue",
  colorContrast: 700,
  bgColor: "blue",
  bgColorContrast: 200,
  textColor: "white",
  textColorContrast: 700,
  showPercentage: false,
  showPercentagePosition: "inside",
  rounded: "full",
  completedText: "Completed..."
}

export default Progress;