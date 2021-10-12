import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import Item from "./item";

import { Palletes, Contrast } from "../../utils/color";
import { FontSize, FontWeight } from "../../utils/font";
import { RoundedSize } from "../../utils/rounded";
import { BorderSizeNum } from "../../utils/border";

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
  borderActiveColor, borderActiveColorContrast, borderHoverColor, borderHoverColorContrast,
  borderActiveSize, borderHoverSize,
  mx, my, mb, ml, mr, mt,
  px, py }) => {
  const wrapperClasses = cx(
    "flex",
    "flex-wrap",
    "items-center",
    center && "mx-auto",
    right && "ml-auto",
    (mx !== undefined && mx >= 0) && `mx-${mx}`,
    (mx !== undefined && mx < 0) && `-mx${mx}`,
    (my !== undefined && my >= 0) && `my-${my}`,
    (my !== undefined && my < 0) && `-my${my}`,
    (mb !== undefined && mb >= 0) && `mb-${mb}`,
    (mb !== undefined && mb < 0) && `-mb${mb}`,
    (ml !== undefined && ml >= 0) && `ml-${ml}`,
    (ml !== undefined && ml < 0) && `-ml${ml}`,
    (mr !== undefined && mr >= 0) && `mr-${mr}`,
    (mr !== undefined && mr < 0) && `-mr${mr}`,
    (mt !== undefined && mt >= 0) && `mt-${mt}`,
    (mt !== undefined && mt < 0) && `-mt${mt}`,
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
              borderActiveSize={borderActiveSize} borderActiveColor={borderActiveColor} borderActiveColorContrast={borderActiveColorContrast}
              borderHoverSize={borderHoverSize} borderHoverColor={borderHoverColor} borderHoverColorContrast={borderHoverColorContrast}
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
  colorHover: PropTypes.oneOf(Palletes),
  colorHoverContrast: PropTypes.oneOf(Contrast),
  colorActiveHover: PropTypes.oneOf(Palletes),
  colorActiveHoverContrast: PropTypes.oneOf(Contrast),
  textColor: PropTypes.oneOf(Palletes),
  textColorContrast: PropTypes.oneOf(Contrast),
  textColorActive: PropTypes.oneOf(Palletes),
  textColorActiveContrast: PropTypes.oneOf(Contrast),
  textColorHover: PropTypes.oneOf(Palletes),
  textColorHoverContrast: PropTypes.oneOf(Contrast),
  textSize: PropTypes.oneOf(Object.keys(FontSize)),
  textWeight: PropTypes.oneOf(Object.keys(FontWeight)),
  rounded: PropTypes.oneOf(Object.keys(RoundedSize)),
  borderActiveSize: PropTypes.oneOf(Object.keys(BorderSizeNum)),
  borderActiveColor: PropTypes.oneOf(Palletes),
  borderActiveColorContrast: PropTypes.oneOf(Contrast),
  borderHoverSize: PropTypes.oneOf(Object.keys(BorderSizeNum)),
  borderHoverColor: PropTypes.oneOf(Palletes),
  borderHoverColorContrast: PropTypes.oneOf(Contrast),
  mx: PropTypes.number,
  my: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
  px: PropTypes.number,
  py: PropTypes.number
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
  px: 4,
  py: 3
}

export default Items;