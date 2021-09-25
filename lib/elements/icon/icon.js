import React, { useEffect, useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color, Contrast } from "../../utils/color";
import { Icons } from "./icon-outline";
import { IconsSolid } from "./icon-solid";

const sizes = {
  xs: "h-2",
  sm: "h-4",
  md: "h-10",
  lg: "h-20",
  xlg: "h-32"
}

const Index = {...Icons, ...IconsSolid}

const Icon = ({ height, icon, size, color, colorContrast, colorHover, colorHoverContrast, className,
  mt, mb, ml, mr }) => {
  const [mounted, setMounted] = useState(false);

  const IconElem = Index[icon]

  const baseClasses = cx(
    className !== undefined && className,
    height === undefined && sizes[size],
    height !== undefined && `h-${height}`,
    color !== undefined && Color("text", color, colorContrast),
    colorHover !== undefined && `hover:${Color("text", colorHover, colorHoverContrast)}`,
    (mt !== undefined && mt >= 0) && `mt-${mt}`,
    (mt !== undefined && mt < 0) && `-mt${mt}`,
    (mb !== undefined && mb >= 0) && `mb-${mb}`,
    (mb !== undefined && mb < 0) && `-mb${mb}`,
    (ml !== undefined && ml >= 0) && `ml-${ml}`,
    (ml !== undefined && ml < 0) && `-ml${ml}`,
    (mr !== undefined && mr >= 0) && `mr-${mr}`,
    (mr !== undefined && mr < 0) && `-mr${mr}`,
  )

  useEffect(() => {
    if (!mounted) {
      if (IconElem === undefined) throw new Error("Icon not found")
      else setMounted(true)
    }
  }, [mounted])

  return(
    mounted && (
      <IconElem className={baseClasses} />
    )
  )
}

Icon.propTypes = {
  height: PropTypes.number,
  icon: PropTypes.oneOf(Object.keys(Index)),
  size: PropTypes.oneOf(Object.keys(sizes)),
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  colorHover: PropTypes.oneOf(Palletes),
  colorHoverContrast: PropTypes.oneOf(Contrast),
  className: PropTypes.string,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
}

Icon.defaultProps = {
  size: "sm",
  colorContrast: 600,
  colorHoverContrast: 600,
}

Icon.Index = Index;

export default Icon;
