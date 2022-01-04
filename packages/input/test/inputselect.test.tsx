import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Input } from "../src"

const data = [{
  key: "apple",
  value: "apple",
  text: "Apple"
}, {
  key: "orange",
  value: "orange",
  text: "Orange"
}, {
  key: "mango",
  value: "mango",
  text: "Mango"
}]

describe("Standard Input Select component", () => {
  let rendered: RenderResult
  let selected: string

  beforeEach(() => {
    rendered = render(<Input.Select name="tester" data={data} placeholder="Choose fruit" onChange={(e) => selected = e} />)
  })

  it("should have div element with classname", () => {
    expect(rendered.container.querySelector("div")).toHaveClass("relative w-max")
  })

  it("should have div element with classname", () => {
    expect(rendered.container.querySelectorAll("div")[1]).toHaveClass("flex items-center")
  })

  it("should have input element with attribut", () => {
    expect(rendered.container.querySelector("input")).toHaveAttribute("aria-haspopup", "listbox")
  })

  it("should have span element with classname", () => {
    expect(rendered.container.querySelector("span")).toHaveClass("absolute right-2  pl-1")
  })

  it("should open dropdown after click selectbox", () => {
    rendered.container.querySelector("input")?.click()
    expect(rendered.container.querySelectorAll("div")[2]).toHaveClass("absolute top-full z-40 block w-full bg-white border border-solid border-gray-200 rounded-md mt-1")
  })

  it("should have 3 options", () => {
    rendered.container.querySelector("input")?.click()
    const listbox = rendered.container.querySelectorAll("div")[2].querySelector("div")
    expect(listbox?.querySelectorAll("div")).toHaveLength(3)
  })

  it("should have dropdown item with classname", () => {
    rendered.container.querySelector("input")?.click()
    const listbox = rendered.container.querySelectorAll("div")[2].querySelector("div")
    expect(listbox?.querySelectorAll("div")[0]).toHaveClass("overflow-hidden flex justify-between items-center hover:bg-blue-500 px-3 py-0.5 mb-1 cursor-pointer select-none text-gray-600 hover:text-white text-sm focus:bg-blue-500 focus:text-white focus:outline-none")
  })

  it("should have value", () => {
    rendered.container.querySelector("input")?.click()
    const listbox = rendered.container.querySelectorAll("div")[2].querySelector("div")
    listbox?.querySelectorAll("div")[0].click()
    expect(selected).toEqual("apple")
  })
})
