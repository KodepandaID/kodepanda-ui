import React, { useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Icon, Index } from "@zenbu-ui/icon"
import { Collapse } from "@zenbu-ui/collapse";

import { Padding } from "@zenbu-ui/classes";
import { Borders, Colors, Icons, Spacings } from "@zenbu-ui/types";
import { Color } from "@zenbu-ui/utils";

const MenuCollapse = ({ className, children, content, icon, iconSize, active,
  colorHover, colorHoverContrast, iconColor, iconColorContrast,
  colorActive, colorActiveContrast, textColor, textColorContrast, textColorHover, textColorHoverContrast,
  collapseColor, collapseColorContrast, collapseColorHover, collapseColorHoverContrast,
  px, py, pb, pl, pr, pt }) => {
  const [open, setOpen] = useState(active);
  
  if (colorActive === undefined && colorHover !== undefined) {
    colorActive = colorHover;
    colorActiveContrast = colorHoverContrast;
  }

  const wrapperClasses = cx(
    className !== undefined && className,
    (open && colorActive !== undefined) && Color("bg", colorActive, colorActiveContrast),
    colorHover !== undefined && `hover:${Color("bg", colorHover, colorHoverContrast)}`,
    textColor !== undefined && Color("text", textColor, textColorContrast),
    textColorHover !== undefined && `hover:${Color("text", textColorHover, textColorHoverContrast)}`,
    "cursor-pointer",
    py !== undefined && `py-${py}`
  )

  const baseClasses = cx(
    "flex",
    "flex-row",
    "items-center",
    px !== undefined && `px-${px}`
  )

  return(
    <li className={wrapperClasses}>
      <div className={baseClasses} onClick={() => setOpen(!open)}>
        {icon !== undefined && (<Icon icon={icon} height={iconSize} mt={-0.5} mr={content === undefined ? undefined : 2} />)}
        <span>{content}</span>
        <span className={`absolute right-2 transform transition-transform duration-500 ${open && "rotate-180"}`}><Icon color={iconColor} colorContrast={iconColorContrast} icon="chevron-down-solid" size="sm" /></span>
      </div>
      <div className={open ? "mt-4" : ""}>
        <Collapse color={collapseColor} colorContrast={collapseColorContrast}
        colorHover={collapseColorHover} colorHoverContrast={collapseColorHoverContrast}
        py={py} pl={(px*3)-1} pr={px}
        {...children.props} visible={open} />
      </div>
    </li>
  )
}

MenuCollapse.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  icon: PropTypes.oneOf(Object.keys(Index)),
  content: PropTypes.node,
  ...Icons,
  ...Colors,
  ...Borders,
  ...Spacings
}

MenuCollapse.defaultProps = {
  active: false,
  disabled: false,
  iconSize: 5,
  py: 4
}

export {
  MenuCollapse
}
