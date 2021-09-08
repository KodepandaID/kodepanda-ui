import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color, Contrast } from "../../utils/color";
import { BorderSize } from "../../utils/border";
import { RoundedSize } from "../../utils/rounded";
import { ShadowSize } from "../../utils/shadow";

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

const TextArea = ({ id, name, className, defaultValue, width, fluid, disabled, placeholder, size, rounded, shadow,
  color, colorContrast, textColor, textColorContrast, placeholderColor, placeholderColorContrast, borderColor, borderColorContrast,
  focus, focusBorderColor, focusBorderColorContrast,
  onChange,
  mt, mb, ml, mr }) => {
  const baseClasses = cx(
    className !== undefined && className,
    fluid && "w-full",
    shadow !== undefined && ShadowSize[shadow],
    width !== undefined && `w-${typeof width === "number" ? widthSizes[width]:width}`,
    color !== undefined && Color("bg", color, colorContrast === undefined ? 200 : colorContrast),
    RoundedSize[rounded],
    "relative",
    "leading-tight",
    "inline-flex",
    "border",
    Color("border", borderColor, borderColorContrast === undefined ? 200 : borderColorContrast),
    sizes[size],
    "focus:outline-none",
    focus && `focus-within:${Color("border", focusBorderColor, focusBorderColorContrast === undefined ? 500 : focusBorderColorContrast)}`,
    Color("text", textColor, textColorContrast === undefined ? 500 : textColorContrast),
    placeholderColor !== undefined && Color("placeholder", placeholderColor, placeholderColorContrast === undefined ? 500 : placeholderColorContrast),
    (mb !== undefined && mb >= 0) && `mb-${mb}`,
    (mb !== undefined && mb < 0) && `-mb${mb}`,
    (ml !== undefined && ml >= 0) && `ml-${ml}`,
    (ml !== undefined && ml < 0) && `-ml${ml}`,
    (mr !== undefined && mr >= 0) && `mr-${mr}`,
    (mr !== undefined && mr < 0) && `-mr${mr}`,
    (mt !== undefined && mt >= 0) && `mt-${mt}`,
    (mt !== undefined && mt < 0) && `-mt${mt}`,
  )

  return(
    <textarea id={id} name={name} className={baseClasses} defaultValue={defaultValue} placeholder={placeholder} disabled={disabled} onChange={onChange} />
  )
}

TextArea.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizes)),
  rounded: PropTypes.oneOf(Object.keys(RoundedSize)),
  fluid: PropTypes.bool,
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  textColor: PropTypes.oneOf(Palletes),
  textColorContrast: PropTypes.oneOf(Contrast),
  placeholderColor: PropTypes.oneOf(Palletes),
  placeholderColorContrast: PropTypes.oneOf(Contrast),
  borderColor: PropTypes.oneOf(Palletes),
  borderColorContrast: PropTypes.oneOf(Contrast),
  focus: PropTypes.bool,
  focusBorderColor: PropTypes.oneOf(Palletes),
  focusBorderColorContrast: PropTypes.oneOf(Contrast),
  shadow: PropTypes.oneOf(Object.keys(ShadowSize)),
  borderSize: PropTypes.oneOf(Object.keys(BorderSize)),
  defaultValue: PropTypes.any,
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

TextArea.defaultProps = {
  width: "full",
  size: "md",
  rounded: "sm",
  textColor: "gray",
  textColorContrast: 500,
  borderColor: "gray",
  borderColorContrast: 200,
  focus: true,
  focusBorderColor: "blue",
  focusBorderColorContrast: 500,
  buttonColor: "blue",
  buttonColorContrast: 500,
  buttonPosition: "left",
}

export default TextArea;