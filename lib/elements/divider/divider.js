import React from "react";
import cx from "clsx";
import { Margin } from "../../classes";
import { color, spacing } from "../../types";

import { Color } from "../../utils/color";

import Text from "./divider-text";

const Divider = ({ color, colorContrast, mx, my, mt, mb, ml, mr }) => {
  const baseClasses = cx(
    "border-t",
    Color("border", color, colorContrast),
    Margin(mx, my, mb, ml, mr, mt)
  )

  return(
    <div className={baseClasses}></div>
  )
}

Divider.propTypes = {
  ...color,
  ...spacing
}

Divider.defaultProps = {
  color: "gray",
  colorContrast: 200,
  mt: 1,
  mb: 1,
}

Divider.Text = Text;

export default Divider;