import React from "react";
import { Input } from "../index";
import { Icon } from "../../icon";

export default {
  title: 'Input Select',
  component: Input.Select
};

const options = [
  {
    key: "Apple",
    value: "Apple",
    text: "Apple"
  }, {
    key: "Orange",
    value: "Orange",
    text: "Orange"
  }, {
    key: "Orange Lemon",
    value: "Orange Lemon",
    text: "Orange Lemon"
  }, {
    key: "Mango",
    value: "Mango",
    text: "Mango"
  }, {
    key: "Papaya",
    value: "Papaya",
    text: "Papaya"
  }, {
    key: "Banana",
    value: "Banana",
    text: "Banana"
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
  <Input.Select name="fruit" placeholder="Choose fruits..." options={options} defaultValue="Apple" />
)

export const backgroundColor = () => (
  <Input.Select color="gray" colorContrast={200} name="fruit" placeholder="Choose fruits..." options={options} />
)

export const rounded = () => (
  <Input.Select rounded="md" color="gray" colorContrast={200} name="fruit" placeholder="Choose fruits..." options={options} />
)

export const border = () => (
  <Input.Select borderSize="sm" borderColor="orange" borderColorContrast={400} name="fruit" placeholder="Choose fruits..." options={options} />
)

export const focusColor = () => (
  <Input.Select focusBorderSize="sm" focusBorderColor="orange" focusBorderColorContrast={400} name="fruit" placeholder="Choose fruits..." options={options} />
)

export const withoutFocus = () => (
  <Input.Select focus={false} name="fruit" placeholder="Choose fruits..." options={options} />
)

export const withCustomText = () => (
  <Input.Select name="fruit" placeholder="Choose fruits..." options={options2} onChange={(e) => console.log(e)} />
)


export const optionColor = () => (
  <Input.Select name="fruit" placeholder="Choose fruits..." options={options} color="white" selectHoverColor="indigo" />
)

export const shadow = () => (
  <div className="w-screen h-screen bg-gradient-to-r to-indigo-500 from-purple-500 p-10">
    <Input.Select focus={false} name="fruit" placeholder="Choose fruits..." options={options} color="white" selectHoverColor="indigo" rounded="lg" shadow="lg" />
    <div className="mt-5">
      <Input.Select focus={false} name="fruit2" placeholder="Choose fruits..." options={options} color="white" selectHoverColor="indigo" rounded="lg" shadow="lg" />
    </div>
  </div>
)

export const search = () => (
  <Input.Select search name="fruit" placeholder="Choose fruits..." options={options} />
)
