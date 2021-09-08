import React, { useEffect, useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Contrast } from "../../utils/color";

import { default as Icon } from "../icon/icon";

const Rating = ({ defaultValue, count, heart, size, onChange,
  color, colorContrast,
  mt, mb, mr, ml }) => {
  const [icon, setIcon] = useState(heart ? "heart-solid" : "star-solid")
  const [hoverRate, setHoverRate] = useState(0);
  const [rate, setRate] = useState(defaultValue);

  if (heart) color = "red"

  const baseClasses = cx(
    "flex",
    "flex-row",
    (mt !== undefined && mt >= 0) && `mt-${mt}`,
    (mt !== undefined && mt < 0) && `-mt${mt}`,
    (mb !== undefined && mb >= 0) && `mb-${mb}`,
    (mb !== undefined && mb < 0) && `-mb${mb}`,
    (ml !== undefined && ml >= 0) && `ml-${ml}`,
    (ml !== undefined && ml < 0) && `-ml${ml}`,
    (mr !== undefined && mr >= 0) && `mr-${mr}`,
    (mr !== undefined && mr < 0) && `-mr${mr}`,
  )

  useEffect(() => {
    if (count < 1) throw new Error("Count cannot be less than 1")
  }, [])

  return(
    <div className={baseClasses}>
      {[...Array(count)].map((x, i) =>
        <div key={i+1} className="mr-1 cursor-pointer"
          onMouseOver={() => setHoverRate(i+1)}
          onMouseLeave={() => setHoverRate(0)}
          onClick={() => {
            if (rate === (i+1)) setRate(0)
            else setRate(i+1)
            
            if (onChange !== undefined) onChange(rate) 
          }}>
          <Icon className="transition duration-500" icon={icon} color={(rate > i|| hoverRate > i) ? color : "gray"} colorContrast={colorContrast} size={size} />
        </div>
      )}
    </div>
  )
}

Rating.propTypes = {
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xlg"]),
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  defaultValue: PropTypes.number,
  count: PropTypes.number,
  heart: PropTypes.bool,
  onChange: PropTypes.func,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
}

Rating.defaultProps = {
  color: "yellow",
  colorContrast: 400,
  hoverColor: "yellow",
  hoverColorContrast: 400,
  size: "sm",
  defaultValue: 0,
  count: 5,
  heart: false
}

export default Rating;