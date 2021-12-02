import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Progress } from "../src"

describe("Standard Progress component", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(<Progress />)
  })

  it("should have div element with classname", () => {
    expect(rendered.container.querySelector("div")).toHaveClass("flex overflow-hidden w-full h-3 bg-gray-200 rounded-md")
    expect(rendered.container.querySelector("div[role=progressbar]")).toHaveClass("overflow-hidden flex flex-col justify-center bg-blue-600 text-center")
  })

  it("should have attribute aria-valuenow with value is 0", () => {
    expect(rendered.container.querySelector("div[role=progressbar]")).toHaveAttribute("aria-valuenow", "0")
  })

  describe("Standard Progress percentage component", () => {
    beforeEach(() => {
      rendered = render(<Progress percentage={10} />)
    })

    it("should have style width 10%", () => {
      expect(rendered.container.querySelector("div[role=progressbar]")).toHaveStyle("width: 10%")
    })

    it("should have attribute aria-valuenow with value is 10", () => {
      expect(rendered.container.querySelector("div[role=progressbar]")).toHaveAttribute("aria-valuenow", "10")
    })
  })

  describe("Standard Progress percentage component", () => {
    beforeEach(() => {
      rendered = render(<Progress color="red" colorContrast="500" />)
    })

    it("should have div element with classname", () => {
      expect(rendered.container.querySelector("div[role=progressbar]")).toHaveClass("overflow-hidden flex flex-col justify-center bg-red-500 text-center")
    })
  })

  describe("Standard Progress show percentage component", () => {
    beforeEach(() => {
      rendered = render(<Progress percentage={10} showPercentage />)
    })

    it("should have div element with classname", () => {
      expect(rendered.container.querySelector("div[role=progressbar]")).toHaveTextContent("10%")
    })
  })

  describe("Standard Progress different text after complete component", () => {
    beforeEach(() => {
      rendered = render(<Progress percentage={100} showPercentage completeText="Completed" />)
    })

    it("should have div element with classname", () => {
      expect(rendered.container.querySelector("div[role=progressbar]")).toHaveTextContent("Completed")
    })
  })
})
