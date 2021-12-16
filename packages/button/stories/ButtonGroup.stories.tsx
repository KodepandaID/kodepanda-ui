import * as React from 'react'
import { ButtonGroup } from "../src"

export default { title: 'Components/Button Group' }

export const Basic = () => {
  return(
    <ButtonGroup color="gray" colorContrast="200" colorHover="gray" colorHoverContrast="300">
      <ButtonGroup.Item icon="menu" />
      <ButtonGroup.Item icon="menu-alt-2" />
      <ButtonGroup.Item icon="menu-alt-3" />
    </ButtonGroup>
  )
}

export const Border = () => {
  return(
    <ButtonGroup
    color="gray" colorContrast="200" colorHover="gray" colorHoverContrast="300"
    border borderColor="gray" borderColorContrast="300">
      <ButtonGroup.Item icon="menu" />
      <ButtonGroup.Item icon="menu-alt-2" />
      <ButtonGroup.Item icon="menu-alt-3" />
    </ButtonGroup>
  )
}

export const Rounded = () => {
  return(
    <ButtonGroup
    rounded="none"
    color="gray" colorContrast="200" colorHover="gray" colorHoverContrast="300">
      <ButtonGroup.Item icon="menu" />
      <ButtonGroup.Item icon="menu-alt-2" />
      <ButtonGroup.Item icon="menu-alt-3" />
    </ButtonGroup>
  )
}

export const Shadow = () => {
  return(
    <ButtonGroup
    shadow="md"
    color="gray" colorContrast="200" colorHover="gray" colorHoverContrast="300">
      <ButtonGroup.Item icon="menu" />
      <ButtonGroup.Item icon="menu-alt-2" />
      <ButtonGroup.Item icon="menu-alt-3" />
    </ButtonGroup>
  )
}

export const Link = () => {
  return(
    <ButtonGroup
    shadow="md"
    color="gray" colorContrast="200" colorHover="gray" colorHoverContrast="300">
      <ButtonGroup.Item icon="menu" href="https://kodepanda.com" target="_blank" />
      <ButtonGroup.Item icon="menu-alt-2" />
      <ButtonGroup.Item icon="menu-alt-3" />
    </ButtonGroup>
  )
}
