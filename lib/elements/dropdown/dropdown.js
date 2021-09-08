import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { default as List } from "./dropdown-list";

import { Color, Palletes, Contrast } from "../../utils/color";
import { ShadowSize } from "../../utils/shadow";

const Dropdown = ({ children, className, color, colorContrast, shadow,
  textColor, textColorContrast, borderColor, borderColorContrast,
  mt, mb, ml, mr }) => {
  const baseClasses = cx(
    className !== undefined && className,
    (mb !== undefined && mb >= 0) && `mb-${mb}`,
    (mb !== undefined && mb < 0) && `-mb${mb}`,
    (ml !== undefined && ml >= 0) && `ml-${ml}`,
    (ml !== undefined && ml < 0) && `-ml${ml}`,
    (mr !== undefined && mr >= 0) && `mr-${mr}`,
    (mr !== undefined && mr < 0) && `-mr${mr}`,
    (mt !== undefined && mt >= 0) && `mt-${mt}`,
    (mt !== undefined && mt < 0) && `-mt${mt}`,
  )

  const dropdownClasses = cx(
    Color("bg", color, colorContrast),
    "py-1",
    "mt-1",
    "border",
    Color("border", borderColor, borderColorContrast),
    "z-10",
    "absolute",
    "block",
    Color("text", textColor, textColorContrast),
    "text-sm",
    shadow !== undefined && ShadowSize[shadow],
  )

  return(
    <div className={dropdownClasses}>
      <ul className={baseClasses}>
        {children.map((el, index) => {
          if (el.type.name === "List") return(<List key={index} {...el.props} parrentColor={color} />)
          else return(el)
        })}
      </ul>
    </div>
  )
}

Dropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  textColor: PropTypes.oneOf(Palletes),
  textColorContrast: PropTypes.oneOf(Contrast),
  borderColor: PropTypes.oneOf(Palletes),
  borderColorContrast: PropTypes.oneOf(Contrast),
  shadow: PropTypes.oneOf(Object.keys(ShadowSize)),
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
}

Dropdown.defaultProps = {
  color: "white",
  colorContrast: 500,
  borderColor: "gray",
  borderColorContrast: 200,
  textColor: "gray",
  textColorContrast: 500
}

Dropdown.List = List;

export default Dropdown;