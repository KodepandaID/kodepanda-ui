import React from "react";

import Input from "../input";

export default {
  title: 'Example/Input Date',
  component: Input.Date
}

export const basic = () => (
  <Input.Date onChange={(unix, format) => {
    console.log(`Unix: ${unix}`)
    console.log(`Date: ${format}`)
  }} />
)

export const time = () => (
  <Input.Date time onChange={(unix, format) => {
    console.log(`Unix: ${unix}`)
    console.log(`Date: ${format}`)
  }} />
)