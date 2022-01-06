import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Input } from "../src"
import userEvent from "@testing-library/user-event"

describe("Standard Input Credit Card component", () => {
  let rendered: RenderResult
  let cardNumber: string
  let cardValid: boolean
  let cardType: string

  beforeEach(() => {
    rendered = render(<Input.CreditCard name="tester" onChange={(num, valid, type) => {
      cardNumber = num
      cardValid = valid
      cardType = type
    }} />)
  })

  it("should have div element with classname", () => {
    expect(rendered.container.querySelector("div")).toHaveClass("relative block w-56")
  })

  it("should have div element with classname", () => {
    expect(rendered.container.querySelectorAll("div")[1]).toHaveClass("relative inline-flex items-center")
  })

  it("should have input element with classname", () => {
    expect(rendered.container.querySelector("input")).toHaveClass("block w-56 bg-white border border-solid border-gray-200 rounded-md px-3 py-1 pr-8 placeholder-gray-300 text-gray-700 text-sm focus:border focus:border-blue-600 focus:outline-none")
  })

  it("should have span element with classname", () => {
    expect(rendered.container.querySelector("span")).toHaveClass("absolute right-2")
  })

  it("should invalid credit card number", () => {
    rendered.container.querySelector("input")?.focus()
    userEvent.keyboard("5264220011111111")
    expect(cardValid).toEqual(false)
  })

  it("should valid credit card number", () => {
    rendered.container.querySelector("input")?.focus()
    userEvent.keyboard("2222420000001113")
    expect(cardNumber).toEqual("2222420000001113")
    expect(cardValid).toEqual(true)
    expect(cardType).toEqual("mastercard")
  })

  it("should be visa card type", () => {
    rendered.container.querySelector("input")?.focus()
    userEvent.keyboard("4263982640269299")
    expect(cardType).toEqual("visa")
  })

  it("should be american-express card type", () => {
    rendered.container.querySelector("input")?.focus()
    userEvent.keyboard("374245455400126")
    expect(cardType).toEqual("american-express")
  })

  it("should be jcb card type", () => {
    rendered.container.querySelector("input")?.focus()
    userEvent.keyboard("3566000020000410")
    expect(cardType).toEqual("jcb")
  })
})
