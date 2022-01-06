import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Accordion } from "../src"
import userEvent from "@testing-library/user-event"

describe("Standard Accordion component", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(
      <Accordion>
        <Accordion.Item title="Is it accessible?">
          Yes. It adheres to the WAI-ARAI design pattern.
        </Accordion.Item>
        <Accordion.Item title="Is it unstyled?">
          Yes. It's unstyled by default, giving you freedom over the look and feel.
        </Accordion.Item>
        <Accordion.Item title="Can it be animated?">
          Yes! You can animate the Accordion with CSS or JavaScript.
        </Accordion.Item>
      </Accordion>
    )
  })

  it("should have div element with classname", () => {
    expect(rendered.container.querySelector("div")).toHaveClass("block overflow-hidden w-64 bg-white border border-solid border-gray-200 rounded-md")
  })

  it("should have div element with classname", () => {
    expect(rendered.container.querySelector("div>div")).toHaveClass("block overflow-hidden")
  })

  it("should have div element with classname", () => {
    expect(rendered.container.querySelector("div>div>div")).toHaveClass("block")
  })

  it("should have span element with classname", () => {
    expect(rendered.container.querySelector("div>div>div>span")).toHaveClass("flex")
  })

  it("should have div accordion button element with classname", () => {
    expect(rendered.container.querySelector("div>div>div>span>div")).toHaveClass("flex justify-between items-center border-b border-solid border-gray-200 px-4 py-3 cursor-pointer select-none focus:bg-gray-100 focus:outline-none")
  })

  it("should have div accordion button element with role button", () => {
    expect(rendered.container.querySelector("div>div>div>span>div")).toHaveAttribute("role", "button")
  })

  it("should have div accordion button element with aria-expanded false", () => {
    expect(rendered.container.querySelector("div>div>div>span>div")).toHaveAttribute("aria-expanded", "false")
  })

  it("should have 3 accordion item", () => {
    const id = rendered.container.querySelector("div")?.id
    expect(rendered.container.querySelectorAll(`div[id="${id}"]>div`)).toHaveLength(3)
  })

  it("should have div element accordion item content with classname", () => {
    expect(rendered.container.querySelector("div>div>div>div>div")).toHaveClass("block overflow-hidden bg-gray-100 border-b border-solid border-gray-200")
  })

  it("should have div element accordion item content with role region", () => {
    expect(rendered.container.querySelector("div>div>div>div>div")).toHaveAttribute("role", "region")
  })

  it("should expand after click accordion item index 0", () => {
    rendered.container.querySelectorAll("div")[3].click()
    expect(rendered.container.querySelector("div>div>div>span>div")).toHaveAttribute("aria-expanded", "true")
  })

  describe("Standard Accordion keyboard event component", () => {
    it("should focus on accordion item index 0", () => {
      userEvent.tab()
      expect(rendered.container.querySelector("div>div>div>span>div")).toHaveFocus()
    })

    it("should expand on accordion item index 0 after press enter", () => {
      userEvent.tab()
      userEvent.keyboard("{enter}")
      expect(rendered.container.querySelector("div>div>div>span>div")).toHaveAttribute("aria-expanded", "true")
    })

    it("should expand on accordion item index 0 after press space", () => {
      userEvent.tab()
      userEvent.keyboard("{space}")
      expect(rendered.container.querySelector("div>div>div>span>div")).toHaveAttribute("aria-expanded", "true")
    })

    it("should focus on accordion item index 1 after press arrowdown", () => {
      userEvent.tab()
      userEvent.keyboard("{arrowdown}")
      expect(rendered.container.querySelectorAll("div>div>div>span>div")[1]).toHaveFocus()
    })

    it("should focus on accordion item index 0 after press arrowdown and arrowup", () => {
      userEvent.tab()
      userEvent.keyboard("{arrowdown}{arrowup}")
      expect(rendered.container.querySelectorAll("div>div>div>span>div")[0]).toHaveFocus()
    })
  })

  describe("Standard Accordion default active component", () => {
    beforeEach(() => {
      rendered = render(
        <Accordion>
          <Accordion.Item active title="Is it accessible?">
            Yes. It adheres to the WAI-ARAI design pattern.
          </Accordion.Item>
          <Accordion.Item title="Is it unstyled?">
            Yes. It's unstyled by default, giving you freedom over the look and feel.
          </Accordion.Item>
          <Accordion.Item title="Can it be animated?">
            Yes! You can animate the Accordion with CSS or JavaScript.
          </Accordion.Item>
        </Accordion>
      )
    })

    it("should have div accordion button element with aria-expanded true", () => {
      expect(rendered.container.querySelector("div>div>div>span>div")).toHaveAttribute("aria-expanded", "true")
    })
  })

  describe("Standard Accordion simple component", () => {
    beforeEach(() => {
      rendered = render(
        <Accordion simple>
          <Accordion.Item title="Is it accessible?">
            Yes. It adheres to the WAI-ARAI design pattern.
          </Accordion.Item>
          <Accordion.Item title="Is it unstyled?">
            Yes. It's unstyled by default, giving you freedom over the look and feel.
          </Accordion.Item>
          <Accordion.Item title="Can it be animated?">
            Yes! You can animate the Accordion with CSS or JavaScript.
          </Accordion.Item>
        </Accordion>
      )
    })

    it("should have div element with classname", () => {
      expect(rendered.container.querySelector("div")).toHaveClass("block overflow-hidden w-64")
    })

    it("should have div accordion button element with classname", () => {
      expect(rendered.container.querySelector("div>div>div>span>div")).toHaveClass("flex justify-between items-center border-b border-solid border-gray-200 px-4 py-3 cursor-pointer select-none focus:bg-gray-100 focus:outline-none")
    })

    it("should have div element accordion item content with classname", () => {
      expect(rendered.container.querySelector("div>div>div>div>div")).toHaveClass("block overflow-hidden")
    })
  })
})
