import React from "react";

import { default as Header } from "../header"

export default {
  title: 'Example/Typography Header',
  component: Header,
}

export const basic = () => (
  <>
    <Header as="h1">Header H1</Header>
    <Header as="h2">Header H2</Header>
    <Header as="h3">Header H3</Header>
    <Header as="h4">Header H4</Header>
    <Header as="h5">Header H5</Header>
    <Header as="h6">Header H6</Header>
  </>
)

export const headerSubLeft = () => (
  <>
    <Header.Sub as="h1" icon="code" headerText="Header H1" subText="Subtitle will be here..." />
  </>
)

export const headerSubRight = () => (
  <>
    <Header.Sub as="h1" icon="code" iconPosition="right" headerText="Header H1" subText="Subtitle will be here..." />
  </>
)

export const headerSubCenter = () => (
  <>
    <Header.Sub as="h1" icon="code" iconPosition="center" headerText="Header H1" subText="Subtitle will be here..." />
  </>
)