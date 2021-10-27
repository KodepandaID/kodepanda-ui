import React, { useState } from "react";
import { Upload } from "../index";
import { Icon } from "../../icon";
import { Progress } from "../../progress";

export default {
  title: 'Upload',
  component: Upload
};

export const basic = () => (
  <Upload />
)

export const uploadToServer = () => (
  <Upload uploadUrl="http://localhost:3000/" progress multiple />
)

export const accept = () => (
  <Upload accept="image/*" />
)

export const content = () => (
  <Upload color="black" colorHover="gray" colorHoverContrast={800} rounded="full" content={(
    <div className="flex flex-row items-center justify-center space-x-2">
      <Icon icon="camera-solid" color="white" height={5} />
      <span className="font-bold text-white">UPLOAD</span>
    </div>
  )} />
)

export const maxSize = () => (
  <Upload maxSize={500} />
)

export const maxCount = () => (
  <Upload multiple maxCount={3} />
)

export const fileList = () => (
  <Upload maxSize={500} fileList={(file) => console.log(file)} />
)

export const customFileList = () => {
  const [files, setFiles] = useState([]);
  const [progress, setProgress] = useState({});
  const [progressStatus, setProgressStatus] = useState({});

  return(
    <div className="relative w-full h-full flex flex-col items-center justify-center bg-blue-100 border-dashed border-2 border-blue-300 px-5 py-5">
      <Upload 
      color="blue" colorContrast={200} colorHover="blue" colorHoverContrast={300} rounded="lg"
      content={(
        <div className="flex flex-row items-center justify-center space-x-2">
          <Icon icon="upload-solid" color="blue" colorContrast={600} height={5} />
          <span className="font-bold text-blue-600">UPLOAD</span>
        </div>
      )}
      width={96} uploadUrl="http://localhost:3000/" multiple
      showFileList={false} fileList={(files) => setFiles(files)} fileProgress={(progress) => setProgress(progress)} fileStatus={(status) => setProgressStatus(status)} />
      {files.length > 0 && (<p className="text-center text-xs mt-2 text-blue-600">Total Files: {files.length}</p>)}
      <div className="w-1/2 mt-3 px-5">
        {files.map((file, i) => {
            return(
              <div key={i} className="w-full bg-blue-200 px-3 py-2 mb-3 border-dashed border-blue-300 border-b-2">
                <div className="flex flex-row items-center">
                  <Icon icon="document-text" size="md" color="blue" colorContrast={500} />
                  <span className="text-sm text-blue-600">{file.name} (<span className="font-bold">{Math.floor(file.size / 1000)}KB</span>) {progressStatus[i] !== "uncompleted" && (progressStatus[i])}</span>
                </div>
                <div className="mt-3">
                  <Progress width="full" percentage={progressStatus[i] === "failed" ? 100 : progress[i]} color={progressStatus[i] === "failed" ? "red" : "blue"} colorContrast={800} bgColor="blue" bgColorContrast={300} />
                </div>
              </div>
            )
          })}
      </div>
    </div>
  )
}
