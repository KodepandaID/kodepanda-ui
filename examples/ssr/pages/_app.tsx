import '../styles/globals.css'
import * as React from 'react'
import type { AppProps } from 'next/app'
import { Provider } from '@zenbu-ui/provider'

export let darkMode: boolean
export let toggleDarkMode: () => void
function MyApp({ Component, pageProps }: AppProps) {
  const [dark, setDark] = React.useState(false)
  toggleDarkMode = () => {
    darkMode = !darkMode
    setDark(!dark)
  }

  return(
    <Provider dark={dark}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
