import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Input } from "../src"
import userEvent from "@testing-library/user-event"

describe("Standard Input Number component", () => {
  let rendered: RenderResult
  let number: number

  beforeEach(() => {
    rendered = render(<Input.Number name="tester" onChange={(e) => number = e} />)
  })

  it("should have input element with classname", () => {
    expect(rendered.container.querySelector("input")).toHaveClass("block w-max bg-white border border-solid border-gray-200 rounded-md px-3 py-1 placeholder-gray-300 text-gray-700 text-sm focus:border focus:border-blue-600 focus:outline-none")
  })

  it("should have return only number", () => {
    rendered.container.querySelector("input")?.focus()
    userEvent.keyboard("123abc")
    expect(number).toEqual(123)
  })

  describe("Standard Input Number separator component", () => {
    beforeEach(() => {
      rendered = render(<Input.Number name="tester" separator="dot" onChange={(e) => number = e} />)
    })

    it("should have return only number", () => {
      rendered.container.querySelector("input")?.focus()
      userEvent.keyboard("10000a")
      expect(number).toEqual(10000)
    })

    it("should have value with dot separator", () => {
      rendered.container.querySelector("input")?.focus()
      userEvent.keyboard("10000")
      expect(rendered.container.querySelector("input")).toHaveValue("10.000")
    })
  })

  describe("Standard Input Number currency component", () => {
    beforeEach(() => {
      rendered = render(<Input.Number name="tester" currency currencyText="Rp" onChange={(e) => number = e} />)
    })

    it("should have span element with classname", () => {
      expect(rendered.container.querySelector("span")).toHaveClass("absolute top-0.5 left-2")
    })

    it("should have span element with text content", () => {
      expect(rendered.container.querySelector("span")).toHaveTextContent("Rp")
    })
  })

  describe("Standard Input Number keyboard component", () => {
    beforeEach(() => {
      rendered = render(<Input.Number name="tester" keyboard onChange={(e) => number = e} />)
    })

    it("should increase value after press arrow up", () => {
      rendered.container.querySelector("input")?.focus()
      userEvent.keyboard("{arrowup}")
      expect(number).toEqual(1)
    })

    it("should decrease value after press arrow down", () => {
      rendered.container.querySelector("input")?.focus()
      userEvent.keyboard("{arrowup}{arrowdown}")
      expect(number).toEqual(0)
    })
  })
})
