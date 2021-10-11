import React from "react";

import Menu from "../menu";
import Icon from "../../icon/icon";

export default {
  title: 'Example/Menu',
  component: Menu,
}

export const basic = () => (
  <Menu>
    <Menu.Header href="https://kodepanda.com">
      <img src="https://kodepanda.com/assets/logo-kurito.svg" alt="kodepanda" width="30" />
    </Menu.Header>

    <Menu.Items>
      <Menu.Item>Home</Menu.Item>
      <Menu.Item>Services</Menu.Item>
      <Menu.Item disabled>Contact Us</Menu.Item>
      <Menu.Item>Our Projects</Menu.Item>
    </Menu.Items>
    
    <Menu.Items responsive="none" right>
      <Menu.Item><Icon icon="shopping-cart" color="white" height={5} /></Menu.Item>
      <Menu.Item><Icon icon="user-circle" color="white" height={5} /></Menu.Item>
    </Menu.Items>
  </Menu>
)

export const coloring = () => (
  <Menu color="gray" colorContrast={200}>
    <Menu.Header href="https://kodepanda.com">
      <img src="https://kodepanda.com/assets/logo.svg" alt="kodepanda" width="100" />
    </Menu.Header>

    <Menu.Items rounded="md" center
    colorHover="white" textColor="black" textColorHover="black"
    colorActive="white" textColorActive="black">
      <Menu.Item active>Home</Menu.Item>
      <Menu.Item>Services</Menu.Item>
      <Menu.Item>Contact Us</Menu.Item>
      <Menu.Item>Our Projects</Menu.Item>
    </Menu.Items>
  </Menu>
)

export const shadow = () => (
  <Menu color="white" shadow="md">
    <Menu.Header href="https://kodepanda.com">
      <img src="https://kodepanda.com/assets/logo.svg" alt="kodepanda" width="100" />
    </Menu.Header>

    <Menu.Items textColor="black" textColorHover="black">
      <Menu.Item>Home</Menu.Item>
      <Menu.Item>Services</Menu.Item>
      <Menu.Item>Contact Us</Menu.Item>
      <Menu.Item>Our Projects</Menu.Item>
    </Menu.Items>
    
    <Menu.Items responsive="none" right>
      <Menu.Item><Icon icon="shopping-cart" color="white" height={5} /></Menu.Item>
      <Menu.Item><Icon icon="user-circle" color="white" height={5} /></Menu.Item>
    </Menu.Items>
  </Menu>
)

export const colorinMenuResponsive = () => (
  <Menu color="white" shadow="md" 
    responsiveColor="gray" responsiveColorContrast={100}
    responsiveColorHover="gray" responsiveColorHoverContrast={500}
    responsiveTextColorHover="white">
    <Menu.Header href="https://kodepanda.com">
      <img src="https://kodepanda.com/assets/logo.svg" alt="kodepanda" width="100" />
    </Menu.Header>

    <Menu.Items textColor="black" textColorHover="black">
      <Menu.Item>Home</Menu.Item>
      <Menu.Item>Services</Menu.Item>
      <Menu.Item>Contact Us</Menu.Item>
      <Menu.Item>Our Projects</Menu.Item>
    </Menu.Items>
    
    <Menu.Items responsive="none" right>
      <Menu.Item><Icon icon="shopping-cart" color="white" height={5} /></Menu.Item>
      <Menu.Item><Icon icon="user-circle" color="white" height={5} /></Menu.Item>
    </Menu.Items>
  </Menu>
)