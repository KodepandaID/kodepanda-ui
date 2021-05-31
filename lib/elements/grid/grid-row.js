import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

const Row = ({ children, className, columns, gap }) => {
  const baseClasses = cx(
    columns === undefined && `flex`,
    columns !== undefined && `grid grid-cols-${columns}`,
    `gap-${gap}`,
    className !== undefined && className,
  )

  return(
    <div className={baseClasses}>{children}</div>
  )
}

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),
  className: PropTypes.string,
  columns: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]),
  gap: PropTypes.oneOf([0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 16, 20, 24, 28, 32, 36, 40])
}

Row.defaultProps = {
  gap: 4
}

export default Row;