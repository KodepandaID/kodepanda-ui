import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

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
    `text-${textAlign}`
  )

  return(
    <div className={baseClasses}>{children}</div>
  )
}

Container.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(Object.keys(sizes)),
  className: PropTypes.string,
  mx: PropTypes.number,
  my: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
  px: PropTypes.number,
  py: PropTypes.number,
  pt: PropTypes.number,
  pb: PropTypes.number,
  pr: PropTypes.number,
  pl: PropTypes.number,
  textAlign: PropTypes.oneOf(["left", "center", "right", "justify"])
}

Container.defaultProps = {
  size: "none",
  textAlign: "left",
}


export default Container;