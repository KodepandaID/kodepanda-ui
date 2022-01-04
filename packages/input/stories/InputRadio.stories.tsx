import * as React from 'react'
import { Input } from "../src"
import { Text } from "../../typography/src"

export default { title: 'Components/Input Radio' }

export const Basic = () => {
  return(
    <>
      <Input.Radio value={1} name="tester" label={(<Text span fontSize="sm">Default checkbox 1</Text>)} />
      <Input.Radio value={2} name="tester" label={(<Text span fontSize="sm">Default checkbox 2</Text>)} />
    </>
  )
}

export const Inline = () => {
  return(
    <>
      <Input.Radio inline value={1} name="tester" label={(<Text span fontSize="sm">Default checkbox 1</Text>)} />
      <Input.Radio inline value={2} name="tester" label={(<Text span fontSize="sm">Default checkbox 2</Text>)} />
    </>
  )
}

export const Coloring = () => {
  return(
    <>
      <Input.Radio value={1}
      color="red" colorContrast="600"
      name="tester" label={(<Text span fontSize="sm">Default checkbox 1</Text>)} />
      <Input.Radio value={2}
      color="red" colorContrast="600"
      name="tester" label={(<Text span fontSize="sm">Default checkbox 2</Text>)} />
    </>
  )
}

export const Checked = () => {
  return(
    <>
      <Input.Radio value={1}
      checked
      name="tester" label={(<Text span fontSize="sm">Default checkbox 1</Text>)} />
      <Input.Radio value={2}
      name="tester" label={(<Text span fontSize="sm">Default checkbox 2</Text>)} />
    </>
  )
}
