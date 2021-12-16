import { Provider } from '@zenbu-ui/provider'
import * as React from 'react'
import { Button } from "../src"

export default { title: 'Components/Button' }

export const Basic = () => {
  return(
    <Button>Basic Button</Button>
  )
}

export const Coloring = () => {
  return(
    <div className="flex space-x-2">
      <Button>Basic Button</Button>
      <Button color="black">Black Button</Button>
      <Button color="red" colorContrast="600">Black Button</Button>
      <Button color="green" colorContrast="600">Green Button</Button>
      <Button color="yellow" colorContrast="500">Yellow Button</Button>
      <Button color="purple" colorContrast="500">Purple Button</Button>
    </div>
  )
}

export const Disabled = () => {
  return(
    <Button disabled>Button</Button>
  )
}

export const Width = () => {
  return(
    <Button width="52">Button</Button>
  )
}

export const Fluid = () => {
  return(
    <Button fluid>Button</Button>
  )
}

export const Responsive = () => {
  return(
    <Button color="black" md={{width: "full"}}>Button</Button>
  )
}

export const Rounded = () => {
  return(
    <Button rounded="none">Button</Button>
  )
}

export const Shadow = () => {
  return(
    <Button shadow="md">Button</Button>
  )
}

export const ShadowColor = () => {
  return(
    <Button color="cyan" colorContrast="500" shadow="lg" shadowColor="cyan" shadowColorContrast="500" shadowOpacity={50}>Button</Button>
  )
}

export const OnClick = () => {
  return(
    <Button onClick={() => console.log("button")}>Button</Button>
  )
}

export const Link = () => {
  return(
    <Button href="https://kodepanda.com" target="_blank">Button</Button>
  )
}

export const Icon = () => {
  return(
    <Button icon="phone-solid" iconHeight="4" iconColor="white" />
  )
}

export const Circle = () => {
  return(
    <Button
    circle
    width="8"
    icon="phone-solid" iconHeight="4" iconColor="white" />
  )
}

export const Loading = () => {
  return(
    <div className="flex space-x-2">
      <Button loading />
      <Button width="24" loading />
      <Button loading loadingText="Please Wait..." />
    </div>
  )
}

export const DarkMode = () => {
  return(
    <Provider dark>
      <Button darkColor="white" darkTextColor="black">Basic Button</Button>
    </Provider>
  )
}
