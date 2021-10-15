import React  from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import { Padding } from "../../classes";
import { border, color, spacing } from "../../types";

import { Color } from "../../utils/color";
import { RoundedSize } from "../../utils/rounded";

const Panel = ({ active, bar, simple, header, onChange,
  headerColor, headerColorContrast, headerColorActive, headerColorActiveContrast, border, borderColor, borderColorContrast,
  bgHeaderColor, bgHeaderColorContrast, bgHeaderColorActive, bgHeaderColorActiveContrast, borderColorActive, borderColorActiveContrast,
  rounded,
  px, py, pb, pl, pr, pt }) => {
  let wrapperClasses = "";
  if (!bar) {
    wrapperClasses = cx(
      "relative",
      (!active || active && bgHeaderColorActive === undefined) && Color("bg", bgHeaderColor, bgHeaderColorContrast),
      (active && bgHeaderColorActive !== undefined) && Color("bg", bgHeaderColorActive, bgHeaderColorActiveContrast),
      (active && rounded !== "none") && `rounded-t-${rounded}`,
      (border && active && !simple) && "border border-b-0",
      (simple && active) && "border-b-2",
      (border && !active && !simple || borderColorActive === undefined && !simple) && Color("border", borderColor, borderColorContrast),
      (border && active && borderColorActive !== undefined) && Color("border", borderColorActive, borderColorActiveContrast),
      simple && Color("border", borderColorActive, borderColorActiveContrast),
      "cursor-pointer",
      (active && !simple) && "-mb-1",
      (active && simple) && "-mb-0.5"
    )
  } else {
    wrapperClasses = cx(
      "relative",
      rounded !== "none" && RoundedSize[rounded],
      active && Color("bg", bgHeaderColorActive, bgHeaderColorActiveContrast),
      !active && Color("bg", bgHeaderColor, bgHeaderColorContrast),
      "cursor-pointer",
      "mr-3"
    )
  }

  const headerClasses = cx(
    active && "font-bold",
    active ? Color("text", headerColorActive, headerColorActiveContrast) : Color("text", headerColor, headerColorContrast),
    typeof header === "string" && "text-sm",
    Padding(px, py, pb, pl, pr, pt)
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
  header: PropTypes.node,
  onChange: PropTypes.func,
  ...border,
  ...color,
  ...spacing
}

Panel.defaultProps = {
  active: false,
  bar: false,
  simple: false,
  headerColor: "gray",
  headerColorContrast: 600,
  headerColorActive: "gray",
  headerColorActiveContrast: 600,
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