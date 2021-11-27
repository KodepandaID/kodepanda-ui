import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Breadcrumb } from "../src"

describe("Standard Avatar component", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Library</Breadcrumb.Item>
        <Breadcrumb.Item href="#" active>Data</Breadcrumb.Item>
      </Breadcrumb>
    )
  })

  it("should have accessible attribute aria-label", async () => {
    expect(rendered.container.querySelector("nav")).toHaveAttribute("aria-label", "Breadcrumb")
  })

  it("should have 3 li element", async () => {
    expect(rendered.container.querySelectorAll("li")).toHaveLength(3)
  })

  it("should have ol element with classname flex flex-wrap leading-relaxed list-none", async () => {
    expect(rendered.container.querySelector("ol")).toHaveClass("flex flex-wrap leading-relaxed list-none")
  })

  it("should have li non active element with classname flex flex-row items-center text-blue-500 hover:text-blue-600 text-sm", async () => {
    expect(rendered.container.querySelectorAll("ol>li")[0]).toHaveClass("flex flex-row items-center text-blue-500 hover:text-blue-600 text-sm")
  })

  it("should have span separator inside li non active element", async () => {
    expect(rendered.container.querySelectorAll("ol>li")[0].querySelectorAll("span")).toHaveLength(1)
    expect(rendered.container.querySelectorAll("ol>li")[1].querySelectorAll("span")).toHaveLength(1)
    expect(rendered.container.querySelectorAll("ol>li")[2].querySelectorAll("span")).toHaveLength(0)
  })

  it("should have attribute aria-hidden with value is true for separator", async () => {
    expect(rendered.container.querySelectorAll("ol>li")[0].querySelector("span")).toHaveAttribute("aria-hidden", "true")
    expect(rendered.container.querySelectorAll("ol>li")[1].querySelector("span")).toHaveAttribute("aria-hidden", "true")
  })

  it("should have li active element with classname flex flex-row items-center text-gray-500 text-sm", async () => {
    expect(rendered.container.querySelectorAll("ol>li")[2]).toHaveClass("flex flex-row items-center text-gray-500 text-sm")
  })
})
