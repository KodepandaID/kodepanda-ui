import * as React from "react"
import { themes } from "./theme"

interface ThemeContextProps {
  dark: boolean,
  toogleDark?: () => void,
  theme?: themes,
  children?: React.ReactNode
}

const defaultState = {
  dark: false,
}

export const ThemeCtx = React.createContext<ThemeContextProps>(defaultState)
