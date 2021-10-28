import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Icon, Index } from "@zenbu-ui/icon";
import { ButtonGroup } from "./button-group";
import { ButtonDropdown } from "./button-dropdown";

import { Margin, Padding } from "@zenbu-ui/classes";
import { Borders, Colors, Icons, Sizes, Spacings, Texts } from "@zenbu-ui/types";
import { 
  BorderSize,
  Color, Gradient, GradientPosition,
  FontSize, FontWeight,
  ShadowSize,
  RoundedSize, RoundedPosition
} from "@zenbu-ui/utils";

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
  mx, my, mt, mb, ml, mr,
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
    roundedPosition === undefined && RoundedSize[rounded],
    (rounded !== "none" && roundedPosition !== undefined) && `rounded-none ${RoundedPosition[roundedPosition]}-${rounded}`,
    border && `border-${borderStyle} ${BorderSize[borderSize]}`,
    border && Color("border", borderColor, borderColorContrast),
    shadow !== "none" && ShadowSize[shadow],
    shadowOffset !== undefined && `shadow-offset-${shadowOffset}`,
    "transition duration-200",
    Margin(mx, my, mb, ml, mr, mt)
  )

  const contentClasses = cx(
    FontSize[textSize],
    FontWeight[textWeight],
    Color("text", textColor, textColorContrast),
    `hover:${Color("text", textColorHover, textColorHoverContrast)}`,
    Padding(px, py, pb, pl, pr, pt)
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
    "transition duration-200",
    Padding(px, py, pb, pl, pr, pt)
  )

  const contentLabeledTextClasses = cx(
    "w-max",
    "h-full",
    "flex",
    "items-center",
    "justify-center",
    Color("bg", color, colorContrast),
    `hover:${Color("bg", colorHover, colorHoverContrast)}`,
    FontSize[textSize],
    FontWeight[textWeight],
    Color("text", textColor, textColorContrast),
    `hover:${Color("text", textColorHover, textColorHoverContrast)}`,
    Padding(px, py, pb, pl, pr, pt)
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
  icon: PropTypes.oneOf(Object.keys(Index)),
  ...Colors,
  size: PropTypes.oneOf(Object.keys(sizes)),
  ...Texts,
  ...Sizes,
  circle: PropTypes.bool,
  ghost: PropTypes.bool,
  fluid: PropTypes.bool,
  disabled: PropTypes.bool,
  labeled: PropTypes.bool,
  labeledPosition: PropTypes.oneOf(["left", "right"]),
  ...Borders,
  ...Icons,
  loading: PropTypes.bool,
  loadingPosition: PropTypes.oneOf(["left", "right"]),
  loadingText: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit"]),
  ...Spacings
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

Button.Group = ButtonGroup;
Button.Dropdown = ButtonDropdown;

export {
  Button,
  ButtonGroup,
  ButtonDropdown
}
