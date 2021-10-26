import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Icon, Index } from "@zenbu-ui/icon";

import { Margin } from "@zenbu-ui/classes";
import { Colors, Icons, Spacings } from "@zenbu-ui/types";
import { Color } from "@zenbu-ui/utils";

const HeaderSub = ({ as, className, headerText, subText,  
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

  const Header = (children) => {
    if (as === "h1") {
      return(<h1 className="text-7xl">{children}</h1>)
    } else if (as === "h2") {
      return(<h2 className="text-6xl">{children}</h2>)
    } else if (as === "h3") {
      return(<h3 className="text-5xl">{children}</h3>)
    } else if (as === "h4") {
      return(<h4 className="text-4xl">{children}</h4>)
    } else if (as === "h5") {
      return(<h5 className="text-3xl">{children}</h5>)
    } else if (as === "h6") {
      return(<h6 className="text-2xl">{children}</h6>)
    }
  }

  return(
    <div className={baseClasses}>
      {(icon !== undefined && iconPosition === "left") && iconElement}
      <div>
        {(icon !== undefined && iconPosition === "center") && iconElement}
        <div>
          {Header(headerText)}
          <p className={subClasses}>{subText}</p>
        </div>
      </div>
      {(icon !== undefined && iconPosition === "right") && iconElement}
    </div>
  )
}

HeaderSub.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  headerText: PropTypes.string,
  subText: PropTypes.string,
  icon: PropTypes.oneOf(Object.keys(Index)),
  className: PropTypes.string,
  ...Colors,
  ...Icons,
  ...Spacings
}

HeaderSub.defaultProps = {
  iconPosition: "left",
  color: "gray",
  colorContrast: 500
}

export {
  HeaderSub
}
