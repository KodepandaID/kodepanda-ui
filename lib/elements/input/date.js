import React, { useEffect, useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import moment from "moment";

import Icon from "../icon/icon";

import { Palletes, Color, Contrast } from "../../utils/color";
import { BorderSize, BorderPosition, BorderType, BorderSizeNum, RingSize } from "../../utils/border";
import { RoundedSize, RoundedPosition } from "../../utils/rounded";
import { ShadowSize } from "../../utils/shadow";
import { Width } from "../../utils/size";
import { FontSize, FontWeight } from "../../utils/font";

const Date = ({ className, id, name, label, width, rounded, roundedPosition, fluid, time, lang, format,
  color, colorContrast, textSize, textColor, textColorContrast,
  labelColor, labelColorContrast, labelSize, labelPosition,
  placeholder, placeholderColor, placeholderColorContrast,
  border, borderSize, borderStyle, borderColor, borderColorContrast, borderPosition,
  focus, focusBorderSize, focusBorderColor, focusBorderColorContrast,
  defaultValue, disabled, onChange, shadow,
  mt, mb, ml, mr,
  px, py, pt, pb, pl, pr }) => {
  if (time && !format.includes("HH:mm")) format = `${format} HH:mm`

  const [focusActive, setFocusActive] = useState(false);
  const [value, setValue] = useState("");

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

  const wrapperInputClasses = cx(
    "w-full",
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
    "bg-transparent",
    Color("text", textColor, textColorContrast),
    FontSize[textSize],
    placeholderColor !== undefined && Color("placeholder", placeholderColor, placeholderColorContrast),
    shadow !== "none" && ShadowSize[shadow],
    "outline-none",
    "pl-3",
  )

  const formLabelClasses = cx(
    Color("text", labelColor, labelColorContrast),
    FontSize[labelSize],
    FontWeight["bold"]
  )

  const formatDate = (num) => {
    const regex = /^(\d{0,2})(\d{0,2})(\d{0,4})$/g;
    
    if (num.length <= 8) {  
      return num.replace(regex, (regex, $1, $2, $3) =>
        [$1, $2, $3].filter((group) => !!group).join('/')
      )
    } else return value
  }

  const formatDateTime = (num) => {
    const regex = /^(\d{0,2})(\d{0,2})(\d{0,4})(\d{0,2})(\d{0,2})$/g;

    if (num.length <= 12) {
      const d = num.replace(regex, (regex, $1, $2, $3) =>
        [$1, $2, $3].filter((group) => !!group).join('/')
      )

      const t = num.replace(regex, (regex, $1, $2, $3, $4, $5) =>
        [$4, $5].filter((group) => !!group).join(':')
      )

      return `${d} ${t}`
    } else return value
  }

  const removeNonNumeric = (num) => num.toString().replace(/[^0-9]/g, "");

  useEffect(() => {
    if (defaultValue > 0) setValue(moment.unix(defaultValue).locale(lang).format(format))
  }, [])

  return(
    <div className={wrapperClasses}>
      {(label !== undefined && labelPosition === "outside") && (<label className={formLabelClasses}>{label}</label>)}
      <span className={wrapperInputClasses}>
        {(label !== undefined && labelPosition === "inside") && (<label className={formLabelClasses}>{label}</label>)}
        <div className="flex flex-row items-center justify-center space-x-2">
          <Icon className="absolute left-2" icon="calendar" size={textSize} color={textColor} colorContrast={textColorContrast} />
          <input
            id={id}
            type="text"
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
              if (!time) {
                const fmt = formatDate(num);
                setValue(fmt)
                if (fmt.length === 10 && onChange !== undefined) {
                  const m = moment(fmt, format)
                  onChange(m.unix(), m.format(format)) 
                }
              } else {
                const fmt = formatDateTime(num);
                setValue(formatDateTime(num))
                if (fmt.length === 16 && onChange !== undefined) {
                  const m = moment(fmt, format)
                  onChange(m.unix(), m.format(format))
                }
              }
            }}
          />
        </div>
      </span>
    </div>
  )
}

Date.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.node,
  name: PropTypes.string,
  time: PropTypes.bool,
  format: PropTypes.string,
  width: PropTypes.oneOf(Width),
  rounded: PropTypes.oneOf(Object.keys(RoundedSize)),
  roundedPosition: PropTypes.oneOf(Object.keys(RoundedPosition)),
  fluid: PropTypes.bool,
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  textSize: PropTypes.oneOf(Object.keys(FontSize)),
  textColor: PropTypes.oneOf(Palletes),
  textColorContrast: PropTypes.oneOf(Contrast),
  labelColor: PropTypes.oneOf(Palletes),
  labelColorContrast: PropTypes.oneOf(Contrast),
  labelSize: PropTypes.oneOf(Object.keys(FontSize)),
  labelPosition: PropTypes.oneOf(["inside", "outside"]),
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
  placeholder: PropTypes.string,
  placeholderColor: PropTypes.oneOf(Palletes),
  placeholderColorContrast: PropTypes.oneOf(Contrast),
  shadow: PropTypes.oneOf(Object.keys(ShadowSize)),
  disabled: PropTypes.bool,
  defaultValue: PropTypes.number,
  lang: PropTypes.string,
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

Date.defaultProps = {
  defaultValue: 0,
  lang: "en",
  time: false,
  format: "DD/MM/YYYY",
  placeholder: "DD/MM/YYYY",
  width: "max",
  color: "white",
  colorContrast: 200,
  labelColor: "gray",
  labelColorContrast: 600,
  labelPosition: "outside",
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
  focusBorderSize: "xs",
  placeholderColor: "gray",
  placeholderColorContrast: 400,
  rounded: "none",
  shadow: "none",
  py: 1.5,
  px: 4,
}

export default Date;