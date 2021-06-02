import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color } from "../../utils/color";

import { default as Text } from "./divider-text";

const Divider = ({ color }) => {
  const baseClasses = cx(
    "border-t",
    Color("border", color, 200)
  )

  return(
    <div className={baseClasses}></div>
  )
}

Divider.propTypes = {
  color: PropTypes.oneOf(Palletes)
}

Divider.defaultProps = {
  color: "gray"
}

Divider.Text = Text;

export default Divider;