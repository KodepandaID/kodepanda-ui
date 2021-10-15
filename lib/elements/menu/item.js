import React, { useRef } from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import { Padding } from "../../classes";
import { attribute, border, color, icons, spacing } from "../../types";

import Icon from "../icon/icon";

import { Color } from "../../utils/color";
import { RoundedSize } from "../../utils/rounded";
import { BorderSizeNum } from "../../utils/border";

const Item = ({ children, content, icon, iconSize, active, rounded, disabled, href, target, onClick,
  colorHover, colorHoverContrast, textColor, textColorContrast, textColorHover, textColorHoverContrast,
  colorActive, colorActiveContrast, textColorActive, textColorActiveContrast,
  borderColorActive, borderColorActiveContrast, borderColorHover, borderColorHoverContrast,
  borderActiveSize, borderHoverSize,
  px, py, pb, pl, pr, pt }) => {
  const node = useRef();

  const wrapperClasses = cx(
    "flex",
    "items-center",
    (colorHover !== undefined && !disabled) && `hover:${Color("bg", colorHover, colorHoverContrast)}`,
    (active && colorActive !== undefined) && Color("bg", colorActive, colorActiveContrast),
    disabled && "opacity-50",
    !disabled && "cursor-pointer",
    textColor !== undefined && Color("text", textColor, textColorContrast),
    (active && textColorActive !== undefined) && Color("text", textColorActive, textColorActiveContrast),
    (!disabled && textColorHover !== undefined) && `hover:${Color("text", textColorHover, textColorHoverContrast)}`,
    (active && borderColorActive !== undefined) && `border-b${BorderSizeNum[borderActiveSize]} ${Color("border", borderColorActive, borderColorActiveContrast)}`,
    (!active && borderColorActive !== undefined) && `border-b${BorderSizeNum[borderActiveSize]} border-transparent`,
    (!disabled && borderColorHover !== undefined) && `border-b${BorderSizeNum[borderHoverSize]} border-transparent hover:${Color("border", borderColorHover, borderColorHoverContrast)}`,
    rounded !== "none" && RoundedSize[rounded],
    Padding(px, py, pb, pl, pr, pt)
  )

  return(
    <li className={wrapperClasses} onClick={() => {
      if (href !== undefined) node.current.click()
      if (onClick !== undefined) onClick()
    }}>
      <a ref={node} className="hidden" href={href} target={target} />
      {icon !== undefined && (<Icon icon={icon} height={iconSize} mt={-0.5} mr={2} />)}
      <span>{children} {content}</span>
    </li>
  )
}

Item.propTypes = {
  children: PropTypes.node,
  content: PropTypes.node,
  ...icons,
  ...attribute,
  ...color,
  ...border,
  onClick: PropTypes.func,
  ...spacing
}

Item.defaultProps = {
  active: false,
  disabled: false,
  target: "_self",
  iconSize: 5,
  py: 4
}

export default Item;