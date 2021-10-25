import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Borders } from "@kodepanda-ui/types";
import { ShadowSize } from "@kodepanda-ui/utils";

const ButtonGroup = ({ children, className, align, shadow }) => {
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

ButtonGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  align: PropTypes.oneOf(["start", "center", "end"]),
  ...Borders,
}

ButtonGroup.defaultProps = {
  align: "start"
}

export {
  ButtonGroup
}
