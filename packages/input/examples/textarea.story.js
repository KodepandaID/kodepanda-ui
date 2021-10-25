import React from "react";
import { Input } from "../src";

export default {
  title: 'Input TextArea',
  component: Input.TextArea
};

export const basic = () => (
  <Input.TextArea placeholder="Write anything you want here..." />
)

export const fluid = () => (
  <Input.TextArea fluid placeholder="Write anything you want here..." />
)

export const rounded = () => (
  <Input.TextArea rounded="md" placeholder="Write anything you want here..." />
)

export const color = () => (
  <Input.TextArea color="gray" colorContrast={200} border={false} rounded="md" placeholder="Write anything you want here..." />
)

export const shadow = () => (
  <Input.TextArea shadow="md" rounded="md" placeholder="Write anything you want here..." />
)

export const borderPosition = () => (
  <Input.TextArea borderPosition="bottom" borderSize="sm" borderColor="orange" borderColorContrast={400} color="gray" colorContrast={200} placeholder="Write anything you want here..." />
)

export const borderFocus = () => (
  <Input.TextArea focusBorderSize="sm" focusBorderColor="orange" focusBorderColorContrast={400} placeholder="Write anything you want here..." />
)

export const label = () => (
  <Input.TextArea label="TextArea" placeholder="Write anything you want here..." />
)
