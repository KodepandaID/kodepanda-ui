import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { default as Item } from "./list-item";
import { default as Nested } from "./list-list";

const List = ({ children, className, type,
  mt, mb, ml, mr }) => {
  const baseClasses = cx(
    className !== undefined && className,
    "list",
    "list-inside",
    `list-${type}`,
    mt !== undefined && `mt-${mt}`,
    mb !== undefined && `mb-${mb}`,
    ml !== undefined && `ml-${ml}`,
    mr !== undefined && `mr-${mr}`,
  )

  return(
    <ol className={baseClasses}>
      {children}
    </ol>
  )
}

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(["none", "disc", "decimal", "square", "roman"]),
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
}

List.defaultProps = {
  type: "none"
}

List.Item = Item;
List.List = Nested;

export default List;