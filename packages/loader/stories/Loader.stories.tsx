import * as React from 'react'
import { Loader } from "../src"

export default { title: 'Components/Loader' }

export const Basic = () => {
  return(
    <Loader />
  )
}

export const Coloring = () => {
  return(
    <Loader bgColor="red" bgColorContrast="400" />
  )
}

export const Text = () => {
  return(
    <Loader text="Loading" />
  )
}

export const Width = () => {
  return(
    <Loader width="14" fontSize="lg" text="Loading" />
  )
}
