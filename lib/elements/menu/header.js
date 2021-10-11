import React, { useRef } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

const Header = ({ children, href, target,
  onClick,
  mx, my, mb, ml, mr, mt,
  px, py }) => {
  const node = useRef();

  const wrapperClasses = cx(
    "relative",
    (href !== undefined || onClick !== undefined) && "cursor-pointer",
    (mx !== undefined && mx >= 0) && `mx-${mx}`,
    (mx !== undefined && mx < 0) && `-mx${mx}`,
    (my !== undefined && my >= 0) && `my-${my}`,
    (my !== undefined && my < 0) && `-my${my}`,
    (mb !== undefined && mb >= 0) && `mb-${mb}`,
    (mb !== undefined && mb < 0) && `-mb${mb}`,
    (ml !== undefined && ml >= 0) && `ml-${ml}`,
    (ml !== undefined && ml < 0) && `-ml${ml}`,
    (mr !== undefined && mr >= 0) && `mr-${mr}`,
    (mr !== undefined && mr < 0) && `-mr${mr}`,
    (mt !== undefined && mt >= 0) && `mt-${mt}`,
    (mt !== undefined && mt < 0) && `-mt${mt}`,
    (px !== undefined && px >= 0) && `px-${px}`,
    (px !== undefined && px < 0) && `-px${px}`,
    (py !== undefined && py >= 0) && `py-${py}`,
    (py !== undefined && py < 0) && `-py${py}`,
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
  href: PropTypes.string,
  target: PropTypes.oneOf(["_blank", "_self"]),
  onClick: PropTypes.func,
  mx: PropTypes.number,
  my: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
  px: PropTypes.number,
  py: PropTypes.number
}

Header.defaultProps = {
  target: "_self",
  px: 3,
  py: 1
}

export default Header;