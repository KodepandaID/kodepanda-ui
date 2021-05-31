import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color } from "../../utils/color";

const sizes = {
  "xs": "h-20",
  "sm": "h-40",
  "md": "h-64",
  "lg": "h-96"
}

const roundeds = {
  "none": "rounded-none",
  "sm": "rounded-sm",
  "md": "rounded-md",
  "lg": "rounded-lg",
  "xl": "rounded-xl",
  "full": "rounded-full"
}

const Image = ({ className, src, alt, size, objectFit, rounded, circle, disabled,
  fluid, borderWidth, borderColor, borderContrast,
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
  )

  return(
    <img src={src} alt={alt} className={baseClasses} />
  )
}

Image.propTypes = {
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
}

Image.defaultProps = {
  size: "sm",
  objectFit: "contain"
}

export default Image;