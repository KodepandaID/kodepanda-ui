import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color, Contrast } from "../../utils/color";

const widthSizes = {
  1: "1/12",
  2: "1/6",
  3: "1/4",
  4: "1/3",
  5: "5/12",
  6: "2/5",
  7: "1/2",
  8: "2/3",
  9: "3/4",
  10: "5/6",
  11: "11/12",
  12: "full"
}

const Checkbox = ({ id, name, children, className, checked, disabled, width,
  color, contrast, onChange,
  mt, mb, ml, mr }) => {
  const baseClasses = cx(
    className !== undefined && className,
    width !== undefined && `w-${typeof width === "number" ? widthSizes[width]:width}`,
    "inline-flex",
    "items-center",
    mt !== undefined && `mt-${mt}`,
    mb !== undefined && `mb-${mb}`,
    ml !== undefined && `ml-${ml}`,
    mr !== undefined && `mr-${mr}`,
  )

  const inputClasses = cx(
    "form-checkbox",
    "h-5 w-5",
    Color("text", color, contrast)
  )

  return(
    <label className={baseClasses}>
      <input id={id} name={name} type="checkbox" className={inputClasses} defaultChecked={checked} disabled={disabled} onChange={onChange} /><span className="ml-2 text-gray-700">{children}</span>
    </label>
  )
}

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  color: PropTypes.oneOf(Palletes),
  contrast: PropTypes.oneOf(Contrast),
  onChange: PropTypes.func,
  width: PropTypes.oneOfType([
    PropTypes.oneOf(["auto", "1/5", "1/4", "1/3", "2/5", "1/2", "3/5", "2/3", "3/4", "4/5", "full"]),
    PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
  ]),
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
}

Checkbox.defaultProps = {
  color: "blue",
  contrast: 600,
  width: "full",
}

export default Checkbox;