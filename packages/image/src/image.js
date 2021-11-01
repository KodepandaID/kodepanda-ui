import React, { useEffect, useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import imgFail from "./none.png";

import { Margin, Responsive, ResponsiveHeight } from "@zenbu-ui/classes";
import { Borders, Colors, Sizes, Spacings } from "@zenbu-ui/types";
import { Color, BorderSize, RoundedSize } from "@zenbu-ui/utils";

const imgSizes = {
  "xs": "h-10",
  "sm": "h-40",
  "md": "h-64",
  "lg": "h-72",
  "xl": "h-96",
  "full": "w-full"
}

const Img = ({ className, src, alt, size, objectFit, rounded, circle, disabled, failImg,
  fluid, borderSize, borderColor, borderColorContrast,
  width, height,
  widthSM, widthMD, widthLG, widthXL, width2XL,
  heightSM, heightMD, heightLG, heightXL, height2XL,
  mx, my, mb, ml, mr, mt }) => {
  const baseClasses = cx(
    className !== undefined && className,
    !fluid ? Responsive(width, widthSM, widthMD, widthLG, widthXL, width2XL) : "w-full",
    ResponsiveHeight(height, heightSM, heightMD, heightLG, heightXL, height2XL),
    !circle && `object-${objectFit}`,
    !circle && RoundedSize[rounded],
    circle && `${imgSizes[size].replace("h", "w")} rounded-full object-cover`,
    disabled && "opacity-50",
    borderSize !== "none" && `${borderSize === undefined ? "border":BorderSize[borderSize]}`,
    borderColor !== undefined && `${Color("border", borderColor, borderColorContrast)}`,
    Margin(mx, my, mb, ml, mr, mt)
  )

  const [mounted, setMounted] = useState(false);
  const [srcLoad, setSrcLoad] = useState(src);

  useEffect(() => {
    if (!mounted) {
      let image = new Image();
      image.src = src;
      image.onload = () => {
        if (image.width === 0 && failImg === undefined) setSrcLoad(imgFail)
        else if (image.width === 0 && failImg !== undefined) setSrcLoad(failImg)
        setMounted(true)
      }
      image.onerror = () => {
        if (image.width === 0 && failImg !== undefined) setSrcLoad(failImg)
        else setSrcLoad(imgFail)
        setMounted(true)
      }
    }
  }, [])

  return(
    <>
      {mounted && (<img src={srcLoad} alt={alt} className={baseClasses} />)}
    </>
  )
}

Img.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(imgSizes)),
  fluid: PropTypes.bool,
  objectFit: PropTypes.oneOf(["none", "contain", "cover", "fill", "scale-down"]),
  circle: PropTypes.bool,
  disabled: PropTypes.bool,
  failImg: PropTypes.string,
  ...Sizes,
  ...Borders,
  ...Colors,
  ...Spacings
}

Img.defaultProps = {
  size: "sm",
  objectFit: "contain",
  borderSize: "none",
  borderColorContrast: 500
}

export {
  Img
}
