import React from "react";
import { Divider } from "../index";

export default {
  title: 'Divider',
  component: Divider,
};

export const basic = () => (
  <div className="py-5">
    <Divider />
  </div>
)

export const text = () => (
  <div className="py-5">
    <Divider.Text as="h4" text="Description" />
  </div>
)

export const position = () => (
  <>
    <div className="py-5 mb-10">
      <Divider.Text as="h4" text="Description" textPosition="left" />
    </div>
    <div className="py-5">
      <Divider.Text as="h4" text="Description" textPosition="center" />
    </div>
    <div className="py-5">
      <Divider.Text as="h4" text="Description" textPosition="right" />
    </div>
  </>
)

export const coloring = () => (
  <div className="py-5">
    <Divider.Text
      as="h4" text="Description" textPosition="center"
      color="red" textColor="red" textColorContrast={700} />
  </div>
)

export const icon = () => (
  <div className="py-5">
    <Divider.Text as="h4" text="Description" icon="tag" />
  </div>
)
