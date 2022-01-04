import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Input } from "../src"
import { Text } from "../../typography/src"

describe("Standard Input Checkbox component", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(<Input.Checkbox name="tester" label={(<Text span fontSize="sm">Default checkbox</Text>)} />)
  })

  it("should have div wrapper element with classname", () => {
    expect(rendered.container.querySelector("div")).toHaveClass("w-full flex items-center")
  })

  it("should have input element with classname", () => {
    expect(rendered.container.querySelector("input")).toHaveClass("float-left form-checkbox cursor-pointer text-blue-600")
  })

  it("should have input element with type checkbox", () => {
    expect(rendered.container.querySelector("input")).toHaveAttribute("type", "checkbox")
  })

  it("should have label with attribut for", () => {
    expect(rendered.container.querySelector("label")).toHaveAttribute("for", "tester")
  })

  it("should have label with text content", () => {
    expect(rendered.container.querySelector("label")).toHaveTextContent("Default checkbox")
  })

  describe("Standard Input Checkbox coloring component", () => {
    beforeEach(() => {
      rendered = render(<Input.Checkbox name="tester" color="red" colorContrast="600"
      label={(<Text span fontSize="sm">Default checkbox</Text>)} />)
    })

    it("should have input element with classname", () => {
      expect(rendered.container.querySelector("input")).toHaveClass("float-left form-checkbox cursor-pointer text-red-600")
    })
  })

  describe("Standard Input Checkbox checked component", () => {
    beforeEach(() => {
      rendered = render(<Input.Checkbox name="tester" checked
      label={(<Text span fontSize="sm">Default checkbox</Text>)} />)
    })

    it("should checked", () => {
      expect(rendered.container.querySelector("input")).toBeChecked()
    })
  })
})
