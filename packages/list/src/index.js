import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import "tailwindcss/tailwind.css";

import { ListItem } from "./list-item";
import { ListNested } from "./list-nested";

import { Margin } from "@zenbu-ui/classes";
import { Spacings } from "@zenbu-ui/types";

const List = ({ children, className, type,
  mx, my, mt, mb, ml, mr }) => {
  const baseClasses = cx(
    className !== undefined && className,
    "list",
    "list-inside",
    `list-${type}`,
    Margin(mx, my, mb, ml, mr, mt)
  )

  return(
    <ol className={baseClasses}>
      {children}
    </ol>
  )
}

List.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.oneOf(["none", "disc", "decimal", "square", "roman"]),
  ...Spacings
}

List.defaultProps = {
  type: "none"
}

List.Item = ListItem;
List.List = ListNested;

export {
  List,
  ListItem,
  ListNested
}
