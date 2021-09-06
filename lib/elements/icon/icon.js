import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color, Contrast } from "../../utils/color";
import { Icons } from "../../utils/icon";

const sizes = {
  xs: "h-2",
  sm: "h-4",
  md: "h-10",
  lg: "h-20",
  xlg: "h-32"
}

const Icon = ({ height, icon, size, color, contrast, className,
  mt, mb, ml, mr }) => {
  const IconElem = Icons[icon]

  const baseClasses = cx(
    className !== undefined && className,
    height === undefined && sizes[size],
    height !== undefined && `h-${height}`,
    color !== undefined && Color("text", color, contrast),
    mt !== undefined && `mt-${mt}`,
    mb !== undefined && `mb-${mb}`,
    ml !== undefined && `ml-${ml}`,
    mr !== undefined && `mr-${mr}`,
  )

  return(
    <IconElem className={baseClasses} />
  )
}

Icon.propTypes = {
  height: PropTypes.number,
  icon: PropTypes.oneOf(Object.keys(Icons)),
  size: PropTypes.oneOf(Object.keys(sizes)),
  color: PropTypes.oneOf(Palletes),
  contrast: PropTypes.oneOf(Contrast),
  className: PropTypes.string,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
}

Icon.defaultProps = {
  size: "sm",
  contrast: 600
}

Icon.Solid = Icons;

export default Icon;
