import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import { Skeleton } from "./index";

import { Borders, Colors, Sizes, Spacings } from "@zenbu-ui/types";

const SkeletonStack = (props) => {
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

SkeletonStack.propTypes = {
  children: PropTypes.node,
  total: PropTypes.number,
  ...Sizes,
  ...Borders,
  ...Colors,
  ...Spacings
}

SkeletonStack.defaultProps = {
  total: 1
}

export {
  SkeletonStack
}
