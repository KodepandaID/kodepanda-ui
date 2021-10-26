import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import "tailwindcss/tailwind.css";

import { Icon, Index } from "@zenbu-ui/icon";

import { Margin, Padding } from "@zenbu-ui/classes";
import { Colors, Icons, Spacings } from "@zenbu-ui/types";
import { Color } from "@zenbu-ui/utils";

const Empty = ({ className, description, icon, iconSize, image,
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

Empty.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.oneOf(Object.keys(Index)),
  description: PropTypes.node,
  image: PropTypes.element,
  ...Colors,
  ...Icons,
  ...Spacings
}

Empty.defaultProps = {
  description: "No Data",
  textColor: "gray",
  textColorContrast: 300,
  icon: "archive",
  iconSize: 10,
  iconColor: "gray",
  iconColorContrast: 300,
  py: 5
}

export {
  Empty
}
