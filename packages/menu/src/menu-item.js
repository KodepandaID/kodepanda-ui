import React, { useEffect, useRef, useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Icon, Index } from "@zenbu-ui/icon";

import { Margin, Padding } from "@zenbu-ui/classes";
import { Attributes, Borders, Colors, Icons, Spacings, Texts } from "@zenbu-ui/types";
import { BorderSizeNum, Color, RoundedSize, FontSize, FontWeight } from "@zenbu-ui/utils";

const MenuItem = ({ className, children, content, icon, iconSize, active, rounded, disabled, href, target, onClick,
  colorHover, colorHoverContrast, textColor, textColorContrast, textColorHover, textColorHoverContrast,
  colorActive, colorActiveContrast, textColorActive, textColorActiveContrast,
  textSize, textWeight,
  borderColorActive, borderColorActiveContrast, borderColorHover, borderColorHoverContrast,
  borderActiveSize, borderHoverSize,
  mx, my, mb, ml, mr, mt,
  px, py, pb, pl, pr, pt }) => {
  const node = useRef();

  const [menuActive, setMenuActive] = useState(false);

  const wrapperClasses = cx(
    className !== undefined && className,
    "flex",
    "items-center",
    (colorHover !== undefined && !disabled) && `hover:${Color("bg", colorHover, colorHoverContrast)}`,
    (menuActive && colorActive !== undefined) && Color("bg", colorActive, colorActiveContrast),
    disabled && "opacity-50",
    !disabled && "cursor-pointer",
    (!menuActive && textColor !== undefined) && Color("text", textColor, textColorContrast),
    (menuActive && textColorActive !== undefined) && Color("text", textColorActive, textColorActiveContrast),
    (!disabled && textColorHover !== undefined) && `hover:${Color("text", textColorHover, textColorHoverContrast)}`,
    (menuActive && borderColorActive !== undefined) && `border-b${BorderSizeNum[borderActiveSize]} ${Color("border", borderColorActive, borderColorActiveContrast)}`,
    (!menuActive && borderColorActive !== undefined) && `border-b${BorderSizeNum[borderActiveSize]} border-transparent`,
    (!disabled && borderColorHover !== undefined) && `border-b${BorderSizeNum[borderHoverSize]} border-transparent hover:${Color("border", borderColorHover, borderColorHoverContrast)}`,
    rounded !== "none" && RoundedSize[rounded],
    textSize !== undefined && FontSize[textSize],
    textWeight !== undefined && FontWeight[textWeight],
    Margin(mx, my, mb, ml, mr, mt),
    Padding(px, py, pb, pl, pr, pt)
  )

  useEffect(() => {
    setMenuActive(active)
  }, [active])

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

MenuItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.oneOf(Object.keys(Index)),
  content: PropTypes.node,
  onClick: PropTypes.func,
  ...Icons,
  ...Attributes,
  ...Colors,
  ...Borders,
  ...Texts,
  ...Spacings
}

MenuItem.defaultProps = {
  active: false,
  disabled: false,
  target: "_self",
  iconSize: 5,
  py: 4
}

export {
  MenuItem
}
