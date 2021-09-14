import React, { useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color, Contrast } from "../../utils/color";
import { RoundedSize } from "../../utils/rounded";

import { default as Panel } from "./panel";

const Tabs = ({ children, simple, bar, defaultActiveIndex,
  headerColor, headerColorContrast, headerActiveColor, headerActiveColorContrast,
  bgContentColor, bgContentColorContrast, bgHeaderColor, bgHeaderColorContrast,
  bgHeaderActiveColor, bgHeaderActiveColorContrast,
  border, borderContent, borderColor, borderColorContrast, borderActiveColor, borderActiveColorContrast,
  rounded,
  px, py, pb, pl, pr, pt }) => {
  const [activeIndex, setActiveIndex] = useState(defaultActiveIndex);

  const wrapperClasses = cx(
    (border && !simple && !bar) && "border-b",
    simple && "border-b-2",
    ((border && !bar) || simple) && Color("border", borderColor, borderColorContrast),
  )

  const contentClasses = (i) => {
    return cx(
      "flex",
      Color("bg", bgContentColor, bgContentColorContrast),
      (borderContent && !simple && !bar && (activeIndex === i)) && "border border-t-0",
      (borderContent && bar && (activeIndex === i)) && "border",
      (borderContent && !simple && (activeIndex === i)) && Color("border", borderColor, borderColorContrast),
      (rounded !== "none" && !bar) && `rounded-b-${rounded}`,
      (rounded !== "none" && bar) && RoundedSize[rounded],
      bar && "mt-3",
      (px !== undefined && px >= 0) && `px-${px}`,
      (px !== undefined && px < 0) && `-px${px}`,
      (py !== undefined && py >= 0) && `py-${py}`,
      (py !== undefined && py < 0) && `-py${py}`,
      (pb !== undefined && pb >= 0) && `pb-${pb}`,
      (pb !== undefined && pb < 0) && `-pb${pb}`,
      (pl !== undefined && pl >= 0) && `pl-${pl}`,
      (pl !== undefined && pl < 0) && `-pl${pl}`,
      (pr !== undefined && pr >= 0) && `pr-${pr}`,
      (pr !== undefined && pr < 0) && `-pr${pr}`,
      (pt !== undefined && pt >= 0) && `pt-${pt}`,
      (pt !== undefined && pt < 0) && `-pt${pt}`
    )
  }

  const generateProps = (props) => {
    const newProps = new Object();

    if (props.bgHeaderColor === "white" && bgHeaderColor !== undefined) {
      newProps.bgHeaderColor = bgHeaderColor;
      newProps.bgHeaderColorContrast = bgHeaderColorContrast;
      
      if (bgHeaderActiveColor === undefined) {
        newProps.bgHeaderActiveColor = bgHeaderColor;
        newProps.bgHeaderActiveColorContrast = bgHeaderColorContrast;
      } else {
        newProps.bgHeaderActiveColor = bgHeaderActiveColor;
        newProps.bgHeaderActiveColorContrast = bgHeaderActiveColorContrast;
      }
    }

    if (props.headerColor === "gray" && headerColor !== undefined) {
      newProps.headerColor = headerColor;
      newProps.headerColorContrast = headerColorContrast;
    }

    if (props.headerActiveColor === "gray" && headerActiveColor !== undefined) {
      newProps.headerActiveColor = headerActiveColor;
      newProps.headerActiveColorContrast = headerActiveColorContrast;
    }

    if (props.borderColor === "gray" && borderColor !== "gray") {
      newProps.borderColor = borderColor;
      newProps.borderColorContrast = borderColorContrast;
    }

    if (simple && props.borderActiveColor === undefined) {
      newProps.borderActiveColor = borderActiveColor;
      newProps.borderActiveColorContrast = borderActiveColorContrast;
    }

    return newProps
  }

  return(
    <div className="w-full relative">
      <div className={wrapperClasses}>
        <ul className="flex">
          {children.map((el, i) => {
            if (el.type.name === "Panel") {
              const newProps = generateProps(el.props)
              return(
              <Panel key={i} {...el.props} {...newProps}
              active={i === activeIndex} 
              simple={simple} bar={bar}
              rounded={rounded}
              onChange={() => setActiveIndex(i)} />)
            }
          })}
        </ul>
      </div>
      <div className="w-full relative">
        {children.map((el, i) => {
          return(
            activeIndex === i && (<div className={contentClasses(i)} key={i}>{el.props.children}</div>)
          )
        })}
      </div>
    </div>
  )
}

Tabs.propTypes = {
  children: PropTypes.node,
  simple: PropTypes.bool,
  bar: PropTypes.bool,
  defaultActiveIndex: PropTypes.number,
  border: PropTypes.bool,
  borderColor: PropTypes.oneOf(Palletes),
  borderColorContrast: PropTypes.oneOf(Contrast),
  borderActiveColor: PropTypes.oneOf(Palletes),
  borderActiveColorContrast: PropTypes.oneOf(Contrast),
  borderContent: PropTypes.bool,
  headerColor: PropTypes.oneOf(Palletes),
  headerColorContrast: PropTypes.oneOf(Contrast),
  headerActiveColor: PropTypes.oneOf(Palletes),
  headerActiveColorContrast: PropTypes.oneOf(Contrast),
  bgHeaderColor: PropTypes.oneOf(Palletes),
  bgHeaderColorContrast: PropTypes.oneOf(Contrast),
  bgHeaderActiveColor: PropTypes.oneOf(Palletes),
  bgHeaderActiveColorContrast: PropTypes.oneOf(Contrast),
  bgContentColor: PropTypes.oneOf(Palletes),
  bgContentColorContrast: PropTypes.oneOf(Contrast),
  rounded: PropTypes.oneOf(Object.keys(RoundedSize)),
  px: PropTypes.number,
  py: PropTypes.number,
  pb: PropTypes.number,
  pl: PropTypes.number,
  pr: PropTypes.number,
  pt: PropTypes.number,
}

Tabs.defaultProps = {
  simple: false,
  bar: false,
  defaultActiveIndex: 0,
  border: true,
  borderColor: "gray",
  borderColorContrast: 300,
  borderActiveColor: "blue",
  borderActiveColorContrast: 700,
  borderContent: true,
  bgContentColor: "white",
  bgContentColorContrast: 400,
  rounded: "none",
  px: 6,
  py: 2
}

Tabs.Panel = Panel;

export default Tabs;