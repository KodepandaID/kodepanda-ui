import React, { useEffect, useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Icon } from "@zenbu-ui/icon";
import { MenuItems } from "./menu-items";
import { MenuItem } from "./menu-item";
import { MenuHeader } from "./menu-header";
import { MenuDropdown } from "./menu-dropdown";
import { MenuSub } from "./menu-sub";
import { MenuContent } from "./menu-content";
import { MenuCollapse } from "./menu-collapse";
import { MenuSidebar } from "./menu-sidebar";
import { MenuFooter } from "./menu-footer";

import { Margin, Padding } from "@zenbu-ui/classes";
import { Borders, Colors, Sizes, Spacings } from "@zenbu-ui/types";

import { 
  BorderPosition, BorderSize, BorderSizeNum, BorderType,
  Color,
  RoundedSize,
  ShadowSize
 } from "@zenbu-ui/utils";

const Menu = ({ className, children, fixed, height, shadow, rounded,
  width, widthSM, widthMD, widthLG, widthXL, width2XL,
  border, borderSize, borderStyle, borderPosition, borderColor, borderColorContrast,
  color, colorContrast, responsiveColor, responsiveColorContrast,
  responsiveIconSize, responsiveTextColor, responsiveTextColorContrast, responsiveTextColorHover, responsiveTextColorHoverContrast, responsiveColorHover, responsiveColorHoverContrast,
  responsiveIconColor, responsiveIconColorContrast, showMenuResponsive,
  mx, my, mb, ml, mr, mt,
  px, py, pb, pl, pr, pt }) => {
  const [menu, setMenu] = useState([]);
  const [responsive, setResponsive] = useState("none");
  const [showMenu, setShowMenu] = useState(false);

  const topWrapperClasses = cx(
    !fixed && "relative",
    fixed && "fixed inset-x-0 top-0 z-50"
  )

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
    (border && borderPosition === undefined) && `${borderSize === undefined ? "border":BorderSize[borderSize]} ${BorderType[borderStyle]}`,
    (border && borderPosition !== undefined) && `${BorderPosition[borderPosition]}${BorderSizeNum[borderSize]} ${BorderType[borderStyle]}`,
    border && borderColor !== undefined && `${Color("border", borderColor, borderColorContrast === undefined ? 500 : borderColorContrast)}`,
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
    "cursor-pointer",
    Padding(px, py, pb, pl, pr, pt) === "" && "py-2"
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
    if (children.length !== undefined) {
      for (let i = 0; i < children.length; i++) {
        if (children[i].type.name === "MenuItems" && children[i].props.responsive !== "none") {
          setResponsive(children[i].props.responsive)
          if (children[i].props.children.length !== undefined) {
            children[i].props.children.map((el) => {
              setMenu((old) => [...old, el.props])
            })
          } else setMenu((old) => [...old, children[i].props.children.props])
        }
      }
    } else {
      if (children.type.name === "MenuItems" && children.props.responsive !== "none") {
        setResponsive(children.props.responsive)
        children.props.children.map((el) => {
          setMenu((old) => [...old, el.props])
        })
      }
    }
  }, [children])

  return(
    <div className={topWrapperClasses}>
      <div className={wrapperClasses}>
        <div className="w-screen flex items-center justify-between md:justify-start">
          {children}
          {(responsive !== "none" && showMenuResponsive) && (
            <div className={responsiveIconClasses} onClick={() => setShowMenu(!showMenu)}><Icon icon={showMenu ? "x" : "menu-alt-3"} color={responsiveIconColor} colorContrast={responsiveIconColorContrast} height={responsiveIconSize} /></div>
          )}
        </div>
      </div>
      {(showMenu && menu.length > 0) && (
        <ul className={responsiveMenuClasses}>
          {menu.map((el, i) => {
            return(
              <MenuItem key={i} {...el}
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
  showMenuResponsive: PropTypes.bool,
  fixed: PropTypes.bool,
  ...Sizes,
  ...Colors,
  ...Borders,
  ...Spacings
}

Menu.defaultProps = {
  showMenuResponsive: true,
  fixed: false,
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
  rounded: "none",
  border: false,
  borderSize: "xs",
  borderStyle: "solid"
}

Menu.Items = MenuItems;
Menu.Item = MenuItem;
Menu.Header = MenuHeader;
Menu.Dropdown = MenuDropdown;
Menu.Sub = MenuSub;
Menu.Content = MenuContent;
Menu.Collapse = MenuCollapse;
Menu.Sidebar = MenuSidebar;
Menu.Footer = MenuFooter;

export {
  Menu,
  MenuItems,
  MenuItem,
  MenuHeader,
  MenuDropdown,
  MenuSub,
  MenuContent,
  MenuCollapse,
  MenuSidebar,
  MenuFooter
}
