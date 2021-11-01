import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Padding, Responsive } from "@zenbu-ui/classes";
import { Sizes, Spacings } from "@zenbu-ui/types";

const GridColumn = ({ children, className, width,
  widthSM, widthMD, widthLG, widthXL, width2XL,
  px, py, pb, pl, pr, pt }) => {
  const baseClasses = cx(
    className !== undefined && className,
    Responsive(width, widthSM, widthMD, widthLG, widthXL, width2XL),
    Padding(px, py, pb, pl, pr, pt)
  )
  
  return(
    <div className={baseClasses}>{children}</div>
  )
}

GridColumn.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  ...Sizes,
  ...Spacings
}

GridColumn.defaultProps = {
  width: "auto"
}

export {
  GridColumn
}
