import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { default as Icon } from "../icon/icon";
import { default as Group } from "./button-group";
import { Palletes, PalleteStatic } from "../../utils/color";

const sizes = {
  xs: "h-6 text-xs",
  sm: "h-8 text-xs",
  md: "h-10 text-sm",
  lg: "h-14 text-sm"
}

const paddings = {
  xs: "px-4",
  sm: "py-2 px-4",
  md: "py-2.5 px-6",
  lg: "py-3.5 px-16"
}

const roundeds = {
  none: "none",
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  full: "full"
}

const roundedPositions = {
  left: "l",
  right: "r"
}

const shadows = {
  "sm": "shadow-sm",
  "md": "shadow-md",
  "lg": "shadow-lg",
  "xl": "shadow-xl",
  "2xl": "shadow-2xl" 
}


const Button = ({ children, className, rounded, roundedPosition, border, color, circle, ghost, fluid, size, disabled, animate,
  labeled, labeledIcon, labeledColor, labeledPosition, shadow,
  loading, loadingPosition, loadingText,
  mt, mb, ml, mr }) => {
  if (color === undefined) color = "blue"

  const baseClasses = cx(
    `rounded-${roundedPosition === undefined ? roundeds[rounded]:`${roundedPositions[roundedPosition]}-${roundeds[rounded]}`}`,
    "text-center",
    border !== undefined && `border-${border}`,
    mt !== undefined && `mt-${mt}`,
    mb !== undefined && `mb-${mb}`,
    ml !== undefined && `ml-${ml}`,
    mr !== undefined && `mr-${mr}`,
    shadow !== undefined && shadows[shadow],
    !ghost && PalleteStatic[color].normal,
    !ghost && `hover:${PalleteStatic[color].darker}`,
    sizes[size],
    circle && "rounded-full h-14 w-14 flex items-center justify-center",
    fluid && "w-full",
    ghost && `border-2 ${PalleteStatic[color].ghost}`,
    ghost && `hover:${PalleteStatic[color].darker} hover:${PalleteStatic[color].textDarker === undefined ? "text-white":PalleteStatic[color].textDarker}`,
    !disabled && "cursor-pointer",
    disabled && "bg-opacity-50 border-opacity-50",
    disabled && "pointer-events-none",
    !labeled && paddings[size],
    labeled && "inline-flex items-center",
    loading && "inline-flex justify-center",
    (labeled && labeledPosition !== "right") && `${size==="xs"||size==="sm"?"pr-4":size==="md"?"py-2.5 pr-6":"py-3.5 pr-16"}`,
    (labeled && labeledPosition === "right") && `${size==="xs"||size==="sm"?"pr-4":size==="md"?"py-2.5 pl-6":"py-3.5 pl-16"}`,
    (animate !== undefined && animate !== "ping")&& `animate-${animate}`,
    className !== undefined && className,
  )

  const labeledClasses = cx(
    labeledPosition !== "right" && "rounded-l-sm mr-5",
    labeledPosition === "right" && "rounded-r-sm ml-5",
    PalleteStatic[color].darker,
    (size === "xs" || size === "sm") && "py-2.5",
    (size === "md" || size === "lg") && "py-3",
    (size === "xs" || size === "sm") && "px-4",
    size === "md" && "px-6",
    size === "lg" && "px-16"
  )

  const loadingElement = (
    <svg className={`animate-spin h-5 w-5 ${loadingPosition === undefined || loadingPosition === "left" ? "mr-3": loadingPosition === "center" ? "":"ml-3"}`} viewBox="0 0 24 24">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  )

  const buttonElement = (
    <button className={`${baseClasses}`}>
      {loading && (
        <>
          {loadingPosition !== "right" && loadingElement}
          {loadingText !== undefined && (<span>{loadingText}</span>)}
          {loadingText === undefined && children}
          {loadingPosition === "right" && loadingElement}
        </>
      )}
      {(!loading && !labeled) && (children)}
      {labeled && (
        <>
          {labeledPosition === "right" && children}
          <div className={labeledClasses}><Icon icon={labeledIcon} /></div>
          {labeledPosition !== "right" && children}
        </>
      )}
    </button>
  )

  if (animate === "ping") {
    return (
      <div className="relative">
        <div className="relative inline-flex">
          <div className="flex justify-around">
            {buttonElement}
            <span className={`flex absolute h-3 w-3 top-0 right-${mr > 0 ? mr:ml} -mt-1 -mr-1`}>
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-${labeledColor}-400 opacity-75`}></span>
              <span className={`relative inline-flex rounded-full h-3 w-3 bg-${labeledColor}-500`}></span>
            </span>
          </div>
        </div>
      </div>
    )
  } else return(buttonElement)
}

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),
  className: PropTypes.string,
  color: PropTypes.oneOf(Palletes),
  size: PropTypes.oneOf(Object.keys(sizes)),
  circle: PropTypes.bool,
  ghost: PropTypes.bool,
  fluid: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  loadingPosition: PropTypes.oneOf(["left", "right", "center"]),
  loadingText: PropTypes.string,
  labeled: PropTypes.bool,
  labeledIcon: PropTypes.oneOf(Object.keys(Icon.Solid)),
  labeledColor: PropTypes.oneOf(Palletes),
  labeledPosition: PropTypes.oneOf(["left", "right"]),
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
  animate: PropTypes.oneOf(["ping", "pulse", "bounce"]),
  border: PropTypes.oneOf(["dashed", "dotted"]),
  rounded: PropTypes.oneOf(Object.keys(roundeds)),
  roundedPosition: PropTypes.oneOf(Object.keys(roundedPositions)),
  shadow: PropTypes.oneOf(Object.keys(shadows)),
}

Button.defaultProps = {
  size: "md",
  color: "blue",
  labeledColor: "red",
  rounded: "sm"
}

Button.Group = Group;

export default Button;
