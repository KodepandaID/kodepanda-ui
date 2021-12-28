import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Tooltip } from "../src"
import { Button } from "../../button/src"
import userEvent from "@testing-library/user-event"

describe("Standard Tooltip component", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(
      <Tooltip
      trigger={(
        <Button>Tooltip Button</Button>
      )}
      content={(
        <p className="text-sm text-black">Bottom tooltip</p>
      )} />
    )
  })

  it("should have div element wrapper with classname", () => {
    expect(rendered.container.querySelector("div")).toHaveClass("relative w-max flex justify-center items-center")
  })

  it("should have div element with role tooltip", () => {
    rendered.container.querySelectorAll(`div`)[1].click()
    expect(rendered.container.querySelectorAll("div")[2].querySelector("div")).toHaveAttribute("role", "tooltip")
  })

  it("should have div element tooltip with classname", () => {
    rendered.container.querySelectorAll(`div`)[1].click()
    expect(rendered.container.querySelectorAll("div")[2]).toHaveClass("absolute top-full z-40 hidden w-max pt-2")
  })

  it("should have div element tooltip with text value `Bottom tooltip`", () => {
    rendered.container.querySelectorAll(`div`)[1].click()
    expect(rendered.container.querySelectorAll("div")[2]).toHaveTextContent("Bottom tooltip")
  })

  describe("Standard Tooltip custom position component", () => {
    describe("Standard Tooltip top position component", () => {
      beforeEach(() => {
        rendered = render(
          <Tooltip
          position="top"
          trigger={(
            <Button>Tooltip Button</Button>
          )}
          content={(
            <p className="text-sm text-black">tooltip</p>
          )} />
        )
      })

      it("should have div element tooltip with classname", () => {
        rendered.container.querySelectorAll(`div`)[0].click()
        expect(rendered.container.querySelectorAll("div")[2]).toHaveClass("absolute bottom-full z-40 hidden w-max pb-2")
      })

      it("should have span element dialog arrow with classname", () => {
        rendered.container.querySelectorAll(`div`)[0].click()
        const tooltip = rendered.container.querySelectorAll("div")[2]
        expect(tooltip.querySelector("span")).toHaveClass("absolute -bottom-4 transform pointer-events-none")
      })
    })

    describe("Standard Tooltip left position component", () => {
      beforeEach(() => {
        rendered = render(
          <Tooltip
          position="left"
          trigger={(
            <Button>Tooltip Button</Button>
          )}
          content={(
            <p className="text-sm text-black">tooltip</p>
          )} />
        )
      })

      it("should have div element tooltip with classname", () => {
        rendered.container.querySelectorAll(`div`)[0].click()
        expect(rendered.container.querySelectorAll("div")[2]).toHaveClass("absolute right-full z-40 hidden w-max pr-2")
      })

      it("should have span element dialog arrow with classname", () => {
        rendered.container.querySelectorAll(`div`)[0].click()
        const tooltip = rendered.container.querySelectorAll("div")[2]
        expect(tooltip.querySelector("span")).toHaveClass("absolute -right-2 ml-1.5 transform -rotate-90 pointer-events-none")
      })
    })

    describe("Standard Tooltip right position component", () => {
      beforeEach(() => {
        rendered = render(
          <Tooltip
          position="right"
          trigger={(
            <Button>Tooltip Button</Button>
          )}
          content={(
            <p className="text-sm text-black">tooltip</p>
          )} />
        )
      })

      it("should have div element tooltip with classname", () => {
        rendered.container.querySelectorAll(`div`)[0].click()
        expect(rendered.container.querySelectorAll("div")[2]).toHaveClass("absolute left-full z-40 hidden w-max pl-2")
      })

      it("should have span element dialog arrow with classname", () => {
        rendered.container.querySelectorAll(`div`)[0].click()
        const tooltip = rendered.container.querySelectorAll("div")[2]
        expect(tooltip.querySelector("span")).toHaveClass("absolute -left-2 mr-1.5 transform rotate-90 pointer-events-none")
      })
    })
  })

  describe("Standard Tooltip disabled component", () => {
    beforeEach(() => {
      rendered = render(
        <Tooltip
        disabled
        trigger={(
          <Button>Tooltip Button</Button>
        )}
        content={(
          <p className="text-sm text-black">tooltip</p>
        )} />
      )
    })

    it("should have div element wrapper with classname", () => {
      expect(rendered.container.querySelector("div")).toHaveClass("relative w-max flex justify-center items-center opacity-50 pointer-events-none")
    })
  })

  describe("Standard Tooltip keyboard event component", () => {
    beforeEach(() => {
      rendered = render(
        <Tooltip
        trigger={(
          <Button>Tooltip Button</Button>
        )}
        content={(
          <p className="text-sm text-black">tooltip</p>
        )} />
      )
    })

    it("should open after focusing trigger with tab", () => {
      userEvent.tab()
      userEvent.tab()
      expect(rendered.container.querySelectorAll("div")[2]).toHaveClass("absolute top-full z-40 block w-max pt-2")
    })

    it("should closed after press esc", () => {
      rendered.container.querySelectorAll(`div`)[1].click()
      userEvent.keyboard("{escape}")
      expect(rendered.container.querySelectorAll("div")[2]).toHaveClass("absolute top-full z-40 hidden w-max pt-2")
    })
  })
})
