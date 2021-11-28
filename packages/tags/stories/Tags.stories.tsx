import * as React from 'react'
import { Tag } from "../src"
import { Icon } from "../../icon/src"

export default { title: 'Components/Tags' }

export const Basic = () => {
  return(
    <Tag>
      <Icon icon="mail-open" height="4" mr="1" />
      Mail
    </Tag>
  )
}

export const Rounded = () => {
  return(
    <Tag rounded="full">
      <Icon icon="mail-open" height="4" mr="1" />
      Mail
    </Tag>
  )
}

export const Coloring = () => {
  return(
    <Tag
    color="blue" colorContrast="500"
    borderColor="blue" borderColorContrast="600"
    textColor="white">
      <Icon icon="mail-open-solid" height="4" mr="1" />
      Mail
    </Tag>
  )
}

export const RemoveBorder = () => {
  return(
    <Tag
    border={false}>
      <Icon icon="mail-open-solid" height="4" mr="1" />
      Mail
    </Tag>
  )
}

export const Link = () => {
  return(
    <Tag href="#">
      <Icon icon="mail-open-solid" height="4" mr="1" />
      Mail
    </Tag>
  )
}

export const Closable = () => {
  return(
    <Tag closable>
      <Icon icon="mail-open-solid" height="4" mr="1" />
      Mail
    </Tag>
  )
}
