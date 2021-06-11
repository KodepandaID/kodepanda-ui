import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Color, Palletes } from "../../utils/color";

const List = ({ children, className, color, onClick }) => {
  const baseClasses =  cx(
    className !== undefined && className,
    "py-2",
    "pl-2",
    "pr-12",
    "cursor-pointer",
    `hover:${Color("bg", color, 200)}`,
    `hover:${Color("text", color, 500)}`,
  )

  return(
    <li className={baseClasses} onClick={onClick}><span className="inline-flex">{children}</span></li>
  )
}

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(Palletes),
  onClick: PropTypes.func
}

export default List;