import * as React from "react"
import { axe } from "jest-axe"
import { render, RenderResult } from "@testing-library/react"
import { Provider } from "@zenbu-ui/provider"
import { Link } from "../src"

describe("Standard link component", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(<Link href="/">Tester Link</Link>)
  })

  it("should have no violations in default state", async () => {
    expect(await axe(rendered.container)).toHaveNoViolations()
  })

  it("should have className text-blue-500 hover:text-blue-700 transition-colors duration-500 cursor-pointer", () => {
    expect(rendered.container.firstChild).toHaveClass("text-blue-500 hover:text-blue-700 transition-colors duration-500 cursor-pointer")
  })

  describe("Coloring link component", () => {
    beforeEach(() => {
      rendered = render(<Link href="/" color="green" colorContrast="500" colorHover="green" colorHoverContrast="700">Tester Link</Link>)
    })

    it("should have className text-green-500 hover:text-green-700 transition-colors duration-500 cursor-pointer", () => {
      expect(rendered.container.firstChild).toHaveClass("text-green-500 hover:text-green-700 transition-colors duration-500 cursor-pointer")
    })
  })

  describe("Activated dark theme from provider", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark>
          <Link href="/" darkColor="green" darkColorContrast="500" darkColorHover="green" darkColorHoverContrast="700">Tester Link</Link>
        </Provider>
      )
    })

    it("should have className text-blue-500 dark:text-green-500 hover:text-blue-700 dark:hover:text-green-700 transition-colors duration-500 cursor-pointer", () => {
      expect(rendered.container.firstChild).toHaveClass("text-blue-500 dark:text-green-500 hover:text-blue-700 dark:hover:text-green-700 transition-colors duration-500 cursor-pointer")
    })
  })
})
