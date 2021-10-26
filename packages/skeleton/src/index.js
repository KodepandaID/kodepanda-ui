import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import "tailwindcss/tailwind.css";

import { SkeletonStack } from "./skeleton-stack";
import { SkeletonCircle } from "./skeleton-circle";

import { Margin } from "@zenbu-ui/classes";
import { Borders, Colors, Sizes, Spacings } from "@zenbu-ui/types";
import { Color, RoundedSize } from "@zenbu-ui/utils";

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
  ...Sizes,
  ...Borders,
  ...Colors,
  ...Spacings
}

Skeleton.defaultProps = {
  width: "full",
  height: 2,
  rounded: "none",
  color: "gray",
  colorContrast: 200
}

Skeleton.Stack = SkeletonStack;
Skeleton.Circle = SkeletonCircle;

export{
  Skeleton,
  SkeletonStack,
  SkeletonCircle
}
