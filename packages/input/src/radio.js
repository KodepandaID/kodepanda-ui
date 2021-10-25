import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import "../style.css";
import "tailwindcss/tailwind.css";

import { RadioGroup } from "./radio/radio-group";
import { RadioToggle } from "./radio/radio-toggle";
import { RadioBox } from "./radio/radio-box";

import { Margin } from "@kodepanda-ui/classes";
import { Colors, Texts, Sizes, Spacings } from "@kodepanda-ui/types";
import { 
  Color,
  FontSize, FontWeight
 } from "@kodepanda-ui/utils";

const Radio = ({ id, name, children, className, value, disabled, width,
  color, colorContrast, onChange, checked,
  textSize, textColor, textColorContrast,
  label, labelPosition, labelColor, labelColorContrast, labelSize,
  mx, my, mt, mb, ml, mr }) => {
  const wrapperClasses = cx(
    className !== undefined && className,
    `w-${width}`,
    "relative",
    Margin(mx, my, mb, ml, mr, mt)
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
  label: PropTypes.node,
  children: PropTypes.node,
  checked: PropTypes.bool,
  className: PropTypes.string,
  value: PropTypes.any,
  disabled: PropTypes.bool,
  default: PropTypes.bool,
  onChange: PropTypes.func,
  ...Sizes,
  ...Colors,
  ...Texts,
  ...Spacings
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

Radio.Group = RadioGroup;
Radio.Toggle = RadioToggle;
Radio.Box = RadioBox;

export {
  Radio,
  RadioGroup,
  RadioToggle,
  RadioBox
}
