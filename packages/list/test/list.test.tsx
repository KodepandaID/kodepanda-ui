import * as React from "react"
import { axe } from "jest-axe"
import { render, RenderResult } from "@testing-library/react"
import { List } from "../src"

describe("Standard List component", () => {
  let rendered: RenderResult

  beforeEach(() => {
    rendered = render(
      <List>
        <List.Item>Apples</List.Item>
        <List.Item>Pears</List.Item>
        <List.Item>Oranges</List.Item>
      </List>
    )
  })

  it("should have no violations in default state", async () => {
    expect(await axe(rendered.container)).toHaveNoViolations()
  })

  it("should have ul element with classname list space-y-0 list-inside list-none", () => {
    expect(rendered.container.querySelector("ul")).toHaveClass("list space-y-0 list-inside list-none")
  })

  it("should have li element with classname list space-y-0 list-inside list-none", () => {
    expect(rendered.container.querySelector("ul>li")).toHaveClass("text-black text-sm justify-center items-center align-middle")
  })

  it("should have 3 length li element", () => {
    expect(rendered.container.querySelectorAll("ul>li")).toHaveLength(3)
  })

  describe("Standard List ordered component", () => {
    beforeEach(() => {
      rendered = render(
        <List type="decimal">
          <List.Item>Apples</List.Item>
          <List.Item>Pears</List.Item>
          <List.Item>Oranges</List.Item>
        </List>
      )
    })

    it("should have no violations in default state", async () => {
      expect(await axe(rendered.container)).toHaveNoViolations()
    })

    it("should have ol element with classname list space-y-0 list-inside list-none", () => {
      expect(rendered.container.querySelector("ol")).toHaveClass("list space-y-0 list-inside list-decimal")
    })
  })

  describe("Standard List box component", () => {
    beforeEach(() => {
      rendered = render(
        <List.Box
        bgActiveColor="blue" bgActiveColorContrast={500}
        textActiveColor="white">
          <List.Item active>
            <div className="flex justify-between">
              <h5>List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p>Some placeholder content in a paragraph.</p>
            <small>And some small print.</small>
          </List.Item>
          <List.Item>
            <div className="flex justify-between">
              <h5>List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p>Some placeholder content in a paragraph.</p>
            <small>And some small print.</small>
          </List.Item>
          <List.Item>
            <div className="flex justify-between">
              <h5>List group item heading</h5>
              <small>3 days ago</small>
            </div>
            <p>Some placeholder content in a paragraph.</p>
            <small>And some small print.</small>
          </List.Item>
        </List.Box>
      )
    })

    it("should have no violations in default state", async () => {
      expect(await axe(rendered.container)).toHaveNoViolations()
    })

    it("should have div element with classname list space-y-0 list-inside list-none", () => {
      expect(rendered.container.querySelector(`[role="list"]`)).toHaveClass("overflow-hidden w-max flex flex-col border border-solid border-gray-200 rounded-md divide-y")
      expect(rendered.container.querySelectorAll(`[role="listitem"]`)).toHaveLength(3)
    })
  })
})
