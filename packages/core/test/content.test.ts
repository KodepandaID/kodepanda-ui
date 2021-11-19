import { content } from "@zenbu-ui/core"

describe("Content classname", () => {
  it("Generate standard content classname", () => {
    const className = content({
      flexbox: {
        flex: true,
        direction: "row"
      },
      model: {
        width: "full",
        flowRoot: false
      },
      spaceBetween: {
        y: 4
      }
    })

    expect(className).toEqual("flex flex-row w-full space-y-4")
  })
})
