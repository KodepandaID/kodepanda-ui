import React, { useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color, Contrast } from "../../utils/color";
import { RoundedSize } from "../../utils/rounded";
import { Icons } from "../../utils/icon";

import { default as Icon } from "../icon/icon";

const Message = ({ children, style, className, header, description, rounded, icon,
  color, colorContrast, textColor, textColorContrast, headerColor, headerColorContrast,
  border, borderColor, borderColorContrast,
  closable, onClose,
  mx, my, mb, ml, mr, mt,
  px, py, pb, pl, pr, pt }) => {
  const [visible, setVisible] = useState(true);

  const baseClasses = cx(
    className !== undefined && className,
    Color("bg", color, colorContrast),
    border && "border",
    border && Color("border", borderColor, borderColorContrast),
    Color("text", textColor, textColorContrast),
    RoundedSize[rounded],
    "flex",
    "items-center",
    mx !== undefined && `mx-${mx}`,
    my !== undefined && `my-${my}`,
    mb !== undefined && `mb-${mb}`,
    ml !== undefined && `ml-${ml}`,
    mr !== undefined && `mr-${mr}`,
    mt !== undefined && `mt-${mt}`,
    px !== undefined && `px-${px}`,
    py !== undefined && `py-${py}`,
    pb !== undefined && `pb-${pb}`,
    pl !== undefined && `pl-${pl}`,
    pr !== undefined && `pr-${pr}`,
    pt !== undefined && `pt-${pt}`,
  )

  return(
    visible && (
      <div className={baseClasses} style={style !== undefined ? style : null}>
        {icon !== undefined && (<Icon icon={icon} size={"md"} mr={4} />)}
        <div className="block align-middle">
          <div className="font-bold text-md">{header}</div>
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
  style: PropTypes.object,
  className: PropTypes.string,
  header: PropTypes.string,
  description: PropTypes.node,
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  border: PropTypes.bool,
  borderColor: PropTypes.oneOf(Palletes),
  borderColorContrast: PropTypes.oneOf(Contrast),
  headerColor: PropTypes.oneOf(Palletes),
  headerColorContrast: PropTypes.oneOf(Contrast),
  textColor: PropTypes.oneOf(Palletes),
  textColorContrast: PropTypes.oneOf(Contrast),
  icon: PropTypes.oneOf(Object.keys(Icons)),
  rounded: PropTypes.oneOf(Object.keys(RoundedSize)),
  closable: PropTypes.bool,
  onClose: PropTypes.func,
  mx: PropTypes.number,
  my: PropTypes.number,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
  px: PropTypes.number,
  py: PropTypes.number,
  pb: PropTypes.number,
  pl: PropTypes.number,
  pr: PropTypes.number,
  pt: PropTypes.number,
}

Message.defaultProps = {
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

export default Message;