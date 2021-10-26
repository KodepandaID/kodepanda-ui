import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Sizes } from "@zenbu-ui/types"

const positions = {
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0" 
}

const BoxImage = ({ width, position, src }) => {
  const baseClasses = cx(
    `w-${width}`,
    "absolute",
    position !== undefined && positions[position]
  )

  return(
    <div className={baseClasses}><img src={src} /></div>
  )
}

BoxImage.propTypes = {
  ...Sizes,
  position: PropTypes.oneOf(Object.keys(positions)),
  src: PropTypes.string
}

BoxImage.defaultProps = {
  width: "auto"
}

export {
  BoxImage
}
