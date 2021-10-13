import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import { Margin, Padding } from "../../classes";
import { border, color, spacing, text } from "../../types";

import Item from "./item";
import Dropdown from "./dropdown";

import { FontSize, FontWeight } from "../../utils/font";

const ResponsiveSize = {
  "none": "",
  "sm": "hidden sm:flex",
  "md": "hidden md:flex",
  "lg": "hidden lg:flex",
  "xl": "hidden xl:flex",
  "2xl": "hidden 2xl:flex"
}

const Items = ({ children, rounded, textSize, textWeight, right, center, responsive,
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
    ResponsiveSize[responsive],
    FontSize[textSize],
    FontWeight[textWeight]
  )

  return(
    <div className={wrapperClasses}>
      <ul className={listClasses}>
        {children.map((el, i) => {
          if (el.type.name === "Item") {
            return(
              <Item key={i} 
              colorHover={colorHover} colorHoverContrast={colorHoverContrast}
              colorActive={colorActive} colorActiveContrast={colorActiveContrast}
              textColor={textColor} textColorContrast={textColorContrast} 
              textColorActive={textColorActive} textColorActiveContrast={textColorActiveContrast}
              textColorHover={textColorHover} textColorHoverContrast={textColorHoverContrast}
              borderActiveSize={borderActiveSize} borderColorActive={borderColorActive} borderColorActiveContrast={borderColorActiveContrast}
              borderHoverSize={borderHoverSize} borderColorHover={borderColorHover} borderColorHoverContrast={borderColorHoverContrast}
              rounded={rounded}
              px={px} py={py} {...el.props} />
            )
          } else if (el.type.name === "Dropdown") {
            return(
              <Dropdown key={i} 
              colorHover={colorHover} colorHoverContrast={colorHoverContrast}
              colorActive={colorActive} colorActiveContrast={colorActiveContrast}
              textColor={textColor} textColorContrast={textColorContrast} 
              textColorActive={textColorActive} textColorActiveContrast={textColorActiveContrast}
              textColorHover={textColorHover} textColorHoverContrast={textColorHoverContrast}
              borderActiveSize={borderActiveSize} borderColorActive={borderColorActive} borderColorActiveContrast={borderColorActiveContrast}
              borderHoverSize={borderHoverSize} borderColorHover={borderColorHover} borderColorHoverContrast={borderColorHoverContrast}
              rounded={rounded}
              px={px} py={py} {...el.props} />
            )
          }
        })}
      </ul>
    </div>
  )
}

Items.propTypes = {
  children: PropTypes.node,
  right: PropTypes.bool,
  center: PropTypes.bool,
  responsive: PropTypes.oneOf(Object.keys(ResponsiveSize)),
  ...text,
  ...color,
  ...border,
  ...spacing,
}

Items.defaultProps = {
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
  textSize: "md",
  textWeight: "normal",
  rounded: "none",
  px: 4
}

export default Items;