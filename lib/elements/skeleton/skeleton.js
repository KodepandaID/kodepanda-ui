import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import { Margin } from "../../classes";
import { border, color, size, spacing } from "../../types";

import Stack from "./stack";
import Circle from "./circle";

import { Color } from "../../utils/color";
import { RoundedSize } from "../../utils/rounded";

const Skeleton = ({ width, height, rounded,
  color, colorContrast,
  mx, my, mb, ml, mr, mt }) => {
  const baseClasses = cx(
    `w-${width}`,
    `h-${height}`,
    Color("bg", color, colorContrast),
    rounded !== "none" && `${RoundedSize[rounded]}`,
    "animate-pulse",
    Margin(mx, my, mb, ml, mr, mt)
  )

  return (
    <div className={baseClasses}></div>
  )
}

Skeleton.propTypes = {
  ...size,
  ...border,
  ...color,
  ...spacing
}

Skeleton.defaultProps = {
  width: "full",
  height: 2,
  rounded: "none",
  color: "gray",
  colorContrast: 200
}

Skeleton.Stack = Stack;
Skeleton.Circle = Circle;

export default Skeleton;