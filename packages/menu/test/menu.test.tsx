import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Menu, MenuDropdown } from "../src"
import { Icon } from "../../icon/src"
import { Button } from "../../button/src"
import userEvent from "@testing-library/user-event"

describe("Standard Menu component", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(
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
  })

  it("should have nav element with classname", () => {
    expect(rendered.container.querySelector("nav")).toHaveClass("relative bg-white border border-solid border-gray-100")
  })

  it("should have nav>div element with classname", () => {
    expect(rendered.container.querySelector("nav>div")).toHaveClass("w-full flex justify-between items-center px-5 py-3 space-x-3")
  })

  it("should have nav>div>div element for logo with classname", () => {
    expect(rendered.container.querySelectorAll("nav>div>div")[0]).toHaveClass("whitespace-nowrap no-underline ml-2")
  })

  it("should have nav>div>div element for menu wrapper with classname", () => {
    expect(rendered.container.querySelectorAll("nav>div>div")[1]).toHaveClass("flex grow ")
  })

  it("should have ul element with classname", () => {
    expect(rendered.container.querySelector("ul")).toHaveClass("flex items-center")
  })

  it("should have ul element with role attribute menubar", () => {
    expect(rendered.container.querySelector("ul")).toHaveAttribute("role", "menubar")
  })

  it("should have ul>li element with 6 list", () => {
    expect(rendered.container.querySelectorAll("ul>li")).toHaveLength(6)
  })

  it("should have ul>li element with 6 attribute role menuitem", () => {
    expect(rendered.container.querySelector("ul>li")).toHaveAttribute("role", "menuitem")
  })

  it("should have ul>li>a element with classname", () => {
    expect(rendered.container.querySelector("ul>li>a")).toHaveClass("block border-transparent px-5 py-3 text-gray-500 hover:text-gray-700 text-sm no-underline transition-colors ease-in-out delay-100 focus:text-gray-700 hover:select-none focus:outline-none")
  })

  describe("Standard Menu Active component", () => {
    beforeEach(() => {
      rendered = render(
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
    })

    it("should have ul>li>a element with attribute aria-currentpage is page", () => {
      expect(rendered.container.querySelector("ul>li>a")).toHaveAttribute("aria-current", "page")
    })

    it("should have ul>li>a element with classname", () => {
      expect(rendered.container.querySelector("ul>li>a")).toHaveClass("block border-transparent px-5 py-3 text-blue-700 hover:text-blue-700 text-sm font-bold no-underline transition-colors ease-in-out delay-100 focus:text-blue-700 hover:select-none focus:outline-none")
    })
  })

  describe("Standard Menu Item Border component", () => {
    beforeEach(() => {
      rendered = render(
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
    })

    it("should have ul>li>a element with classname", () => {
      expect(rendered.container.querySelector("ul>li>a")).toHaveClass("block border-b-2 border-solid border-transparent hover:border-blue-600 px-5 py-3 text-gray-500 hover:text-gray-700 text-sm no-underline transition-colors ease-in-out delay-100 focus:text-gray-700 focus:border-b-2 focus:border-blue-600 hover:select-none focus:outline-none")
    })
  })

  describe("Standard Menu Item Position component", () => {
    beforeEach(() => {
      rendered = render(
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
    })

    it("should have nav>div>div element with classname", () => {
      expect(rendered.container.querySelectorAll("nav>div>div")[1]).toHaveClass("flex grow justify-end")
    })

    describe("Standard Menu Item Position Center component", () => {
      beforeEach(() => {
        rendered = render(
          <Menu itemPosition="center"
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
      })

      it("should have nav>div>div element with classname", () => {
        expect(rendered.container.querySelectorAll("nav>div>div")[1]).toHaveClass("flex grow justify-center")
      })
    })
  })

  describe("Standard Menu Fixed component", () => {
    beforeEach(() => {
      rendered = render(
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
    })

    it("should have nav element with classname", () => {
      expect(rendered.container.querySelector("nav")).toHaveClass("fixed top-0 left-0 right-0 z-50 bg-white border border-solid border-gray-100")
    })
  })

  describe("Standard Menu Rounded component", () => {
    beforeEach(() => {
      rendered = render(
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
    })

    it("should have nav element with classname", () => {
      expect(rendered.container.querySelector("nav")).toHaveClass("relative bg-white border border-solid border-gray-100 rounded-full")
    })
  })

  describe("Standard Menu Coloring component", () => {
    beforeEach(() => {
      rendered = render(
        <Menu
        color="blue" colorContrast="500"
        itemBgColorHover="blue" itemBgColorHoverContrast="600"
        itemTextColor="white" itemTextColorHover="white"
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
    })

    it("should have nav element with classname", () => {
      expect(rendered.container.querySelector("nav")).toHaveClass("relative bg-blue-500 border border-solid border-gray-100")
    })
  })

  describe("Standard Menu Rounded Item component", () => {
    beforeEach(() => {
      rendered = render(
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
    })

    it("should have ul>li>a element with classname", () => {
      expect(rendered.container.querySelector("ul>li>a")).toHaveClass("block hover:bg-blue-500 border-transparent rounded-md px-5 py-1 text-gray-500 hover:text-white text-sm no-underline transition-colors ease-in-out delay-100 focus:bg-blue-500 focus:text-white hover:select-none focus:outline-none")
    })
  })

  describe("Standard Menu Logo Position component", () => {
    beforeEach(() => {
      rendered = render(
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
    })

    it("should have nav>div>div index 1 element with classname", () => {
      expect(rendered.container.querySelectorAll("nav>div>div")[1]).toHaveClass("whitespace-nowrap no-underline")
    })
  })

  describe("Standard Menu Custom Item component", () => {
    beforeEach(() => {
      rendered = render(
        <Menu
        logo={(
          <a href="https://kodepanda.com">
            <img src="https://kodepanda.com/image/kodepanda-full-logo.svg" alt="Logo Kodepanda" width={150} />
          </a>
        )} logoPosition="right">
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
    })

    it("should have ul>li>div element with classname", () => {
      expect(rendered.container.querySelector("ul>li>div")).toHaveClass("block px-5 py-0 text-gray-500 hover:text-gray-700 text-sm no-underline transition-colors ease-in-out delay-100 focus:text-gray-700 focus:text-gray-700 cursor-pointer hover:select-none focus:outline-none")
    })
  })

  describe("Standard Menu Content component", () => {
    beforeEach(() => {
      rendered = render(
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
    })

    it("should have nav>div>div index 2 with classname", () => {
      expect(rendered.container.querySelectorAll("nav>div>div")[2]).toHaveClass("w-max flex grow justify-end")
    })
  })

  describe("Standard Menu Dropdown component", () => {
    beforeEach(() => {
      rendered = render(
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
    })

    it("should open dropdown after click li element", () => {
      userEvent.click(rendered.container.querySelectorAll("ul>li")[1])
      expect(rendered.container.querySelectorAll("ul>li>div")[1]).toHaveClass("absolute top-full z-40 block w-max cursor-pointer select-none")
    })

    it("should open dropdown after click li element", () => {
      userEvent.click(rendered.container.querySelectorAll("ul>li")[1])
      const elm = rendered.container.querySelectorAll("ul>li>div")[1]
      expect(elm.querySelector("ul")).toHaveClass("overflow-hidden bg-white border border-solid border-gray-100 rounded-md shadow-lg px-0.5 py-0.5 cursor-pointer select-none")
    })

    it("should open dropdown after click li element and get div element with attribute role menu", () => {
      userEvent.click(rendered.container.querySelectorAll("ul>li")[1])
      const elm = rendered.container.querySelectorAll("ul>li>div")[1]
      expect(elm.querySelector("ul")).toHaveAttribute("role", "menu")
    })

    it("should open dropdown after click li element and get div element with aria-orientation vertical", () => {
      userEvent.click(rendered.container.querySelectorAll("ul>li")[1])
      const elm = rendered.container.querySelectorAll("ul>li>div")[1]
      expect(elm.querySelector("ul")).toHaveAttribute("aria-orientation", "vertical")
    })

    it("should open dropdown after click li element and get div>a element with length equal 4", () => {
      userEvent.click(rendered.container.querySelectorAll("ul>li")[1])
      const elm = rendered.container.querySelectorAll("ul>li>div")[1]
      expect(elm.querySelectorAll("ul>li>a")).toHaveLength(4)
    })

    it("should open dropdown after click li element and get div>a element with classname", () => {
      userEvent.click(rendered.container.querySelectorAll("ul>li")[1])
      const elm = rendered.container.querySelectorAll("ul>li>div")[1]
      expect(elm.querySelector("ul>li>a")).toHaveClass("flex justify-between items-center hover:bg-blue-500 rounded-md px-3 py-1 select-none focus:outline-none focus:bg-blue-500 focus:text-white text-black hover:text-white text-sm")
    })
  })

  describe("Standard Menu Keyboard Event component", () => {
    beforeEach(() => {
      rendered = render(
        <Menu>
          <Menu.Item href="#">Services</Menu.Item>
          <Menu.Item href="#">Portofolio</Menu.Item>
          <Menu.Item href="#">About</Menu.Item>
          <Menu.Item href="#">Blog</Menu.Item>
          <Menu.Item href="#">Career</Menu.Item>
          <Menu.Item href="#">Contact</Menu.Item>
        </Menu>
      )
    })

    it("should move focus from li element index 0 to index 1 after press arrow right", () => {
      rendered.container.querySelector("a")?.focus()
      userEvent.keyboard("{arrowright}")
      expect(rendered.container.querySelectorAll("ul>li>a")[1]).toHaveFocus()
    })

    it("should move focus from li element index 1 to index 0 after press arrow left", () => {
      rendered.container.querySelector("a")?.focus()
      userEvent.keyboard("{arrowright}{arrowleft}")
      expect(rendered.container.querySelectorAll("ul>li>a")[0]).toHaveFocus()
    })
  })
})
