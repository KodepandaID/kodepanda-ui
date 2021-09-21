import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Contrast, Color, Gradient, GradientPosition } from "../../utils/color";
import { RoundedSize, RoundedPosition } from "../../utils/rounded";
import { ShadowSize } from "../../utils/shadow";
import { BorderSize, BorderType } from "../../utils/border";
import { Width, Height } from "../../utils/size";
import { FontSize, FontWeight } from "../../utils/font";

import Icon from "../icon/icon";
import Group from "./button-group";
import Dropdown from "./button-dropdown";

const sizes = {
  xs: 6,
  sm: 8,
  md: 10,
  lg: 14
}

const Button = ({ children, className, disabled, fluid, ghost, circle, width, height, size, labeled, labeledPosition, type,
  loading, loadingPosition, loadingText,
  color, colorContrast, colorHover, colorHoverContrast, textColor, textColorContrast, textColorHover, textColorHoverContrast,
  gradient, gradientColorFrom, gradientColorContrastFrom, gradientColorTo, gradientColorContrastTo,
  gradientColorHoverFrom, gradientColorHoverContrastFrom, gradientColorHoverTo, gradientColorHoverContrastTo,
  border, borderColor, borderColorContrast, borderSize, borderStyle,
  textSize, textWeight, icon,
  rounded, roundedPosition, shadow, shadowOffset,
  onClick,
  mt, mb, ml, mr,
  px, py, pt, pb, pl, pr }) => {
  if (fluid) width = "full";
  if (color === "white" && textColor === "white") {
    textColor = "black";
    textColorHover = "black";
  }
  if (ghost) {
    colorHover = color;
    colorHoverContrast = colorHoverContrast;
    textColor = color;
    textColorContrast = colorContrast;
    border = true;
    borderSize = "sm"
    borderColor = color;
    borderColorContrast = colorContrast;
    borderColor = color;
    borderColorContrast = colorContrast;
  }
  if (circle) {
    width = sizes[size];
    rounded = "full";
  }
  if (gradient !== undefined && gradientColorFrom === undefined) {
    gradientColorFrom = color;
    gradientColorContrastFrom = colorContrast;
  }

  const baseClasses = cx(
    className !== undefined && className,
    "flex",
    "items-center",
    "justify-center",
    `w-${width}`,
    height !== undefined ? `h-${height}` : `h-${sizes[size]}`,
    ghost && `bg-transparent hover:${Color("bg", color, colorContrast)}`,
    (!ghost && gradient === undefined && !labeled) && `${Color("bg", color, colorContrast)} hover:${Color("bg", colorHover, colorHoverContrast)}`,
    (!ghost && gradient !== undefined) && GradientPosition[gradient],
    gradientColorFrom !== undefined && Gradient("from", gradientColorFrom, gradientColorContrastFrom),
    gradientColorTo !== undefined && Gradient("to", gradientColorTo, gradientColorContrastTo),
    gradientColorHoverFrom !== undefined && `hover:${Gradient("from", gradientColorHoverFrom, gradientColorHoverContrastFrom)}`,
    gradientColorHoverTo !== undefined && `hover:${Gradient("to", gradientColorHoverTo, gradientColorHoverContrastTo)}`,
    disabled && "opacity-25 cursor-not-allowed",
    !disabled && "cursor-pointer",
    (rounded !== "none" && roundedPosition === undefined) && RoundedSize[rounded],
    (rounded !== "none" && roundedPosition !== undefined) && `${RoundedPosition[roundedPosition]}-${rounded}`,
    border && `${borderStyle} ${BorderSize[borderSize]}`,
    border && Color("border", borderColor, borderColorContrast),
    shadow !== "none" && ShadowSize[shadow],
    shadowOffset !== undefined && `shadow-offset-${shadowOffset}`,
    "transition duration-200",
    (mb !== undefined && mb >= 0) && `mb-${mb}`,
    (mb !== undefined && mb < 0) && `-mb${mb}`,
    (ml !== undefined && ml >= 0) && `ml-${ml}`,
    (ml !== undefined && ml < 0) && `-ml${ml}`,
    (mr !== undefined && mr >= 0) && `mr-${mr}`,
    (mr !== undefined && mr < 0) && `-mr${mr}`,
    (mt !== undefined && mt >= 0) && `mt-${mt}`,
    (mt !== undefined && mt < 0) && `-mt${mt}`,
  )

  const contentClasses = cx(
    FontSize[textSize],
    FontWeight[textWeight],
    Color("text", textColor, textColorContrast),
    `hover:${Color("text", textColorHover, textColorHoverContrast)}`,
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

  const labeledWrapperClasses = cx(
    "relative",
    "flex",
    "flex-row",
    "w-max",
    "h-full"
  )

  const contentLabeledClasses = cx(
    "w-max",
    "h-full",
    "flex",
    "items-center",
    "justify-center",
    Color("bg", colorHover, colorHoverContrast),
    Color("text", textColor, textColorContrast),
    `hover:${Color("text", textColorHover, textColorHoverContrast)}`,
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

  const contentLabeledTextClasses = cx(
    "w-max",
    "h-full",
    "flex",
    "items-center",
    "justify-center",
    Color("bg", color, colorContrast),
    FontSize[textSize],
    FontWeight[textWeight],
    Color("text", textColor, textColorContrast),
    `hover:${Color("text", textColorHover, textColorHoverContrast)}`,
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

  const loadingElement = (
    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  )

  return(
    <button className={baseClasses} type={type} disabled={disabled} onClick={() => {
      if (onClick !== undefined) onClick()
    }}>
      {(icon === undefined && !loading) && (<span className={contentClasses}>{children}</span>)}
      {(icon !== undefined && !labeled) && (<span className={contentClasses}><Icon size={textSize} icon={icon} color={textColor} colorContrast={textColorContrast} /></span>)}
      {(icon !== undefined && labeled) && (
        <div className={labeledWrapperClasses}>
          {labeledPosition === "left" && (
            <span className={contentLabeledClasses}>
              <Icon size={textSize} icon={icon} color={textColor} colorContrast={textColorContrast} />
            </span>
          )}
          <span className={contentLabeledTextClasses}>{children}</span>
          {labeledPosition === "right" && (
            <span className={contentLabeledClasses}>
              <Icon size={textSize} icon={icon} color={textColor} colorContrast={textColorContrast} />
            </span>
          )}
        </div>
      )}
      {loading && (
        <span className={contentClasses}>
          {loadingPosition === "left" && (
            <span className="flex flex-row items-center justify-center">
              <span>{loadingElement}</span>
              {loadingText !== undefined && (<span className="ml-3">{loadingText}</span>)}
            </span>
          )}
          {loadingPosition === "right" && (
            <span className="flex flex-row items-center justify-center">
              {loadingText !== undefined && (<span className="mr-3">{loadingText}</span>)}
              <span>{loadingElement}</span>
            </span>
          )}
        </span>
      )}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  colorHover: PropTypes.oneOf(Palletes),
  colorHoverContrast: PropTypes.oneOf(Contrast),
  gradient: PropTypes.oneOf(Object.keys(GradientPosition)),
  gradientColorFrom: PropTypes.oneOf(Palletes),
  gradientColorContrastFrom: PropTypes.oneOf(Contrast),
  gradientColorTo: PropTypes.oneOf(Palletes),
  gradientColorHoverContrastTo: PropTypes.oneOf(Contrast),
  gradientColorHoverFrom: PropTypes.oneOf(Palletes),
  gradientColorHoverContrastFrom: PropTypes.oneOf(Contrast),
  gradientColorHoverTo: PropTypes.oneOf(Palletes),
  gradientColorHoverContrastTo: PropTypes.oneOf(Contrast),
  textColor: PropTypes.oneOf(Palletes),
  textColorContrast: PropTypes.oneOf(Contrast),
  textColorHover: PropTypes.oneOf(Palletes),
  textColorHoverContrast: PropTypes.oneOf(Contrast),
  size: PropTypes.oneOf(Object.keys(sizes)),
  textSize: PropTypes.oneOf(Object.keys(FontSize)),
  textWeight: PropTypes.oneOf(Object.keys(FontWeight)),
  width: PropTypes.oneOf(Width),
  height: PropTypes.oneOf(Height),
  circle: PropTypes.bool,
  ghost: PropTypes.bool,
  fluid: PropTypes.bool,
  disabled: PropTypes.bool,
  labeled: PropTypes.bool,
  labeledPosition: PropTypes.oneOf(["left", "right"]),
  border: PropTypes.bool,
  borderColor: PropTypes.oneOf(Palletes),
  borderColorContrast: PropTypes.oneOf(Contrast),
  borderStyle: PropTypes.oneOf(Object.keys(BorderType)),
  borderSize: PropTypes.oneOf(Object.keys(BorderSize)),
  rounded: PropTypes.oneOf(Object.keys(RoundedSize)),
  roundedPosition: PropTypes.oneOf(Object.keys(RoundedPosition)),
  shadow: PropTypes.oneOf(Object.keys(ShadowSize)),
  shadowOffset: PropTypes.oneOf(Palletes),
  icon: PropTypes.oneOf(Object.keys(Icon.Index)),
  loading: PropTypes.bool,
  loadingPosition: PropTypes.oneOf(["left", "right"]),
  loadingText: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit"]),
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

Button.defaultProps = {
  size: "sm",
  color: "blue",
  colorContrast: 600,
  colorHover: "blue",
  colorHoverContrast: 700,
  textColor: "white",
  textColorContrast: 700,
  textColorHover: "white",
  textColorHoverContrast: 700,
  textSize: "sm",
  textWeight: "normal",
  border: false,
  borderStyle: "solid",
  borderSize: "xs",
  shadow: "none",
  rounded: "none",
  circle: false,
  ghost: false,
  fluid: false,
  disabled: false,
  labeled: false,
  loading: false,
  loadingPosition: "left",
  width: "max",
  type: "button",
  px: 4,
  py: 3
}

Button.Group = Group;
Button.Dropdown = Dropdown;

export default Button;