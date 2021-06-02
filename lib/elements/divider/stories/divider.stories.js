import React from "react";

import { default as Divider } from "../divider";
import "../../../style.css";

export default {
  title: 'Example/Divider',
  component: Divider,
}

export const basic = () => (
  <>
    <div className="py-5">
      <Divider />
    </div>
  </>
)

export const text = () => (
  <>
    <div className="py-5">
      <Divider.Text as="h4" text="Description" />
    </div>
  </>
)

export const position = () => (
  <>
    <div className="py-5 mb-10">
      <Divider.Text as="h4" text="Description" textPosition="left" />
    </div>
    <div className="py-5">
      <Divider.Text as="h4" text="Description" textPosition="right" />
    </div>
  </>
)

export const icon = () => (
  <>
    <div className="py-5">
      <Divider.Text as="h4" text="Description" icon="tag" />
    </div>
  </>
)