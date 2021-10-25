import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

const BreadcrumbItem = ({ children }) => {
  const baseClasses = cx(
    "mr-1"
  )

  return(
    <div className={baseClasses}>{children}</div>
  )
}

BreadcrumbItem.propTypes = {
  children: PropTypes.node,
}

export {
  BreadcrumbItem
}
