import * as React from "react"
import { Menu, MenuDropdown } from "../src"
import { Button } from "../../button/src"
import { Icon } from "../../icon/src"
import { Header, Text } from "../../typography/src"
import { ListBox } from "../../list/src"
import { Provider } from "../../provider/src"

export default { title: 'Components/Menu' }

export const Basic = () => {
  return(
    <Menu
    logo={(
      <a href="https://kodepanda.com">
        <img src="https://kodepanda.com/image/kodepanda-full-logo.svg" alt="Logo Kodepanda" width={150} />
      </a>
    )}>
      <Menu.Item href="#">Services</Menu.Item>
      <Menu.Item href="#">Portofolio</Menu.Item>
      <Menu.Item href="#">About</Menu.Item>
      <Menu.Item href="#">Blog</Menu.Item>
      <Menu.Item href="#">Career</Menu.Item>
      <Menu.Item href="#">Contact</Menu.Item>
    </Menu>
  )
}

export const Dark = () => {
  const [dark, setDark] = React.useState(false)
  return(
    <Provider dark={dark}>
      <Menu
      logo={(
        <a href="https://kodepanda.com">
          <img src="https://kodepanda.com/image/kodepanda-full-logo.svg" alt="Logo Kodepanda" width={150} />
        </a>
      )}
      color="transparent"
      itemTextColor="black" darkItemTextColor="slate" darkItemTextColorContrast="500">
        <Menu.Item href="#">Services</Menu.Item>
        <Menu.Item href="#">Portofolio</Menu.Item>
        <Menu.Item href="#">About</Menu.Item>
        <Menu.Item href="#">Blog</Menu.Item>
        <Menu.Item href="#">Career</Menu.Item>
        <Menu.Item href="#">Contact</Menu.Item>
        <Menu.Item>
          <Button color="blue" colorContrast="600" icon={dark ? "light-bulb" : "moon"} onClick={() => setDark(!dark)} />
        </Menu.Item>
      </Menu>
    </Provider>
  )
}

export const Active = () => {
  return(
    <Menu
    itemActiveFontWeight="bold"
    itemTextColorHover="blue" itemTextColorHoverContrast="700"
    logo={(
      <a href="https://kodepanda.com">
        <img src="https://kodepanda.com/image/kodepanda-full-logo.svg" alt="Logo Kodepanda" width={150} />
      </a>
    )}>
      <Menu.Item href="#" active>Services</Menu.Item>
      <Menu.Item href="#">Portofolio</Menu.Item>
      <Menu.Item href="#">About</Menu.Item>
      <Menu.Item href="#">Blog</Menu.Item>
      <Menu.Item href="#">Career</Menu.Item>
      <Menu.Item href="#">Contact</Menu.Item>
    </Menu>
  )
}

export const ItemBorder = () => {
  return(
    <Menu
    itemBorder itemBorderHoverColor="blue" itemBorderHoverColorContrast="600" itemBorderHoverWidth="2"
    py="0"
    logo={(
      <a href="https://kodepanda.com">
        <img src="https://kodepanda.com/image/kodepanda-full-logo.svg" alt="Logo Kodepanda" width={150} />
      </a>
    )}>
      <Menu.Item href="#">Services</Menu.Item>
      <Menu.Item href="#">Portofolio</Menu.Item>
      <Menu.Item href="#">About</Menu.Item>
      <Menu.Item href="#">Blog</Menu.Item>
      <Menu.Item href="#">Career</Menu.Item>
      <Menu.Item href="#">Contact</Menu.Item>
    </Menu>
  )
}

export const MenuPosition = () => {
  return(
    <Menu itemPosition="right"
    logo={(
      <a href="https://kodepanda.com">
        <img src="https://kodepanda.com/image/kodepanda-full-logo.svg" alt="Logo Kodepanda" width={150} />
      </a>
    )}>
      <Menu.Item href="#">Services</Menu.Item>
      <Menu.Item href="#">Portofolio</Menu.Item>
      <Menu.Item href="#">About</Menu.Item>
      <Menu.Item href="#">Blog</Menu.Item>
      <Menu.Item href="#">Career</Menu.Item>
      <Menu.Item href="#">Contact</Menu.Item>
    </Menu>
  )
}

export const Fixed = () => {
  return(
    <Menu fixed
    logo={(
      <a href="https://kodepanda.com">
        <img src="https://kodepanda.com/image/kodepanda-full-logo.svg" alt="Logo Kodepanda" width={150} />
      </a>
    )}>
      <Menu.Item href="#">Services</Menu.Item>
      <Menu.Item href="#">Portofolio</Menu.Item>
      <Menu.Item href="#">About</Menu.Item>
      <Menu.Item href="#">Blog</Menu.Item>
      <Menu.Item href="#">Career</Menu.Item>
      <Menu.Item href="#">Contact</Menu.Item>
    </Menu>
  )
}

export const Rounded = () => {
  return(
    <Menu rounded="full"
    logo={(
      <a href="https://kodepanda.com">
        <img src="https://kodepanda.com/image/kodepanda-full-logo.svg" alt="Logo Kodepanda" width={150} />
      </a>
    )}>
      <Menu.Item href="#">Services</Menu.Item>
      <Menu.Item href="#">Portofolio</Menu.Item>
      <Menu.Item href="#">About</Menu.Item>
      <Menu.Item href="#">Blog</Menu.Item>
      <Menu.Item href="#">Career</Menu.Item>
      <Menu.Item href="#">Contact</Menu.Item>
    </Menu>
  )
}

export const Coloring = () => {
  return(
    <Menu
    color="blue" colorContrast="500"
    itemBgColorHover="blue" itemBgColorHoverContrast="600"
    itemTextColor="white" itemTextColorHover="white"
    logo={(
      <a href="https://kodepanda.com">
        <img src="https://kodepanda.com/image/kodepanda-full-logo-white.svg" alt="Logo Kodepanda" width={150} />
      </a>
    )}>
      <Menu.Item href="#">Services</Menu.Item>
      <Menu.Item href="#">Portofolio</Menu.Item>
      <Menu.Item href="#">About</Menu.Item>
      <Menu.Item href="#">Blog</Menu.Item>
      <Menu.Item href="#">Career</Menu.Item>
      <Menu.Item href="#">Contact</Menu.Item>
    </Menu>
  )
}

export const RoundedItem = () => {
  return(
    <Menu
    itemRounded="md"
    itemBgColorHover="blue" itemBgColorHoverContrast="500"
    itemTextColorHover="white"
    itemPY="1" px="5" py="3"
    logo={(
      <a href="https://kodepanda.com">
        <img src="https://kodepanda.com/image/kodepanda-full-logo.svg" alt="Logo Kodepanda" width={150} />
      </a>
    )}>
      <Menu.Item href="#">Services</Menu.Item>
      <Menu.Item href="#">Portofolio</Menu.Item>
      <Menu.Item href="#">About</Menu.Item>
      <Menu.Item href="#">Blog</Menu.Item>
      <Menu.Item href="#">Career</Menu.Item>
      <Menu.Item href="#">Contact</Menu.Item>
    </Menu>
  )
}

export const LogoPosition = () => {
  return(
    <Menu
    logo={(
      <a href="https://kodepanda.com">
        <img src="https://kodepanda.com/image/kodepanda-full-logo.svg" alt="Logo Kodepanda" width={150} />
      </a>
    )} logoPosition="right">
      <Menu.Item href="#">Services</Menu.Item>
      <Menu.Item href="#">Portofolio</Menu.Item>
      <Menu.Item href="#">About</Menu.Item>
      <Menu.Item href="#">Blog</Menu.Item>
      <Menu.Item href="#">Career</Menu.Item>
      <Menu.Item href="#">Contact</Menu.Item>
    </Menu>
  )
}

export const CustomItem = () => {
  return(
    <Menu
    logo={(
      <a href="https://kodepanda.com">
        <img src="https://kodepanda.com/image/kodepanda-full-logo.svg" alt="Logo Kodepanda" width={150} />
      </a>
    )} itemPosition="right">
      <Menu.Content position="right">
        <Menu.Item>
          <Icon icon="search" color="black" height="5" />
        </Menu.Item>
      </Menu.Content>
      <Menu.Item href="#">Services</Menu.Item>
      <Menu.Item href="#">Portofolio</Menu.Item>
      <Menu.Item href="#">About</Menu.Item>
      <Menu.Item href="#">Blog</Menu.Item>
      <Menu.Item href="#">Career</Menu.Item>
      <Menu.Item href="#">Contact</Menu.Item>
    </Menu>
  )
}

export const Content = () => {
  return(
    <Menu
    logo={(
      <a href="https://kodepanda.com">
        <img src="https://kodepanda.com/image/kodepanda-full-logo.svg" alt="Logo Kodepanda" width={150} />
      </a>
    )}>
      <Menu.Item href="#">Services</Menu.Item>
      <Menu.Item href="#">Portofolio</Menu.Item>
      <Menu.Item href="#">About</Menu.Item>
      <Menu.Item href="#">Blog</Menu.Item>
      <Menu.Item href="#">Career</Menu.Item>
      <Menu.Item href="#">Contact</Menu.Item>
      <Menu.Content position="right">
        <Menu.Item>
          <Button color="blue" colorContrast="600">Call Us</Button>
        </Menu.Item>
      </Menu.Content>
    </Menu>
  )
}

export const WithIcon = () => {
  return(
    <Menu
    logo={(
      <a href="https://kodepanda.com">
        <img src="https://kodepanda.com/image/kodepanda-full-logo.svg" alt="Logo Kodepanda" width={150} />
      </a>
    )}>
      <Menu.Item href="#" icon="home">Home</Menu.Item>
      <Menu.Item href="#" icon="light-bulb">Features</Menu.Item>
      <Menu.Item href="#" icon="credit-card">Pricing</Menu.Item>
      <Menu.Item href="#" icon="question-mark-circle">About</Menu.Item>
    </Menu>
  )
}

export const Dropdown = () => {
  return(
    <Menu
    itemActiveFontWeight="bold">
      <Menu.Item href="#">Home</Menu.Item>
      <Menu.Dropdown title="Features">
        <MenuDropdown.Item href="#" target="_blank">Feature 1</MenuDropdown.Item>
        <MenuDropdown.Item href="#">Feature 2</MenuDropdown.Item>
        <MenuDropdown.Item href="#">Feature 3</MenuDropdown.Item>
        <MenuDropdown.Item href="#">Feature 4</MenuDropdown.Item>
      </Menu.Dropdown>
      <Menu.Item href="#">Pricing</Menu.Item>
      <Menu.Item href="#">About</Menu.Item>
    </Menu>
  )
}

export const Dropdown2 = () => {
  return(
    <Menu
    itemPosition="right"
    itemActiveFontWeight="bold">
      <Menu.Item href="#">Home</Menu.Item>
      <Menu.Dropdown title="Features">
        <MenuDropdown.Item href="#" target="_blank">Feature 1</MenuDropdown.Item>
        <MenuDropdown.Item href="#">Feature 2</MenuDropdown.Item>
        <MenuDropdown.Item href="#">Feature 3</MenuDropdown.Item>
        <MenuDropdown.Item href="#">Feature 4</MenuDropdown.Item>
      </Menu.Dropdown>
      <Menu.Item href="#">Pricing</Menu.Item>
      <Menu.Item href="#">About</Menu.Item>
    </Menu>
  )
}

export const DropdownMode = () => {
  return(
    <Menu dropdownMode="hover"
    itemActiveFontWeight="bold">
      <Menu.Item href="#">Home</Menu.Item>
      <Menu.Dropdown title="Features">
        <MenuDropdown.Item href="#" target="_blank">Feature 1</MenuDropdown.Item>
        <MenuDropdown.Item href="#">Feature 2</MenuDropdown.Item>
        <MenuDropdown.Item href="#">Feature 3</MenuDropdown.Item>
        <MenuDropdown.Item href="#">Feature 4</MenuDropdown.Item>
      </Menu.Dropdown>
      <Menu.Item href="#">Pricing</Menu.Item>
      <Menu.Item href="#">About</Menu.Item>
    </Menu>
  )
}

export const DropdownCustom = () => {
  return(
    <Menu dropdownMode="hover"
    itemActiveFontWeight="bold">
      <Menu.Item href="#">Home</Menu.Item>
      <Menu.Dropdown title="Features" dropdownMT="4"
      dropdownBorder={false} dropdownRounded="none" dropdownFontSize="sm">
        <MenuDropdown.Item href="#" target="_blank" py="2">Feature 1</MenuDropdown.Item>
        <MenuDropdown.Item href="#" py="2">Feature 2</MenuDropdown.Item>
        <MenuDropdown.Item href="#" py="2">Feature 3</MenuDropdown.Item>
        <MenuDropdown.Item href="#" py="2">Feature 4</MenuDropdown.Item>
      </Menu.Dropdown>
      <Menu.Item href="#">Pricing</Menu.Item>
      <Menu.Item href="#">About</Menu.Item>
    </Menu>
  )
}

export const DropdownContent = () => {
  return(
    <Menu
    itemActiveFontWeight="bold">
      <Menu.Item href="#">Home</Menu.Item>
      <Menu.Item href="#">Features</Menu.Item>
      <Menu.Dropdown title="Pricing" content dropdownMT="4">
        <div className="px-5 py-3">
          <Header as="h6" color="blue" colorContrast="600">Plans & Pricing</Header>

          <div className="mt-5">
            <ListBox
            horizontal space="3"
            bgActiveColor="blue" bgActiveColorContrast="500"
            textActiveColor="white">
              <ListBox.Item>
                <div className="w-40">
                  <div className="flex justify-between">
                    <h5 className="font-bold">Basic</h5>
                  </div>
                  <Text fontWeight="bold" fontSize="xl">$0</Text>
                  <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
                </div>
              </ListBox.Item>
              <ListBox.Item>
                <div className="w-40">
                  <div className="flex justify-between">
                    <h5 className="font-bold">Advanced</h5>
                  </div>
                  <Text fontWeight="bold" fontSize="xl">$10</Text>
                  <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
                </div>
              </ListBox.Item>
              <ListBox.Item>
                <div className="w-40">
                  <div className="flex justify-between">
                    <h5 className="font-bold">Enterprise</h5>
                  </div>
                  <Text fontWeight="bold" fontSize="xl">$50</Text>
                  <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
                </div>
              </ListBox.Item>
            </ListBox>
          </div>
        </div>
      </Menu.Dropdown>
      <Menu.Item href="#">About</Menu.Item>
    </Menu>
  )
}

export const DropdownContentFull = () => {
  return(
    <Menu
    fixed
    itemActiveFontWeight="bold">
      <Menu.Item href="#">Home</Menu.Item>
      <Menu.Item href="#">Features</Menu.Item>
      <Menu.Dropdown title="Pricing" width="full" content contentFull dropdownMT="3">
        <div className="px-5 py-3">
          <Header as="h6" color="blue" colorContrast="600">Plans & Pricing</Header>

          <div className="mt-5">
            <ListBox
            horizontal space="3"
            bgActiveColor="blue" bgActiveColorContrast="500"
            textActiveColor="white">
              <ListBox.Item>
                <div className="w-40">
                  <div className="flex justify-between">
                    <h5 className="font-bold">Basic</h5>
                  </div>
                  <Text fontWeight="bold" fontSize="xl">$0</Text>
                  <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
                </div>
              </ListBox.Item>
              <ListBox.Item>
                <div className="w-40">
                  <div className="flex justify-between">
                    <h5 className="font-bold">Advanced</h5>
                  </div>
                  <Text fontWeight="bold" fontSize="xl">$10</Text>
                  <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
                </div>
              </ListBox.Item>
              <ListBox.Item>
                <div className="w-40">
                  <div className="flex justify-between">
                    <h5 className="font-bold">Enterprise</h5>
                  </div>
                  <Text fontWeight="bold" fontSize="xl">$50</Text>
                  <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</small>
                </div>
              </ListBox.Item>
            </ListBox>
          </div>
        </div>
      </Menu.Dropdown>
      <Menu.Item href="#">About</Menu.Item>
    </Menu>
  )
}

export const Responsive = () => {
  return(
    <Menu responsive
    itemBgColorHover="gray" itemBgColorHoverContrast="100"
    logo={(
      <a href="https://kodepanda.com">
        <img src="https://camo.githubusercontent.com/c366caebb944b6e21d1471c71e253437ba6dd2f5073fb13f46ea2865d1beaa08/68747470733a2f2f6b6f646570616e64612e636f6d2f6173736574732f6b6f646570616e64612d626c75652e737667" alt="Logo Kodepanda" width={50} />
      </a>
    )}>
      <Menu.Item href="#">Home</Menu.Item>
      <Menu.Dropdown title="Features">
        <MenuDropdown.Item href="#" target="_blank">Feature 1</MenuDropdown.Item>
        <MenuDropdown.Item href="#">Feature 2</MenuDropdown.Item>
        <MenuDropdown.Item href="#">Feature 3</MenuDropdown.Item>
        <MenuDropdown.Item href="#">Feature 4</MenuDropdown.Item>
      </Menu.Dropdown>
      <Menu.Item href="#">Pricing</Menu.Item>
      <Menu.Item href="#">About</Menu.Item>
      <Menu.Content position="right">
        <Menu.Item px="1">
          <Button>Login</Button>
        </Menu.Item>
      </Menu.Content>
    </Menu>
  )
}
