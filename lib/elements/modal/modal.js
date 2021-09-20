import React, { useEffect, useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Palletes, Color, Contrast } from "../../utils/color";
import { RoundedSize, RoundedPosition } from "../../utils/rounded";
import { ShadowSize } from "../../utils/shadow";

import Divider from "../divider/divider";
import Grid from "../grid/grid";
import Image from "../image/image";
import Button from "../button/button";
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
  footerColor, footerColorContrast, border, shadow, rounded,
  color, colorContrast, borderColor, borderColorContrast,
  titleColor, titleColorContrast, titleBgColor, titleBgColorContrast, subTitleColor, subTitleColorContrast, contentColor, contentColorContrast,
  roundedSize, roundedPosition, shadowSize,
  dividerTop, dividerBottom,
  okButton, okButtonText, okButtonIcon, okButtonColor,
  cancelButton, cancelButtonText, cancelButtonIcon, cancelButtonColor,
  closable, closeIconColor, closeIconColorContrast, closeIconPosition, visible, closeOutside, onOk, onClose,
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
    "fixed",
    "flex",
    "items-center",
    "justify-center",
    "w-screen h-screen",
    "bg-black",
    "bg-opacity-75",
    "transition-opacity",
  )

  const baseClasses = cx(
    bgImage !== undefined && "flex",
    "relative",
    sizes[size],
    !simple && shadow && ShadowSize[shadowSize],
    !simple && border && "border",
    !simple &&  border && Color("border", borderColor, borderColorContrast),
    (rounded && roundedPosition === undefined) && RoundedSize[roundedSize],
    (rounded && roundedPosition !== undefined) && `${RoundedPosition[roundedPosition]}-${roundedSize}`,
    simple && Color("text", titleColor, titleColorContrast),
    "transform",
    "transition-all",
    visible && "ease-out duration-300",
    !visible && "ease-in duration-200",
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
    bgImage !== undefined && "w-full",
    bgImage !== undefined && "absolute",
    "h-full",
    (!simple && bgImage === undefined) && Color("bg", color, colorContrast),
    (cover !== undefined && coverPosition === "left" && rounded) && `rounded-r-${roundedSize}`,
    (cover !== undefined && coverPosition === "right" && rounded) && `rounded-l-${roundedSize}`,
    (cover !== undefined && coverPosition === "top" && rounded) && `rounded-b-${roundedSize}`,
  )

  const contentClasses = cx(
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
    titleBgColor === undefined && "py-2",
    (titleBgColor === undefined && !simple && bgImage === undefined) && Color("bg", color, colorContrast),
    titleBgColor !== undefined && Color("bg", titleBgColor, titleBgColorContrast),
    titleBgColor !== undefined && "py-3",
    rounded && `rounded-t-${roundedSize}`,
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

  const coverClasses = cx(
    "h-full",
    (coverPosition === "left" && rounded) && `rounded-l-${roundedSize}`,
    (coverPosition === "right" && rounded) && `rounded-r-${roundedSize}`,
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

  const footerClasses = cx(
    !simple && Color("bg", footerColor, footerColorContrast),
    (cover === undefined && rounded) && `rounded-b-${roundedSize}`,
    (coverPosition === "left" && cover !== undefined && rounded) && `rounded-br-${roundedSize}`,
    (coverPosition === "right" && cover !== undefined && rounded) && `rounded-bl-${roundedSize}`,
  )

  const footerItemClasses = cx(
    "flex",
    "justify-end",
    "p-2"
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
    <Transition
    show={visible}
    appear={visible}
    enter="ease-out duration-300"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="ease-in duration-200"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
    >
      <div id="modals" className={overlayClasses}>
        <Transition.Child
        enter="ease-out duration-300"
        enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
        enterTo="opacity-100 translate-y-0 sm:scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 translate-y-0 sm:scale-100"
        leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
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
                <div className={wrapperClasses}>
                  {(dividerTop && title !== undefined) && (<Divider mt={0} />)}
                  <div className={contentClasses}>
                    {typeof content === "string" && (<div className={descClasses}>{content}</div>)}
                    {typeof content !== "string" && (content)}
                  </div>
                </div>
                {footer !== undefined && (
                  <div className={footerClasses}>
                    {dividerBottom && (<Divider mt={0} />)}
                    <div className={wrapperClasses}>
                      {footer}
                    </div>
                  </div>
                )}
                {(footer === undefined && okButton) && (
                  <div className={footerClasses}>
                    {dividerBottom && (<Divider mt={0} />)}
                    <div className={footerItemClasses}>
                      {cancelButton && (
                        <Button size="sm" color={cancelButtonColor} 
                        labeled={cancelButtonIcon !== undefined} labeledIcon={cancelButtonIcon !== undefined ? cancelButtonIcon : undefined} 
                        mr={2} onClick={() => {
                          if (onClose !== undefined) onClose()
                          setShow(false)
                        }}>{cancelButtonText}</Button>
                      )}
                      <Button size="sm" color={okButtonColor}
                      labeled={okButtonIcon !== undefined} labeledIcon={okButtonIcon !== undefined ? okButtonIcon : undefined}
                      onClick={() => {
                        if (onOk !== undefined) onOk()
                      }}>{okButtonText}</Button>
                    </div>
                  </div>
                )}
              </>
            )}

            {(cover !== undefined && coverPosition === "top") && (
              <>
                {typeof cover === "string" ? (<div className="block align-bottom"><Image className={rounded ? `rounded-t-${roundedSize}` : null} src={cover} fluid={true} /></div>) : cover}
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
                        {(dividerTop && title !== undefined) && (<Divider mt={0} />)}
                      </span>
                      <div className={contentClasses}>
                        {typeof content === "string" && (<div className={descClasses}>{content}</div>)}
                        {typeof content !== "string" && (content)}
                      </div>
                    </div>
                  </div>
                )}
                {footer !== undefined && (
                  <div className={footerClasses}>
                    {dividerBottom && (<Divider mt={0} />)}
                    <div className={wrapperClasses}>
                      {footer}
                    </div>
                  </div>
                )}
                {(footer === undefined && okButton) && (
                  <div className={footerClasses}>
                    {dividerBottom && (<Divider mt={0} />)}
                    <div className={footerItemClasses}>
                      {cancelButton && (
                        <Button size="sm" color={cancelButtonColor} 
                        labeled={cancelButtonIcon !== undefined} labeledIcon={cancelButtonIcon !== undefined ? cancelButtonIcon : undefined} 
                        mr={2} onClick={() => {
                          if (onClose !== undefined) onClose()
                          setShow(false)
                        }}>{cancelButtonText}</Button>
                      )}
                      <Button size="sm" color={okButtonColor}
                      labeled={okButtonIcon !== undefined} labeledIcon={okButtonIcon !== undefined ? okButtonIcon : undefined}
                      onClick={() => {
                        if (onOk !== undefined) onOk()
                      }}>{okButtonText}</Button>
                    </div>
                  </div>
                )}
              </>
            )}
            
            {(cover !== undefined && coverPosition !== "top") && (
              <Grid gap={0}>
                <Grid.Row gap={0}>
                  {coverPosition === "left" && (
                    <Grid.Column width="1/2">
                      {typeof cover === "string" ? (<div className="block h-full"><Image className={coverClasses} src={cover} fluid={true} objectFit="cover" /></div>) : cover}
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
                            {(dividerTop && title !== undefined) && (<Divider mt={0} />)}
                          </span>
                          <div className={contentClasses}>
                            {typeof content === "string" && (<div className={descClasses}>{content}</div>)}
                            {typeof content !== "string" && (content)}
                          </div>
                        </div>
                      </div>
                    )}
                    {footer !== undefined && (
                      <div className={footerClasses}>
                        {dividerBottom && (<Divider mt={0} />)}
                        <div className={wrapperClasses}>
                          {footer}
                        </div>
                      </div>
                    )}
                    {(footer === undefined && okButton) && (
                      <div className={footerClasses}>
                        {dividerBottom && (<Divider mt={0} />)}
                        <div className={footerItemClasses}>
                          {cancelButton && (
                            <Button size="sm" color={cancelButtonColor} 
                            labeled={cancelButtonIcon !== undefined} labeledIcon={cancelButtonIcon !== undefined ? cancelButtonIcon : undefined} 
                            mr={2} onClick={() => {
                              if (onClose !== undefined) onClose()
                              setShow(false)
                            }}>{cancelButtonText}</Button>
                          )}
                          <Button size="sm" color={okButtonColor}
                          labeled={okButtonIcon !== undefined} labeledIcon={okButtonIcon !== undefined ? okButtonIcon : undefined}
                          onClick={() => {
                            if (onOk !== undefined) onOk()
                          }}>{okButtonText}</Button>
                        </div>
                      </div>
                    )}
                  </Grid.Column>

                  {coverPosition === "right" && (
                    <Grid.Column width="1/2">
                      {typeof cover === "string" ? (<div className="block h-full"><Image className={coverClasses} src={cover} fluid={true} objectFit="cover" /></div>) : cover}
                    </Grid.Column>
                  )}
                </Grid.Row>
              </Grid>
            )}
          </div>
        </Transition.Child>
      </div>
    </Transition>
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
  titleBgColor: PropTypes.oneOf(Palletes),
  titleBgColorContrast: PropTypes.oneOf(Contrast),
  titleColor: PropTypes.oneOf(Palletes),
  titleColorContrast: PropTypes.oneOf(Contrast),
  subTitleColor: PropTypes.oneOf(Palletes),
  subTitleColorContrast: PropTypes.oneOf(Contrast),
  content: PropTypes.node,
  contentColor: PropTypes.oneOf(Palletes),
  contentColorContrast: PropTypes.oneOf(Contrast),
  footer: PropTypes.node,
  footerColor: PropTypes.oneOf(Palletes),
  footerColorContrast: PropTypes.oneOf(Contrast),
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
  onOk: PropTypes.func,
  onClose: PropTypes.func,
  okButton: PropTypes.bool,
  okButtonText: PropTypes.string,
  okButtonIcon: PropTypes.oneOf(Object.keys(Icon.Index)),
  okButtonColor: PropTypes.oneOf(Palletes),
  cancelButton: PropTypes.bool,
  cancelButtonText: PropTypes.string,
  cancelButtonIcon: PropTypes.oneOf(Object.keys(Icon.Index)),
  cancelButtonColor: PropTypes.oneOf(Palletes),
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
  titleBgColorContrast: 700,
  titleColor: "black",
  titleColorContrast: 700,
  subTitleColor: "gray",
  subTitleColorContrast: 300,
  contentColor: "gray",
  contentColorContrast: 600,
  color: "white",
  colorContrast: 200,
  footerColor: "gray",
  footerColorContrast: 100,
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
  okButton: true,
  cancelButton: true,
  okButtonColor: "blue",
  okButtonText: "Yes",
  cancelButtonColor: "white",
  cancelButtonText: "No",
  px: 4,
  py: 2
}

export default Modal;