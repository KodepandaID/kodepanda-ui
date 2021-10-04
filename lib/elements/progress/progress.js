import React, { useEffect, useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color, Contrast } from "../../utils/color";
import { RoundedSize } from "../../utils/rounded";
import { Width } from "../../utils/size";

const Progress = ({ width, percentage, color, colorContrast, bgColor, bgColorContrast,
  textColor, textColorContrast, rounded,
  showPercentage, showPercentagePosition, completedText, }) => {
  if (percentage > 100) percentage = 100;
  if (bgColorContrast > 300) bgColorContrast = 300;

  const [progress, setProgress] = useState(0);

  const wrapperClasses = cx(
    `w-${width}`,
    showPercentage ? "h-full" : "h-2",
    Color("bg", bgColor, bgColorContrast),
    RoundedSize[rounded]
  )

  const baseClasses = cx(
    "h-full",
    Color("bg", color, colorContrast),
    RoundedSize[rounded],
    showPercentage && "text-center text-xs py-0.5",
    showPercentage && Color("text", textColor, textColorContrast),
    "transition"
  )

  useEffect(() => {
    setProgress(percentage)
  }, [percentage])

  return(
    <div className="flex flex-row items-center space-x-3">
      <div className={wrapperClasses}>
        <div className={baseClasses} style={{width: `${progress}%`, transition: "width 2s"}}>
          {(showPercentage && showPercentagePosition === "inside") && (<span>{progress}% {progress === 100 && (completedText)}</span>)}
        </div>
      </div>
      {(showPercentage && showPercentagePosition === "outside") && (<span className="text-xs">{progress}% {progress === 100 && (completedText)}</span>)}
    </div>
  )
}

Progress.propTypes = {
  width: PropTypes.oneOf(Width),
  percentage: PropTypes.number,
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  bgColor: PropTypes.oneOf(Palletes),
  bgColorContrast: PropTypes.oneOf(Contrast),
  textColor: PropTypes.oneOf(Palletes),
  textColorContrast: PropTypes.oneOf(Contrast),
  showPercentage: PropTypes.bool,
  showPercentagePosition: PropTypes.oneOf(["inside", "outside"]),
  rounded: PropTypes.oneOf(Object.keys(RoundedSize)),
  completedText: PropTypes.string
}

Progress.defaultProps = {
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