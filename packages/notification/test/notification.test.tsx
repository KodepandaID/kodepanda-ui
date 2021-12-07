import * as React from "react"
import { render, RenderResult, waitFor } from "@testing-library/react"
import { NotificationProvider, Notification, useNotification } from "../src"
import userEvent from "@testing-library/user-event"

describe("Standard Notification component", () => {
  let rendered: RenderResult

  const Add = () => {
    const notify = useNotification()

    return(
      <button
      className="flex items-center justify-center px-4 py-1 mb-2 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600" type="button"
      onClick={() => {
        notify.add(Date.now().toString(), {
          description: <p className="text-sm text-gray-800">Hello, world! This is a notification message.</p>
        })
      }}>+</button>
    )
  }

  const AddCustom = () => {
    const notify = useNotification()

    return(
      <button
      className="flex items-center justify-center px-4 py-1 mb-2 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600" type="button"
      onClick={() => {
        const id = Date.now().toString()
        notify.addCustom(id, {
          custom: (
            <Notification id={id} closable
            color="green" colorContrast="500" borderColor="green" borderColorContrast="600"
            description={(
              <p className="text-sm text-white">Hello, world! This is a notification message.</p>
            )} />
          )
        })
      }}>+</button>
    )
  }

  beforeEach(() => {
    rendered = render(
      <NotificationProvider closable>
        <Add />
      </NotificationProvider>
    )
  })

  it("should have notification div", () => {
    rendered.container.querySelector("button")?.click()
    expect(rendered.container.querySelectorAll("div[role=alert]")).toHaveLength(1)
  })

  it("should have notification div with classname", () => {
    rendered.container.querySelector("button")?.click()
    expect(rendered.container.querySelectorAll("div")[2]).toHaveClass("overflow-hidden w-96 bg-white border border-gray-200 rounded-md")
  })

  describe('Custom notification', () => {
    beforeEach(() => {
      rendered = render(
        <NotificationProvider closable>
          <AddCustom />
        </NotificationProvider>
      )
    })

    it("should have notification div with classname", () => {
      rendered.container.querySelector("button")?.click()
      expect(rendered.container.querySelectorAll("div")[2]).toHaveClass("overflow-hidden w-96 bg-green-500 border border-green-600 rounded-md")
    })
  })

  describe('when close by keyboard', () => {
    it('should be focus', () => {
      rendered.container.querySelector("button")?.click()
      userEvent.tab()
      expect(rendered.container.querySelector("span[role=button]")).toHaveFocus()
    })

    it('should not visible', async () => {
      rendered.container.querySelector("button")?.click()
      userEvent.tab()
      userEvent.keyboard("{enter}")
      await waitFor(() => {
        expect(rendered.container.querySelector("div[role=alert]")).toBeNull()
      })
    })
  })
})
