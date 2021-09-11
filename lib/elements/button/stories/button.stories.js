import React from 'react';

import { default as Button } from "../button";
import { default as Dropdown } from "../../dropdown/dropdown";
import { default as Icon } from "../../icon/icon";
import { default as Divider } from "../../divider/divider";

export default {
  title: 'Example/Button',
  component: Button
}

export const basic = () => (
  <>
    <Button color="white" mr={5} mb={5}>Button</Button>
    <Button color="black" mr={5} mb={5}>Button</Button>
    <Button color="gray" mr={5} mb={5}>Button</Button>
    <Button color="red" mr={5} mb={5}>Button</Button>
    <Button color="green" mr={5} mb={5}>Button</Button>
    <Button color="blue" mr={5} mb={5}>Button</Button>
    <Button color="teal" mr={5} mb={5}>Button</Button>
    <Button color="pink" mr={5} mb={5}>Button</Button>
    <Button color="purple" mr={5} mb={5}>Button</Button>
    <Button color="cyan" mr={5} mb={5}>Button</Button>
    <Button color="indigo" mr={5} mb={5}>Button</Button>
    <Button color="rose" mr={5} mb={5}>Button</Button>
    <Button color="fuchsia" mr={5} mb={5}>Button</Button>
    <Button color="blue-gray" mr={5} mb={5}>Button</Button>
    <Button color="emerald" mr={5} mb={5}>Button</Button>
  </>
)

export const sizes = () => (
  <>
    <Button size="xs" mr={5}>Button XS</Button>
    <Button size="sm" mr={5}>Button SM</Button>
    <Button size="md" mr={5}>Button MD</Button>
    <Button size="lg" mr={5}>Button LG</Button>
  </>
)

export const disabled = () => (
  <>
    <Button disabled>Button</Button>
  </>
)

export const ghost = () => (
  <>
    <Button ghost color="white" mr={5} mb={5}>Button</Button>
    <Button ghost color="black" mr={5} mb={5}>Button</Button>
    <Button ghost color="gray" mr={5} mb={5}>Button</Button>
    <Button ghost color="red" mr={5} mb={5}>Button</Button>
    <Button ghost color="green" mr={5} mb={5}>Button</Button>
    <Button ghost color="blue" mr={5} mb={5}>Button</Button>
    <Button ghost color="teal" mr={5} mb={5}>Button</Button>
    <Button ghost color="pink" mr={5} mb={5}>Button</Button>
    <Button ghost color="purple" mr={5} mb={5}>Button</Button>
    <Button ghost color="cyan" mr={5} mb={5}>Button</Button>
    <Button ghost color="indigo" mr={5} mb={5}>Button</Button>
    <Button ghost color="rose" mr={5} mb={5}>Button</Button>
    <Button ghost color="fuchsia" mr={5} mb={5}>Button</Button>
    <Button ghost color="blue-gray" mr={5} mb={5}>Button</Button>
    <Button ghost color="emerald" mr={5} mb={5}>Button</Button>
  </>
)

export const icon = () => (
  <>
    <Button icon="phone-solid" size="sm" />
  </>
)

export const fluid = () => (
  <>
    <Button fluid>Button</Button>
  </>
)

export const rounded = () => (
  <>
    <Button rounded="xs" mr={5}>Rounded XS</Button>
    <Button rounded="sm" mr={5}>Rounded SM</Button>
    <Button rounded="md" mr={5}>Rounded MD</Button>
    <Button rounded="lg" mr={5}>Rounded LG</Button>
    <Button rounded="full" mr={5}>Rounded FULL</Button>
  </>
)

export const roundedPosition = () => (
  <>
    <Button rounded="md" roundedPosition="left" mr={5}>Button Rounded Left</Button>
    <Button rounded="md" roundedPosition="right">Button Rounded Right</Button>
  </>
)

export const circle = () => (
  <>
    <Button circle>Button</Button>
  </>
)

export const loading = () => (
  <div className="h-14 flex flex-wrap content-center">
    <div><Button loading mr={5}>Loading...</Button></div>
    <div><Button loading loadingPosition="center" mr={5}></Button></div>
    <div><Button loading loadingPosition="right" mr={5}>Loading...</Button></div>
  </div>
)

export const labeledIcon = () => (
  <div className="h-14 flex flex-wrap content-center">
    <div>
      <Button labeled labeledIcon="folder" labeledPosition="left" mr={5}>Button Icon</Button>
      <Button labeled labeledIcon="folder" labeledPosition="left" size="sm" mr={5}>Button Icon</Button>
    </div>
    <div>
      <Button labeled labeledIcon="folder" labeledPosition="right">Button Icon</Button>
    </div>
  </div>
)

export const border = () => (
  <div className="h-14 flex flex-wrap content-center">
    <div><Button ghost border="dashed" mr={5}>Dashed</Button></div>
    <div><Button ghost border="dotted">Dotted</Button></div>
  </div>
)

export const animate = () => (
  <div className="h-14 flex flex-wrap content-center">
    <div>
      <Button animate="ping" mr={5}>Ping!!!</Button>
    </div>
    <div>
      <Button animate="pulse" mr={5}>Pulse</Button>
    </div>
    <div>
      <Button animate="bounce">Bounce</Button>
    </div>
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
  <>
    <Button.Dropdown>
      <Button labeled labeledIcon="chevron-down" labeledPosition="right" size="sm">Actions</Button>
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
  </>
)