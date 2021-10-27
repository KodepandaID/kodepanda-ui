import React from "react";
import { Upload } from "../index";
import { Icon } from "../../icon";

export default {
  title: 'Upload Avatar',
  component: Upload.Avatar
};

export const basic = () => (
  <Upload.Avatar uploadUrl="http://localhost:3000/" progress />
)

export const rounded = () => (
  <Upload.Avatar rounded="md" />
)

export const circle = () => (
  <Upload.Avatar circle />
)

export const border = () => (
  <Upload.Avatar border borderStyle="dashed" />
)

export const coloring = () => (
  <Upload.Avatar color="red" colorContrast={300} />
)

export const defaultImage = () => (
  <Upload.Avatar defaultImage="https://kodepanda.com/assets/strawberry-short-cake.jpg" />
)

export const hoverContent = () => (
  <Upload.Avatar
  defaultImage="https://kodepanda.com/assets/strawberry-short-cake.jpg"
  hoverContent={(
    <div className="h-full flex flex-col items-center justify-center content-center">
      <Icon icon="camera" color="white" size="md" />
      <span className="text-xs text-center text-white">Change Avatar</span>
    </div>
  )} />
)

export const customContent = () => {
  return(
    <Upload.Avatar content={(
      <div className="flex flex-col items-center justify-center space-y-1">
        <img src="https://cdn2.iconfinder.com/data/icons/social-media-8/512/image2..png" width="50" />
        <p className="text-xs font-bold text-gray-800 text-center">Upload Your <br /> Avatar</p>
      </div>
    )} />
  )
}
