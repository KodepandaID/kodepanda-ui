import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import { size } from "../../types";

const positions = {
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0" 
}

const BgImage = ({ width, position, src }) => {
  const baseClasses = cx(
    `w-${width}`,
    "absolute",
    position !== undefined && positions[position]
  )

  return(
    <div className={baseClasses}><img src={src} /></div>
  )
}

BgImage.propTypes = {
  ...size,
  position: PropTypes.oneOf(Object.keys(positions)),
  src: PropTypes.string
}

BgImage.defaultProps = {
  width: "auto"
}

export default BgImage;