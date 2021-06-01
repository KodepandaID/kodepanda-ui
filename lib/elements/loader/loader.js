import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color } from "../../utils/color";

const sizes = {
  "xs": "h-4 w-4",
  "sm": "h-7 w-7",
  "md": "h-10 w-10",
  "lg": "h-14 w-14",
  "xl": "h-20 w-20",
  "2xl": "h-24 w-24"
}

const Loader = ({ bgColor, loadingText, loadingSize, noFullscreen }) => {
  const baseClasses = cx(
    "flex",
    noFullscreen && "w-full h-full p-10",
    !noFullscreen && "w-screen h-screen",
    `${Color("bg", bgColor, 600)} bg-opacity-75`
  )
  
  return(
    <div className={baseClasses}>
      <div className="m-auto grid justify-items-center">
        <svg className={`animate-spin ${sizes[loadingSize]}`} viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"></circle>
          <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
        <b className={`mt-2 text-white text-${loadingSize}`}>{loadingText}</b>
      </div>
    </div>
  )
}

Loader.propTypes = {
  bgColor: PropTypes.oneOf(Palletes),
  loadingText: PropTypes.string,
  loadingSize: PropTypes.oneOf(Object.keys(sizes)),
  noFullscreen: PropTypes.bool
}

Loader.defaultProps = {
  bgColor: "black",
  loadingText: "Loading",
  loadingSize: "sm",
  noFullscreen: false
}

export default Loader;