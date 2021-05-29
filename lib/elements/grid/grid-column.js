import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

const widthSizes = {
  1: "1/12",
  2: "1/6",
  3: "1/4",
  4: "1/3",
  5: "5/12",
  6: "2/5",
  7: "1/2",
  8: "2/3",
  9: "3/4",
  10: "5/6",
  11: "11/12",
  12: "full"
}

const Column = ({ children, className, width,
  screenSM, screenMD, screenLG, screenXL, screen2XL,
  px, py, pb, pl, pr, pt }) => {
  const baseClasses = cx(
    className !== undefined && className,
    px !== undefined && `px-${px}`,
    py !== undefined && `py-${py}`,
    pb !== undefined && `pb-${pb}`,
    pl !== undefined && `pl-${pl}`,
    pr !== undefined && `pr-${pr}`,
    pt !== undefined && `pt-${pt}`,
    `w-${typeof width === "number" ? widthSizes[width]:width}`,
    screenSM !== undefined && `sm:${typeof screenSM === "number" ? widthSizes[screenSM]:screenSM}`,
    screenMD !== undefined && `sm:${typeof screenMD === "number" ? widthSizes[screenMD]:screenMD}`,
    screenLG !== undefined && `sm:${typeof screenLG === "number" ? widthSizes[screenLG]:screenLG}`,
    screenXL !== undefined && `sm:${typeof screenXL === "number" ? widthSizes[screenXL]:screenXL}`,
    screen2XL !== undefined && `sm:${typeof screen2XL === "number" ? widthSizes[screen2XL]:screen2XL}`,
  )
  
  return(
    <div className={baseClasses}>{children}</div>
  )
}

Column.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]),
  className: PropTypes.string,
  px: PropTypes.number,
  py: PropTypes.number,
  pb: PropTypes.number,
  pl: PropTypes.number,
  pr: PropTypes.number,
  pt: PropTypes.number,
  width: PropTypes.oneOfType([
    PropTypes.oneOf(["1/5", "1/4", "1/3", "2/5", "1/2", "3/5", "2/3", "3/4", "4/5", "full"]),
    PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
  ]),
  screenSM: PropTypes.oneOfType([
    PropTypes.oneOf(["1/5", "1/4", "1/3", "2/5", "1/2", "3/5", "2/3", "3/4", "4/5", "full"]),
    PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
  ]),
  screenMD: PropTypes.oneOfType([
    PropTypes.oneOf(["1/5", "1/4", "1/3", "2/5", "1/2", "3/5", "2/3", "3/4", "4/5", "full"]),
    PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
  ]),
  screenLG: PropTypes.oneOfType([
    PropTypes.oneOf(["1/5", "1/4", "1/3", "2/5", "1/2", "3/5", "2/3", "3/4", "4/5", "full"]),
    PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
  ]),
  screenXL: PropTypes.oneOfType([
    PropTypes.oneOf(["1/5", "1/4", "1/3", "2/5", "1/2", "3/5", "2/3", "3/4", "4/5", "full"]),
    PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
  ]),
  screen2XL: PropTypes.oneOfType([
    PropTypes.oneOf(["1/5", "1/4", "1/3", "2/5", "1/2", "3/5", "2/3", "3/4", "4/5", "full"]),
    PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
  ]),
}

Column.defaultProps = {
  width: "auto"
}

export default Column;