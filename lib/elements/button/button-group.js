import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

const Group = ({ children, className, align }) => {
  const baseClasses = cx(
    "flex",
    `justify-${align}`,
    className !== undefined && className,
  )

  return(
    <div className={baseClasses}>
      {children}
    </div>
  )
}

Group.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),
  className: PropTypes.string,
  align: PropTypes.oneOf(["start", "center", "end"])
}

Group.defaultProps = {
  align: "start"
}

export default Group;