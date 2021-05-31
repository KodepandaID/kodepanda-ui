import React, { useEffect, useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import imgFail from "./none.png";
import { Palletes, Color } from "../../utils/color";

const sizes = {
  "xs": "h-20",
  "sm": "h-40",
  "md": "h-64",
  "lg": "h-96",
  "full": "w-full"
}

const roundeds = {
  "none": "rounded-none",
  "sm": "rounded-sm",
  "md": "rounded-md",
  "lg": "rounded-lg",
  "xl": "rounded-xl",
  "full": "rounded-full"
}

const Img = ({ className, src, alt, size, objectFit, rounded, circle, disabled,
  fluid, borderWidth, borderColor, borderContrast,
  screenSM, screenMD, screenLG, screenXL, screen2XL,
  mx, my, mb, ml, mr, mt }) => {
  const baseClasses = cx(
    className !== undefined && className,
    !fluid && sizes[size],
    fluid && "w-full",
    !circle && `object-${objectFit}`,
    !circle && roundeds[rounded],
    circle && `${sizes[size].replace("h", "w")} rounded-full object-cover`,
    disabled && "opacity-50",
    borderWidth !== undefined && `border-${borderWidth} ${borderColor === undefined ? Color("border", "gray", "500") : Color("border", borderColor, borderContrast === undefined ? 500 : borderContrast)}`,
    mx !== undefined && `mx-${mx}`,
    my !== undefined && `my-${my}`,
    mb !== undefined && `mb-${mb}`,
    ml !== undefined && `ml-${ml}`,
    mr !== undefined && `mr-${mr}`,
    mt !== undefined && `mt-${mt}`,
    screenSM !== undefined && `sm:${sizes[screenSM]}`,
    screenMD !== undefined && `md:${sizes[screenMD]}`,
    screenLG !== undefined && `lg:${sizes[screenLG]}`,
    screenXL !== undefined && `xl:${sizes[screenXL]}`,
    screen2XL !== undefined && `2xl:${sizes[screen2XL]}`,
  )

  const [mounted, setMounted] = useState(false)
  const [srcLoad, setSrcLoad] = useState(src)

  useEffect(() => {
    let image = new Image();
    image.src = src;
    image.onload = () => {
      if (image.width === 0) setSrcLoad(imgFail)
      setMounted(true)
    }
    image.onerror = () => {
      setSrcLoad(imgFail)
      setMounted(true)
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
  size: PropTypes.oneOf(Object.keys(sizes)),
  fluid: PropTypes.bool,
  objectFit: PropTypes.oneOf(["none", "contain", "cover", "fill", "scale-down"]),
  rounded: PropTypes.oneOf(Object.keys(roundeds)),
  circle: PropTypes.bool,
  disabled: PropTypes.bool,
  borderWidth: PropTypes.number,
  borderColor: PropTypes.oneOf(Palletes),
  borderContrast: PropTypes.oneOf([50, 100, 200, 300, 400, 500, 600, 700, 800, 900]),
  mx: PropTypes.number,
  my: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
  screenSM: PropTypes.oneOf(Object.keys(sizes)),
  screenMD: PropTypes.oneOf(Object.keys(sizes)),
  screenLG: PropTypes.oneOf(Object.keys(sizes)),
  screenXL: PropTypes.oneOf(Object.keys(sizes)),
  screen2XL: PropTypes.oneOf(Object.keys(sizes)),
  failImg: PropTypes.string,
}

Img.defaultProps = {
  size: "sm",
  objectFit: "contain"
}

export default Img;