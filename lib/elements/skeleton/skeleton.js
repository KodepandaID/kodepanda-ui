import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import Stack from "./stack";
import Circle from "./circle";

import { Palletes, Color, Contrast } from "../../utils/color";
import { Width, Height } from "../../utils/size";
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
    (mx !== undefined && mx >= 0) && `mx-${mx}`,
    (mx !== undefined && mx < 0) && `-mx${mx}`,
    (my !== undefined && my >= 0) && `my-${my}`,
    (my !== undefined && my < 0) && `-my${my}`,
    (mb !== undefined && mb >= 0) && `mb-${mb}`,
    (mb !== undefined && mb < 0) && `-mb${mb}`,
    (ml !== undefined && ml >= 0) && `ml-${ml}`,
    (ml !== undefined && ml < 0) && `-ml${ml}`,
    (mr !== undefined && mr >= 0) && `mr-${mr}`,
    (mr !== undefined && mr < 0) && `-mr${mr}`,
    (mt !== undefined && mt >= 0) && `mt-${mt}`,
    (mt !== undefined && mt < 0) && `-mt${mt}`,
  )

  return (
    <div className={baseClasses}></div>
  )
}

Skeleton.propTypes = {
  width: PropTypes.oneOf(Width),
  height: PropTypes.oneOf(Height),
  rounded: PropTypes.oneOf(Object.keys(RoundedSize)),
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  mx: PropTypes.number,
  my: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
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