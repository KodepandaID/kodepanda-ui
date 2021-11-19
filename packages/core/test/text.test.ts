import { text } from "@zenbu-ui/core"

describe("Text classname", () => {
  it("Generate standard text classname", () => {
    const className = text({
      visualText: {
        dark: false,
        textColor: "black",
        fontSize: "sm",
        fontWeight: "normal",
        textAlign: "left"
      }
    })

    expect(className).toEqual("text-black text-sm font-normal text-left")
  })

  it("Generate text classname with spacing", () => {
    const className = text({
      visualText: {
        dark: false,
        textColor: "black",
        textHoverColor: "blue",
        textHoverColorContrast: 700,
        fontSize: "sm",
        fontWeight: "normal",
        textAlign: "left"
      },
      spacing: {
        mt: 2
      }
    })

    expect(className).toEqual("text-black hover:text-blue-700 text-sm font-normal text-left mt-2")
  })
})
