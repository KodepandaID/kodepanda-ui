import React, { useRef } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import Icon from "../icon/icon";

import { Palletes, Color, Contrast } from "../../utils/color";
import { Height } from "../../utils/size";
import { RoundedSize } from "../../utils/rounded";
import { BorderSizeNum } from "../../utils/border";

const Item = ({ children, icon, iconSize, active, rounded, disabled, href, target, onClick,
  colorHover, colorHoverContrast, textColor, textColorContrast, textColorHover, textColorHoverContrast,
  colorActive, colorActiveContrast, textColorActive, textColorActiveContrast,
  borderActiveColor, borderActiveColorContrast, borderHoverColor, borderHoverColorContrast,
  borderActiveSize, borderHoverSize,
  px, py }) => {
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
    (active && borderActiveColor !== undefined) && `border-b${BorderSizeNum[borderActiveSize]} ${Color("border", borderActiveColor, borderActiveColorContrast)}`,
    (!active && borderActiveColor !== undefined) && `border-b${BorderSizeNum[borderActiveSize]} border-transparent`,
    (!disabled && borderHoverColor !== undefined) && `border-b${BorderSizeNum[borderHoverSize]} border-transparent hover:${Color("border", borderHoverColor, borderHoverColorContrast)}`,
    rounded !== "none" && RoundedSize[rounded],
    (px !== undefined && px >= 0) && `px-${px}`,
    (px !== undefined && px < 0) && `-px${px}`,
    (py !== undefined && py >= 0) && `py-${py}`,
    (py !== undefined && py < 0) && `-py${py}`,
  )

  return(
    <li className={wrapperClasses} onClick={() => {
      if (href !== undefined) node.current.click()
      if (onClick !== undefined) onClick()
    }}>
      <a ref={node} className="hidden" href={href} target={target} />
      {icon !== undefined && (<Icon icon={icon} height={iconSize} mt={-0.5} mr={2} />)}
      <span>{children}</span>
    </li>
  )
}

Item.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.oneOf(Object.keys(Icon.Index)),
  iconSize: PropTypes.oneOf(Height),
  active: PropTypes.bool,
  disabled: PropTypes.bool,
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
  href: PropTypes.string,
  target: PropTypes.oneOf(["_blank", "_self"]),
  onClick: PropTypes.func,
  px: PropTypes.number,
  py: PropTypes.number
}

Item.defaultProps = {
  active: false,
  disabled: false,
  target: "_self",
  iconSize: 5
}

export default Item;