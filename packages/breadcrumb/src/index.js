import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { BreadcrumbItem } from "./breadcrumb-item";
import { Icon, Index } from "@zenbu-ui/icon";

import { Margin } from "@zenbu-ui/classes";
import { Colors, Icons, Spacings, Texts } from "@zenbu-ui/types";
import { Color, FontSize } from "@zenbu-ui/utils";

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
  icon: PropTypes.oneOf(Object.keys(Index)),
  dividerIcon: PropTypes.oneOf(Object.keys(Index)),
  lastDividerIcon: PropTypes.oneOf(Object.keys(Index)),
  ...Colors,
  ...Icons,
  ...Texts,
  ...Spacings
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

Breadcrumb.Item = BreadcrumbItem;

export {
  Breadcrumb,
  BreadcrumbItem
}
