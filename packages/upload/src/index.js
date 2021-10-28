import React, { useRef, useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import axios from "axios";

import { UploadAvatar } from "./upload-avatar";
import { UploadDragAndDrop } from "./upload-dragndrop";

import { Button } from "@zenbu-ui/button";
import { Icon, Index } from "@zenbu-ui/icon";
import { Grid } from "@zenbu-ui/grid";
import { Progress } from "@zenbu-ui/progress";

import { Margin } from "@zenbu-ui/classes";
import { Borders, Colors, Icons, Sizes, Spacings } from "@zenbu-ui/types";
import { 
  BorderSize, BorderType,
  Palletes, Color, Contrast,
  RoundedSize
} from "@zenbu-ui/utils";

const Upload = ({ id, name, width, accept, disabled, multiple, progress, maxCount, maxSize, content, rounded,
  color, colorContrast, colorHover, colorHoverContrast, textColor, textColorContrast,
  listColor, listColorContrast, progressColor, progressColorContrast, progressBgColor, progressBgColorContrast,
  border, borderColor, borderColorContrast, borderSize, borderStyle, icon,
  listWidth, listBorder, listBorderColor, listBorderColorContrast, listBorderSize, listBorderStyle, listRounded,
  errorMessage, errorMaxSize, uploadUrl, method, showFileList, fileList, fileProgress, fileStatus,
  mx, my, mb, ml, mr, mt }) => {
  const node = useRef();

  const [files, setFiles] = useState([]);
  const [progressPercent, setProgressPercent] = useState({});
  const [progressStatus, setProgressStatus] = useState({});

  const wrapperClasses = cx(
    "relative",
    "w-max",
    Margin(mx, my, mb, ml, mr, mt)
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

  return(
    <div className={wrapperClasses}>
      <input id={id} name={name} ref={node} type="file" accept={accept} multiple={multiple} className="hidden" onChange={(e) => {
        validateMaxSize([...e.currentTarget.files])
      }} />

      <Button
      width={width} disabled={disabled} rounded={rounded}
      color={color} colorContrast={colorContrast}
      colorHover={colorHover} colorHoverContrast={colorHoverContrast}
      textColor={textColor} textColorContrast={textColorContrast}
      border={border} borderColor={borderColor} borderColorContrast={borderColorContrast}
      borderSize={borderSize} borderStyle={borderStyle}
      labeled={typeof content === "string" ? true : false} labeledPosition="left" icon={typeof content === "string" ? icon : undefined}
      onClick={() => {
        if (!disabled) node.current.click();
      }}
      >
        {content}
      </Button>

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
  )
}

Upload.propTypes = {
  id: PropTypes.string,
  icon: PropTypes.oneOf(Object.keys(Index)),
  name: PropTypes.string,
  accept: PropTypes.string,
  disabled: PropTypes.bool,
  multiple: PropTypes.bool,
  progress: PropTypes.bool,
  maxCount: PropTypes.number,
  maxSize: PropTypes.number,
  errorMaxSize: PropTypes.string,
  errorMessage: PropTypes.string,
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
  ...Sizes,
  ...Borders,
  ...Colors,
  ...Icons,
  ...Spacings
}

Upload.defaultProps = {
  width: "max",
  listWidth: 96,
  accept: "*",
  disabled: false,
  multiple: false,
  progress: false,
  color: "blue",
  colorContrast: 600,
  colorHover: "blue",
  colorHoverContrast: 700,
  listColor: "gray",
  listColorContrast: 200,
  textColor: "white",
  textColorContrast: 700,
  progressColor: "blue",
  progressColorContrast: 600,
  progressBgColor: "blue",
  progressBgColorContrast: 100,
  border: false,
  icon: "upload",
  content: "Click to Upload",
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
}

Upload.Avatar = UploadAvatar;
Upload.DragAndDrop = UploadDragAndDrop;

export {
  Upload,
  UploadAvatar,
  UploadDragAndDrop
}
