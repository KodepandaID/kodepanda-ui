import * as React from 'react'
import { Icon } from "../src"

export default { title: 'Components/Icon' }

export const Basic = () => {
  return(
    <Icon icon="academic-cap" />
  )
}

export const Solid = () => {
  return(
    <Icon icon="academic-cap-solid" />
  )
}

export const Coloring = () => {
  return(
    <Icon icon="academic-cap" color="blue" colorContrast="600" />
  )
}
