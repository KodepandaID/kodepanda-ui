import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Input } from "../src"
import userEvent from "@testing-library/user-event"

describe("Standard Input Date component", () => {
  let rendered: RenderResult
  let date: string

  beforeEach(() => {
    rendered = render(<Input.Date name="tester" onChange={(unix, d) => date = d} />)
  })

  it("should have div element with classname", () => {
    expect(rendered.container.querySelector("div")).toHaveClass("relative w-max")
  })

  it("should have div element with classname", () => {
    expect(rendered.container.querySelectorAll("div")[1]).toHaveClass("relative w-max inline-flex items-center")
  })

  it("should have input element with classname", () => {
    expect(rendered.container.querySelector("input")).toHaveClass("block w-max bg-white border border-solid border-gray-200 rounded-md px-3 py-1 pl-8 pr-4 placeholder-gray-300 text-gray-700 text-sm focus:border focus:border-blue-600 focus:outline-none")
  })

  it("should have value", () => {
    rendered.container.querySelector("input")?.focus()
    userEvent.keyboard("09031996")
    expect(date).toEqual("09/03/1996")
  })

  it("should have clear button", () => {
    rendered.container.querySelector("input")?.focus()
    userEvent.keyboard("09031996")
    expect(rendered.container.querySelectorAll("span")[1]).toHaveClass("absolute right-2")
    expect(rendered.container.querySelectorAll("span")[1]).toHaveAttribute("role", "button")
  })

  it("should clear the value after click clear button", () => {
    rendered.container.querySelector("input")?.focus()
    userEvent.keyboard("09031996")
    rendered.container.querySelectorAll("span")[1].click()
    expect(rendered.container.querySelector("input")).toHaveValue("")
  })

  describe("Standard Input Date time component", () => {
    beforeEach(() => {
      rendered = render(<Input.Date name="tester" time format="DD/MM/YYYY HH:mm" onChange={(unix, d) => date = d} />)
    })

    it("should have value", () => {
      rendered.container.querySelector("input")?.focus()
      userEvent.keyboard("090319961300")
      expect(date).toEqual("09/03/1996 13:00")
    })
  })
})
