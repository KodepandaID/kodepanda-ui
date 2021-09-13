import React from "react";
import { Transition } from "@headlessui/react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color, Contrast } from "../../utils/color";
import { RoundedSize, RoundedPosition } from "../../utils/rounded";

import { default as Icon } from "../icon/icon";

const Panel = ({ children, simple, separate, header, active, onChange, lastElement, border, borderColor, borderColorContrast,
  bgHeaderColor, bgHeaderColorContrast, color, colorContrast,
  headerColor, headerColorContrast, contentColor, contentColorContrast,
  rounded, roundedPosition, expandIcon, icon, iconPosition,
  px, py, pb, pl, pr, pt }) => {
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
    (px !== undefined && px >= 0) && `px-${px}`,
    (px !== undefined && px < 0) && `-px${px}`,
    (py !== undefined && py >= 0) && `py-${py}`,
    (py !== undefined && py < 0) && `-py${py}`,
    (pb !== undefined && pb >= 0) && `pb-${pb}`,
    (pb !== undefined && pb < 0) && `-pb${pb}`,
    (pl !== undefined && pl >= 0) && `pl-${pl}`,
    (pl !== undefined && pl < 0) && `-pl${pl}`,
    (pr !== undefined && pr >= 0) && `pr-${pr}`,
    (pr !== undefined && pr < 0) && `-pr${pr}`,
    (pt !== undefined && pt >= 0) && `pt-${pt}`,
    (pt !== undefined && pt < 0) && `-pt${pt}`
  )

  const contentClasses = cx(
    Color("bg", color, colorContrast),
    Color("text", contentColor, contentColorContrast),
    (border && separate) && "border border-t-0",
    (border && separate) && Color("border", borderColor, borderColorContrast),
    "text-sm",
    "transition",
    "duration-700",
    "ease-in-out",
    (lastElement && rounded !== undefined || rounded !== undefined && separate) && `rounded-b-${rounded}`,
    (px !== undefined && px >= 0) && `px-${px}`,
    (px !== undefined && px < 0) && `-px${px}`,
    (py !== undefined && py >= 0) && `py-${py}`,
    (py !== undefined && py < 0) && `-py${py}`,
    (pb !== undefined && pb >= 0) && `pb-${pb}`,
    (pb !== undefined && pb < 0) && `-pb${pb}`,
    (pl !== undefined && pl >= 0) && `pl-${pl}`,
    (pl !== undefined && pl < 0) && `-pl${pl}`,
    (pr !== undefined && pr >= 0) && `pr-${pr}`,
    (pr !== undefined && pr < 0) && `-pr${pr}`,
    (pt !== undefined && pt >= 0) && `pt-${pt}`,
    (pt !== undefined && pt < 0) && `-pt${pt}`
  )

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
      <Transition
      show={active}
      appear={active}
      enter="ease-out duration-300"
      enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      enterTo="opacity-100 translate-y-0 sm:scale-100"
      leave="ease-in duration-200"
      leaveFrom="opacity-100 translate-y-0 sm:scale-100"
      leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      >
        <div className={contentClasses}>{children}</div>
      </Transition>
    </li>
  )
}

Panel.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  simple: PropTypes.bool,
  separate: PropTypes.bool,
  header: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string
  ]),
  bgHeaderColor: PropTypes.oneOf(Palletes),
  bgHeaderColorContrast: PropTypes.oneOf(Contrast),
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  headerColor: PropTypes.oneOf(Palletes),
  headerColorContrast: PropTypes.oneOf(Contrast),
  contentColor: PropTypes.oneOf(Palletes),
  contentColorContrast: PropTypes.oneOf(Contrast),
  border: PropTypes.bool,
  borderColor: PropTypes.oneOf(Palletes),
  borderColorContrast: PropTypes.oneOf(Contrast),
  rounded: PropTypes.oneOf(Object.keys(RoundedSize)),
  roundedPosition: PropTypes.oneOf(Object.keys(RoundedPosition)),
  lastElement: PropTypes.bool,
  expandIcon: PropTypes.bool,
  icon: PropTypes.oneOf(Object.keys(Icon.Index)),
  iconPosition: PropTypes.oneOf(["left", "right"]),
  onChange: PropTypes.func,
  px: PropTypes.number,
  py: PropTypes.number,
  pb: PropTypes.number,
  pl: PropTypes.number,
  pr: PropTypes.number,
  pt: PropTypes.number,
}

Panel.defaultProps = {
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

export default Panel;