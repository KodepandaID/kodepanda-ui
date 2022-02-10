import { responsiveStyle } from "../src/responsive"

describe("Generate responsive style", () => {
  it("generate flexbox responsive", () => {
    const className = responsiveStyle({
      responsiveFlexbox: {
        md: {
          direction: "col"
        },
        lg: {
          direction: "row"
        }
      }
    })

    expect(className).toEqual("md:flex-col lg:flex-row")
  })

  it("generate flexbox gap responsive", () => {
    const className = responsiveStyle({
      responsiveFlexbox: {
        md: {
          gap: "5"
        },
        lg: {
          gap: "11"
        }
      }
    })

    expect(className).toEqual("md:gap-5 lg:gap-11")
  })

  it("generate text responsive", () => {
    const className = responsiveStyle({
      responsiveText: {
        md: {
          textAlign: "left"
        },
        lg: {
          textAlign: "center"
        }
      }
    })

    expect(className).toEqual("md:text-left lg:text-center")
  })
})
