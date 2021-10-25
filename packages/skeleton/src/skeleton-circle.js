import React from "react";
import PropTypes from "prop-types";
import { Skeleton } from "./index";

import { Colors } from "@kodepanda-ui/types";
import { Width } from "@kodepanda-ui/utils";

const SkeletonCircle = (props) => {
  return (
    <Skeleton width={props.size} height={props.size} rounded="full" {...props} />
  )
}

SkeletonCircle.propTypes = {
  size: PropTypes.oneOf(Width),
  ...Colors
}

SkeletonCircle.defaultProps = {
  size: 10,
}

export {
  SkeletonCircle
}
