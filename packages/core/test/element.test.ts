import { element } from "@zenbu-ui/core"

describe("Element classname", () => {
  it("Generate transform classname", () => {
    const className = element({
      element: {
        transform: true,
        translate: {
          x: "-0.5",
          y: "-1/2"
        }
      }
    })

    expect(className).toEqual("transform -translate-x-0.5 -translate-y-1/2")
  })

  it("Generate scale classname", () => {
    const className = element({
      element: {
        transform: true,
        scale: {
          x: "50",
          y: "50"
        }
      }
    })

    expect(className).toEqual("transform scale-x-50 scale-y-50")
  })
})
