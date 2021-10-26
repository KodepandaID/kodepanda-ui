import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import "tailwindcss/tailwind.css";

import { AvatarGroup } from "./avatar-group";
import { Icon, Index } from "@zenbu-ui/icon";

import { Margin } from "@zenbu-ui/classes";
import { Colors, Icons, Spacings } from "@zenbu-ui/types";
import { Color, RoundedSize } from "@zenbu-ui/utils";

const sizes = {
  xs: "w-5 h-5",
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-24 h-24",
  xl: "w-32 h-32"
}

const Avatar = ({ children, className, src, icon, size, rounded, circle,
  color, colorContrast, iconColor, iconColorContrast,
  mx, my, mb, ml, mr, mt }) => {
  const baseClasses = cx(
    className !== undefined && className,
    "flex",
    "items-center",
    "justify-center",
    typeof size !== "number" && sizes[size],
    typeof size === "number" && `w-${size} h-${size}`,
    rounded !== undefined && RoundedSize[rounded],
    src === undefined && Color("bg", color, colorContrast),
    circle && "rounded-full",
    Margin(mx, my, mb, ml, mr, mt)
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
  icon: PropTypes.oneOf(Object.keys(Index)),
  ...Icons,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(Object.keys(sizes)),
    PropTypes.number
  ]),
  rounded: PropTypes.oneOf(Object.keys(RoundedSize)),
  circle: PropTypes.bool,
  ...Colors,
  ...Spacings,
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

Avatar.Group = AvatarGroup;

export {
  Avatar,
  AvatarGroup
};
