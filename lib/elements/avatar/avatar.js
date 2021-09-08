import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color, Contrast } from "../../utils/color";
import { RoundedSize } from "../../utils/rounded";

import { default as Group } from "./avatar-group";
import { default as Icon } from "../icon/icon";

const sizes = {
  xs: "w-5 h-5",
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-24 h-24",
  xl: "w-32 h-32"
}

const Avatar = ({ children, className, src, icon, size, rounded, circle,
  color, colorContrast, iconColor, iconColorContrast,
  mt, mb, mr, ml
  }) => {
  const baseClasses = cx(
    className !== undefined && className,
    "flex",
    "items-center",
    "justify-center",
    typeof size !== "number" && sizes[size],
    typeof size === "number" && `w-${size} h-${size}`,
    rounded !== undefined && RoundedSize[rounded],
    (mt !== undefined && mt >= 0) && `mt-${mt}`,
    (mt !== undefined && mt < 0) && `-mt${mt}`,
    (mb !== undefined && mb >= 0) && `mb-${mb}`,
    (mb !== undefined && mb < 0) && `-mb${mb}`,
    (ml !== undefined && ml >= 0) && `ml-${ml}`,
    (ml !== undefined && ml < 0) && `-ml${ml}`,
    (mr !== undefined && mr >= 0) && `mr-${mr}`,
    (mr !== undefined && mr < 0) && `-mr${mr}`,
    src === undefined && Color("bg", color, colorContrast),
    circle && "rounded-full"
  )

  const iconSize = (s) => {
    if (s === "xs" || s === "sm") return "xs"
    else if (s === "md") return "sm"
    else if (s === "lg") return "md"
    else if (s === "xl") return "lg"
  }

  return(
    <div className={baseClasses}>
      {(src !== undefined && children === undefined) && (<img className="object-cover block w-full h-full" src={src} />)}
      {(src === undefined && children === undefined) && (<Icon icon={icon} size={typeof size !== "number" ? iconSize(size) : undefined} height={typeof size === "number" ? size : undefined} color={iconColor} colorContrast={iconColorContrast} />)}
      {children !== undefined && (children)}
    </div>
  )
}

Avatar.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  src: PropTypes.string,
  icon: PropTypes.oneOf(Object.keys(Icon.Index)),
  iconColor: PropTypes.oneOf(Palletes),
  iconColorContrast: PropTypes.oneOf(Contrast),
  size: PropTypes.oneOfType([
    PropTypes.oneOf(Object.keys(sizes)),
    PropTypes.number
  ]),
  rounded: PropTypes.oneOf(Object.keys(RoundedSize)),
  circle: PropTypes.bool,
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
}

Avatar.defaultProps = {
  size: "md",
  icon: "user",
  color: "gray",
  colorContrast: 300,
  iconColor: "white",
  iconColorContrast: 700,
  rounded: "none",
  circle: false,
}

Avatar.Group = Group;

export default Avatar;