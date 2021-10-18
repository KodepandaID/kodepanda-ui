import React, { useRef } from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import { Margin, Padding } from "../../classes";
import { border, size, spacing } from "../../types";

import { ShadowSize } from "../../utils/shadow";
import { RoundedSize } from "../../utils/rounded";

const Sub = ({ className, children, shadow, rounded,
  mx, my, mb, ml, mr, mt,
  px, py, pb, pl, pr, pt }) => {
  const wrapperClasses = cx(
    className !== undefined && className,
    "relative",
    "flex",
    "flex-col",
    shadow !== "none" && ShadowSize[shadow],
    rounded !== "none" && RoundedSize[rounded],
    Padding(px, py, pb, pl, pr, pt),
    Margin(mx, my, mb, ml, mr, mt)
  )

  return(
    <div className={wrapperClasses}>
      {children}
    </div>
  )
}

Sub.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  ...size,
  ...border,
  ...spacing
}

export default Sub;