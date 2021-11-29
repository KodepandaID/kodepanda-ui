import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Skeleton } from "../src"

describe("Standard Skeleton component", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(<Skeleton />)
  })

  it("should have span element with classname inline-block w-full h-2 bg-gray-300 rounded-md", () => {
    expect(rendered.container.querySelector("span")).toHaveClass("inline-block w-full h-2 bg-gray-300 rounded-md")
  })

  it("should have role attribute with value is status", () => {
    expect(rendered.container.querySelector("span")).toHaveAttribute("role", "status")
  })

  it("should have aria-label attribute with value is Loading", () => {
    expect(rendered.container.querySelector("span")).toHaveAttribute("aria-label", "Loading")
  })

  describe("Standard Skeleton coloring component", () => {
    beforeEach(() => {
      rendered = render(<Skeleton color="blue" colorContrast="400" />)
    })

    it("should have span element with classname inline-block w-full h-2 bg-blue-400 rounded-md", () => {
      expect(rendered.container.querySelector("span")).toHaveClass("inline-block w-full h-2 bg-blue-400 rounded-md")
    })
  })

  describe("Standard Skeleton width component", () => {
    beforeEach(() => {
      rendered = render(<Skeleton width="72" color="blue" colorContrast="400" />)
    })

    it("should have span element with classname inline-block w-full h-2 bg-blue-400 rounded-md", () => {
      expect(rendered.container.querySelector("span")).toHaveClass("inline-block w-72 h-2 bg-blue-400 rounded-md")
    })
  })

  describe("Standard Skeleton circle component", () => {
    beforeEach(() => {
      rendered = render(<Skeleton width="72" circle />)
    })

    it("should have span element with classname inline-block w-full h-72 bg-blue-400 rounded-md", () => {
      expect(rendered.container.querySelector("span")).toHaveClass("inline-block w-72 h-72 bg-gray-300 rounded-full")
    })
  })
})
