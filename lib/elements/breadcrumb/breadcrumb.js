import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import { Margin } from "../../classes";
import { color, icons, spacing, text } from "../../types";

import { Color } from "../../utils/color";
import { FontSize } from "../../utils/font";

import Item from "./breacrumb-item";
import Icon from "../icon/icon";

const Breadcrumb = ({ children, textSize, dividerIcon, lastDividerIcon,
  dividerColor, dividerColorContrast, textColor, textColorContrast, textColorActive, textColorActiveContrast,
  mx, my, mt, mb, mr, ml }) => {
  const baseClasses = cx(
    "flex",
    "flex-row",
    FontSize[textSize],
    Margin(mx, my, mb, ml, mr, mt)
  )

  const textClasses = cx(
    Color("text", textColor, textColorContrast)
  )

  const textActiveClasses = cx(
    Color("text", textColorActive, textColorActiveContrast)
  )

  const dividerClasses = cx(
    "mr-1",
    Color("text", dividerColor, dividerColorContrast)
  )

  return(
    <div className={baseClasses}>
      {children.map((el, i) => {
        return(
          <div className="flex justify-start content-center" key={i}>
            {(i !== children.length - 1) && (<span className={textClasses}>{el}</span>)}
            {(i === children.length - 1) && (<span className={textActiveClasses}>{el}</span>)}
            {(i !== children.length - 1 && dividerIcon === undefined) && (<span className={dividerClasses}>/</span>)}
            {(i < children.length - 2 && dividerIcon !== undefined) && (<Icon icon={dividerIcon} size={textSize} mt={0.5} mr={1} color={dividerColor} colorContrast={dividerColorContrast} />)}
            {(i === children.length - 2 && lastDividerIcon === undefined && dividerIcon !== undefined) && (<Icon icon={dividerIcon} size={textSize} mt={0.5} mr={1} color={dividerColor} colorContrast={dividerColorContrast} />)}
            {(i === children.length - 2 && lastDividerIcon !== undefined) && (<Icon icon={lastDividerIcon} size={textSize} mt={0.5} mr={1} color={dividerColor} colorContrast={dividerColorContrast} />)}
          </div>
        )
      })}
    </div>
  )
}

Breadcrumb.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  ...color,
  ...icons,
  ...text,
  ...spacing
}

Breadcrumb.defaultProps = {
  textSize: "sm",
  textColor: "gray",
  textColorContrast: 300,
  textColorActive: "black",
  textColorActiveContrast: 700,
  dividerColor: "gray",
  dividerColorContrast: 300
}

Breadcrumb.Item = Item;

export default Breadcrumb;