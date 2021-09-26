import React, { useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import Radio from "../radio";

const Group = ({ children, onChange, defaultValue, inline,
  mt, mb, ml, mr }) => {
  const [value, setValue] = useState(defaultValue)

  const wrapperClasses = cx(
    "w-max",
    "relative",
    inline && "flex flex-row items-center",
    (mb !== undefined && mb >= 0) && `mb-${mb}`,
    (mb !== undefined && mb < 0) && `-mb${mb}`,
    (ml !== undefined && ml >= 0) && `ml-${ml}`,
    (ml !== undefined && ml < 0) && `-ml${ml}`,
    (mr !== undefined && mr >= 0) && `mr-${mr}`,
    (mr !== undefined && mr < 0) && `-mr${mr}`,
    (mt !== undefined && mt >= 0) && `mt-${mt}`,
    (mt !== undefined && mt < 0) && `-mt${mt}`,
  )

  return(
    <div className={wrapperClasses}>
      {children.map((el, i) => {
        if (el.type.name === "Radio") {
          return(
            <Radio key={i} {...el.props} checked={el.props.value === value} onChange={(val) => {
              if (onChange !== undefined) {
                setValue(val)
                onChange(val)
              }
            }} />
          )
        }
      })}
    </div>
  )
}

Group.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
  defaultValue: PropTypes.any,
  inline: PropTypes.bool,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
}

Group.defaultProps = {
  inline: true,
}

export default Group;