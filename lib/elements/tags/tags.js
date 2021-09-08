import React, { useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color, Contrast } from "../../utils/color";
import { RoundedSize } from "../../utils/rounded";

import { default as Icon } from "../icon/icon";

const Tags = ({ children, icon, rounded,
  color, colorContrast, border, borderColor, borderColorContrast, textColor, textColorContrast,
  visible, closable, onClose, checkable, checked, onChange, onClick,
  mt, mb, mr, ml, py, px }) => {
  const [open, setOpen] = useState(visible);
  const [check, setCheck] = useState(checked);

  const baseClasses = cx(
    "w-max",
    "flex",
    "justify-start",
    "items-center",
    !checkable && Color("bg", color, colorContrast),
    (border && !checkable) && "border",
    (border && !checkable) && Color("border", borderColor, borderColorContrast),
    (!checkable || check) && Color("text", textColor, textColorContrast),
    (checkable && !check) && Color("text", "black"),
    (checkable && !check) && `hover:${Color("text", color, colorContrast)}`,
    checkable && "cursor-pointer",
    rounded !== undefined && RoundedSize[rounded],
    "text-xs",
    `py-${py}`,
    `px-${px}`,
    (mt !== undefined && mt >= 0) && `mt-${mt}`,
    (mt !== undefined && mt < 0) && `-mt${mt}`,
    (mb !== undefined && mb >= 0) && `mb-${mb}`,
    (mb !== undefined && mb < 0) && `mb-${mb}`,
    (ml !== undefined && ml >= 0) && `ml-${ml}`,
    (ml !== undefined && ml < 0) && `-ml${ml}`,
    (mr !== undefined && mr >= 0) && `mr-${mr}`,
    (mr !== undefined && mr < 0) && `mr-${mr}`,
  )

  return(
    <>
      {open && (
        <div className={`${baseClasses} ${(checkable && check) ? Color("bg", color, colorContrast) : ""}`} onClick={() => {
          if (onClick !== undefined) onClick()
          if (checkable) {
            if (onChange !== undefined) onChange(!check)
            setCheck(!check)
          }
        }}>
          {icon !== undefined && (<Icon icon={icon} height={3} mr={1} />)}
          {children}
          {closable && (
            <div className="ml-2" onClick={() => {
              if (closable) {
                setOpen(false)
                if (onClose !== undefined) onClose()
              }
            }}>
              <Icon icon="x" height={3} className="cursor-pointer" />
            </div>
          )}
        </div>
      )}
    </>
  )
}

Tags.propTypes = {
  children: PropTypes.node,
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  rounded: PropTypes.oneOf(Object.keys(RoundedSize)),
  border: PropTypes.bool,
  borderColor: PropTypes.oneOf(Palletes),
  borderColorContrast: PropTypes.oneOf(Contrast),
  textColor: PropTypes.oneOf(Palletes),
  textColorContrast: PropTypes.oneOf(Contrast),
  visible: PropTypes.bool,
  closable: PropTypes.bool,
  icon: PropTypes.oneOf(Object.keys(Icon.Index)),
  onClose: PropTypes.func,
  checkable: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
  py: PropTypes.number,
  px: PropTypes.number,
}

Tags.defaultProps = {
  py: 1,
  px: 3,
  color: "blue",
  colorContrast: 600,
  border: true,
  borderColor: "blue",
  borderColorContrast: 700,
  textColor: "white",
  textColorContrast: 700,
  visible: true,
  checked: false
}

export default Tags;