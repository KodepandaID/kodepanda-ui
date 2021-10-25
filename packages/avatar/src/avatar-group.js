import React from "react";
import PropTypes from "prop-types";

const AvatarGroup = ({ children }) => {
  return(
    <div className="inline-flex">
      {children.map((el, i) => {
        return(
          <div key={i} className="-ml-2">{el}</div>
        )
      })}
    </div>
  )
}

AvatarGroup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}

export {
  AvatarGroup
}
