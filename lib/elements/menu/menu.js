import React, { useEffect, useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import { Margin, Padding } from "../../classes";
import { border, color, size, spacing } from "../../types";

import Items from "./items";
import Item from "./item";
import Header from "./header";
import Dropdown from "./dropdown";

import Icon from "../icon/icon";

import { Color } from "../../utils/color";
import { ShadowSize } from "../../utils/shadow";
import { RoundedSize } from "../../utils/rounded";

const Menu = ({ className, children, height, shadow, rounded,
  width, widthSM, widthMD, widthLG, widthXL, width2XL,
  color, colorContrast, responsiveColor, responsiveColorContrast,
  responsiveIconSize, responsiveTextColor, responsiveTextColorContrast, responsiveTextColorHover, responsiveTextColorHoverContrast, responsiveColorHover, responsiveColorHoverContrast,
  responsiveIconColor, responsiveIconColorContrast,
  mx, my, mb, ml, mr, mt,
  px, py, pb, pl, pr, pt }) => {
  const [menu, setMenu] = useState([]);
  const [responsive, setResponsive] = useState("none");
  const [showMenuResponsive, setShowMenuResponsive] = useState(false);

  const wrapperClasses = cx(
    className !== undefined && className,
    "relative",
    (widthSM === undefined && widthMD === undefined 
    && widthLG === undefined && widthXL === undefined
    && width2XL === undefined) && `w-${width}`,
    widthSM !== undefined && `sm:w-${widthSM}`,
    widthMD !== undefined && `md:w-${widthMD}`,
    widthLG !== undefined && `lg:w-${widthLG}`,
    widthXL !== undefined && `xl:w-${widthXL}`,
    width2XL !== undefined && `2xl:w-${width2XL}`,
    height !== undefined && `h-${height}`,
    "flex",
    "flex-wrap",
    "items-center",
    "justify-between",
    "z-50",
    Color("bg", color, colorContrast),
    shadow !== "none" && ShadowSize[shadow],
    rounded !== "none" && RoundedSize[rounded],
    Padding(px, py, pb, pl, pr, pt),
    Margin(mx, my, mb, ml, mr, mt)
  )

  const responsiveIconClasses = cx(
    "flex",
    responsive !== "none" && `${responsive}:hidden`,
    "mr-2",
    "float-right",
    "transitions",
    "duration-700",
    "cursor-pointer"
  )

  const responsiveMenuClasses = cx(
    "relative",
    "w-full",
    "z-50",
    "flex",
    "flex-col",
    "transitions",
    "duration-700",
    Color("bg", responsiveColor, responsiveColorContrast),
    "space-y-2",
    "mt-1",
    "py-5",
  )

  useEffect(() => {
    for (let i = 0; i < children.length; i++) {
      if (children[i].type.name === "Items" && children[i].props.responsive !== "none") {
        setResponsive(children[i].props.responsive)
        children[i].props.children.map((el) => {
          setMenu((old) => [...old, el.props])
        })
      }
    }
  }, [children])

  return(
    <div className="relative">
      <div className={wrapperClasses}>
        <div className="w-screen flex items-center justify-between md:justify-start">
          {children}
          {responsive !== "none" && (
            <div className={responsiveIconClasses} onClick={() => setShowMenuResponsive(!showMenuResponsive)}><Icon icon={showMenuResponsive ? "x" : "menu-alt-3"} color={responsiveIconColor} colorContrast={responsiveIconColorContrast} height={responsiveIconSize} /></div>
          )}
        </div>
      </div>
      {(showMenuResponsive && menu.length > 0) && (
        <ul className={responsiveMenuClasses}>
          {menu.map((el, i) => {
            return(
              <Item key={i} {...el}
              px={5} py={3}
              textColor={responsiveTextColor} textColorContrast={responsiveTextColorContrast}
              textColorHover={responsiveTextColorHover} textColorHoverContrast={responsiveTextColorHoverContrast}
              colorHover={responsiveColorHover} colorHoverContrast={responsiveColorHoverContrast}
              />
            )
          })}
        </ul>
      )}
    </div>
  )
}

Menu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  ...size,
  ...color,
  ...border,
  ...spacing
}

Menu.defaultProps = {
  width: "full",
  color: "blue",
  colorContrast: 600,
  responsiveColor: "white",
  responsiveColorContrast: 600,
  responsiveColorHover: "gray",
  responsiveColorHoverContrast: 100,
  responsiveTextColor: "black",
  responsiveTextColorContrast: 700,
  responsiveTextColorHover: "black",
  responsiveTextColorHoverContrast: 700,
  responsiveIconSize: 5,
  shadow: "none",
  rounded: "none"
}

Menu.Items = Items;
Menu.Item = Item;
Menu.Header = Header;
Menu.Dropdown = Dropdown;

export default Menu;