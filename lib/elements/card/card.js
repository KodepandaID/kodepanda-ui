import React from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color, Contrast } from "../../utils/color";
import { RoundedSize, RoundedPosition } from "../../utils/rounded";
import { ShadowSize } from "../../utils/shadow";

import { default as Grid } from "../grid/grid";
import { default as Image } from "../image/image";

const sizes = {
  "xs": "w-40",
  "sm": "w-56",
  "md": "w-72",
  "lg": "w-96",
  "xl": "w-108",
  "2xl": "w-120"
}

const Card = ({ bgImage, bgImageOverlay, size, title, description, cover, coverPosition, footer,
  border, shadow, rounded,
  color, colorContrast, borderColor, borderColorContrast,
  titleColor, titleColorContrast, descriptionColor, descriptionColorContrast,
  roundedSize, roundedPosition, shadowSize,
  mb, ml, mr, mt,
  px, py, pb, pl, pr, pt
  }) => {
  if (coverPosition === "left" || coverPosition === "right") size = "xl"

  const baseClasses = cx(
    bgImage !== undefined && "flex",
    "relative",
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
  )

  const wrapperClasses = cx(
    bgImage !== undefined && "w-full h-full",
    bgImage !== undefined && "absolute",
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
    RoundedSize[roundedSize],
  )

  return(
    <div className={baseClasses}>
      {bgImageOverlay && (<div className={`w-full h-full bg-black absolute opacity-50 ${RoundedSize[roundedSize]}`} />)}
      {bgImage !== undefined && (
        <img className={bgImageClasses} src={bgImage} />
      )}
      
      {coverPosition === "top" && (
        <>
          {typeof cover === "string" ? (<div className="block align-bottom"><Image className={`rounded-t-${roundedSize}`} src={cover} fluid={true} /></div>) : cover}
          {(description !== undefined || title !== undefined) && (
            <div className={wrapperClasses}>
              {typeof title === "string" && (<div className={titleClasses}>{title}</div>)}
              {typeof title !== "string" && (title)}
              {typeof description === "string" && (<div className={descClasses}>{description}</div>)}
              {typeof description !== "string" && (description)}
            </div>
          )}
          {footer !== undefined && (
            <div className={`${wrapperClasses} mt-1`}>{footer}</div>
          )}
        </>
      )}

      {coverPosition === "center" && (
        <>
          <div className={wrapperClasses}>
            {typeof title === "string" && (<div className={titleClasses}>{title}</div>)}
            {typeof title !== "string" && (title)}
          </div>

          {typeof cover === "string" ? (<div className="block"><Image src={cover} fluid={true} /></div>) : cover}

          <div className={wrapperClasses}>
            {typeof description === "string" && (<div className={descClasses}>{description}</div>)}
            {typeof description !== "string" && (description)}
          </div>
          {footer !== undefined && (
            <div className={`${wrapperClasses} mt-1`}>{footer}</div>
          )}
        </>
      )}

      {(coverPosition === "left" || coverPosition === "right") && (
        <Grid>
          <Grid.Row>
            {coverPosition === "left" && (
              <Grid.Column width="2/5">
                {typeof cover === "string" ? (<div className="block"><Image className={`rounded-l-${roundedSize}`} src={cover} fluid={true} /></div>) : cover}
              </Grid.Column>
            )}

            <Grid.Column width="3/5">
              {(description !== undefined || title !== undefined) && (
                <div className={wrapperClasses}>
                  {typeof title === "string" && (<div className={titleClasses}>{title}</div>)}
                  {typeof title !== "string" && (title)}
                  {typeof description === "string" && (<div className={descClasses}>{description}</div>)}
                  {typeof description !== "string" && (description)}
                </div>
              )}
              {footer !== undefined && (
                <div className={`${wrapperClasses} mt-1`}>{footer}</div>
              )}
            </Grid.Column>

            {coverPosition === "right" && (
              <Grid.Column width="2/5">
                {typeof cover === "string" ? (<div className="block"><Image className={`rounded-r-${roundedSize}`} src={cover} fluid={true} /></div>) : cover}
              </Grid.Column>
            )}
          </Grid.Row>
        </Grid>
      )}
    </div>
  )
}

Card.propTypes = {
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
  shadow: true,
  shadowSize: "lg",
  rounded: true,
  roundedSize: "lg",
  px: 4,
  py: 4
}

export default Card;