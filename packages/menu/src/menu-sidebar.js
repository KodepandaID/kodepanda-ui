import React, { useEffect, useState, useRef } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Icon } from "@zenbu-ui/icon";
import { MenuCollapse } from "./menu-collapse";

import { Margin, Padding } from "@zenbu-ui/classes";
import { Borders, Colors, Sizes, Spacings } from "@zenbu-ui/types";
import {
  BorderPosition, BorderSize, BorderSizeNum, BorderType,
  Color,
  RoundedSize,
  ShadowSize
 } from "@zenbu-ui/utils";

const MenuSidebar = ({ className, children, width, shadow, rounded,
  border, borderSize, borderStyle, borderPosition, borderColor, borderColorContrast,
  color, colorContrast, textColor, textColorContrast, textColorHover, textColorHoverContrast,
  mx, my, mb, ml, mr, mt,
  px, py, pb, pl, pr, pt }) => {
  const node = useRef();

  const [menu, setMenu] = useState([]);

  const wrapperClasses = cx(
    className !== undefined && className,
    `w-${width}`,
    "fixed",
    "flex",
    "flex-col",
    "top-0",
    "left-0",
    "h-full",
    Color("bg", color, colorContrast),
    (border && borderPosition === undefined) && `${borderSize === undefined ? "border":BorderSize[borderSize]} ${BorderType[borderStyle]}`,
    (border && borderPosition !== undefined) && `${BorderPosition[borderPosition]}${BorderSizeNum[borderSize]} ${BorderType[borderStyle]}`,
    border && borderColor !== undefined && `${Color("border", borderColor, borderColorContrast === undefined ? 500 : borderColorContrast)}`,
    shadow !== "none" && ShadowSize[shadow],
    rounded !== "none" && RoundedSize[rounded],
    Margin(mx, my, mb, ml, mr, mt)
  )

  const textClasses = cx(
    "text-sm",
    Color("text", textColor, textColorContrast),
    "font-light",
    "tracking-wide",
    `px-${px}`,
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
      <div className="overflow-y-auto overflow-x-hidden flex-grow">
        {menu.map((el, i) => {
          if (el.type.name === "MenuItems") {
            return(
              <ul className="flex flex-col space-y-1" key={i}>
                {el.props.title !== undefined && (
                  <li className={textClasses}>
                    {el.props.title}
                  </li>
                )}

                {el.props.children.length !== undefined && (
                  el.props.children.map((elc, j) => {
                    const listClasses =  cx(
                      elc.type.name !== "MenuCollapse" && "flex items-center",
                      (elc.props.children === undefined && elc.props.icon !== undefined) && "justify-center",
                      "text-sm",
                      (el.props.colorHover !== undefined && !el.props.disabled) && `hover:${Color("bg", el.props.colorHover, el.props.colorHoverContrast)}`,
                      (el.props.active && el.props.colorActive !== undefined) && Color("bg", el.props.colorActive, el.props.colorActiveContrast),
                      el.props.disabled && "opacity-50",
                      !el.props.disabled && "cursor-pointer",
                      textColor !== undefined && Color("text", el.props.textColor, el.props.textColorContrast),
                      (el.props.active && el.props.textColorActive !== undefined) && Color("text", el.props.textColorActive, el.props.textColorActiveContrast),
                      (!el.props.disabled && el.props.textColorHover !== undefined) && `hover:${Color("text", el.props.textColorHover, el.props.textColorHoverContrast)}`,
                      (el.props.active && el.props.borderColorActive !== undefined) && `border-b${BorderSizeNum[el.props.borderActiveSize]} ${Color("border", el.props.borderColorActive, el.props.borderColorActiveContrast)}`,
                      (!el.props.active && el.props.borderColorActive !== undefined) && `border-b${BorderSizeNum[el.props.borderActiveSize]} border-transparent`,
                      (!el.props.disabled && el.props.borderColorHover !== undefined) && `border-b${BorderSizeNum[el.props.borderHoverSize]} border-transparent hover:${Color("border", el.props.borderColorHover, el.props.borderColorHoverContrast)}`,
                      el.props.rounded !== "none" && RoundedSize[el.props.rounded],
                      elc.type.name !== "MenuCollapse" && Padding(px, py, pb, pl, pr, pt)
                    )

                    if (elc.type.name === "MenuItem") {
                      return(
                        <li key={j} className={listClasses} onClick={() => {
                          if (elc.props.href !== undefined) node.current.click()
                        }}>
                          <a ref={node} className="hidden" href={elc.props.href} target={elc.props.target} />
                          {elc.props.icon !== undefined && (<Icon icon={elc.props.icon} height={elc.props.iconSize} mt={-0.5} mr={elc.props.children === undefined ? undefined : 2} />)}
                          <span>{elc.props.children}</span>
                        </li>
                      )
                    } else if (elc.type.name === "MenuCollapse") {
                      return(<MenuCollapse key={j} className={listClasses}
                        px={px} py={py} pb={pb} pl={pl} pr={pr} pt={pt}
                        colorHover={el.props.colorHover} colorHoverContrast={el.props.colorHoverContrast}
                        colorActive={el.props.colorActive} colorActiveContrast={el.props.colorActiveContrast}
                        {...elc.props} />)
                    }
                  })
                )}
              </ul>
            )
          } else {
            return(el)
          }
        })}
      </div>
    </div>
  )
}

MenuSidebar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  ...Sizes,
  ...Colors,
  ...Borders,
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
  py: 3,
  px: 4
}

export {
  MenuSidebar
}
