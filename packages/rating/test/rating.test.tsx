import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Rating } from "../src"
import userEvent from "@testing-library/user-event"

describe("Standard Rating component", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(<Rating />)
  })

  it("should have div element with classname inline-flex align-baseline", () => {
    expect(rendered.container.querySelector("div")).toHaveClass("inline-flex align-baseline")
  })

  it("should have attribute role, tabIndex, aria-label, aria-valuemin, aria-valuemax, and aria-valuetext", () => {
    expect(rendered.container.querySelector("div")).toHaveAttribute("role", "slider")
    expect(rendered.container.querySelector("div")).toHaveAttribute("tabindex", "0")
    expect(rendered.container.querySelector("div")).toHaveAttribute("aria-label", "rating by star")
    expect(rendered.container.querySelector("div")).toHaveAttribute("aria-valuemin", "0")
    expect(rendered.container.querySelector("div")).toHaveAttribute("aria-valuemax", "5")
    expect(rendered.container.querySelector("div")).toHaveAttribute("aria-valuetext", "no stars")
  })

  it("should have 5 child", () => {
    expect(rendered.container.querySelectorAll("div>span")).toHaveLength(5)
  })

  describe("Standard Rating count component", () => {
    beforeEach(() => {
      rendered = render(<Rating count={6} />)
    })

    it("should have 5 child", () => {
      expect(rendered.container.querySelectorAll("div>span")).toHaveLength(6)
    })
  })

  describe("Standard Rating defaultValue component", () => {
    beforeEach(() => {
      rendered = render(<Rating defaultValue={3} />)
    })

    it("should have attribute aria-valuenow with a value equal to 3", () => {
      expect(rendered.container.querySelector("div")).toHaveAttribute("aria-valuenow", "3")
    })
  })

  describe("Standard Rating click component", () => {
    beforeEach(() => {
      rendered = render(<Rating />)
    })

    it("should have attribute aria-valuenow with a value equal to 1 after click", () => {
      rendered.container.querySelector("span")?.click()
      expect(rendered.container.querySelector("div")).toHaveAttribute("aria-valuenow", "1")
    })
  })

  describe("Standard Rating rate with keyboard component", () => {
    it("should have attribute aria-valuenow with a value equal to 2 after navigate with keyboard", () => {
      userEvent.tab()
      userEvent.keyboard("{arrowright}{arrowright}")
      expect(rendered.container.querySelector("div")).toHaveAttribute("aria-valuenow", "2")
    })

    it("should have attribute aria-valuenow with a value equal to 1 after navigate with keyboard arrowleft", () => {
      userEvent.tab()
      userEvent.keyboard("{arrowright}{arrowright}{arrowleft}")
      expect(rendered.container.querySelector("div")).toHaveAttribute("aria-valuenow", "1")
    })
  })
})
