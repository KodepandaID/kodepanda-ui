import React from "react";
import { Breadcrumb } from "../src";

export default {
  title: 'Breadcrumb',
  component: Breadcrumb,
};

export const basic = () => (
  <Breadcrumb>
    <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>
    <Breadcrumb.Item><a href="#">Store</a></Breadcrumb.Item>
    <Breadcrumb.Item>Shirt</Breadcrumb.Item>
  </Breadcrumb>
)

export const divider = () => (
  <Breadcrumb dividerIcon="chevron-right">
    <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>
    <Breadcrumb.Item><a href="#">Store</a></Breadcrumb.Item>
    <Breadcrumb.Item>Shirt</Breadcrumb.Item>
  </Breadcrumb>
)

export const customLastDivider = () => (
  <Breadcrumb dividerIcon="chevron-right" lastDividerIcon="arrow-sm-right">
    <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>
    <Breadcrumb.Item><a href="#">Store</a></Breadcrumb.Item>
    <Breadcrumb.Item>Shirt</Breadcrumb.Item>
  </Breadcrumb>
)

export const coloring = () => (
  <Breadcrumb textColor="blue" textColorContrast={600} textColorActive="black">
    <Breadcrumb.Item><a href="#">Home</a></Breadcrumb.Item>
    <Breadcrumb.Item><a href="#">Store</a></Breadcrumb.Item>
    <Breadcrumb.Item>Shirt</Breadcrumb.Item>
  </Breadcrumb>
)
