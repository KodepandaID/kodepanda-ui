import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

const Item = ({ children }) => {
  const baseClasses = cx(
    "mr-1"
  )

  return(
    <div className={baseClasses}>{children}</div>
  )
}

Item.propTypes = {
  children: PropTypes.node,
}

export default Item;