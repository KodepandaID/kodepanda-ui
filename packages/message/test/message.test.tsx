import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Message } from "../src"
import userEvent from "@testing-library/user-event"

describe("Standard Message component", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(<Message>This is a message</Message>)
  })

  it("should have div element with class name", () => {
    expect(rendered.container.querySelector("div")).toHaveClass("overflow-hidden w-full bg-gray-200 border border-solid border-gray-300 rounded-md px-4 py-3")
  })

  it("should have span element with class name", () => {
    expect(rendered.container.querySelector("span")).toHaveClass("relative flex items-center")
  })

  it("should have text value content `This is a message`", () => {
    expect(rendered.container.querySelector("span")).toHaveTextContent("This is a message")
  })

  describe("Message component with error if you use fixed property but not set position property", () => {
    it("should have to throw error", () => {
      expect(() => render(<Message fixed>This is a message</Message>)).toThrow("You must fill the `position` property with bottom or top if you want to use a `fixed` property")
    })
  })

  describe("Standard Message coloring component", () => {
    beforeEach(() => {
      rendered = render(<Message color="blue" colorContrast="500">This is a message</Message>)
    })

    it("should have div element with class name", () => {
      expect(rendered.container.querySelector("div")).toHaveClass("overflow-hidden w-full bg-blue-500 border border-solid border-gray-300 rounded-md px-4 py-3")
    })
  })

  describe("Standard Message border component", () => {
    beforeEach(() => {
      rendered = render(<Message border={false}>This is a message</Message>)
    })

    it("should have div element with class name", () => {
      expect(rendered.container.querySelector("div")).toHaveClass("overflow-hidden w-full bg-gray-200 rounded-md px-4 py-3")
    })
  })

  describe("Standard Message width component", () => {
    beforeEach(() => {
      rendered = render(<Message width="screen" border={false}>This is a message</Message>)
    })

    it("should have div element with class name", () => {
      expect(rendered.container.querySelector("div")).toHaveClass("overflow-hidden w-screen bg-gray-200 rounded-md px-4 py-3")
    })
  })

  describe("Standard Message fixed with bottom position component", () => {
    beforeEach(() => {
      rendered = render(<Message width="screen" border={false} fixed position="bottom" rounded="none">This is a message</Message>)
    })

    it("should have div element with class name", () => {
      expect(rendered.container.querySelector("div")).toHaveClass("fixed bottom-0 z-20 overflow-hidden w-screen bg-gray-200 rounded-none px-4 py-3 inset-x-0")
    })
  })

  describe("Standard Message closable component", () => {
    beforeEach(() => {
      rendered = render(<Message closable>This is a message</Message>)
    })

    it("should have span element with class name", () => {
      expect(rendered.container.querySelector("span[role=button]")).toHaveClass("absolute right-2 cursor-pointer")
    })

    it("should have aria-label attribute with value `close`", () => {
      expect(rendered.container.querySelector("span[role=button]")).toHaveAttribute("aria-label", "close")
    })

    it("should not visible if click a close button", () => {
      rendered.container.querySelectorAll("span")[1]?.click()
      expect(rendered.container.querySelector("div")).toBeNull()
    })

    describe('when close by keyboard', () => {
      it('should be focus', () => {
        userEvent.tab()
        expect(rendered.container.querySelector("span[role=button]")).toHaveFocus()
      })

      it('should not visible', () => {
        userEvent.tab()
        userEvent.keyboard("{enter}")
        expect(rendered.container.querySelector("div")).toBeNull()
      })
    })
  })
})
