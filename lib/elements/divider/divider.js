import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color } from "../../utils/color";

import { default as Text } from "./divider-text";

const Divider = ({ color, mt, mb, ml, mr }) => {
  const baseClasses = cx(
    "border-t",
    Color("border", color, 200),
    (mb !== undefined && mb >= 0) && `mb-${mb}`,
    (mb !== undefined && mb < 0) && `-mb${mb}`,
    (ml !== undefined && ml >= 0) && `ml-${ml}`,
    (ml !== undefined && ml < 0) && `-ml${ml}`,
    (mr !== undefined && mr >= 0) && `mr-${mr}`,
    (mr !== undefined && mr < 0) && `-mr${mr}`,
    (mt !== undefined && mt >= 0) && `mt-${mt}`,
    (mt !== undefined && mt < 0) && `-mt${mt}`,
  )

  return(
    <div className={baseClasses}></div>
  )
}

Divider.propTypes = {
  color: PropTypes.oneOf(Palletes),
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
}

Divider.defaultProps = {
  color: "gray",
  mt: 1,
  mb: 1,
}

Divider.Text = Text;

export default Divider;