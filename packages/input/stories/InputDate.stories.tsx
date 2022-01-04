import * as React from 'react'
import { Input } from "../src"
import { Text } from "../../typography/src"

export default { title: 'Components/Input Date' }

export const Basic = () => {
  return(
    <Input.Date name="tester" onChange={(unix, date) => console.log(`${unix} => ${date}`)} />
  )
}

export const Time = () => {
  return(
    <Input.Date name="tester" time format="DD/MM/YYYY HH:mm" onChange={(unix, date) => console.log(`${unix} => ${date}`)} />
  )
}

export const Format = () => {
  return(
    <Input.Date name="tester" format="DD MMM YYYY" onChange={(unix, date) => console.log(`${unix} => ${date}`)} />
  )
}

export const Label = () => {
  return(
    <>
      <Input.Date name="tester" format="DD MMM YYYY"
      label={(<Text span color="gray" colorContrast="600" fontWeight="semibold" fontSize="xs" textTransform="uppercase">Date</Text>)} mb="5" />

      <Input.Date name="tester" format="DD MMM YYYY"
      label={(<Text span color="gray" colorContrast="600" fontWeight="semibold" fontSize="xs" textTransform="uppercase" mr="5">Date</Text>)} labelPosition="left" />
    </>
  )
}
