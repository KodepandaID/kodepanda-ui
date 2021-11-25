import * as React from "react"
import { themes } from "./theme"

interface ThemeContextProps {
  dark: boolean,
  toogleDark?: () => void,
  theme?: themes,
  children?: React.ReactNode
}

const defaultState = {
  dark: false
}

export const ThemeCtx = React.createContext<ThemeContextProps>(defaultState)

export function Provider(props: ThemeContextProps & { children: React.ReactNode }) {
  const { children, ...context } = props
  // Only re-memoize when prop values change
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const value = React.useMemo(() => context, Object.values(context)) as ThemeContextProps
  return <ThemeCtx.Provider value={value}>{children}</ThemeCtx.Provider>
}
