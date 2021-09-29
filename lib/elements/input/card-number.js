import React, { useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import CardValidator from "card-validator";

import { Palletes, Color, Contrast } from "../../utils/color";
import { BorderSize, BorderType, RingSize } from "../../utils/border";
import { RoundedSize, RoundedPosition } from "../../utils/rounded";
import { Width } from "../../utils/size";
import { ShadowSize } from "../../utils/shadow";
import { FontSize, FontWeight } from "../../utils/font";

import MastercardSVG from "../../assets/icon/mastercard";
import VisaSVG from "../../assets/icon/visa";
import AmexSVG from "../../assets/icon/amex";
import JCBSVG from "../../assets/icon/jcb";
import CCSVG from "../../assets/icon/cc";

const CardNumber = ({ className, id, name, label, width, rounded, fluid,
  color, colorContrast, textSize, textColor, textColorContrast,
  labelPosition, labelColor, labelColorContrast, labelSize,
  placeholder, placeholderColor, placeholderColorContrast,
  border, borderSize, borderStyle, borderColor, borderColorContrast,
  focus, focusBorderSize, focusBorderColor, focusBorderColorContrast,
  defaultValue, disabled, errorMessage,
  onChange, shadow,
  mt, mb, ml, mr,
  px, py, pt, pb, pl, pr}) => {
  const [focusActive, setFocusActive] = useState(false);
  const [value, setValue] = useState(defaultValue);
  const [error, setError] = useState(false);
  const [cardType, setCardType] = useState("")

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

  const wrapperInputClasses = () => {
    return cx(
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
      error && Color("border", "red", 700),
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
  }

  const baseClasses = cx(
    "input-number-nobutton",
    "w-full",
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

  const removeNonNumeric = (num) => num.toString().replace(/[^0-9]/g, "");

  return(
    <div className={wrapperClasses}>
      {(label !== undefined && labelPosition === "outside") && (<label className={formLabelClasses}>{label}</label>)}
      <span className={error ? wrapperInputClasses() : wrapperInputClasses()}>
        {(label !== undefined && labelPosition === "inside") && (<label className={formLabelClasses}>{label}</label>)}
        {(cardType === "" || error) && (<span className="absolute left-3 top-2 w-8"><CCSVG /></span>)}
        {(cardType === "mastercard" && value !== "") && (<span className="absolute left-2 top-0 w-8"><MastercardSVG /></span>)}
        {(cardType === "visa" && value !== "") && (<span className="absolute left-2 -top-1 w-8"><VisaSVG /></span>)}
        {(cardType === "american-express" && value !== "") && (<span className="absolute left-2 top-0 w-8"><AmexSVG /></span>)}
        {(cardType === "jcb" && value !== "") && (<span className="absolute left-2 -top-1 w-8"><JCBSVG /></span>)}
        <span className="flex flex-row items-center pl-9">
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

              if (onChange !== undefined) onChange()
            }}
          />
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
  width: PropTypes.oneOf(Width),
  rounded: PropTypes.oneOf(Object.keys(RoundedSize)),
  roundedPosition: PropTypes.oneOf(Object.keys(RoundedPosition)),
  fluid: PropTypes.bool,
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  textSize: PropTypes.oneOf(Object.keys(FontSize)),
  textColor: PropTypes.oneOf(Palletes),
  textColorContrast: PropTypes.oneOf(Contrast),
  labelPosition: PropTypes.oneOf(["outside", "inside"]),
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
  errorMessage: PropTypes.string,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.string,
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

CardNumber.defaultProps = {
  defaultValue: "",
  width: 52,
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

export default CardNumber;