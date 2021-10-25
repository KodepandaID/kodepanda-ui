import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Icon, Index } from "@kodepanda-ui/icon";

import { Margin } from "@kodepanda-ui/classes";
import { Icons, Spacings, Texts } from "@kodepanda-ui/types"; 
import { FontSize } from "@kodepanda-ui/utils";

const ListItem = ({ children, className, header, sub, textSize, icon, noBorder,
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

ListItem.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.oneOf(Object.keys(Index)),
  className: PropTypes.string,
  header: PropTypes.string,
  sub: PropTypes.string,
  noBorder: PropTypes.bool,
  ...Icons,
  ...Texts,
  ...Spacings
}

ListItem.defaultProps = {
  textSize: "sm"
}

export {
  ListItem
}
