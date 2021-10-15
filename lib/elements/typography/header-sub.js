import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import { Margin } from "../../classes";
import { color, icons, spacing } from "../../types";

import Header from "./header";
import Icon from "../icon/icon";

import { Color } from "../../utils/color";

const Sub = ({ as, className, headerText, subText,  
  color, colorContrast,
  icon, iconPosition, 
  mx, my, mb, ml, mr, mt }) => {
  const baseClasses = cx(
    "flex",
    className !== undefined && className,
    Color("text", color, colorContrast),
    Margin(mx, my, mb, ml, mr, mt)
  )

  const subClasses = cx(
    iconPosition === "center" && "text-center",
    (as === "h1" || as === "h2" || as === "h3") && "text-lg",
    (as === "h4" || as === "h5" || as === "h6") && "text-sm",
    Color("text", color, colorContrast),
  )

  const wrapperIconClasses = cx(
    iconPosition === "right" ? "ml-5" : iconPosition === "center" ? "flex justify-center" : "mr-5"
  )
  
  const iconElement = (
    <div className={wrapperIconClasses}>
      <Icon icon={icon} size={as === "h1" || as === "h2" || as === "h3" ? "lg":"md"} color={color} colorContrast={colorContrast}  />
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
  className: PropTypes.string,
  ...color,
  ...icons,
  ...spacing
}

Sub.defaultProps = {
  iconPosition: "left",
  color: "gray",
  colorContrast: 500
}

export default Sub;