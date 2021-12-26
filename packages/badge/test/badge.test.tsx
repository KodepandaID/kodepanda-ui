import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Badge } from "../src"

describe("Standard Badge component", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(
      <Badge count={5}>
        <div className="bg-gray-400 w-20 h-20 rounded-lg"></div>
      </Badge>
    )
  })

  it("should have span element with classname",() => {
    expect(rendered.container.querySelector("span")).toHaveClass("relative inline-block")
  })

  it("should have sup element with classname",() => {
    expect(rendered.container.querySelector("sup")).toHaveClass("absolute -top-1.5 -right-1 z-auto overflow-hidden w-6 h-6 flex justify-center items-center bg-red-500 rounded-full text-white text-sm font-semibold leading-tight")
  })

  it("should have sup element with attribute title and value is 5",() => {
    expect(rendered.container.querySelector("sup")).toHaveAttribute("title", "5")
  })
})
