import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Grid } from "@zenbu-ui/grid";
import { Icon, Index } from "@zenbu-ui/icon";

import { Margin, Padding } from "@zenbu-ui/classes";
import { Borders, Colors, Icons, Spacings } from "@zenbu-ui/types";
import { 
  Palletes, Color, Contrast,
  RoundedSize, RoundedPosition,
  ShadowSize
} from "@zenbu-ui/utils";

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
  titleColor, titleColorContrast, descriptionColor, descriptionColorContrast, roundedPosition,
  closable, closeIconColor, closeIconColorContrast, visible, onClick, onClose,
  mx, my, mb, ml, mr, mt,
  px, py, pb, pl, pr, pt }) => {
  const [lastElm, setLastElm] = useState(null);
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
  )

  const baseClasses = cx(
    sizes[size],
    Color("bg", color, colorContrast),
    shadow !== "none" && ShadowSize[shadow],
    border && "border",
    border && Color("border", borderColor, borderColorContrast),
    (rounded !== "none" && roundedPosition === undefined) && RoundedSize[rounded],
    (rounded !== "none" && roundedPosition !== undefined) && `${RoundedPosition[roundedPosition]}-${rounded}`,
    Margin(mx, my, mb, ml, mr, mt),
    Padding(px, py, pb, pl, pr, pt)
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

  const reverse = (elm) => {
    let elms = []
    elm.forEach((e) => {
      elms.push(e)
    })

    return elms.reverse()
  }

  useEffect(() => {
    setShow(visible)
    if (show && duration > 0) {
      setInterval(() => {
        setShow(false)
        if (onClose !== undefined) onClose()
      }, duration)
    }

    const elm = document.querySelectorAll(`[id='notification-${position}']`);
    if (elm.length > 0) {
      // Reverse function used to make a new notification always show on the top
      let data = elm
      if (elm[0] !== lastElm) setLastElm(elm[0])
      else data = reverse(elm)
      data.forEach((e, i) => {
        if (i === 0) e.className = `${wrapperClasses} ${generatePosition(10, position)}`;
        else e.className = `${wrapperClasses} ${generatePosition(i * 40, position)}`
      })
    }
  }, [visible, parent, show])

  return(
    show && (
      <div id={`notification-${position}`}>
        <Transition
        show={show}
        appear={show}
        enter="transform transition-all ease-in-out duration-700"
        enterFrom="translate-x-full"
        enterTo="translate-x-0"
        leave="transform transition-all ease-in-out duration-700 delay-500"
        leaveFrom="translate-x-0"
        leaveTo="translate-x-full">
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
        </Transition>
      </div>
    )
  )
}

Notification.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(Object.keys(sizes)),
  duration: PropTypes.number,
  position: PropTypes.oneOf(Position),
  icon: PropTypes.oneOf(Object.keys(Index)),
  title: PropTypes.node,
  description: PropTypes.node,
  closable: PropTypes.bool,
  closeIconColor: PropTypes.oneOf(Palletes),
  closeIconColorContrast: PropTypes.oneOf(Contrast),
  visible: PropTypes.bool,
  onClick: PropTypes.func,
  onClose: PropTypes.func,
  ...Borders,
  ...Colors,
  ...Icons,
  ...Spacings
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
  shadow: "lg",
  rounded: "lg",
  closable: true,
  closeIconColor: "black",
  closeIconColorContrast: 700,
  iconColor: "black",
  iconColorContrast: 700,
  px: 4,
  py: 2
}

export {
  Notification
}
