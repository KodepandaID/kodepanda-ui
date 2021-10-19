import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import { Margin, Padding } from "../../classes";
import { size, spacing } from "../../types";

const Content = ({ children, width, height,
  mx, my, mb, ml, mr, mt,
  px, py, pb, pl, pr, pt }) => {
  const wrapperClassses = cx(
    `w-${width}`,
    height !== undefined && `h-${height}`,
    Margin(mx, my, mb, ml, mr, mt),
    Padding(px, py, pb, pl, pr, pt)
  )

  return(
    <div className={wrapperClassses}>{children}</div>
  )
}

Content.propTypes = {
  children: PropTypes.node,
  ...size,
  ...spacing
}

Content.defaultProps = {
  width: "max"
}

export default Content;