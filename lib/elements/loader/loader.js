import React from "react";
import { Transition } from "@headlessui/react";
import cx from "clsx";
import PropTypes from "prop-types";
import { color } from "../../types";

import { Color } from "../../utils/color";

const sizes = {
  "xs": "h-4 w-4",
  "sm": "h-7 w-7",
  "md": "h-10 w-10",
  "lg": "h-14 w-14",
  "xl": "h-20 w-20",
  "2xl": "h-24 w-24"
}

const Loader = ({ color, colorContrast, loadingText, loadingSize, noFullscreen, visible }) => {
  const transitionClasses = cx(
    noFullscreen && "w-full h-full",
    !noFullscreen && "w-screen h-screen",
    "absolute",
  )

  const baseClasses = cx(
    "flex",
    "items-center",
    "justify-center",
    "align-middle",
    noFullscreen && "w-full h-full",
    !noFullscreen && "w-screen h-screen",
    `${Color("bg", color, colorContrast)} bg-opacity-30`,
    "bg-opacity-75",
    "transition-opacity",
  )
  
  return(
    <Transition
    className={transitionClasses}
    show={visible}
    appear={visible}
    enter="ease-out duration-300"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="ease-in duration-200"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
    >
      <div className={baseClasses}>
        <div className="m-auto grid justify-items-center">
          <svg className={`animate-spin ${sizes[loadingSize]}`} viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"></circle>
            <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          <b className={`mt-2 text-white text-${loadingSize}`}>{loadingText}</b>
        </div>
      </div>
    </Transition>
  )
}

Loader.propTypes = {
  loadingText: PropTypes.string,
  loadingSize: PropTypes.oneOf(Object.keys(sizes)),
  noFullscreen: PropTypes.bool,
  visible: PropTypes.bool,
  ...color,
}

Loader.defaultProps = {
  color: "black",
  colorContrast: 600,
  loadingText: "Loading",
  loadingSize: "sm",
  noFullscreen: false,
  visible: false
}

export default Loader;