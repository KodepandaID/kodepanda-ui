import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Separator } from "../src"

describe("Standard Separator component", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(<Separator />)
  })

  it("should have hr element with classname border-gray-200 border-solid leading-relaxed", () => {
    expect(rendered.container.querySelector("hr")).toHaveClass("border-gray-200 border-solid leading-relaxed")
  })

  describe("Separator coloring component", () => {
    beforeEach(() => {
      rendered = render(<Separator borderColor="blue" borderColorContrast="700" />)
    })

    it("should have hr element with classname border-blue-700 border-solid leading-relaxed", () => {
      expect(rendered.container.querySelector("hr")).toHaveClass("border-blue-700 border-solid leading-relaxed")
    })
  })

  describe("Separator coloring component", () => {
    beforeEach(() => {
      rendered = render(<Separator borderWidth="2" borderStyle="dashed" />)
    })

    it("should have hr element with classname border-2 border-gray-200 border-dashed leading-relaxed", () => {
      expect(rendered.container.querySelector("hr")).toHaveClass("border-2 border-gray-200 border-dashed leading-relaxed")
    })
  })

  describe("Separator with text component", () => {
    beforeEach(() => {
      rendered = render(<Separator text={(
        <h2 className="font-bold text-lg">Title was Here</h2>
      )} />)
    })

    it("should have div element with classname separator flex items-center border-gray-200 border-solid leading-relaxed", () => {
      expect(rendered.container.querySelector("div")).toHaveClass("separator flex items-center border-gray-200 border-solid leading-relaxed")
    })
  })
})
