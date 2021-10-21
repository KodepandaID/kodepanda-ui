import React, { useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import { Padding } from "../../classes";
import { border, color, icons, spacing } from "../../types";

import Icon from "../icon/icon";
import { default as CollapseList } from "../collapse/collapse";

import { Color } from "../../utils/color";

const Collapse = ({ className, children, content, icon, iconSize, active,
  colorHover, colorHoverContrast, iconColor, iconColorContrast,
  colorActive, colorActiveContrast,
  collapseColor, collapseColorContrast, collapseColorHover, collapseColorHoverContrast,
  px, py, pb, pl, pr, pt }) => {
  const [open, setOpen] = useState(active);
  
  if (colorActive === undefined && colorHover !== undefined) {
    colorActive = colorHover;
    colorActiveContrast = colorHoverContrast;
  }

  const wrapperClasses = cx(
    className !== undefined && className,
    (open && colorActive !== undefined) && Color("bg", colorActive, colorActiveContrast)
  )

  const baseClasses = cx(
    "flex",
    "flex-row",
    "items-center",
    Padding(px, py, pb, pl, pr, pt)
  )

  return(
    <li className={wrapperClasses}>
      <div className={baseClasses} onClick={() => setOpen(!open)}>
        {icon !== undefined && (<Icon icon={icon} height={iconSize} mt={-0.5} mr={content === undefined ? undefined : 2} />)}
        <span>{content}</span>
        <span className={`absolute right-2 transform transition-transform duration-500 ${open && "rotate-180"}`}><Icon color={iconColor} colorContrast={iconColorContrast} icon="chevron-down-solid" size="sm" /></span>
      </div>
      <CollapseList color={collapseColor} colorContrast={collapseColorContrast}
      colorHover={collapseColorHover} colorHoverContrast={collapseColorHoverContrast}
      py={py} pl={(px*3)-1} pr={px}
      {...children.props} visible={open} />
    </li>
  )
}

Collapse.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  content: PropTypes.node,
  ...icons,
  ...color,
  ...border,
  ...spacing
}

Collapse.defaultProps = {
  active: false,
  disabled: false,
  iconSize: 5
}

export default Collapse;