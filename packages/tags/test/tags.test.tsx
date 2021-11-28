import * as React from "react"
import userEvent from "@testing-library/user-event"
import { render, RenderResult } from "@testing-library/react"
import { Tag } from "../src"
import { Icon } from "../../icon/src"

describe("Standard Tags component", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(
      <Tag>
        <Icon icon="mail-open" height="4" mr="1" />
        Mail
      </Tag>
    )
  })

  it("should have div element with classname inline-flex items-center bg-gray-200 border border-solid border-gray-300 rounded-md select-none text-gray-700 text-xs font-semibold leading-relaxed px-3 py-1", () => {
    expect(rendered.container.querySelector("div")).toHaveClass("inline-flex items-center bg-gray-200 border border-solid border-gray-300 rounded-md select-none text-gray-700 text-xs font-semibold leading-relaxed px-3 py-1")
  })

  describe("Standard Tags component", () => {
    beforeEach(() => {
      rendered = render(
        <Tag href="https://kodepanda.com">
          <Icon icon="mail-open" height="4" mr="1" />
          Mail
        </Tag>
      )
    })

    it("should have a element with classname inline-flex items-center bg-gray-200 border border-solid border-gray-300 rounded-md select-none text-gray-700 text-xs font-semibold leading-relaxed px-3 py-1", () => {
      expect(rendered.container.querySelector("a")).toHaveClass("inline-flex items-center bg-gray-200 border border-solid border-gray-300 rounded-md select-none text-gray-700 text-xs font-semibold leading-relaxed px-3 py-1")
    })

    it("should have href attribute with value https://kodepanda.com", () => {
      expect(rendered.container.querySelector("a")).toHaveAttribute("href", "https://kodepanda.com")
    })
  })

  describe("Standard Tags component", () => {
    beforeEach(() => {
      rendered = render(
        <Tag closable>
          <Icon icon="mail-open" height="4" mr="1" />
          Mail
        </Tag>
      )
    })

    it("should have span element with attribute aria-hidden and value is true", () => {
      expect(rendered.container.querySelector("span")).toHaveAttribute("aria-hidden", "true")
    })

    it("should not visible if click a close button", () => {
      rendered.container.querySelector("span")?.click()
      expect(rendered.container.querySelector("span")).toBeNull()
    })

    describe('when close by keyboard', () => {
      it('should be focus', () => {
        userEvent.tab()
        expect(rendered.container.querySelector("span")).toHaveFocus()
      })

      it('should not visible', () => {
        userEvent.tab()
        userEvent.keyboard("{enter}")
        expect(rendered.container.querySelector("span")).toBeNull()
      })
    })
  })
})
