import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Color, Palletes, Contrast } from "../../utils/color";

const List = ({ children, className, color, colorContrast,
  parrentColor, parrentColorContrast,
  bgColor, bgColorContrast, onClick }) => {
  const baseClasses =  cx(
    className !== undefined && className,
    "py-2",
    "pl-2",
    "pr-12",
    "cursor-pointer",
    bgColor !== undefined ? `hover:${Color("bg", bgColor, bgColorContrast)}` : null,
    bgColor === undefined ? `hover:${Color("bg", parrentColor, bgColorContrast)}` : null,
    color === undefined ? Color("text", parrentColor, parrentColorContrast) : null,
    color !== undefined ? Color("text", color, colorContrast) : null,
  )

  return(
    <li className={baseClasses} onClick={onClick}><span className="inline-flex">{children}</span></li>
  )
}

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  bgColor: PropTypes.oneOf(Palletes),
  bgColorContrast: PropTypes.oneOf(Contrast),
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  parrentColor: PropTypes.oneOf(Palletes),
  parrentColorContrast: PropTypes.oneOf(Contrast),
  onClick: PropTypes.func
}

List.defaultProps = {
  colorContrast: 500,
  parrentColorContrast: 500,
  bgColorContrast: 200
}

export default List;