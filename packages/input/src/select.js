import React, { useRef, useState, useEffect } from "react";
import cx from "clsx";
import _ from "lodash";
import PropTypes from "prop-types";

import { Icon, Index } from "@zenbu-ui/icon";

import { Margin, Padding } from "@zenbu-ui/classes";
import { Borders, Colors, Icons, Sizes, Spacings, Texts } from "@zenbu-ui/types";
import { 
  BorderSize, BorderSizeNum, BorderPosition, RingSize,
  Color,
  FontSize, FontWeight,
  RoundedSize, RoundedPosition,
  ShadowSize
 } from "@zenbu-ui/utils";

import { Find, FindIndex } from "./utils";

const Select = ({ id, name, className, width, defaultValue, fluid, disabled, placeholder, rounded, roundedPosition, onChange, options, shadow, search,
  widthSM, widthMD, widthLG, widthXL, width2XL,
  color, colorContrast, textSize, textColor, textColorContrast,
  placeholderColor, placeholderColorContrast,
  label, labelPosition, labelColor, labelColorContrast, labelSize,
  border, borderSize, borderStyle, borderColor, borderColorContrast, borderPosition,
  focus, focusBorderSize, focusBorderColor, focusBorderColorContrast,
  icon, iconColor, iconColorContrast,
  selectHoverColor, selectHoverColorContrast,
  mx, my, mt, mb, ml, mr,
  px, py, pt, pb, pl, pr }) => {
  const node = useRef();

  const [mounted, setMounted] = useState(false);
  const [focusActive, setFocusActive] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectIndex, setSelectIndex] = useState(null);
  const [searchOptions, setSearchOptions] = useState(options);

  if (focusBorderSize === undefined) focusBorderSize = borderSize;
  if (icon !== undefined) pl = 9;
  if (iconColor === undefined) {
    iconColor = textColor;
    iconColorContrast = textColorContrast;
  }

  const wrapperClasses = cx(
    className !== undefined && className,
    fluid && `w-full`,
    (widthSM === undefined && widthMD === undefined 
    && widthLG === undefined && widthXL === undefined
    && width2XL === undefined && width !== undefined && !fluid) && `w-${width}`,
    widthSM !== undefined && `sm:w-${widthSM}`,
    widthMD !== undefined && `md:w-${widthMD}`,
    widthLG !== undefined && `lg:w-${widthLG}`,
    widthXL !== undefined && `xl:w-${widthXL}`,
    width2XL !== undefined && `2xl:w-${width2XL}`,
    "relative",
    "flex",
    "flex-col",
    "space-y-1",
    Margin(mx, my, mb, ml, mr, mt)
  )

  const wrapperInputClasses = cx(
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
    Padding(px, py, pb, pl, pr, pt)
  )

  const baseClasses = cx(
    "w-full",
    "bg-transparent",
    Color("text", textColor, textColorContrast),
    FontSize[textSize],
    placeholderColor !== undefined && Color("placeholder", placeholderColor, placeholderColorContrast),
    "outline-none",
    !search ? "cursor-pointer" : "cursor-text"
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
    "cursor-pointer",
    (px !== undefined && px >= 0) && `px-${px}`,
    (px !== undefined && px < 0) && `-px${px}`,
    "py-2"
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
    if (!mounted) {
      if (defaultValue !== undefined) {
        for (let i = 0; i < options.length; i++) {
          if (options[i].value === defaultValue) {
            setSelectIndex(i);
            setInputValue(options[i].text);
            break;
          }
        }
      }
      setMounted(true)
    }

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
              el.value === inputValue && "font-semibold",
            )
            return(<li key={el.key} className={itemClasses} onClick={() => listHandleClick(index)}>
              <span className={listClasses}>{el.text}</span>
              {el.value === inputValue && (
                <span className="absolute right-1">
                  <Icon className="mr-2" icon="check" color={selectHoverColor} colorContrast={600} />
                </span>
              )}
            </li>)
          })
        ) : (
          searchOptions.map((el, index) => {
            const listClasses = cx(
              "flex",
              "flex-row",
              "items-center",
              el.value === inputValue && "font-semibold",
            )
            return(<li key={el.key} className={itemClasses} onClick={() => listHandleClick(FindIndex(options, el.value))}>
              <span className={listClasses}>{el.text}</span>
              {el.value === inputValue && (
                <span className="absolute right-1">
                  <Icon className="mr-2" icon="check" color={selectHoverColor} colorContrast={600} />
                </span>
              )}
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
  icon: PropTypes.oneOf(Object.keys(Index)),
  id: PropTypes.string,
  label: PropTypes.node,
  name: PropTypes.string,
  search: PropTypes.bool,
  options: PropTypes.array,
  disabled: PropTypes.bool,
  placeholder: PropTypes.string,
  fluid: PropTypes.bool,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.any,
  onChange: PropTypes.func,
  ...Sizes,
  ...Borders,
  ...Colors,
  ...Icons,
  ...Texts,
  ...Spacings
}

Select.defaultProps = {
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

export {
  Select
}
