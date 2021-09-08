import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color } from "../../utils/color";
import { default as Icon } from "../icon/icon";
import { default as Header } from "../typography/header";

const Text = ({ as, text, textPosition, color, icon }) => {
  const baseClasses = cx(
    "flex",
    "justify-center",
    "gap-4"
  )

  const marginSize = {
    "h1": "mt=8",
    "h2": "mt-7",
    "h3": "mt-6",
    "h4": "mt-5",
    "h5": "mt-4",
    "h6": "mt-3"
  }

  const borderClasses = cx(
    "border-t",
    Color("border", color, 200),
    marginSize[as]
  )

  return(
    <div className={baseClasses}>
      <span className={`${borderClasses} ${textPosition === "left" ? "w-16": textPosition === "center" ? "w-1/2":"w-full"}`}></span>
      {icon === undefined && (
        <Header as={as}>{text}</Header>
      )}
      {icon !== undefined && (
        <Header.Sub as={as} icon={icon} headerText={text} color={color} />
      )}
      <span className={`${borderClasses} ${textPosition === "right" ? "w-16":textPosition === "center" ? "w-1/2":"w-full"}`}></span>
    </div>
  )
}

Text.propTypes = {
  as: PropTypes.oneOf(["h1", "h2", "h3", "h4", "h5", "h6"]),
  text: PropTypes.string,
  textPosition: PropTypes.oneOf(["left", "center", "right"]),
  color: PropTypes.oneOf(Palletes),
  icon: PropTypes.oneOf(Object.keys(Icon.Index)),
}

Text.defaultProps = {
  color: "gray",
  as: "h4"
}

export default Text;