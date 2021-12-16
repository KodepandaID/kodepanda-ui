import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Box } from "../src"

describe("Standard Box component", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(<Box />)
  })

  it("should have div element with classname ", () => {
    expect(rendered.container.querySelector("div")).toHaveClass("relative block w-full bg-white border border-solid border-gray-200 rounded-md px-5 py-5")
  })

  describe("Standard Box coloring component", () => {
    beforeEach(() => {
      rendered = render(<Box color="gray" colorContrast="300" />)
    })

    it("should have div element with classname ", () => {
      expect(rendered.container.querySelector("div")).toHaveClass("relative block w-full bg-gray-300 border border-solid border-gray-200 rounded-md px-5 py-5")
    })
  })

  describe("Standard Box without border component", () => {
    beforeEach(() => {
      rendered = render(<Box />)
    })

    it("should have div element with classname ", () => {
      expect(rendered.container.querySelector("div")).toHaveClass("relative block w-full bg-white rounded-md px-5 py-5")
    })
  })

  describe("Standard Box gradient component", () => {
    beforeEach(() => {
      rendered = render(<Box border={false}
        bgGradientPosition="right" bgGradientFromColor="green" bgGradientFromColorContrast="400" bgGradientEndColor="blue" bgGradientEndColorContrast="500"/>)
    })

    it("should have div element with classname ", () => {
      expect(rendered.container.querySelector("div")).toHaveClass("relative block w-full bg-white bg-gradient-to-r from-green-400 to-blue-500 rounded-md px-5 py-5")
    })
  })

  describe("Standard Box shadow component", () => {
    beforeEach(() => {
      rendered = render(<Box border={false} shadow="lg" />)
    })

    it("should have div element with classname ", () => {
      expect(rendered.container.querySelector("div")).toHaveClass("relative block w-full bg-white rounded-md shadow-lg px-5 py-5")
    })
  })

  describe("Standard Box width component", () => {
    beforeEach(() => {
      rendered = render(<Box width="24" height="24" />)
    })

    it("should have div element with classname ", () => {
      expect(rendered.container.querySelector("div")).toHaveClass("relative block w-24 h-24 bg-white border border-solid border-gray-200 rounded-md px-5 py-5")
    })
  })

  describe("Standard Box responsive width component", () => {
    beforeEach(() => {
      rendered = render(<Box width="24" md={{width: "full"}} />)
    })

    it("should have div element with classname ", () => {
      expect(rendered.container.querySelector("div")).toHaveClass("relative block w-full lg:w-24 bg-white border border-solid border-gray-200 rounded-md px-5 py-5")
    })
  })

  describe("Standard Box rotate component", () => {
    beforeEach(() => {
      rendered = render(<Box rotate="2" />)
    })

    it("should have div element with classname ", () => {
      expect(rendered.container.querySelector("div")).toHaveClass("relative block w-full bg-white border border-solid border-gray-200 rounded-md px-5 py-5 transform rotate-2")
    })
  })

  describe("Standard Box with image component", () => {
    beforeEach(() => {
      rendered = render(<Box>
      <Box.Image width="24" src="https://kodepanda.com/assets/images/Assets-01.svg" alt="svg 1" bottom="0" left="0" />
      <Box.Image width="56" src="https://kodepanda.com/assets/images/Assets-03.svg" alt="svg 3" top="0" right="0" />
      <Box.Content>
        <p>text here</p>
      </Box.Content>
    </Box>)
    })

    it("should have div element with classname ", () => {
      expect(rendered.container.querySelector("div")).toHaveClass("relative block w-full bg-white border border-solid border-gray-200 rounded-md px-5 py-5")
    })

    it("should have 2 img element ", () => {
      expect(rendered.container.querySelectorAll("img")).toHaveLength(2)
      expect(rendered.container.querySelectorAll("img")[0]).toHaveClass("absolute bottom-0 left-0 w-24")
      expect(rendered.container.querySelectorAll("img")[1]).toHaveClass("absolute top-0 right-0 w-56")
    })

    it("should have section element", () => {
      expect(rendered.container.querySelectorAll("section")).toHaveLength(1)
      expect(rendered.container.querySelector("section")).toHaveTextContent("text here")
    })
  })
})
