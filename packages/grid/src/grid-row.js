import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

const GridRow = ({ children, className, columns, gap }) => {
  const baseClasses = cx(
    columns === undefined && `flex flex-col md:flex-row`,
    columns !== undefined && `grid grid-cols-${columns}`,
    `gap-${gap}`,
    className !== undefined && className,
  )

  return(
    <div className={baseClasses}>{children}</div>
  )
}

GridRow.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  columns: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  gap: PropTypes.oneOf([0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40])
}

GridRow.defaultProps = {
  gap: 4
}

export {
  GridRow
}
