import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Input } from "../src"
import userEvent from "@testing-library/user-event"

describe("Standard Input Pin component", () => {
  let rendered: RenderResult
  let pinCode: string

  beforeEach(() => {
    rendered = render(<Input.Pin name="tester" onComplete={(pin) => pinCode = pin} />)
  })

  it("should have attribute min", () => {
    expect(rendered.container.querySelector("input")).toHaveAttribute("min", "0")
  })

  it("should have attribute max", () => {
    expect(rendered.container.querySelector("input")).toHaveAttribute("max", "9")
  })

  it("should have div element with classname", () => {
    expect(rendered.container.querySelector("div")).toHaveClass("block w-max")
  })

  it("should have div element flexbox with classname", () => {
    expect(rendered.container.querySelectorAll("div")[1]).toHaveClass("flex items-center space-x-2")
  })

  it("should have 4 input elements", () => {
    expect(rendered.container.querySelectorAll("input")).toHaveLength(4)
  })

  it("should have input element with classname", () => {
    expect(rendered.container.querySelector("input")).toHaveClass("block w-10 bg-white border border-solid border-gray-200 rounded-md px-3 py-1 text-gray-700 text-sm text-center")
  })

  it("should return to onComplete after completed fill the input pin", () => {
    userEvent.tab()
    userEvent.keyboard("1234")
    expect(pinCode).toEqual("1234")
  })

  it("should move focus after press backspace", () => {
    userEvent.tab()
    userEvent.keyboard("1234")
    userEvent.keyboard("{backspace}{backspace}")
    expect(rendered.container.querySelectorAll("input")[2]).toHaveFocus()
  })
})
