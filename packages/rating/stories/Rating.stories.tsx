import * as React from 'react'
import { Rating } from "../src"

export default { title: 'Components/Rating' }

export const Basic = () => {
  return(
    <Rating />
  )
}

export const DefaultValue = () => {
  return(
    <Rating defaultValue={3} />
  )
}

export const Count = () => {
  return(
    <Rating count={6} />
  )
}

export const Coloring = () => {
  return(
    <Rating color="blue" colorContrast="400" />
  )
}

export const Heart = () => {
  return(
    <Rating heart color="pink" colorContrast="500" />
  )
}
