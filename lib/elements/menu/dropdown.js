import React, { useEffect, useRef, useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import Icon from "../icon/icon";
import { default as DropdownList } from "../dropdown/dropdown";

import { Palletes, Color, Contrast } from "../../utils/color";
import { Height } from "../../utils/size";
import { RoundedSize } from "../../utils/rounded";
import { BorderSizeNum } from "../../utils/border";

const Dropdown = ({ children, content, icon, iconSize, active, rounded, disabled, click,
  colorHover, colorHoverContrast, textColor, textColorContrast, textColorHover, textColorHoverContrast,
  colorActive, colorActiveContrast, textColorActive, textColorActiveContrast,
  borderActiveColor, borderActiveColorContrast, borderHoverColor, borderHoverColorContrast,
  borderActiveSize, borderHoverSize,
  px, py }) => {
  const node = useRef();
  const [open, setOpen] = useState(false);

  const wrapperClasses = cx(
    "relative",
    "flex",
    "items-center",
    "space-x-2",
    (colorHover !== undefined && !disabled) && `hover:${Color("bg", colorHover, colorHoverContrast)}`,
    (active && colorActive !== undefined) && Color("bg", colorActive, colorActiveContrast),
    disabled && "opacity-50",
    !disabled && "cursor-pointer",
    textColor !== undefined && Color("text", textColor, textColorContrast),
    (active && textColorActive !== undefined) && Color("text", textColorActive, textColorActiveContrast),
    (!disabled && textColorHover !== undefined) && `hover:${Color("text", textColorHover, textColorHoverContrast)}`,
    (active && borderActiveColor !== undefined) && `border-b${BorderSizeNum[borderActiveSize]} ${Color("border", borderActiveColor, borderActiveColorContrast)}`,
    (!active && borderActiveColor !== undefined) && `border-b${BorderSizeNum[borderActiveSize]} border-transparent`,
    (!disabled && borderHoverColor !== undefined) && `border-b${BorderSizeNum[borderHoverSize]} border-transparent hover:${Color("border", borderHoverColor, borderHoverColorContrast)}`,
    rounded !== "none" && RoundedSize[rounded],
    (px !== undefined && px >= 0) && `px-${px}`,
    (px !== undefined && px < 0) && `-px${px}`,
    (py !== undefined && py >= 0) && `py-${py}`,
    (py !== undefined && py < 0) && `-py${py}`,
  )

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      console.log("masuk")
      return;
    }
    setOpen(false);
  }

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [open])

  return(
    <li ref={node} className={wrapperClasses}
    onMouseEnter={() => {
      if (!click) setOpen(true)
    }}
    onMouseLeave={() => {
      if (!click) setOpen(false)
    }}
    onClick={() => {
      if (click) setOpen(!open)
    }}>
      {icon !== undefined && (<Icon icon={icon} height={iconSize} />)}
      <span>{content}</span>
      <span><Icon icon="chevron-down-solid" size="sm" /></span>
      {open && (
        <div className="w-full h-full absolute top-full left-0">
          <DropdownList {...children.props} visible={open} />
        </div>
      )}
    </li>
  )
}

Dropdown.propTypes = {
  children: PropTypes.node,
  content: PropTypes.node,
  icon: PropTypes.oneOf(Object.keys(Icon.Index)),
  iconSize: PropTypes.oneOf(Height),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  click: PropTypes.bool,
  colorHover: PropTypes.oneOf(Palletes),
  colorHoverContrast: PropTypes.oneOf(Contrast),
  colorActive: PropTypes.oneOf(Palletes),
  colorActiveContrast: PropTypes.oneOf(Contrast),
  textColor: PropTypes.oneOf(Palletes),
  textColorContrast: PropTypes.oneOf(Contrast),
  textColorActive: PropTypes.oneOf(Palletes),
  textColorActiveContrast: PropTypes.oneOf(Contrast),
  textColorHover: PropTypes.oneOf(Palletes),
  textColorHoverContrast: PropTypes.oneOf(Contrast),
  borderActiveSize: PropTypes.oneOf(Object.keys(BorderSizeNum)),
  borderActiveColor: PropTypes.oneOf(Palletes),
  borderActiveColorContrast: PropTypes.oneOf(Contrast),
  borderHoverSize: PropTypes.oneOf(Object.keys(BorderSizeNum)),
  borderHoverColor: PropTypes.oneOf(Palletes),
  borderHoverColorContrast: PropTypes.oneOf(Contrast),
  rounded: PropTypes.oneOf(Object.keys(RoundedSize)),
  px: PropTypes.number,
  py: PropTypes.number
}

Dropdown.defaultProps = {
  active: false,
  disabled: false,
  click: false,
  iconSize: 5
}

export default Dropdown;