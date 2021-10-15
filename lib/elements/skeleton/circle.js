import React from "react";
import PropTypes from "prop-types";

import Skeleton from "./skeleton";

import { Width } from "../../utils/size";
import { color } from "../../types";

const Circle = (props) => {
  return (
    <Skeleton width={props.size} height={props.size} rounded="full" {...props} />
  )
}

Circle.propTypes = {
  size: PropTypes.oneOf(Width),
  ...color
}

Circle.defaultProps = {
  size: 10,
}

export default Circle;