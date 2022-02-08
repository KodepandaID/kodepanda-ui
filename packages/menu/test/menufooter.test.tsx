import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Menu, MenuFooter } from "../src"
import { Image } from "../../image/src"
import { Text } from "../../typography/src"

describe("Standard Menu Footer component", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(
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
      </MenuFooter>
    )
  })

  it("should have nav element with classname", () => {
    expect(rendered.container.querySelector("nav")).toHaveClass("relative w-full bg-white border border-solid border-gray-100")
  })

  it("should have nav>div element with classname", () => {
    expect(rendered.container.querySelector("nav>div")).toHaveClass("flex flex-col lg:flex-row md:space-x-0 px-16 py-5 lg:space-x-24")
  })

  it("should have 2 length nav>div>div element", () => {
    expect(rendered.container.querySelectorAll("nav>div>div")).toHaveLength(2)
  })

  it("should have ul>li element menu.items title with text content", () => {
    expect(rendered.container.querySelector("ul>li")).toHaveTextContent("Menu")
  })

  it("should have 6 li element", () => {
    expect(rendered.container.querySelectorAll("ul>li")).toHaveLength(6)
  })

  it("should have ul>li element with attribute role menuitem", () => {
    expect(rendered.container.querySelectorAll("ul>li")[1]).toHaveAttribute("role", "menuitem")
  })

  it("should have ul>li>a element with classname", () => {
    expect(rendered.container.querySelectorAll("ul>li>a")[1]).toHaveClass("block border-transparent py-1.5 text-gray-600 hover:text-blue-600 text-sm no-underline transition-colors ease-in-out delay-100 focus:text-blue-600 hover:select-none focus:outline-none")
  })

  describe("Standard Menu Footer Fixed component", () => {
    beforeEach(() => {
      rendered = render(
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
        </MenuFooter>
      )
    })

    it("should have nav element with classname", () => {
      expect(rendered.container.querySelector("nav")).toHaveClass("fixed bottom-0 left-0 z-50 w-full bg-white border border-solid border-gray-100")
    })
  })

  describe("Standard Menu Footer Content component", () => {
    beforeEach(() => {
      rendered = render(
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
        </MenuFooter>
      )
    })

    it("should have nav>div index 1 with classname", () => {
      expect(rendered.container.querySelectorAll("nav>div")[1]).toHaveClass("w-full bg-gray-700 px-5 py-1")
    })

    it("should have nav>div index 1 with text content", () => {
      expect(rendered.container.querySelectorAll("nav>div")[1]).toHaveTextContent("©2022 Kodepanda Kreasi Media")
    })
  })
})
