import React, { useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import { Margin, Padding } from "../../classes";
import { border, color, icons, spacing } from "../../types";

import Panel from "./panel";

import { Color } from "../../utils/color";
import { ShadowSize } from "../../utils/shadow";

const Accordion = ({ children, className, simple, separate, border, shadow, defaultActiveIndex,
  color, colorContrast, textColor, textColorContrast, borderColor, borderColorContrast,
  rounded, expandIcon, icon, iconPosition,
  mx, my, mb, ml, mr, mt,
  px, py, pb, pl, pr, pt }) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  const wrapperClasses = cx(
    className !== undefined && className,
    (shadow !== undefined && !simple) && ShadowSize[shadow],
    Margin(mx, my, mb, ml, mr, mt),
    Padding(px, py, pb, pl, pr, pt)
  )

  const baseClasses = cx(
    "flex",
    "flex-col",
    "relative",
    (!simple && !separate) && Color("bg", color, colorContrast),
    (border && !simple && !separate) && "border",
    (borderColor !== undefined && !simple && !separate) && `${Color("border", borderColor, borderColorContrast === undefined ? 500 : borderColorContrast)}`,
    Color("text", textColor, textColorContrast),
    (rounded !== "none" && !simple) && `rounded-t-${rounded} rounded-b-${rounded}`,
  )

  const generateProps = (props, index, totalElement) => {
    let newProps = new Object();

    if (!simple) {
      if (props.bgHeaderColor === undefined) newProps.bgHeaderColor = color;
      if (props.bgHeaderColorContrast === undefined) newProps.bgHeaderColorContrast = colorContrast;
      if (props.color === undefined) newProps.color = "white";

      if (rounded !== "none" && index === 0) {
        newProps.rounded = rounded;
        if (!separate) newProps.roundedPosition = "top";
      }
      if (rounded !== "none" && index === (totalElement - 1)) {
        newProps.rounded = rounded;
        if (!separate) newProps.roundedPosition = "bottom";
        newProps.lastElement = true;
      }
    }
    newProps.simple = simple;
    newProps.separate = separate;

    if (border) {
      newProps.border = border;
      newProps.borderColor = borderColor;
      newProps.borderColorContrast = borderColorContrast;
    }

    if (props.headerColor === undefined) newProps.headerColor = textColor;
    if (props.headerColorContrast === undefined) newProps.headerColorContrast = textColorContrast;

    if (expandIcon === true) {
      newProps.expandIcon = expandIcon;
      newProps.icon = icon;
      newProps.iconPosition = iconPosition;
    }

    return newProps
  }

  return(
    <div className={wrapperClasses}>
      <ul className={baseClasses}>
        {children.map((el, index) => {
          const props = generateProps(el.props, index, children.length)
          if (el.type.name === "Panel") return(<Panel key={index} {...el.props} {...props} active={index === activeIndex} onChange={() => setActiveIndex(index)} />)
        })}
      </ul>
    </div>
  )
}

Accordion.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  simple: PropTypes.bool,
  separate: PropTypes.bool,
  ...color,
  ...border,
  defaultActiveIndex: PropTypes.number,
  expandIcon: PropTypes.bool,
  ...icons,
  ...spacing,
}

Accordion.defaultProps = {
  simple: false,
  separate: false,
  color: "gray",
  colorContrast: 200,
  textColor: "black",
  textColorContrast: 700,
  border: true,
  borderColor: "gray",
  borderColorContrast: 300,
  rounded: "md",
  expandIcon: true,
  icon: "chevron-down",
  iconPosition: "right",
}

Accordion.Panel = Panel;

export default Accordion;