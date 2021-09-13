import React from "react";
import { Transition } from "@headlessui/react";
import cx from "clsx";
import PropTypes from "prop-types";

import { default as List } from "./dropdown-list";

import { Color, Palletes, Contrast } from "../../utils/color";
import { ShadowSize } from "../../utils/shadow";

const Dropdown = ({ children, className, color, colorContrast, shadow, visible,
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
    <Transition
      show={visible}
      appear={visible}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <div className={dropdownClasses}>
        <ul className={baseClasses}>
          {children.map((el, index) => {
            if (el.type.name === "List") return(<List key={index} {...el.props} parrentColor={color} />)
            else return(el)
          })}
        </ul>
      </div>
    </Transition>
  )
}

Dropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  visible: PropTypes.bool,
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
  visible: false,
  color: "white",
  colorContrast: 500,
  borderColor: "gray",
  borderColorContrast: 200,
  textColor: "gray",
  textColorContrast: 500
}

Dropdown.List = List;

export default Dropdown;