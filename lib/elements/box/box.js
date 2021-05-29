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

const Box = ({ children, className, bgColor, borderColor, textColor, contrast, rounded, roundedPosition,
  mx, my, mb, ml, mr, mt,
  px, py, pb, pl, pr, pt }) => {
    console.log(Color("bg", bgColor, contrast))
  const baseClasses = cx(
    className !== undefined && className,
    `${Color("bg", bgColor, contrast)}`,
    textColor !== undefined && `${Color("text", textColor, 600)}`,
    borderColor !== undefined && `${Color("border", borderColor, contrast)}`,
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
  borderColor: PropTypes.oneOf(Palletes),
  textColor: PropTypes.oneOf(Palletes),
  contrast: PropTypes.oneOf([50, 100, 200, 300, 400, 500, 600, 700, 800, 900]),
  rounded: PropTypes.oneOf(Object.keys(roundeds)),
  roundedPosition: PropTypes.oneOf(["bottom", "left", "right", "top"]),
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
  mb: 5,
  mt: 5,
  bgColor: "white",
  contrast: 500
}

export default Box;