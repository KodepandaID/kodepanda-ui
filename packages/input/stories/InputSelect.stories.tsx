import * as React from 'react'
import { Input } from "../src"
import { Text } from "../../typography/src"

export default { title: 'Components/Input Select' }

const data = [{
  key: "apple",
  value: "apple",
  text: "Apple"
}, {
  key: "orange",
  value: "orange",
  text: "Orange"
}, {
  key: "mango",
  value: "mango",
  text: "Mango"
}]

export const Basic = () => {
  return(
    <Input.Select name="tester" data={data} placeholder="Choose fruit" />
  )
}

export const Label = () => {
  return(
    <>
      <Input.Select name="tester" data={data} placeholder="Choose fruit" label={(<Text span fontSize="sm">Please select a fruit</Text>)} />
      <Input.Select name="tester" data={data} placeholder="Choose fruit" label={(<Text span fontSize="sm">Please select a fruit</Text>)} labelPosition="left" />
    </>
  )
}
export const Search = () => {
  return(
    <Input.Select name="tester" data={data} placeholder="Choose fruit" search />
  )
}

export const Fluid = () => {
  return(
    <Input.Select name="tester" data={data} placeholder="Choose fruit" fluid />
  )
}
