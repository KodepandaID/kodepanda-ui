import React from "react";
import { Input } from "../src";

export default {
  title: 'Input Pin',
  component: Input.Pin
};

export const basic = () => (
  <Input.Pin />
)

export const length = () => (
  <Input.Pin length={4} />
)

export const circle = () => (
  <Input.Pin circle />
)

export const border = () => (
  <Input.Pin borderPosition="bottom" borderSize="md" borderColor="blue" borderColorContrast={700} focus={false} />
)
