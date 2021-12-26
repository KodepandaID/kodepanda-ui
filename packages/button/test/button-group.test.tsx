import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { ButtonGroup } from "../src"
import userEvent from "@testing-library/user-event"

describe("Standard Button Group component", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(
      <ButtonGroup color="gray" colorContrast="200" colorHover="gray" colorHoverContrast="300">
        <ButtonGroup.Item icon="menu" />
        <ButtonGroup.Item icon="menu-alt-2" />
        <ButtonGroup.Item icon="menu-alt-3" />
      </ButtonGroup>
    )
  })

  it("should have div element with classname ", () => {
    expect(rendered.container.querySelector("div")).toHaveClass("relative inline-block overflow-hidden w-max flex rounded-md")
  })

  it("should have role `group`", () => {
    expect(rendered.container.querySelector("div")).toHaveAttribute("role", "group")
  })

  it("should have button element with classname ", () => {
    expect(rendered.container.querySelector("div>button")).toHaveClass("inline-block w-max bg-gray-200 hover:bg-gray-300 transition-colors duration-200 ease-in-out px-4 py-2 select-none focus:outline-none focus:bg-gray-300 text-white text-sm font-normal")
  })

  it("should have 3 length li element", () => {
    expect(rendered.container.querySelectorAll("div>button")).toHaveLength(3)
  })

  it("should focus after press tab one times", () => {
    userEvent.tab()
    expect(rendered.container.querySelectorAll("div>button")[0]).toHaveFocus()
  })

  it("should move focus after press tab again", () => {
    userEvent.tab()
    userEvent.tab()
    expect(rendered.container.querySelectorAll("div>button")[1]).toHaveFocus()
  })
})
