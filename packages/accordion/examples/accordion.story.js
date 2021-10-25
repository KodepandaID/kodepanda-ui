import React from "react";
import { Accordion } from "../src";

export default {
  title: 'Accordion',
  component: Accordion,
};

export const basic = () => (
  <Accordion>
    <Accordion.Panel header="This is header Accordion 1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Accordion.Panel>
    <Accordion.Panel header="This is header Accordion 2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Accordion.Panel>
  </Accordion>
)

export const expandIconPosition = () => (
  <Accordion iconPosition="left">
    <Accordion.Panel header="This is header Accordion 1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Accordion.Panel>
    <Accordion.Panel header="This is header Accordion 2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Accordion.Panel>
  </Accordion>
)

export const changeIcon = () => (
  <Accordion icon="chevron-double-down" iconPosition="left">
    <Accordion.Panel header="This is header Accordion 1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Accordion.Panel>
    <Accordion.Panel header="This is header Accordion 2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Accordion.Panel>
  </Accordion>
)

export const color = () => (
  <Accordion color="blue" colorContrast={500} textColor="white" borderColor="blue">
    <Accordion.Panel header="This is header Accordion 1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Accordion.Panel>
    <Accordion.Panel header="This is header Accordion 2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Accordion.Panel>
  </Accordion>
)

export const noBorder = () => (
  <Accordion border={false}>
    <Accordion.Panel header="This is header Accordion 1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Accordion.Panel>
    <Accordion.Panel header="This is header Accordion 2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Accordion.Panel>
  </Accordion>
)

export const defaultActive = () => (
  <Accordion defaultActiveIndex={0}>
    <Accordion.Panel header="This is header Accordion 1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Accordion.Panel>
    <Accordion.Panel header="This is header Accordion 2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Accordion.Panel>
  </Accordion>
)

export const simple = () => (
  <Accordion simple>
    <Accordion.Panel header="This is header Accordion 1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Accordion.Panel>
    <Accordion.Panel header="This is header Accordion 2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Accordion.Panel>
  </Accordion>
)

export const separate = () => (
  <Accordion separate>
    <Accordion.Panel header="This is header Accordion 1">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Accordion.Panel>
    <Accordion.Panel header="This is header Accordion 2">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    </Accordion.Panel>
  </Accordion>
)
