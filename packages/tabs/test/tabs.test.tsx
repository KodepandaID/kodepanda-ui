import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Tabs } from "../src"
import userEvent from "@testing-library/user-event"

describe("Standard Tabs component", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(
      <Tabs>
        <Tabs.Item title="tab 1">Tab 1</Tabs.Item>
        <Tabs.Item title="tab 2">Tab 2</Tabs.Item>
      </Tabs>
    )
  })

  it("should have div element with classname", () => {
    expect(rendered.container.querySelector("div")).toHaveClass("block")
  })

  it("should have div element with classname", () => {
    expect(rendered.container.querySelector("div>div>div")).toHaveClass("w-80 flex flex-col bg-white rounded-md")
  })

  it("should have div element with classname", () => {
    expect(rendered.container.querySelector("div>div>div>div")).toHaveClass("flex border-b border-solid border-gray-200 shrink-0 focus:outline-none")
  })

  it("should have div element with role tablist", () => {
    expect(rendered.container.querySelector("div>div>div>div")).toHaveAttribute("role", "tablist")
  })

  it("should have two button tab", () => {
    expect(rendered.container.querySelectorAll("div>div>div>button")).toHaveLength(2)
  })

  it("should have button tab with role tab", () => {
    expect(rendered.container.querySelector("div>div>div>button")).toHaveAttribute("role", "tab")
  })

  it("should have button tab with attribute aria-selected is true", () => {
    expect(rendered.container.querySelector("div>div>div>button")).toHaveAttribute("aria-selected", "true")
  })

  describe("Standard Tabs keyboard event component", () => {
    it("should move to tab 2 after press arrow right", () => {
      userEvent.tab()
      userEvent.tab()
      userEvent.tab()
      userEvent.keyboard("{arrowright}")
      expect(rendered.container.querySelectorAll("div>div>div>button")[1]).toHaveFocus()
    })

    it("should aria-selected to be true on tab 2", () => {
      userEvent.tab()
      userEvent.tab()
      userEvent.tab()
      userEvent.keyboard("{arrowright}")
      expect(rendered.container.querySelectorAll("div>div>div>button")[1]).toHaveAttribute("aria-selected", "true")
    })
  })
})
