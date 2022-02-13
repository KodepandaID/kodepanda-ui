import { Input } from "@zenbu-ui/input"
import * as React from "react"
import { Menu, MenuDropdown, MenuSidebar } from "../src"
import { Provider } from "../../provider/src"
import { Text } from "../../typography/src"
import { Avatar } from "../../avatar/src"

export default { title: 'Components/Menu Sidebar' }

export const Basic = () => {
  return(
    <MenuSidebar
    height="screen"
    itemBgColorHover="gray" itemBgColorHoverContrast="100"
    logo={(
      <a href="https://kodepanda.com" className="w-full flex items-center justify-center px-3">
        <img src="https://camo.githubusercontent.com/c366caebb944b6e21d1471c71e253437ba6dd2f5073fb13f46ea2865d1beaa08/68747470733a2f2f6b6f646570616e64612e636f6d2f6173736574732f6b6f646570616e64612d626c75652e737667" alt="Logo Kodepanda" width={50} />
      </a>
    )}>
      <Menu.Item href="#">Home</Menu.Item>
      <Menu.Item href="#">Features</Menu.Item>
      <Menu.Item href="#">Pricing</Menu.Item>
      <Menu.Item href="#">About</Menu.Item>
    </MenuSidebar>
  )
}

export const Dark = () => {
  const [dark, setDark] = React.useState(false)

  return(
    <div className="dark">
      <Provider dark={dark}>
        <MenuSidebar
        height="screen"
        color="slate" colorContrast="100"
        darkColor="slate" darkColorContrast="700"
        borderColor="slate" borderColorContrast="200"
        darkBorderColor="slate" darkBorderColorContrast="800"
        itemBgColorHover="gray" itemBgColorHoverContrast="100"
        logo={(
          <a href="https://kodepanda.com" className="w-full flex items-center justify-center px-3">
            <img src="https://camo.githubusercontent.com/c366caebb944b6e21d1471c71e253437ba6dd2f5073fb13f46ea2865d1beaa08/68747470733a2f2f6b6f646570616e64612e636f6d2f6173736574732f6b6f646570616e64612d626c75652e737667" alt="Logo Kodepanda" width={50} />
          </a>
        )}>
          <Menu.Item href="#">Home</Menu.Item>
          <Menu.Item href="#">Features</Menu.Item>
          <Menu.Item href="#">Pricing</Menu.Item>
          <Menu.Item href="#">About</Menu.Item>
          <Menu.Item onClick={() => setDark(!dark)}>Dark</Menu.Item>
        </MenuSidebar>
      </Provider>
    </div>
  )
}

export const Coloring= () => {
  return(
    <MenuSidebar
    height="screen"
    color="black" itemTextColor="white"
    itemBgColorHover="gray" itemBgColorHoverContrast="100"
    logo={(
      <a href="https://kodepanda.com" className="w-full flex px-3">
        <img src="https://kodepanda.com/assets/logo-kurito.svg" alt="Logo Kodepanda" width={30} />
      </a>
    )}>
      <Menu.Item href="#">Home</Menu.Item>
      <Menu.Item href="#">Features</Menu.Item>
      <Menu.Item href="#">Pricing</Menu.Item>
      <Menu.Item href="#">About</Menu.Item>
    </MenuSidebar>
  )
}

export const Icon = () => {
  return(
    <MenuSidebar
    height="screen"
    itemBgColorHover="gray" itemBgColorHoverContrast="100"
    logo={(
      <a href="https://kodepanda.com" className="flex items-center justify-center px-3">
        <img src="https://camo.githubusercontent.com/c366caebb944b6e21d1471c71e253437ba6dd2f5073fb13f46ea2865d1beaa08/68747470733a2f2f6b6f646570616e64612e636f6d2f6173736574732f6b6f646570616e64612d626c75652e737667" alt="Logo Kodepanda" width={50} />
      </a>
    )}>
      <Menu.Item href="#" icon="home">Home</Menu.Item>
      <Menu.Item href="#" icon="light-bulb">Features</Menu.Item>
      <Menu.Item href="#" icon="credit-card">Pricing</Menu.Item>
      <Menu.Item href="#" icon="question-mark-circle">About</Menu.Item>
    </MenuSidebar>
  )
}

export const IconOnly = () => {
  return(
    <MenuSidebar iconOnly
    width="64" height="screen"
    color="blue" colorContrast="600"
    itemTextColor="white" itemTextColorHover="white"
    itemBgColorHover="blue" itemBgColorHoverContrast="700"
    logo={(
      <a href="https://kodepanda.com" className="px-3">
        <img src="https://kodepanda.com/assets/logo-kurito.svg" alt="Logo Kodepanda" width={30} />
      </a>
    )}>
      <Menu.Items title={(<Text fontSize="xs" color="white">Menu</Text>)} ml="5" mb="2">
        <Menu.Item href="#" icon="home" title="dashboard">Dashboard</Menu.Item>
        <Menu.Item href="#" icon="mail-open">Inbox</Menu.Item>
        <Menu.Item href="#" icon="chat-alt">Message</Menu.Item>
        <Menu.Item href="#" icon="bell">Notifications</Menu.Item>
      </Menu.Items>

      <Menu.Items title={(<Text fontSize="xs" color="white">Tasks</Text>)} ml="5" mb="2">
        <Menu.Item href="#" icon="clipboard-list">Available Tasks</Menu.Item>
        <Menu.Item href="#" icon="clipboard-check">Completed Tasks</Menu.Item>
      </Menu.Items>
    </MenuSidebar>
  )
}

export const ItemHover = () => {
  return(
    <MenuSidebar
    height="screen"
    itemBgColorHover="blue" itemBgColorHoverContrast="600"
    itemTextColor="blue" itemTextColorContrast="600" itemTextColorHover="white"
    logo={(
      <a href="https://kodepanda.com" className="w-full flex items-center justify-center px-3">
        <img src="https://camo.githubusercontent.com/c366caebb944b6e21d1471c71e253437ba6dd2f5073fb13f46ea2865d1beaa08/68747470733a2f2f6b6f646570616e64612e636f6d2f6173736574732f6b6f646570616e64612d626c75652e737667" alt="Logo Kodepanda" width={50} />
      </a>
    )}>
      <Menu.Item href="#">Home</Menu.Item>
      <Menu.Item href="#">Features</Menu.Item>
      <Menu.Item href="#">Pricing</Menu.Item>
      <Menu.Item href="#">About</Menu.Item>
    </MenuSidebar>
  )
}

export const ItemHoverPaddig = () => {
  return(
    <MenuSidebar
    height="screen"
    itemBgColorHover="blue" itemBgColorHoverContrast="500"
    itemTextColor="blue" itemTextColorContrast="600" itemTextColorHover="white"
    itemRounded="md"
    itemPY="1" px="5" py="4"
    logo={(
      <a href="https://kodepanda.com" className="w-full flex items-center justify-center px-3">
        <img src="https://camo.githubusercontent.com/c366caebb944b6e21d1471c71e253437ba6dd2f5073fb13f46ea2865d1beaa08/68747470733a2f2f6b6f646570616e64612e636f6d2f6173736574732f6b6f646570616e64612d626c75652e737667" alt="Logo Kodepanda" width={50} />
      </a>
    )}>
      <Menu.Item href="#">Home</Menu.Item>
      <Menu.Item href="#">Features</Menu.Item>
      <Menu.Item href="#">Pricing</Menu.Item>
      <Menu.Item href="#">About</Menu.Item>
    </MenuSidebar>
  )
}

export const Collapse = () => {
  return(
    <MenuSidebar collapseButton
    width="64" height="screen"
    color="blue" colorContrast="600"
    itemTextColor="white" itemTextColorHover="white"
    itemBgColorHover="blue" itemBgColorHoverContrast="700"
    logo={(
      <a href="https://kodepanda.com" className="px-3">
        <img src="https://kodepanda.com/assets/logo-kurito.svg" alt="Logo Kodepanda" width={30} />
      </a>
    )}>
      <Menu.Items title={(<Text fontSize="xs" color="white">Menu</Text>)} ml="5" mb="2">
        <Menu.Item href="#" icon="home" title="dashboard">Dashboard</Menu.Item>
        <Menu.Item href="#" icon="mail-open">Inbox</Menu.Item>
        <Menu.Item href="#" icon="chat-alt">Message</Menu.Item>
        <Menu.Item href="#" icon="bell">Notifications</Menu.Item>
      </Menu.Items>

      <Menu.Items title={(<Text fontSize="xs" color="white">Tasks</Text>)} ml="5" mb="2">
        <Menu.Item href="#" icon="clipboard-list">Available Tasks</Menu.Item>
        <Menu.Item href="#" icon="clipboard-check">Completed Tasks</Menu.Item>
      </Menu.Items>
    </MenuSidebar>
  )
}

export const BorderItem = () => {
  return(
    <MenuSidebar
    height="screen"
    itemBgColorHover="gray" itemBgColorHoverContrast="100"
    itemBorder itemBorderHoverColor="blue" itemBorderHoverColorContrast="600" itemBorderHoverWidth="2"
    logo={(
      <a href="https://kodepanda.com" className="px-3">
        <img src="https://camo.githubusercontent.com/c366caebb944b6e21d1471c71e253437ba6dd2f5073fb13f46ea2865d1beaa08/68747470733a2f2f6b6f646570616e64612e636f6d2f6173736574732f6b6f646570616e64612d626c75652e737667" alt="Logo Kodepanda" width={50} />
      </a>
    )} px="0">
      <Menu.Item>
        <Input name="tester" placeholder="search" icon="search" />
      </Menu.Item>
      <Menu.Item href="#" icon="home">Home</Menu.Item>
      <Menu.Item href="#" icon="light-bulb">Features</Menu.Item>
      <Menu.Item href="#" icon="credit-card">Pricing</Menu.Item>
      <Menu.Item href="#" icon="question-mark-circle">About</Menu.Item>
    </MenuSidebar>
  )
}

export const Items = () => {
  return(
    <MenuSidebar
    width="64" height="screen"
    color="blue" colorContrast="600"
    itemTextColor="white" itemTextColorHover="white"
    itemBgColorHover="blue" itemBgColorHoverContrast="700"
    logo={(
      <a href="https://kodepanda.com" className="px-3">
        <img src="https://kodepanda.com/assets/logo-kurito.svg" alt="Logo Kodepanda" width={30} />
      </a>
    )}>
      <Menu.Items title={(<Text fontSize="xs" color="white" ml="5" mb="2">Menu</Text>)}>
        <Menu.Item href="#" icon="home">Dashboard</Menu.Item>
        <Menu.Item href="#" icon="mail-open">Inbox</Menu.Item>
        <Menu.Item href="#" icon="chat-alt">Message</Menu.Item>
        <Menu.Item href="#" icon="bell">Notifications</Menu.Item>
      </Menu.Items>

      <Menu.Items title={(<Text fontSize="xs" color="white" ml="5" mb="2">Tasks</Text>)}>
        <Menu.Item href="#" icon="clipboard-list">Available Tasks</Menu.Item>
        <Menu.Item href="#" icon="clipboard-check">Completed Tasks</Menu.Item>
      </Menu.Items>
    </MenuSidebar>
  )
}

export const Fixed = () => {
  return(
    <MenuSidebar fixed
    width="64" height="screen"
    color="blue" colorContrast="600"
    itemTextColor="white" itemTextColorHover="white"
    itemBgColorHover="blue" itemBgColorHoverContrast="700"
    logo={(
      <a href="https://kodepanda.com" className="px-3">
        <img src="https://kodepanda.com/assets/logo-kurito.svg" alt="Logo Kodepanda" width={30} />
      </a>
    )}>
      <Menu.Items title={(<Text fontSize="xs" color="white" ml="5" mb="2">Menu</Text>)}>
        <Menu.Item href="#" icon="home" >Dashboard</Menu.Item>
        <Menu.Item href="#" icon="mail-open">Inbox</Menu.Item>
        <Menu.Item href="#" icon="chat-alt">Message</Menu.Item>
        <Menu.Item href="#" icon="bell">Notifications</Menu.Item>
      </Menu.Items>

      <Menu.Items title={(<Text fontSize="xs" color="white" ml="5" mb="2">Tasks</Text>)}>
        <Menu.Item href="#" icon="clipboard-list">Available Tasks</Menu.Item>
        <Menu.Item href="#" icon="clipboard-check">Completed Tasks</Menu.Item>
      </Menu.Items>
    </MenuSidebar>
  )
}

export const Responsive = () => {
  return(
    <MenuSidebar responsive fixed
    width="64" height="screen"
    color="blue" colorContrast="600"
    itemTextColor="white" itemTextColorHover="white"
    itemBgColorHover="blue" itemBgColorHoverContrast="700"
    logo={(
      <a href="https://kodepanda.com" className="px-3">
        <img src="https://kodepanda.com/assets/logo-kurito.svg" alt="Logo Kodepanda" width={30} />
      </a>
    )}>
      <Menu.Items title={(<Text fontSize="xs" color="white">Menu</Text>)} ml="5" mb="2">
        <Menu.Item href="#" icon="home">Dashboard</Menu.Item>
        <Menu.Item href="#" icon="mail-open">Inbox</Menu.Item>
        <Menu.Item href="#" icon="chat-alt">Message</Menu.Item>
        <Menu.Item href="#" icon="bell">Notifications</Menu.Item>
      </Menu.Items>

      <Menu.Items title={(<Text fontSize="xs" color="white">Tasks</Text>)} ml="5" mb="2">
        <Menu.Item href="#" icon="clipboard-list">Available Tasks</Menu.Item>
        <Menu.Item href="#" icon="clipboard-check">Completed Tasks</Menu.Item>
      </Menu.Items>
    </MenuSidebar>
  )
}

export const ResponsiveCollapseMini = () => {
  return(
    <MenuSidebar responsive fixed
    collapseMini
    width="64" height="screen"
    color="blue" colorContrast="600"
    itemTextColor="white" itemTextColorHover="white"
    itemBgColorHover="blue" itemBgColorHoverContrast="700"
    logo={(
      <a href="https://kodepanda.com" className="px-3">
        <img src="https://kodepanda.com/assets/logo-kurito.svg" alt="Logo Kodepanda" width={30} />
      </a>
    )}>
      <Menu.Items title={(<Text fontSize="xs" color="white">Menu</Text>)} ml="5" mb="2">
        <Menu.Item href="#" icon="home" title="dashboard">Dashboard</Menu.Item>
        <Menu.Item href="#" icon="mail-open">Inbox</Menu.Item>
        <Menu.Item href="#" icon="chat-alt">Message</Menu.Item>
        <Menu.Item href="#" icon="bell">Notifications</Menu.Item>
      </Menu.Items>

      <Menu.Items title={(<Text fontSize="xs" color="white">Tasks</Text>)} ml="5" mb="2">
        <Menu.Item href="#" icon="clipboard-list">Available Tasks</Menu.Item>
        <Menu.Item href="#" icon="clipboard-check">Completed Tasks</Menu.Item>
      </Menu.Items>
    </MenuSidebar>
  )
}

export const Dropdown = () => {
  return(
    <MenuSidebar fixed
    width="64" height="screen"
    color="blue" colorContrast="600"
    itemTextColor="white" itemTextColorHover="white"
    itemBgColorHover="blue" itemBgColorHoverContrast="700"
    logo={(
      <a href="https://kodepanda.com" className="px-3">
        <img src="https://kodepanda.com/assets/logo-kurito.svg" alt="Logo Kodepanda" width={30} />
      </a>
    )}>
      <Menu.Items title={(<Text fontSize="xs" color="white" ml="5" mb="2">Menu</Text>)}>
        <Menu.Item href="#" icon="home" >Dashboard</Menu.Item>
        <Menu.Item href="#" icon="mail-open">Inbox</Menu.Item>
        <Menu.Dropdown title="Message" icon="chat-alt"
        dropdownTextColor="white">
          <MenuDropdown.Item href="#">Unread</MenuDropdown.Item>
          <MenuDropdown.Item href="#">Draft</MenuDropdown.Item>
        </Menu.Dropdown>
        <Menu.Item href="#" icon="bell">Notifications</Menu.Item>
      </Menu.Items>

      <Menu.Items title={(<Text fontSize="xs" color="white" ml="5" mb="2">Tasks</Text>)}>
        <Menu.Item href="#" icon="clipboard-list">Available Tasks</Menu.Item>
        <Menu.Item href="#" icon="clipboard-check">Completed Tasks</Menu.Item>
      </Menu.Items>
    </MenuSidebar>
  )
}

export const MenuContent = () => {
  return(
    <MenuSidebar responsive fixed
    width="64" height="screen"
    color="blue" colorContrast="600"
    itemTextColor="white" itemTextColorHover="white"
    itemBgColorHover="blue" itemBgColorHoverContrast="700"
    logo={(
      <a href="https://kodepanda.com" className="px-3">
        <img src="https://kodepanda.com/assets/logo-kurito.svg" alt="Logo Kodepanda" width={30} />
      </a>
    )} px="1">
      <Menu.Items title={(<Text fontSize="xs" color="white">Menu</Text>)} ml="5" mb="2">
        <Menu.Item href="#" icon="home">Dashboard</Menu.Item>
        <Menu.Item href="#" icon="mail-open">Inbox</Menu.Item>
        <Menu.Item href="#" icon="chat-alt">Message</Menu.Item>
        <Menu.Item href="#" icon="bell">Notifications</Menu.Item>
      </Menu.Items>

      <Menu.Items title={(<Text fontSize="xs" color="white">Tasks</Text>)} ml="5" mb="2">
        <Menu.Item href="#" icon="clipboard-list">Available Tasks</Menu.Item>
        <Menu.Item href="#" icon="clipboard-check">Completed Tasks</Menu.Item>
      </Menu.Items>

      <Menu.Content position="bottom" py="3">
        <Menu.Item>
          <div className="flex items-center space-x-2 bg-blue-500 rounded-md px-3 py-3">
            <Avatar alt="Avatar for user ABC" src="https://images.unsplash.com/photo-1635522324378-ddd2d5cdaa55?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&w=128&h=128&dpr=2&q=80" width="10" />
            <div className="flex flex-col">
              <p className="font-semibold text-normal py-0">Yudha Pratama</p>
              <p className="font-normal text-xs py-0">yudha@mail.com</p>
            </div>
          </div>
        </Menu.Item>
      </Menu.Content>
    </MenuSidebar>
  )
}
