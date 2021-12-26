import * as React from 'react'
import { Breadcrumb } from "../src"

export default { title: 'Components/Breadcrumb' }

export const Basic = () => {
  return(
    <Breadcrumb>
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
      <Breadcrumb.Item href="#" active>Data</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export const Coloring = () => {
  return(
    <Breadcrumb color="red" colorContrast="700" colorHover="red" colorHoverContrast="800">
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
      <Breadcrumb.Item href="#" active>Data</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export const Icon = () => {
  return(
    <Breadcrumb dividerIcon="arrow-sm-right-solid">
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
      <Breadcrumb.Item href="#" active>Data</Breadcrumb.Item>
    </Breadcrumb>
  )
}

export const IconHeight = () => {
  return(
    <Breadcrumb dividerIcon="arrow-sm-right-solid" dividerHeight="5">
      <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
      <Breadcrumb.Item href="#" active>Data</Breadcrumb.Item>
    </Breadcrumb>
  )
}
