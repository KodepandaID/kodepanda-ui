import * as React from "react"

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  handler: (event: Event) => void,
) => {
  React.useEffect(() => {
    const listener = (event: Event) => {
      const el = ref?.current
      if (!el || el.contains((event?.target as Node) || null)) {
        return
      }

      handler(event)
    }

    document.addEventListener('mousedown', listener)
    document.addEventListener('touchstart', listener)

    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchstart', listener)
    }
  }, [ref, handler])
}

export const useEscKeyboardEvent = <T extends HTMLElement = HTMLElement>(
  ref: React.RefObject<T>,
  handler: () => void,
) => {
  React.useEffect(() => {
    if (ref.current !== null) {
      const listener = (event: KeyboardEvent) => {
        if (event.code === "Escape") {
          handler()
        }
      }

      document.addEventListener('keydown', listener)

      return () => {
        document.addEventListener('keydown', listener)
        handler()
      }
    }
  }, [ref, handler])
}
