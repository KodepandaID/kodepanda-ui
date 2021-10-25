import React, { useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import "tailwindcss/tailwind.css";

import { Icon, Index } from "@kodepanda-ui/icon";

import { Margin, Padding } from "@kodepanda-ui/classes";
import { Borders, Colors, Icons, Sizes, Spacings } from "@kodepanda-ui/types";
import { Color, RoundedSize } from "@kodepanda-ui/utils";

const Message = ({ children, style, className, header, description, rounded, icon,
  width, widthSM, widthMD, widthLG, widthXL, width2XL,
  color, colorContrast, textColor, textColorContrast, headerColor, headerColorContrast,
  border, borderColor, borderColorContrast,
  closable, onClose,
  mx, my, mb, ml, mr, mt,
  px, py, pb, pl, pr, pt }) => {
  const [visible, setVisible] = useState(true);

  const baseClasses = cx(
    className !== undefined && className,
    (widthSM === undefined && widthMD === undefined 
    && widthLG === undefined && widthXL === undefined
    && width2XL === undefined) && `w-${width}`,
    widthSM !== undefined && `sm:w-${widthSM}`,
    widthMD !== undefined && `md:w-${widthMD}`,
    widthLG !== undefined && `lg:w-${widthLG}`,
    widthXL !== undefined && `xl:w-${widthXL}`,
    width2XL !== undefined && `2xl:w-${width2XL}`,
    Color("bg", color, colorContrast),
    border && "border",
    border && Color("border", borderColor, borderColorContrast),
    Color("text", textColor, textColorContrast),
    RoundedSize[rounded],
    "flex",
    "items-center",
    Margin(mx, my, mb, ml, mr, mt),
    Padding(px, py, pb, pl, pr, pt)
  )

  const headerClasses = cx(
    "font-bold",
    "text-md",
    Color("text", headerColor, headerColorContrast)
  )

  return(
    visible && (
      <div className={baseClasses} style={style !== undefined ? style : null}>
        {icon !== undefined && (<Icon icon={icon} size="md" mr={4} />)}
        <div className="block align-middle">
          <div className={headerClasses}>{header}</div>
          <p className="text-sm">{description}</p>
          {children}
        </div>
        {closable && (
          <div className="absolute top-6 right-6 cursor-pointer" onClick={() => {
            if (onClose !== undefined) onClose()
            setVisible(false)
          }}>
            <Icon icon="x" size="sm" />
          </div>
        )}
      </div>
    )
  )
}

Message.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.oneOf(Object.keys(Index)),
  style: PropTypes.object,
  className: PropTypes.string,
  header: PropTypes.string,
  description: PropTypes.node,
  closable: PropTypes.bool,
  onClose: PropTypes.func,
  ...Sizes,
  ...Borders,
  ...Colors,
  ...Icons,
  ...Spacings
}

Message.defaultProps = {
  width: "full",
  color: "gray",
  colorContrast: 200,
  border: true,
  borderColor: "gray",
  borderColorContrast: 300,
  textColor: "gray",
  textColorContrast: 700,
  headerColor: "black",
  headerColorContrast: 700,
  rounded: "none",
  py: 2,
  px: 5
}

export {
  Message
}
