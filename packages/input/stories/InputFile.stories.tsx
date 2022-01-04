import * as React from 'react'
import { Input } from "../src"

export default { title: 'Components/Input File' }

export const Basic = () => {
  return(
    <Input.File name="tester" accept="*" />
  )
}

export const TextState = () => {
  return(
    <Input.File name="tester" accept="*" textState="Tidak ada data yang dipilih" />
  )
}

export const Disabled = () => {
  return(
    <Input.File name="tester" accept="*" disabled />
  )
}

export const Multiple = () => {
  return(
    <Input.File name="tester" accept="*" multiple />
  )
}

export const MaxSize = () => {
  return(
    <Input.File name="tester" accept="*" maxSize={1000} />
  )
}

export const CustomErrorMaxSize = () => {
  return(
    <Input.File name="tester" accept="*" maxSize={1000} errorMaxSize={(maxSize: string) => `File tidak boleh lebih besar dari ${maxSize}`} />
  )
}

export const MaxCount = () => {
  return(
    <Input.File name="tester" accept="*" multiple maxCount={3} onChange={(e) => console.log(e)} />
  )
}
