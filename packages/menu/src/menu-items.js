import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { MenuItem } from "./menu-item";
import { MenuDropdown } from "./menu-dropdown";

import { Margin, Padding } from "@zenbu-ui/classes";
import { Borders, Colors, Spacings, Texts } from "@zenbu-ui/types";

const ResponsiveSize = {
  "none": "",
  "sm": "hidden sm:flex",
  "md": "hidden md:flex",
  "lg": "hidden lg:flex",
  "xl": "hidden xl:flex",
  "2xl": "hidden 2xl:flex"
}

const MenuItems = ({ children, title, rounded, textSize, textWeight, right, center, responsive,
  colorHover, colorHoverContrast, textColor, textColorContrast, textColorHover, textColorHoverContrast,
  colorActive, colorActiveContrast, textColorActive, textColorActiveContrast,
  borderColorActive, borderColorActiveContrast, borderColorHover, borderColorHoverContrast,
  borderActiveSize, borderHoverSize,
  mx, my, mb, ml, mr, mt,
  px, py, pb, pl, pr, pt }) => {
  const wrapperClasses = cx(
    "flex",
    "flex-wrap",
    "items-center",
    center && "mx-auto",
    right && "ml-auto",
    Margin(mx, my, mb, ml, mr, mt),
    Padding(px, py, pb, pl, pr, pt)
  )

  const listClasses = cx(
    "flex",
    "flex-row",
    "space-x-3",
    "list-none",
    ResponsiveSize[responsive]
  )

  return(
    <div className={wrapperClasses}>
      <ul className={listClasses}>
        {children.length === undefined ? (
          <>
            {children.type.name === "MenuItem" && (
              <MenuItem {...children.props}
              colorHover={colorHover} colorHoverContrast={colorHoverContrast}
              colorActive={colorActive} colorActiveContrast={colorActiveContrast}
              textColor={textColor} textColorContrast={textColorContrast} 
              textColorActive={textColorActive} textColorActiveContrast={textColorActiveContrast}
              textColorHover={textColorHover} textColorHoverContrast={textColorHoverContrast}
              borderActiveSize={borderActiveSize} borderColorActive={borderColorActive} borderColorActiveContrast={borderColorActiveContrast}
              borderHoverSize={borderHoverSize} borderColorHover={borderColorHover} borderColorHoverContrast={borderColorHoverContrast}
              rounded={rounded} textSize={textSize} textWeight={textWeight}
              px={px} py={py} />
            )}

            {children.type.name === "MenuDropdown" && (
              <MenuDropdown {...children.props}
              colorHover={colorHover} colorHoverContrast={colorHoverContrast}
              colorActive={colorActive} colorActiveContrast={colorActiveContrast}
              textColor={textColor} textColorContrast={textColorContrast} 
              textColorActive={textColorActive} textColorActiveContrast={textColorActiveContrast}
              textColorHover={textColorHover} textColorHoverContrast={textColorHoverContrast}
              borderActiveSize={borderActiveSize} borderColorActive={borderColorActive} borderColorActiveContrast={borderColorActiveContrast}
              borderHoverSize={borderHoverSize} borderColorHover={borderColorHover} borderColorHoverContrast={borderColorHoverContrast}
              rounded={rounded} textSize={textSize} textWeight={textWeight}
              px={px} py={py} />
            )}
          </>
        ) : (
          children.map((el, i) => {
            if (el.type.name === "MenuItem") {
              return(
                <MenuItem key={i} {...el.props} 
                colorHover={colorHover} colorHoverContrast={colorHoverContrast}
                colorActive={colorActive} colorActiveContrast={colorActiveContrast}
                textColor={textColor} textColorContrast={textColorContrast} 
                textColorActive={textColorActive} textColorActiveContrast={textColorActiveContrast}
                textColorHover={textColorHover} textColorHoverContrast={textColorHoverContrast}
                borderActiveSize={borderActiveSize} borderColorActive={borderColorActive} borderColorActiveContrast={borderColorActiveContrast}
                borderHoverSize={borderHoverSize} borderColorHover={borderColorHover} borderColorHoverContrast={borderColorHoverContrast}
                rounded={rounded} textSize={textSize} textWeight={textWeight}
                px={px} py={py} />
              )
            } else if (el.type.name === "MenuDropdown") {
              return(
                <MenuDropdown key={i} {...el.props}
                colorHover={colorHover} colorHoverContrast={colorHoverContrast}
                colorActive={colorActive} colorActiveContrast={colorActiveContrast}
                textColor={textColor} textColorContrast={textColorContrast} 
                textColorActive={textColorActive} textColorActiveContrast={textColorActiveContrast}
                textColorHover={textColorHover} textColorHoverContrast={textColorHoverContrast}
                borderActiveSize={borderActiveSize} borderColorActive={borderColorActive} borderColorActiveContrast={borderColorActiveContrast}
                borderHoverSize={borderHoverSize} borderColorHover={borderColorHover} borderColorHoverContrast={borderColorHoverContrast}
                rounded={rounded} textSize={textSize} textWeight={textWeight}
                px={px} py={py} />
              )
            }
          })
        )}
      </ul>
    </div>
  )
}

MenuItems.propTypes = {
  children: PropTypes.node,
  title: PropTypes.node,
  right: PropTypes.bool,
  center: PropTypes.bool,
  responsive: PropTypes.oneOf(Object.keys(ResponsiveSize)),
  ...Texts,
  ...Colors,
  ...Borders,
  ...Spacings,
}

MenuItems.defaultProps = {
  right: false,
  center: false,
  responsive: "md",
  colorHoverContrast: 700,
  textColor: "white",
  textColorContrast: 700,
  textColorActive: "gray",
  textColorActiveContrast: 500,
  textColorHover: "gray",
  textColorHoverContrast: 500,
  borderActiveSize: "sm",
  borderActiveColorContrast: 700,
  borderHoverSize: "sm",
  borderHoverColorContrast: 700,
  rounded: "none",
  px: 4
}

export {
  MenuItems
}
