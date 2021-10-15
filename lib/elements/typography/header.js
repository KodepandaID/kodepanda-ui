import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import { Margin } from "../../classes";
import { color, spacing } from "../../types";

import Sub from "./header-sub";

import { Color } from "../../utils/color";

const Header = ({ as, children, className, color, colorContrast,
  mx, my, mb, ml, mr, mt }) => {
  const baseClasses = cx(
    className !== undefined && className,
    Color("text", color, colorContrast),
    Margin(mx, my, mb, ml, mr, mt)
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
  ...color,
  ...spacing
}

Header.defaultProps = {
  color: "gray",
  colorContrast: 500
}

Header.Sub = Sub;

export default Header;