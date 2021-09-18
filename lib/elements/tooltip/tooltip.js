import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color, Contrast } from "../../utils/color";
import { RoundedSize } from "../../utils/rounded";

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
    (position === "left" || position === "right") ? "relative flex items-center" : "inline relative"
  )

  const transitionClasses = cx(
    (position === "left" || position === "right") && "flex items-center",
  )

  const baseClasses = cx(
    (position !== "left" && position !== "right") && "tooltip",
    position === "left" && "tooltip-left",
    position === "right" && "tooltip-right",
    (position === "left" || position === "right") && "flex items-center",
    position.includes("bottom") ? "top-full" : (position === "left" || position === "right") ? "" : "bottom-7",
    "w-max",
    Color("bg", color, colorContrast),
    "absolute",
    "text-xs",
    Color("text", titleColor, titleColorContrast),
    rounded !== "none" && RoundedSize[rounded],
    "py-1 px-3",
  )

  const polygonClasses = cx(
    "w-2",
    "h-2",
    Color("bg", color, colorContrast),
    "absolute",
    positions[position],
    "transform rotate-45"
  )

  const titleClasses = cx(
    "text-xs",
    Color("text", titleColor, titleColorContrast)
  )

  return(
    <div className="relative">
      <span className={wrapperClasses} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
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
          <span className={baseClasses}>
            <span className={titleClasses}>{title}</span>
            {position === "left" && (<div className="absolute -right-1 w-2 h-2 transform rotate-45 bg-black"></div>)}
            {position === "right" && (<div className="absolute -left-1 w-2 h-2 transform rotate-45 bg-black"></div>)}
            {(position !== "left" && position !== "right") && (<div className={polygonClasses}></div>)}
          </span>
        </Transition>
        {children}
      </span>
    </div>
  )
}

Tooltip.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  titleColor: PropTypes.oneOf(Palletes),
  titleColorContrast: PropTypes.oneOf(Contrast),
  position: PropTypes.oneOf(Object.keys(positions)),
  Rounded: PropTypes.oneOf(Object.keys(RoundedSize))
}

Tooltip.defaultProps = {
  color: "black",
  colorContrast: 700,
  titleColor: "white",
  titleColorContrast: 700,
  position: "top",
  rounded: "none"
}

export default Tooltip;