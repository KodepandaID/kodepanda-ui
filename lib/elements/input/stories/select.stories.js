import React from "react";

import { default as Input } from "../input";
import "../../../style.css"; 

export default {
  title: 'Example/Input Select',
  component: Input.Select
}

const options = [
  {
    key: "Apple",
    value: "Apple",
    text: "Apple"
  }, {
    key: "Orange",
    value: "Orange",
    text: "Orange"
  }
]

export const basic = () => (
  <>
    <Input.Select name="fruit" placeholder="Choose fruits..." options={options} />
  </>
)

export const optionColor = () => (
  <>
    <Input.Select name="fruit" placeholder="Choose fruits..." options={options} bgColor="white" selectHoverColor="indigo" />
  </>
)

export const shadow = () => (
  <div className="w-screen h-screen bg-gradient-to-r to-indigo-500 from-purple-500 p-10">
    <Input.Select focus={false} name="fruit" placeholder="Choose fruits..." options={options} bgColor="white" selectHoverColor="indigo" rounded="lg" shadow="lg" />
  </div>
)
