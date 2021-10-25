import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import { Colors, Icons } from "@kodepanda-ui/types";

import { Header } from "@kodepanda-ui/typography";
import { Index } from "@kodepanda-ui/icon";

import { Color } from "@kodepanda-ui/utils";

const marginSize = {
  "h1": "mt-8",
  "h2": "mt-7",
  "h3": "mt-6",
  "h4": "mt-5",
  "h5": "mt-4",
  "h6": "mt-3"
}

const DividerText = ({ as, text, textPosition, color, colorContrast, textColor, textColorContrast, icon }) => {
  const wrapperClasses = cx(
    "flex",
    textPosition === "left" && "justify-start",
    textPosition === "center" && "justify-center",
    textPosition === "right" && "justify-end",
    "gap-4"
  )

  const contentClasses = cx(
    "border-t",
    Color("border", color, colorContrast),
    marginSize[as],
    (textPosition === "left" || textPosition === "right") && "w-full",
    textPosition === "center" && "w-1/2"
  )

  return(
    <div className={wrapperClasses}>
      {textPosition !== "left" && (<span className={contentClasses}></span>)}
      {icon === undefined ? (
        <Header as={as} color={textColor} colorContrast={textColorContrast}>{text}</Header>
      ) : (
        <Header.Sub as={as} icon={icon} headerText={text} color={textColor} colorContrast={textColorContrast} />
      )}
      {textPosition !== "right" && (<span className={contentClasses}></span>)}
    </div>
  )
}

DividerText.propTypes = {
  as: PropTypes.oneOf(Object.keys(marginSize)),
  text: PropTypes.string,
  textPosition: PropTypes.oneOf(["left", "center", "right"]),
  icon: PropTypes.oneOf(Object.keys(Index)),
  ...Colors,
  ...Icons
}

DividerText.defaultProps = {
  color: "gray",
  colorContrast: 200,
  textColor: "gray",
  textColorContrast: 200,
  textPosition: "center",
  as: "h4"
}

export {
  DividerText
}