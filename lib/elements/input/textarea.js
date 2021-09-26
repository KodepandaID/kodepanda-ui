import React, { useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import Icon from "../icon/icon";

import { Palletes, Color, Contrast } from "../../utils/color";
import { BorderSize, BorderSizeNum, BorderType, BorderPosition, RingSize } from "../../utils/border";
import { RoundedSize, RoundedPosition } from "../../utils/rounded";
import { Width, Height } from "../../utils/size";
import { ShadowSize } from "../../utils/shadow";
import { FontSize, FontWeight } from "../../utils/font";

const TextArea = ({ className, id, name, placeholder, label, labelPosition,
  width, height, rounded, roundedPosition, fluid,
  color, colorContrast, textSize, textColor, textColorContrast,
  placeholderColor, placeholderColorContrast, labelColor, labelColorContrast, labelSize,
  border, borderSize, borderStyle, borderColor, borderColorContrast, borderPosition,
  focus, focusBorderSize, focusBorderColor, focusBorderColorContrast,
  icon, iconColor, iconColorContrast,
  defaultValue, disabled, shadow, onChange, 
  success, successMessage, error, errorMessage,
  mt, mb, ml, mr,
  px, py, pt, pb, pl, pr}) => {
  const [focusActive, setFocusActive] = useState(false);

  if (focusBorderSize === undefined) focusBorderSize = borderSize;
  if (icon !== undefined) pr = 9;
  if (iconColor === undefined) {
    iconColor = textColor;
    iconColorContrast = textColorContrast;
  }

  if (success || error) {
    focus = false;
    border = true;
    borderSize = "sm";
    borderColor = success ? "green" : "red";
    borderColorContrast = 600;
    
    icon = success ? "check" : "exclamation";
    iconColor = success ? "green": "red";
    iconColorContrast = 600;
  }

  const wrapperClasses = cx(
    className !== undefined && className,
    !fluid ? `w-${width}` : "w-full",
    `h-${height}`,
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

  const wrapperInputClasses = cx(
    "w-full",
    "h-full",
    Color("bg", color, colorContrast),
    "relative",
    "flex",
    "flex-col",
    disabled && "opacity-25 cursor-not-allowed",
    !disabled && "cursor-pointer",
    (rounded !== "none" && roundedPosition === undefined) && RoundedSize[rounded],
    (rounded !== "none" && roundedPosition !== undefined) && `${RoundedPosition[roundedPosition]}-${rounded}`,
    (border && borderSize !== "none" && borderPosition === undefined) && `border-${borderStyle} ${BorderSize[borderSize]}`,
    (border && borderSize !== "none") && Color("border", borderColor, borderColorContrast),
    borderPosition !== undefined && `${BorderPosition[borderPosition]}${BorderSizeNum[borderSize]}`,
    (focusActive && borderPosition === undefined) && `outline-none border-transparent ${RingSize[focusBorderSize]} ${Color("ring", focusBorderColor, focusBorderColorContrast)}`,
    shadow !== "none" && ShadowSize[shadow],
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
  
  const baseClasses = cx(
    "w-full",
    "h-full",
    "bg-transparent",
    Color("text", textColor, textColorContrast),
    FontSize[textSize],
    placeholderColor !== undefined && Color("placeholder", placeholderColor, placeholderColorContrast),
    "outline-none",
  )

  const formLabelClasses = cx(
    Color("text", labelColor, labelColorContrast),
    FontSize[labelSize],
    FontWeight["bold"]
  )

  return(
    <div className={wrapperClasses}>
      {(label !== undefined && labelPosition === "outside") && (<label className={formLabelClasses}>{label}</label>)}
      <span className={wrapperInputClasses}>
        {(label !== undefined && labelPosition === "inside") && (<label className={formLabelClasses}>{label}</label>)}
        <span className="w-full h-full flex flex-row items-center">
          <textarea
            id={id} 
            name={name} 
            className={baseClasses} 
            defaultValue={defaultValue} 
            placeholder={placeholder}
            onFocus={() => {
              if (focus) setFocusActive(true)
            }}
            onBlur={() => {
              if (focus) setFocusActive(false)
            }}
            onChange={(e) => {
              if (onChange !== undefined) onChange(e)
            }} 
          />
          {icon !== undefined && (<Icon className="absolute right-2" icon={icon} size={textSize} color={iconColor} colorContrast={iconColorContrast} />)}
        </span>
      </span>
      {success && (<p className="text-xs text-green-600">{successMessage}</p>)}
      {error && (<p className="text-xs text-red-600">{errorMessage}</p>)}
    </div>
  )
}

TextArea.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.node,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  width: PropTypes.oneOf(Width),
  height: PropTypes.oneOf(Height),
  rounded: PropTypes.oneOf(Object.keys(RoundedSize)),
  roundedPosition: PropTypes.oneOf(Object.keys(RoundedPosition)),
  fluid: PropTypes.bool,
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  textSize: PropTypes.oneOf(Object.keys(FontSize)),
  textColor: PropTypes.oneOf(Palletes),
  textColorContrast: PropTypes.oneOf(Contrast),
  placeholderColor: PropTypes.oneOf(Palletes),
  placeholderColorContrast: PropTypes.oneOf(Contrast),
  labelColor: PropTypes.oneOf(Palletes),
  labelColorContrast: PropTypes.oneOf(Contrast),
  labelSize: PropTypes.oneOf(Object.keys(FontSize)),
  labelPosition: PropTypes.oneOf(["outside", "inside"]),
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
  disabled: PropTypes.bool,
  defaultValue: PropTypes.any,
  shadow: PropTypes.oneOf(Object.keys(ShadowSize)),
  icon: PropTypes.oneOf(Object.keys(Icon.Index)),
  iconColor: PropTypes.oneOf(Palletes),
  iconColorContrast: PropTypes.oneOf(Contrast),
  success: PropTypes.bool,
  successMessage: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
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

TextArea.defaultProps = {
  width: 72,
  height: 28,
  color: "white",
  colorContrast: 200,
  labelColor: "gray",
  labelColorContrast: 600,
  labelSize: "sm",
  textSize: "sm",
  textColor: "gray",
  textColorContrast: 600,
  placeholderColor: "gray",
  placeholderColorContrast: 400,
  labelPosition: "outside",
  border: true,
  borderColor: "gray",
  borderColorContrast: 300,
  borderSize: "xs",
  borderStyle: "solid",
  focus: true,
  focusBorderColor: "blue",
  focusBorderColorContrast: 600,
  iconColorContrast: 700,
  py: 1.5,
  px: 4
}

export default TextArea;