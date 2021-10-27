import React, { useRef } from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import "@zenbu-ui/utils/tailwind.css";

import { CollapseItem } from "./collapse-item";

import { Colors, Spacings } from "@zenbu-ui/types";
import { Color } from "@zenbu-ui/utils";

const Collapse = ({ children, color, colorContrast, colorHover, colorHoverContrast, visible,
  pl, pr }) => {
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
            <CollapseItem key={i} colorHover={colorHover} colorHoverContrast={colorHoverContrast} py={2} pl={pl} pr={pr} {...el.props} />
          )
        })
      ) : (
        <CollapseItem {...children.props} />
      )}
    </ul>
  )
}

Collapse.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  visible: PropTypes.bool,
  ...Colors,
  ...Spacings
}

Collapse.defaultProps = {
  visible: false
}

Collapse.List = CollapseItem;

export {
  Collapse,
  CollapseItem
}
