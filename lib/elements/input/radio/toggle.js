import React, { useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color, Contrast } from "../../../utils/color";
import { BorderSize, BorderSizeNum, BorderType, BorderPosition } from "../../../utils/border";
import { RoundedSize, RoundedPosition } from "../../../utils/rounded";
import { FontSize } from "../../../utils/font";
import { ShadowSize } from "../../../utils/shadow";

const Toggle = ({ children, name, defaultValue, disabled,
  color, colorContrast, colorActive, colorActiveContrast, bgColor, bgColorContrast,
  textColor, textColorContrast, textSize, textColorActive, textColorActiveContrast,
  label, labelColor, labelColorContrast, labelSize,
  border, borderColor, borderColorContrast, borderPosition, borderSize, borderStyle,
  shadow, rounded, roundedPosition, onChange,
  mt, mb, ml, mr,
  px, py, pt, pb, pl, pr }) => {

  const [value, setValue] = useState(defaultValue);

  const wrapperClasses = cx(
    "w-max",
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

  const wrapperToggleClasses = cx(
    "w-full",
    "relative",
    "flex",
    "flex-row",
    "items-center",
    "space-x-3",
    Color("bg", bgColor, bgColorContrast),
    disabled && "opacity-25 cursor-not-allowed",
    !disabled && "cursor-pointer",
    (rounded !== "none" && roundedPosition === undefined) && RoundedSize[rounded],
    (rounded !== "none" && roundedPosition !== undefined) && `${RoundedPosition[roundedPosition]}-${rounded}`,
    (border && borderSize !== "none" && borderPosition === undefined) && `border-${borderStyle} ${BorderSize[borderSize]}`,
    (border && borderSize !== "none") && Color("border", borderColor, borderColorContrast),
    borderPosition !== undefined && `${BorderPosition[borderPosition]}${BorderSizeNum[borderSize]}`,
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

  const formLabelClasses = cx(
    Color("text", labelColor, labelColorContrast),
    FontSize[labelSize]
  )

  return(
    <div className={wrapperClasses}>
      {label !== undefined && (<label className={formLabelClasses}>{label}</label>)}
      <div className={wrapperToggleClasses}>
        <input name={name} type="radio" className="hidden" value={value} />
        {children.map((el, i) => {
          if (el.type.name === "Radio") {
            const switchClasses = cx(
              el.props.value === value ? Color("bg", colorActive, colorActiveContrast) : Color("bg", color, colorContrast),
              el.props.value === value ? Color("text", textColorActive, textColorActiveContrast) : Color("text", textColor, textColorContrast),
              "transform",
              "ease-in-out",
              "duration-300",
              FontSize[textSize],
              (rounded !== "none" && roundedPosition === undefined) && RoundedSize[rounded],
              (rounded !== "none" && roundedPosition !== undefined) && `${RoundedPosition[roundedPosition]}-${rounded}`,
              "py-1",
              "px-3"
            )

            return(
              <div key={i} className={switchClasses} onClick={() => {
                setValue(el.props.value)
                if (onChange !== undefined) onChange(el.props.value)
              }}>{el.props.children}</div>
            )
          }
        })}
      </div>
    </div>
  )
}

Toggle.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
  defaultValue: PropTypes.any,
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  colorActive: PropTypes.oneOf(Palletes),
  colorActiveContrast: PropTypes.oneOf(Contrast),
  bgColor: PropTypes.oneOf(Palletes),
  bgColorContrast: PropTypes.oneOf(Contrast),
  textColor: PropTypes.oneOf(Palletes),
  textColorContrast: PropTypes.oneOf(Contrast),
  textSize: PropTypes.oneOf(Object.keys(FontSize)),
  shadow: PropTypes.oneOf(Object.keys(ShadowSize)),
  rounded: PropTypes.oneOf(Object.keys(RoundedSize)),
  roundedPosition: PropTypes.oneOf(Object.keys(RoundedPosition)),
  disabled: PropTypes.bool,
  label: PropTypes.node,
  labelColor: PropTypes.oneOf(Palletes),
  labelColorContrast: PropTypes.oneOf(Contrast),
  labelSize: PropTypes.oneOf(Object.keys(FontSize)),
  border: PropTypes.bool,
  borderStyle: PropTypes.oneOf(Object.keys(BorderType)),
  borderSize: PropTypes.oneOf(Object.keys(BorderSize)),
  borderColor: PropTypes.oneOf(Palletes),
  borderColorContrast: PropTypes.oneOf(Contrast),
  borderPosition: PropTypes.oneOf(Object.keys(BorderPosition)),
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

Toggle.defaultProps = {
  defaultValue: "",
  disabled: false,
  color: "gray",
  colorContrast: 200,
  colorActive: "blue",
  colorActiveContrast: 600,
  bgColor: "gray",
  bgColorContrast: 200,
  textColor: "gray",
  textColorContrast: 700,
  textColorActive: "white",
  textColorActiveContrast: 700,
  textSize: "sm",
  rounded: "none",
  labelColor: "gray",
  labelColorContrast: 600,
  labelSize: "sm",
  shadow: "none",
  border: true,
  borderColor: "gray",
  borderColorContrast: 300,
  borderSize: "xs",
  borderStyle: "solid",
  px: 0.5,
  py: 0.5
}

export default Toggle;