import React from "react";
import { Input } from "../src";

export default {
  title: 'Input Number',
  component: Input.Number
};

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

export const noButton = () => (
  <Input.Number button={false} min={1} onChange={(e) => console.log(e)} />
)

export const separator = () => (
  <Input.Number separator="dot" button={false} min={1} onChange={(e) => console.log(e)} />
)

export const currency = () => (
  <Input.Number currency={true} currencyText="IDR" separator="dot" min={1} width={40} />
)
