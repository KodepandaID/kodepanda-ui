import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import "tailwindcss/tailwind.css";

import { BoxImage } from "./box-image";

import { Margin, Padding } from "@zenbu-ui/classes";
import { Borders, Colors, Sizes, Spacings, Texts } from "@zenbu-ui/types";
import { 
  BorderSize, BorderType,
  Color, Gradient, GradientPosition,
  RoundedSize, RoundedPosition,
  ShadowSize,
  Rotate
} from "@zenbu-ui/utils";

const Box = ({ children, className, color, colorContrast, border, borderStyle, borderSize, borderColor, borderColorContrast,
  widthSM, widthMD, widthLG, widthXL, width2XL,
  bgGradient, bgGradientColorFrom, bgGradientColorContrastFrom, bgGradientColorTo, bgGradientColorContrastTo,
  textColor, textColorContrast, textAlign, rounded, roundedPosition, shadow, rotate,
  width, height,
  mx, my, mb, ml, mr, mt,
  px, py, pb, pl, pr, pt }) => {
  const baseClasses = cx(
    (widthSM === undefined && widthMD === undefined 
    && widthLG === undefined && widthXL === undefined
    && width2XL === undefined && width !== undefined) && `w-${width}`,
    widthSM !== undefined && `sm:w-${widthSM}`,
    widthMD !== undefined && `md:w-${widthMD}`,
    widthLG !== undefined && `lg:w-${widthLG}`,
    widthXL !== undefined && `xl:w-${widthXL}`,
    width2XL !== undefined && `2xl:w-${width2XL}`,
    height !== undefined && `h-${height}`,
    "relative",
    className !== undefined && className,
    bgGradient === undefined && Color("bg", color, colorContrast),
    bgGradient !== undefined && `${GradientPosition[bgGradient]}`,
    bgGradientColorFrom !== undefined && Gradient("from", bgGradientColorFrom, bgGradientColorContrastFrom),
    bgGradientColorTo !== undefined && Gradient("to", bgGradientColorTo, bgGradientColorContrastTo),
    border && `${borderSize === undefined ? "border":BorderSize[borderSize]} ${BorderType[borderStyle]}`,
    border && borderColor !== undefined && `${Color("border", borderColor, borderColorContrast === undefined ? 500 : borderColorContrast)}`,
    shadow !== undefined && ShadowSize[shadow],
    (rounded !== undefined && roundedPosition === undefined) && RoundedSize[rounded],
    roundedPosition !== undefined && `${RoundedPosition[roundedPosition]}-${rounded}`,
    rotate !== undefined && `transform ${Rotate[rotate]}`,
    Margin(mx, my, mb, ml, mr, mt),
    Padding(px, py, pb, pl, pr, pt)
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
              if (el.type.name !== "BoxImage") return(<div key={i} className="relative">{el}</div>)
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
  ...Sizes,
  ...Colors,
  ...Borders,
  ...Texts,
  ...Spacings
}

Box.defaultProps = {
  color: "white",
  colorContrast: 500,
  textColor: "black",
  textColorContrast: 500,
  rounded: "sm",
  width: "full",
  px: 5,
  py: 5
}

Box.BgImage = BoxImage;

export {
  Box,
  BoxImage
}
