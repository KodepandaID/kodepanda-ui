import * as React from "react"

export const arrowNavigation = (
  e: React.KeyboardEvent,
  id: string | undefined,
  handler: (code: string) => void
) => {
  const arr = id !== undefined ? id.split("-") : []
  if (e.code === "ArrowDown" && arr.length > 0) {
    let idx = Number(arr[arr.length - 1]) + 1
    delete arr[arr.length - 1]

    let elm = document.getElementById(`${arr.join("-")}${idx}`)
    if (elm?.hasAttribute("data-disabled")) {
      do {
        idx += 1
        elm = document.getElementById(`${arr.join("-")}${idx}`)
      } while(elm?.hasAttribute("data-disabled"))
    }

    elm?.focus()
    handler(e.code)
  } else if (e.code === "ArrowUp" && arr.length > 0) {
    let idx = Number(arr[arr.length - 1]) - 1

    if (idx > 0) {
      delete arr[arr.length - 1]

      let elm = document.getElementById(`${arr.join("-")}${idx}`)
      if (elm?.hasAttribute("data-disabled")) {
        do {
          idx -= 1
          elm = document.getElementById(`${arr.join("-")}${idx}`)
        } while(elm?.hasAttribute("data-disabled") && idx > 0)
      }

      elm?.focus()
      handler(e.code)
    }
  } else handler(e.code)
}

export const arrowNavigationHorizontal = (
  e: React.KeyboardEvent,
  id: string | undefined,
  handler: (code: string) => void
) => {
  const arr = id !== undefined ? id.split("-") : []
  if (e.code === "ArrowRight" && arr.length > 0) {
    let idx = Number(arr[arr.length - 1]) + 1
    delete arr[arr.length - 1]

    let elm = document.getElementById(`${arr.join("-")}${idx}`)
    console.log(`${arr.join("-")}${idx}`)
    if (elm?.hasAttribute("data-disabled")) {
      do {
        idx += 1
        elm = document.getElementById(`${arr.join("-")}${idx}`)
      } while(elm?.hasAttribute("data-disabled"))
    }

    elm?.focus()
    handler(e.code)
  } else if (e.code === "ArrowLeft" && arr.length > 0) {
    let idx = Number(arr[arr.length - 1]) - 1

    if (idx > 0) {
      delete arr[arr.length - 1]

      let elm = document.getElementById(`${arr.join("-")}${idx}`)
      if (elm?.hasAttribute("data-disabled")) {
        do {
          idx -= 1
          elm = document.getElementById(`${arr.join("-")}${idx}`)
        } while(elm?.hasAttribute("data-disabled") && idx > 0)
      }

      elm?.focus()
      handler(e.code)
    }
  } else handler(e.code)
}
