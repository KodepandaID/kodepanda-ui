import React, { useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color, Contrast } from "../../utils/color";

const sizes = {
  "xs": "w-6 h-3",
  "sm": "w-10 h-5",
  "md": "w-12 h-7",
  "lg": "w-16 h-9"
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
    (mx !== undefined && mx >= 0) && `mx-${mx}`,
    (mx !== undefined && mx < 0) && `-mx${mx}`,
    (my !== undefined && my >= 0) && `my-${my}`,
    (my !== undefined && my < 0) && `-my${my}`,
    (mb !== undefined && mb >= 0) && `mb-${mb}`,
    (mb !== undefined && mb < 0) && `-mb${mb}`,
    (ml !== undefined && ml >= 0) && `ml-${ml}`,
    (ml !== undefined && ml < 0) && `-ml${ml}`,
    (mr !== undefined && mr >= 0) && `mr-${mr}`,
    (mr !== undefined && mr < 0) && `-mr${mr}`,
    (mt !== undefined && mt >= 0) && `mt-${mt}`,
    (mt !== undefined && mt < 0) && `-mt${mt}`,
  )

  const circleClasses = cx(
    circleSizes[size],
    "bg-white",
    "transform",
    "ease-in-out",
    "duration-300",
    active ? "translate-x-full ml-1" : "translate-x-0 -ml-0.5",
    "rounded-full",
    "shadow-md"
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
  labelColor: PropTypes.oneOf(Palletes),
  labelColorContrast: PropTypes.oneOf(Contrast),
  size: PropTypes.oneOf(Object.keys(sizes)),
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  defaultChecked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  mx: PropTypes.number,
  my: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
}

Switch.defaultProps = {
  size: "sm",
  color: "blue",
  colorContrast: 400,
  labelColor: "gray",
  labelColorContrast: 700,
  defaultChecked: false,
}

export default Switch;