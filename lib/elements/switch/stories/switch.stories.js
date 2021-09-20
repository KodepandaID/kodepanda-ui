import React from "react";

import Switch from "../switch";

export default {
  title: 'Example/Switch',
  component: Switch,
}

export const basic = () => (
  <Switch />
)

export const size = () => (
  <div className="flex justify-start">
    <Switch size="xs" mr={2} />
    <Switch size="sm" mr={2} />
    <Switch size="md" mr={5} />
    <Switch size="lg" mr={2} />
  </div>
)

export const coloring = () => (
  <Switch color="green" />
)

export const disabled = () => (
  <Switch disabled />
)

export const label = () => (
  <Switch label="This is a switch" />
)