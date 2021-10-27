import React from "react";
import { Icon } from "../index";

export default {
  title: 'Icon',
  component: Icon,
};

export const basic = () => (
  <div className="h-14 flex flex-wrap content-center">
    <div><Icon icon="academic-cap" size="md" /></div>
    <div><Icon icon="adjustments" size="md" /></div>
    <div><Icon icon="annotation" size="md" /></div>
  </div>
)

export const solid = () => (
  <div className="h-14 flex flex-wrap content-center">
    <div><Icon icon="academic-cap-solid" size="md" /></div>
    <div><Icon icon="adjustments-solid" size="md" /></div>
    <div><Icon icon="annotation-solid" size="md" /></div>
  </div>
)

export const iconColor = () => (
  <div className="h-14 flex flex-wrap content-center">
    <div><Icon icon="academic-cap" color="red" size="md" /></div>
  </div>
)
