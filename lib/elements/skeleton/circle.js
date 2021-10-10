import React from "react";
import PropTypes from "prop-types";

import Skeleton from "./skeleton";

import { Palletes, Contrast } from "../../utils/color";
import { Width, Height } from "../../utils/size";

const Circle = (props) => {
  return (
    <Skeleton width={props.size} height={props.size} rounded="full" {...props} />
  )
}

Circle.propTypes = {
  size: PropTypes.oneOf(Width),
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  mx: PropTypes.number,
  my: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
}

Circle.defaultProps = {
  size: 10,
}

export default Circle;