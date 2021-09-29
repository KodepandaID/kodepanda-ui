import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color, Contrast } from "../../utils/color";
import { BorderSize, BorderSizeNum, BorderType, BorderPosition, RingSize } from "../../utils/border";
import { RoundedSize, RoundedPosition } from "../../utils/rounded";
import { ShadowSize } from "../../utils/shadow";
import { Width } from "../../utils/size";
import { FontSize, FontWeight } from "../../utils/font";

const Pin = ({ className, name, label, rounded, width, circle,
  color, colorContrast, textSize, textColor, textColorContrast,
  labelColor, labelColorContrast, labelSize,
  border, borderSize, borderStyle, borderColor, borderColorContrast, borderPosition,
  focus, focusBorderSize, focusBorderColor, focusBorderColorContrast,
  onComplete, length,
  mt, mb, ml, mr,
  px, py, pt, pb, pl, pr }) => {
  if (circle) rounded = "full";

  const wrapperClasses = cx(
    className !== undefined && className,
    "w-max",
    "relative",
    "flex",
    "flex-col",
    "space-y-1",
    (mb !== undefined && mb >= 0) && `mb-${mb}`,
    (mb !== undefined && mb < 0) && `-mb${mb}`,
    (ml !== undefined && ml >= 0) && `ml-${ml}`,
    (ml !== undefined && ml < 0) && `-ml${ml}`,
    (mr !== undefined && mr >= 0) && `mr-${mr}`,
    (mr !== undefined && mr < 0) && `-mr${mr}`,
    (mt !== undefined && mt >= 0) && `mt-${mt}`,
    (mt !== undefined && mt < 0) && `-mt${mt}`,
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
    (px !== undefined && px >= 0) && `px-${px}`,
    (px !== undefined && px < 0) && `-px${px}`,
    (py !== undefined && py >= 0) && `py-${py}`,
    (py !== undefined && py < 0) && `-py${py}`,
    (pb !== undefined && pb >= 0) && `pb-${pb}`,
    (pb !== undefined && pb < 0) && `-pb${pb}`,
    (pl !== undefined && pl >= 0) && `pl-${pl}`,
    (pl !== undefined && pl < 0) && `-pl${pl}`,
    (pr !== undefined && pr >= 0) && `pr-${pr}`,
    (pr !== undefined && pr < 0) && `-pr${pr}`,
    (pt !== undefined && pt >= 0) && `pt-${pt}`,
    (pt !== undefined && pt < 0) && `-pt${pt}`
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
  width: PropTypes.oneOf(Width),
  circle: PropTypes.bool,
  rounded: PropTypes.oneOf(Object.keys(RoundedSize)),
  roundedPosition: PropTypes.oneOf(Object.keys(RoundedPosition)),
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  textSize: PropTypes.oneOf(Object.keys(FontSize)),
  textColor: PropTypes.oneOf(Palletes),
  textColorContrast: PropTypes.oneOf(Contrast),
  labelColorContrast: PropTypes.oneOf(Contrast),
  labelSize: PropTypes.oneOf(Object.keys(FontSize)),
  border: PropTypes.bool,
  borderStyle: PropTypes.oneOf(Object.keys(BorderType)),
  borderSize: PropTypes.oneOf(Object.keys(BorderSize)),
  borderColor: PropTypes.oneOf(Palletes),
  borderColorContrast: PropTypes.oneOf(Contrast),
  borderPosition: PropTypes.oneOf(Object.keys(BorderPosition)),
  focus: PropTypes.bool,
  focusBorderSize: PropTypes.oneOf(Object.keys(BorderSize)),
  focusBorderColor: PropTypes.oneOf(Palletes),
  focusBorderColorContrast: PropTypes.oneOf(Contrast),
  shadow: PropTypes.oneOf(Object.keys(ShadowSize)),
  length: PropTypes.number,
  onComplete: PropTypes.func,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
  px: PropTypes.number,
  py: PropTypes.number,
  pb: PropTypes.number,
  pl: PropTypes.number,
  pr: PropTypes.number,
  pt: PropTypes.number,
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