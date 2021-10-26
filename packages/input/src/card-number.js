import React, { useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import CardValidator from "card-validator";
import "../style.css";
import "tailwindcss/tailwind.css";

import { Margin, Padding } from "@zenbu-ui/classes";
import { Borders, Colors, Sizes, Spacings, Texts } from "@zenbu-ui/types";
import {
  BorderSize, RingSize, 
  Color,
  FontSize, FontWeight,
  RoundedSize,
  ShadowSize
 } from "@zenbu-ui/utils";

import { Mastercard } from "./card-number/mastercard";
import { Visa } from "./card-number/visa";
import { Amex } from "./card-number/amex";
import { JCB } from "./card-number/jcb";
import { CC } from "./card-number/cc";

const CardNumber = ({ className, id, name, label, width, full, rounded, fluid,
  widthSM, widthMD, widthLG, widthXL, width2XL,
  color, colorContrast, textSize, textColor, textColorContrast,
  labelPosition, labelColor, labelColorContrast, labelSize,
  placeholder, placeholderColor, placeholderColorContrast,
  border, borderSize, borderStyle, borderColor, borderColorContrast,
  focus, focusBorderSize, focusBorderColor, focusBorderColorContrast,
  defaultValue, disabled, errorMessage,
  onChange, shadow,
  mx, my, mt, mb, ml, mr,
  px, py, pt, pb, pl, pr}) => {
  const [focusActive, setFocusActive] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState(false);
  const [cardType, setCardType] = useState("");
  const [exp, setExp] = useState("");
  const [cvv, setCvv] = useState("");

  if (full) width = "max"

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
    "relative",
    "flex",
    "flex-col",
    "space-y-1",
    Margin(mx, my, mb, ml, mr, mt)
  )

  const wrapperInputClasses = () => {
    return cx(
      Color("bg", color, colorContrast),
      "relative",
      "flex",
      "flex-col",
      disabled && "opacity-25 cursor-not-allowed",
      !disabled && "cursor-pointer",
      rounded !== "none" && RoundedSize[rounded],
      (border && borderSize !== "none") && `border-${borderStyle} ${BorderSize[borderSize]}`,
      (border && borderSize !== "none") && Color("border", borderColor, borderColorContrast),
      error && Color("border", "red", 700),
      focusActive && `outline-none border-transparent ${RingSize[focusBorderSize]} ${Color("ring", focusBorderColor, focusBorderColorContrast)}`,
      shadow !== "none" && ShadowSize[shadow],
      Padding(px, py, pb, pl, pr, pt)
    )
  }

  const baseClasses = (width) => {
    return cx(
      "input-number-nobutton",
      `w-${width}`,
      "bg-transparent",
      Color("text", textColor, textColorContrast),
      FontSize[textSize],
      placeholderColor !== undefined && Color("placeholder", placeholderColor, placeholderColorContrast),
      "outline-none",
      width === 11 && "mr-5",
    )
  }

  const formLabelClasses = cx(
    Color("text", labelColor, labelColorContrast),
    FontSize[labelSize],
    FontWeight["bold"]
  )

  if (width < 32) width = 32;

  const formatCardNumber = (num, type) => {
    if (type === "mastercard" && num.length <= 16 ||
      type === "visa" && num.length <= 16 ||
      type === "jcb" && num.length <= 16 ||
      type === undefined) {
      const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;

      return num.replace(regex, (regex, $1, $2, $3, $4) =>
        [$1, $2, $3, $4].filter((group) => !!group).join(' ')
      )
    } else if (type === "american-express" && num.length <= 15) {
      const regex = /^(\d{0,4})(\d{0,6})(\d{0,5})$/g;

      return num.replace(regex, (regex, $1, $2, $3) =>
        [$1, $2, $3].filter((group) => !!group).join(' ')
      )
    }
    
    return null
  }

  const formatCardExp = (num) => {
    const regex = /^(\d{0,2})(\d{0,2})$/g;
  
    return num.replace(regex, (regex, $1, $2) =>
      [$1, $2].filter((group) => !!group).join('/')
    )
  }

  const removeNonNumeric = (num) => num.toString().replace(/[^0-9]/g, "");

  return(
    <div className={wrapperClasses}>
      {(label !== undefined && labelPosition === "outside") && (<label className={formLabelClasses}>{label}</label>)}
      <span className={error ? wrapperInputClasses() : wrapperInputClasses()}>
        {(label !== undefined && labelPosition === "inside") && (<label className={formLabelClasses}>{label}</label>)}
        {(cardType === "" || error) && (<span className="absolute left-3 top-2 w-8"><CC /></span>)}
        {(cardType === "mastercard" && value !== "") && (<span className="absolute left-2 top-0 w-8"><Mastercard /></span>)}
        {(cardType === "visa" && value !== "") && (<span className="absolute left-2 -top-1 w-8"><Visa /></span>)}
        {(cardType === "american-express" && value !== "") && (<span className="absolute left-2 top-0 w-8"><Amex /></span>)}
        {(cardType === "jcb" && value !== "") && (<span className="absolute left-2 -top-1 w-8"><JCB /></span>)}
        <span className="flex flex-row items-center pl-9">
          <input
            id={id}
            type="text"
            autoFocus="autofocus"
            name={name}
            placeholder={placeholder}
            className={baseClasses("full")}
            value={value}
            onFocus={() => {
              if (focus) setFocusActive(true)
            }}
            onBlur={() => {
              if (focus) setFocusActive(false)
            }}
            onChange={(e) => {
              const num = removeNonNumeric(e.target.value);
              let cv = CardValidator.number(removeNonNumeric(num))

              if (cv.card === null) {
                setCardType("")
                setError(true)
                const numFmt = formatCardNumber(num)
                if (numFmt !== null) setValue(numFmt)
              } else {
                setCardType(cv.card.type)
                const numFmt = formatCardNumber(num, cv.card.type)
                if (numFmt !== null) {
                  cv = CardValidator.number(removeNonNumeric(numFmt))
                  if (cv.isPotentiallyValid) {
                    setError(false)
                    setValue(numFmt)
                  } else {
                    if (!error) setValue(numFmt)
                    setError(true)
                  }
                }
              }

              if (e.target.value === "") setError(false)

              if (onChange !== undefined) onChange(error, removeNonNumeric(value), cardType, exp, cvv)
            }}
          />
          {full && (
            <>
              <input
                type="text"
                placeholder="MM/YY"
                value={exp}
                className={baseClasses(14)}
                onFocus={() => {
                  if (focus) setFocusActive(true)
                }}
                onBlur={() => {
                  if (focus) setFocusActive(false)
                }}
                onChange={(e) => {
                  const num = removeNonNumeric(e.target.value);
                  setExp(formatCardExp(num))
                  if (onChange !== undefined) onChange(error, removeNonNumeric(value), cardType, exp, cvv)
                }}
              />

              <input
                type="text"
                placeholder="CVV"
                value={cvv}
                className={baseClasses(10)}
                onFocus={() => {
                  if (focus) setFocusActive(true)
                }}
                onBlur={() => {
                  if (focus) setFocusActive(false)
                }}
                onChange={(e) => {
                  const num = removeNonNumeric(e.target.value);
                  const cv = CardValidator.number(value)
                  if (cv.card !== null) {
                    if (num.length <= cv.card.code.size) setCvv(num)
                  }
                  if (onChange !== undefined) onChange(error, removeNonNumeric(value), cardType, exp, cvv)
                }}
              />
            </>
          )}
        </span>
      </span>
      {error && (<p className="text-xs text-red-600">{errorMessage}</p>)}
    </div>
  )
}

CardNumber.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.node,
  name: PropTypes.string,
  full: PropTypes.bool,
  fluid: PropTypes.bool,
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  ...Sizes,
  ...Borders,
  ...Colors,
  ...Texts,
  ...Spacings
}

CardNumber.defaultProps = {
  defaultValue: "",
  full: false,
  width: 60,
  color: "white",
  colorContrast: 200,
  labelPosition: "outside",
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
  placeholderColor: "gray",
  placeholderColorContrast: 400,
  rounded: "none",
  shadow: "none",
  errorMessage: "Card number is invalid",
  py: 1.5,
  px: 4
}

export {
  CardNumber
}
