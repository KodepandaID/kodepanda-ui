import React, { useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import { Margin, Padding } from "../../../classes";
import { border, color, size, spacing, text } from "../../../types";

import { Color } from "../../../utils/color";
import { BorderSize, BorderSizeNum, BorderPosition } from "../../../utils/border";
import { RoundedSize, RoundedPosition } from "../../../utils/rounded";
import { FontSize } from "../../../utils/font";
import { ShadowSize } from "../../../utils/shadow";

const Box = ({ width, children, name, defaultValue, disabled,
  color, colorContrast, colorActive, colorActiveContrast,
  radioColor, radioColorContrast,
  label, labelColor, labelColorContrast, labelSize,
  border, borderColor, borderColorContrast, borderColorActive, borderColorActiveContrast, borderPosition, borderSize, borderStyle,
  shadow, rounded, roundedPosition, onChange,
  mx, my, mt, mb, ml, mr,
  px, py, pt, pb, pl, pr }) => {
  const [value, setValue] = useState(defaultValue);

  const wrapperClasses = cx(
    Margin(mx, my, mb, ml, mr, mt)
  )

  const formLabelClasses = cx(
    Color("text", labelColor, labelColorContrast),
    FontSize[labelSize]
  )

  return(
    <div className={wrapperClasses}>
      {label !== undefined && (<label className={formLabelClasses}>{label}</label>)}
      <div className="w-full flex space-x-3">
        {children.map((el, i) => {
          const wrapperBoxClasses = cx(
            `w-${width}`,
            "relative",
            "flex",
            "flex-col",
            "justify-center",
            el.props.value === value ? Color("bg", colorActive, colorActiveContrast) : Color("bg", color, colorContrast),
            disabled && "opacity-25 cursor-not-allowed",
            !disabled && "cursor-pointer",
            (rounded !== "none" && roundedPosition === undefined) && RoundedSize[rounded],
            (rounded !== "none" && roundedPosition !== undefined) && `${RoundedPosition[roundedPosition]}-${rounded}`,
            (border && borderSize !== "none" && borderPosition === undefined) && `border-${borderStyle} ${BorderSize[borderSize]}`,
            (border && borderSize !== "none" && el.props.value !== value) && Color("border", borderColor, borderColorContrast),
            (border && borderSize !== "none" && el.props.value === value) && Color("border", borderColorActive, borderColorActiveContrast),
            borderPosition !== undefined && `${BorderPosition[borderPosition]}${BorderSizeNum[borderSize]}`,
            shadow !== "none" && ShadowSize[shadow],
            Padding(px, py, pb, pl, pr, pt)
          )

          const radioClasses = cx(
            "absolute",
            "right-2",
            "w-5",
            "h-5",
            "bg-white",
            "rounded-full",
            "flex",
            "items-center",
            "justify-center",
            "border",
            value === el.props.value ? Color("border", borderColorActive, borderColorActiveContrast) : Color("border", borderColor, borderColorContrast)
          )

          const radioActiveClasses = cx(
            "w-3",
            "h-3",
            "rounded-full",
            Color("bg", radioColor, radioColorContrast)
          )

          return(
            <div key={i} className={wrapperBoxClasses} onClick={() => {
              setValue(el.props.value)
              if (onChange !== undefined) onChange(el.props.value)
            }}>
              <div className="pr-5">{el.props.children}</div>
              <div className={radioClasses}>
                {value === el.props.value && (<div className={radioActiveClasses} />)}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

Box.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  label: PropTypes.node,
  onChange: PropTypes.func,
  ...size,
  ...border,
  ...color,
  ...text,
  ...spacing
}

Box.defaultProps = {
  width: 96,
  disabled: false,
  color: "white",
  colorContrast: 300,
  colorActive: "gray",
  colorActiveContrast: 100,
  radioColor: "blue",
  radioColorContrast: 700,
  rounded: "none",
  labelColor: "gray",
  labelColorContrast: 600,
  labelSize: "sm",
  shadow: "none",
  border: true,
  borderColor: "gray",
  borderColorContrast: 300,
  borderColorActive: "blue",
  borderColorActiveContrast: 700,
  borderSize: "xs",
  borderStyle: "solid",
  px: 3,
  py: 4
}

export default Box;