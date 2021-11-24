import { base } from "@zenbu-ui/core"

describe("Base classname", () => {
  it("Generate standard base classname", () => {
    const className = base({
      model: {
        display: "block",
        width: "full",
        flowRoot: false
      },
      visual: {
        dark: false,
        bgColor: "white"
      },
      spacing: {
        mt: "1",
        px: "3",
        py: "5"
      }
    })

    expect(className).toEqual("block w-full bg-white mt-1 px-3 py-5")
  })

  it("Generate hovering color base classname", () => {
    const className = base({
      model: {
        display: "block",
        width: "full",
        flowRoot: false
      },
      visual: {
        dark: false,
        bgColor: "white",
        bgHoverColor: "gray",
        bgHoverColorContrast: "400",
      },
      spacing: {
        mt: "1",
        px: "3",
        py: "5"
      }
    })

    expect(className).toEqual("block w-full bg-white hover:bg-gray-400 mt-1 px-3 py-5")
  })

  it("Generate positioning classname", () => {
    const className = base({
      positioning: {
        position: "absolute",
        top: "0",
        right: "2"
      }
    })

    expect(className).toEqual("absolute top-0 right-2")
  })

  it("Generate positioning with ordinal classname", () => {
    const className = base({
      positioning: {
        position: "absolute",
        top: "1/2",
        right: "1/3"
      }
    })

    expect(className).toEqual("absolute top-1/2 right-1/3")
  })

  it("Generate responsive width classname", () => {
    const className = base({
      model: {
        width: "72",
        flowRoot: false
      },
      responsive: {
        sm: {
          width: "full"
        }
      }
    })

    expect(className).toEqual("w-full lg:w-72")
  })

  it("Generate responsive padding classname", () => {
    const className = base({
      spacing: {
        px: "5",
        py: "5"
      },
      responsive: {
        sm: {
          px: "2",
          py: "2"
        }
      }
    })

    expect(className).toEqual("px-2 lg:px-5 py-2 lg:py-5")
  })

  it("Generate responsive complicated padding classname", () => {
    const className = base({
      spacing: {
        px: "5",
        py: "5"
      },
      responsive: {
        sm: {
          px: "2",
          py: "2"
        },
        md: {
          px: "4",
          py: "4"
        }
      }
    })

    expect(className).toEqual("px-2 md:px-4 lg:px-5 py-2 md:py-4 lg:py-5")
  })
})
