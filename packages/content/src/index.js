import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Margin, Padding, Responsive } from "@zenbu-ui/classes";
import { Sizes, Spacings, Texts } from "@zenbu-ui/types";

const Content = ({ id, children, className, textAlign,
  flex, flexWrap, items, justify, content, spaceX, spaceY,
  width, height,
  widthSM, widthMD, widthLG, widthXL, width2XL,
  mx, my, mb, ml, mr, mt,
  px, py, pb, pl, pr, pt }) => {
  const baseClasses = cx(
    className !== undefined && className,
    "relative",
    Responsive(width, widthSM, widthMD, widthLG, widthXL, width2XL),
    height !== undefined && `h-${height}`,
    `text-${textAlign}`,
    "flex",
    (flex !== undefined && flex !== "row") && `flex-${flex}`,
    flex === "row" && `flex-col md:flex-row`,
    items !== undefined && `items-${items}`,
    flexWrap !== undefined && `flex-${flexWrap}`,
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

Content.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  flex: PropTypes.oneOf(["row", "row-reverse", "col", "col-reverse"]),
  flexWrap: PropTypes.oneOf(["wrap", "wrap-reverse", "nowrap"]),
  items: PropTypes.oneOf(["start", "end", "center", "between", "arround", "evenly"]),
  justify: PropTypes.oneOf(["start", "end", "center", "between", "arround", "evenly"]),
  content: PropTypes.oneOf(["center", "start", "end", "between", "arround", "evenly"]),
  spaceX: PropTypes.number,
  spaceY: PropTypes.number,
  ...Texts,
  ...Sizes,
  ...Spacings
}

Content.defaultProps = {
  textAlign: "left"
}


export {
  Content
}
