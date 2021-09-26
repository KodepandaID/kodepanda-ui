import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import Group from "./radio/group";
import Toggle from "./radio/toggle";

import { Palletes, Color, Contrast } from "../../utils/color";
import { FontSize, FontWeight } from "../../utils/font";
import { Width } from "../../utils/size";

const Radio = ({ id, name, children, className, value, disabled, width,
  color, colorContrast, onChange, checked,
  textSize, textColor, textColorContrast,
  label, labelPosition, labelColor, labelColorContrast, labelSize,
  mt, mb, ml, mr }) => {
  const wrapperClasses = cx(
    className !== undefined && className,
    `w-${width}`,
    "relative",
    (mb !== undefined && mb >= 0) && `mb-${mb}`,
    (mb !== undefined && mb < 0) && `-mb${mb}`,
    (ml !== undefined && ml >= 0) && `ml-${ml}`,
    (ml !== undefined && ml < 0) && `-ml${ml}`,
    (mr !== undefined && mr >= 0) && `mr-${mr}`,
    (mr !== undefined && mr < 0) && `-mr${mr}`,
    (mt !== undefined && mt >= 0) && `mt-${mt}`,
    (mt !== undefined && mt < 0) && `-mt${mt}`,
  )

  const inputClasses = cx(
    "form-radio",
    "h-5 w-5",
    Color("text", color, colorContrast)
  )

  const formLabelClasses = cx(
    Color("text", labelColor, labelColorContrast),
    FontSize[labelSize],
    FontWeight["bold"]
  )

  const textClasses = cx(
    "ml-2",
    FontSize[textSize],
    Color("text", textColor, textColorContrast)
  )

  return(
    <div className={wrapperClasses}>
      {(label !== undefined && labelPosition === "outside") && (<label className={formLabelClasses}>{label}</label>)}
      <span className="w-full relative">
        {(label !== undefined && labelPosition === "inside") && (<label className={formLabelClasses}>{label}</label>)}
        <input
        id={id}
        name={name}
        type="radio"
        className={inputClasses}
        value={value}
        disabled={disabled}
        onChange={() => {
          if (onChange !== undefined) onChange(value)
        }}
        checked={checked}
        />
        <span className={textClasses}>{children}</span>
      </span>
    </div>
  )
}

Radio.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  children: PropTypes.node,
  checked: PropTypes.bool,
  className: PropTypes.string,
  value: PropTypes.any,
  disabled: PropTypes.bool,
  default: PropTypes.bool,
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  textSize: PropTypes.oneOf(Object.keys(FontSize)),
  textColor: PropTypes.oneOf(Palletes),
  textColorContrast: PropTypes.oneOf(Contrast),
  labelColor: PropTypes.oneOf(Palletes),
  labelColorContrast: PropTypes.oneOf(Contrast),
  labelSize: PropTypes.oneOf(Object.keys(FontSize)),
  labelPosition: PropTypes.oneOf(["outside", "inside"]),
  onChange: PropTypes.func,
  width: PropTypes.oneOf(Width),
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
}

Radio.defaultProps = {
  checked: false,
  width: "max",
  color: "blue",
  colorContrast: 600,
  textSize: "sm",
  textColor: "gray",
  textColorContrast: 700,
  mr: 5
}

Radio.Group = Group;
Radio.Toggle = Toggle;

export default Radio;