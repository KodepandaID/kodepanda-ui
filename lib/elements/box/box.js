import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color } from "../../utils/color";

const roundeds = {
  none: "none",
  xs: "xs",
  sm: "sm",
  md: "md",
  lg: "lg",
  full: "full"
}

const shadows = {
  "sm": "shadow-sm",
  "md": "shadow-md",
  "lg": "shadow-lg",
  "xl": "shadow-xl",
  "2xl": "shadow-2xl" 
}

const Box = ({ children, className, bgColor, border, borderSize, borderColor, textColor, textAlign, contrast, rounded, roundedPosition, shadow,
  mx, my, mb, ml, mr, mt,
  px, py, pb, pl, pr, pt }) => {
  const baseClasses = cx(
    className !== undefined && className,
    `${Color("bg", bgColor, contrast)}`,
    textColor !== undefined && `${Color("text", textColor, 600)}`,
    border !== undefined && `border-${borderSize === undefined ? "2":borderSize} border-${border}`,
    borderColor !== undefined && `${Color("border", borderColor, contrast)}`,
    shadow !== undefined && shadows[shadow],
    mx !== undefined && `mx-${mx}`,
    my !== undefined && `my-${my}`,
    mb !== undefined && `mb-${mb}`,
    ml !== undefined && `ml-${ml}`,
    mr !== undefined && `mr-${mr}`,
    mt !== undefined && `mt-${mt}`,
    px !== undefined && `px-${px}`,
    py !== undefined && `py-${py}`,
    pb !== undefined && `pb-${pb}`,
    pl !== undefined && `pl-${pl}`,
    pr !== undefined && `pr-${pr}`,
    pt !== undefined && `pt-${pt}`,
    rounded !== undefined && `rounded-${roundedPosition === "top" ? "t-" : roundedPosition === "left" ? "l-" : roundedPosition === "right" ? "r-" : roundedPosition === "bottom" ? "b-" : ""}${rounded}`,
    textAlign !== undefined && `text-${textAlign}`,
  )

  return(
    <div className={baseClasses}>{children}</div>
  )
}

Box.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),
  className: PropTypes.string,
  bgColor: PropTypes.oneOf(Palletes),
  border: PropTypes.oneOf(["dashed", "dotted"]),
  borderSize: PropTypes.number,
  borderColor: PropTypes.oneOf(Palletes),
  textColor: PropTypes.oneOf(Palletes),
  textAlign: PropTypes.oneOf(["left", "center", "right", "justify"]),
  contrast: PropTypes.oneOf([50, 100, 200, 300, 400, 500, 600, 700, 800, 900]),
  rounded: PropTypes.oneOf(Object.keys(roundeds)),
  roundedPosition: PropTypes.oneOf(["bottom", "left", "right", "top"]),
  shadow: PropTypes.oneOf(Object.keys(shadows)),
  mx: PropTypes.number,
  my: PropTypes.number,
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

Box.defaultProps = {
  px: 5,
  py: 5,
  bgColor: "white",
  contrast: 500
}

export default Box;