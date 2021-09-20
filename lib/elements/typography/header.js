import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import Sub from "./header-sub";

import { Palletes, Color, Contrast } from "../../utils/color";

const Header = ({ as, children, className, color, colorContrast, mb, ml, mr, mt }) => {
  const baseClasses = cx(
    className !== undefined && className,
    (mb !== undefined && mb >= 0) && `mb-${mb}`,
    (mb !== undefined && mb < 0) && `-mb${mb}`,
    (ml !== undefined && ml >= 0) && `ml-${ml}`,
    (ml !== undefined && ml < 0) && `-ml${ml}`,
    (mr !== undefined && mr >= 0) && `mr-${mr}`,
    (mr !== undefined && mr < 0) && `-mr${mr}`,
    (mt !== undefined && mt >= 0) && `mt-${mt}`,
    (mt !== undefined && mt < 0) && `-mt${mt}`,
    Color("text", color, colorContrast)
  )

  if (as === "h1") {
    return(<h1 className={`text-7xl ${baseClasses}`}>{children}</h1>)
  } else if (as === "h2") {
    return(<h2 className={`text-6xl ${baseClasses}`}>{children}</h2>)
  } else if (as === "h3") {
    return(<h3 className={`text-5xl ${baseClasses}`}>{children}</h3>)
  } else if (as === "h4") {
    return(<h4 className={`text-4xl ${baseClasses}`}>{children}</h4>)
  } else if (as === "h5") {
    return(<h5 className={`text-3xl ${baseClasses}`}>{children}</h5>)
  } else if (as === "h6") {
    return(<h6 className={`text-2xl ${baseClasses}`}>{children}</h6>)
  }
}

Header.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
}

Header.defaultProps = {
  color: "gray",
  colorContrast: 500
}

Header.Sub = Sub;

export default Header;