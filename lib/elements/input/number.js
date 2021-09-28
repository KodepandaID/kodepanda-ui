import React, { useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import Icon from "../icon/icon";
import Grid from "../grid/grid";

import { Palletes, Color, Contrast } from "../../utils/color";
import { BorderSize, BorderType, RingSize } from "../../utils/border";
import { RoundedSize, RoundedPosition } from "../../utils/rounded";
import { ShadowSize } from "../../utils/shadow";
import { Width } from "../../utils/size";
import { FontSize, FontWeight } from "../../utils/font";

const Number = ({ className, id, name, label, width, rounded, fluid,
  color, colorContrast, textSize, textColor, textColorContrast,
  labelColor, labelColorContrast, labelSize,
  placeholder, placeholderColor, placeholderColorContrast,
  border, borderSize, borderStyle, borderColor, borderColorContrast,
  focus, focusBorderSize, focusBorderColor, focusBorderColorContrast,
  defaultValue, disabled,
  iconColor, iconColorContrast,
  button, buttonColor, buttonColorContrast, buttonColorHover, buttonColorHoverContrast, 
  onChange, min, max, shadow, separator, currency, currencyText,
  mt, mb, ml, mr,
  px, py, pt, pb, pl, pr }) => {
  const [focusActive, setFocusActive] = useState(false);
  const [value, setValue] = useState(defaultValue);

  if (min > value) setValue(min)
  
  if (width < 32) width = 32;
  if (iconColor === undefined) {
    iconColor = textColor;
    iconColorContrast = textColorContrast;
  }

  const wrapperClasses = cx(
    className !== undefined && className,
    !fluid ? `w-${width}` : "w-full",
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

  const formLabelClasses = cx(
    Color("text", labelColor, labelColorContrast),
    FontSize[labelSize],
    FontWeight["bold"]
  )

  const buttonClasses = (position) => {
    const classes = cx(
      "w-full",
      "h-full",
      "flex",
      "flex-wrap",
      "justify-center",
      "cursor-pointer",
      Color("bg", buttonColor, buttonColorContrast),
      `hover:${Color("bg", buttonColorHover, buttonColorHoverContrast)}`,
      (rounded !== "none" && position === "left") && `rounded-l-${rounded}`,
      (rounded !== "none" && position === "right") && `rounded-r-${rounded}`,
      (border && position === "left") && `border-solid border border-r-0 ${Color("border", borderColor, borderColorContrast)}`,
      (border && position === "right") && `border-solid border border-l-0 ${Color("border", borderColor, borderColorContrast)}`,
      (focusActive && position === "left") && `outline-none border-transparent ${RingSize[focusBorderSize]} ring-r-0 ${Color("ring", focusBorderColor, focusBorderColorContrast)}`,
      (focusActive && position === "left") && `outline-none border-transparent ${RingSize[focusBorderSize]} ring-l-0 ${Color("ring", focusBorderColor, focusBorderColorContrast)}`,
      disabled && "opacity-25 cursor-not-allowed",
      !disabled && "cursor-pointer",
      "px-2",
      "py-2"
    )

    return classes
  }

  const count = (type) => {
    if (!disabled) {
      if (type === "inc") {
        if (max !== undefined && value+1 <= max || max === undefined) {
          setValue(value+1)
        }
      } else if (type === "dec") {
        if (min !== undefined && value-1 >= min || min === undefined) {
          setValue(value-1)
        }
      }
    }
  }

  const addCommas = num => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator === "dot" ? "." : ",");
  const removeNonNumeric = num => num.toString().replace(/[^0-9]/g, "");

  const NumberButton = () => {
    const baseClasses = cx(
      "input-number",
      "w-full",
      "h-full",
      Color("bg", color, colorContrast),
      Color("text", textColor, textColorContrast),
      FontSize[textSize],
      "outline-none",
      disabled && "opacity-25 cursor-not-allowed",
      !disabled && "cursor-pointer",
      (border && borderSize !== "none") && `border-${borderStyle} border-r-0 border-l-0 ${BorderSize[borderSize]}`,
      (border && borderSize !== "none") && Color("border", borderColor, borderColorContrast),
      focusActive && `outline-none border-transparent ${RingSize[focusBorderSize]} ring-r-0 ring-l-0 ${Color("ring", focusBorderColor, focusBorderColorContrast)}`,
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

    return(
      <Grid>
        <Grid.Row gap={0}>
          <Grid.Column width="1/3">
            <span className={buttonClasses("left")} onClick={() => count("dec")}> 
              <Icon icon="minus-sm" color={iconColor} colorContrast={iconColorContrast} />
            </span>
          </Grid.Column>
          <Grid.Column width="2/5">
            <input
              id={id}
              name={name}
              type="number"
              min={min}
              className={baseClasses}
              value={value}
              readOnly={button}
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
          </Grid.Column>
          <Grid.Column width="1/3">
            <span className={buttonClasses("right")} onClick={() => count("inc")}> 
              <Icon icon="plus-sm" color={iconColor} colorContrast={iconColorContrast} />
            </span>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

  const NumberNoButton = () => {
    const wrapperInputClasses = cx(
      "w-full",
      Color("bg", color, colorContrast),
      "relative",
      "flex",
      "flex-col",
      disabled && "opacity-25 cursor-not-allowed",
      !disabled && "cursor-pointer",
      rounded !== "none" && RoundedSize[rounded],
      (border && borderSize !== "none") && `border-${borderStyle} ${BorderSize[borderSize]}`,
      (border && borderSize !== "none") && Color("border", borderColor, borderColorContrast),
      focusActive && `outline-none border-transparent ${RingSize[focusBorderSize]} ${Color("ring", focusBorderColor, focusBorderColorContrast)}`,
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
      "input-number-nobutton",
      "w-full",
      "bg-transparent",
      Color("text", textColor, textColorContrast),
      FontSize[textSize],
      placeholderColor !== undefined && Color("placeholder", placeholderColor, placeholderColorContrast),
      "outline-none",
    )

    return(
      <span className={wrapperInputClasses}>
        <span className="flex flex-row items-center">
          <input
            id={id}
            type="text"
            autoFocus="autofocus"
            name={name}
            placeholder={placeholder}
            className={baseClasses}
            value={value}
            onFocus={() => {
              if (focus) setFocusActive(true)
            }}
            onBlur={() => {
              if (focus) setFocusActive(false)
            }}
            onChange={(e) => {
              if (onChange !== undefined) onChange(removeNonNumeric(e.target.value))
              if (separator !== "none") setValue(addCommas(removeNonNumeric(e.target.value)))
              else if (separator === "none") setValue(removeNonNumeric(e.target.value))
            }}
          />
        </span>
      </span>
    )
  }

  const Currency = () => {
    const baseClasses = cx(
      "input-number",
      "w-full",
      "h-full",
      "bg-transparent",
      FontSize[textSize],
      "outline-none",
      disabled && "opacity-25 cursor-not-allowed",
      !disabled && "cursor-pointer",
      (border && borderSize !== "none") && `border-${borderStyle} border-l-0 ${BorderSize[borderSize]}`,
      (border && borderSize !== "none") && Color("border", borderColor, borderColorContrast),
      focusActive && `outline-none border-transparent ${RingSize[focusBorderSize]} ring-r-0 ring-l-0 ${Color("ring", focusBorderColor, focusBorderColorContrast)}`,
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

    return(
      <Grid>
        <Grid.Row gap={0}>
          <Grid.Column width="1/3">
            <span className={buttonClasses("left")}>{currencyText}</span>
          </Grid.Column>
          <Grid.Column width="4/5">
            <input
              id={id}
              type="text"
              autoFocus="autofocus"
              name={name}
              placeholder={placeholder}
              className={baseClasses}
              value={value}
              onFocus={() => {
                if (focus) setFocusActive(true)
              }}
              onBlur={() => {
                if (focus) setFocusActive(false)
              }}
              onChange={(e) => {
                if (onChange !== undefined) onChange(removeNonNumeric(e.target.value))
                if (separator !== "none") setValue(addCommas(removeNonNumeric(e.target.value)))
                else if (separator === "none") setValue(removeNonNumeric(e.target.value))
              }}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

  return(
    <div className={wrapperClasses}>
      {label !== undefined && (<label className={formLabelClasses}>{label}</label>)}
      {(button && !currency) && (<NumberButton />)}
      {(!button && !currency) && (<NumberNoButton />)}
      {currency && (<Currency />)}
    </div>
  )
}

Number.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.node,
  name: PropTypes.string,
  width: PropTypes.oneOf(Width),
  rounded: PropTypes.oneOf(Object.keys(RoundedSize)),
  roundedPosition: PropTypes.oneOf(Object.keys(RoundedPosition)),
  fluid: PropTypes.bool,
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  textSize: PropTypes.oneOf(Object.keys(FontSize)),
  textColor: PropTypes.oneOf(Palletes),
  textColorContrast: PropTypes.oneOf(Contrast),
  iconColor: PropTypes.oneOf(Palletes),
  iconColorContrast: PropTypes.oneOf(Contrast),
  button: PropTypes.bool,
  buttonColor: PropTypes.oneOf(Palletes),
  buttonColorContrast: PropTypes.oneOf(Contrast),
  buttonColorHover: PropTypes.oneOf(Palletes),
  buttonColorHoverContrast: PropTypes.oneOf(Contrast),
  labelColor: PropTypes.oneOf(Palletes),
  labelColorContrast: PropTypes.oneOf(Contrast),
  labelSize: PropTypes.oneOf(Object.keys(FontSize)),
  border: PropTypes.bool,
  borderStyle: PropTypes.oneOf(Object.keys(BorderType)),
  borderSize: PropTypes.oneOf(Object.keys(BorderSize)),
  borderColor: PropTypes.oneOf(Palletes),
  borderColorContrast: PropTypes.oneOf(Contrast),
  focus: PropTypes.bool,
  focusBorderSize: PropTypes.oneOf(Object.keys(BorderSize)),
  focusBorderColor: PropTypes.oneOf(Palletes),
  focusBorderColorContrast: PropTypes.oneOf(Contrast),
  placeholder: PropTypes.string,
  placeholderColor: PropTypes.oneOf(Palletes),
  placeholderColorContrast: PropTypes.oneOf(Contrast),
  shadow: PropTypes.oneOf(Object.keys(ShadowSize)),
  disabled: PropTypes.bool,
  defaultValue: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  separator: PropTypes.oneOf(["none", "dot", "commas"]),
  currency: PropTypes.bool,
  currencyText: PropTypes.node,
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

Number.defaultProps = {
  defaultValue: 0,
  min: 1,
  width: 32,
  color: "white",
  colorContrast: 200,
  labelColor: "gray",
  labelColorContrast: 600,
  labelSize: "sm",
  textSize: "sm",
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
  iconColor: "gray",
  iconColorContrast: 700,
  button: true,
  buttonColor: "gray",
  buttonColorContrast: 100,
  buttonColorHover: "gray",
  buttonColorHoverContrast: 300,
  placeholderColor: "gray",
  placeholderColorContrast: 400,
  separator: "none",
  rounded: "none",
  shadow: "none",
  py: 1.5,
  px: 4
}

export default Number;