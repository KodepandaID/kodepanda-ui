import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Padding } from "@kodepanda-ui/classes";
import { Sizes, Spacings } from "@kodepanda-ui/types";

const GridColumn = ({ children, className, width,
  widthSM, widthMD, widthLG, widthXL, width2XL,
  px, py, pb, pl, pr, pt }) => {
  const baseClasses = cx(
    className !== undefined && className,
    (widthSM === undefined && widthMD === undefined 
    && widthLG === undefined && widthXL === undefined
    && width2XL === undefined && width !== undefined) && `w-${width}`,
    widthSM !== undefined && `sm:w-${widthSM}`,
    widthMD !== undefined && `md:w-${widthMD}`,
    widthLG !== undefined && `lg:w-${widthLG}`,
    widthXL !== undefined && `xl:w-${widthXL}`,
    width2XL !== undefined && `2xl:w-${width2XL}`,
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
