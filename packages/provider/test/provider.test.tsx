import * as React from "react"
import { axe } from "jest-axe"
import { render, RenderResult } from "@testing-library/react"
import { Provider } from "../src/context"

describe("Use provider context", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(<Provider dark>
      <p>Test Text</p>
    </Provider>)
  })

  it("should not error when rendered", async () => {
    expect(await axe(rendered.container)).toHaveNoViolations()
  })
})
