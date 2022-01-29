import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { Input } from "../src"
import { Text } from "../../typography/src"

describe("Standard Input Radio component", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(
      <>
        <Input.Radio value={1} name="tester" label={(<Text span fontSize="sm">Default checkbox 1</Text>)} />
        <Input.Radio value={2} name="tester" label={(<Text span fontSize="sm">Default checkbox 2</Text>)} />
      </>
    )
  })

  it("should have input element with classname", () => {
    expect(rendered.container.querySelector("input")).toHaveClass("float-left cursor-pointer text-blue-600")
  })

  it("should have input type radio", () => {
    expect(rendered.container.querySelector("input")).toHaveAttribute("type", "radio")
  })
})
