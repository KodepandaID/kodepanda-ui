import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import { Margin, Padding } from "../../classes"; 
import { border, color, size, spacing, text } from "../../types";

import { Color } from "../../utils/color";
import { BorderSize, BorderSizeNum,BorderPosition, RingSize } from "../../utils/border";
import { RoundedSize } from "../../utils/rounded";
import { FontSize, FontWeight } from "../../utils/font";

const Pin = ({ className, name, label, rounded, width, circle,
  color, colorContrast, textSize, textColor, textColorContrast,
  labelColor, labelColorContrast, labelSize,
  border, borderSize, borderStyle, borderColor, borderColorContrast, borderPosition,
  focus, focusBorderSize, focusBorderColor, focusBorderColorContrast,
  onComplete, length,
  mx, my, mt, mb, ml, mr,
  px, py, pt, pb, pl, pr }) => {
  if (circle) rounded = "full";

  const wrapperClasses = cx(
    className !== undefined && className,
    "w-max",
    "relative",
    "flex",
    "flex-col",
    "space-y-1",
    Margin(mx, my, mb, ml, mr, mt)
  )

  const baseClasses = cx(
    `w-${width} h-${width}`,
    Color("bg", color, colorContrast),
    Color("text", textColor, textColorContrast),
    FontSize[textSize],
    "font-semibold",
    "text-center",
    rounded !== "none" && `${RoundedSize[rounded]} focus:${RoundedSize[rounded]}`,
    (border && borderSize !== "none" && borderPosition === undefined) && `border-${borderStyle} ${BorderSize[borderSize]}`,
    (border && borderSize !== "none") && Color("border", borderColor, borderColorContrast),
    borderPosition !== undefined && `${BorderPosition[borderPosition]}${BorderSizeNum[borderSize]}`,
    "outline-none",
    focus && `focus:border-transparent focus:${RingSize[focusBorderSize]} focus:${Color("ring", focusBorderColor, focusBorderColorContrast)}`,
    Padding(px, py, pb, pl, pr, pt)
  )

  const formLabelClasses = cx(
    Color("text", labelColor, labelColorContrast),
    FontSize[labelSize],
    FontWeight["bold"]
  )

  const stepForward = (i) => {
    if (document.getElementById(`pin-${i}`).value && i !== length - 1) {
      document.getElementById(`pin-${i+1}`).focus();
      document.getElementById(`pin-${i+1}`).value = '';
    }
    checkPin()
  }

  const stepBack = (i) => {
    if (i !== 0) {
      if (document.getElementById(`pin-${i-1}`).value) {
        document.getElementById(`pin-${i-1}`).focus();
        document.getElementById(`pin-${i}`).value = '';
      }
    }
  }

  const checkPin = () => {
    let code = '';
    for (let i = 0; i < length; i++) {
      code = code + document.getElementById(`pin-${i}`).value;
    }
    if (code.length == length && onComplete !== undefined) onComplete(code)
  }

  return(
    <div className={wrapperClasses}>
      {label !== undefined && (<label className={formLabelClasses}>{label}</label>)}
      <span className="flex flex-row space-x-3">
        {[...Array(length)].map((el, i) => {
          return(
            <input 
              id={`pin-${i}`}
              key={i}
              name={name}
              className={baseClasses}
              autoFocus={i === 0}
              maxLength="1"
              min="0"
              max="9"
              inputMode="decimal"
              onKeyUp={(e) => {
                if (e.keyCode === 8) stepBack(i)
                else {
                  document.getElementById(`pin-${i}`).value = e.target.value.replace(/[^0-9]/g, "");
                  if (document.getElementById(`pin-${i}`).value !== "") stepForward(i)
                }
              }}
            />
          )
        })}
      </span>
    </div>
  )
}

Pin.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.node,
  name: PropTypes.string,
  circle: PropTypes.bool,
  length: PropTypes.number,
  onComplete: PropTypes.func,
  ...size,
  ...border,
  ...color,
  ...text,
  ...spacing
}

Pin.defaultProps = {
  width: 10,
  circle: false,
  color: "white",
  colorContrast: 200,
  labelColor: "gray",
  labelColorContrast: 600,
  labelSize: "sm",
  textSize: "lg",
  textColor: "gray",
  textColorContrast: 600,
  border: true,
  borderColor: "gray",
  borderColorContrast: 300,
  borderSize: "xs",
  borderStyle: "solid",
  focus: true,
  focusBorderColor: "blue",
  focusBorderColorContrast: 600,
  focusBorderSize: "sm",
  rounded: "none",
  length: 6,
  py: 2,
  px: 3
}

export default Pin;