import * as React from "react"
import { axe } from "jest-axe"
import { render, RenderResult } from "@testing-library/react"
import { Icon } from "../src"

describe("Standard Icon component", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(<Icon icon="academic-cap" />)
  })

  it("should have no violations in default state", async () => {
    expect(await axe(rendered.container)).toHaveNoViolations()
  })
})
