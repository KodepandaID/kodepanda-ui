import React, { useEffect, useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color, Contrast } from "../../utils/color";
import { RoundedSize } from "../../utils/rounded";

const Panel = ({ active, bar, simple, header, onChange,
  headerColor, headerColorContrast, border, borderColor, borderColorContrast,
  bgHeaderColor, bgHeaderColorContrast, bgHeaderActiveColor, bgHeaderActiveColorContrast, borderActiveColor, borderActiveColorContrast,
  rounded,
  px, py, pb, pl, pr, pt }) => {
  const wrapperClasses = cx(
    "relative",
    (!active || active && bgHeaderActiveColor === undefined) && Color("bg", bgHeaderColor, bgHeaderColorContrast),
    (active && bgHeaderActiveColor !== undefined) && Color("bg", bgHeaderActiveColor, bgHeaderActiveColorContrast),
    (active && rounded !== "none") && `rounded-t-${rounded}`,
    (border && active) && "border border-b-0",
    (border && !active || borderActiveColor === undefined) && Color("border", borderColor, borderColorContrast),
    (border && active && borderActiveColor !== undefined) && Color("border", borderActiveColor, borderActiveColorContrast),
    "cursor-pointer",
    active && "-mb-1"
  )

  const headerClasses = cx(
    active && "font-bold",
    active && Color("text", headerColor, headerColorContrast),
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
    <li className={wrapperClasses} onClick={() => {
      if (onChange !== undefined) onChange()
    }}>
      <div className={headerClasses}>{header}</div>
    </li>
  )
}

Panel.propTypes = {
  children: PropTypes.node,
  active: PropTypes.bool,
  bar: PropTypes.bool,
  simple: PropTypes.bool,
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element
  ]),
  headerColor: PropTypes.oneOf(Palletes),
  headerColorContrast: PropTypes.oneOf(Contrast),
  bgHeaderColor: PropTypes.oneOf(Palletes),
  bgHeaderColorContrast: PropTypes.oneOf(Contrast),
  bgHeaderActiveColor: PropTypes.oneOf(Palletes),
  bgHeaderActiveColorContrast: PropTypes.oneOf(Contrast),
  border: PropTypes.bool,
  borderColor: PropTypes.oneOf(Palletes),
  borderColorContrast: PropTypes.oneOf(Contrast),
  borderActiveColor: PropTypes.oneOf(Palletes),
  borderActiveColorContrast: PropTypes.oneOf(Contrast),
  rounded: PropTypes.oneOf(Object.keys(RoundedSize)),
  onChange: PropTypes.func,
  px: PropTypes.number,
  py: PropTypes.number,
  pb: PropTypes.number,
  pl: PropTypes.number,
  pr: PropTypes.number,
  pt: PropTypes.number,
}

Panel.defaultProps = {
  active: false,
  bar: false,
  simple: false,
  headerColor: "gray",
  headerColorContrast: 600,
  bgHeaderColor: "white",
  bgHeaderColorContrast: 700,
  border: true,
  borderColor: "gray",
  borderColorContrast: 300,
  rounded: "none",
  px: 6,
  py: 2
}

export default Panel;