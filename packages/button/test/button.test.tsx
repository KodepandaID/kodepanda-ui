import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Button } from "../src"
import { Provider } from "../../provider/src"
import userEvent from "@testing-library/user-event"

describe("Standard Button component", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(<Button>Basic Button</Button>)
  })

  it("should have button element with classname ", () => {
    expect(rendered.container.querySelector("button")).toHaveClass("inline-block w-max bg-blue-500 hover:bg-blue-700 rounded-md transition-colors duration-200 ease-in-out px-4 py-2 select-none focus:outline-none focus:bg-blue-700 text-white text-sm font-normal")
  })

  it("should have text content `Basic Button`", () => {
    expect(rendered.container.querySelector("button")).toHaveTextContent("Basic Button")
  })

  describe("Standard Button coloring component", () => {
    beforeEach(() => {
      rendered = render(<Button color="black">Black Button</Button>)
    })

    it("should have button element with classname ", () => {
      expect(rendered.container.querySelector("button")).toHaveClass("inline-block w-max bg-black hover:bg-black rounded-md transition-colors duration-200 ease-in-out px-4 py-2 select-none focus:outline-none focus:bg-black text-white text-sm font-normal")
    })
  })

  describe("Standard Button disabled component", () => {
    beforeEach(() => {
      rendered = render(<Button disabled>Black Button</Button>)
    })

    it("should have button element with classname ", () => {
      expect(rendered.container.querySelector("button")).toHaveClass("inline-block w-max bg-blue-500 hover:bg-blue-700 rounded-md transition-colors duration-200 ease-in-out px-4 py-2 opacity-50 select-none focus:outline-none focus:bg-blue-700 text-white text-sm font-normal pointer-events-none")
    })

    it("should have disabled attribute", () => {
      expect(rendered.container.querySelector("button")).toHaveAttribute("disabled")
    })

    it("should have aria-disabled attribute", () => {
      expect(rendered.container.querySelector("button")).toHaveAttribute("aria-disabled", "true")
    })
  })

  describe("Standard Button custom width component", () => {
    beforeEach(() => {
      rendered = render(<Button width="52">Black Button</Button>)
    })

    it("should have button element with classname ", () => {
      expect(rendered.container.querySelector("button")).toHaveClass("inline-block w-52 bg-blue-500 hover:bg-blue-700 rounded-md transition-colors duration-200 ease-in-out px-4 py-2 select-none focus:outline-none focus:bg-blue-700 text-white text-sm font-normal")
    })
  })

  describe("Standard Button fluid component", () => {
    beforeEach(() => {
      rendered = render(<Button fluid>Black Button</Button>)
    })

    it("should have button element with classname ", () => {
      expect(rendered.container.querySelector("button")).toHaveClass("inline-block w-full bg-blue-500 hover:bg-blue-700 rounded-md transition-colors duration-200 ease-in-out px-4 py-2 select-none focus:outline-none focus:bg-blue-700 text-white text-sm font-normal")
    })
  })

  describe("Standard Button responsive component", () => {
    beforeEach(() => {
      rendered = render(<Button color="black" width="full" lg={{width: "max"}}>Black Button</Button>)
    })

    it("should have button element with classname ", () => {
      expect(rendered.container.querySelector("button")).toHaveClass("inline-block w-full lg:w-max bg-black hover:bg-black rounded-md transition-colors duration-200 ease-in-out px-4 py-2 select-none focus:outline-none focus:bg-black text-white text-sm font-normal")
    })
  })

  describe("Standard Button rounded component", () => {
    beforeEach(() => {
      rendered = render(<Button rounded="none">Black Button</Button>)
    })

    it("should have button element with classname ", () => {
      expect(rendered.container.querySelector("button")).toHaveClass("inline-block w-max bg-blue-500 hover:bg-blue-700 rounded-none transition-colors duration-200 ease-in-out px-4 py-2 select-none focus:outline-none focus:bg-blue-700 text-white text-sm font-normal")
    })
  })

  describe("Standard Button shadow component", () => {
    beforeEach(() => {
      rendered = render(<Button shadow="md">Button</Button>)
    })

    it("should have button element with classname ", () => {
      expect(rendered.container.querySelector("button")).toHaveClass("inline-block w-max bg-blue-500 hover:bg-blue-700 rounded-md shadow-md transition-colors duration-200 ease-in-out px-4 py-2 select-none focus:outline-none focus:bg-blue-700 text-white text-sm font-normal")
    })
  })

  describe("Standard Button onclick component", () => {
    const onClick = jest.fn()
    beforeEach(() => {
      rendered = render(<Button onClick={onClick}>Button</Button>)
    })

    it("should called onClick function after click", () => {
      rendered.container.querySelector("button")?.click()
      expect(onClick).toBeCalled()
    })

    it("should called onClick function after press enter", () => {
      userEvent.tab()
      userEvent.keyboard("{enter}")
      expect(onClick).toBeCalled()
    })
  })

  describe("Standard Button link component", () => {
    beforeEach(() => {
      rendered = render(<Button href="https://kodepanda.com" target="_blank">Button</Button>)
    })

    it("should have a element with classname ", () => {
      expect(rendered.container.querySelector(`a[role="button"]`)).toHaveClass("inline-block w-max bg-blue-500 hover:bg-blue-700 rounded-md transition-colors duration-200 ease-in-out px-4 py-2 select-none focus:outline-none focus:bg-blue-700 text-white text-sm font-normal")
    })

    it("should have an attribute href with value `https://kodepanda.com`", () => {
      expect(rendered.container.querySelector(`a[role="button"]`)).toHaveAttribute("href", "https://kodepanda.com")
    })

    it("should have an attribute target with value `_blank`", () => {
      expect(rendered.container.querySelector(`a[role="button"]`)).toHaveAttribute("target", "_blank")
    })

    it("should have an attribute tabindex with value `0`", () => {
      expect(rendered.container.querySelector(`a[role="button"]`)).toHaveAttribute("tabindex", "0")
    })
  })

  describe("Standard Button icon component", () => {
    beforeEach(() => {
      rendered = render(<Button icon="phone-solid" iconHeight="4" iconColor="white" />)
    })

    it("should have span element with classname ", () => {
      expect(rendered.container.querySelector(`button>span`)).toHaveClass("flex justify-center space-x-4")
    })

    it("should have span element with style `margin-left: calc(-0.5em - 1px); margin-right: calc(-0.5em - 1px);`", () => {
      expect(rendered.container.querySelector(`button>span`)).toHaveStyle("margin-left: calc(-0.5em - 1px); margin-right: calc(-0.5em - 1px);")
    })
  })

  describe("Standard Button circle component", () => {
    beforeEach(() => {
      rendered = render(<Button
        circle
        width="8"
        icon="phone-solid" iconHeight="4" iconColor="white" />)
    })

    it("should have button element with classname ", () => {
      expect(rendered.container.querySelector(`button`)).toHaveClass("inline-block w-8 h-8 bg-blue-500 hover:bg-blue-700 rounded-full transition-colors duration-200 ease-in-out px-4 py-2 select-none focus:outline-none focus:bg-blue-700 text-white text-sm font-normal")
    })

    it("should have svg element with classname ", () => {
      expect(rendered.container.querySelector(`button>span>span>svg`)).toHaveClass("h-4 text-white")
    })

    describe("Standard Button circle with error component", () => {
      it("should have to throw error", () => {
        expect(() => render(<Button width="max" circle />)).toThrow("If you want to use the `circle` property, you can't fill the `width` property value with `full` `screen` or `max` you must fill with size number.")
      })
    })
  })

  describe("Standard Button loading component", () => {
    beforeEach(() => {
      rendered = render(<Button loading />)
    })

    it("should have button element with classname ", () => {
      expect(rendered.container.querySelector(`button`)).toHaveClass("inline-block w-max bg-blue-500 hover:bg-blue-700 rounded-md transition-colors duration-200 ease-in-out px-4 py-2 select-none focus:outline-none focus:bg-blue-700 text-white text-sm font-normal")
    })
  })

  describe("Standard Button dark mode component", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark>
          <Button darkColor="white" darkTextColor="black">Basic Button</Button>
        </Provider>
      )
    })

    it("should have button element with classname ", () => {
      expect(rendered.container.querySelector(`button`)).toHaveClass("inline-block w-max bg-blue-500 dark:bg-white hover:bg-blue-700 dark:hover:bg-white rounded-md transition-colors duration-200 ease-in-out px-4 py-2 select-none focus:outline-none focus:bg-blue-700 text-white dark:text-black text-sm font-normal")
    })
  })
})
