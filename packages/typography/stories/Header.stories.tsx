import * as React from 'react'
import { ThemeCtx } from '@zenbu-ui/provider'
import { Header } from "../src"

export default { title: 'Components/Header' }

export const Basic = () => {
  return(
    <div className="flex flex-col space-y-4">
      <Header as="h1">Header 1</Header>
      <Header as="h2">Header 2</Header>
      <Header as="h3">Header 3</Header>
      <Header as="h4">Header 4</Header>
      <Header as="h5">Header 5</Header>
      <Header as="h6">Header 6</Header>
    </div>
  )
}

export const Ellipsis = () => {
  return(
    <div className="w-96">
      <Header as="h4" ellipsis>The quick brown fox jumps over the lazy dog.</Header>
    </div>
  )
}

export const TextTransform = () => {
  return(
    <div className="flex flex-col space-y-5">
      <Header as="h4" uppercase>The quick brown fox jumps over the lazy dog.</Header>
      <Header as="h4" lowercase>The quick brown fox jumps over the lazy dog.</Header>
      <Header as="h4" capitalize>The quick brown fox jumps over the lazy dog.</Header>
    </div>
  )
}

export const Dark = () => {
  return(
    <ThemeCtx.Provider value={{dark: true}}>
      <Header as="h4" darkColor="blue" darkColorContrast="700">The quick brown fox jumps over the lazy dog.</Header>
    </ThemeCtx.Provider>
  )
}
