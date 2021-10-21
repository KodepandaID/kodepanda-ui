import React, { useRef } from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import { color, spacing } from "../../types";

import Item from "../menu/item";

import { Color } from "../../utils/color";

const Collapse = ({ children, color, colorContrast, colorHover, colorHoverContrast, visible,
  py, pl, pr }) => {
  const node = useRef();

  const subMenuClasses = cx(
    "w-full",
    Color("bg", color, colorContrast),
    "overflow-hidden",
    "transition-all duration-700"
  )

  return(
    <ul ref={node} className={subMenuClasses} style={visible && node.current === undefined ? {maxHeight: "auto"} : {maxHeight: visible ? `${node.current.scrollHeight}px` : '0'}}>
      {children.length !== undefined ? (
        children.map((el, i) => {
          return(
            <Item key={i} colorHover={colorHover} colorHoverContrast={colorHoverContrast} py={2} pl={pl} pr={pr} {...el.props} />
          )
        })
      ) : (
        <Item {...children.props} />
      )}
    </ul>
  )
}

Collapse.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  visible: PropTypes.bool,
  ...color,
  ...spacing
}

Collapse.defaultProps = {
  visible: false
}

Collapse.List = Item;

export default Collapse;