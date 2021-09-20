import React, { useEffect, useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color, Contrast } from "../../utils/color";

import Icon from "../icon/icon";

const Badge = ({ children, count, overflowCount, ping, icon,
  suffix, preffix,
  color, colorContrast, textColor, textColorContrast }) => {
  const [mounted, setMounded] = useState(false);
  const [size, setSize] = useState("w-5 h-5");

  const baseClasses = cx(
    "flex",
    "absolute",
    size,
    "top-0",
    count < 10 && "right-0",
    (count >= 10 && count < 1000) && "right-3",
    (count >= 1000) && "right-4",
    "-mt-1",
    "-mr-1"
  )

  const circleClasses = cx(
    "inline-flex",
    "relative",
    "items-center",
    "justify-center",
    "whitespace-nowrap",
    count < 10 && "rounded-full",
    count >= 10 && "rounded-lg",
    Color("bg", color, colorContrast),
    Color("text", textColor, textColorContrast),
    count < 10 && "text-sm",
    count >= 10 && "text-xs",
    (count >= 10 && count < 100 && preffix === undefined && suffix === undefined) && "px-4",
    (count >= 100 || preffix !== undefined || suffix !== undefined) && "px-5",
    "w-5 h-5"
  )

  const circleZeroClasses = cx(
    "relative",
    "inline-flex",
    "rounded-full",
    icon === undefined && "h-3 w-3",
    icon !== undefined && "h-5 w-5",
    icon === undefined && Color("bg", color, colorContrast),
    icon !== undefined && Color("text", color, colorContrast),
    icon !== undefined && "-mt-0.5 -ml-0.5"
  )

  const pingClasses = cx(
    "animate-ping",
    "absolute",
    "inline-flex",
    "h-full",
    "w-full",
    "rounded-full",
    Color("bg", color, colorContrast),
    "opacity-65"
  )

  useEffect(() => {
    if (!mounted) {
      if (count === 0) setSize("w-3 h-3")
      setMounded(true)
    }
  }, [size])

  return(
    <div className="relative">
      <div className="relative inline-flex">
        <div className="flex justify-around">
          {children}
          {mounted && (
            <span className={baseClasses}>
              {ping && (<span className={pingClasses}></span>)}
              {icon === undefined && (
                <>
                  {count > 0 && (<span className={circleClasses}>
                    {preffix !== undefined && (preffix)}
                    {(overflowCount === undefined || overflowCount !== undefined && count < overflowCount) && count}
                    {(overflowCount !== undefined && count > overflowCount) && `${overflowCount}+`}
                    {suffix !== undefined && (suffix)}
                  </span>)}
                  {count === 0 && (<span className={circleZeroClasses}></span>)}
                </>
              )}
              {icon !== undefined && (
                <span className={circleZeroClasses}><Icon icon={icon} /></span>
              )}
            </span>
          )}
        </div>
      </div>
    </div>  
  )
}

Badge.propTypes = {
  children: PropTypes.node,
  preffix: PropTypes.string,
  suffix: PropTypes.string,
  count: PropTypes.number,
  overflowCount: PropTypes.number,
  ping: PropTypes.bool,
  icon: PropTypes.oneOf(Object.keys(Icon.Index)),
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  textColor: PropTypes.oneOf(Palletes),
  textColorContrast: PropTypes.oneOf(Contrast)
}

Badge.defaultProps = {
  count: 0,
  ping: false,
  color: "red",
  colorContrast: 500,
  textColor: "white",
  textColorContrast: 700
}

export default Badge;