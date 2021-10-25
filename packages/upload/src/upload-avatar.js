import React, { useEffect, useRef, useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import axios from "axios";
import "tailwindcss/tailwind.css";

import { Icon } from "@kodepanda-ui/icon";
import { Progress } from "@kodepanda-ui/progress";

import { Margin } from "@kodepanda-ui/classes";
import { Borders, Colors, Sizes, Spacings } from "@kodepanda-ui/types";
import { 
  BorderSize, BorderType,
  Color,
  RoundedSize
} from "@kodepanda-ui/utils";

const UploadAvatar = ({ id, name, width, disabled, defaultImage, progress, maxSize, content, hoverContent, rounded, circle,
  widthSM, widthMD, widthLG, widthXL, width2XL,
  color, colorContrast, textColor, textColorContrast, progressColor, progressColorContrast, progressBgColor, progressBgColorContrast,
  border, borderColor, borderColorContrast, borderSize, borderStyle,
  errorMessage, errorMaxSize, uploadUrl, method, fileList,
  mx, my, mb, ml, mr, mt }) => {
  const node = useRef();

  if (circle) rounded = "full";
  if (circle && typeof width !== "number") width = 15;

  const [files, setFiles] = useState(null);
  const [showProgress, setShowProgress] = useState(false);
  const [showHoverContent, setShowHoverContent] = useState(false);
  const [progressPercent, setProgressPercent] = useState(0);
  const [progressStatus, setProgressStatus] = useState("uncompleted");

  const wrapperClasses = cx(
    "relative",
    (widthSM === undefined && widthMD === undefined 
    && widthLG === undefined && widthXL === undefined
    && width2XL === undefined && width !== undefined) && `w-${width} h-${width}`,
    widthSM !== undefined && `sm:w-${widthSM} sm:h-${widthSM}`,
    widthMD !== undefined && `md:w-${widthMD} md:h-${widthMD}`,
    widthLG !== undefined && `lg:w-${widthLG} lg:h-${widthLG}`,
    widthXL !== undefined && `xl:w-${widthXL} xl:h-${widthLG}`,
    width2XL !== undefined && `2xl:w-${width2XL} 2xl:h-${widthLG}`,
    "flex",
    "flex-wrap",
    "items-center",
    "justify-center",
    Color("bg", color, colorContrast),
    border && `${BorderType[borderStyle]} ${BorderSize[borderSize]} ${Color("border", borderColor, borderColorContrast)}}`,
    rounded !== "none" && RoundedSize[rounded],
    disabled && `opacity-25`,
    "cursor-pointer",
    "overflow-hidden",
    Margin(mx, my, mb, ml, mr, mt)
  )

  const uploadFile = (f) => {
    if (f.error === undefined) {
      setShowProgress(true)

      let data = new FormData();
      data.append("file", f);

      axios.request({
        method: method, 
        url: uploadUrl, 
        data: data, 
        onUploadProgress: (p) => {
          const percentComplete = Math.round((100 * p.loaded) / p.total);
          setProgressPercent(percentComplete)
        }
      })
      .then (() => setProgressStatus("completed"))
      .catch(() => setProgressStatus("failed"))
    }
  }

  const validateMaxSize = (f) => {
    setFiles(null)
    setProgressPercent(0)
    setProgressStatus("uncompleted")
    node.current.value = null;

    let obj = f;
    if (maxSize !== undefined) {
      if ((f.size / 1000) > maxSize) {
        obj.error = true;
        obj.errorCause = "maxSize";
        setFiles(obj)
      } else setFiles(f)
    } else setFiles(f)

    if (uploadUrl !== undefined) uploadFile(f)
    if (fileList !== undefined) fileList(obj)
  }

  useEffect(() => {
    if (progressStatus === "completed" || progressStatus === "failed") {
      setInterval(() => setShowProgress(false), 5000)
    }
  }, [progressStatus])

  return(
    <div className={wrapperClasses} onClick={() => node.current.click()} 
    onMouseEnter={() => setShowHoverContent(true)}
    onMouseLeave={() => setShowHoverContent(false)}>
      {(defaultImage !== undefined && files === null) && (<img className={`w-${width} h-${width} object-cover`} src={defaultImage} />)}
      {files !== null && (
        <div className="w-full h-full flex flex-wrap items-center justify-center">
          {(progress && showProgress) && (
            <>
              <span className="absolute top-1/2">
                <Progress 
                width={20}
                percentage={progressPercent}
                color={progressStatus === "failed" ? "red" : progressColor} colorContrast={progressColorContrast}
                bgColor={progressBgColor} bgColorContrast={progressBgColorContrast} />
              </span>
              <div className="w-full h-full bg-black opacity-40 absolute top-0"></div>
            </>
          )}
          <img className={`w-${width} h-${width} object-cover`} src={`${URL.createObjectURL(files)}`} />
          {(progressStatus === "failed" && !showProgress) && (
            <div className="flex flex-col items-center justify-center">
              <Icon icon="exclamation" color="red" colorContrast={700} size="md" />
              <p className="text-xs text-red-700">{files.error === true ? errorMaxSize : errorMessage}</p>
            </div>
          )}
        </div>
      )}

      {(showHoverContent && hoverContent !== undefined && !showProgress) && (
        <div className="w-full h-full absolute top-0">
          <div className="w-full h-full bg-black opacity-40 absolute top-0 transition duration-700 ease-in-out"></div>
          <div className="w-full h-full relative">{hoverContent}</div>
        </div>
      )}
      <input id={id} name={name} ref={node} type="file" accept="image/*" className="hidden" onChange={(e) => {
        validateMaxSize(e.currentTarget.files[0])
      }} />
      {content === undefined ? (
        <div className="flex flex-col">
          {files === null && (
            <>
              <Icon icon="camera" color={textColor} colorContrast={textColorContrast} size="lg" />
            </>
          )}
        </div>
      ) : (content) }
    </div>
  )
}

UploadAvatar.propTypes = {
  circle: PropTypes.bool,
  id: PropTypes.string,
  name: PropTypes.string,
  defaultImage: PropTypes.string,
  content: PropTypes.node,
  hoverContent: PropTypes.node,
  method: PropTypes.oneOf(["post", "put"]),
  uploadUrl: PropTypes.string,
  fileList: PropTypes.func,
  progress: PropTypes.bool,
  disabled: PropTypes.bool,
  maxSize: PropTypes.number,
  errorMaxSize: PropTypes.string,
  errorMessage: PropTypes.string,
  ...Sizes,
  ...Borders,
  ...Colors,
  ...Spacings
}

UploadAvatar.defaultProps = {
  width: 32,
  circle: false,
  color: "gray",
  colorContrast: 100,
  textColor: "gray",
  textColorContrast: 700,
  disabled: false,
  progress: true,
  progressColor: "blue",
  progressColorContrast: 600,
  progressBgColor: "blue",
  progressBgColorContrast: 100,
  errorMessage: "Upload failed",
  errorMaxSize: "The file size is too large.",
  listRounded: "none",
  rounded: "none",
  border: false,
  borderColor: "gray",
  borderColorContrast: 700,
  borderSize: "sm",
  borderStyle: "solid",
  method: "post",
}

export {
  UploadAvatar
}
