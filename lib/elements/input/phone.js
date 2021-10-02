import React, { useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import { getCountries, getCountryCallingCode, parsePhoneNumber } from 'libphonenumber-js';
import getUnicodeFlagIcon from 'country-flag-icons/unicode';

import Dropdown from "../dropdown/dropdown";
import Icon from "../icon/icon";

import countries from "../../utils/country.json";

import { Palletes, Color, Contrast } from "../../utils/color";
import { BorderSize, BorderPosition, BorderType, BorderSizeNum, RingSize } from "../../utils/border";
import { RoundedSize, RoundedPosition } from "../../utils/rounded";
import { ShadowSize } from "../../utils/shadow";
import { Width } from "../../utils/size";
import { FontSize, FontWeight } from "../../utils/font";
import { FindByKey } from "./utils";

const Phone = ({ className, id, name, label, width, rounded, roundedPosition, fluid,
  color, colorContrast, textSize, textColor, textColorContrast,
  labelColor, labelColorContrast, labelSize, labelPosition,
  placeholder, placeholderColor, placeholderColorContrast,
  border, borderSize, borderStyle, borderColor, borderColorContrast, borderPosition,
  focus, focusBorderSize, focusBorderColor, focusBorderColorContrast,
  defaultValue, defaultCountry, disabled,
  onChange, shadow,
  mt, mb, ml, mr,
  px, py, pt, pb, pl, pr }) => {
  const [focusActive, setFocusActive] = useState(false);
  const [openCountry, setOpenCountry] = useState(false);
  const [chooseCountry, setChooseCountry] = useState(defaultCountry);
  const [value, setValue] = useState(defaultValue);

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
              {getUnicodeFlagIcon(chooseCountry)} <Icon icon="chevron-down-solid" size="sm" color="gray" colorContrast={700} ml={2} />
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
                        {getUnicodeFlagIcon(country)} <span className="ml-2">{c[0].name}</span>
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
  defaultValue: PropTypes.string,
  defaultCountry: PropTypes.oneOf(getCountries()),
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

export default Phone;