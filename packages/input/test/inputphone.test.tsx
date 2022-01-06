import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Input } from "../src"
import userEvent from "@testing-library/user-event"

describe("Standard Input Phone component", () => {
  let rendered: RenderResult
  let phone: string | undefined

  beforeEach(() => {
    rendered = render(<Input.Phone name="tester" placeholder="Phone number" onChange={(e) => phone = e} />)
  })

  it("should have div element with classname", () => {
    expect(rendered.container.querySelector("div")).toHaveClass("relative")
  })

  it("should have div element with classname", () => {
    expect(rendered.container.querySelectorAll("div")[1]).toHaveClass("relative w-max")
  })

  it("should have div element with classname", () => {
    expect(rendered.container.querySelectorAll("div")[2]).toHaveClass("relative inline-flex items-center")
  })

  it("should have input element with classname", () => {
    expect(rendered.container.querySelector("input")).toHaveClass("block w-max bg-white border border-solid border-gray-200 rounded-md px-3 py-1 pl-8 pr-4 placeholder-gray-300 text-gray-700 text-sm focus:border focus:border-blue-600 focus:outline-none")
  })

  it("should have span element with classname", () => {
    expect(rendered.container.querySelector("span")).toHaveClass("absolute left-2")
  })

  it("should have img element flag with title and aria label", () => {
    expect(rendered.container.querySelector("img")).toHaveAttribute("title", "Indonesia")
    expect(rendered.container.querySelector("img")).toHaveAttribute("aria-label", "Indonesia")
  })

  it("should have value", () => {
    rendered.container.querySelector("input")?.focus()
    userEvent.keyboard("085297700892")
    expect(phone).toEqual("+6285297700892")
  })

  it("should have clear button", () => {
    rendered.container.querySelector("input")?.focus()
    userEvent.keyboard("085297700892")
    expect(rendered.container.querySelectorAll("span")[1]).toHaveClass("absolute right-2")
    expect(rendered.container.querySelectorAll("span")[1]).toHaveAttribute("role", "button")
  })

  it("should clear value after click clear button", () => {
    rendered.container.querySelector("input")?.focus()
    userEvent.keyboard("085297700892")
    rendered.container.querySelectorAll("span")[1].click()
    expect(rendered.container.querySelector("input")).toHaveValue("")
  })

  it("should open dropdown to change country code", () => {
    rendered.container.querySelector("span")?.click()
    expect(rendered.container.querySelectorAll("div")[3]).toHaveClass("absolute top-full z-40 block overflow-y-scroll w-full h-64 bg-white border border-solid border-gray-200 rounded-md mt-1")
  })

  it("should have dropdown with role listbox", () => {
    rendered.container.querySelector("span")?.click()
    expect(rendered.container.querySelectorAll("div")[4]).toHaveAttribute("role", "listbox")
  })

  it("should have search country code", () => {
    rendered.container.querySelector("span")?.click()
    expect(rendered.container.querySelectorAll("input")[1]).toHaveClass("w-full px-2 py-1 bg-transparent border border-gray-200 text-gray-600 placeholder-gray-200 text-sm")
  })

  it("should change the country to Afghanistan", async () => {
    rendered.container.querySelector("span")?.click()
    rendered.container.querySelectorAll("div")[6].click()
    await new Promise((r) => setTimeout(r, 2000))
    expect(rendered.container.querySelector("img")).toHaveAttribute("title", "Afghanistan")
  })
})
