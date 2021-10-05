import React from 'react';

import Button from "../button";
import Dropdown from "../../dropdown/dropdown";
import Icon from "../../icon/icon";
import Divider from "../../divider/divider";

export default {
  title: 'Example/Button',
  component: Button
}

export const basic = () => (
  <Button>Button</Button>
)

export const coloring = () => (
  <div className="flex flex-row">
    <Button color="blue" mr={5}>Blue</Button>
    <Button color="red" colorContrast={600} colorHover="red" colorHoverContrast={700} mr={5}>Red</Button>
    <Button color="green" colorContrast={600} colorHover="green" colorHoverContrast={700} mr={5}>Green</Button>
    <Button color="yellow" colorContrast={300} colorHover="yellow" colorHoverContrast={400} mr={5}>Yellow</Button>
  </div>
)

export const gradient = () => (
  <Button
    textColor="white"
    gradient="top-left"
    gradientColorFrom="green" gradientColorContrastFrom={400}
    gradientColorTo="blue" gradientColorContrastTo={500}
    gradientColorHoverFrom="green" gradientColorHoverContrastFrom={500}
    gradientColorHoverTo="blue" gradientColorHoverContrastTo={600}>Button</Button>
)

export const size = () => (
  <div className="flex flex-row">
    <Button size="xs" mr={5}>Button XS</Button>
    <Button size="sm" mr={5}>Button SM</Button>
    <Button size="md" mr={5}>Button MD</Button>
    <Button size="lg" mr={5}>Button LG</Button>
  </div>
)

export const rounded = () => (
 <div className="flex flex-row">
    <Button rounded="xs" mr={5}>Rounded XS</Button>
    <Button rounded="sm" mr={5}>Rounded SM</Button>
    <Button rounded="md" mr={5}>Rounded MD</Button>
    <Button rounded="lg" mr={5}>Rounded LG</Button>
    <Button rounded="full" mr={5}>Rounded FULL</Button>
 </div>
)

export const roundedPosition = () => (
  <div className="flex flex-row">
    <Button rounded="md" roundedPosition="left" mr={5}>Button Rounded Left</Button>
    <Button rounded="md" roundedPosition="right">Button Rounded Right</Button>
  </div>
)

export const customSize = () => (
  <Button width={72} height={14}>Custom Size Button</Button>
)

export const border = () => (
  <Button
  color="lime" colorContrast={300} colorHover="lime" colorHoverContrast={300}
  textColor="black" textColorHover="black"
  border borderSize="sm" borderColor="black"
  shadowOffset="black"
  >BUY NOW</Button>
)

export const borderStyle = () => (
  <div className="flex flex-row">
    <Button color="white" borderStyle="dotted" mr={5}>Button</Button>
    <Button color="white" borderStyle="dashed">Button</Button>
  </div>
)

export const disabled = () => (
  <Button disabled>Button</Button>
)

export const ghost = () => (
  <div className="flex flex-row">
    <Button ghost color="black" mr={5}>Button</Button>
    <Button ghost color="gray" mr={5}>Button</Button>
    <Button ghost color="red" mr={5}>Button</Button>
    <Button ghost color="green" mr={5}>Button</Button>
    <Button ghost color="blue" mr={5}>Button</Button>
    <Button ghost color="teal" mr={5}>Button</Button>
    <Button ghost color="pink" mr={5}>Button</Button>
    <Button ghost color="purple" mr={5}>Button</Button>
    <Button ghost color="cyan" mr={5}>Button</Button>
    <Button ghost color="indigo" mr={5}>Button</Button>
    <Button ghost color="rose" mr={5}>Button</Button>
    <Button ghost color="fuchsia" mr={5}>Button</Button>
    <Button ghost color="blue-gray" mr={5}>Button</Button>
    <Button ghost color="emerald" mr={5}>Button</Button>
  </div>
)

export const fluid = () => (
  <Button fluid>Button</Button>
)

export const icon = () => (
  <Button icon="phone-solid" size="sm" />
)

export const circle = () => (
  <Button circle icon="phone-solid" size="sm" />
)

export const loading = () => (
  <div className="flex flex-row">
    <Button loading loadingText="Loading..." mr={5} />
    <Button loading loadingText="Loading..." loadingPosition="right" mr={5} />
    <Button loading />
  </div>
)

export const labeledIcon = () => (
  <div className="flex flex-wrap">
    <Button labeled icon="folder-solid" labeledPosition="left" mr={5}>Button Icon</Button>
    <Button labeled icon="folder-solid" labeledPosition="right" mr={5}>Button Icon</Button>
  </div>
)

export const group = () => (
  <Button.Group>
    <Button size="md" roundedPosition="left">1</Button>
    <Button size="md" rounded="none">2</Button>
    <Button size="md" roundedPosition="right">3</Button>
  </Button.Group>
)

export const dropdown = () => (
  <Button.Dropdown>
    <Button labeled icon="chevron-down" labeledPosition="right" size="sm">Actions</Button>
    <Dropdown>
      <Dropdown.List>
        <Icon icon="pencil-alt" color="blue" colorContrast={500} mr={2} /> Edit
      </Dropdown.List>
      <Dropdown.List>
        <Icon icon="duplicate" color="blue" colorContrast={500} mr={2} /> Copy
      </Dropdown.List>
      <Divider />
      <Dropdown.List hoverColor="red" hoverColorContrast={200} hoverTextColor="red">
        <Icon icon="trash" color="red" colorContrast={500} mr={2} /> Delete
      </Dropdown.List>
    </Dropdown>
  </Button.Dropdown>
)