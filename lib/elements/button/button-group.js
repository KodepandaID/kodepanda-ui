import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { ShadowSize } from "../../utils/shadow";
import { border } from "../../types";

const Group = ({ children, className, align, shadow }) => {
  const baseClasses = cx(
    "flex",
    `justify-${align}`,
    className !== undefined && className,
    shadow !== undefined && ShadowSize[shadow]
  )

  return(
    <div className={baseClasses}>
      {children}
    </div>
  )
}

Group.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  align: PropTypes.oneOf(["start", "center", "end"]),
  ...border,
}

Group.defaultProps = {
  align: "start"
}

export default Group;