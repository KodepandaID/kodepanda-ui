import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color, Contrast } from "../../utils/color";
import { RoundedSize, RoundedPosition } from "../../utils/rounded";
import { ShadowSize } from "../../utils/shadow";

import { default as Card } from "../card/card";

const positions = {
  "top-left": "left-2",
  "top-right": "right-2",
  "top": "left-1/2",
  "bottom": "-top-1 left-1/2",
  "bottom-left": "-top-1 left-2",
  "bottom-right": "-top-1 right-2",
  "left": "",
  "right": ""
}

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

const Popover = ({ children, bgImage, bgImageOverlay, size, title, description, cover, coverPosition, footer,
  border, shadow, rounded,
  color, colorContrast, borderColor, borderColorContrast,
  titleColor, titleColorContrast, descriptionColor, descriptionColorContrast,
  roundedSize, roundedPosition, shadowSize,
  position, triangle,
  px, py, pb, pl, pr, pt }) => {
  const [show, setShow] = useState(false);

  const wrapperClasses = cx(
    (position === "left" || position === "right") ? "relative flex items-center" : "relative",
    "cursor-pointer"
  )

  const transitionClasses = cx(
    (position === "left" || position === "right") && "flex items-center",
  )

  const baseClasses = cx(
    (position !== "left" && position !== "right") && "tooltip",
    position === "left" && "tooltip-left",
    position === "right" && "tooltip-right",
    "w-max",
    "absolute",
    (position === "left" || position === "right") && "flex items-center",
    position.includes("bottom") ? "top-9" : (position === "left" || position === "right") ? "" : "bottom-9",
  )

  const triangleClasses = cx(
    "w-3",
    "h-3",
    Color("bg", color, colorContrast),
    "absolute",
    (position !== "left" && position !== "right") && positions[position],
    position.includes("top") && "-bottom-1",
    position.includes("bottom") && "-top-1",
    position === "left" && "-right-1",
    position === "right" && "-left-1",
    "transform rotate-45"
  )

  return(
    <div className="relative">
      <span className={wrapperClasses} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
        <Transition
        className={transitionClasses}
        show={show}
        appear={show}
        enter="ease-in-out duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        >
          <span className={baseClasses}>
            <Card
            size={size} cover={cover} coverPosition={coverPosition}
            title={title} bgImage={bgImage} bgImageOverlay={bgImageOverlay}
            titleColor={titleColor} titleColorContrast={titleColorContrast}
            description={description} descriptionColor={descriptionColor} descriptionColorContrast={descriptionColorContrast}
            footer={footer} color={color} colorContrast={colorContrast}
            border={border} borderColor={borderColor} borderColorContrast={borderColorContrast}
            shadow={shadow} shadowSize={shadowSize} rounded={rounded}
            roundedSize={roundedSize} roundedPosition={roundedPosition}
            py={py} px={px} pb={pb} pt={pt} pr={pr} pl={pl}
            />
            {triangle && (
              <>
                {position === "left" && (<div className={triangleClasses}></div>)}
                {position === "right" && (<div className={triangleClasses}></div>)}
                {(position !== "left" && position !== "right") && (
                  <div className={triangleClasses}></div>
                )}
              </>
            )}
          </span>
        </Transition>
        <span>{children}</span>
      </span>
    </div>
  )
}

Popover.propTypes = {
  children: PropTypes.node,
  size: PropTypes.oneOf(Object.keys(sizes)),
  cover: PropTypes.node,
  coverPosition: PropTypes.oneOf(["top", "left", "right", "center"]),
  title: PropTypes.node,
  bgImage: PropTypes.string,
  bgImageOverlay: PropTypes.bool,
  titleColor: PropTypes.oneOf(Palletes),
  titleColorContrast: PropTypes.oneOf(Contrast),
  description: PropTypes.node,
  descriptionColor: PropTypes.oneOf(Palletes),
  descriptionColorContrast: PropTypes.oneOf(Contrast),
  footer: PropTypes.node,
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  border: PropTypes.bool,
  borderColor: PropTypes.oneOf(Palletes),
  borderColorContrast: PropTypes.oneOf(Contrast),
  shadow: PropTypes.bool,
  shadowSize: PropTypes.oneOf(Object.keys(ShadowSize)),
  rounded: PropTypes.bool,
  roundedSize: PropTypes.oneOf(Object.keys(RoundedSize)),
  roundedPosition: PropTypes.oneOf(Object.keys(RoundedPosition)),
  triangle: PropTypes.bool,
  position: PropTypes.oneOf(Object.keys(positions)),
  px: PropTypes.number,
  py: PropTypes.number,
  pb: PropTypes.number,
  pl: PropTypes.number,
  pr: PropTypes.number,
  pt: PropTypes.number,
}

Popover.defaultProps = {
  color: "white",
  colorContrast: 700,
  triangle: true,
  position: "top",
  rounded: false,
  roundedSize: "md",
  py: 4,
  px: 3
}


export default Popover;