import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Loader } from "../src"

describe("Standard Loader component", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(<Loader visible />)
  })

  it("should have div element", () => {
    expect(rendered.container.querySelector("div")).toHaveClass("absolute top-0 left-0 z-50 flex w-full h-full justify-center align-middle bg-black opacity-75")
    expect(rendered.container.querySelectorAll("div")).toHaveLength(2)
    expect(rendered.container.querySelectorAll("div")[1]).toHaveClass("w-max flex flex-col justify-center items-center")
  })

  describe("Standard Loader coloring component", () => {
    beforeEach(() => {
      rendered = render(<Loader visible color="red" colorContrast="500" />)
    })

    it("should have div element", () => {
      expect(rendered.container.querySelector("div")).toHaveClass("absolute top-0 left-0 z-50 flex w-full h-full justify-center align-middle bg-red-500 opacity-75")
    })
  })

  describe("Standard Loader spinner size component", () => {
    beforeEach(() => {
      rendered = render(<Loader visible width="14" />)
    })

    it("should have div element", () => {
      expect(rendered.container.querySelector("svg")).toHaveClass("w-14 animate-spin")
    })
  })

  describe("Standard Loader with text component", () => {
    beforeEach(() => {
      rendered = render(<Loader visible text="Loading" />)
    })

    it("should have div element", () => {
      expect(rendered.container.querySelector("span")).toHaveClass("text-white text-sm leading-relaxed")
      expect(rendered.container.querySelector("span")).toHaveTextContent("Loading")
    })
  })
})
