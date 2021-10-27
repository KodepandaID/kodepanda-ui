import React, { useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import "@zenbu-ui/utils/tailwind.css";

import { TabPanel } from "./tab-panel";

import { Padding } from "@zenbu-ui/classes";
import { Borders, Colors, Spacings } from "@zenbu-ui/types";
import { Color, RoundedSize } from "@zenbu-ui/utils";

const Tabs = ({ children, simple, bar, defaultActiveIndex,
  headerColor, headerColorContrast, headerColorActive, headerColorActiveContrast,
  bgContentColor, bgContentColorContrast, bgHeaderColor, bgHeaderColorContrast,
  bgHeaderColorActive, bgHeaderColorActiveContrast,
  border, borderContent, borderColor, borderColorContrast, borderColorActive, borderColorActiveContrast,
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
      Padding(px, py, pb, pl, pr, pt)
    )
  }

  const generateProps = (props) => {
    const newProps = new Object();

    if (props.bgHeaderColor === "white" && bgHeaderColor !== undefined) {
      newProps.bgHeaderColor = bgHeaderColor;
      newProps.bgHeaderColorContrast = bgHeaderColorContrast;
      
      if (bgHeaderColorActive === undefined) {
        newProps.bgHeaderColorActive = bgHeaderColor;
        newProps.bgHeaderColorActiveContrast = bgHeaderColorContrast;
      } else {
        newProps.bgHeaderColorActive = bgHeaderColorActive;
        newProps.bgHeaderColorActiveContrast = bgHeaderColorActiveContrast;
      }
    }

    if (props.headerColor === "gray" && headerColor !== undefined) {
      newProps.headerColor = headerColor;
      newProps.headerColorContrast = headerColorContrast;
    }

    if (props.headerColorActive === "gray" && headerColorActive !== undefined) {
      newProps.headerColorActive = headerColorActive;
      newProps.headerColorActiveContrast = headerColorActiveContrast;
    }

    if (props.borderColor === "gray" && borderColor !== "gray") {
      newProps.borderColor = borderColor;
      newProps.borderColorContrast = borderColorContrast;
    }

    if (simple && props.borderColorActive === undefined) {
      newProps.borderColorActive = borderColorActive;
      newProps.borderColorActiveContrast = borderColorActiveContrast;
    }

    return newProps
  }

  return(
    <div className="w-full relative">
      <div className={wrapperClasses}>
        <ul className="flex">
          {children.map((el, i) => {
            if (el.type.name === "TabPanel") {
              const newProps = generateProps(el.props)
              return(
              <TabPanel key={i} {...el.props} {...newProps}
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
  borderContent: PropTypes.bool,
  ...Borders,
  ...Colors,
  ...Spacings
}

Tabs.defaultProps = {
  simple: false,
  bar: false,
  defaultActiveIndex: 0,
  border: true,
  borderColor: "gray",
  borderColorContrast: 300,
  borderColorActive: "blue",
  borderColorActiveContrast: 700,
  borderContent: true,
  bgContentColor: "white",
  bgContentColorContrast: 400,
  rounded: "none",
  px: 6,
  py: 2
}

Tabs.Panel = TabPanel;

export {
  Tabs,
  TabPanel
}
