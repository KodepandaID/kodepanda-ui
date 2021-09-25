import React from "react";

import Button from "../../button/button";
import Input from "../input";
import Icon from "../../icon/icon";
import "../../../style.css"; 

export default {
  title: 'Example/Input',
  component: Input
}

export const basic = () => (
  <Input placeholder="Input here..." />
)

export const fluid = () => (
  <Input fluid placeholder="Input here..." />
)

export const rounded = () => (
  <Input rounded="md" placeholder="Input here..." />
)

export const color = () => (
  <Input color="gray" colorContrast={200} border={false} rounded="md" placeholder="Input here..." />
)

export const shadow = () => (
  <Input shadow="md" rounded="md" placeholder="Input here..." />
)

export const borderPosition = () => (
  <Input borderPosition="bottom" borderSize="sm" borderColor="orange" borderColorContrast={400}
  color="gray" colorContrast={200} rounded="md" roundedPosition="top" placeholder="Input here..." />
)

export const borderFocus = () => (
  <Input focusBorderSize="sm" focusBorderColor="orange" focusBorderColorContrast={400} rounded="md" placeholder="Input here..." />
)

export const borderStyle = () => (
  <div className="flex flex-row">
    <Input borderStyle="dotted" placeholder="Input here..." mr={5} />
    <Input borderStyle="dashed" placeholder="Input here..." />
  </div>
)

export const label = () => (
  <Input label="Input" placeholder="Input here..." />
)

export const labelPosition = () => (
  <Input label="Input" labelPosition="inside" placeholder="Input here..." />
)

export const icon = () => (
  <Input icon="mail" placeholder="Input here..." />
)

export const iconPosition = () => (
  <Input icon="mail" iconPosition="right" placeholder="Input here..." />
)

export const iconColor = () => (
  <Input icon="mail" iconColor="red" placeholder="Input here..." />
)

export const iconAction = () => (
  <Input icon="search" iconAction="microphone-solid" iconActionClick={() => console.log("action")} placeholder="Search..." />
)

export const placeholderColor = () => (
  <Input placeholder="Input here..." placeholderColor="red" textColor="red" borderColor="red" focusBorderColor="red" />
)

export const successAndError = () => (
  <div className="flex flex-col space-y-2">
    <Input placeholder="Input here..." success successMessage="Success message" />
    <Input placeholder="Input here..." error errorMessage="Error message" />
  </div>
)

export const width = () => (
  <div className="flex flex-col space-y-2">
    <Input placeholder="Input here..." width="1/5" />
    <Input placeholder="Input here..." width="1/4" />
    <Input placeholder="Input here..." width="1/3" />
    <Input placeholder="Input here..." width="2/5" />
    <Input placeholder="Input here..." width="1/2" />
    <Input placeholder="Input here..." width="3/5" />
    <Input placeholder="Input here..." width="2/3" />
    <Input placeholder="Input here..." width="3/4" />
    <Input placeholder="Input here..." width="4/5" />
    <Input placeholder="Input here..." width="full" />
  </div>
)