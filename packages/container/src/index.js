import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

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

const Container = ({ id, children, size, className, textAlign,
  flex, flexWrap, justify, content, spaceX, spaceY,
  mx, my, mb, ml, mr, mt,
  px, py, pb, pl, pr, pt }) => {
  const baseClasses = cx(
    className !== undefined && className,
    "relative",
    sizes[size],
    `text-${textAlign}`,
    "flex",
    flex !== undefined && `flex-${flex}`,
    flexWrap !== undefined ** `flex-${flexWrap}`,
    justify !== undefined && `justify-${justify}`,
    content !== undefined && `content-${content}`,
    spaceX !== undefined && `space-x-${spaceX}`,
    spaceY !== undefined && `space-y-${spaceY}`,
    Margin(mx, my, mb, ml, mr, mt),
    Padding(px, py, pb, pl, pr, pt)
  )

  return(
    <div id={id} className={baseClasses}>{children}</div>
  )
}

Container.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  size: PropTypes.oneOf(Object.keys(sizes)),
  className: PropTypes.string,
  flex: PropTypes.oneOf(["row", "row-reverse", "col", "col-reverse"]),
  flexWrap: PropTypes.oneOf(["wrap", "wrap-reverse", "nowrap"]),
  justify: PropTypes.oneOf(["start", "end", "center", "between", "arround", "evenly"]),
  content: PropTypes.oneOf(["center", "start", "end", "between", "arround", "evenly"]),
  spaceX: PropTypes.number,
  spaceY: PropTypes.number,
  ...Texts,
  ...Spacings
}

Container.defaultProps = {
  size: "none",
  textAlign: "left"
}


export {
  Container
}
