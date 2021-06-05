import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { default as Header } from "./header";
import { default as Icon } from "../icon/icon";
import { Palletes, Color, Contrast } from "../../utils/color";

const Sub = ({ as, className, color, colorContrast, headerText, subText, icon, iconPosition, mb, ml, mr, mt }) => {
  const baseClasses = cx(
    "flex",
    className !== undefined && className,
    mb !== undefined && `mb-${mb}`,
    ml !== undefined && `ml-${ml}`,
    mr !== undefined && `mr-${mr}`,
    mt !== undefined && `mt-${mt}`,
    Color("text", color, colorContrast)
  )

  const subClasses = cx(
    iconPosition === "center" && "text-center",
    (as === "h1" || as === "h2" || as === "h3") && "text-lg",
    (as === "h4" || as === "h5" || as === "h6") && "text-sm",
    "text-gray-500"
  )
  
  const iconElement = (
    <div className={iconPosition === "right" ? "ml-5" : iconPosition === "center" ? "flex justify-center" : "mr-5"}>
      <Icon icon={icon} size={as === "h1" || as === "h2" || as === "h3" ? "lg":"md"} />
    </div>
  )

  return(
    <div className={baseClasses}>
      {(icon !== undefined && iconPosition === "left") && iconElement}
      <div>
        {(icon !== undefined && iconPosition === "center") && iconElement}
        <div>
          <Header as={as}>{headerText}</Header>
          <p className={subClasses}>{subText}</p>
        </div>
      </div>
      {(icon !== undefined && iconPosition === "right") && iconElement}
    </div>
  )
}

Sub.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  headerText: PropTypes.string,
  subText: PropTypes.string,
  icon: PropTypes.oneOf(Object.keys(Icon.Solid)),
  iconPosition: PropTypes.oneOf(["left", "center", "right"]),
  className: PropTypes.string,
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
}

Sub.defaultProps = {
  iconPosition: "left",
  color: "gray",
  colorContrast: 500
}

export default Sub;