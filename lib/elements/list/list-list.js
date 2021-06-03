import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

const List = ({ children }) => {
  const baseClasses = cx(
    "pl-5",
    "ordered"
  )

  return(
    <ol key="nested-ordered" className={baseClasses}>{children}</ol>
  )
}

List.propTypes = {
  children: PropTypes.node,
}

export default List;