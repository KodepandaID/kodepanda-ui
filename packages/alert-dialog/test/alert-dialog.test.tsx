import * as React from "react"
import { render, RenderResult } from "@testing-library/react"
import { AlertDialog } from "../src"
import { Text } from "../../typography/src"

describe("Standard AlertDialog component", () => {
  let rendered: RenderResult

  const AlertDialogBasic = () => {
    const [visible, setVisible] = React.useState(true)

    return(
      <AlertDialog
      visible={visible}
      okText="Yes, delete account" cancelText="Cancel"
      onOk={() => setVisible(false)} onCancel={() => setVisible(false)}>
        <Text fontSize="base" fontWeight="bold" mb="3">Are you absolutely sure?</Text>
        <Text fontSize="sm" color="gray" colorContrast="500">
          This action cannot be undone. This will permanently delete your account and remove your data from our servers.
        </Text>
      </AlertDialog>
    )
  }

  beforeEach(() => {
    rendered = render(<AlertDialogBasic />)
  })

  it("should have div element overlay ", () => {
    expect(rendered.container.querySelector("div")).toHaveClass("fixed w-full h-full bg-black/50 inset-0")
  })

  it("should have div wrapper element with classname ", () => {
    expect(rendered.container.querySelectorAll("div")[1]).toHaveClass("fixed z-50 w-full h-full flex justify-center items-center inset-0")
  })

  it("should have data focus guard to trap the focus inside modal component", () => {
    expect(rendered.container.querySelectorAll("div")[2]).toHaveAttribute("data-focus-guard", "true")
    expect(rendered.container.querySelectorAll("div")[3]).toHaveAttribute("data-focus-lock-disabled", "false")
  })

  it("should have div element with classname ", () => {
    expect(rendered.container.querySelectorAll("div")[4]).toHaveClass("overflow-hidden w-96 flex flex-col rounded-md")
  })

  it("should have attribute role with value is dialog ", () => {
    expect(rendered.container.querySelectorAll("div")[4]).toHaveAttribute("role", "alertdialog")
  })
})
