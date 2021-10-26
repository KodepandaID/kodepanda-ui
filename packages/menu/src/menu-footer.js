import React, { useEffect, useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import "tailwindcss/tailwind.css";

import { Margin, Padding } from "@zenbu-ui/classes";
import { Borders, Colors, Sizes, Spacings } from "@zenbu-ui/types";
import {
  BorderPosition, BorderSize, BorderSizeNum, BorderType, 
  Color
 } from "@zenbu-ui/utils";

const MenuFooter = ({ className, children, width, height,
  widthSM, widthMD, widthLG, widthXL, width2XL,
  border, borderSize, borderStyle, borderPosition, borderColor, borderColorContrast,
  color, colorContrast, textColor, textColorContrast, textColorHover, textColorHoverContrast,
  mx, my, mb, ml, mr, mt,
  px, py, pb, pl, pr, pt }) => {
  const [menu, setMenu] = useState([]);

  const wrapperClasses = cx(
    className !== undefined && className,
    "relative",
    (widthSM === undefined && widthMD === undefined 
    && widthLG === undefined && widthXL === undefined
    && width2XL === undefined) && `w-${width}`,
    widthSM !== undefined && `sm:w-${widthSM}`,
    widthMD !== undefined && `md:w-${widthMD}`,
    widthLG !== undefined && `lg:w-${widthLG}`,
    widthXL !== undefined && `xl:w-${widthXL}`,
    width2XL !== undefined && `2xl:w-${width2XL}`,
    height !== undefined && `h-${height}`,
    "flex",
    "flex-wrap",
    "items-start",
    "justify-start",
    "space-x-16",
    "z-50",
    Color("bg", color, colorContrast),
    border && Color("border", borderColor, borderColorContrast),
    (border && borderPosition === undefined) && `${borderSize === undefined ? "border":BorderSize[borderSize]} ${BorderType[borderStyle]}`,
    (border && borderPosition !== undefined) && `${BorderPosition[borderPosition]}${BorderSizeNum[borderSize]} ${BorderType[borderStyle]}`,
    Padding(px, py, pb, pl, pr, pt),
    Margin(mx, my, mb, ml, mr, mt)
  )

  const textClasses = cx(
    Color("text", textColor, textColorContrast)
  )


  const listClasses = cx(
    "cursor-pointer",
    Color("text", textColor, textColorContrast),
    `hover:${Color("text", textColorHover, textColorHoverContrast)}`
  )

  useEffect(() => {
    if (children.length !== undefined) {
      children.map((c) => {
        if (c.type.name === "MenuItems" || c.type.name === "MenuContent") {
          setMenu((old) => [...old, c])
        }
      })
    } else {
      if (children.type.name === "MenuItems" || children.type.name === "MenuContent") {
        setMenu((old) => [...old, children])
      }
    }
  }, [])

  return(
    <div className={wrapperClasses}>
      {menu.map((el, i) => {
        return(
          <div className="flex flex-col space-y-2" key={i}>
            {el.props.title !== undefined && (
              <div className={`font-bold ${textClasses}`}>{el.props.title}</div>
            )}

            {el.props.children.length !== undefined ? (
              el.props.children.map((elc, j) => {
                return(
                  <div key={j} className={listClasses}>
                    {elc.props.children}
                  </div>
                )
              })
            ) : (el)}
          </div>
        )
      })}
    </div>
  )
}

MenuFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  ...Sizes,
  ...Borders,
  ...Colors,
  ...Spacings
}

MenuFooter.defaultProps = {
  width: "full",
  color: "blue",
  colorContrast: 600,
  textColor: "white",
  textColorContrast: 700,
  textColorHover: "gray",
  textColorHoverContrast: 200,
  py: 5,
  px: 5
}

export {
  MenuFooter
}
