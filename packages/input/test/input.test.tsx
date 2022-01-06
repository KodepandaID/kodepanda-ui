import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Input } from "../src"
import { Text } from "../../typography/src"
import userEvent from "@testing-library/user-event"

describe("Standard Input component", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(<Input name="tester" value="tester" ariaLabel="input tester" />)
  })

  it("should have classname", () => {
    expect(rendered.container.querySelector("input")).toHaveClass("block w-max bg-white border border-solid border-gray-200 rounded-md px-3 py-1 placeholder-gray-300 text-gray-700 text-sm focus:border focus:border-blue-600 focus:outline-none")
  })

  it("should have attribute aria-label", () => {
    expect(rendered.container.querySelector("input")).toHaveAttribute("aria-label", "input tester")
  })

  it("should have attribute type", () => {
    expect(rendered.container.querySelector("input")).toHaveAttribute("type", "text")
  })

  it("should have value", () => {
    expect(rendered.container.querySelector("input")).toHaveValue("tester")
  })

  describe("Standard Input success component", () => {
    beforeEach(() => {
      rendered = render(<Input name="tester" success successText="Success" />)
    })

    it("should have div with classname", () => {
      expect(rendered.container.querySelector("div")).toHaveClass("flex flex-col")
    })

    it("should have div wrapper element with classname", () => {
      expect(rendered.container.querySelectorAll("div")[1]).toHaveClass("relative inline-flex items-center")
    })

    it("should have input element with classname", () => {
      expect(rendered.container.querySelector("input")).toHaveClass("block w-max bg-white border border-solid border-green-500 rounded-md px-3 py-1 placeholder-gray-300 text-gray-700 text-sm focus:border focus:border-green-500 focus:outline-none")
    })

    it("should have p element with classname", () => {
      expect(rendered.container.querySelector("p")).toHaveClass("text-xs text-green-600")
    })

    it("should have p element with text content", () => {
      expect(rendered.container.querySelector("p")).toHaveTextContent("Success")
    })
  })

  describe("Standard Input error component", () => {
    beforeEach(() => {
      rendered = render(<Input name="tester" error errorText="Error" />)
    })

    it("should have div with classname", () => {
      expect(rendered.container.querySelector("div")).toHaveClass("flex flex-col")
    })

    it("should have div wrapper element with classname", () => {
      expect(rendered.container.querySelectorAll("div")[1]).toHaveClass("relative inline-flex items-center")
    })

    it("should have input element with classname", () => {
      expect(rendered.container.querySelector("input")).toHaveClass("block w-max bg-red-200 border border-solid border-red-500 rounded-md px-3 py-1 placeholder-gray-300 text-gray-700 text-sm focus:border focus:border-red-500 focus:outline-none")
    })

    it("should have p element with classname", () => {
      expect(rendered.container.querySelector("p")).toHaveClass("text-xs text-red-500")
    })

    it("should have p element with text content", () => {
      expect(rendered.container.querySelector("p")).toHaveTextContent("Error")
    })
  })

  describe("Standard Input disabled component", () => {
    beforeEach(() => {
      rendered = render(<Input name="tester" disabled />)
    })

    it("should have attribute aria-disabled", () => {
      expect(rendered.container.querySelector("input")).toHaveAttribute("aria-disabled", "true")
    })

    it("should disabled", () => {
      expect(rendered.container.querySelector("input")).toBeDisabled()
    })
  })

  describe("Standard Input fluid component", () => {
    beforeEach(() => {
      rendered = render(<Input name="tester" fluid />)
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("input")).toHaveClass("block w-full bg-white border border-solid border-gray-200 rounded-md px-3 py-1 placeholder-gray-300 text-gray-700 text-sm focus:border focus:border-blue-600 focus:outline-none")
    })
  })

  describe("Standard Input coloring component", () => {
    beforeEach(() => {
      rendered = render(<Input name="tester" color="gray" colorContrast="200" />)
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("input")).toHaveClass("block w-max bg-gray-200 border border-solid border-gray-200 rounded-md px-3 py-1 placeholder-gray-300 text-gray-700 text-sm focus:border focus:border-blue-600  focus:outline-none")
    })
  })

  describe("Standard Input placeholder coloring component", () => {
    beforeEach(() => {
      rendered = render(<Input name="tester" color="gray" colorContrast="200" placeholderColor="white" />)
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("input")).toHaveClass("block w-max bg-gray-200 border border-solid border-gray-200 rounded-md px-3 py-1 placeholder-white text-gray-700 text-sm focus:border focus:border-blue-600  focus:outline-none")
    })
  })

  describe("Standard Input focus coloring component", () => {
    beforeEach(() => {
      rendered = render(<Input name="tester" borderWidth="2"
      borderFocusWidth="2" borderFocusColor="orange" borderFocusColorContrast="500" />)
    })

    it("should have classname", () => {
      expect(rendered.container.querySelector("input")).toHaveClass("block w-max bg-white border-2 border-solid border-gray-200 rounded-md px-3 py-1 placeholder-gray-300 text-gray-700 text-sm focus:border-2 focus:border-orange-500  focus:outline-none")
    })
  })

  describe("Standard Input icon component", () => {
    beforeEach(() => {
      rendered = render(<Input name="tester" icon="mail" />)
    })

    it("should have div element with classname", () => {
      expect(rendered.container.querySelector("div")).toHaveClass("relative flex items-center")
    })

    it("should have div element with classname", () => {
      expect(rendered.container.querySelectorAll("div")[1]).toHaveClass("relative w-max inline-flex items-center")
    })

    it("should have input element with classname", () => {
      expect(rendered.container.querySelector("input")).toHaveClass("block w-max bg-white border border-solid border-gray-200 rounded-md px-3 py-1 pl-8 placeholder-gray-300 text-gray-700 text-sm focus:border focus:border-blue-600 focus:outline-none")
    })

    it("should have span element with classname", () => {
      expect(rendered.container.querySelector("span")).toHaveClass("absolute left-2")
    })

    describe("Standard Input icon on right position component", () => {
      beforeEach(() => {
        rendered = render(<Input name="tester" icon="mail" iconPosition="right" />)
      })

      it("should have input element with classname", () => {
        expect(rendered.container.querySelector("input")).toHaveClass("block w-max bg-white border border-solid border-gray-200 rounded-md px-3 py-1 pr-8 placeholder-gray-300 text-gray-700 text-sm focus:border focus:border-blue-600 focus:outline-none")
      })

      it("should have span element with classname", () => {
        expect(rendered.container.querySelector("span")).toHaveClass("absolute right-2")
      })
    })
  })

  describe("Standard Input icon action component", () => {
    const onClick = jest.fn()
    beforeEach(() => {
      rendered = render(<Input name="tester" icon="search" iconAction="microphone-solid" iconActionClick={onClick} />)
    })

    it("should have input element with classname", () => {
      expect(rendered.container.querySelector("input")).toHaveClass("block w-max bg-white border border-solid border-gray-200 rounded-md px-3 py-1 pl-8 pr-8 placeholder-gray-300 text-gray-700 text-sm focus:border focus:border-blue-600 focus:outline-none")
    })

    it("should have span element with classname", () => {
      expect(rendered.container.querySelector("span")).toHaveClass("absolute left-2")
    })

    it("should have span element icon action with classname", () => {
      expect(rendered.container.querySelectorAll("span")[1]).toHaveClass("absolute right-2")
    })

    it("should have span element icon action with attribute", () => {
      expect(rendered.container.querySelectorAll("span")[1]).toHaveAttribute("role", "button")
    })

    it("should call onClick after click the icon action", () => {
      rendered.container.querySelectorAll("span")[1].click()
      expect(onClick).toBeCalled()
    })

    it("should call onClick after focusing and press the enter", () => {
      userEvent.tab()
      userEvent.tab()
      userEvent.keyboard("{enter}")
      expect(onClick).toBeCalled()
    })
  })

  describe("Standard Input clear value component", () => {
    beforeEach(() => {
      rendered = render(<Input name="tester" clearValue />)
    })

    it("should have value after typing", () => {
      rendered.container.querySelector("input")?.focus()
      userEvent.keyboard("tester")
      expect(rendered.container.querySelector("input")).toHaveValue("tester")
    })

    it("should have clear input value after click clear button", () => {
      rendered.container.querySelector("input")?.focus()
      userEvent.keyboard("tester")
      rendered.container.querySelector("span")?.click()
      expect(rendered.container.querySelector("input")).toHaveValue("")
    })
  })

  describe("Standard Input label component", () => {
    beforeEach(() => {
      rendered = render(<Input name="tester" label={(<Text span color="gray" colorContrast="600" fontWeight="semibold" fontSize="xs" textTransform="uppercase">Firstname</Text>)} />)
    })

    it("should have label with content", () => {
      expect(rendered.container.querySelector("label")).toHaveTextContent("Firstname")
    })

    describe("Standard Input label position", () => {
      beforeEach(() => {
        rendered = render(<Input name="tester"
        label={(<Text span color="gray" colorContrast="600" fontWeight="semibold" fontSize="xs" textTransform="uppercase">Firstname</Text>)}
        labelPosition="left" />)
      })

      it("should have label with content", () => {
        expect(rendered.container.querySelector("label")).toHaveTextContent("Firstname")
      })

      it("should have div element to wrap the label element", () => {
        expect(rendered.container.querySelector("div")).toHaveClass("relative flex items-center")
      })
    })
  })

  describe("Standard Input password component", () => {
    beforeEach(() => {
      rendered = render(<Input name="tester" type="password" />)
    })

    it("should have type with value is password", () => {
      expect(rendered.container.querySelector("input")).toHaveAttribute("type", "password")
    })

    it("should show eye icon after typing and have classname", () => {
      rendered.container.querySelector("input")?.focus()
      userEvent.keyboard("tester")
      expect(rendered.container.querySelector("span")).toHaveClass("absolute right-2")
    })

    it("should show eye icon after typing and have role button", () => {
      rendered.container.querySelector("input")?.focus()
      userEvent.keyboard("tester")
      expect(rendered.container.querySelector("span")).toHaveAttribute("role", "button")
    })

    it("should change the input type to text after click eye icon", () => {
      rendered.container.querySelector("input")?.focus()
      userEvent.keyboard("tester")
      rendered.container.querySelector("span")?.click()
      expect(rendered.container.querySelector("input")).toHaveAttribute("type", "text")
    })
  })
})
