import React, { useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import "./style.css";
import "tailwindcss/tailwind.css";

import { Icon, Index } from "@zenbu-ui/icon";

import { TextArea } from "./textarea";
import { Checkbox } from "./checkbox";
import { Radio } from "./radio";
import { Select } from "./select";
import { Password } from "./password";
import { Number } from "./number";
import { CardNumber } from "./card-number";
import { Pin } from "./pin";
import { Phone } from "./phone";
import { Datepicker } from "./datepicker";
import { Date } from "./date";

import { Margin, Padding } from "@zenbu-ui/classes";
import { Borders, Colors, Icons, Sizes, Spacings, Texts } from "@zenbu-ui/types"; 
import {
  BorderSize, BorderSizeNum, BorderPosition, RingSize,
  Color,
  FontSize, FontWeight,
  RoundedSize, RoundedPosition,
  ShadowSize
 } from "@zenbu-ui/utils";

const Input = ({ className, id, type, name, placeholder, label, labelPosition, width, rounded, roundedPosition, fluid,
  widthSM, widthMD, widthLG, widthXL, width2XL,
  color, colorContrast, textSize, textColor, textColorContrast,
  placeholderColor, placeholderColorContrast, labelColor, labelColorContrast, labelSize,
  border, borderSize, borderStyle, borderColor, borderColorContrast, borderPosition,
  focus, focusBorderSize, focusBorderColor, focusBorderColorContrast,
  value, defaultValue, disabled,
  icon, iconPosition, iconColor, iconColorContrast,
  iconAction, iconActionColor, iconActionColorContrast, iconActionColorHover, iconActionColorHoverContrast, iconActionClick,
  shadow, success, successMessage, error, errorMessage, onChange,
  mx, my, mt, mb, ml, mr,
  px, py, pt, pb, pl, pr }) => {
  const [focusActive, setFocusActive] = useState(false);

  if (focusBorderSize === undefined) focusBorderSize = borderSize;
  if (icon !== undefined && iconPosition === "left") pl = 9;
  if (icon !== undefined && iconPosition === "right") pr = 9;
  if (iconColor === undefined) {
    iconColor = textColor;
    iconColorContrast = textColorContrast;
  }

  if (success || error) {
    focus = false;
    border = true;
    borderSize = "sm";
    borderColor = success ? "green" : "red";
    borderColorContrast = 600;
    
    icon = success ? "check" : "exclamation";
    iconColor = success ? "green": "red";
    iconColorContrast = 600;
    iconPosition = "right";
  }

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
        <span className="flex flex-row items-center">
          {(icon !== undefined && iconPosition === "left") && (<Icon className="absolute left-2" icon={icon} size={textSize} color={iconColor} colorContrast={iconColorContrast} />)}
          <input
            id={id}
            type={type}
            name={name}
            placeholder={placeholder}
            className={baseClasses}
            value={value}
            defaultValue={defaultValue}
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
          {(icon !== undefined && iconPosition === "right" && iconAction === undefined) && (<Icon className="absolute right-2" icon={icon} size={textSize} color={iconColor} colorContrast={iconColorContrast} />)}
          {iconAction !== undefined && (
            <span className="absolute right-2" onClick={() => {
              if (iconActionClick !== undefined) iconActionClick()
            }}>
              <Icon icon={iconAction} size={textSize}
              color={iconActionColor} colorContrast={iconActionColorContrast} colorHover={iconActionColorHover} colorHoverContrast={iconActionColorHoverContrast} />
            </span>
          )}
        </span>
      </span>
      {success && (<p className="text-xs text-green-600">{successMessage}</p>)}
      {error && (<p className="text-xs text-red-600">{errorMessage}</p>)}
    </div>
  )
}

Input.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(Object.keys(Index)),
  iconAction: PropTypes.oneOf(Object.keys(Index)),
  id: PropTypes.string,
  label: PropTypes.node,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  ...Sizes,
  type: PropTypes.oneOf(["text", "password", "email"]),
  fluid: PropTypes.bool,
  ...Borders,
  disabled: PropTypes.bool,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  ...Icons,
  ...Colors,
  ...Texts,
  iconActionClick: PropTypes.func,
  success: PropTypes.bool,
  successMessage: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
  ...Spacings
}

Input.defaultProps = {
  type: "text",
  width: "max",
  color: "white",
  colorContrast: 200,
  labelColor: "gray",
  labelColorContrast: 600,
  labelSize: "sm",
  textSize: "sm",
  textColor: "gray",
  textColorContrast: 600,
  placeholderColor: "gray",
  placeholderColorContrast: 400,
  labelPosition: "outside",
  border: true,
  borderColor: "gray",
  borderColorContrast: 300,
  borderSize: "xs",
  borderStyle: "solid",
  focus: true,
  focusBorderColor: "blue",
  focusBorderColorContrast: 600,
  iconPosition: "left",
  iconColorContrast: 700,
  iconActionColor: "gray",
  iconActionColorContrast: 400,
  iconActionColorHover: "gray",
  iconActionColorHoverContrast: 700,
  rounded: "none",
  shadow: "none",
  py: 1.5,
  px: 4
}

Input.TextArea = TextArea;
Input.Checkbox = Checkbox;
Input.Radio = Radio;
Input.Select = Select;
Input.Password = Password;
Input.Number = Number;
Input.CardNumber = CardNumber;
Input.Pin = Pin;
Input.Phone = Phone;
Input.Datepicker = Datepicker;
Input.Date = Date;

export {
  Input,
  TextArea,
  Checkbox,
  Radio,
  Select,
  Password,
  Number,
  CardNumber,
  Pin,
  Phone,
  Datepicker,
  Date
}
