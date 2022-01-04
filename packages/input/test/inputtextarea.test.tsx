import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Input } from "../src"

describe("Standard Input Textarea component", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(<Input.Textarea name="tester" />)
  })

  it("should have textarea element with classname", () => {
    expect(rendered.container.querySelector("textarea")).toHaveClass("block w-max bg-white border border-solid border-gray-200 rounded-md px-3 py-1  text-gray-700 text-sm focus:border focus:border-blue-600 focus:outline-none")
  })

  describe("Standard Input Textarea coloring component", () => {
    beforeEach(() => {
      rendered = render(<Input.Textarea name="tester" color="gray" colorContrast="200" />)
    })

    it("should have textarea element with classname", () => {
      expect(rendered.container.querySelector("textarea")).toHaveClass("block w-max bg-gray-200 border border-solid border-gray-200 rounded-md px-3 py-1  text-gray-700 text-sm focus:border focus:border-blue-600 focus:outline-none")
    })
  })

  describe("Standard Input Textarea success component", () => {
    beforeEach(() => {
      rendered = render(<Input.Textarea name="tester" success successText="This is a success message" />)
    })

    it("should have textarea element with classname", () => {
      expect(rendered.container.querySelector("textarea")).toHaveClass("block w-max bg-white border border-solid border-green-500 rounded-md px-3 py-1  text-gray-700 text-sm focus:border focus:border-green-500 focus:outline-none")
    })

    it("should have p element with text content", () => {
      expect(rendered.container.querySelector("p")).toHaveTextContent("This is a success message")
    })

    it("should have p element with classname", () => {
      expect(rendered.container.querySelector("p")).toHaveClass("text-xs text-green-600")
    })
  })

  describe("Standard Input Textarea error component", () => {
    beforeEach(() => {
      rendered = render(<Input.Textarea name="tester" error errorText="This is a error message" />)
    })

    it("should have textarea element with classname", () => {
      expect(rendered.container.querySelector("textarea")).toHaveClass("block w-max bg-red-200 border border-solid border-red-500 rounded-md px-3 py-1  text-gray-700 text-sm focus:border focus:border-red-500 focus:outline-none")
    })

    it("should have p element with text content", () => {
      expect(rendered.container.querySelector("p")).toHaveTextContent("This is a error message")
    })

    it("should have p element with classname", () => {
      expect(rendered.container.querySelector("p")).toHaveClass("text-xs text-red-500")
    })
  })
})
