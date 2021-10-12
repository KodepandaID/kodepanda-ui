import React, { useEffect, useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import Items from "./items";
import Item from "./item";
import Header from "./header";

import Icon from "../icon/icon";

import { Palletes, Color, Contrast } from "../../utils/color";
import { Width, Height } from "../../utils/size";
import { ShadowSize } from "../../utils/shadow";
import { RoundedSize } from "../../utils/rounded";

const Menu = ({ className, width, children, height, shadow, rounded,
  color, colorContrast, responsiveColor, responsiveColorContrast,
  responsiveIconSize, responsiveTextColor, responsiveTextColorContrast, responsiveTextColorHover, responsiveTextColorHoverContrast, responsiveColorHover, responsiveColorHoverContrast,
  responsiveIconColor, responsiveIconColorContrast,
  px, py, pb, pl, pr, pt }) => {
  const [menu, setMenu] = useState([]);
  const [responsive, setResponsive] = useState("none");
  const [showMenuResponsive, setShowMenuResponsive] = useState(false);

  const wrapperClasses = cx(
    className !== undefined && className,
    "relative",
    `w-${width}`,
    height !== undefined && `h-${height}`,
    "flex",
    "flex-wrap",
    "items-center",
    "justify-between",
    "z-50",
    Color("bg", color, colorContrast),
    shadow !== "none" && ShadowSize[shadow],
    rounded !== "none" && RoundedSize[rounded],
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

  const responsiveIconClasses = cx(
    "flex",
    responsive !== "none" && `${responsive}:hidden`,
    "mr-2",
    "ml-2",
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
        <div className="w-full flex flex-nowrap items-center">
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
  width: PropTypes.oneOf(Width),
  height: PropTypes.oneOf(Height),
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  responsiveColor: PropTypes.oneOf(Palletes),
  responsiveColorContrast: PropTypes.oneOf(Contrast),
  responsiveColorHover: PropTypes.oneOf(Palletes),
  responsiveColorHoverContrast: PropTypes.oneOf(Contrast),
  responsiveTextColor: PropTypes.oneOf(Palletes),
  responsiveTextColorContrast: PropTypes.oneOf(Contrast),
  responsiveTextColorHover: PropTypes.oneOf(Palletes),
  responsiveTextColorHoverContrast: PropTypes.oneOf(Contrast),
  responsiveIconSize: PropTypes.oneOf(Height),
  responsiveIconColor: PropTypes.oneOf(Palletes),
  responsiveIconColorContrast: PropTypes.oneOf(Contrast),
  shadow: PropTypes.oneOf(Object.keys(ShadowSize)),
  rounded: PropTypes.oneOf(Object.keys(RoundedSize)),
  px: PropTypes.number,
  py: PropTypes.number,
  pb: PropTypes.number,
  pl: PropTypes.number,
  pr: PropTypes.number,
  pt: PropTypes.number,
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

export default Menu;