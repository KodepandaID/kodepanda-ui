import React, { useEffect, useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { MenuItem } from "./menu-item";
import { MenuCollapse } from "./menu-collapse";

import { Margin, Padding } from "@zenbu-ui/classes";
import { Borders, Colors, Sizes, Spacings, Texts } from "@zenbu-ui/types";
import {
  BorderPosition, BorderSize, BorderSizeNum, BorderType,
  Color,
  RoundedSize,
  ShadowSize
 } from "@zenbu-ui/utils";

const MenuSidebar = ({ className, children, width, shadow, rounded,
  border, borderSize, borderStyle, borderPosition, borderColor, borderColorContrast,
  color, colorContrast, textColor, textColorContrast, spaceX, spaceY,
  mx, my, mb, ml, mr, mt,
  px, py, pb, pl, pr, pt }) => {
  const [menu, setMenu] = useState([]);

  const wrapperClasses = cx(
    className !== undefined && className,
    `w-${width}`,
    "flex",
    "flex-col",
    "h-screen",
    Color("bg", color, colorContrast),
    (border && borderPosition === undefined) && `${borderSize === undefined ? "border":BorderSize[borderSize]} ${BorderType[borderStyle]}`,
    (border && borderPosition !== undefined) && `${BorderPosition[borderPosition]}${BorderSizeNum[borderSize]} ${BorderType[borderStyle]}`,
    border && borderColor !== undefined && `${Color("border", borderColor, borderColorContrast === undefined ? 500 : borderColorContrast)}`,
    shadow !== "none" && ShadowSize[shadow],
    rounded !== "none" && RoundedSize[rounded],
    Margin(mx, my, mb, ml, mr, mt),
    Padding(px, py, pb, pl, pr, pt)
  )

  const menuClasses = cx(
    "overflow-y-auto",
    "overflow-x-hidden",
    "flex-grow",
    spaceX !== undefined && `space-x-${spaceX}`,
    spaceY !== undefined && `space-y-${spaceY}`,
  )

  const textClasses = cx(
    "text-sm",
    Color("text", textColor, textColorContrast),
    "font-light",
    "tracking-wide",
    "pt-2"
  )

  useEffect(() => {
    if (children.length !== undefined) {
      children.map((c) => {
        setMenu((old) => [...old, c])
      })
    } else setMenu((old) => [...old, children])
  }, [])

  return(
    <div className={wrapperClasses}>
      <div className={menuClasses}>
        {menu.map((el, i) => {
          if (el.type.name === "MenuItems") {
            return(
              <ul className="flex flex-col space-y-1" key={i}>
                {el.props.title !== undefined && (
                  <li className={`${textClasses} px-${el.props.px}`}>
                    {el.props.title}
                  </li>
                )}

                {el.props.children.length !== undefined ? (
                  el.props.children.map((elc, j) => {
                    if (elc.type.name === "MenuItem") {
                      return(
                        <MenuItem key={`${i}-${j}`} className={(elc.props.children === undefined && elc.props.icon !== undefined) ? "justify-center" : ""} {...elc.props} 
                        colorHover={el.props.colorHover} colorHoverContrast={el.props.colorHoverContrast}
                        colorActive={el.props.colorActive} colorActiveContrast={el.props.colorActiveContrast}
                        textColor={el.props.textColor} textColorContrast={el.props.textColorContrast} 
                        textColorActive={el.props.textColorActive} textColorActiveContrast={el.props.textColorActiveContrast}
                        textColorHover={el.props.textColorHover} textColorHoverContrast={el.props.textColorHoverContrast}
                        borderActiveSize={el.props.borderActiveSize} borderColorActive={el.props.borderColorActive} borderColorActiveContrast={el.props.borderColorActiveContrast}
                        borderHoverSize={el.props.borderHoverSize} borderColorHover={el.props.borderColorHover} borderColorHoverContrast={el.props.borderColorHoverContrast}
                        rounded={el.props.rounded} textSize={el.props.textSize} textWeight={el.props.textWeight}
                        px={el.props.px} py={el.props.py} />
                      )
                    } else if (elc.type.name === "MenuCollapse") {
                      return(<MenuCollapse key={`${i}-${j}`} {...elc.props} 
                        colorHover={el.props.colorHover} colorHoverContrast={el.props.colorHoverContrast}
                        colorActive={el.props.colorActive} colorActiveContrast={el.props.colorActiveContrast}
                        textColor={el.props.textColor} textColorContrast={el.props.textColorContrast} 
                        textColorActive={el.props.textColorActive} textColorActiveContrast={el.props.textColorActiveContrast}
                        textColorHover={el.props.textColorHover} textColorHoverContrast={el.props.textColorHoverContrast}
                        borderActiveSize={el.props.borderActiveSize} borderColorActive={el.props.borderColorActive} borderColorActiveContrast={el.props.borderColorActiveContrast}
                        borderHoverSize={el.props.borderHoverSize} borderColorHover={el.props.borderColorHover} borderColorHoverContrast={el.props.borderColorHoverContrast}
                        rounded={el.props.rounded} textSize={el.props.textSize} textWeight={el.props.textWeight}
                        px={el.props.px} py={el.props.py} />)
                    }
                  })
                ) : (
                  <>
                    {el.props.children.type.name === "MenuItem" && (
                      <MenuItem key={`${i}-0`} className={(el.props.children.props.children === undefined && el.props.children.props.icon !== undefined) ? "justify-center" : ""} {...el.props.children.props} 
                      colorHover={el.props.colorHover} colorHoverContrast={el.props.colorHoverContrast}
                      colorActive={el.props.colorActive} colorActiveContrast={el.props.colorActiveContrast}
                      textColor={el.props.textColor} textColorContrast={el.props.textColorContrast} 
                      textColorActive={el.props.textColorActive} textColorActiveContrast={el.props.textColorActiveContrast}
                      textColorHover={el.props.textColorHover} textColorHoverContrast={el.props.textColorHoverContrast}
                      borderActiveSize={el.props.borderActiveSize} borderColorActive={el.props.borderColorActive} borderColorActiveContrast={el.props.borderColorActiveContrast}
                      borderHoverSize={el.props.borderHoverSize} borderColorHover={el.props.borderColorHover} borderColorHoverContrast={el.props.borderColorHoverContrast}
                      rounded={el.props.rounded} textSize={el.props.textSize} textWeight={el.props.textWeight}
                      px={el.props.px} py={el.props.py} />
                    )}

                    {el.props.children.type.name === "MenuCollapse" && (
                      <MenuCollapse key={`${i}-0`} {...el.props.children.props} 
                      colorHover={el.props.colorHover} colorHoverContrast={el.props.colorHoverContrast}
                      colorActive={el.props.colorActive} colorActiveContrast={el.props.colorActiveContrast}
                      textColor={el.props.textColor} textColorContrast={el.props.textColorContrast} 
                      textColorActive={el.props.textColorActive} textColorActiveContrast={el.props.textColorActiveContrast}
                      textColorHover={el.props.textColorHover} textColorHoverContrast={el.props.textColorHoverContrast}
                      borderActiveSize={el.props.borderActiveSize} borderColorActive={el.props.borderColorActive} borderColorActiveContrast={el.props.borderColorActiveContrast}
                      borderHoverSize={el.props.borderHoverSize} borderColorHover={el.props.borderColorHover} borderColorHoverContrast={el.props.borderColorHoverContrast}
                      rounded={el.props.rounded} textSize={el.props.textSize} textWeight={el.props.textWeight}
                      px={el.props.px} py={el.props.py} />
                    )}
                  </>
                )}
              </ul>
            )
          } else return(el)
        })}
      </div>
    </div>
  )
}

MenuSidebar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  spaceX: PropTypes.number,
  spaceY: PropTypes.number,
  ...Sizes,
  ...Colors,
  ...Borders,
  ...Texts,
  ...Spacings
}

MenuSidebar.defaultProps = {
  width: "max",
  color: "blue",
  colorContrast: 600,
  textColor: "white",
  textColorContrast: 700,
  shadow: "none",
  rounded: "none",
  border: false,
  borderSize: "xs",
  borderStyle: "solid",
  py: 5,
}

export {
  MenuSidebar
}
