import React, { useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Margin } from "@zenbu-ui/classes";
import { Colors, Spacings  } from "@zenbu-ui/types";
import { Color } from "@zenbu-ui/utils";

const sizes = {
  "xs": "w-8 h-4",
  "sm": "w-12 h-6",
  "md": "w-16 h-8",
  "lg": "w-20 h-10"
}

const circleSizes = {
  "xs": "w-3 h-3",
  "sm": "w-5 h-5",
  "md": "w-7 h-7",
  "lg": "w-9 h-9"
}

const Switch = ({ label, size, color, colorContrast, defaultChecked, onChange, disabled,
  labelColor, labelColorContrast,
  mx, my, mb, ml, mr, mt }) => {
  const [active, setActive] = useState(defaultChecked);

  const baseClasses = cx(
    "relative",
    sizes[size],
    "transform",
    "ease-in-out",
    "duration-300",
    active ? Color("bg", color, colorContrast) : "bg-gray-400",
    "rounded-full",
    "shadow-inner",
    "outline-none",
    "appearance-none",
    !disabled && "cursor-pointer",
    disabled && "cursor-not-allowed",
    disabled && "opacity-75",
    Margin(mx, my, mb, ml, mr, mt)
  )

  const circleClasses = cx(
    circleSizes[size],
    "bg-white",
    "transform",
    "ease-in-out",
    "duration-300",
    active ? "translate-x-full ml-1.5" : "translate-x-0 ml-0.5",
    "rounded-full",
    "shadow-md",
    "mt-0.5"
  )

  const labelClasses = cx(
    "text-sm",
    Color("text", labelColor, labelColorContrast),
    "ml-5"
  )

  return(
    <div className="flex flex-row items-center">
      <div className={baseClasses} onClick={() => {
        if (!disabled) {
          if (onChange !== undefined) onChange(!active)
          setActive(!active)
        }
      }}>
        <div className={circleClasses}></div>
      </div>
      {typeof label === "string" ? (<span className={labelClasses}>{label}</span>) : (label)}
    </div>
  )
}

Switch.propTypes = {
  name: PropTypes.string,
  label: PropTypes.node,
  size: PropTypes.oneOf(Object.keys(sizes)),
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  ...Colors,
  ...Spacings
}

Switch.defaultProps = {
  size: "sm",
  color: "blue",
  colorContrast: 400,
  labelColor: "gray",
  labelColorContrast: 700,
  defaultChecked: false,
}

export {
  Switch
}
