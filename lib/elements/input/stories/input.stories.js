import React from "react";

import Input from "../input";
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
    <Input placeholder="Input here..." color="red" mr={5} />
    <Input placeholder="Input here..." color="blue" mr={5} />
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

export const label = () => (
  <>
    <Input placeholder="Input here..." label="https://" mr={5} />
    <Input placeholder="Input here..." label="Kg" labelColor="blue" labelColorContrast={500} labelPosition="right" mr={5} />
  </>
)

export const labelIcon = () => (
  <>
    <Input placeholder="Input here..." labelIcon="link" mr={5} />
  </>
)

export const button = () => (
  <div className="flex flex-wrap content-center">
    <Input placeholder="Input here..." defaultValue="https://kodepanda.com" button="Copy link" buttonIcon="duplicate" mr={5} />
    <Input placeholder="Input here..." defaultValue="https://kodepanda.com" button="Copy link" buttonIcon="duplicate" buttonPosition="right" mr={5} />
  </div>
)

export const buttonIcon = () => (
  <div className="flex flex-wrap content-center">
    <Input placeholder="Search..." buttonIcon="search" mr={5} />
    <Input placeholder="Search..." buttonIcon="search" buttonPosition="right" mr={5} />
  </div>
)

export const shadow = () => (
  <div className="w-screen h-screen bg-gradient-to-r to-indigo-500 from-purple-500 p-10">
    <Input focus={false} placeholder="Search..." color="white" rounded="lg" shadow="lg" />
  </div>
)