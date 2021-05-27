import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { default as Icon } from "../icon/icon";
import { default as Group } from "./button-group";

const colors = {
  white: "bg-white text-black",
  black: "bg-black text-white",
  gray: "bg-gray-400 text-white",
  red: "bg-red-600 text-white",
  yellow: "bg-yellow-300 text-white",
  green: "bg-green-400 text-white",
  blue: "bg-blue-600 text-white",
  indigo: "bg-indigo-600 text-white",
  purple: "bg-purple-500 text-white",
  pink: "bg-pink-400 text-white",
  facebook: "bg-facebook text-white",
  twitter: "bg-twitter text-white",
  whatsapp: "bg-whatsapp text-white",
}

const colorHovers = {
  white: "bg-gray-200",
  black: "bg-black",
  gray: "bg-gray-500",
  red: "bg-red-700",
  yellow: "bg-yellow-400",
  green: "bg-green-500",
  blue: "bg-blue-700",
  indigo: "bg-indigo-700",
  purple: "bg-purple-600",
  pink: "bg-pink-500",
  facebook: "bg-facebook-darker",
  twitter: "bg-twitter-darker",
  whatsapp: "bg-whatsapp-darker",
}

const textColors = {
  white: "text-black",
  black: "text-white",
  gray: "text-gray-500",
  red: "text-red-700",
  yellow: "text-yellow-400",
  green: "text-green-500",
  blue: "text-blue-700",
  indigo: "text-indigo-700",
  purple: "text-purple-600",
  pink: "text-pink-500",
  facebook: "text-facebook-darker",
  twitter: "text-twitter-darker",
  whatsapp: "text-whatsapp-darker",
}

const colorGhosts = {
  white: "border-2 border-gray-200 text-black",
  black: "border-2 border-black text-black",
  gray: "border-2 border-gray-400 text-gray-400",
  red: "border-2 border-red-600 text-red-600",
  yellow: "border-2 border-yellow-300 text-yellow-300",
  green: "border-2 border-green-400 text-green-400",
  blue: "border-2 border-blue-600 text-blue-600",
  indigo: "border-2 border-indigo-600 text-indigo-600",
  purple: "border-2 border-purple-500 text-purple-500",
  pink: "border-2 border-pink-400 text-pink-400"
}

const colorGhostHovers = {
  white: "hover:bg-gray-200 hover:text-black",
  black: "hover:bg-black hover:text-white",
  gray: "hover:bg-gray-400 hover:text-white",
  red: "hover:bg-red-600 hover:text-white",
  yellow: "hover:bg-yellow-300 hover:text-white",
  green: "hover:bg-green-400 hover:text-white",
  blue: "hover:bg-blue-600 hover:text-white",
  indigo: "hover:bg-indigo-600 hover:text-white",
  purple: "hover:bg-purple-500 hover:text-white",
  pink: "hover:bg-pink-400 hover:text-white"
}

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

const Button = ({ children, className, rounded, roundedPosition, border, textColor, color, circle, ghost, fluid, size, disabled, animate,
  labeled, labeledIcon, labeledColor, labeledPosition,
  loading, loadingPosition, loadingText,
  mt, mb, ml, mr }) => {
  if (color === undefined) color = "blue"

  const baseClasses = cx(
    `rounded-${roundedPosition === undefined ? roundeds[rounded]:`${roundedPositions[roundedPosition]}-${roundeds[rounded]}`}`,
    "text-center",
    color !== "white" && textColors[textColor],
    color === "white" && "text-black",
    border !== undefined && `border-${border}`,
    mt !== undefined && `mt-${mt}`,
    mb !== undefined && `mb-${mb}`,
    ml !== undefined && `ml-${ml}`,
    mr !== undefined && `mr-${mr}`,
    !ghost && colors[color],
    !ghost && `hover:${colorHovers[color]}`,
    sizes[size],
    circle && "rounded-full h-14 w-14 flex items-center justify-center",
    fluid && "w-full",
    ghost && colorGhosts[color],
    ghost && colorGhostHovers[color],
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
    colorHovers[color],
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
  textColor: PropTypes.oneOf(Object.keys(textColors)),
  color: PropTypes.oneOf(Object.keys(colors)),
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
  labeledColor: PropTypes.oneOf(["white","black","red","blue","yellow","green","indigo","purple","pink"]),
  labeledPosition: PropTypes.oneOf(["left", "right"]),
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
  animate: PropTypes.oneOf(["ping", "pulse", "bounce"]),
  border: PropTypes.oneOf(["dashed", "dotted"]),
  rounded: PropTypes.oneOf(Object.keys(roundeds)),
  roundedPosition: PropTypes.oneOf(Object.keys(roundedPositions))
}

Button.defaultProps = {
  size: "md",
  textColor: "white",
  color: "blue",
  labeledColor: "red",
  rounded: "sm"
}

Button.Group = Group;

export default Button;
