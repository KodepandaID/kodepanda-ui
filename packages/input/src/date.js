import React, { useEffect, useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import moment from "moment";
import "../style.css";
import "tailwindcss/tailwind.css";

import { Icon } from "@zenbu-ui/icon";

import { Margin, Padding } from "@zenbu-ui/classes";
import { Borders, Colors, Sizes, Spacings, Texts } from "@zenbu-ui/types";
import {
  BorderSize, BorderPosition, BorderSizeNum, RingSize, 
  Color,
  FontSize, FontWeight,
  RoundedSize, RoundedPosition,
  ShadowSize
} from "@zenbu-ui/utils";

const Date = ({ className, id, name, label, width, rounded, roundedPosition, fluid, time, lang, format,
  widthSM, widthMD, widthLG, widthXL, width2XL,
  color, colorContrast, textSize, textColor, textColorContrast,
  labelColor, labelColorContrast, labelSize, labelPosition,
  placeholder, placeholderColor, placeholderColorContrast,
  border, borderSize, borderStyle, borderColor, borderColorContrast, borderPosition,
  focus, focusBorderSize, focusBorderColor, focusBorderColorContrast,
  defaultValue, disabled, onChange, shadow,
  mx, my, mt, mb, ml, mr,
  px, py, pt, pb, pl, pr }) => {
  if (time && !format.includes("HH:mm")) format = `${format} HH:mm`

  const [focusActive, setFocusActive] = useState(false);
  const [value, setValue] = useState("");

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

  const wrapperInputClasses = cx(
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
  fluid: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.number,
  lang: PropTypes.string,
  onChange: PropTypes.func,
  ...Sizes,
  ...Borders,
  ...Colors,
  ...Texts,
  ...Spacings
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

export {
  Date
}
