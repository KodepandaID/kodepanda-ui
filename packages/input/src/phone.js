import React, { useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import { getCountries, getCountryCallingCode, parsePhoneNumber } from 'libphonenumber-js';
import Flag from "react-country-flag";
import "../style.css";
import "tailwindcss/tailwind.css";
import countries from "./phone/country.json";

import { Dropdown } from "@kodepanda-ui/dropdown";
import { Icon } from "@kodepanda-ui/icon";

import { Margin, Padding } from "@kodepanda-ui/classes";
import { Borders, Colors, Icons, Sizes, Spacings, Texts } from "@kodepanda-ui/types";
import { 
  BorderSize, BorderSizeNum, BorderPosition, RingSize,
  Color,
  FontSize, FontWeight,
  RoundedSize, RoundedPosition,
  ShadowSize
 } from "@kodepanda-ui/utils";
import { FindByKey } from "./utils";

const Phone = ({ className, id, name, label, width, rounded, roundedPosition, fluid,
  widthSM, widthMD, widthLG, widthXL, width2XL,
  color, colorContrast, textSize, textColor, textColorContrast,
  labelColor, labelColorContrast, labelSize, labelPosition,
  placeholder, placeholderColor, placeholderColorContrast,
  border, borderSize, borderStyle, borderColor, borderColorContrast, borderPosition,
  focus, focusBorderSize, focusBorderColor, focusBorderColorContrast,
  defaultValue, defaultCountry, disabled,
  onChange, shadow,
  mx, my, mt, mb, ml, mr,
  px, py, pt, pb, pl, pr }) => {
  const [focusActive, setFocusActive] = useState(false);
  const [openCountry, setOpenCountry] = useState(false);
  const [chooseCountry, setChooseCountry] = useState(defaultCountry);
  const [value, setValue] = useState(defaultValue);

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
        <div className="flex flex-row items-center space-x-2">
          <span>
            <div className="flex flex-row items-center"
            onClick={() => setOpenCountry(!openCountry)}>
              <Flag countryCode={chooseCountry} svg /> <Icon icon="chevron-down-solid" size="sm" color="gray" colorContrast={700} ml={2} />
            </div>
            <div className="absolute top-full left-0 w-full">
              <Dropdown height={40} search visible={openCountry}>
                {getCountries().map((country, i) => {
                  const c = FindByKey(countries, "code", country)
                  if (c.length > 0) {
                    return(
                      <Dropdown.List key={i} value={c[0].name} onClick={() => {
                        setChooseCountry(country)
                        setOpenCountry()
                      }}>
                        <Flag countryCode={country} svg /> <span className="ml-2">{c[0].name}</span>
                      </Dropdown.List>
                    )
                  }
                })}
              </Dropdown>
            </div>
          </span>
          <input
            id={id}
            type="text"
            name={name}
            placeholder={placeholder}
            className={baseClasses}
            value={value}
            onFocus={() => {
              setOpenCountry(false)
              if (focus) setFocusActive(true)
            }}
            onBlur={() => {
              if (focus) setFocusActive(false)
            }}
            onChange={(e) => {
              try {
                const phoneNumber = parsePhoneNumber(e.target.value, chooseCountry)
                setValue(phoneNumber.formatInternational())
                if (onChange !== undefined) onChange(phoneNumber.number)
              } catch {
                let num = e.target.value;
                if (num.includes(`+${getCountryCallingCode(chooseCountry)} `)) {
                  num = num.replace(`+${getCountryCallingCode(chooseCountry)} `, "")
                }
                setValue(num)
                if (onChange !== undefined) onChange(num)
              }
            }}
          />
        </div>
      </span>
    </div>
  )
}

Phone.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.node,
  name: PropTypes.string,
  fluid: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.string,
  defaultCountry: PropTypes.oneOf(getCountries()),
  onChange: PropTypes.func,
  ...Sizes,
  ...Borders,
  ...Colors,
  ...Icons,
  ...Texts,
  ...Spacings
}

Phone.defaultProps = {
  defaultValue: "",
  defaultCountry: "ID",
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
  pl: 2
}

export {
  Phone
}
