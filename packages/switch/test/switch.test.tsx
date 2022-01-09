import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Switch } from "../src"
import userEvent from "@testing-library/user-event"

describe("Standard Switch component", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(
      <Switch />
    )
  })

  it("should have form element", () => {
    expect(rendered.container.querySelectorAll("form")).toHaveLength(1)
  })

  it("should have input element", () => {
    expect(rendered.container.querySelectorAll("input")).toHaveLength(1)
  })

  it("should have div element wrapper with classname", () => {
    expect(rendered.container.querySelector("div")).toHaveClass("relative w-max flex items-center bg-gray-200 rounded-full py-1 px-1 cursor-pointer")
  })

  it("should have attribute role switch", () => {
    expect(rendered.container.querySelector("div")).toHaveAttribute("role", "switch")
  })

  it("should have attribute aria-checked false", () => {
    expect(rendered.container.querySelector("div")).toHaveAttribute("aria-checked", "false")
  })

  it("should have div element dot with classname", () => {
    expect(rendered.container.querySelectorAll("div")[1]).toHaveClass("w-6 h-6 bg-blue-500 rounded-full transform translate-x-0 duration-300 ease-in-out")
  })

  it("should be true after click the switch toggle", () => {
    rendered.container.querySelector("div")?.click()
    expect(rendered.container.querySelectorAll("div")[1]).toHaveClass("w-6 h-6 bg-blue-500 rounded-full transform translate-x-full duration-300 ease-in-out ml-2")
  })

  it("should attribute aria-expanded to be true", () => {
    rendered.container.querySelector("div")?.click()
    expect(rendered.container.querySelector("div")).toHaveAttribute("aria-checked", "true")
  })

  describe("Standard Switch keyboard event component", () => {
    it("should attribute aria-checked to be true after focusing and press enter", () => {
      userEvent.tab()
      userEvent.keyboard("{enter}")
      expect(rendered.container.querySelector("div")).toHaveAttribute("aria-checked", "true")
    })
  })
})
