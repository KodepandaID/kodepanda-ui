import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Contrast } from "../../utils/color";
import { Width, Height } from "../../utils/size";
import { RoundedSize } from "../../utils/rounded";

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
  width: PropTypes.oneOf(Width),
  height: PropTypes.oneOf(Height),
  rounded: PropTypes.oneOf(Object.keys(RoundedSize)),
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  total: PropTypes.number,
  mx: PropTypes.number,
  my: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
}

Stack.defaultProps = {
  total: 1
}

export default Stack;