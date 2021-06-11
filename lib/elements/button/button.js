import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { default as Icon } from "../icon/icon";
import { default as Group } from "./button-group";
import { default as Dropdown } from "./button-dropdown";

import { Palletes, PalleteStatic } from "../../utils/color";
import { RoundedSize, RoundedPosition } from "../../utils/rounded";
import { ShadowSize } from "../../utils/shadow";
import { BorderType } from "../../utils/border";

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

const Button = ({ children, className, type, rounded, roundedPosition, border, color, circle, ghost, fluid, size, disabled, animate, onClick,
  labeled, labeledIcon, labeledColor, labeledPosition, shadow,
  loading, loadingPosition, loadingText,
  mt, mb, ml, mr }) => {
  if (color === undefined) color = "blue"

  const baseClasses = cx(
    className !== undefined && className,
    (rounded !== undefined && roundedPosition === undefined) && RoundedSize[rounded],
    roundedPosition !== undefined && `${RoundedPosition[roundedPosition]}-${rounded}`,
    "text-center",
    border !== undefined && `border-${border}`,
    mt !== undefined && `mt-${mt}`,
    mb !== undefined && `mb-${mb}`,
    ml !== undefined && `ml-${ml}`,
    mr !== undefined && `mr-${mr}`,
    shadow !== undefined && ShadowSize[shadow],
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
    (labeled && labeledPosition === "right") && `${size==="xs"||size==="sm"?"pl-4":size==="md"?"py-2.5 pl-6":"py-3.5 pl-16"}`,
    (animate !== undefined && animate !== "ping")&& `animate-${animate}`,
  )

  const labeledClasses = cx(
    labeledPosition !== "right" && `rounded-l-${rounded} mr-5`,
    labeledPosition === "right" && `rounded-r-${rounded} ml-5`,
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
    <button className={`${baseClasses}`} type={type} onClick={onClick}>
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
  children: PropTypes.node,
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
  animate: PropTypes.oneOf(["ping", "pulse", "bounce"]),
  border: PropTypes.oneOf(Object.keys(BorderType)),
  rounded: PropTypes.oneOf(Object.keys(RoundedSize)),
  roundedPosition: PropTypes.oneOf(Object.keys(RoundedPosition)),
  shadow: PropTypes.oneOf(Object.keys(ShadowSize)),
  onClick: PropTypes.func,
  type: PropTypes.string,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
}

Button.defaultProps = {
  size: "md",
  color: "blue",
  labeledColor: "red",
  rounded: "sm",
  type: "button"
}

Button.Group = Group;
Button.Dropdown = Dropdown;

export default Button;
