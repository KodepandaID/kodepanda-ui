import * as React from "react"
import { axe } from "jest-axe"
import { render, RenderResult } from "@testing-library/react"
import { Image } from "../src"

describe("Standard Image component", () => {
  const url = "https://images.unsplash.com/photo-1637090405093-0bc0a607b441?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(<Image alt="Daniel Seßler - Free Iceland" src={url} />)
  })

  it("should have no violations in default state", async () => {
    expect(await axe(rendered.container)).toHaveNoViolations()
  })

  it("should have element img and classname w-52", async () => {
    expect(rendered.container.querySelector("img")).toHaveClass("w-52")
  })

  it("should have element img and attribute alt", async () => {
    expect(rendered.container.querySelector("img")).toHaveAttribute("alt", "Daniel Seßler - Free Iceland")
  })

  describe("Image with caption component", () => {
    beforeEach(() => {
      rendered = render(<Image
        caption="Daniel Seßler - Free Iceland"
        border borderColor="gray" borderColorContrast="200" px="2" py="2"
        alt="Daniel Seßler - Free Iceland" src={url} />)
    })

    it("should have no violations in default state", async () => {
      expect(await axe(rendered.container)).toHaveNoViolations()
    })

    it("should have figure element with classname", async () => {
      expect(rendered.container.querySelector("figure")).toHaveClass("flex flex-col w-max border border-solid border-gray-200 px-2 py-2")
    })

    it("should have img element with classname", async () => {
      expect(rendered.container.querySelector("img")).toHaveClass("w-52")
    })

    it("should have figcaption element with classname", async () => {
      expect(rendered.container.querySelector("figcaption")).toHaveClass("bg-black text-white text-xs text-center px-2 py-2 italic")
    })
  })

  describe("Image Circle component", () => {
    beforeEach(() => {
      rendered = render(<Image circle alt="Daniel Seßler - Free Iceland" src={url} />)
    })

    it("should have no violations in default state", async () => {
      expect(await axe(rendered.container)).toHaveNoViolations()
    })

    it("should have element img with classname w-52 h-52 rounded-full", async () => {
      expect(rendered.container.firstChild).toHaveClass("w-52 h-52 rounded-full")
    })
  })
})
