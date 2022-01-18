import * as React from "react"
import { Menu, MenuFooter } from "../src"
import { Text } from "../../typography/src"
import { Image } from "../../image/src"

export default { title: 'Components/Menu Footer' }

export const Basic = () => {
  return(
    <MenuFooter
    itemTextColor="gray" itemTextColorContrast="600"
    itemTextColorHover="blue" itemTextColorHoverContrast="600"
    px="16">
      <MenuFooter.Content width="72">
        <div className="flex flex-col space-y-3">
          <Image alt="logo kodepanda" src="https://kodepanda.com/assets/kodepanda-logo-black.svg" width="10" />
          <Text fontSize="sm" color="gray" colorContrast="600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        </div>
      </MenuFooter.Content>
      <Menu.Items title={(
        <Text fontSize="sm" fontWeight="bold" color="gray" colorContrast="700" mb="4">Menu</Text>
      )}>
        <Menu.Item href="#">Home</Menu.Item>
        <Menu.Item href="#">Services</Menu.Item>
        <Menu.Item href="#">Features</Menu.Item>
        <Menu.Item href="#">Pricing</Menu.Item>
        <Menu.Item href="#">Blog</Menu.Item>
      </Menu.Items>
      <Menu.Items title={(
        <Text fontSize="sm" fontWeight="bold" color="gray" colorContrast="700" mb="4">Information</Text>
      )}>
        <Menu.Item href="#">About Us</Menu.Item>
        <Menu.Item href="#">Terms of Conditions</Menu.Item>
        <Menu.Item href="#">Documentation</Menu.Item>
        <Menu.Item href="#">Support Center</Menu.Item>
      </Menu.Items>
    </MenuFooter>
  )
}

export const Fixed = () => {
  return(
    <MenuFooter fixed
    itemTextColor="gray" itemTextColorContrast="600"
    itemTextColorHover="blue" itemTextColorHoverContrast="600"
    px="16">
      <MenuFooter.Content width="72">
        <div className="flex flex-col space-y-3">
          <Image alt="logo kodepanda" src="https://kodepanda.com/assets/kodepanda-logo-black.svg" width="10" />
          <Text fontSize="sm" color="gray" colorContrast="600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        </div>
      </MenuFooter.Content>
      <Menu.Items title={(
        <Text fontSize="sm" fontWeight="bold" color="gray" colorContrast="700" mb="4">Menu</Text>
      )}>
        <Menu.Item href="#">Home</Menu.Item>
        <Menu.Item href="#">Services</Menu.Item>
        <Menu.Item href="#">Features</Menu.Item>
        <Menu.Item href="#">Pricing</Menu.Item>
        <Menu.Item href="#">Blog</Menu.Item>
      </Menu.Items>
      <Menu.Items title={(
        <Text fontSize="sm" fontWeight="bold" color="gray" colorContrast="700" mb="4">Information</Text>
      )}>
        <Menu.Item href="#">About Us</Menu.Item>
        <Menu.Item href="#">Terms of Conditions</Menu.Item>
        <Menu.Item href="#">Documentation</Menu.Item>
        <Menu.Item href="#">Support Center</Menu.Item>
      </Menu.Items>
    </MenuFooter>
  )
}

export const Footer = () => {
  return(
    <MenuFooter fixed
    itemTextColor="gray" itemTextColorContrast="600"
    itemTextColorHover="blue" itemTextColorHoverContrast="600"
    footer={(
      <div className="w-full bg-gray-700 px-5 py-1">
        <p className="text-white text-xs font-normal text-center">©2022 Kodepanda Kreasi Media</p>
      </div>
    )}
    px="16">
      <MenuFooter.Content width="72">
        <div className="flex flex-col space-y-3">
          <Image alt="logo kodepanda" src="https://kodepanda.com/assets/kodepanda-logo-black.svg" width="10" />
          <Text fontSize="sm" color="gray" colorContrast="600">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        </div>
      </MenuFooter.Content>
      <Menu.Items title={(
        <Text fontSize="sm" fontWeight="bold" color="gray" colorContrast="700" mb="4">Menu</Text>
      )}>
        <Menu.Item href="#">Home</Menu.Item>
        <Menu.Item href="#">Services</Menu.Item>
        <Menu.Item href="#">Features</Menu.Item>
        <Menu.Item href="#">Pricing</Menu.Item>
        <Menu.Item href="#">Blog</Menu.Item>
      </Menu.Items>
      <Menu.Items title={(
        <Text fontSize="sm" fontWeight="bold" color="gray" colorContrast="700" mb="4">Information</Text>
      )}>
        <Menu.Item href="#">About Us</Menu.Item>
        <Menu.Item href="#">Terms of Conditions</Menu.Item>
        <Menu.Item href="#">Documentation</Menu.Item>
        <Menu.Item href="#">Support Center</Menu.Item>
      </Menu.Items>
    </MenuFooter>
  )
}

export const Coloring = () => {
  return(
    <MenuFooter fixed
    color="gray" colorContrast="700"
    itemTextColor="white"
    itemTextColorHover="blue" itemTextColorHoverContrast="600"
    px="16">
      <MenuFooter.Content width="72">
        <div className="flex flex-col space-y-3">
          <Image alt="logo kodepanda" src="https://kodepanda.com/assets/kodepanda-logo-black.svg" width="10" />
          <Text fontSize="sm" color="white">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
        </div>
      </MenuFooter.Content>
      <Menu.Items title={(
        <Text fontSize="sm" fontWeight="bold" color="white" mb="4">Menu</Text>
      )}>
        <Menu.Item href="#">Home</Menu.Item>
        <Menu.Item href="#">Services</Menu.Item>
        <Menu.Item href="#">Features</Menu.Item>
        <Menu.Item href="#">Pricing</Menu.Item>
        <Menu.Item href="#">Blog</Menu.Item>
      </Menu.Items>
      <Menu.Items title={(
        <Text fontSize="sm" fontWeight="bold" color="white" mb="4">Information</Text>
      )}>
        <Menu.Item href="#">About Us</Menu.Item>
        <Menu.Item href="#">Terms of Conditions</Menu.Item>
        <Menu.Item href="#">Documentation</Menu.Item>
        <Menu.Item href="#">Support Center</Menu.Item>
      </Menu.Items>
    </MenuFooter>
  )
}
