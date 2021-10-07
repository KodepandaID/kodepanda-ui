import React from "react";

import Upload from "../upload";
import Icon from "../../icon/icon";

export default {
  title: 'Example/Upload',
  component: Upload
}

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

export const fileList= () => (
  <Upload maxSize={500} fileList={(file) => console.log(file)} />
)