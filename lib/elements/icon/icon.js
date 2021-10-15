import React, { useEffect, useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import { Margin } from "../../classes";
import { color, icons, size, spacing } from "../../types";

import { Color } from "../../utils/color";
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
  mx, my, mt, mb, ml, mr }) => {
  const [mounted, setMounted] = useState(false);

  const IconElem = Index[icon]

  const baseClasses = cx(
    className !== undefined && className,
    height === undefined && sizes[size],
    height !== undefined && `h-${height}`,
    color !== undefined && Color("text", color, colorContrast),
    colorHover !== undefined && `hover:${Color("text", colorHover, colorHoverContrast)}`,
    Margin(mx, my, mb, ml, mr, mt)
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
  className: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizes)),
  ...size,
  ...color,
  ...icons,
  ...spacing
}

Icon.defaultProps = {
  size: "sm",
  colorContrast: 600,
  colorHoverContrast: 600,
}

Icon.Index = Index;

export default Icon;
