import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { default as Icon } from "../icon/icon";

import { Palletes, Color, Contrast } from "../../utils/color";
import { BorderSize } from "../../utils/border";
import { RoundedSize } from "../../utils/rounded";

const sizes = {
  xs: "py-1 px-1.5 text-xs",
  sm: "py-1.5 px-2 text-xs",
  md: "py-2 px-2.5 text-sm",
  lg: "py-2.5 px-3.5 text-md",
  xl: "py-4 px-6 text-lg"
}

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

const types = ["text", "password", "email"]

const Input = ({ width, defaultValue, fluid, disabled, placeholder, size, rounded, type,
  bgColor, bgColorContrast, textColor, textColorContrast, placeholderColor, placeholderColorContrast, borderColor, borderColorContrast,
  focusBorderColor, focusBorderColorContrast,
  icon, iconColor, iconPosition,
  label, labelIcon, labelPosition, labelColor, labelColorContrast,
  success, successMessage, error, errorMessage,
  mt, mb, ml, mr }) => {
  if (success) {
    borderColor = "green"
    icon = "check"
    iconColor = "green"
  }

  if (error) {
    bgColor = "red"
    bgColorContrast = 200
    borderColor = "red"
    icon = "exclamation"
    iconColor = "red"
  }

  const baseClasses = cx(
    fluid && "w-full",
    width !== undefined && `w-${typeof width === "number" ? widthSizes[width]:width}`,
    bgColor !== undefined && Color("bg", bgColor, bgColorContrast === undefined ? 200 : bgColorContrast),
    RoundedSize[rounded],
    "relative",
    "inline-flex",
    label === undefined && "border",
    label === undefined && Color("border", borderColor, borderColorContrast === undefined ? 200 : borderColorContrast),
    "focus:outline-none",
    `focus-within:${Color("border", focusBorderColor, focusBorderColorContrast === undefined ? 500 : focusBorderColorContrast)}`,
    icon !== undefined && `${iconPosition === "left" ? "pl-5" : "pr-5"}`,
    mt !== undefined && `mt-${mt}`,
    mb !== undefined && `mb-${mb}`,
    ml !== undefined && `ml-${ml}`,
    mr !== undefined && `mr-${mr}`,
  )

  const inputClasses = cx(
    fluid && "w-full",
    (label !== undefined && labelPosition === "left") && "border-t border-b border-r",
    (label !== undefined && labelPosition === "right") && "border-t border-b border-l",
    label !== undefined && Color("border", borderColor, borderColorContrast === undefined ? 200 : borderColorContrast),
    "bg-transparent",
    RoundedSize[rounded],
    (label !== undefined && labelPosition === "left") && `rounded-l-none`,
    (label !== undefined && labelPosition === "right") && `rounded-r-none`,
    "leading-tight",
    "focus:outline-none",
    label !== undefined && `focus-within:${Color("border", focusBorderColor, focusBorderColorContrast === undefined ? 500 : focusBorderColorContrast)}`,
    sizes[size],
    Color("text", textColor, textColorContrast === undefined ? 500 : textColorContrast),
    placeholderColor !== undefined && Color("placeholder", placeholderColor, placeholderColorContrast === undefined ? 500 : placeholderColorContrast)
  )

  const iconClasses = cx(
    "absolute",
    "top-2",
    `${iconPosition}-2`
  )

  const textClasses = cx(
    "text-xs mt-1 mb-2",
    success && "text-green-600",
    error && "text-red-400"
  )

  const labelClasses = cx(
    `${labelPosition === "left" ? `rounded-l-${rounded}` : `rounded-r-${rounded}`}`,
    `${Color("bg", labelColor, labelColorContrast === undefined ? 200 : labelColorContrast)}`,
    `${["gray", "white"].includes(labelColor) ? `${Color("text", "gray", 500)}` : `${Color("text", "white")}`}`,
    sizes[size],
    "font-semibold"
  )

  return(
    <>
      <div className={baseClasses}>
        {(label !== undefined && labelPosition === "left") && (
          <div className={labelClasses}>
            {labelIcon !== undefined && (
              <Icon icon={labelIcon} color={["gray", "white"].includes(labelColor) ? "gray" : "white"} contrast={500} />
            )}
            {labelIcon === undefined && {label}}
          </div>
        )} 
        <input className={inputClasses} placeholder={placeholder} disabled={disabled} type={type} defaultValue={defaultValue} />
        {icon !== undefined && <Icon icon={icon} className={iconClasses} color={iconColor === undefined ? "gray" : iconColor} />}
        {(label !== undefined && labelPosition === "right") && (
          <div className={labelClasses}>{label}</div>
        )} 
      </div>
      {(success || error) && <p className={textClasses}>{successMessage || errorMessage}</p>}
    </>
  )
}

Input.propTypes = {
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizes)),
  type: PropTypes.oneOf(types),
  rounded: PropTypes.oneOf(Object.keys(RoundedSize)),
  fluid: PropTypes.bool,
  bgColor: PropTypes.oneOf(Palletes),
  bgColorContrast: PropTypes.oneOf(Contrast),
  textColor: PropTypes.oneOf(Palletes),
  textColorContrast: PropTypes.oneOf(Contrast),
  placeholderColor: PropTypes.oneOf(Palletes),
  placeholderColorContrast: PropTypes.oneOf(Contrast),
  borderColor: PropTypes.oneOf(Palletes),
  borderColorContrast: PropTypes.oneOf(Contrast),
  focusBorderColor: PropTypes.oneOf(Palletes),
  focusBorderColorContrast: PropTypes.oneOf(Contrast),
  borderSize: PropTypes.oneOf(Object.keys(BorderSize)),
  defaultValue: PropTypes.any,
  icon: PropTypes.oneOf(Object.keys(Icon.Solid)),
  iconColor: PropTypes.oneOf(Palletes),
  iconPosition: PropTypes.oneOf(["left", "right"]),
  label: PropTypes.string,
  labelIcon: PropTypes.oneOf(Object.keys(Icon.Solid)),
  labelPosition: PropTypes.oneOf(["left", "right"]),
  labelColor: PropTypes.oneOf(Palletes),
  labelColorContrast: PropTypes.oneOf(Contrast),
  success: PropTypes.bool,
  successMessage: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
  width: PropTypes.oneOfType([
    PropTypes.oneOf(["auto", "1/5", "1/4", "1/3", "2/5", "1/2", "3/5", "2/3", "3/4", "4/5", "full"]),
    PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
  ]),
}

Input.defaultProps = {
  type: "text",
  size: "md",
  rounded: "sm",
  textColor: "gray",
  textColorContrast: 500,
  borderColor: "gray",
  borderColorContrast: 200,
  focusBorderColor: "blue",
  focusBorderColorContrast: 500,
  iconPosition: "right",
  labelColor: "gray",
  labelPosition: "left"
}

export default Input;