import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color, Contrast } from "../../utils/color";

import Icon from "../icon/icon";

const Statistic = ({ title, value, description, separator, precision, textSize,
  icon, preffix, suffix, iconColor, iconColorContrast,
  textColor, textColorContrast, titleColor, titleColorContrast,
  mb, ml, mr, mt,}) => {
  const baseClasses = cx(
    "flex",
    "items-center",
    (mb !== undefined && mb >= 0) && `mb-${mb}`,
    (mb !== undefined && mb < 0) && `-mb${mb}`,
    (ml !== undefined && ml >= 0) && `ml-${ml}`,
    (ml !== undefined && ml < 0) && `-ml${ml}`,
    (mr !== undefined && mr >= 0) && `mr-${mr}`,
    (mr !== undefined && mr < 0) && `-mr${mr}`,
    (mt !== undefined && mt >= 0) && `mt-${mt}`
    (mt !== undefined && mt < 0) && `-mt${mt}`
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
  title: PropTypes.node,
  value: PropTypes.number,
  description: PropTypes.node,
  separator: PropTypes.string,
  titleColor: PropTypes.oneOf(Palletes),
  titleColorContrast: PropTypes.oneOf(Contrast),
  textColor: PropTypes.oneOf(Palletes),
  textColorContrast: PropTypes.oneOf(Contrast),
  textSize: PropTypes.oneOf(["xs", "sm", "lg", "xl", "2xl", "3xl"]),
  precision: PropTypes.number,
  icon: PropTypes.oneOf(Object.keys(Icon.Index)),
  iconColor: PropTypes.oneOf(Palletes),
  iconColorContrast: PropTypes.oneOf(Contrast),
  preffix: PropTypes.node,
  suffix: PropTypes.string,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
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

export default Statistic;