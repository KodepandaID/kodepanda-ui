import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

const ListNested = ({ children, ordered }) => {
  const baseClasses = cx(
    "pl-5",
    ordered && "ordered"
  )

  return(
    <ol className={baseClasses}>{children}</ol>
  )
}

ListNested.propTypes = {
  children: PropTypes.node,
  ordered: PropTypes.bool,
}

ListNested.defaultProps = {
  ordered: false
}

export {
  ListNested
}
