import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import "@zenbu-ui/utils/tailwind.css";

import { Icon, Index } from "@zenbu-ui/icon";

import { Margin } from "@zenbu-ui/classes";
import { Colors, Icons, Spacings, Texts } from "@zenbu-ui/types";
import { Color } from "@zenbu-ui/utils";

const Statistic = ({ title, value, description, separator, precision, textSize,
  icon, preffix, suffix, iconColor, iconColorContrast,
  textColor, textColorContrast, titleColor, titleColorContrast,
  mx, my, mb, ml, mr, mt,}) => {
  const baseClasses = cx(
    "flex",
    "items-center",
    Margin(mx, my, mb, ml, mr, mt)
  )

  const titleClasses = cx(
    Color("text", titleColor, titleColorContrast),
    "text-sm"
  )

  const valueClasses = cx(
    Color("text", textColor, textColorContrast),
    `text-${textSize}`,
    "font-bold"
  )

  const precise = (x) => {
    return parseFloat(x).toFixed(precision);
  }

  return(
    <div className={baseClasses}>
      {icon !== undefined && (<Icon icon={icon} size="md" color={iconColor} contrast={iconColorContrast} mt={-0.5} mr={3} />)}
      <div className="block align-middle">
        {title !== undefined && (<div className={titleClasses}>{title}</div>)}
        {value !== undefined && (
          <>
            <div className={valueClasses}>
              {preffix !== undefined && (<span className="mr-1">{preffix}</span>)}
              {precision === undefined && (value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator))}
              {precision !== undefined && (precise(value).replace(/\B(?=(\d{3})+(?!\d))/g, separator))}
              {suffix !== undefined && (<span className="ml-1">{suffix}</span>)}
            </div>
            {description !== undefined && (description)}
          </>
        )}
      </div>
    </div>
  )
}

Statistic.propTypes = {
  icon: PropTypes.oneOf(Object.keys(Index)),
  title: PropTypes.node,
  value: PropTypes.number,
  description: PropTypes.node,
  separator: PropTypes.string,
  precision: PropTypes.number,
  preffix: PropTypes.node,
  suffix: PropTypes.string,
  ...Colors,
  ...Texts,
  ...Icons,
  ...Spacings
}

Statistic.defaultProps = {
  textSize: "xl",
  separator: ",",
  titleColor: "gray",
  titleColorContrast: 400,
  textColor: "black",
  textColorContrast: 700,
  iconColor: "black",
  iconColorContrast: 700
}

export {
  Statistic
}
