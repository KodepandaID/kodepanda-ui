import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import { Colors } from "@kodepanda-ui/types";

import { Color } from "@kodepanda-ui/utils";

const DropdownList = ({ children, className, color, colorContrast, colorHover, colorHoverContrast,
  textColor, textColorContrast, textColorHover, textColorHoverContrast, onClick }) => {
  const baseClasses =  cx(
    className !== undefined && className,
    "py-2",
    "px-2",
    "cursor-pointer",
    Color("bg", color, colorContrast),
    `hover:${Color("bg", colorHover, colorHoverContrast)}`,
    Color("text", textColor, textColorContrast),
    `hover:${Color("text", textColorHover, textColorHoverContrast)}`
  )

  return(
    <li className={baseClasses} onClick={() => {
      if (onClick !== undefined) onClick()
    }}><span className="inline-flex">{children}</span></li>
  )
}

DropdownList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  ...Colors,
  onClick: PropTypes.func
}

DropdownList.defaultProps = {
  parrentColorContrast: 500,
  color: "white",
  colorContrast: 200,
  colorHover: "blue",
  colorHoverContrast: 200,
  textColor: "gray",
  textColorContrast: 500,
  textColorHover: "blue",
  textColorHoverContrast: 700,
}

export {
  DropdownList
}