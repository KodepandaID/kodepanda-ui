import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Margin } from "@zenbu-ui/classes";
import { Colors, Spacings, Texts } from "@zenbu-ui/types";
import { Color, FontSize, FontWeight } from "@zenbu-ui/utils";

const Text = ({ children, className, color, colorContrast,
  textSize, textWeight, textAlign,
  mx, my, mb, ml, mr, mt }) => {
    const baseClasses = cx(
    className !== undefined && className,
    Color("text", color, colorContrast),
    textSize !== undefined && FontSize[textSize],
    textWeight !== undefined && FontWeight[textWeight],
    textAlign !== undefined && `text-${textAlign}`,
    Margin(mx, my, mb, ml, mr, mt)
  )

  return(
    <p className={baseClasses}>{children}</p>
  )
}

Text.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  ...Colors,
  ...Texts,
  ...Spacings
}

Text.defaultProps = {
  color: "black",
  colorContrast: 700,
  textSize: "sm"
}

export {
  Text
}
