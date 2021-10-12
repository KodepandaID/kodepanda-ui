import React from "react";

import Menu from "../menu";
import Icon from "../../icon/icon";

export default {
  title: 'Example/Menu',
  component: Menu,
}

export const basic = () => (
  <Menu responsiveIconColor="white">
    <Menu.Header href="https://kodepanda.com">
      <img src="https://kodepanda.com/assets/logo-kurito.svg" alt="kodepanda" width="30" />
    </Menu.Header>

    <Menu.Items>
      <Menu.Item>Home</Menu.Item>
      <Menu.Item>Services</Menu.Item>
      <Menu.Item disabled>Contact Us</Menu.Item>
      <Menu.Item>Our Projects</Menu.Item>
    </Menu.Items>
    
    <Menu.Items responsive="none" px={1} right>
      <Menu.Item><Icon icon="shopping-cart" color="white" height={5} /></Menu.Item>
      <Menu.Item><Icon icon="user-circle" color="white" height={5} /></Menu.Item>
    </Menu.Items>
  </Menu>
)

export const coloring = () => (
  <Menu color="gray" colorContrast={200} px={3} py={2}>
    <Menu.Header href="https://kodepanda.com">
      <img src="https://kodepanda.com/assets/logo.svg" alt="kodepanda" width="100" />
    </Menu.Header>

    <Menu.Items rounded="md" center px={4} py={1}
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

export const coloringMenuResponsive = () => (
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

export const borderActive = () => (
  <Menu color="white" shadow="md">
    <Menu.Header href="https://kodepanda.com">
      <img src="https://kodepanda.com/assets/logo.svg" alt="kodepanda" width="100" />
    </Menu.Header>

    <Menu.Items center
    textColor="black" textColorActive="teal" textColorActiveContrast={700}
    borderActiveColor="teal" borderActiveColorContrast={700}>
      <Menu.Item active>Home</Menu.Item>
      <Menu.Item>Services</Menu.Item>
      <Menu.Item>Contact Us</Menu.Item>
      <Menu.Item>Our Projects</Menu.Item>
    </Menu.Items>
  </Menu>
)

export const borderHover = () => (
  <Menu color="white" shadow="md">
    <Menu.Header href="https://kodepanda.com">
      <img src="https://kodepanda.com/assets/logo.svg" alt="kodepanda" width="100" />
    </Menu.Header>

    <Menu.Items center
    textColor="black" textColorActive="teal" textColorActiveContrast={700}
    borderHoverColor="teal" borderHoverColorContrast={700}>
      <Menu.Item>Home</Menu.Item>
      <Menu.Item>Services</Menu.Item>
      <Menu.Item>Contact Us</Menu.Item>
      <Menu.Item>Our Projects</Menu.Item>
    </Menu.Items>
  </Menu>
)