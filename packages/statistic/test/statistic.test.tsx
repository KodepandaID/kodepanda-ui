import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Statistic } from "../src"
import { Icon } from "../../icon/src"

describe("Standard Statistic component", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(<Statistic title="Active Users" value={1000} />)
  })

  it("should have element div with two child div", () => {
    expect(rendered.container.querySelector("div")).toHaveClass("leading-relaxed")
    expect(rendered.container.querySelectorAll("div")).toHaveLength(3)
    expect(rendered.container.querySelectorAll("div")[1]).toHaveClass("text-gray-400 text-sm font-light")
    expect(rendered.container.querySelectorAll("div")[2]).toHaveClass("text-black text-xl font-bold")
  })

  describe("Standard Statistic prefix component", () => {
    beforeEach(() => {
      rendered = render(<Statistic title="Wallet" value={1000} prefix="Rp" />)
    })

    it("should have prefix text Rp and value 1.000", () => {
      expect(rendered.container.querySelectorAll("div")[2]).toHaveTextContent("Rp1.000")
    })
  })

  describe("Standard Statistic suffix component", () => {
    beforeEach(() => {
      rendered = render(<Statistic title="Wallet" value={100} suffix="K" />)
    })

    it("should have suffix text K and value 100", () => {
      expect(rendered.container.querySelectorAll("div")[2]).toHaveTextContent("100K")
    })
  })

  describe("Standard Statistic coloring component", () => {
    beforeEach(() => {
      rendered = render(<Statistic
        title="Active Users" titleColor="blue" titleColorContrast="400"
        value={1000} valueColor="blue" valueColorContrast="700" />)
    })

    it("should have classname text-blue-400 for title and text-blue-700 for value text", () => {
      expect(rendered.container.querySelectorAll("div")[1]).toHaveClass("text-blue-400 text-sm font-light")
      expect(rendered.container.querySelectorAll("div")[2]).toHaveClass("text-blue-700 text-xl font-bold")
    })
  })

  describe("Standard Statistic icon component", () => {
    beforeEach(() => {
      rendered = render(<Statistic
        icon={(<Icon icon="users-solid" color="black" fontSize="lg" />)}
        title="Active Users" value={1000} />)
    })

    it("should have two div element", () => {
      const div = rendered.container.querySelectorAll("div")
      expect(div[1]).toHaveClass("flex items-center")
      expect(div[1].querySelectorAll("svg")).toHaveLength(1)
      expect(div[2]).toHaveClass("block")
      expect(div[3]).toHaveClass("text-gray-400 text-sm font-light")
      expect(div[4]).toHaveClass("text-black text-xl font-bold")
    })
  })
})
