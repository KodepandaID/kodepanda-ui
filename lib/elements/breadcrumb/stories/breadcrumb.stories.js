import React from "react";

import Breadcrumb from "../breadcrumb";

export default {
  title: 'Example/Breadcrumb',
  component: Breadcrumb,
}

export const basic = () => (
  <Breadcrumb>
    <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>
    <Breadcrumb.Item><a href="#">Store</a></Breadcrumb.Item>
    <Breadcrumb.Item>Shirt</Breadcrumb.Item>
  </Breadcrumb>
)

export const divider = () => (
  <Breadcrumb dividerIcon={"chevron-right"}>
    <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>
    <Breadcrumb.Item><a href="#">Store</a></Breadcrumb.Item>
    <Breadcrumb.Item>Shirt</Breadcrumb.Item>
  </Breadcrumb>
)

export const customLastDivider = () => (
  <Breadcrumb dividerIcon={"chevron-right"} lastDividerIcon={"arrow-sm-right"}>
    <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>
    <Breadcrumb.Item><a href="#">Store</a></Breadcrumb.Item>
    <Breadcrumb.Item>Shirt</Breadcrumb.Item>
  </Breadcrumb>
)

export const coloring = () => (
  <Breadcrumb textColor={"blue"} textColorContrast={600} activeTextColor={"black"}>
    <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>
    <Breadcrumb.Item><a href="#">Store</a></Breadcrumb.Item>
    <Breadcrumb.Item>Shirt</Breadcrumb.Item>
  </Breadcrumb>
)