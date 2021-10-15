import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import { Margin, Padding } from "../../classes";
import { color, icons, spacing } from "../../types";

import { Color } from "../../utils/color";

import Icon from "../icon/icon";

const EmptyState = ({ className, description, icon, iconSize, image,
  iconColor, iconColorContrast, textColor, textColorContrast,
  mx, my, mt, mb, mr, ml,
  px, py, pb, pl, pr, pt }) => {
  const baseClasses = cx(
    className !== undefined && className,
    "m-auto",
    "grid",
    "justify-items-center",
    Margin(mx, my, mb, ml, mr, mt),
    Padding(px, py, pb, pl, pr, pt)
  )

  return(
    <div className={baseClasses}>
      {image === undefined ? (
        <Icon icon={icon} color={iconColor} colorContrast={iconColorContrast} height={iconSize} mb={2} />
      ) : image}
      {typeof description === "string" ? (
        <p className={Color("text", textColor, textColorContrast)}>{description}</p>
      ) : (description)}
    </div>
  )
}

EmptyState.propTypes = {
  className: PropTypes.string,
  description: PropTypes.node,
  image: PropTypes.element,
  ...color,
  ...icons,
  ...spacing
}

EmptyState.defaultProps = {
  description: "No Data",
  textColor: "gray",
  textColorContrast: 300,
  icon: "archive",
  iconSize: 10,
  iconColor: "gray",
  iconColorContrast: 300,
  py: 5
}

export default EmptyState;