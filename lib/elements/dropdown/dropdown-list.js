import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Color, Palletes, Contrast } from "../../utils/color";

const List = ({ children, className, color, colorContrast, hoverColor, hoverColorContrast,
  textColor, textColorContrast, hoverTextColor, hoverTextColorContrast, onClick }) => {
  const baseClasses =  cx(
    className !== undefined && className,
    "py-2",
    "px-2",
    "cursor-pointer",
    Color("bg", color, colorContrast),
    `hover:${Color("bg", hoverColor, hoverColorContrast)}`,
    Color("text", textColor, textColorContrast),
    `hover:${Color("text", hoverTextColor, hoverTextColorContrast)}`
  )

  return(
    <li className={baseClasses} onClick={() => {
      if (onClick !== undefined) onClick()
    }}><span className="inline-flex">{children}</span></li>
  )
}

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  hoverColor: PropTypes.oneOf(Palletes),
  hoverColorContrast: PropTypes.oneOf(Contrast),
  textColor: PropTypes.oneOf(Palletes),
  textColorContrast: PropTypes.oneOf(Contrast),
  hoverTextColor: PropTypes.oneOf(Palletes),
  hoverTextColorContrast: PropTypes.oneOf(Contrast),
  parrentColor: PropTypes.oneOf(Palletes),
  parrentColorContrast: PropTypes.oneOf(Contrast),
  onClick: PropTypes.func
}

List.defaultProps = {
  parrentColorContrast: 500,
  color: "white",
  colorContrast: 200,
  hoverColor: "blue",
  hoverColorContrast: 200,
  textColor: "gray",
  textColorContrast: 500,
  hoverTextColor: "blue",
  hoverTextColorContrast: 700,
}

export default List;