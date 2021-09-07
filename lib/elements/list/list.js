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
    (mb !== undefined && mb >= 0) && `mb-${mb}`,
    (mb !== undefined && mb < 0) && `-mb${mb}`,
    (ml !== undefined && ml >= 0) && `ml-${ml}`,
    (ml !== undefined && ml < 0) && `-ml${ml}`,
    (mr !== undefined && mr >= 0) && `mr-${mr}`,
    (mr !== undefined && mr < 0) && `-mr${mr}`,
    (mt !== undefined && mt >= 0) && `mt-${mt}`,
    (mt !== undefined && mt < 0) && `-mt${mt}`,
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