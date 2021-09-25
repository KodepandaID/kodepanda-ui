import React, { useRef, useState, useEffect } from "react";
import cx from "clsx";
import _ from "lodash";
import PropTypes from "prop-types";

import Icon from "../icon/icon";

import { Palletes, Color, Contrast } from "../../utils/color";
import { BorderSize, BorderSizeNum, BorderType, BorderPosition, RingSize } from "../../utils/border";
import { RoundedSize, RoundedPosition } from "../../utils/rounded";
import { Width } from "../../utils/size";
import { ShadowSize } from "../../utils/shadow";
import { FontSize, FontWeight } from "../../utils/font";

import { Find } from "./utils";

const Select = ({ id, name, className, width, defaultValue, fluid, disabled, placeholder, rounded, roundedPosition, onChange, options, shadow, search,
  color, colorContrast, textSize, textColor, textColorContrast,
  placeholderColor, placeholderColorContrast,
  label, labelPosition, labelColor, labelColorContrast, labelSize,
  border, borderSize, borderStyle, borderColor, borderColorContrast, borderPosition,
  focus, focusBorderSize, focusBorderColor, focusBorderColorContrast,
  icon, iconColor, iconColorContrast,
  selectHoverColor, selectHoverColorContrast,
  mt, mb, ml, mr,
  px, py, pt, pb, pl, pr }) => {
  const node = useRef();

  const [focusActive, setFocusActive] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [inputValue, setInputValue] = useState(defaultValue);
  const [selectIndex, setSelectIndex] = useState(null);
  const [searchOptions, setSearchOptions] = useState(options);

  if (focusBorderSize === undefined) focusBorderSize = borderSize;
  if (icon !== undefined) pl = 9;
  if (iconColor === undefined) {
    iconColor = textColor;
    iconColorContrast = textColorContrast;
  }

  if (defaultValue !== undefined) {
    options.map((el, index) => {
      if (el.value === defaultValue) {
        setSelectIndex(index);
        setInputValue(el.text);
      }
    })
  }

  const wrapperClasses = cx(
    className !== undefined && className,
    !fluid ? `w-${width}` : "w-full",
    "relative",
    "flex",
    "flex-col",
    "space-y-1",
    (mb !== undefined && mb >= 0) && `mb-${mb}`,
    (mb !== undefined && mb < 0) && `-mb${mb}`,
    (ml !== undefined && ml >= 0) && `ml-${ml}`,
    (ml !== undefined && ml < 0) && `-ml${ml}`,
    (mr !== undefined && mr >= 0) && `mr-${mr}`,
    (mr !== undefined && mr < 0) && `-mr${mr}`,
    (mt !== undefined && mt >= 0) && `mt-${mt}`,
    (mt !== undefined && mt < 0) && `-mt${mt}`,
  )

  const wrapperInputClasses = cx(
    "w-full",
    Color("bg", color, colorContrast),
    "relative",
    "flex",
    "flex-col",
    disabled && "opacity-25 cursor-not-allowed",
    !disabled && "cursor-pointer",
    (rounded !== "none" && roundedPosition === undefined) && RoundedSize[rounded],
    (rounded !== "none" && roundedPosition !== undefined) && `${RoundedPosition[roundedPosition]}-${rounded}`,
    (border && borderSize !== "none" && borderPosition === undefined) && `border-${borderStyle} ${BorderSize[borderSize]}`,
    (border && borderSize !== "none") && Color("border", borderColor, borderColorContrast),
    borderPosition !== undefined && `${BorderPosition[borderPosition]}${BorderSizeNum[borderSize]}`,
    (focusActive && borderPosition === undefined) && `outline-none border-transparent ${RingSize[focusBorderSize]} ${Color("ring", focusBorderColor, focusBorderColorContrast)}`,
    shadow !== "none" && ShadowSize[shadow],
    (px !== undefined && px >= 0) && `px-${px}`,
    (px !== undefined && px < 0) && `-px${px}`,
    (py !== undefined && py >= 0) && `py-${py}`,
    (py !== undefined && py < 0) && `-py${py}`,
    (pb !== undefined && pb >= 0) && `pb-${pb}`,
    (pb !== undefined && pb < 0) && `-pb${pb}`,
    (pl !== undefined && pl >= 0) && `pl-${pl}`,
    (pl !== undefined && pl < 0) && `-pl${pl}`,
    (pr !== undefined && pr >= 0) && `pr-${pr}`,
    (pr !== undefined && pr < 0) && `-pr${pr}`,
    (pt !== undefined && pt >= 0) && `pt-${pt}`,
    (pt !== undefined && pt < 0) && `-pt${pt}`
  )

  const baseClasses = cx(
    "w-full",
    "bg-transparent",
    Color("text", textColor, textColorContrast),
    FontSize[textSize],
    placeholderColor !== undefined && Color("placeholder", placeholderColor, placeholderColorContrast),
    "outline-none",
  )

  const formLabelClasses = cx(
    Color("text", labelColor, labelColorContrast),
    FontSize[labelSize],
    FontWeight["bold"]
  )

  const dropdownClasses = cx(
    "w-full",
    "bg-white",
    RoundedSize[rounded],
    "py-1",
    "mt-2",
    "border",
    Color("border", borderColor, borderColorContrast),
    "z-10",
    "absolute",
    "top-full",
    dropdown ? "block" : "hidden",
    "text-gray-500",
    "text-sm",
    shadow !== undefined && ShadowSize[shadow],
  )

  const itemClasses = cx(
    "flex",
    "flex-row",
    "items-center",
    `hover:${Color("bg", selectHoverColor, selectHoverColorContrast)}`,
    `hover:${Color("text", selectHoverColor, 500)}`,
    "py-2 px-3",
    "cursor-pointer"
  )

  const listHandleClick = (index) => {
    setSelectIndex(index);
    setInputValue(options[index].value);
    setFocusActive(false);
    setDropdown(false);

    if (search) setSearchOptions(options);
    if (onChange !== undefined) onChange(options[index].value)
  }

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    if (search) setSearchOptions(options);

    setFocusActive(false);
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

  return(
    <div ref={node} className={wrapperClasses}>
      {(label !== undefined && labelPosition === "outside") && (<label className={formLabelClasses}>{label}</label>)}
      <span className={wrapperInputClasses} onClick={() => {
        if (focus) setFocusActive(!focusActive)
        setDropdown(!dropdown)
      }}>
        {(label !== undefined && labelPosition === "inside") && (<label className={formLabelClasses}>{label}</label>)}
        <span className="flex flex-row items-center">
          {icon !== undefined  && (<Icon className="absolute left-2" icon={icon} size={textSize} color={iconColor} colorContrast={iconColorContrast} />)}
          <input
            id={id}
            type="text"
            name={name}
            placeholder={placeholder}
            className={baseClasses}
            value={inputValue}
            onChange={(e) => {
              if (search) setInputValue(e.target.value)
              if (search && e.target.value !== "") {
                setSearchOptions(Find(options, inputValue))
              }
              if (e.target.value === "" || e.target.value === undefined) setSearchOptions(options)
            }}
            readOnly={!search}
          />
          <Icon className="absolute right-2" icon="selector-solid" size={textSize} color={textColor} colorContrast={textColorContrast} />
        </span>
      </span>
  
      <div className={dropdownClasses}>
        <ul>
        {options === searchOptions ? (
          options.map((el, index) => {
            const listClasses = cx(
              "flex",
              "flex-row",
              "items-center",
              el.value !== inputValue ? "ml-6":"font-semibold"
            )
            return(<li key={el.key} className={itemClasses} onClick={() => listHandleClick(index)}>
              {el.value === inputValue && (
                <Icon className="mr-2" icon="check" color={selectHoverColor} colorContrast={600} />
              )}
              
              <span className={listClasses}>{el.text}</span>
            </li>)
          })
        ) : (
          searchOptions.map((el, index) => {
            const listClasses = cx(
              "flex",
              "flex-row",
              "items-center",
              el.value !== inputValue ? "ml-6":"font-semibold"
            )
            return(<li key={el.key} className={itemClasses} onClick={() => listHandleClick(index)}>
              {el.value === inputValue && (
                <Icon className="mr-2" icon="check" color={selectHoverColor} colorContrast={600} />
              )}
              
              <span className={listClasses}>{el.text}</span>
            </li>)
          })
        )}
        </ul>
      </div>
    </div>
  )
}

Select.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.node,
  name: PropTypes.string,
  width: PropTypes.oneOf(Width),
  search: PropTypes.bool,
  options: PropTypes.array,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  rounded: PropTypes.oneOf(Object.keys(RoundedSize)),
  roundedPosition: PropTypes.oneOf(Object.keys(RoundedPosition)),
  fluid: PropTypes.bool,
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  textSize: PropTypes.oneOf(Object.keys(FontSize)),
  textColor: PropTypes.oneOf(Palletes),
  textColorContrast: PropTypes.oneOf(Contrast),
  placeholderColor: PropTypes.oneOf(Palletes),
  placeholderColorContrast: PropTypes.oneOf(Contrast),
  labelColor: PropTypes.oneOf(Palletes),
  labelColorContrast: PropTypes.oneOf(Contrast),
  labelSize: PropTypes.oneOf(Object.keys(FontSize)),
  labelPosition: PropTypes.oneOf(["outside", "inside"]),
  borderColor: PropTypes.oneOf(Palletes),
  borderColorContrast: PropTypes.oneOf(Contrast),
  border: PropTypes.bool,
  borderStyle: PropTypes.oneOf(Object.keys(BorderType)),
  borderSize: PropTypes.oneOf(Object.keys(BorderSize)),
  borderColor: PropTypes.oneOf(Palletes),
  borderColorContrast: PropTypes.oneOf(Contrast),
  borderPosition: PropTypes.oneOf(Object.keys(BorderPosition)),
  focus: PropTypes.bool,
  focusBorderSize: PropTypes.oneOf(Object.keys(BorderSize)),
  focusBorderColor: PropTypes.oneOf(Palletes),
  focusBorderColorContrast: PropTypes.oneOf(Contrast),
  selectHoverColor: PropTypes.oneOf(Palletes),
  selectHoverColorContrast: PropTypes.oneOf(Contrast),
  shadow: PropTypes.oneOf(Object.keys(ShadowSize)),
  icon: PropTypes.oneOf(Object.keys(Icon.Index)),
  iconColor: PropTypes.oneOf(Palletes),
  iconColorContrast: PropTypes.oneOf(Contrast),
  disabled: PropTypes.bool,
  defaultValue: PropTypes.any,
  onChange: PropTypes.func,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
  px: PropTypes.number,
  py: PropTypes.number,
  pb: PropTypes.number,
  pl: PropTypes.number,
  pr: PropTypes.number,
  pt: PropTypes.number,
}

Select.defaultProps = {
  defaultValue: "",
  search: false,
  width: "max",
  color: "white",
  colorContrast: 200,
  labelColor: "gray",
  labelColorContrast: 600,
  labelSize: "sm",
  textSize: "sm",
  textColor: "gray",
  textColorContrast: 600,
  placeholderColor: "gray",
  placeholderColorContrast: 400,
  labelPosition: "outside",
  border: true,
  borderColor: "gray",
  borderColorContrast: 300,
  borderSize: "xs",
  borderStyle: "solid",
  focus: true,
  focusBorderColor: "blue",
  focusBorderColorContrast: 600,
  iconColorContrast: 700,
  selectHoverColor: "gray",
  selectHoverColorContrast: 100,
  py: 1.5,
  px: 4
}

export default Select;
