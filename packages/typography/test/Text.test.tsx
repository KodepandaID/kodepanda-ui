import * as React from "react"
import { axe } from "jest-axe"
import { render, RenderResult } from "@testing-library/react"
import { Provider } from "@zenbu-ui/provider"
import { Text } from "../src"

describe("Standard text component", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(<Text>Tester Text</Text>)
  })

  it("should have no violations in default state", async () => {
    expect(await axe(rendered.container)).toHaveNoViolations()
  })

  it("should have className text-black text-base font-normal", () => {
    expect(rendered.container.firstChild).toHaveClass("text-black text-base font-normal")
  })

  describe("Coloring text component", () => {
    beforeEach(() => {
      rendered = render(<Text color="blue" colorContrast="700">Tester Text</Text>)
    })

    it("should have className text-blue-700 text-base font-normal", () => {
      expect(rendered.container.firstChild).toHaveClass("text-blue-700 text-base font-normal")
    })
  })

  describe("Text underline component", () => {
    beforeEach(() => {
      rendered = render(<Text underline>Tester Text</Text>)
    })

    it("should have className text-black text-base font-normal underline", () => {
      expect(rendered.container.firstChild).toHaveClass("text-black text-base font-normal underline")
    })
  })

  describe("Text delete component", () => {
    beforeEach(() => {
      rendered = render(<Text delete>Tester Text</Text>)
    })

    it("should have className text-black text-base font-normal line-through", () => {
      expect(rendered.container.firstChild).toHaveClass("text-black text-base font-normal line-through")
    })
  })

  describe("Text mark", () => {
    beforeEach(() => {
      rendered = render(<Text mark color="gray" colorContrast="200">Tester Text</Text>)
    })

    it("should render mark element", () => {
      expect(rendered.container.firstChild).toContainHTML(`<mark class="bg-gray-200 text-base font-normal">Tester Text</mark>`)
    })
  })

  describe("Text code", () => {
    beforeEach(() => {
      rendered = render(<Text code color="gray" colorContrast="200">Tester Text</Text>)
    })

    it("should render code element", () => {
      expect(rendered.container.querySelector("code")).toHaveClass("border border-gray-300 border-solid shadow-sm bg-gray-200 text-base font-normal px-1 py-0.5")
      expect(rendered.container.querySelector("code")).toHaveTextContent("Tester Text")
    })
  })

  describe("Activated dark theme from provider", () => {
    beforeEach(() => {
      rendered = render(
        <Provider dark>
          <Text darkColor="white">Tester Text</Text>
        </Provider>
      )
    })

    it("should have className text-black dark:text-white text-base font-normal", () => {
      expect(rendered.container.firstChild).toHaveClass("text-black dark:text-white text-base font-normal")
    })
  })
})
