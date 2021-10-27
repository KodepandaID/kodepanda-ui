import React from "react";
import { Menu } from "../index";
import { Icon } from "../../icon";
import { Dropdown } from "../../dropdown";
import { Button } from "../../button";
import { Collapse } from "../../collapse";
import { Input } from "../../input";

export default {
  title: 'Menu',
  component: Menu,
};

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
    
    <Menu.Items responsive="none" px={1} mr={2} right>
      <Menu.Item><Icon icon="shopping-cart" color="white" height={5} /></Menu.Item>
      <Menu.Item><Icon icon="user-circle" color="white" height={5} /></Menu.Item>
    </Menu.Items>
  </Menu>
)

export const fixedTop = () => (
  <div className="h-screen">
    <Menu responsiveIconColor="white" fixed>
      <Menu.Header href="https://kodepanda.com">
        <img src="https://kodepanda.com/assets/logo-kurito.svg" alt="kodepanda" width="30" />
      </Menu.Header>

      <Menu.Items>
        <Menu.Item>Home</Menu.Item>
        <Menu.Item>Services</Menu.Item>
        <Menu.Item disabled>Contact Us</Menu.Item>
        <Menu.Item>Our Projects</Menu.Item>
      </Menu.Items>
      
      <Menu.Items responsive="none" px={1} mr={2} right>
        <Menu.Item><Icon icon="shopping-cart" color="white" height={5} /></Menu.Item>
        <Menu.Item><Icon icon="user-circle" color="white" height={5} /></Menu.Item>
      </Menu.Items>
    </Menu>
  </div>
)

export const width = () => (
  <Menu rounded="full" color="blue-gray" width="1/2">
    <Menu.Header href="https://kodepanda.com">
      <img src="https://kodepanda.com/assets/logo-kurito.svg" alt="kodepanda" width="30" />
    </Menu.Header>

    <Menu.Items center>
      <Menu.Item>Home</Menu.Item>
      <Menu.Item>Services</Menu.Item>
      <Menu.Item>Contact Us</Menu.Item>
      <Menu.Item>Our Projects</Menu.Item>
    </Menu.Items>
  </Menu>
)

export const responsiveWidth = () => (
  <Menu rounded="full" color="blue-gray" widthLG="1/2" widthMD="full">
    <Menu.Header href="https://kodepanda.com">
      <img src="https://kodepanda.com/assets/logo-kurito.svg" alt="kodepanda" width="30" />
    </Menu.Header>

    <Menu.Items center>
      <Menu.Item>Home</Menu.Item>
      <Menu.Item>Services</Menu.Item>
      <Menu.Item>Contact Us</Menu.Item>
      <Menu.Item>Our Projects</Menu.Item>
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

export const icon = () => (
  <Menu color="white" shadow="md">
    <Menu.Header href="https://kodepanda.com">
      <img src="https://kodepanda.com/assets/logo.svg" alt="kodepanda" width="100" />
    </Menu.Header>

    <Menu.Items textColor="black" textColorHover="black">
      <Menu.Item icon="home">Home</Menu.Item>
      <Menu.Item icon="support">Services</Menu.Item>
      <Menu.Item icon="phone">Contact Us</Menu.Item>
      <Menu.Item icon="template">Our Projects</Menu.Item>
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
    borderColorActive="teal" borderColorActiveContrast={700}>
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
    borderColorHover="teal" borderColorHoverContrast={700}>
      <Menu.Item>Home</Menu.Item>
      <Menu.Item>Services</Menu.Item>
      <Menu.Item>Contact Us</Menu.Item>
      <Menu.Item>Our Projects</Menu.Item>
    </Menu.Items>
  </Menu>
)

export const dropdown = () => (
  <Menu responsiveIconColor="white">
    <Menu.Header href="https://kodepanda.com">
      <img src="https://kodepanda.com/assets/logo-kurito.svg" alt="kodepanda" width="30" />
    </Menu.Header>

    <Menu.Items textColorHover="gray" textColorHoverContrast={100}>
      <Menu.Item>Home</Menu.Item>
      <Menu.Dropdown content="Services">
        <Dropdown width={52}>
          <Dropdown.List>Web Apps</Dropdown.List>
          <Dropdown.List>Mobile Apps</Dropdown.List>
          <Dropdown.List>Desktop Apps</Dropdown.List>
        </Dropdown>
      </Menu.Dropdown>
      <Menu.Item>Contact Us</Menu.Item>
      <Menu.Item>Our Projects</Menu.Item>
    </Menu.Items>
  </Menu>
)

export const dropdownClick = () => (
  <Menu responsiveIconColor="white">
    <Menu.Header href="https://kodepanda.com">
      <img src="https://kodepanda.com/assets/logo-kurito.svg" alt="kodepanda" width="30" />
    </Menu.Header>

    <Menu.Items textColorHover="gray" textColorHoverContrast={100}>
      <Menu.Item>Home</Menu.Item>
      <Menu.Dropdown content="Services" click>
        <Dropdown width={52}>
          <Dropdown.List>Web Apps</Dropdown.List>
          <Dropdown.List>Mobile Apps</Dropdown.List>
          <Dropdown.List>Desktop Apps</Dropdown.List>
        </Dropdown>
      </Menu.Dropdown>
      <Menu.Item>Contact Us</Menu.Item>
      <Menu.Item>Our Projects</Menu.Item>
    </Menu.Items>
  </Menu>
)

export const dropdownIcon = () => (
  <Menu responsiveIconColor="white">
    <Menu.Header href="https://kodepanda.com">
      <img src="https://kodepanda.com/assets/logo-kurito.svg" alt="kodepanda" width="30" />
    </Menu.Header>

    <Menu.Items textColorHover="gray" textColorHoverContrast={100}>
      <Menu.Item icon="home">Home</Menu.Item>
      <Menu.Dropdown icon="support" content="Services">
        <Dropdown width={52}>
          <Dropdown.List>Web Apps</Dropdown.List>
          <Dropdown.List>Mobile Apps</Dropdown.List>
          <Dropdown.List>Desktop Apps</Dropdown.List>
        </Dropdown>
      </Menu.Dropdown>
      <Menu.Item icon="phone">Contact Us</Menu.Item>
      <Menu.Item icon="template">Our Projects</Menu.Item>
    </Menu.Items>
  </Menu>
)

export const sub = () => (
  <Menu.Sub shadow="md">
    <Menu showMenuResponsive={false} color="white" border borderPosition="bottom" borderColor="gray" borderColorContrast={200}>
      <Menu.Header href="https://kodepanda.com">
        <img src="https://kodepanda.com/assets/logo.svg" alt="kodepanda" width="100" />
      </Menu.Header>
      <Menu.Items right>
        <Menu.Item>
          <Button>Sign Up</Button>
        </Menu.Item>
      </Menu.Items>
    </Menu>
    <Menu color="white">
      <Menu.Items textColor="black" textColorHover="blue" textSize="sm">
        <Menu.Item>Home</Menu.Item>
        <Menu.Item>Services</Menu.Item>
        <Menu.Item>Contact Us</Menu.Item>
        <Menu.Item>Our Projects</Menu.Item>
      </Menu.Items>
    </Menu>
  </Menu.Sub>
)

export const footer = () => (
  <Menu.Footer>
    <Menu.Content width={72}>
      <div className="flex flex-col text-white space-y-4">
        <img src="https://kodepanda.com/assets/logo.svg" width="150" />
        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </Menu.Content>
    <Menu.Items title="Product">
      <Menu.Item>Headless Ecommerce</Menu.Item>
      <Menu.Item>Features</Menu.Item>
      <Menu.Item>Examples</Menu.Item>
      <Menu.Item>Point of Sales</Menu.Item>
      <Menu.Item>Tracking Shipping</Menu.Item>
    </Menu.Items>
    <Menu.Items title="Getting Started">
      <Menu.Item>Documentation</Menu.Item>
      <Menu.Item>API Reference</Menu.Item>
      <Menu.Item>Pricing</Menu.Item>
    </Menu.Items>
    <Menu.Items title="Company">
      <Menu.Item>About</Menu.Item>
      <Menu.Item>Careers</Menu.Item>
      <Menu.Item>Support</Menu.Item>
      <Menu.Item>Terms of service</Menu.Item>
      <Menu.Item>Privacy policy</Menu.Item>
    </Menu.Items>
  </Menu.Footer>
)

export const footerSub = () => (
  <Menu.Sub>
    <Menu.Footer>
      <Menu.Content width={72}>
        <div className="flex flex-col text-white space-y-4">
          <img src="https://kodepanda.com/assets/logo.svg" width="150" />
          <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </Menu.Content>
      <Menu.Items title="Product">
        <Menu.Item>Headless Ecommerce</Menu.Item>
        <Menu.Item>Features</Menu.Item>
        <Menu.Item>Examples</Menu.Item>
        <Menu.Item>Point of Sales</Menu.Item>
        <Menu.Item>Tracking Shipping</Menu.Item>
      </Menu.Items>
      <Menu.Items title="Getting Started">
        <Menu.Item>Documentation</Menu.Item>
        <Menu.Item>API Reference</Menu.Item>
        <Menu.Item>Pricing</Menu.Item>
      </Menu.Items>
      <Menu.Items title="Company">
        <Menu.Item>About</Menu.Item>
        <Menu.Item>Careers</Menu.Item>
        <Menu.Item>Support</Menu.Item>
        <Menu.Item>Terms of service</Menu.Item>
        <Menu.Item>Privacy policy</Menu.Item>
      </Menu.Items>
    </Menu.Footer>
    <Menu colorContrast={700}>
      <Menu.Content px={5} py={1}>
        <p className="text-sm text-white">© 2021 Kodepanda Kreasi Media. All rights reserved.</p>
      </Menu.Content>
    </Menu>
  </Menu.Sub>
)

export const sidebar = () => (
  <Menu.Sidebar width={64}>
    <Menu.Header href="https://kodepanda.com" py={3}>
      <img src="https://kodepanda.com/assets/logo-kurito-white.svg" alt="kodepanda" width="120" />
    </Menu.Header>
    <Menu.Content px={3} mb={5}>
      <Input border={false} icon="search-circle" iconPosition="right" placeholder="Search..." />
    </Menu.Content>
    <Menu.Items title="Menu" 
      colorHover="blue" colorHoverContrast={700}
      textColorHover="white">
      <Menu.Item icon="home">Dashboard</Menu.Item>
      <Menu.Item icon="inbox">Inbox</Menu.Item>
      <Menu.Item icon="annotation">Messages</Menu.Item>
      <Menu.Item icon="bell">Notifications</Menu.Item>
    </Menu.Items>
  </Menu.Sidebar>
)

export const sidebarIconOnly = () => (
  <Menu.Sidebar>
    <Menu.Header href="https://kodepanda.com" py={3}>
      <img src="https://kodepanda.com/assets/logo-kurito.svg" alt="kodepanda" width="50" />
    </Menu.Header>
    <Menu.Items
      colorHover="blue" colorHoverContrast={700}
      textColorHover="white">
      <Menu.Item icon="home" iconSize={6} />
      <Menu.Item icon="inbox" iconSize={6} />
      <Menu.Item icon="annotation" iconSize={6} />
      <Menu.Item icon="bell" iconSize={6} />
    </Menu.Items>
  </Menu.Sidebar>
)

export const sidebarCollapse = () => (
  <Menu.Sidebar width={64}>
    <Menu.Header href="https://kodepanda.com" py={3}>
      <img src="https://kodepanda.com/assets/logo-kurito.svg" alt="kodepanda" width="50" />
    </Menu.Header>
    <Menu.Items title="Menu" 
      colorHover="blue" colorHoverContrast={700}
      textColorHover="white">
      <Menu.Item icon="home">Dashboard</Menu.Item>
      <Menu.Item icon="inbox">Inbox</Menu.Item>
      <Menu.Collapse icon="annotation" content="Messages"
      iconColor="gray" iconColorContrast={100}
      collapseColor="blue" collapseColorContrast={500}
      collapseColorHover="blue" collapseColorHoverContrast={600}>
        <Collapse>
          <Collapse.List>Unread</Collapse.List>
          <Collapse.List>Spam</Collapse.List>
        </Collapse>
      </Menu.Collapse>
      <Menu.Item icon="bell">Notifications</Menu.Item>
    </Menu.Items>
  </Menu.Sidebar>
)
