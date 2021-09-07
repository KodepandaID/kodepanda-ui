import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color, Contrast } from "../../utils/color";
import { Icons } from "../../utils/icon";

import { default as Item } from "./breacrumb-item";
import { default as Icon } from "../icon/icon";

const Breadcrumb = ({ children, size, dividerIcon, lastDividerIcon,
  dividerColor, dividerColorContrast, textColor, textColorContrast, activeTextColor, activeTextColorContrast,
  mt, mb, mr, ml }) => {
  const baseClasses = cx(
    "flex",
    "flex-row",
    `text-${size}`,
    mt !== undefined && `mt-${mt}`,
    mb !== undefined && `mb-${mb}`,
    ml !== undefined && `ml-${ml}`,
    mr !== undefined && `mr-${mr}`,
  )

  return(
    <div className={baseClasses}>
      {children.map((el, i) => {
        return(
          <div className="flex justify-start content-center" key={i}>
            {(i !== children.length - 1) && (<span className={Color("text", textColor, textColorContrast)}>{el}</span>)}
            {(i === children.length - 1) && (<span className={Color("text", activeTextColor, activeTextColorContrast)}>{el}</span>)}
            {(i !== children.length - 1 && dividerIcon === undefined) && (<span className={`mr-1 ${Color("text", dividerColor, dividerColorContrast)}`}>/</span>)}
            {(i < children.length - 2 && dividerIcon !== undefined) && (<Icon icon={dividerIcon} size={size} mt={0.5} mr={1} color={dividerColor} contrast={dividerColorContrast} />)}
            {(i === children.length - 2 && lastDividerIcon === undefined && dividerIcon !== undefined) && (<Icon icon={dividerIcon} size={size} mt={0.5} mr={1} color={dividerColor} contrast={dividerColorContrast} />)}
            {(i === children.length - 2 && lastDividerIcon !== undefined) && (<Icon icon={lastDividerIcon} size={size} mt={0.5} mr={1} color={dividerColor} contrast={dividerColorContrast} />)}
          </div>
        )
      })}
    </div>
  )
}

Breadcrumb.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
  textColor: PropTypes.oneOf(Palletes),
  textColorContrast: PropTypes.oneOf(Contrast),
  activeTextColor: PropTypes.oneOf(Palletes),
  activeTextColorContrast: PropTypes.oneOf(Contrast),
  dividerColor: PropTypes.oneOf(Palletes),
  dividerColorContrast: PropTypes.oneOf(Contrast),
  dividerIcon: PropTypes.oneOf(Object.keys(Icons)),
  lastDividerIcon: PropTypes.oneOf(Object.keys(Icons)),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
}

Breadcrumb.defaultProps = {
  size: "sm",
  textColor: "gray",
  textColorContrast: 300,
  activeTextColor: "black",
  activeTextColorContrast: 700,
  dividerColor: "gray",
  dividerColorContrast: 300
}

Breadcrumb.Item = Item;

export default Breadcrumb;