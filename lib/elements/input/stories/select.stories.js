import React from "react";

import Input from "../input";
import Icon from "../../icon/icon";
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

const options2 = [
  {
    key: "Apple",
    value: "Apple",
    text: (
      <>
        <Icon icon="emoji-happy" color="green" />
        <span className="ml-2">Apple</span>
      </>
    )
  }, {
    key: "Orange",
    value: "Orange",
    text: (
      <>
        <Icon icon="emoji-sad" color="red" />
        <span className="ml-2">Orange</span>
      </>
    )
  }
]

export const basic = () => (
  <>
    <Input.Select name="fruit" placeholder="Choose fruits..." options={options} />
  </>
)

export const withCustomText = () => (
  <>
    <Input.Select name="fruit" placeholder="Choose fruits..." options={options2} />
  </>
)


export const optionColor = () => (
  <>
    <Input.Select name="fruit" placeholder="Choose fruits..." options={options} color="white" selectHoverColor="indigo" />
  </>
)

export const shadow = () => (
  <div className="w-screen h-screen bg-gradient-to-r to-indigo-500 from-purple-500 p-10">
    <Input.Select focus={false} name="fruit" placeholder="Choose fruits..." options={options} color="white" selectHoverColor="indigo" rounded="lg" shadow="lg" />
    <div className="mt-5">
      <Input.Select focus={false} name="fruit2" placeholder="Choose fruits..." options={options} color="white" selectHoverColor="indigo" rounded="lg" shadow="lg" />
    </div>
  </div>
)
