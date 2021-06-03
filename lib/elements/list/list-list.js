import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

const List = ({ children, ordered }) => {
  const baseClasses = cx(
    "pl-5",
    ordered && "ordered"
  )

  return(
    <ol className={baseClasses}>{children}</ol>
  )
}

List.propTypes = {
  children: PropTypes.node,
  ordered: PropTypes.bool,
}

List.defaultProps = {
  ordered: true
}

export default List;