import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Popover } from "../src"
import { Button } from "../../button/src"
import userEvent from "@testing-library/user-event"

describe("Standard Popover component", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(
      <Popover
      trigger={(
        <Button>Popover Button</Button>
      )}
      content={(
        <p className="text-sm text-black">Bottom popover</p>
      )} />
    )
  })

  it("should have div element wrapper with classname", () => {
    expect(rendered.container.querySelector("div")).toHaveClass("relative w-max flex justify-center items-center")
  })

  it("should have div with role button", () => {
    expect(rendered.container.querySelectorAll(`div`)[1]).toHaveAttribute("role", "button")
  })

  it("should have div with aria attribute", () => {
    expect(rendered.container.querySelectorAll(`div`)[1]).toHaveAttribute("aria-haspopup", "dialog")
    expect(rendered.container.querySelectorAll(`div`)[1]).toHaveAttribute("aria-expanded", "false")
  })

  it("should aria-expanded change to true after click the trigger button", () => {
    rendered.container.querySelectorAll(`div`)[1].click()
    expect(rendered.container.querySelectorAll(`div`)[1]).toHaveAttribute("aria-expanded", "true")
  })

  it("should have div element dialog with classname", () => {
    rendered.container.querySelectorAll(`div`)[1].click()
    expect(rendered.container.querySelectorAll("div")[2]).toHaveClass("absolute top-full z-40 block w-max mt-2")
  })

  it("should have div element dialog with text value `Bottom popover`", () => {
    rendered.container.querySelectorAll(`div`)[1].click()
    expect(rendered.container.querySelectorAll("div")[2]).toHaveTextContent("Bottom popover")
  })

  it("should have focus lock", () => {
    rendered.container.querySelectorAll(`div`)[1].click()
    expect(rendered.container.querySelectorAll("div")[3]).toHaveAttribute("data-focus-guard", "true")
    expect(rendered.container.querySelectorAll("div")[4]).toHaveAttribute("data-focus-lock-disabled", "false")
  })

  it("should have div element with role dialog", () => {
    rendered.container.querySelectorAll(`div`)[1].click()
    expect(rendered.container.querySelectorAll("div")[5]).toHaveAttribute("role", "dialog")
  })

  it("should have div element dialog with classname", () => {
    rendered.container.querySelectorAll(`div`)[1].click()
    expect(rendered.container.querySelectorAll("div")[5]).toHaveClass("overflow-hidden bg-white border border-solid border-gray-200 rounded-md px-4 py-2")
  })

  describe("Standard Popover custom position component", () => {
    describe("Standard Popover top position component", () => {
      beforeEach(() => {
        rendered = render(
          <Popover
          position="top"
          trigger={(
            <Button>Popover Button</Button>
          )}
          content={(
            <p className="text-sm text-black">Bottom popover</p>
          )} />
        )
      })

      it("should have div element dialog with classname", () => {
        rendered.container.querySelectorAll(`div`)[1].click()
        expect(rendered.container.querySelectorAll("div")[2]).toHaveClass("absolute bottom-full z-40 block w-max mb-2")
      })

      it("should have span element dialog arrow with classname", () => {
        rendered.container.querySelectorAll(`div`)[1].click()
        const dialog = rendered.container.querySelectorAll("div")[5]
        expect(dialog.querySelector("span")).toHaveClass("absolute top-full transform pointer-events-none")
      })
    })

    describe("Standard Popover left position component", () => {
      beforeEach(() => {
        rendered = render(
          <Popover
          position="left"
          trigger={(
            <Button>Popover Button</Button>
          )}
          content={(
            <p className="text-sm text-black">Bottom popover</p>
          )} />
        )
      })

      it("should have div element dialog with classname", () => {
        rendered.container.querySelectorAll(`div`)[1].click()
        expect(rendered.container.querySelectorAll("div")[2]).toHaveClass("absolute right-full z-40 block w-max mr-2")
      })

      it("should have span element dialog arrow with classname", () => {
        rendered.container.querySelectorAll(`div`)[1].click()
        const dialog = rendered.container.querySelectorAll("div")[5]
        expect(dialog.querySelector("span")).toHaveClass("absolute left-full ml-1.5 transform -rotate-90 pointer-events-none")
      })
    })

    describe("Standard Popover right position component", () => {
      beforeEach(() => {
        rendered = render(
          <Popover
          position="right"
          trigger={(
            <Button>Popover Button</Button>
          )}
          content={(
            <p className="text-sm text-black">Bottom popover</p>
          )} />
        )
      })

      it("should have div element dialog with classname", () => {
        rendered.container.querySelectorAll(`div`)[1].click()
        expect(rendered.container.querySelectorAll("div")[2]).toHaveClass("absolute left-full z-40 block w-max ml-2")
      })

      it("should have span element dialog arrow with classname", () => {
        rendered.container.querySelectorAll(`div`)[1].click()
        const dialog = rendered.container.querySelectorAll("div")[5]
        expect(dialog.querySelector("span")).toHaveClass("absolute right-full mr-1.5 transform rotate-90 pointer-events-none")
      })
    })
  })

  describe("Standard Popover disabled component", () => {
    beforeEach(() => {
      rendered = render(
        <Popover
        disabled
        trigger={(
          <Button>Popover Button</Button>
        )}
        content={(
          <p className="text-sm text-black">Bottom popover</p>
        )} />
      )
    })

    it("should have div element wrapper with classname", () => {
      expect(rendered.container.querySelector("div")).toHaveClass("relative w-max flex justify-center items-center opacity-50 pointer-events-none")
    })
  })

  describe("Standard Popover closable component", () => {
    beforeEach(() => {
      rendered = render(
        <Popover
        closable
        trigger={(
          <Button>Popover Button</Button>
        )}
        content={(
          <p className="text-sm text-black">Bottom popover</p>
        )} />
      )
    })

    it("should have div element closable wrapper", () => {
      rendered.container.querySelectorAll(`div`)[1].click()
      const dialog = rendered.container.querySelectorAll("div")[5]
      expect(dialog.querySelector("div")).toHaveClass("w-full mb-5")
    })

    it("should have span element close button with classname", () => {
      rendered.container.querySelectorAll(`div`)[1].click()
      const dialog = rendered.container.querySelectorAll("div")[5]
      expect(dialog.querySelectorAll("div>span")[1]).toHaveClass("absolute right-2 cursor-pointer")
    })

    describe("Standard Popover keyboard event component", () => {
      it("should closed the dialog after click close button", () => {
        rendered.container.querySelectorAll(`div`)[1].click()
        const dialog = rendered.container.querySelectorAll("div")[5]
        dialog.querySelectorAll("span")[2].click()
        expect(rendered.container.querySelectorAll("div")).toHaveLength(2)
      })

      it("should closed the dialog after press escape", () => {
        rendered.container.querySelectorAll(`div`)[1].click()
        userEvent.keyboard("{escape}")
        expect(rendered.container.querySelectorAll("div")).toHaveLength(2)
      })

      it("should closed the dialog after focusing to the close button and press enter", () => {
        rendered.container.querySelectorAll(`div`)[1].click()
        userEvent.tab()
        userEvent.keyboard("{enter}")
        expect(rendered.container.querySelectorAll("div")).toHaveLength(2)
      })
    })
  })
})
