import React, { useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Radio } from "../radio";

import { Margin } from "@kodepanda-ui/classes";
import { Spacings } from "@kodepanda-ui/types";

const RadioGroup = ({ children, onChange, defaultValue, inline,
  mx, my, mt, mb, ml, mr }) => {
  const [value, setValue] = useState(defaultValue)

  const wrapperClasses = cx(
    "w-max",
    "relative",
    inline && "flex flex-row items-center",
    Margin(mx, my, mb, ml, mr, mt)
  )

  return(
    <div className={wrapperClasses}>
      {children.map((el, i) => {
        if (el.type.name === "Radio") {
          return(
            <Radio key={i} {...el.props} checked={el.props.value === value} onChange={(val) => {
              setValue(val)
              if (onChange !== undefined) onChange(val)
            }} />
          )
        }
      })}
    </div>
  )
}

RadioGroup.propTypes = {
  children: PropTypes.node,
  onChange: PropTypes.func,
  defaultValue: PropTypes.any,
  inline: PropTypes.bool,
  ...Spacings
}

RadioGroup.defaultProps = {
  inline: true,
}

export {
  RadioGroup
}
