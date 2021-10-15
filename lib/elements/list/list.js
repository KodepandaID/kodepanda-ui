import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import { Margin } from "../../classes";
import { spacing } from "../../types";

import Item from "./list-item";
import Nested from "./list-list";

const List = ({ children, className, type,
  mx, my, mt, mb, ml, mr }) => {
  const baseClasses = cx(
    className !== undefined && className,
    "list",
    "list-inside",
    `list-${type}`,
    Margin(mx, my, mb, ml, mr, mt)
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
  ...spacing
}

List.defaultProps = {
  type: "none"
}

List.Item = Item;
List.List = Nested;

export default List;