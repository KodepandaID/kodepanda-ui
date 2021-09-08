import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color, Contrast } from "../../utils/color";

import { default as Icon } from "../icon/icon";

const EmptyState = ({ className, description, icon, iconSize, image,
  iconColor, iconColorContrast, textColor, textColorContrast,
  mt, mb, mr, ml }) => {
  const baseClasses = cx(
    className !== undefined && className,
    "m-auto",
    "grid",
    "justify-items-center",
    (mb !== undefined && mb >= 0) && `mb-${mb}`,
    (mb !== undefined && mb < 0) && `-mb${mb}`,
    (ml !== undefined && ml >= 0) && `ml-${ml}`,
    (ml !== undefined && ml < 0) && `-ml${ml}`,
    (mr !== undefined && mr >= 0) && `mr-${mr}`,
    (mr !== undefined && mr < 0) && `-mr${mr}`,
    (mt !== undefined && mt >= 0) && `mt-${mt}`,
    (mt !== undefined && mt < 0) && `-mt${mt}`,
    "py-5"
  )

  return(
    <div className={baseClasses}>
      {image === undefined ? (
        <Icon icon={icon} color={iconColor} colorContrast={iconColorContrast} size={iconSize} mb={2} />
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
  textColor: PropTypes.oneOf(Palletes),
  textColorContrast: PropTypes.oneOf(Contrast),
  icon: PropTypes.oneOf(Object.keys(Icon.Index)),
  iconSize: PropTypes.oneOf(["xs", "sm", "md", "lg", "xlg"]),
  iconColor: PropTypes.oneOf(Palletes),
  iconColorContrast: PropTypes.oneOf(Contrast),
  image: PropTypes.element,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
}

EmptyState.defaultProps = {
  description: "No Data",
  textColor: "gray",
  textColorContrast: 300,
  icon: "archive",
  iconSize: "md",
  iconColor: "gray",
  iconColorContrast: 300
}

export default EmptyState;