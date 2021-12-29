import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Pagination } from "../src"
import userEvent from "@testing-library/user-event"

describe("Standard Pagination component", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(
      <Pagination total={100} />
    )
  })

  it("should have div element with classname ", () => {
    expect(rendered.container.querySelector("div")).toHaveClass("flex items-center space-x-3")
  })

  it("should have nav element with classname ", () => {
    expect(rendered.container.querySelector("nav")).toHaveClass("block overflow-hidden w-max border-t border-solid border-gray-200 border-r border-b")
  })

  it("should have ul element with classname ", () => {
    expect(rendered.container.querySelector("ul")).toHaveClass("flex select-none")
  })

  it("Should have 7 li element", () => {
    expect(rendered.container.querySelectorAll("li")).toHaveLength(7)
  })

  it("Should have aria-label previous on first li element", () => {
    expect(rendered.container.querySelectorAll("li")[0]).toHaveAttribute("aria-label", "Previous")
  })

  it("Should have aria-label next on last li element", () => {
    expect(rendered.container.querySelectorAll("li")[6]).toHaveAttribute("aria-label", "Next")
  })

  it("Should disabled previous button if current page is on first page", () => {
    expect(rendered.container.querySelectorAll("li")[0]).toHaveClass("flex items-center pointer-events-none opacity-50 bg-white hover:bg-gray-200 border-l border-solid border-gray-200 px-3 py-1.5 cursor-pointer focus:outline-none focus:bg-gray-200 text-gray-700 text-sm")
  })

  it("Should have first list element with classname", () => {
    expect(rendered.container.querySelectorAll("li")[1]).toHaveClass("bg-gray-200 border-l border-solid border-gray-200 px-3 py-1.5 cursor-pointer focus:outline-none focus:bg-gray-200 text-gray-700 text-sm")
  })

  it("Should have first list element with classname after change page with click list element", () => {
    rendered.container.querySelectorAll("li")[2].click()
    expect(rendered.container.querySelectorAll("li")[1]).toHaveClass("bg-white hover:bg-gray-200 border-l border-solid border-gray-200 px-3 py-1.5 cursor-pointer focus:outline-none focus:bg-gray-200 text-gray-700 text-sm")
  })

  it("Change the page after click prev li element", () => {
    rendered.container.querySelectorAll("li")[2].click()
    rendered.container.querySelectorAll("li")[0].click()
    expect(rendered.container.querySelectorAll("li")[1]).toHaveClass("bg-gray-200 border-l border-solid border-gray-200 px-3 py-1.5 cursor-pointer focus:outline-none focus:bg-gray-200 text-gray-700 text-sm")
  })

  it("Change the page after click next li element", () => {
    rendered.container.querySelectorAll("li")[6].click()
    expect(rendered.container.querySelectorAll("li")[2]).toHaveClass("bg-gray-200 border-l border-solid border-gray-200 px-3 py-1.5 cursor-pointer focus:outline-none focus:bg-gray-200 text-gray-700 text-sm")
  })

  it("Click last page and will be show the new pagination", () => {
    rendered.container.querySelectorAll("li")[5].click()
    expect(rendered.container.querySelectorAll("li")[4]).toHaveTextContent("7")
  })

  describe("Standard Pagination keyboard event component", () => {
    it("Change the page after press tab and focus on page 2 and press enter", () => {
      userEvent.tab()
      userEvent.tab()
      userEvent.tab()
      userEvent.keyboard("{enter}")
      expect(rendered.container.querySelectorAll("li")[2]).toHaveClass("bg-gray-200 border-l border-solid border-gray-200 px-3 py-1.5 cursor-pointer focus:outline-none focus:bg-gray-200 text-gray-700 text-sm")
    })
  })
})
