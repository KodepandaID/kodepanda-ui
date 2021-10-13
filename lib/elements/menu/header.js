import React, { useRef } from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import { Margin, Padding } from "../../classes";
import { attribute, spacing } from "../../types";

const Header = ({ children, href, target,
  onClick,
  mx, my, mb, ml, mr, mt,
  px, py, pb, pl, pr, pt }) => {
  const node = useRef();

  const wrapperClasses = cx(
    "relative",
    (href !== undefined || onClick !== undefined) && "cursor-pointer",
    Padding(px, py, pb, pl, pr, pt),
    Margin(mx, my, mb, ml, mr, mt)
  )
  
  return(
    <div className={wrapperClasses} onClick={() => {
      if (href !== undefined) node.current.click()
      if (onClick !== undefined) onClick()
    }}>
      <a ref={node} className="hidden" href={href} target={target} />
      {children}
    </div>
  )
}

Header.propTypes = {
  children: PropTypes.node,
  ...attribute,
  onClick: PropTypes.func,
  ...spacing
}

Header.defaultProps = {
  target: "_self",
  px: 3,
  py: 1
}

export default Header;