import * as React from 'react'
import { Input } from "../src"
import { Text } from "../../typography/src"

export default { title: 'Components/Input Textarea' }

export const Basic = () => {
  return(
    <Input.Textarea name="tester" placeholder="Write something here..." />
  )
}

export const DefaultValue = () => {
  return(
    <Input.Textarea name="tester" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." placeholder="Write something here..." />
  )
}

export const Disabled = () => {
  return(
    <Input.Textarea name="tester" placeholder="Write something here..." disabled />
  )
}

export const Coloring = () => {
  return(
    <Input.Textarea name="tester" placeholder="Write something here..." color="gray" colorContrast="200" />
  )
}

export const Error = () => {
  return(
    <Input.Textarea name="tester" placeholder="Write something here..." error errorText="This is an error message" />
  )
}

export const Success = () => {
  return(
    <Input.Textarea name="tester" placeholder="Write something here..." success successText="This is a success message" />
  )
}

export const Label = () => {
  return(
    <>
      <Input.Textarea name="tester" placeholder="Write something here..."
      label={(<Text span color="gray" colorContrast="600" fontWeight="semibold" fontSize="xs" textTransform="uppercase">Firstname</Text>)} mb="5" />

      <Input.Textarea name="tester" placeholder="Write something here..."
      label={(<Text span color="gray" colorContrast="600" fontWeight="semibold" fontSize="xs" textTransform="uppercase" mr="5">Firstname</Text>)} labelPosition="left" />
    </>
  )
}

export const Fluid = () => {
  return(
    <Input.Textarea name="tester" placeholder="Write something here..." fluid />
  )
}
