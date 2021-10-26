import React, { useEffect, useRef, useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Icon, Index } from "@zenbu-ui/icon";
import { Dropdown } from "@zenbu-ui/dropdown";

import { Attributes, Borders, Colors, Icons } from "@zenbu-ui/types";
import { BorderSizeNum, Color, RoundedSize } from "@zenbu-ui/utils";

const MenuDropdown = ({ children, content, icon, iconSize, active, rounded, disabled, click,
  colorHover, colorHoverContrast, textColor, textColorContrast, textColorHover, textColorHoverContrast,
  colorActive, colorActiveContrast, textColorActive, textColorActiveContrast,
  borderColorActive, borderActiveColorContrast, borderColorHover, borderHoverColorContrast,
  borderActiveSize, borderHoverSize }) => {
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
    (active && borderColorActive !== undefined) && `border-b${BorderSizeNum[borderActiveSize]} ${Color("border", borderColorActive, borderActiveColorContrast)}`,
    (!active && borderColorActive !== undefined) && `border-b${BorderSizeNum[borderActiveSize]} border-transparent`,
    (!disabled && borderColorHover !== undefined) && `border-b${BorderSizeNum[borderHoverSize]} border-transparent hover:${Color("border", borderColorHover, borderHoverColorContrast)}`,
    rounded !== "none" && RoundedSize[rounded]
  )

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
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
        <div className="w-full h-full absolute top-full left-0 pt-2">
          <Dropdown {...children.props} visible={open} />
        </div>
      )}
    </li>
  )
}

MenuDropdown.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.oneOf(Object.keys(Index)),
  content: PropTypes.node,
  ...Icons,
  ...Attributes,
  click: PropTypes.bool,
  ...Colors,
  ...Borders
}

MenuDropdown.defaultProps = {
  active: false,
  disabled: false,
  click: false,
  iconSize: 5
}

export {
  MenuDropdown
}
