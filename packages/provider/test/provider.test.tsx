import * as React from "react"
import { axe } from "jest-axe"
import { render, RenderResult } from "@testing-library/react"
import { ThemeCtx } from "../src"

describe("Use provider context", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(<ThemeCtx.Provider value={{
      dark: false
    }} />)
  })

  it("should not error when rendered", async () => {
    expect(await axe(rendered.container)).toHaveNoViolations()
  })
})
