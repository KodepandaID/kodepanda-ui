import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import { Margin } from "../../classes";
import { border, color, size, spacing } from "../../types";

import { Color } from "../../utils/color";
import { ShadowSize } from "../../utils/shadow";

const Checkbox = ({ id, name, children, className, checked, disabled, width,
  color, colorContrast, onChange, shadow,
  mx, my, mt, mb, ml, mr }) => {
  const baseClasses = cx(
    className !== undefined && className,
    shadow !== undefined && ShadowSize[shadow],
    `w-${width}`,
    "inline-flex",
    "items-center",
    Margin(mx, my, mb, ml, mr, mt)
  )

  const inputClasses = cx(
    "form-checkbox",
    "h-5 w-5",
    Color("text", color, colorContrast)
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
  onChange: PropTypes.func,
  ...size,
  ...border,
  ...color,
  ...spacing
}

Checkbox.defaultProps = {
  color: "blue",
  colorContrast: 600,
  width: "full",
}

export default Checkbox;