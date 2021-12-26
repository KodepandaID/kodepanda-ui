import * as React from 'react'
import { Provider } from '@zenbu-ui/provider'
import { Link } from "../src"

export default { title: 'Components/Link' }

export const Basic = () => {
  return(
    <Link href="/">Tester Link</Link>
  )
}

export const Coloring = () => {
  return(
    <Link href="/" color="green" colorContrast="400" colorHover="green" colorHoverContrast="600">Tester Link</Link>
  )
}

export const DarkTheme = () => {
  return(
    <Provider dark>
      <Link href="/" darkColor="green" darkColorContrast="400" darkColorHover="green" darkColorHoverContrast="600">Tester Link</Link>
    </Provider>
  )
}
