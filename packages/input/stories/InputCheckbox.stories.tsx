import * as React from 'react'
import { Input } from "../src"
import { Text } from "../../typography/src"

export default { title: 'Components/Input Checkbox' }

export const Basic = () => {
  const [checked, setChecked] = React.useState(false)
  return(
    <>
      <p>Checked: <strong>{`${checked}`}</strong></p>
      <Input.Checkbox name="tester" label={(<Text span fontSize="sm">Default checkbox</Text>)}
      onChange={(e) => setChecked(e)} />
    </>
  )
}

export const Coloring = () => {
  return(
    <Input.Checkbox
    color="red" colorContrast="600"
    name="tester" label={(<Text span fontSize="sm">Default checkbox</Text>)} />
  )
}

export const Checked = () => {
  return(
    <Input.Checkbox
    checked
    name="tester" label={(<Text span fontSize="sm">Default checkbox</Text>)} />
  )
}
