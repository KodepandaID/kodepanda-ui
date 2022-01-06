import * as React from 'react'
import { Input } from "../src"
import { Text } from "../../typography/src"

export default { title: 'Components/Input Number' }

export const Basic = () => {
  return(
    <Input.Number name="tester" placeholder="Place a number here" onChange={(val) => console.log(val)} />
  )
}

export const Separator = () => {
  return(
    <div className="flex flex-col space-y-5">
      <Input.Number name="tester" placeholder="Place a number here" separator="dot" />
      <Input.Number name="tester" placeholder="Place a number here" separator="comma" />
    </div>
  )
}

export const Currency = () => {
  return(
    <Input.Number name="tester" placeholder="Place a number here" currency currencyText={(<Text span fontSize="sm">Rp</Text>)} separator="dot" />
  )
}

export const MinMax = () => {
  return(
    <Input.Number name="tester" placeholder="Place a number here" min={10} max={100} onChange={(e) => console.log(e)} />
  )
}

export const Keyboard = () => {
  return(
    <Input.Number name="tester" placeholder="Place a number here" min={0} keyboard onChange={(e) => console.log(e)} />
  )
}

export const Fluid = () => {
  return(
    <Input.Number fluid name="tester" placeholder="Place a number here" onChange={(val) => console.log(val)} />
  )
}

