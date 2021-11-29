import * as React from 'react'
import { Skeleton } from "../src"

export default { title: 'Components/Skeleton' }

export const Basic = () => {
  return(
    <>
      <Skeleton width="20" mr="2" />
      <Skeleton width="44" mr="2" />
      <Skeleton width="72" />
    </>
  )
}

export const Coloring = () => {
  return(
    <>
      <Skeleton width="20" color="blue" colorContrast="200" mr="2" />
      <Skeleton width="44" color="blue" colorContrast="200" mr="2" />
      <Skeleton width="72" color="blue" colorContrast="200" />
    </>
  )
}

export const Circle = () => {
  return(
    <Skeleton width="32" circle />
  )
}
