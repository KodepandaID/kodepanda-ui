import React from "react";

import { default as Input } from "../input";
import "../../../style.css"; 

export default {
  title: 'Example/Input',
  component: Input
}

export const basic = () => (
  <>
    <Input placeholder="Input here..." />
  </>
)

export const size = () => (
  <>
    <Input placeholder="Input here..." size="xs" mr={5} />
    <Input placeholder="Input here..." size="sm" mr={5} />
    <Input placeholder="Input here..." size="md" mr={5} />
    <Input placeholder="Input here..." size="lg" mr={5} />
    <Input placeholder="Input here..." size="xl" />
  </>
)

export const fluid = () => (
  <>
    <Input placeholder="Input here..." fluid />
  </>
)

export const background = () => (
  <>
    <Input placeholder="Input here..." bgColor="red" mr={5} />
    <Input placeholder="Input here..." bgColor="blue" mr={5} />
  </>
)

export const borderColor = () => (
  <>
    <Input placeholder="Input here..." borderColor="red" mr={5} />
    <Input placeholder="Input here..." borderColor="blue" mr={5} />
  </>
)

export const textColor = () => (
  <>
    <Input placeholder="Input here..." defaultValue="Red" textColor="red" borderColor="red" focusBorderColor="red" mr={5} />
    <Input placeholder="Input here..." defaultValue="Green" textColor="green" borderColor="green" focusBorderColor="green" mr={5} />
  </>
)

export const placeholderColor = () => (
  <>
    <Input placeholder="Input here..." placeholderColor="red" textColor="red" borderColor="red" focusBorderColor="red" mr={5} />
    <Input placeholder="Input here..." placeholderColor="green" textColor="green" borderColor="green" focusBorderColor="green" mr={5} />
  </>
)

export const icon = () => (
  <>
    <Input placeholder="Input here..." icon="check" mr={5} />
    <Input placeholder="Input here..." icon="check" iconPosition="left" mr={5} />
  </>
)

export const successAndError = () => (
  <>
    <Input placeholder="Input here..." success mr={5} successMessage="Success message" />
    <Input placeholder="Input here..." error mr={5} errorMessage="Error message" />
  </>
)

export const width = () => (
  <>
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
  </>
)