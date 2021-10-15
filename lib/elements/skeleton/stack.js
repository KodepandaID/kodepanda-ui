import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import { border, color, size, spacing } from "../../types";

import Skeleton from "./skeleton";

const Stack = (props) => {
  const wrapperClasses = cx(
    "flex",
    "flex-col",
    "items-start",
    "space-y-2"
  )

  return(
    <div className={wrapperClasses}>
      {props.children !== undefined ? (
        props.children
      ) : (
        Array.from({length: props.total}, (e, i) => {
          return(<Skeleton key={i} {...props} />)
        })
      )}
    </div>
  )
}

Stack.propTypes = {
  children: PropTypes.node,
  total: PropTypes.number,
  ...size,
  ...border,
  ...color,
  ...spacing
}

Stack.defaultProps = {
  total: 1
}

export default Stack;