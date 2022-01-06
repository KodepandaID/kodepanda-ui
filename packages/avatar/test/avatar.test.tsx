import * as React from "react"
import { axe } from "jest-axe"
import { render, RenderResult } from "@testing-library/react"
import { Avatar } from "../src"

describe("Standard Avatar component", () => {
  const url = "https://images.unsplash.com/photo-1637090405093-0bc0a607b441?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8"
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(<Avatar alt="Avatar profile user ABC" src={url} />)
  })

  it("should have no violations in default state", async () => {
    expect(await axe(rendered.container)).toHaveNoViolations()
  })

  it("should have element figure>img", async () => {
    expect(rendered.container.querySelector("figure")).toHaveClass("inline-flex overflow-hidden w-12 h-12 justify-center items-center align-middle bg-white rounded-full select-none")
    expect(rendered.container.querySelectorAll("img")[0]).toHaveClass("w-full h-full object-cover")
  })

  describe("Avatar component with text", () => {
    it("should have to throw error", () => {
      expect(() => render(<Avatar alt="Avatar for user ABC" />)).toThrow("`src` props cannot be empty, if you don't want to use `src` props you must fill the `text` props.")
    })
  })

  describe("Avatar component with text", () => {
    beforeEach(() => {
      rendered = render(<Avatar
        alt="Avatar for user ABC"
        bgColor="yellow" bgColorContrast="200" textColor="yellow" textColorContrast="500"
        text="YP" />)
    })

    it("should have no violations in default state", async () => {
      expect(await axe(rendered.container)).toHaveNoViolations()
    })

    it("should have div element with classname", async () => {
      expect(rendered.container.querySelector("div")).toHaveClass("inline-flex overflow-hidden w-12 h-12 justify-center items-center align-middle bg-yellow-200 rounded-full select-none")
    })

    it("should have element span>img with classname", async () => {
      expect(rendered.container.querySelector("div>span")).toHaveClass("text-yellow-500 text-sm font-normal")
    })

    it("should have element span>img with text content", async () => {
      expect(rendered.container.querySelector("div>span")).toHaveTextContent("YP")
    })
  })

  describe("Avatar group component", () => {
    beforeEach(() => {
      rendered = render(
        <Avatar.Group>
          <Avatar alt="Avatar for user 1" src={url} />
          <Avatar alt="Avatar for user 2" src={url} />
          <Avatar
          alt="Avatar for user 3"
          bgColor="yellow" bgColorContrast="200" textColor="yellow" textColorContrast="500"
          text="YP" />
        </Avatar.Group>
      )
    })

    it("should have no violations in default state", async () => {
      expect(await axe(rendered.container)).toHaveNoViolations()
    })

    it("should have div element with three span child", async () => {
      expect(rendered.container.querySelector("div")).toHaveClass("flex flex-row -space-x-4")
      expect(rendered.container.querySelectorAll("div>figure")).toHaveLength(2)
      expect(rendered.container.querySelectorAll("div>span")).toHaveLength(1)
    })
  })
})
