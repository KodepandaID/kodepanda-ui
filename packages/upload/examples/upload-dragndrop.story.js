import React from "react";
import { Upload } from "../src";

export default {
  title: 'Upload Drag and Drop',
  component: Upload.DragAndDrop
};

export const basic = () => (
  <Upload.DragAndDrop fileList={(file) => console.log(file)} />
)

export const rounded = () => (
  <Upload.DragAndDrop rounded="lg" />
)

export const border = () => (
  <Upload.DragAndDrop border borderColor="gray" borderColorContrast={700} borderStyle="dashed" />
)

export const coloring = () => (
  <Upload.DragAndDrop color="blue" colorContrast={100} />
)

export const customContent = () => (
  <Upload.DragAndDrop 
  color="blue" colorContrast={100}
  border borderColor="blue" borderColorContrast={400} borderStyle="dashed"
  content={(
    <div className="w-full h-full flex flex-col items-center justify-center">
      <img src="https://kodepanda.com/assets/add-files.svg" width="150" />
      <p className="text-lg font-bold text-blue-600">Drag & Drop</p>
      <p className="text-sm text-blue-400">Your files here or Browse to upload</p>
    </div>
  )} />
)
