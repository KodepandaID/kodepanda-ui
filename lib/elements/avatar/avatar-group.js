import React from "react";
import PropTypes from "prop-types";

const Group = ({ children }) => {
  return(
    <div className="inline-flex">
      {children.map((el) => {
        return(
          <div className="-ml-2">{el}</div>
        )
      })}
    </div>
  )
}

Group.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element)
}

export default Group;