import React, { useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color, Contrast } from "../../utils/color";
import { RoundedSize } from "../../utils/rounded";
import { ShadowSize } from "../../utils/shadow";

import { default as Panel } from "./panel";
import { default as Icon } from "../icon/icon";

const Accordion = ({ children, className, border, shadow, defaultActiveIndex,
  color, colorContrast, textColor, textColorContrast, borderColor, borderColorContrast,
  rounded, expandIcon, icon, iconPosition,
  mx, my, mb, ml, mr, mt,}) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  const wrapperClasses = cx(
    className !== undefined && className,
    shadow !== undefined && ShadowSize[shadow],
    (mx !== undefined && mx >= 0) && `mx-${mx}`,
    (mx !== undefined && mx < 0) && `-mx${mx}`,
    (my !== undefined && my >= 0) && `my-${my}`,
    (my !== undefined && my < 0) && `-my${my}`,
    (mb !== undefined && mb >= 0) && `mb-${mb}`,
    (mb !== undefined && mb < 0) && `-mb${mb}`,
    (ml !== undefined && ml >= 0) && `ml-${ml}`,
    (ml !== undefined && ml < 0) && `-ml${ml}`,
    (mr !== undefined && mr >= 0) && `mr-${mr}`,
    (mr !== undefined && mr < 0) && `-mr${mr}`,
    (mt !== undefined && mt >= 0) && `mt-${mt}`,
    (mt !== undefined && mt < 0) && `-mt${mt}`,
  )

  const baseClasses = cx(
    "flex",
    "flex-col",
    "relative",
    Color("bg", color, colorContrast),
    border && "border",
    borderColor !== undefined && `${Color("border", borderColor, borderColorContrast === undefined ? 500 : borderColorContrast)}`,
    Color("text", textColor, textColorContrast),
    (rounded !== "none") && `rounded-t-${rounded} rounded-b-${rounded}`,
  )

  const generateProps = (props, index, totalElement) => {
    let newProps = new Object();

    if (props.bgHeaderColor === undefined) newProps.bgHeaderColor = color;
    if (props.bgHeaderColorContrast === undefined) newProps.bgHeaderColorContrast = colorContrast;
    if (props.color === undefined) newProps.color = "white";

    if (props.headerColor === undefined) newProps.headerColor = textColor;
    if (props.headerColorContrast === undefined) newProps.headerColorContrast = textColorContrast;

    if (rounded !== "none" && index === 0) {
      newProps.rounded = rounded;
      newProps.roundedPosition = "top";
    }
    if (rounded !== "none" && index === (totalElement - 1)) {
      newProps.rounded = rounded;
      newProps.roundedPosition = "bottom";
      newProps.lastElement = true;
    }

    if (border) {
      newProps.border = border;
      newProps.borderColor = borderColor;
      newProps.borderColorContrast = borderColorContrast;
    }

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
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  textColor: PropTypes.oneOf(Palletes),
  textColorContrast: PropTypes.oneOf(Contrast),
  defaultActiveIndex: PropTypes.number,
  border: PropTypes.bool,
  borderColor: PropTypes.oneOf(Palletes),
  borderColorContrast: PropTypes.oneOf(Contrast),
  rounded: PropTypes.oneOf(Object.keys(RoundedSize)),
  shadow: PropTypes.oneOf(Object.keys(ShadowSize)),
  expandIcon: PropTypes.bool,
  icon: PropTypes.oneOf(Object.keys(Icon.Index)),
  iconPosition: PropTypes.oneOf(["left", "right"]),
  mx: PropTypes.number,
  my: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
}

Accordion.defaultProps = {
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