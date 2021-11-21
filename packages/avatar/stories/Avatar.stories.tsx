import * as React from 'react'
import { Avatar } from "../src"

export default { title: 'Components/Avatar' }

const url = "https://images.unsplash.com/photo-1635522324378-ddd2d5cdaa55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=128&h=128&dpr=2&q=80"
const url2 = "https://images.unsplash.com/photo-1635355799993-8110a85e2ecc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=128&h=128&dpr=2&q=80"

export const Basic = () => {
  return(
    <Avatar alt="Avatar for user ABC" src={url} />
  )
}

export const Border = () => {
  return(
    <Avatar
    border borderColor="gray" borderColorContrast={200}
    alt="Avatar for user ABC" src={url} />
  )
}

export const Text = () => {
  return(
    <Avatar
    alt="Avatar for user ABC"
    bgColor="yellow" bgColorContrast={200} textColor="yellow" textColorContrast={500}
    text="YP" />
  )
}

export const Blur = () => {
  return(
    <Avatar blur alt="Avatar for user ABC" src={url} />
  )
}

export const Group = () => {
  return(
    <Avatar.Group>
      <Avatar alt="Avatar for user 1" src={url} />
      <Avatar alt="Avatar for user 2" src={url2} />
      <Avatar
      alt="Avatar for user 3"
      bgColor="yellow" bgColorContrast={200} textColor="yellow" textColorContrast={500}
      text="YP" />
    </Avatar.Group>
  )
}
