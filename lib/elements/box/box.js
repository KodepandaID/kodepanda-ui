import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color, Contrast, Gradient, GradientPosition } from "../../utils/color";
import { BorderSize, BorderType } from "../../utils/border";
import { RoundedSize, RoundedPosition } from "../../utils/rounded";
import { ShadowSize } from "../../utils/shadow";
import { Rotate } from "../../utils/rotate";

import { default as BgImage } from "./image";

const Box = ({ children, className, color, colorContrast, border, borderSize, borderColor, borderColorContrast,
  bgGradient, bgGradientColorFrom, bgGradientColorContrastFrom, bgGradientColorTo, bgGradientColorContrastTo,
  textColor, textColorContrast, textAlign, rounded, roundedPosition, shadow, rotate,
  mx, my, mb, ml, mr, mt,
  px, py, pb, pl, pr, pt }) => {
  const baseClasses = cx(
    "relative",
    className !== undefined && className,
    bgGradient === undefined && Color("bg", color, colorContrast),
    bgGradient !== undefined && `${GradientPosition[bgGradient]}`,
    bgGradientColorFrom !== undefined && Gradient("from", bgGradientColorFrom, bgGradientColorContrastFrom),
    bgGradientColorTo !== undefined && Gradient("to", bgGradientColorTo, bgGradientColorContrastTo),
    border !== undefined && `${borderSize === undefined ? "border":BorderSize[borderSize]} ${BorderType[border]}`,
    borderColor !== undefined && `${Color("border", borderColor, borderColorContrast === undefined ? 500 : borderColorContrast)}`,
    shadow !== undefined && ShadowSize[shadow],
    (rounded !== undefined && roundedPosition === undefined) && RoundedSize[rounded],
    roundedPosition !== undefined && `${RoundedPosition[roundedPosition]}-${rounded}`,
    rotate !== undefined && `transform ${Rotate[rotate]}`,
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
    (px !== undefined && px >= 0) && `px-${px}`,
    (px !== undefined && px < 0) && `-px${px}`,
    (py !== undefined && py >= 0) && `py-${py}`,
    (py !== undefined && py < 0) && `-py${py}`,
    (pb !== undefined && pb >= 0) && `pb-${pb}`,
    (pb !== undefined && pb < 0) && `-pb${pb}`,
    (pl !== undefined && pl >= 0) && `pl-${pl}`,
    (pl !== undefined && pl < 0) && `-pl${pl}`,
    (pr !== undefined && pr >= 0) && `pr-${pr}`,
    (pr !== undefined && pr < 0) && `-pr${pr}`,
    (pt !== undefined && pt >= 0) && `pt-${pt}`,
    (pt !== undefined && pt < 0) && `-pt${pt}`
  )

  const wrapperClasses = cx(
    Color("text", textColor, textColorContrast === undefined ? 600 : textColorContrast),
    textAlign !== undefined && `text-${textAlign}`
  )

  return(
    <div className={baseClasses}>
      <div className={wrapperClasses}>
        {typeof children === "object" ? (
          children.map((el, i) => {
            if (typeof el === "string") return(<div key={i} className="relative">{el}</div>)
            else if (typeof el === "object") {
              if (el.type.name !== "BgImage") return(<div key={i} className="relative">{el}</div>)
              else return(el)
            }
          })
        ) : (children)}
      </div>
    </div>
  )
}

Box.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  bgGradient: PropTypes.oneOf(Object.keys(GradientPosition)),
  bgGradientColorFrom: PropTypes.oneOf(Palletes),
  bgGradientColorContrastFrom: PropTypes.oneOf(Contrast),
  bgGradientColorTo: PropTypes.oneOf(Palletes),
  bgGradientColorContrastTo: PropTypes.oneOf(Contrast),
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
  rotate: PropTypes.oneOf(Object.keys(Rotate)),
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
  color: "white",
  colorContrast: 500,
  textColor: "black",
  textColorContrast: 500,
  rounded: "sm",
  px: 5,
  py: 5
}

Box.BgImage = BgImage;

export default Box;