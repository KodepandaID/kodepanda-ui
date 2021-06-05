import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color, Contrast } from "../../utils/color";
import { BorderSize, BorderType } from "../../utils/border";
import { RoundedSize, RoundedPosition } from "../../utils/rounded";
import { ShadowSize } from "../../utils/shadow";

const Box = ({ children, className, bgColor, bgColorContrast, border, borderSize, borderColor, borderColorContrast,
  textColor, textColorContrast, textAlign, rounded, roundedPosition, shadow,
  mx, my, mb, ml, mr, mt,
  px, py, pb, pl, pr, pt }) => {
  const baseClasses = cx(
    className !== undefined && className,
    Color("bg", bgColor, bgColorContrast === undefined ? 500 : bgColorContrast),
    Color("text", textColor, textColorContrast === undefined ? 600 : textColorContrast),
    border !== undefined && `${borderSize === undefined ? "border":BorderSize[borderSize]} ${BorderType[border]}`,
    borderColor !== undefined && `${Color("border", borderColor, borderColorContrast === undefined ? 500 : borderColorContrast)}`,
    shadow !== undefined && ShadowSize[shadow],
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
    rounded !== undefined && RoundedSize[rounded],
    roundedPosition !== undefined && RoundedPosition[roundedPosition],
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
  bgColorContrast: PropTypes.oneOf(Contrast),
  border: PropTypes.oneOf(Object.keys(BorderType)),
  borderSize: PropTypes.oneOf(Object.keys(BorderSize)),
  borderColor: PropTypes.oneOf(Palletes),
  borderColorContrast: PropTypes.oneOf(Contrast),
  textColor: PropTypes.oneOf(Palletes),
  textColorContrast: PropTypes.oneOf(Contrast),
  textAlign: PropTypes.oneOf(["left", "center", "right", "justify"]),
  rounded: PropTypes.oneOf(Object.keys(RoundedSize)),
  roundedPosition: PropTypes.oneOf(Object.keys(RoundedPosition)),
  shadow: PropTypes.oneOf(Object.keys(ShadowSize)),
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
  textColor: "black",
  rounded: "sm"
}

export default Box;