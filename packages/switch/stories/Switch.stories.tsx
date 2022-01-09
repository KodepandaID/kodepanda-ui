import * as React from 'react'
import { Switch } from "../src"
import { Text } from "../../typography/src"

export default { title: 'Components/Switch' }

export const Basic = () => {
  return(
    <Switch onChange={(e) => console.log(e)} />
  )
}

export const Size = () => {
  return(
    <Switch width="4" />
  )
}

export const Coloring = () => {
  return(
    <Switch color="red" colorContrast="500" />
  )
}

export const Checked = () => {
  return(
    <Switch checked />
  )
}

export const Label = () => {
  return(
    <Switch label={(<Text span fontSize="sm">Hey, tes the switch toggle</Text>)} />
  )
}
