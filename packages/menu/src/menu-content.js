import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Margin, Padding } from "@kodepanda-ui/classes";
import { Sizes, Spacings } from "@kodepanda-ui/types";

const MenuContent = ({ children, width, height,
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

MenuContent.propTypes = {
  children: PropTypes.node,
  ...Sizes,
  ...Spacings
}

MenuContent.defaultProps = {
  width: "max"
}

export {
  MenuContent
}
