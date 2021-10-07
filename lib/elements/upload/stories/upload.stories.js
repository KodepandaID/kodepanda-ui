import React from "react";

import Upload from "../upload";

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
  <Upload content={(<span className="font-bold text-white">Upload Files</span>)} />
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