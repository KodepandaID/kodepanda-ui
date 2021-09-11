import React, { useEffect, useRef, useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color, Contrast } from "../../utils/color";
import { RoundedSize, RoundedPosition } from "../../utils/rounded";
import { ShadowSize } from "../../utils/shadow";

import { default as Divider } from "../divider/divider";
import { default as Grid } from "../grid/grid";
import { default as Image } from "../image/image";
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

const Modal = ({ simple, bgImage, bgImageOverlay, size, title, subTitle, content, cover, coverPosition, footer,
  border, shadow, rounded,
  color, colorContrast, borderColor, borderColorContrast,
  titleColor, titleColorContrast, subTitleColor, subTitleColorContrast, contentColor, contentColorContrast,
  roundedSize, roundedPosition, shadowSize,
  dividerTop, dividerBottom,
  closable, closeIconColor, closeIconColorContrast, closeIconPosition, visible, closeOutside, onClose,
  mb, ml, mr, mt,
  px, py, pb, pl, pr, pt }) => {
  if (cover !== undefined && coverPosition !== "top") size = "xl";
  if (closeIconPosition === "outside") closeIconColor = "white";
  if (simple) {
    size = "xl";
    dividerTop = false;
    dividerBottom = false;
    shadow = false;
    border = false;
    titleColor = "white";
    subTitleColor = "white";
    contentColor = "white";
    closeIconColor = "white";
    closable = false;
  }

  const node = useRef();

  const [show, setShow] = useState(visible);
  
  const overlayClasses = cx(
    "modal-transition",
    "modal-overlay",
    "fixed",
    "flex",
    "items-center",
    "justify-center",
    "w-screen h-screen",
    "bg-black",
    "bg-opacity-75",
  )

  const baseClasses = cx(
    "modal-transition",
    bgImage !== undefined && "flex",
    "relative",
    sizes[size],
    !simple && Color("bg", color, colorContrast),
    shadow && ShadowSize[shadowSize],
    border && "border",
    border && Color("border", borderColor, borderColorContrast),
    (rounded && roundedPosition === undefined) && RoundedSize[roundedSize],
    (rounded && roundedPosition !== undefined) && `${RoundedPosition[roundedPosition]}-${roundedSize}`,
    simple && Color("text", titleColor, titleColorContrast),
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

  const titleWrapperClasses = cx(
    bgImage !== undefined && "w-full h-full",
    bgImage !== undefined && "absolute",
    "pt-3",
    (px !== undefined && px >= 0) && `px-${px}`,
    (px !== undefined && px < 0) && `-px${px}`,
    (pl !== undefined && pl >= 0) && `pl-${pl}`,
    (pl !== undefined && pl < 0) && `-pl${pl}`,
    (pr !== undefined && pr >= 0) && `pr-${pr}`,
    (pr !== undefined && pr < 0) && `-pr${pr}`,
  )

  const titleClasses = cx(
    Color("text", titleColor, titleColorContrast),
    "font-bold",
    "text-md"
  )

  const closeClasses = cx(
    "absolute",
    (closeIconPosition === "inside" && title !== undefined) && "right-4 -mt-0.5",
    (closeIconPosition === "inside" && title === undefined) && "top-2 right-4",
    (closeIconPosition === "outside" && title === undefined && closeIconPosition === "outside" && cover === undefined) && "top-2 right-2",
    closeIconPosition === "outside" && "-top-7 right-0",
    "cursor-pointer",
    "z-40"
  )

  const descClasses = cx(
    Color("text", contentColor, contentColorContrast),
    "text-sm",
  )

  const bgImageClasses = cx(
    "w-full",
    "h-full",
    RoundedSize[roundedSize],
  )

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setShow(false)
    onClose()
  }

  useEffect(() => {
    setShow(visible)

    if (closeOutside) {
      if (show) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      }
    }

  }, [closeOutside, visible, show])

  return(
    show && (
      <div className={overlayClasses}>
        <div ref={node} className={baseClasses}>
          {bgImageOverlay && (<div className={`w-full h-full bg-black absolute opacity-50 ${rounded && RoundedSize[roundedSize]}`} />)}
          {bgImage !== undefined && (
            <img className={bgImageClasses} src={bgImage} />
          )}

          {cover === undefined && (
            <>
              <div className={titleWrapperClasses}>
                <div className="flex flex-row items-center">
                  {typeof title === "string" && (<div className={titleClasses}>{title}</div>)}
                  {(typeof title !== "string" && title !== undefined) && (title)}
                  {subTitle !== undefined && (<p className={`text-sm ${Color("text", subTitleColor, subTitleColorContrast)}`}>{subTitle}</p>)}
                  {closable && (
                    <div className={closeClasses} onClick={() => {
                      setShow(false)
                      if (onClose !== undefined) onClose()
                    }}>
                      <Icon icon="x-solid" size="sm" color={closeIconColor} contrast={closeIconColorContrast}  />
                    </div>
                  )}
                </div>
              </div>
              {(dividerTop && title !== undefined) && (<Divider />)}
              <div className={wrapperClasses}>
                {typeof content === "string" && (<div className={descClasses}>{content}</div>)}
                {typeof content !== "string" && (content)}
              </div>
              {footer !== undefined && (
                <span>
                  {dividerBottom && (<Divider />)}
                  <div className={`${wrapperClasses} mt-1`}>
                    {footer}
                  </div>
                </span>
              )}
            </>
          )}

          {(cover !== undefined && coverPosition === "top") && (
            <>
              {typeof cover === "string" ? (<div className="block align-bottom"><Image className={rounded ? `rounded-t-${roundedSize}` : null} src={cover} fluid={true} /></div>) : cover}
              {(content !== undefined || title !== undefined) && (
                <div className={wrapperClasses}>
                  <div className={simple}>
                    <span className="mb-1">
                      {typeof title === "string" && (<div className={titleClasses}>{title}</div>)}
                      {typeof title !== "string" && (title)}
                      {subTitle !== undefined && (<p className={`text-sm ${Color("text", subTitleColor, subTitleColorContrast)}`}>{subTitle}</p>)}
                      {closable && (
                        <div className={closeClasses} onClick={() => {
                          setShow(false)
                          if (onClose !== undefined) onClose()
                        }}>
                          <Icon icon="x-solid" size="sm" color={closeIconColor} contrast={closeIconColorContrast}  />
                        </div>
                      )}
                      {(dividerTop && title !== undefined) && (<Divider />)}
                    </span>
                    {typeof content === "string" && (<div className={descClasses}>{content}</div>)}
                    {typeof content !== "string" && (content)}
                  </div>
                </div>
              )}
              {footer !== undefined && (
                <span>
                  {dividerBottom && (<Divider />)}
                  <div className={`${wrapperClasses} mt-1`}>
                    {footer}
                  </div>
                </span>
              )}
            </>
          )}
          
          {(cover !== undefined && coverPosition !== "top") && (
            <Grid>
              <Grid.Row>
                {coverPosition === "left" && (
                  <Grid.Column width="1/2">
                    {typeof cover === "string" ? (<div className="block"><Image className={rounded ? `rounded-l-${roundedSize}` : null} src={cover} fluid={true} /></div>) : cover}
                  </Grid.Column>
                )}

                <Grid.Column width="1/2">
                  {(content !== undefined || title !== undefined) && (
                    <div className={wrapperClasses}>
                      <div>
                        <span className="mb-1">
                          {typeof title === "string" && (<div className={titleClasses}>{title}</div>)}
                          {typeof title !== "string" && (title)}
                          {subTitle !== undefined && (<p className={`text-sm ${Color("text", subTitleColor, subTitleColorContrast)}`}>{subTitle}</p>)}
                          {closable && (
                            <div className={closeClasses} onClick={() => {
                              setShow(false)
                              if (onClose !== undefined) onClose()
                            }}>
                              <Icon icon="x-solid" size="sm" color={closeIconColor} contrast={closeIconColorContrast}  />
                            </div>
                          )}
                          {(dividerTop && title !== undefined) && (<Divider />)}
                        </span>
                        {typeof content === "string" && (<div className={descClasses}>{content}</div>)}
                        {typeof content !== "string" && (content)}
                      </div>
                    </div>
                  )}
                  {footer !== undefined && (
                    <span>
                      {dividerBottom && (<Divider />)}
                      <div className={`${wrapperClasses} mt-1`}>
                        {footer}
                      </div>
                    </span>
                  )}
                </Grid.Column>

                {coverPosition === "right" && (
                  <Grid.Column width="1/2">
                    {typeof cover === "string" ? (<div className="block"><Image className={rounded ? `rounded-r-${roundedSize}` : null} src={cover} fluid={true} /></div>) : cover}
                  </Grid.Column>
                )}
              </Grid.Row>
            </Grid>
          )}
        </div>
      </div>
    )
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  simple: PropTypes.bool,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "full"]),
  cover: PropTypes.node,
  coverPosition: PropTypes.oneOf(["top", "left", "right"]),
  title: PropTypes.node,
  subTitle: PropTypes.string,
  bgImage: PropTypes.string,
  bgImageOverlay: PropTypes.bool,
  titleColor: PropTypes.oneOf(Palletes),
  titleColorContrast: PropTypes.oneOf(Contrast),
  subTitleColor: PropTypes.oneOf(Palletes),
  subTitleColorContrast: PropTypes.oneOf(Contrast),
  content: PropTypes.node,
  contentColor: PropTypes.oneOf(Palletes),
  contentColorContrast: PropTypes.oneOf(Contrast),
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
  dividerTop: PropTypes.bool,
  dividerBottom: PropTypes.bool,
  closable: PropTypes.bool,
  closeIconColor: PropTypes.oneOf(Palletes),
  closeIconColorContrast: PropTypes.oneOf(Contrast),
  closeIconPosition: PropTypes.oneOf(["inside", "outside"]),
  visible: PropTypes.bool,
  closeOutside: PropTypes.bool,
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

Modal.defaultProps = {
  simple: false,
  size: "md",
  coverPosition: "left",
  titleColor: "black",
  titleColorContrast: 700,
  subTitleColor: "gray",
  subTitleColorContrast: 300,
  contentColor: "gray",
  contentColorContrast: 600,
  color: "white",
  colorContrast: 200,
  borderColorContrast: 300,
  border: false,
  shadow: true,
  shadowSize: "lg",
  rounded: true,
  roundedSize: "lg",
  dividerTop: true,
  dividerBottom: true,
  closable: true,
  visible: false,
  closeIconColor: "black",
  closeIconColorContrast: 700,
  closeIconPosition: "inside",
  closeOutside: true,
  px: 4,
  py: 2
}

export default Modal;