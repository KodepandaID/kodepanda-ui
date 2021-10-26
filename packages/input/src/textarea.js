import React, { useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import "../style.css";
import "tailwindcss/tailwind.css";

import { Icon, Index } from "@zenbu-ui/icon";

import { Margin, Padding } from "@zenbu-ui/classes";
import { Borders, Colors, Icons, Sizes, Spacings, Texts } from "@zenbu-ui/types";
import { 
  BorderSize, BorderSizeNum, BorderPosition, RingSize,
  Color,
  FontSize, FontWeight,
  RoundedSize, RoundedPosition,
  ShadowSize
 } from "@zenbu-ui/utils";

const TextArea = ({ className, id, name, placeholder, label, labelPosition,
  width, widthSM, widthMD, widthLG, widthXL, width2XL, height, rounded, roundedPosition, fluid,
  color, colorContrast, textSize, textColor, textColorContrast,
  placeholderColor, placeholderColorContrast, labelColor, labelColorContrast, labelSize,
  border, borderSize, borderStyle, borderColor, borderColorContrast, borderPosition,
  focus, focusBorderSize, focusBorderColor, focusBorderColorContrast,
  icon, iconColor, iconColorContrast,
  defaultValue, disabled, shadow, onChange, 
  success, successMessage, error, errorMessage,
  mx, my, mt, mb, ml, mr,
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
    fluid && `w-full`,
    (widthSM === undefined && widthMD === undefined 
    && widthLG === undefined && widthXL === undefined
    && width2XL === undefined && width !== undefined && !fluid) && `w-${width}`,
    widthSM !== undefined && `sm:w-${widthSM}`,
    widthMD !== undefined && `md:w-${widthMD}`,
    widthLG !== undefined && `lg:w-${widthLG}`,
    widthXL !== undefined && `xl:w-${widthXL}`,
    width2XL !== undefined && `2xl:w-${width2XL}`,
    `h-${height}`,
    "relative",
    "flex",
    "flex-col",
    "space-y-1",
    Margin(mx, my, mb, ml, mr, mt)
  )

  const wrapperInputClasses = cx(
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
    Padding(px, py, pb, pl, pr, pt)
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
  icon: PropTypes.oneOf(Object.keys(Index)),
  id: PropTypes.string,
  label: PropTypes.node,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  fluid: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.any,
  success: PropTypes.bool,
  successMessage: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
  ...Sizes,
  ...Borders,
  ...Colors,
  ...Icons,
  ...Texts,
  ...Spacings
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

export {
  TextArea
}
