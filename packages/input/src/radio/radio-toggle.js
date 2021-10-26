import React, { useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Margin, Padding } from "@zenbu-ui/classes";
import { Borders, Colors, Spacings, Texts } from "@zenbu-ui/types";
import { 
  BorderSize, BorderSizeNum, BorderPosition,
  Color,
  FontSize,
  RoundedSize, RoundedPosition,
  ShadowSize
} from "@zenbu-ui/utils";

const RadioToggle = ({ children, name, defaultValue, disabled,
  color, colorContrast, colorActive, colorActiveContrast, bgColor, bgColorContrast,
  textColor, textColorContrast, textSize, textColorActive, textColorActiveContrast,
  label, labelColor, labelColorContrast, labelSize,
  border, borderColor, borderColorContrast, borderPosition, borderSize, borderStyle,
  shadow, rounded, roundedPosition, onChange,
  mx, my, mt, mb, ml, mr,
  px, py, pt, pb, pl, pr }) => {

  const [value, setValue] = useState(defaultValue);

  const wrapperClasses = cx(
    "w-max",
    "relative",
    "flex",
    "flex-col",
    "space-y-1",
    Margin(mx, my, mb, ml, mr, mt)
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
    Padding(px, py, pb, pl, pr, pt)
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

RadioToggle.propTypes = {
  name: PropTypes.string,
  children: PropTypes.node,
  defaultValue: PropTypes.any,
  disabled: PropTypes.bool,
  label: PropTypes.node,
  onChange: PropTypes.func,
  ...Borders,
  ...Colors,
  ...Texts,
  ...Spacings
}

RadioToggle.defaultProps = {
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

export {
  RadioToggle
}
