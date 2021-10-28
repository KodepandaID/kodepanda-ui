import React, { useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Icon } from "@zenbu-ui/icon";

import { Margin } from "@zenbu-ui/classes";
import { Borders, Colors, Icons, Spacings } from "@zenbu-ui/types";
import { Color, RoundedSize } from "@zenbu-ui/utils";

const Tags = ({ children, icon, rounded, circle,
  color, colorContrast, border, borderColor, borderColorContrast, textColor, textColorContrast,
  visible, closable, onClose, checkable, checked, onChange, onClick,
  mx, my, mt, mb, mr, ml, 
  py, px }) => {
  const [open, setOpen] = useState(visible);
  const [check, setCheck] = useState(checked);

  const baseClasses = cx(
    !circle && "w-max",
    circle && "w-6 h-6",
    "flex",
    !circle ? "justify-start" : "justify-center",
    "items-center",
    !checkable && Color("bg", color, colorContrast),
    (border && !checkable) && "border",
    (border && !checkable) && Color("border", borderColor, borderColorContrast),
    (!checkable || check) && Color("text", textColor, textColorContrast),
    (checkable && !check) && Color("text", "black"),
    (checkable && !check) && `hover:${Color("text", color, colorContrast)}`,
    checkable && "cursor-pointer",
    (rounded !== undefined && !circle) && RoundedSize[rounded],
    circle && "rounded-full",
    "text-xs",
    !circle && `py-${py}`,
    !circle && `px-${px}`,
    Margin(mx, my, mb, ml, mr, mt)
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
          {icon !== undefined && (<Icon icon={icon} height={3} mr={circle ? 0 : 1} />)}
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
  circle: PropTypes.bool,
  visible: PropTypes.bool,
  closable: PropTypes.bool,
  onClose: PropTypes.func,
  checkable: PropTypes.bool,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  ...Borders,
  ...Colors,
  ...Icons,
  ...Spacings
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

export {
  Tags
}
