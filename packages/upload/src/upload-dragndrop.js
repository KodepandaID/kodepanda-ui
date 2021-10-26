import React, { useRef, useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import axios from "axios";
import "tailwindcss/tailwind.css";

import { Button } from "@zenbu-ui/button";
import { Icon } from "@zenbu-ui/icon";
import { Grid } from "@zenbu-ui/grid";
import { Progress } from "@zenbu-ui/progress";

import { Margin } from "@zenbu-ui/classes";
import { Borders, Colors, Sizes, Spacings } from "@zenbu-ui/types";
import { 
  BorderSize, BorderType,
  Palletes, Color, Contrast,
  RoundedSize
} from "@zenbu-ui/utils";

const UploadDragAndDrop = ({ id, name, width, accept, disabled, multiple, progress, maxCount, maxSize, content, contentText, rounded,
  color, colorContrast, textColor, textColorContrast, buttonColor, buttonColorContrast, buttonColorHover, buttonColorHoverContrast,
  listColor, listColorContrast, progressColor, progressColorContrast, progressBgColor, progressBgColorContrast,
  border, borderColor, borderColorContrast, borderSize, borderStyle,
  listWidth, listBorder, listBorderColor, listBorderColorContrast, listBorderSize, listBorderStyle, listRounded,
  errorMessage, errorMaxSize, uploadUrl, method, showFileList, fileList, fileProgress, fileStatus,
  mx, my, mb, ml, mr, mt }) => {
  const node = useRef();

  const [files, setFiles] = useState([]);
  const [progressPercent, setProgressPercent] = useState({});
  const [progressStatus, setProgressStatus] = useState({});

  const wrapperClasses = cx(
    "relative",
    `w-${width} h-96`,
    Color("bg", color, colorContrast),
    Color("text", textColor, textColorContrast),
    border && `${BorderSize[borderSize]} ${BorderType[borderStyle]} ${Color("border", borderColor, borderColorContrast)}`,
    rounded !== "none" && `${RoundedSize[rounded]}`,
    Margin(mx, my, mb, ml, mr, mt)
  )

  const textClasses = cx(
    Color("text", textColor, textColorContrast),
    "text-sm"
  )

  const uploadFile = (f) => {
    f.map((file, i) => {
      if (file.error === undefined) {
        let data = new FormData();
        data.append("file", file);

        axios.request({
          method: method, 
          url: uploadUrl, 
          data: data, 
          onUploadProgress: (p) => {
            const percentComplete = Math.round((100 * p.loaded) / p.total);
            let obj = progressPercent;
            obj[i] = percentComplete;
            setProgressPercent({...obj})
            if (fileProgress !== undefined) fileProgress({...obj})
          }
        }).then (() => {
          let obj = progressStatus;
          obj[i] = "completed";
          setProgressStatus({...obj})
          if (fileStatus !== undefined) fileStatus({...obj})
        }).catch(() => {
          let obj = progressStatus;
          obj[i] = "failed";
          setProgressStatus({...obj})
          if (fileStatus !== undefined) fileStatus({...obj})
        })
      }
    })
  }

  const validateMaxSize = (f) => {
    if (files.length > 0) setFiles([])
    if (progressPercent === {}) setProgressPercent({})
    if (progressStatus === {}) setProgressStatus({})
    node.current.value = null;

    const arr = [];

    if (maxSize !== undefined) {
      for (let i = 0; i < f.length; i++) {
        if ((f[i].size / 1000) > maxSize) {
          let obj = f[i];
          obj.error = true;
          obj.errorCause = "maxSize";
          arr.push(obj)
        } else {
          setProgressPercent({...progressPercent, i: 0})
          setProgressStatus({...progressStatus, i: "uncompleted"})
          if (fileProgress !== undefined) fileProgress({...progressPercent, i: 0})
          if (fileStatus !== undefined) fileStatus({...progressStatus, i: "uncompleted"})
          arr.push(f[i])
        }

        if (maxCount !== undefined) {
          if (i === (maxCount - 1)) break
        }
      }
      setFiles([...arr])
      if (uploadUrl !== undefined) uploadFile([...arr])
    } else {
      for (let i = 0; i < f.length; i++) {
        setProgressPercent({...progressPercent, i: 0})
        setProgressStatus({...progressStatus, i: "uncompleted"})
        if (fileProgress !== undefined) fileProgress({...progressPercent, i: 0})
        if (fileStatus !== undefined) fileStatus({...progressStatus, i: "uncompleted"})
        arr.push(f[i])
        if (maxCount !== undefined) {
          if (i === (maxCount - 1)) break
        }
      }
      setFiles([...arr])
      if (uploadUrl !== undefined) uploadFile([...arr])
    }

    if (fileList !== undefined) fileList(arr)
  }

  const generateTextSize = (size) => {
    const s = Math.floor(size / 1000)
    if (s < 1000) return `${s} KB`
    else return `${(s / 1000).toFixed(2)} MB`
  }

  const dragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  const dragLeave = (e) => {
    e.preventDefault();
  }

  const drop = (e) => {
    e.preventDefault();
    
    const f = e.dataTransfer.files;
    if (!disabled) validateMaxSize([...f])
  }

  return(
    <div className="w-full relative">
      <div className={wrapperClasses}
      onDragOver={(e) => dragOver(e)}
      onDragLeave={(e) => dragLeave(e)}
      onDrop={(e) => drop(e)}>
        <input id={id} name={name} ref={node} type="file" accept={accept} multiple={multiple} className="hidden" onChange={(e) => {
          validateMaxSize([...e.currentTarget.files])
        }} />
        {content === undefined ? (
          <div className="w-full h-full flex flex-col items-center justify-center">
            <Icon icon="cloud-upload" size="lg" color={textColor} colorContrast={textColorContrast} />
            <div className="mt-5">
              <span className={textClasses}>{contentText}</span>
              <Button 
              width="full" color={buttonColor} colorContrast={buttonColorContrast} 
              colorHover={buttonColorHover} colorHoverContrast={buttonColorHoverContrast}
              size="sm"
              onClick={() => {
                if (!disabled) node.current.click()
              }}>choose file</Button>
            </div>
          </div>
        ) : (content)}

        {(files.length > 0 && showFileList) && (
          <div className="flex flex-col space-y-3 mt-4">
            {files.map((file, i) => {
              const listClasses = (status) => {
                return cx(
                  "relative",
                  `w-${listWidth}`,
                  file.error === undefined && Color("bg", listColor, listColorContrast),
                  (file.error !== undefined || status === "failed") && "bg-red-200",
                  Color("bg", listColor, listColorContrast),
                  RoundedSize[listRounded],
                  listBorder && `${BorderType[listBorderStyle]} ${BorderSize[listBorderSize]} ${Color("border", listBorderColor, listBorderColorContrast)}`,
                  "px-2",
                  "py-1"
                )
              }

              return(
                <div key={i} className={listClasses(progressStatus[i])}>
                  <Grid>
                    <Grid.Row>
                      <Grid.Column width="4/5">
                        <span className="text-xs">{file.name} <span className="font-bold ml-2">{generateTextSize(file.size)}</span></span>
                      </Grid.Column>
                      <Grid.Column width="1/5">
                        {(progress && progressStatus[i] === "completed") && (
                          <span className="absolute top-2 right-2"><Icon icon="check-circle" size="sm" color={progressColor} colorContrast={progressColorContrast} /></span>
                        )}
                        {(progress && progressStatus[i] === "failed") && (
                          <span className="absolute top-2 right-2"><Icon icon="exclamation" size="sm" color="red" colorContrast={700} /></span>
                        )}
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                  {progress && (
                    <Progress width="full" percentage={progressStatus[i] === "failed" ? 100 : progressPercent[i]} color={progressStatus[i] === "failed" ? "red" : progressColor} colorContrast={progressColorContrast} bgColor={progressBgColor} bgColorContrast={progressBgColorContrast} />
                  )}
                  {(file.error !== undefined || progressStatus[i] === "failed") && (<p className="text-xs text-red-700">{file.errorCause === "maxSize" ? errorMaxSize : errorMessage}</p>)}
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  )
}

UploadDragAndDrop.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  accept: PropTypes.string,
  content: PropTypes.node,
  listRounded: PropTypes.oneOf(Object.keys(RoundedSize)),
  listBorder: PropTypes.bool,
  listBorderColor: PropTypes.oneOf(Palletes),
  listBorderColorContrast: PropTypes.oneOf(Contrast),
  listBorderSize: PropTypes.oneOf(Object.keys(BorderSize)),
  listBorderStyle: PropTypes.oneOf(Object.keys(BorderType)),
  method: PropTypes.oneOf(["post", "put"]),
  uploadUrl: PropTypes.string,
  showFileList: PropTypes.bool,
  fileList: PropTypes.func,
  fileProgress: PropTypes.func,
  fileStatus: PropTypes.func,
  progress: PropTypes.bool,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  maxCount: PropTypes.number,
  maxSize: PropTypes.number,
  contentText: PropTypes.string,
  errorMaxSize: PropTypes.string,
  errorMessage: PropTypes.string,
  ...Borders,
  ...Colors,
  ...Sizes,
  ...Spacings
}

UploadDragAndDrop.defaultProps = {
  width: "full",
  listWidth: "full",
  accept: "*",
  disabled: false,
  multiple: false,
  progress: false,
  color: "gray",
  colorContrast: 100,
  buttonColor: "blue",
  buttonColorContrast: 600,
  buttonColorHover: "blue",
  buttonColorHoverContrast: 700,
  listColor: "gray",
  listColorContrast: 200,
  textColor: "gray",
  textColorContrast: 700,
  progressColor: "blue",
  progressColorContrast: 600,
  progressBgColor: "blue",
  progressBgColorContrast: 100,
  border: false,
  borderSize: "sm",
  borderColor: "gray",
  borderColorContrast: 700,
  borderStyle: "solid",
  errorMessage: "Upload failed",
  errorMaxSize: "The file size is too large.",
  listRounded: "none",
  listBorder: false,
  listBorderColor: "gray",
  listBorderColorContrast: 700,
  listBorderSize: "sm",
  listBorderStyle: "solid",
  rounded: "none",
  method: "post",
  showFileList: true,
  contentText: "Drag and drop your file here or",
}

export {
  UploadDragAndDrop
}
