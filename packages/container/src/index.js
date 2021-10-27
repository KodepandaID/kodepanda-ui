import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import "@zenbu-ui/utils/tailwind.css";

import { Margin, Padding } from "@zenbu-ui/classes";
import { Spacings, Texts } from "@zenbu-ui/types";

const sizes = {
  none: "container",
  sm: "sm:container",
  md: "md:container",
  lg: "lg:container",
  xl: "xl:container",
  "2xl": "2xl:container",
}

const Container = ({ children, size, className, textAlign,
  mx, my, mb, ml, mr, mt,
  px, py, pb, pl, pr, pt }) => {
  const baseClasses = cx(
    sizes[size],
    className !== undefined && className,
    `text-${textAlign}`,
    Margin(mx, my, mb, ml, mr, mt),
    Padding(px, py, pb, pl, pr, pt)
  )

  return(
    <div className={baseClasses}>{children}</div>
  )
}

Container.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(Object.keys(sizes)),
  className: PropTypes.string,
  ...Texts,
  ...Spacings
}

Container.defaultProps = {
  size: "none",
  textAlign: "left",
}


export {
  Container
}
