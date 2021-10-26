import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import cx from "clsx";
import PropTypes from "prop-types";
import "../style.css";
import "tailwindcss/tailwind.css";

import { DropdownList } from "./dropdown-list";
import { Divider } from "@zenbu-ui/divider";

import { Margin } from "@zenbu-ui/classes";
import { Borders, Colors, Sizes, Spacings } from "@zenbu-ui/types";
import { 
  Color,
  ShadowSize
} from "@zenbu-ui/utils";

const Dropdown = ({ children, className, color, colorContrast, shadow, visible,
  width, height, search, searchText,
  textColor, textColorContrast, borderColor, borderColorContrast,
  mx, my, mt, mb, ml, mr }) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchList, setSearchList] = useState([]);

  const baseClasses = cx(
    className !== undefined && className,
    `w-${width}`,
    height !== undefined && `h-${height} overflow-y-scroll`,
    Margin(mx, my, mb, ml, mr, mt)
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

  const searchClasses = cx(
    "w-full",
    "bg-transparent",
    Color("text", textColor, textColorContrast),
    "border",
    Color("border", borderColor, borderColorContrast),
    "outline-none",
    "px-4",
    "py-1.5"
  )

  const searchData = (value) => {
    const object = _.filter(children, (o) => _.includes(_.get(o, "props.value") !== undefined ? _.get(o, "props.value").toLowerCase() : null, value.toLowerCase()));
    setSearchList(object)
  }

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
          {search && (
            <>
              <li className="py-2 px-2">
                <input className={searchClasses} placeholder={searchText} onChange={(e) => {
                  setSearchValue(e.target.value)
                  if (e.target.value === "") setSearchList([])
                  else searchData(e.target.value)
                }} />
              </li>
              <Divider color={borderColor} colorContrast={borderColorContrast} />
            </>
          )}
          {searchValue === "" ? (
            children.map((el, index) => {
              if (el !== undefined) {
                if (el.type.name === "List") return(<List key={index} {...el.props} parrentColor={color} />)
                else return(el)
              }
            })
          ) : (
            searchList.map((el, index) => {
              if (el !== undefined) {
                if (el.type.name === "List") return(<List key={index} {...el.props} parrentColor={color} onClick={() => {
                  if (el.props.onClick !== undefined) {
                    el.props.onClick()
                    setSearchValue("")
                    setSearchList([])
                  }
                }} />)
                else return(el)
              }
            })
          )}
        </ul>
      </div>
    </Transition>
  )
}

Dropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  search: PropTypes.bool,
  searchText: PropTypes.string,
  value: PropTypes.any,
  visible: PropTypes.bool,
  ...Sizes,
  ...Colors,
  ...Borders,
  ...Spacings
}

Dropdown.defaultProps = {
  search: false,
  searchText: "Search...",
  width: "full",
  visible: false,
  color: "white",
  colorContrast: 500,
  borderColor: "gray",
  borderColorContrast: 200,
  textColor: "gray",
  textColorContrast: 500
}

Dropdown.List = DropdownList;

export {
  Dropdown,
  DropdownList
}
