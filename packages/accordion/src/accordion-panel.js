import React, { useRef } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Icon, Index } from "@zenbu-ui/icon";

import { Padding } from "@zenbu-ui/classes";
import { Borders, Colors, Icons, Spacings } from "@zenbu-ui/types";
import { Color, RoundedSize, RoundedPosition } from "@zenbu-ui/utils";

const AccordionPanel = ({ children, simple, separate, header, active, onChange, lastElement, border, borderColor, borderColorContrast,
  bgHeaderColor, bgHeaderColorContrast, color, colorContrast,
  headerColor, headerColorContrast, contentColor, contentColorContrast,
  rounded, roundedPosition, expandIcon, icon, iconPosition,
  px, py, pb, pl, pr, pt }) => {
  const node = useRef();

  if (simple) {
    px = 0;
    pr = 3;
  }

  const baseClasses = cx(
    Color("bg", bgHeaderColor, bgHeaderColorContrast),
    Color("text", headerColor, headerColorContrast),
    (rounded !== undefined && roundedPosition === undefined) && RoundedSize[rounded],
    roundedPosition !== undefined && `${RoundedPosition[roundedPosition]}-${rounded}`,
    separate && "mb-2",
  )

  const headerClasses = cx(
    "flex",
    "flex-row",
    "items-center",
    "font-bold",
    "cursor-pointer",
    "transition",
    "duration-700",
    "ease-in-out",
    (border && !separate) && "border-b",
    (border && separate) && "border",
    border && Color("border", borderColor, borderColorContrast),
    (rounded !== undefined && roundedPosition === undefined && separate && active) && `rounded-t-${rounded}`,
    (rounded !== undefined && roundedPosition === undefined && separate && !active) && RoundedSize[rounded],
    Padding(px, py, pb, pl, pr, pt)
  )

  const contentClasses = cx(
    "relative",
    Color("bg", color, colorContrast),
    Color("text", contentColor, contentColorContrast),
    (border && separate && active) && "border border-t-0",
    (border && separate && active) && Color("border", borderColor, borderColorContrast),
    "text-sm",
    "overflow-hidden",
    "transition-all duration-700",
    (lastElement && rounded !== undefined || rounded !== undefined && separate) && `rounded-b-${rounded}`,
  )

  const contentPaddingClasses = Padding(px, py, pb, pl, pr, pt)

  return(
    <li className={baseClasses} onClick={() => onChange()}>
      <div className={headerClasses}>
        {(expandIcon && iconPosition === "left") && (
          <div className={`transform transition-transform duration-500 ${active && "rotate-180"}`}><Icon icon={icon} size="sm" /></div>
        )}
        <span className={`${(expandIcon && iconPosition === "left") && "ml-2"}`}>{header}</span>
        {(expandIcon && iconPosition === "right") && (
          <div className={`absolute right-3 transform transition-transform duration-500 ${active && "rotate-180"}`}><Icon icon={icon} size="sm" /></div>
        )}
      </div>
      <div ref={node} className={contentClasses} style={active && node.current === undefined ? {maxHeight: "auto"} : {maxHeight: active ? `${node.current.scrollHeight}px` : '0'}}>
        <div className={contentPaddingClasses}>{children}</div>
      </div>
    </li>
  )
}

AccordionPanel.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.oneOf(Object.keys(Index)),
  active: PropTypes.bool,
  simple: PropTypes.bool,
  separate: PropTypes.bool,
  header: PropTypes.node,
  ...Colors,
  ...Borders,
  lastElement: PropTypes.bool,
  expandIcon: PropTypes.bool,
  ...Icons,
  onChange: PropTypes.func,
 ...Spacings,
}

AccordionPanel.defaultProps = {
  simple: false,
  separate: false,
  colorContrast: 500,
  contentColor: "black",
  contentColorContrast: 700,
  border: false,
  lastElement: false,
  px: 3,
  py: 2
}

export {
  AccordionPanel
}
