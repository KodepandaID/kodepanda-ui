import * as React from 'react'
import { Input } from "../src"
import { Text } from "../../typography/src"

export default { title: 'Components/Input Credit Card' }

export const Basic = () => {
  return(
    <Input.CreditCard name="tester" placeholder="Card Number" onChange={(cardNumber, valid, type) => {
      console.log(`card number: ${cardNumber}`)
      console.log(`is valid: ${valid}`)
      console.log(`card type: ${type}`)
    }} />
  )
}

export const Label = () => {
  return(
    <>
      <Input.CreditCard name="tester" placeholder="Card Number"
      label={(<Text span color="gray" colorContrast="600" fontWeight="semibold" fontSize="xs" textTransform="uppercase">Credit/Debit Card Number</Text>)} mb="5" />
      <Input.CreditCard name="tester" placeholder="Card Number"
      label={(<Text span color="gray" colorContrast="600" fontWeight="semibold" fontSize="xs" textTransform="uppercase">Credit/Debit Card Number</Text>)} labelPosition="left" />
    </>
  )
}
