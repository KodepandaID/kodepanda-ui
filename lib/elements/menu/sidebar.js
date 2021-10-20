import React, { useEffect, useState, useRef } from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import { Margin, Padding } from "../../classes";
import { border, color, size, spacing } from "../../types";

import Icon from "../icon/icon";

import { Color } from "../../utils/color";
import { BorderPosition, BorderSize, BorderSizeNum, BorderType } from "../../utils/border";
import { ShadowSize } from "../../utils/shadow";
import { RoundedSize } from "../../utils/rounded";

const Sidebar = ({ className, children, width, shadow, rounded,
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
          if (el.type.name === "Items") {
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
                      "flex",
                      "items-center",
                      (elc.props.children === undefined && elc.props.icon !== undefined) && "justify-center",
                      "text-sm tracking-wide",
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
                      Padding(px, py, pb, pl, pr, pt)
                    )

                    return(
                      <li key={j} className={listClasses} onClick={() => {
                        if (elc.props.href !== undefined) node.current.click()
                      }}>
                        <a ref={node} className="hidden" href={elc.props.href} target={elc.props.target} />
                        {elc.props.icon !== undefined && (<Icon icon={elc.props.icon} height={elc.props.iconSize} mt={-0.5} mr={elc.props.children === undefined ? undefined : 2} />)}
                        <span>{elc.props.children}</span>
                      </li>
                    )
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

Sidebar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  ...size,
  ...color,
  ...border,
  ...spacing
}

Sidebar.defaultProps = {
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

export default Sidebar;