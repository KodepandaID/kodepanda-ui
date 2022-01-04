import * as React from 'react'
import { Input } from "../src"
import { Text } from "../../typography/src"

export default { title: 'Components/Input Phone' }

export const Basic = () => {
  return(
    <Input.Phone name="tester" placeholder="Phone number" />
  )
}

export const Label = () => {
  return(
    <>
      <Input.Phone name="tester"
      label={(<Text span color="gray" colorContrast="600" fontWeight="semibold" fontSize="xs" textTransform="uppercase">Phone Number</Text>)} mb="5" />

      <Input.Phone name="tester"
      label={(<Text span color="gray" colorContrast="600" fontWeight="semibold" fontSize="xs" textTransform="uppercase" mr="5">Phone Number</Text>)} labelPosition="left" />
    </>
  )
}
