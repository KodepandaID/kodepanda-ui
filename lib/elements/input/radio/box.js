import React, { useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color, Contrast } from "../../../utils/color";
import { BorderSize, BorderSizeNum, BorderType, BorderPosition } from "../../../utils/border";
import { RoundedSize, RoundedPosition } from "../../../utils/rounded";
import { FontSize } from "../../../utils/font";
import { ShadowSize } from "../../../utils/shadow";
import { Width } from "../../../utils/size";

const Box = ({ width, children, name, defaultValue, disabled,
  color, colorContrast, colorActive, colorActiveContrast,
  radioColor, radioColorContrast,
  label, labelColor, labelColorContrast, labelSize,
  border, borderColor, borderColorContrast, borderColorActive, borderColorActiveContrast, borderPosition, borderSize, borderStyle,
  shadow, rounded, roundedPosition, onChange,
  mt, mb, ml, mr,
  px, py, pt, pb, pl, pr }) => {
  const [value, setValue] = useState(defaultValue);

  const wrapperClasses = cx(
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
    FontSize[labelSize]
  )

  return(
    <div className={wrapperClasses}>
      {label !== undefined && (<label className={formLabelClasses}>{label}</label>)}
      <div className="w-full flex space-x-3">
        {children.map((el, i) => {
          const wrapperBoxClasses = cx(
            `w-${width}`,
            "relative",
            "flex",
            "flex-col",
            "justify-center",
            el.props.value === value ? Color("bg", colorActive, colorActiveContrast) : Color("bg", color, colorContrast),
            disabled && "opacity-25 cursor-not-allowed",
            !disabled && "cursor-pointer",
            (rounded !== "none" && roundedPosition === undefined) && RoundedSize[rounded],
            (rounded !== "none" && roundedPosition !== undefined) && `${RoundedPosition[roundedPosition]}-${rounded}`,
            (border && borderSize !== "none" && borderPosition === undefined) && `border-${borderStyle} ${BorderSize[borderSize]}`,
            (border && borderSize !== "none" && el.props.value !== value) && Color("border", borderColor, borderColorContrast),
            (border && borderSize !== "none" && el.props.value === value) && Color("border", borderColorActive, borderColorActiveContrast),
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

          const radioClasses = cx(
            "absolute",
            "right-2",
            "w-5",
            "h-5",
            "bg-white",
            "rounded-full",
            "flex",
            "items-center",
            "justify-center",
            "border",
            value === el.props.value ? Color("border", borderColorActive, borderColorActiveContrast) : Color("border", borderColor, borderColorContrast)
          )

          const radioActiveClasses = cx(
            "w-3",
            "h-3",
            "rounded-full",
            Color("bg", radioColor, radioColorContrast)
          )

          return(
            <div key={i} className={wrapperBoxClasses} onClick={() => {
              setValue(el.props.value)
              if (onChange !== undefined) onChange(el.props.value)
            }}>
              <div className="pr-5">{el.props.children}</div>
              <div className={radioClasses}>
                {value === el.props.value && (<div className={radioActiveClasses} />)}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

Box.propTypes = {
  width: PropTypes.oneOf(Width),
  name: PropTypes.string,
  children: PropTypes.node,
  defaultValue: PropTypes.any,
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  colorActive: PropTypes.oneOf(Palletes),
  colorActiveContrast: PropTypes.oneOf(Contrast),
  textColor: PropTypes.oneOf(Palletes),
  textColorContrast: PropTypes.oneOf(Contrast),
  textSize: PropTypes.oneOf(Object.keys(FontSize)),
  radioColor: PropTypes.oneOf(Palletes),
  radioColorContrast: PropTypes.oneOf(Contrast),
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
  borderColorActive: PropTypes.oneOf(Palletes),
  borderColorActiveContrast: PropTypes.oneOf(Contrast),
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

Box.defaultProps = {
  width: 96,
  disabled: false,
  color: "white",
  colorContrast: 300,
  colorActive: "gray",
  colorActiveContrast: 100,
  radioColor: "blue",
  radioColorContrast: 700,
  rounded: "none",
  labelColor: "gray",
  labelColorContrast: 600,
  labelSize: "sm",
  shadow: "none",
  border: true,
  borderColor: "gray",
  borderColorContrast: 300,
  borderColorActive: "blue",
  borderColorActiveContrast: 700,
  borderSize: "xs",
  borderStyle: "solid",
  px: 3,
  py: 4
}

export default Box;