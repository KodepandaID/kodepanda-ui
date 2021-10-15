import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import { Margin } from "../../classes";
import { icons, spacing, text } from "../../types"; 

import Icon from "../icon/icon";

import { FontSize } from "../../utils/font";

const Item = ({ children, className, header, sub, textSize, icon, noBorder,
  mx, my, mt, mb, ml, mr }) => {
  const baseClasses = cx(
    className !== undefined && className,
    header !== undefined && "leading-none",
    FontSize[textSize],
    Margin(mx, my, mb, ml, mr, mt)
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
  noBorder: PropTypes.bool,
  ...icons,
  ...text,
  ...spacing
}

Item.defaultProps = {
  textSize: "sm"
}

export default Item;