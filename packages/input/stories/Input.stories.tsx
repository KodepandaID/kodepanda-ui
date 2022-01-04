import * as React from 'react'
import { Input } from "../src"
import { Text } from "../../typography/src"

export default { title: 'Components/Input' }

export const Basic = () => {
  return(
    <Input name="tester" placeholder="Write text here..." onChange={(e) => console.log(e)} />
  )
}

export const DefaultValue = () => {
  return(
    <Input name="tester" value="ahay" placeholder="Write text here..." />
  )
}

export const Disabled = () => {
  return(
    <Input name="tester" placeholder="Write text here..." disabled />
  )
}

export const Fluid = () => {
  return(
    <Input name="tester" placeholder="Write text here..." fluid />
  )
}

export const Coloring = () => {
  return(
    <Input name="tester" placeholder="Write text here..." color="gray" colorContrast="200" />
  )
}

export const PlaceholderColoring = () => {
  return(
    <Input name="tester" placeholder="Write text here..." color="gray" colorContrast="200" placeholderColor="white" />
  )
}

export const BorderWidth = () => {
  return(
    <Input name="tester" placeholder="Write text here..." borderWidth="2" borderFocusWidth="2" />
  )
}

export const borderPosition = () => {
  return(
    <Input name="tester" placeholder="Write text here..."
    borderColor="orange" borderColorContrast="500" borderWidth="2"
    borderFocusWidth="2" borderPosition="bottom" rounded="none" />
  )
}

export const FocusColoring = () => {
  return(
    <Input name="tester" placeholder="Write text here..."
    borderWidth="2"
    borderFocusWidth="2" borderFocusColor="orange" borderFocusColorContrast="500" />
  )
}

export const WithoutRounded = () => {
  return(
    <Input name="tester" placeholder="Write text here..." rounded="none" />
  )
}

export const Shadow = () => {
  return(
    <Input name="tester" placeholder="Write text here..." shadow="lg" />
  )
}

export const Responsive = () => {
  return(
    <Input name="tester" placeholder="Write text here..." sm={{width: "full"}} />
  )
}

export const Error = () => {
  return(
    <Input name="tester" icon="user" placeholder="Write text here..." error errorText="This is an error message" />
  )
}

export const Success = () => {
  return(
    <Input name="tester" icon="user" placeholder="Write text here..." success successText="This is a success message" />
  )
}

export const Icon = () => {
  return(
    <div className="flex flex-row space-x-3">
      <Input name="tester" placeholder="Write text here..." icon="mail" />
      <Input name="tester" placeholder="Write text here..." icon="mail" iconColor="blue" iconPosition="right" />
    </div>
  )
}

export const IconAction = () => {
  return(
    <Input name="tester" placeholder="Search..." icon="search" iconAction="microphone-solid" iconActionClick={() => console.log("click")} />
  )
}

export const ClearValue = () => {
  return(
    <Input name="tester" placeholder="Write text here..." clearValue />
  )
}

export const Label = () => {
  return(
    <>
      <Input name="tester" placeholder="Write text here..." icon="user"
      label={(<Text span color="gray" colorContrast="600" fontWeight="semibold" fontSize="xs" textTransform="uppercase">Firstname</Text>)} mb="5" />

      <Input name="tester" placeholder="Write text here..." icon="user"
      label={(<Text span color="gray" colorContrast="600" fontWeight="semibold" fontSize="xs" textTransform="uppercase" mr="5">Firstname</Text>)} labelPosition="left" />
    </>
  )
}

export const Fieldset = () => {
  return(
    <Input name="tester" placeholder="Write text here..."
    label={(<Text span color="gray" colorContrast="600" fontSize="xs" textTransform="uppercase">Firstname</Text>)} labelPosition="inside" />
  )
}

export const Password = () => {
  return(
    <Input name="tester" placeholder="Write text here..." type="password" />
  )
}
