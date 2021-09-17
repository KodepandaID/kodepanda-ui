import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color, Contrast } from "../../utils/color";
import { RoundedSize } from "../../utils/rounded";

const positions = {
  "left": "left-0",
  "right": "right-0",
  "top": "left-0",
  "bottom": "right-0",
}

const Tooltip = ({ children, title, color, colorContrast, titleColor, titleColorContrast, position, rounded }) => {
  const [show, setShow] = useState(false);
  const baseClasses = cx(
    "tooltip",
    "w-max",
    Color("bg", color, colorContrast),
    "absolute",
    "text-xs",
    Color("text", titleColor, titleColorContrast),
    "py-1 px-3",
  )

  const polygonClasses = cx(
    "w-full",
    "h-2",
    Color("text", color, colorContrast),
    "absolute",
    positions[position],
    "top-full",
  )

  const titleClasses = cx(
    "text-xs",
    Color("text", titleColor, titleColorContrast)
  )

  return(
    <div className="relative">
      <span className="inline relative" onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        <Transition
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
            <svg className={polygonClasses} x="0px" y="0px" viewBox="0 0 255 255"><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
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