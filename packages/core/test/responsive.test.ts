import { responsive, spacing } from "../src/generator"

describe("Generate spacing responsive", () => {
  it("generate responsive width and height", () => {
    const className = responsive({
      lg: {
        width: "full",
        height: "screen"
      }
    }, "full", "full")

    expect(className).toEqual("w-full h-full lg:w-full lg:h-screen")
  })

  it("generate without responsive", () => {
    const className = spacing({
      px: "5",
      py: "-0.5"
    }, undefined)

    expect(className).toEqual("px-5 -py-0.5")
  })

  it("generate not number", () => {
    const className = spacing({
      mx: "auto",
      my: "1/2",
      px: "-2",
      py: "0"
    }, undefined)

    expect(className).toEqual("mx-auto my-1/2 -px-2 py-0")
  })

  it("generate with minus", () => {
    const className = spacing({
      px: "5",
      py: "-0.5"
    }, {
      md: {
        px: "-5",
        py: "-1.5"
      }
    })

    expect(className).toEqual("-px-5 lg:px-5 -py-1.5 lg:-py-0.5")
  })

  it("generate with md responsive", () => {
    const className = spacing({
      px: "5",
      py: "-5"
    }, {
      md: {
        px: "3",
        py: "3"
      }
    })

    expect(className).toEqual("px-3 lg:px-5 py-3 lg:-py-5")
  })

  it("generate with sm and md responsive", () => {
    const className = spacing({
      px: "5",
      py: "-5"
    }, {
      sm: {
        px: "2",
        py: "2"
      },
      md: {
        px: "3",
        py: "3"
      }
    })

    expect(className).toEqual("px-2 md:px-3 lg:px-5 py-2 md:py-3 lg:-py-5")
  })
})
