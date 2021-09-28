import React from "react";

import Input from "../input";

export default {
  title: 'Example/Input Number',
  component: Input.Number
}

export const basic = () => (
  <Input.Number min={1} />
)

export const max = () => (
  <Input.Number min={1} max={10} />
)

export const coloring = () => (
  <Input.Number 
  buttonColor="blue" buttonColorContrast={600}
  buttonColorHover="blue" buttonColorHoverContrast={700}
  iconColor="white" borderColor="blue" borderColorContrast={700} min={1} />
)

export const rounded = () => (
  <Input.Number min={1} rounded="md" />
)

export const noBorder = () => (
  <Input.Number border={false} min={1} />
)