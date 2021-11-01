import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Image } from "@zenbu-ui/image";

import { Margin, Padding, Responsive } from "@zenbu-ui/classes";
import { Borders, Colors, Spacings } from "@zenbu-ui/types";
import { 
  Color,
  Height,
  RoundedSize, RoundedPosition,
  ShadowSize
} from "@zenbu-ui/utils";

const cardSizes = {
  "xs": "w-40",
  "sm": "w-56",
  "md": "w-72",
  "lg": "w-96",
  "xl": "w-108",
  "2xl": "w-120",
  "3xl": "w-132",
  "full": "w-full"
}

const Card = ({ bgImage, bgImageOverlay, width, height, size, title, description, cover, coverHeight, coverPadding, coverPosition, footer,
  border, shadow, rounded, widthSM, widthMD, widthLG, widthXL, width2XL,
  color, colorContrast, borderColor, borderColorContrast,
  titleColor, titleColorContrast, descriptionColor, descriptionColorContrast, roundedPosition,
  mx, my, mb, ml, mr, mt,
  px, py, pb, pl, pr, pt
  }) => {
  if (coverPosition === "left" || coverPosition === "right") size = "xl"

  const baseClasses = cx(
    bgImage !== undefined && "flex",
    "relative",
    "overflow-hidden",
    Responsive(width === undefined ? cardSizes[size] : width, widthSM, widthMD, widthLG, widthXL, width2XL),
    height !== undefined && `h-${height}`,
    shadow !== "none" && ShadowSize[shadow],
    border && "border",
    border && Color("border", borderColor, borderColorContrast),
    (rounded !== "none" && roundedPosition === undefined) && RoundedSize[rounded],
    (rounded !== "none" && roundedPosition !== undefined) && `${RoundedPosition[roundedPosition]}-${rounded}`,
    "z-50",
    Margin(mx, my, mb, ml, mr, mt)
  )

  const wrapperClasses = cx(
    bgImage === undefined && Color("bg", color, colorContrast),
    bgImage !== undefined && "w-full h-full",
    bgImage !== undefined && "absolute",
    Padding(px, py, pb, pl, pr, pt)
  )

  const coverClasses = cx(
    "block",
    coverPosition === "top" && "align-bottom",
    coverPadding !== undefined && `p-${coverPadding}`
  )

  const coverImageClasses = cx(
    "w-max",
    coverHeight !== undefined && `h-${coverHeight}`,
    (coverPosition === "top" && coverPadding === undefined && rounded) && `rounded-t-${rounded}`,
    (coverPosition === "left" && coverPadding === undefined && rounded) && `rounded-l-${rounded}`,
    (coverPosition === "right" && coverPadding === undefined && rounded) && `rounded-r-${rounded}`,
    (coverPadding !== undefined && rounded !== "none") && RoundedSize[rounded],
  )

  const coverImagePositionClasses = cx(
    "w-max",
    "rounded-none",
    (coverPosition === "top" && coverPadding === undefined && rounded !== "none") && `md:rounded-t-${rounded}`,
    (coverPosition === "left" && coverPadding === undefined && rounded !== "none") && `md:rounded-l-${rounded}`,
    (coverPosition === "right" && coverPadding === undefined && rounded !== "none") && `md:rounded-r-${rounded}`,
    (coverPadding !== undefined && rounded !== "none") && `md:${RoundedSize[rounded]}`,
  )

  const titleClasses = cx(
    Color("text", titleColor, titleColorContrast),
    "font-bold",
    "text-md",
    "mb-1"
  )

  const descClasses = cx(
    Color("text", descriptionColor, descriptionColorContrast),
    "text-sm",
  )

  const bgImageClasses = cx(
    "w-full",
    "h-full",
    RoundedSize[rounded],
  )

  const bgImageOverlayClasses = cx(
    "w-full",
    "h-full",
    "bg-black",
    "absolute",
    "opacity-50",
    rounded !== "none" && RoundedSize[rounded]
  )

  return(
    <div className={baseClasses}>
      {bgImageOverlay && (<div className={bgImageOverlayClasses} />)}
      {bgImage !== undefined && (
        <img className={bgImageClasses} src={bgImage} />
      )}
      
      {coverPosition === "top" && (
        <>
          {typeof cover === "string" ? (<div className={coverClasses}><Image className={coverImageClasses} src={cover} fluid={true} objectFit="cover" /></div>) : cover}
          {(description !== undefined || title !== undefined) && (
            <div className={wrapperClasses}>
              {typeof title === "string" && (<div className={titleClasses}>{title}</div>)}
              {typeof title !== "string" && (title)}
              {typeof description === "string" && (<div className={descClasses}>{description}</div>)}
              {typeof description !== "string" && (description)}
            </div>
          )}
          {footer !== undefined && (
            <div className={`${wrapperClasses}`}>{footer}</div>
          )}
        </>
      )}

      {coverPosition === "center" && (
        <>
          <div className={wrapperClasses}>
            {typeof title === "string" && (<div className={titleClasses}>{title}</div>)}
            {typeof title !== "string" && (title)}
          </div>

          {typeof cover === "string" ? (<div className={coverClasses}><Image className={coverImageClasses} src={cover} fluid={true} objectFit="cover" /></div>) : cover}

          <div className={wrapperClasses}>
            {typeof description === "string" && (<div className={descClasses}>{description}</div>)}
            {typeof description !== "string" && (description)}
          </div>
          {footer !== undefined && (
            <div className={`${wrapperClasses}`}>{footer}</div>
          )}
        </>
      )}

      {(coverPosition === "left" || coverPosition === "right") && (
        <div className="md:flex">
          {coverPosition === "left" && (
            <div className="md:flex-shrink-0 md:w-1/2">
              <Image heightSM="full" widthLG="max" className={coverImagePositionClasses} src={cover} objectFit="cover" />
            </div>
          )}
          <div className={`w-full ${Color("bg", color, colorContrast)} p-8`}>
            {typeof title === "string" && (<div className={titleClasses}>{title}</div>)}
            {typeof title !== "string" && (title)}
            {typeof description === "string" && (<div className={descClasses}>{description}</div>)}
            {typeof description !== "string" && (description)}
          </div>
          {coverPosition === "right" && (
            <div className="md:flex-shrink-0 md:w-1/2">
              <Image heightSM="full" className={coverImagePositionClasses} src={cover} objectFit="cover" />
            </div>
          )}
        </div>
      )}
    </div>
  )
}

Card.propTypes = {
  size: PropTypes.oneOf(Object.keys(cardSizes)),
  cover: PropTypes.node,
  coverHeight: PropTypes.oneOf(Height),
  coverPadding: PropTypes.number,
  coverPosition: PropTypes.oneOf(["top", "left", "right", "center"]),
  title: PropTypes.node,
  bgImage: PropTypes.string,
  bgImageOverlay: PropTypes.bool,
  description: PropTypes.node,
  footer: PropTypes.node,
  ...Colors,
  ...Borders,
  ...Spacings
}

Card.defaultProps = {
  size: "md",
  coverPosition: "top",
  titleColor: "black",
  titleColorContrast: 700,
  descriptionColor: "gray",
  descriptionColorContrast: 600,
  color: "white",
  colorContrast: 200,
  borderColorContrast: 300,
  border: false,
  shadow: "md",
  rounded: "md",
  px: 4,
  py: 4
}

export {
  Card
}
