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

  it("should have element img and classname ", async () => {
    expect(rendered.container.firstChild).toContainHTML(
      `<img class="w-52" alt="Daniel Seßler - Free Iceland" src="${url}" />`
    )
  })
})
