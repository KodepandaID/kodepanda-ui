import React, { useEffect, useRef, useState } from "react";
import { Transition } from "@headlessui/react";
import cx from "clsx";
import PropTypes from "prop-types";
import "@zenbu-ui/utils/tailwind.css";

import { Divider } from "@zenbu-ui/divider";
import { Grid } from "@zenbu-ui/grid";
import { Image } from "@zenbu-ui/image";
import { Button } from "@zenbu-ui/button";
import { Icon } from "@zenbu-ui/icon";

import { Margin, Padding } from "@zenbu-ui/classes";
import { Borders, Colors, Spacings } from "@zenbu-ui/types";
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

const Modal = ({ simple, bgImage, bgImageOverlay, size, title, subTitle, content, cover, coverPosition, footer,
  footerColor, footerColorContrast, border, shadow, rounded,
  color, colorContrast, borderColor, borderColorContrast,
  titleColor, titleColorContrast, titleBgColor, titleBgColorContrast, subTitleColor, subTitleColorContrast, contentColor, contentColorContrast,
  roundedPosition,
  dividerTop, dividerBottom,
  okButton, okButtonText, okButtonIcon, okButtonColor, okButtonColorContrast, okButtonColorHover, okButtonColorHoverContrast,
  cancelButton, cancelButtonText, cancelButtonIcon, cancelButtonColor, cancelButtonColorContrast, cancelButtonColorHover, cancelButtonColorHoverContrast,
  closable, closeIconColor, closeIconColorContrast, closeIconPosition, visible, closeOutside, onOk, onClose,
  mx, my, mb, ml, mr, mt,
  px, py, pb, pl, pr, pt }) => {
  if (cover !== undefined && coverPosition !== "top") size = "xl";
  if (closeIconPosition === "outside") closeIconColor = "white";
  if (simple) {
    size = "xl";
    dividerTop = false;
    dividerBottom = false;
    shadow = "none";
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
    !simple && Color("bg", color, colorContrast),
    !simple && shadow !== "none" && ShadowSize[shadow],
    !simple && border && "border",
    !simple &&  border && Color("border", borderColor, borderColorContrast),
    (rounded !== "none" && roundedPosition === undefined) && RoundedSize[rounded],
    (rounded !== "none" && roundedPosition !== undefined) && `${RoundedPosition[roundedPosition]}-${rounded}`,
    simple && Color("text", titleColor, titleColorContrast),
    "transform",
    "transition-all",
    visible && "ease-out duration-300",
    !visible && "ease-in duration-200",
    Margin(mx, my, mb, ml, mr, mt)
  )

  const wrapperClasses = cx(
    bgImage !== undefined && "w-full",
    bgImage !== undefined && "absolute",
    "h-full",
    (!simple && bgImage === undefined) && Color("bg", color, colorContrast),
    (cover !== undefined && coverPosition === "left" && rounded !== "none") && `rounded-r-${rounded}`,
    (cover !== undefined && coverPosition === "right" && rounded !== "none") && `rounded-l-${rounded}`,
    (cover !== undefined && coverPosition === "top" && rounded !== "none") && `rounded-b-${rounded}`,
  )

  const contentClasses = cx(
    Padding(px, py, pb, pl, pr, pt)
  )

  const titleWrapperClasses = cx(
    bgImage !== undefined && "w-full h-full",
    bgImage !== undefined && "absolute",
    titleBgColor === undefined && "py-2",
    (titleBgColor === undefined && !simple && bgImage === undefined) && Color("bg", color, colorContrast),
    titleBgColor !== undefined && Color("bg", titleBgColor, titleBgColorContrast),
    titleBgColor !== undefined && "py-3",
    rounded !== "none" && `rounded-t-${rounded}`,
    Padding(px, py, pb, pl, pr, pt)
  )

  const titleClasses = cx(
    Color("text", titleColor, titleColorContrast),
    "font-bold",
    "text-md"
  )

  const coverImagePositionClasses = cx(
    "rounded-none",
    (coverPosition === "top" && rounded !== "none") && `md:rounded-t-${rounded}`,
    (coverPosition === "left" && rounded !== "none") && `md:rounded-l-${rounded}`,
    (coverPosition === "right" && rounded !== "none") && `md:rounded-r-${rounded}`,
    (rounded !== "none") && `md:${RoundedSize[rounded]}`,
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
    RoundedSize[rounded],
  )

  const footerClasses = cx(
    !simple && Color("bg", footerColor, footerColorContrast),
    (cover === undefined && rounded !== "none") && `rounded-b-${rounded}`,
    (coverPosition === "left" && cover !== undefined && rounded !== "none") && `rounded-br-${rounded}`,
    (coverPosition === "right" && cover !== undefined && rounded !== "none") && `rounded-bl-${rounded}`,
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
            {bgImageOverlay && (<div className={`w-full h-full bg-black absolute opacity-50 ${rounded !== "none" && RoundedSize[rounded]}`} />)}
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
                        <Button
                        color={cancelButtonColor} colorContrast={cancelButtonColorContrast} colorHover={cancelButtonColorHover} colorHoverContrast={cancelButtonColorHoverContrast}
                        labeled={cancelButtonIcon !== undefined} labeledIcon={cancelButtonIcon !== undefined ? cancelButtonIcon : undefined} 
                        mr={2} onClick={() => {
                          if (onClose !== undefined) onClose()
                          setShow(false)
                        }}>{cancelButtonText}</Button>
                      )}
                      <Button
                      color={okButtonColor} colorContrast={okButtonColorContrast} colorHover={okButtonColorHover} colorHoverContrast={okButtonColorHoverContrast}
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
                {typeof cover === "string" ? (<div className="block align-bottom"><Image className={rounded !== "none" ? `rounded-t-${rounded}` : null} src={cover} fluid={true} /></div>) : cover}
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
                        <Button
                        color={cancelButtonColor} colorContrast={cancelButtonColorContrast} colorHover={cancelButtonColorHover} colorHoverContrast={cancelButtonColorHoverContrast}
                        labeled={cancelButtonIcon !== undefined} labeledIcon={cancelButtonIcon !== undefined ? cancelButtonIcon : undefined} 
                        mr={2} onClick={() => {
                          if (onClose !== undefined) onClose()
                          setShow(false)
                        }}>{cancelButtonText}</Button>
                      )}
                      <Button
                      color={okButtonColor} colorContrast={okButtonColorContrast} colorHover={okButtonColorHover} colorHoverContrast={okButtonColorHoverContrast}
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
              <div className="md:flex">
                {coverPosition === "left" && (
                  <div className="md:flex-shrink-0">
                    <Image heightSM="full" className={coverImagePositionClasses} src={cover} objectFit="cover" />
                  </div>
                )}
                <div className="p-3">
                  {(content !== undefined || title !== undefined) && (
                    <span>
                      <span>
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
                    </span>
                  )}
                </div>
                {coverPosition === "right" && (
                  <div className="md:flex-shrink-0">
                    <Image heightSM="full" className={coverImagePositionClasses} src={cover} objectFit="cover" />
                  </div>
                )}
              </div>
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
  content: PropTypes.node,
  footer: PropTypes.node,
  dividerTop: PropTypes.bool,
  dividerBottom: PropTypes.bool,
  closable: PropTypes.bool,
  closeIconPosition: PropTypes.oneOf(["inside", "outside"]),
  visible: PropTypes.bool,
  closeOutside: PropTypes.bool,
  onOk: PropTypes.func,
  onClose: PropTypes.func,
  okButton: PropTypes.bool,
  okButtonText: PropTypes.string,
  okButtonIcon: PropTypes.oneOf(Object.keys(Icon.Index)),
  okButtonColor: PropTypes.oneOf(Palletes),
  okButtonColorContrast: PropTypes.oneOf(Contrast),
  okButtonColorHover: PropTypes.oneOf(Palletes),
  okButtonColorHoverContrast: PropTypes.oneOf(Contrast),
  cancelButton: PropTypes.bool,
  cancelButtonText: PropTypes.string,
  cancelButtonIcon: PropTypes.oneOf(Object.keys(Icon.Index)),
  cancelButtonColor: PropTypes.oneOf(Palletes),
  cancelButtonColorContrast: PropTypes.oneOf(Contrast),
  cancelButtonColorHover: PropTypes.oneOf(Palletes),
  cancelButtonColorHoverContrast: PropTypes.oneOf(Contrast),
  ...Borders,
  ...Colors,
  ...Spacings
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
  shadow: "none",
  rounded: "none",
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
  okButtonColorContrast: 600,
  okButtonColorHover: "blue",
  okButtonColorHoverContrast: 700,
  okButtonText: "Yes",
  cancelButtonColor: "white",
  cancelButtonColorContrast: 600,
  cancelButtonColorHover: "gray",
  cancelButtonColorHoverContrast: 100,
  cancelButtonText: "No",
  px: 4,
  py: 2
}

export {
  Modal
}
