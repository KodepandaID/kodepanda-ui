import * as React from 'react'
import { Input } from "../src"

export default { title: 'Components/Input Pin' }

export const Basic = () => {
  return(
    <Input.Pin name="tester" onComplete={(val) => console.log(val)} />
  )
}
