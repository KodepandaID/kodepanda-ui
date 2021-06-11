import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { default as List } from "./dropdown-list";

import { Color, Palletes } from "../../utils/color";
import { ShadowSize } from "../../utils/shadow";

const Dropdown = ({ children, className, color, shadow,
  mt, mb, ml, mr }) => {
  const baseClasses = cx(
    className !== undefined && className,
    mt !== undefined && `mt-${mt}`,
    mb !== undefined && `mb-${mb}`,
    ml !== undefined && `ml-${ml}`,
    mr !== undefined && `mr-${mr}`,
  )

  const dropdownClasses = cx(
    "bg-white",
    "py-1",
    "mt-1",
    "border",
    Color("border", "gray", 200),
    "z-10",
    "absolute",
    "block",
    "text-gray-500",
    "text-sm",
    shadow !== undefined && ShadowSize[shadow],
  )

  return(
    <div className={dropdownClasses}>
      <ul className={baseClasses}>
        {children.map((el, index) => {
          if (el.type.name === "List") return(<List key={index} {...el.props} color={color} />)
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
  shadow: PropTypes.oneOf(Object.keys(ShadowSize)),
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
}

Dropdown.List = List;

export default Dropdown;