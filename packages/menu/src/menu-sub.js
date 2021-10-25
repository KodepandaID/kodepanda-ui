import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Margin, Padding } from "@kodepanda-ui/classes";
import { Borders, Sizes, Spacings } from "@kodepanda-ui/types";
import { RoundedSize, ShadowSize } from "@kodepanda-ui/utils";

const MenuSub = ({ className, children, fixed, shadow, rounded,
  mx, my, mb, ml, mr, mt,
  px, py, pb, pl, pr, pt }) => {
  const wrapperClasses = cx(
    className !== undefined && className,
    !fixed && "relative",
    fixed && "fixed inset-x-0 top-0 z-50",
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

MenuSub.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  fixed: PropTypes.bool,
  ...Sizes,
  ...Borders,
  ...Spacings
}

MenuSub.defaultProps = {
  fixed: false
}

export {
  MenuSub
}
