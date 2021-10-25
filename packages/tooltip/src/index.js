import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import cx from "clsx";
import PropTypes from "prop-types";
import "tailwindcss/tailwind.css";

import { Borders, Colors } from "@kodepanda-ui/types";
import { Color, RoundedSize } from "@kodepanda-ui/utils";

const positions = {
  "top-left": "left-2",
  "top-right": "right-2",
  "top": "left-1/2",
  "bottom": "-top-1 left-1/2",
  "bottom-left": "-top-1 left-2",
  "bottom-right": "-top-1 right-2",
  "left": "",
  "right": ""
}

const Tooltip = ({ children, title, color, colorContrast, titleColor, titleColorContrast, position, rounded }) => {
  const [show, setShow] = useState(false);

  const wrapperClasses = cx(
    (position === "left" || position === "right") ? "relative flex items-center" : "relative"
  )

  const transitionClasses = cx(
    (position === "left" || position === "right") && "flex items-center",
  )

  const baseClasses = cx(
    (position !== "left" && position !== "right") && "tooltip",
    position === "left" && "tooltip-left",
    position === "right" && "tooltip-right",
    (position === "left" || position === "right") && "flex items-center",
    position.includes("bottom") ? "top-full" : (position === "left" || position === "right") ? "" : "bottom-full",
    "w-max",
    Color("bg", color, colorContrast),
    "absolute",
    "text-xs",
    Color("text", titleColor, titleColorContrast),
    rounded !== "none" && RoundedSize[rounded],
    "py-1 px-3",
  )

  const triangleClasses = cx(
    "w-2",
    "h-2",
    Color("bg", color, colorContrast),
    "absolute",
    (position !== "left" && position !== "right") && positions[position],
    position === "left" && "-right-1",
    position === "right" && "-left-1",
    "transform rotate-45"
  )

  const titleClasses = cx(
    "text-xs",
    Color("text", titleColor, titleColorContrast)
  )

  return(
    <div className="w-max relative">
      <div className={wrapperClasses} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        <Transition
        className={transitionClasses}
        show={show}
        appear={show}
        enter="ease-in-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        >
          <div className={baseClasses}>
            <span className={titleClasses}>{title}</span>
            {position === "left" && (<div className={triangleClasses}></div>)}
            {position === "right" && (<div className={triangleClasses}></div>)}
            {(position !== "left" && position !== "right") && (
              <div className={triangleClasses}></div>
            )}
          </div>
        </Transition>
        {children}
      </div>
    </div>
  )
}

Tooltip.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  position: PropTypes.oneOf(Object.keys(positions)),
  ...Colors,
  ...Borders
}

Tooltip.defaultProps = {
  color: "black",
  colorContrast: 700,
  titleColor: "white",
  titleColorContrast: 700,
  position: "top",
  rounded: "none"
}

export {
  Tooltip
}
