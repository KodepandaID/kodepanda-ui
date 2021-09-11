import React, { useState, useEffect } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color, Contrast } from "../../utils/color";
import { RoundedSize, RoundedPosition } from "../../utils/rounded";
import { ShadowSize } from "../../utils/shadow";

import Grid from "../grid/grid";
import Icon from "../icon/icon";

const sizes = {
  "xs": "w-40",
  "sm": "w-56",
  "md": "w-72",
  "lg": "w-96",
  "xl": "w-108",
  "2xl": "w-120",
  "3xl": "w-132",
  "full": "w-full"
}

const Position = ["top-left", "top-center", "top-right", "bottom-left", "bottom-center", "bottom-right"]

const Notification = ({ children, title, description, position, duration, size, rounded, border, shadow,
  icon, iconColor, iconColorContrast, iconBackgroundColor, iconBackgroundColorContrast,
  color, colorContrast, borderColor, borderColorContrast,
  titleColor, titleColorContrast, descriptionColor, descriptionColorContrast,
  roundedSize, roundedPosition, shadowSize,
  closable, closeIconColor, closeIconColorContrast, visible, onClick, onClose,
  mb, ml, mr, mt,
  px, py, pb, pl, pr, pt }) => {
  const [mounted, setMounted] = useState(false);
  const [show, setShow] = useState(visible);

  const generatePosition = (y, position) => {
    const obj = {
      "top-left": `top-${y} left-10`,
      "top-center": `top-${y} left-0 right-0 mx-auto`,
      "top-right": `top-${y} right-10`,
      "bottom-left": `bottom-${y} left-10`,
      "bottom-center": `bottom-${y} left-0 right-0 mx-auto`,
      "bottom-right": `bottom-${y} right-10`
    }

    return obj[position]
  }

  const wrapperClasses = cx(
    "absolute",
    "transition",
    "delay-300",
    "duration-700",
    "ease-in-out",
  )

  const baseClasses = cx(
    sizes[size],
    Color("bg", color, colorContrast),
    shadow && ShadowSize[shadowSize],
    border && "border",
    border && Color("border", borderColor, borderColorContrast),
    (rounded && roundedPosition === undefined) && RoundedSize[roundedSize],
    (rounded && roundedPosition !== undefined) && `${RoundedPosition[roundedPosition]}-${roundedSize}`,
    (mb !== undefined && mb >= 0) && `mb-${mb}`,
    (mb !== undefined && mb < 0) && `-mb${mb}`,
    (ml !== undefined && ml >= 0) && `ml-${ml}`,
    (ml !== undefined && ml < 0) && `-ml${ml}`,
    (mr !== undefined && mr >= 0) && `mr-${mr}`,
    (mr !== undefined && mr < 0) && `-mr${mr}`,
    (mt !== undefined && mt >= 0) && `mt-${mt}`,
    (mt !== undefined && mt < 0) && `-mt${mt}`,
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

  const titleClasses = cx(
    "font-bold",
    "text-md",
    Color("text", titleColor, titleColorContrast)
  )

  const descClasses = cx(
    "text-sm",
    Color("text", descriptionColor, descriptionColorContrast)
  )

  useEffect(() => {
    setShow(visible)
    if (show && duration > 0) {
      setInterval(() => {
        setShow(false)
        if (onClose !== undefined) onClose()
      }, duration)
    }

    var elm = document.querySelectorAll(`[id='notification-${position}']`);
    if (elm.length === 1) {
      elm[0].className = `${wrapperClasses} ${generatePosition(10, position)}`;
    }
    if (elm.length > 1) {
      if (!mounted) {
        elm.forEach((e, i) => {
          if (i === 0) elm[i].className = `${wrapperClasses} ${generatePosition(10, position)}`;
          else elm[i].className = `${wrapperClasses} ${generatePosition(i * 40, position)}`
        })
        setMounted(true)
      } else {
        elm.forEach((e, i) => {
          if (i === 0) elm[elm.length - 1].className = `${wrapperClasses} ${generatePosition(10, position)}`;
          else elm[(elm.length - 1) - i].className = `${wrapperClasses} ${generatePosition(i * 40, position)}`
        })
      }
    }
  }, [visible, parent, show])

  return(
    show && (
      <div id={`notification-${position}`}>
        <div className={baseClasses} onClick={() => {
          if (onClick !== undefined) onClick()
        }}>
          {icon === undefined ? (
            <>
              {closable && (
                <div className="absolute cursor-pointer z-40 top-3 right-4 -mt-0.5" onClick={() => {
                  setShow(false)
                  if (onClose !== undefined) onClose()
                }}>
                  <Icon icon="x-solid" size="sm" color={closeIconColor} contrast={closeIconColorContrast}  />
                </div>
              )}
              {children !== undefined ? (children) : (
                <span>
                  {(title !== undefined && typeof title === "string") && (<div className={titleClasses}>{title}</div>)}
                  {(title !== undefined && typeof title !== "string") && (title)}
                  {(description !== undefined && typeof description === "string") && (<div className={descClasses}>{description}</div>)}
                  {(description !== undefined && typeof description !== "string") && (description)}
                </span>
              )}
            </>
          ) : (
            <Grid>
              <Grid.Row>
                <Grid.Column className="flex items-center justify-center" width="1/5">
                  {iconBackgroundColor === undefined ? (
                    <div>
                      <Icon icon={icon} color={iconColor} colorContrast={iconColorContrast} size="md" />
                    </div>
                  ) : (
                    <div className={`flex items-center justify-center w-16 h-16 rounded-full ${Color("bg", iconBackgroundColor, iconBackgroundColorContrast)}`}>
                      <Icon icon={icon} color={iconColor} colorContrast={iconColorContrast} size="md" />
                    </div>
                  )}
                </Grid.Column>
                <Grid.Column width="4/5">
                  {closable && (
                    <div className="absolute cursor-pointer z-40 top-3 right-4 -mt-0.5" onClick={() => {
                      setShow(false)
                      if (onClose !== undefined) onClose()
                    }}>
                      <Icon icon="x-solid" size="sm" color={closeIconColor} contrast={closeIconColorContrast}  />
                    </div>
                  )}
                  {children !== undefined ? (children) : (
                    <span>
                      {(title !== undefined && typeof title === "string") && (<div className={titleClasses}>{title}</div>)}
                      {(title !== undefined && typeof title !== "string") && (title)}
                      {(description !== undefined && typeof description === "string") && (<div className={descClasses}>{description}</div>)}
                      {(description !== undefined && typeof description !== "string") && (description)}
                    </span>
                  )}
                </Grid.Column>
              </Grid.Row>
            </Grid>
          )}
        </div>
      </div>
    )
  )
}

Notification.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(Object.keys(sizes)),
  duration: PropTypes.number,
  position: PropTypes.oneOf(Position),
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  icon: PropTypes.oneOf(Object.keys(Icon.Index)),
  iconColor: PropTypes.oneOf(Palletes),
  iconColorContrast: PropTypes.oneOf(Contrast),
  iconBackgroundColor: PropTypes.oneOf(Palletes),
  iconBackgroundColorContrast: PropTypes.oneOf(Contrast),
  title: PropTypes.node,
  titleColor: PropTypes.oneOf(Palletes),
  titleColorContrast: PropTypes.oneOf(Contrast),
  description: PropTypes.node,
  descriptionColor: PropTypes.oneOf(Palletes),
  descriptionColorContrast: PropTypes.oneOf(Contrast),
  border: PropTypes.bool,
  borderColor: PropTypes.oneOf(Palletes),
  borderColorContrast: PropTypes.oneOf(Contrast),
  shadow: PropTypes.bool,
  shadowSize: PropTypes.oneOf(Object.keys(ShadowSize)),
  rounded: PropTypes.bool,
  roundedSize: PropTypes.oneOf(Object.keys(RoundedSize)),
  roundedPosition: PropTypes.oneOf(Object.keys(RoundedPosition)),
  closable: PropTypes.bool,
  closeIconColor: PropTypes.oneOf(Palletes),
  closeIconColorContrast: PropTypes.oneOf(Contrast),
  visible: PropTypes.bool,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
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

Notification.defaultProps = {
  size: "lg",
  duration: 0,
  position: "top-right",
  titleColor: "black",
  titleColorContrast: 700,
  descriptionColor: "gray",
  descriptionColorContrast: 600,
  color: "white",
  colorContrast: 200,
  borderColorContrast: 300,
  border: false,
  shadow: true,
  shadowSize: "lg",
  rounded: true,
  roundedSize: "lg",
  closable: true,
  closeIconColor: "black",
  closeIconColorContrast: 700,
  iconColor: "black",
  iconColorContrast: 700,
  px: 4,
  py: 2
}

export default Notification;