import React, { useState, useEffect, useRef } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { default as Icon } from "../icon/icon";

import { Palletes, Color, Contrast } from "../../utils/color";
import { BorderSize } from "../../utils/border";
import { RoundedSize } from "../../utils/rounded";
import { ShadowSize } from "../../utils/shadow";

const wrapperSize = {
  xs: "w-48",
  sm: "w-52",
  md: "w-60",
  lg: "w-72",
}

const sizes = {
  xs: "py-1 px-1.5 text-xs",
  sm: "py-1.5 px-2 text-xs",
  md: "py-2 px-2.5 text-sm",
  lg: "py-2.5 px-3.5 text-md",
  xl: "py-4 px-6 text-lg"
}

const Select = ({id, name, className, value, fluid, disabled, placeholder, size, rounded, onChange, options, shadow,
  bgColor, bgColorContrast, textColor, textColorContrast, borderColor, borderColorContrast,
  focus, focusBorderColor, focusBorderColorContrast,
  selectHoverColor, selectHoverColorContrast,
  mt, mb, ml, mr}) => {
  const node = useRef()

  const [dropdown, setDropdown] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectIndex, setSelectIndex] = useState(null);

  if (value !== undefined) {
    options.map((el, index) => {
      if (el.value === value) {
        setSelectIndex(index);
        setInputValue(el.text);
      }
    })
  }

  const listHandleClick = (index) => {
    setSelectIndex(index);
    setInputValue(options[index].text);
    setDropdown(false);
  }

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setDropdown(false);
  }

  useEffect(() => {
    if (dropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdown]);

  const wrapperClasses = cx(
    fluid && "w-full",
    !fluid && wrapperSize[size],
    "overflow-hidden"
  )

  const baseClasses = cx(
    className !== undefined && className,
    "w-full",
    shadow !== undefined && ShadowSize[shadow],
    bgColor !== undefined && Color("bg", bgColor, bgColorContrast === undefined ? 200 : bgColorContrast),
    RoundedSize[rounded],
    "relative",
    "inline-flex",
    "border",
    Color("border", borderColor, borderColorContrast === undefined ? 200 : borderColorContrast),
    sizes[size],
    Color("text", textColor, textColorContrast === undefined ? 500 : textColorContrast),
    "leading-tight",
    "focus:outline-none",
    focus && `focus-within:${Color("border", focusBorderColor, focusBorderColorContrast === undefined ? 500 : focusBorderColorContrast)}`,
    mt !== undefined && `mt-${mt}`,
    mb !== undefined && `mb-${mb}`,
    ml !== undefined && `ml-${ml}`,
    mr !== undefined && `mr-${mr}`,
  )

  const dropdownClasses = cx(
    wrapperSize[size],
    "bg-white",
    RoundedSize[rounded],
    "py-1",
    "mt-2",
    "border",
    Color("border", borderColor, borderColorContrast === undefined ? 200 : borderColorContrast),
    "z-10",
    "absolute",
    dropdown ? "block" : "hidden",
    "text-gray-500",
    "text-sm",
    shadow !== undefined && ShadowSize[shadow],
  )

  const itemClasses = cx(
    `hover:${Color("bg", selectHoverColor, selectHoverColorContrast)}`,
    `hover:${Color("text", selectHoverColor, 500)}`,
    "py-2 px-3",
    "cursor-pointer"
  )

  if (onChange !== undefined) {
    if (selectIndex === null) onChange(null)
    else onChange(options[selectIndex].value)
  }

  return(
    <div ref={node} className={wrapperClasses}>
      <button id={id} name={name} disabled={disabled} className={baseClasses} onClick={() => setDropdown(!dropdown)}>
        {inputValue === "" ? placeholder : inputValue}
        <span className="absolute top-2 right-2">
          <Icon icon="selector" color="gray" contrast={500} />
        </span>
      </button>
  
      <div className={dropdownClasses}>
        <ul>
          {options.map((el, index) => {
            return(<li key={el.key} className={itemClasses} onClick={() => listHandleClick(index)}>
              {el.text === inputValue && (
                <Icon className="inline-flex mr-2" icon="check" color={selectHoverColor} contrast={600} />
              )}
              <span className={el.text !== inputValue ? "ml-6 inline-flex":"font-semibold inline-flex"}>{el.text}</span>
            </li>)
          })}
        </ul>
      </div>
    </div>
  )
}

Select.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  className: PropTypes.string,
  options: PropTypes.array,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  size: PropTypes.oneOf(Object.keys(sizes)),
  rounded: PropTypes.oneOf(Object.keys(RoundedSize)),
  fluid: PropTypes.bool,
  bgColor: PropTypes.oneOf(Palletes),
  bgColorContrast: PropTypes.oneOf(Contrast),
  textColor: PropTypes.oneOf(Palletes),
  textColorContrast: PropTypes.oneOf(Contrast),
  placeholderColor: PropTypes.oneOf(Palletes),
  placeholderColorContrast: PropTypes.oneOf(Contrast),
  borderColor: PropTypes.oneOf(Palletes),
  borderColorContrast: PropTypes.oneOf(Contrast),
  focus: PropTypes.bool,
  focusBorderColor: PropTypes.oneOf(Palletes),
  focusBorderColorContrast: PropTypes.oneOf(Contrast),
  borderSize: PropTypes.oneOf(Object.keys(BorderSize)),
  selectHoverColor: PropTypes.oneOf(Palletes),
  selectHoverColorContrast: PropTypes.oneOf(Contrast),
  shadow: PropTypes.oneOf(Object.keys(ShadowSize)),
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  onChange: PropTypes.func,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
}

Select.defaultProps = {
  size: "md",
  rounded: "sm",
  textColor: "gray",
  textColorContrast: 500,
  borderColor: "gray",
  borderColorContrast: 200,
  focus: true,
  focusBorderColor: "blue",
  focusBorderColorContrast: 500,
  selectHoverColor: "blue",
  selectHoverColorContrast: 200,
  placeholderColor: "gray"
}

export default Select;
