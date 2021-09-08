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

const Item = ({ children, className, header, sub, textSize, icon, noBorder,
  mt, mb, ml, mr }) => {
  const baseClasses = cx(
    className !== undefined && className,
    mt !== undefined && `mt-${mt}`,
    mb !== undefined && `mb-${mb}`,
    ml !== undefined && `ml-${ml}`,
    mr !== undefined && `mr-${mr}`,
    textSizes[textSize],
    header !== undefined && "leading-none"
  )

  const iconClasses = cx(
    "flex",
    "inline-flex",
    "gap-1",
    (header !== undefined && !noBorder) && "border-b border-gray-200 mb-3",
  )

  return(
    <li className={baseClasses}>
      {icon !== undefined && (
        <span className={iconClasses}>
          <Icon icon={icon} size={header === undefined ? textSize : "sm"} />
          {header !== undefined && (
            <div className="mb-2">
              <p className="font-bold">{header}</p>
              <p className="font-light text-sm text-gray-500">{sub}</p>
            </div>
          )}
          {header === undefined && children}
        </span>
      )}

      {(icon === undefined && header !== undefined) && (
        <div className="mb-2">
          <p className="font-bold">{header}</p>
          <p className="font-light text-sm text-gray-500">{sub}</p>
        </div>
      )}
      {(icon === undefined && header === undefined) && children}
    </li>
  )
}

Item.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  header: PropTypes.string,
  sub: PropTypes.string,
  textSize: PropTypes.oneOf(Object.keys(textSizes)),
  icon: PropTypes.oneOf(Object.keys(Icon.Index)),
  noBorder: PropTypes.bool,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
}

Item.defaultProps = {
  textSize: "sm"
}

export default Item;