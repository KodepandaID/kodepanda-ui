import React from "react";
import cx from "clsx";
import "tailwindcss/tailwind.css";

import { DividerText } from "./divider-text";

import { Margin } from "@kodepanda-ui/classes";
import { Colors, Spacings } from "@kodepanda-ui/types";
import { Color } from "@kodepanda-ui/utils";

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
  ...Colors,
  ...Spacings
}

Divider.defaultProps = {
  color: "gray",
  colorContrast: 200,
  mt: 1,
  mb: 1,
}

Divider.Text = DividerText;

export {
  Divider,
  DividerText
}
