import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

const shadows = {
  "sm": "shadow-sm",
  "md": "shadow-md",
  "lg": "shadow-lg",
  "xl": "shadow-xl",
  "2xl": "shadow-2xl" 
}

const Group = ({ children, className, align, shadow }) => {
  const baseClasses = cx(
    "flex",
    `justify-${align}`,
    className !== undefined && className,
    shadow !== undefined && shadows[shadow]
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
  align: PropTypes.oneOf(["start", "center", "end"]),
  shadow: PropTypes.oneOf(Object.keys(shadows)),
}

Group.defaultProps = {
  align: "start"
}

export default Group;