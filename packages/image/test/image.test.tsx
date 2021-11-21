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
    expect(rendered.container.firstChild).toContainHTML(
      `<img class="w-52" alt="Daniel Seßler - Free Iceland" src="${url}" />`
    )
  })

  describe("Image with caption component", () => {
    beforeEach(() => {
      rendered = render(<Image
        caption="Daniel Seßler - Free Iceland"
        border borderColor="gray" borderColorContrast={200} px={2} py={2}
        alt="Daniel Seßler - Free Iceland" src={url} />)
    })

    it("should have no violations in default state", async () => {
      expect(await axe(rendered.container)).toHaveNoViolations()
    })

    it("should have element figure with child img and figcaption", async () => {
      expect(rendered.container.firstChild).toContainHTML(
        [
          `<figure class="flex flex-col w-max border border-solid border-gray-200 px-2 py-2">`,
          `<img class="w-52" alt="Daniel Seßler - Free Iceland" src="${url}" />`,
          `<figcaption class="bg-black text-white text-xs text-center px-2 py-2 italic">Daniel Seßler - Free Iceland</figcaption>`,
          `</figure>`
        ].join("")
      )
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
