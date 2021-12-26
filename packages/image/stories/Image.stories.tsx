import * as React from 'react'
import { Image } from "../src"

export default { title: 'Components/Image' }

export const Basic = () => {
  return(
    <Image alt="Daniel Seßler - Free Iceland" src="https://images.unsplash.com/photo-1637090405093-0bc0a607b441?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" />
  )
}

export const Rounded = () => {
  return(
    <Image
    rounded="lg"
    alt="Daniel Seßler - Free Iceland" src="https://images.unsplash.com/photo-1637090405093-0bc0a607b441?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" />
  )
}

export const Border = () => {
  return(
    <Image
    border borderColor="gray" borderColorContrast="200" px="2" py="2"
    alt="Daniel Seßler - Free Iceland" src="https://images.unsplash.com/photo-1637090405093-0bc0a607b441?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" />
  )
}

export const Caption = () => {
  return(
    <Image
    caption="Daniel Seßler - Free Iceland"
    border borderColor="gray" borderColorContrast="200" px="2" py="2"
    alt="Daniel Seßler - Free Iceland" src="https://images.unsplash.com/photo-1637090405093-0bc0a607b441?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" />
  )
}

export const Circle = () => {
  return(
    <Image circle alt="Daniel Seßler - Free Iceland" src="https://images.unsplash.com/photo-1637090405093-0bc0a607b441?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" />
  )
}

export const Blur = () => {
  return(
    <Image blur alt="Daniel Seßler - Free Iceland" src="https://images.unsplash.com/photo-1637090405093-0bc0a607b441?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" />
  )
}

export const Fluid = () => {
  return(
    <Image fluid alt="Daniel Seßler - Free Iceland" src="https://images.unsplash.com/photo-1637090405093-0bc0a607b441?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8" />
  )
}
