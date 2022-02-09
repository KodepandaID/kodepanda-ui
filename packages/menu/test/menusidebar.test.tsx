import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Menu, MenuSidebar, MenuDropdown } from "../src"
import { Text } from "../../typography/src"
import userEvent from "@testing-library/user-event"

describe("Standard Menu Sidebar component", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(
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
  })

  it("should have nav element with classname", () => {
    expect(rendered.container.querySelector("nav")).toHaveClass("min-h-screen flex flex-col flex-auto flex-shrink-0")
  })

  it("should have nav>div element with classname", () => {
    expect(rendered.container.querySelector("nav>div")).toHaveClass("relative block w-64 h-screen flex flex-col bg-white border border-solid border-gray-100 ")
  })

  it("should have nav>div>div element for logo with classname", () => {
    expect(rendered.container.querySelector("nav>div>div")).toHaveClass("flex items-center md:content-center px-5 py-3")
  })

  it("should have nav>div>div element for menu wrapper with classname", () => {
    expect(rendered.container.querySelectorAll("nav>div>div")[1]).toHaveClass("overflow-y-auto overflow-x-hidden flex-grow px-5 py-3")
  })

  it("should have ul element with attribute role menubar", () => {
    expect(rendered.container.querySelector("ul")).toHaveAttribute("role", "menubar")
  })

  it("should have 4 ul>li element", () => {
    expect(rendered.container.querySelectorAll("ul>li")).toHaveLength(4)
  })

  it("should have ul>li element with classname", () => {
    expect(rendered.container.querySelector("ul>li>a")).toHaveClass("block hover:bg-gray-100 border-transparent px-5 py-3 text-gray-500 hover:text-gray-700 text-sm no-underline transition-colors ease-in-out delay-100 focus:bg-gray-100 focus:text-gray-700 hover:select-none focus:outline-none")
  })

  describe("Standard Menu Sidebar Coloring component", () => {
    beforeEach(() => {
      rendered = render(
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
    })

    it("should have nav>div element with classname", () => {
      expect(rendered.container.querySelector("nav>div")).toHaveClass("relative block w-64 h-screen flex flex-col bg-black border border-solid border-gray-100")
    })
  })

  describe("Standard Menu Sidebar Icon component", () => {
    beforeEach(() => {
      rendered = render(
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
    })

    it("should have svg element inside ul>li>a element", () => {
      expect(rendered.container.querySelector("ul>li>a>span>span>svg")).not.toBeNull()
    })
  })

  describe("Standard Menu Sidebar Fixed component", () => {
    beforeEach(() => {
      rendered = render(
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
    })

    it("should have nav>div element with classname", () => {
      expect(rendered.container.querySelector("nav>div")).toHaveClass("fixed top-0 left-0 z-50 block w-64 h-screen flex flex-col bg-blue-600 border-r border-solid border-gray-100 ")
    })
  })

  describe("Standard Menu Sidebar Collapse component", () => {
    beforeEach(() => {
      rendered = render(
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
    })

    it("should have nav>button element with classname", () => {
      expect(rendered.container.querySelector("nav>button")).toHaveClass("fixed z-50 w-6 h-6 flex justify-center items-center bg-blue-600 rounded-full shadow-md")
    })
  })

  describe("Standard Menu Sidebar Dropdown component", () => {
    beforeEach(() => {
      rendered = render(
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
    })

    it("should have ul>li>div element with classname", () => {
      expect(rendered.container.querySelector("ul>li>div")).toHaveClass("flex justify-between items-center border-transparent px-5 py-3 text-white hover:text-white text-sm no-underline transition-colors ease-in-out delay-100 focus:bg-blue-700 focus:text-white cursor-pointer hover:select-none focus:outline-none")
    })

    it("should have ul>li>div index 1 with classname", () => {
      expect(rendered.container.querySelectorAll("ul>li>div")[1]).toHaveClass("block overflow-hidden")
    })

    it("should have 2 dropdown item", () => {
      userEvent.click(rendered.container.querySelectorAll("ul>li>div")[1])
      expect(rendered.container.querySelectorAll("ul>li>div")[1].querySelectorAll("div>ul>li")).toHaveLength(2)
    })

    it("should have dropdown item with classname", () => {
      userEvent.click(rendered.container.querySelectorAll("ul>li>div")[1])
      expect(rendered.container.querySelectorAll("ul>li>div")[1].querySelector("div>ul>li>a")).toHaveClass("flex justify-between items-center hover:bg-blue-500 rounded-none px-0 py-3 pl-11 pr-5 select-none focus:outline-none focus:bg-blue-500 focus:text-white text-white hover:text-white text-sm")
    })
  })
})
