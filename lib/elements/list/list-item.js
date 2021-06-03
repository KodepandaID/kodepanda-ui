import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { default as Icon } from "../icon/icon";

const textSizes = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-md",
  lg: "text-lg",
  xl: "text-xl"
}

const Item = ({ children, className, textSize, icon,
  mt, mb, ml, mr }) => {
  const baseClasses = cx(
    className !== undefined && className,
    mt !== undefined && `mt-${mt}`,
    mb !== undefined && `mb-${mb}`,
    ml !== undefined && `ml-${ml}`,
    mr !== undefined && `mr-${mr}`,
    textSizes[textSize]
  )

  return(
    <li className={baseClasses}>
      {icon !== undefined && (
        <span className="flex inline-flex gap-1">
          <Icon icon={icon} size={textSize} />
          {children}
        </span>
      )}

      {icon === undefined && children}
    </li>
  )
}

Item.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  textSize: PropTypes.oneOf(Object.keys(textSizes)),
  icon: PropTypes.oneOf(Object.keys(Icon.Solid)),
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
}

Item.defaultProps = {
  textSize: "sm"
}

export default Item;