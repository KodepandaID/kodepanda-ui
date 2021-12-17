import * as React from 'react'
import { Provider } from '@zenbu-ui/provider'
import { Text } from "../src"

export default { title: 'Components/Text' }

export const Basic = () => {
  return(
    <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
  )
}

export const Color = () => {
  return(
    <Text color="blue" colorContrast="700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
  )
}

export const Size = () => {
  return(
    <Text fontSize="xs">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
  )
}

export const Weight = () => {
  return(
    <Text fontWeight="bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
  )
}

export const LineHeight = () => {
  return(
    <Text lineHeight="relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
  )
}

export const Transform = () => {
  return(
    <Text textTransform="capitalize">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
  )
}

export const Alignment = () => {
  return(
    <Text textAlign="center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
  )
}

export const DarkTheme = () => {
  return(
    <Provider dark>
      <Text darkColor="gray" darkColorContrast="200">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
    </Provider>
  )
}

export const Mark = () => {
  return(
    <Text>Lorem ipsum dolor sit amet, <Text color="yellow" colorContrast="300" mark>consectetur adipiscing elit</Text>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
  )
}

export const Code = () => {
  return(
    <Text>Lorem ipsum dolor sit amet, <Text color="gray" colorContrast="200" code>consectetur adipiscing elit</Text>, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
  )
}

export const Underline = () => {
  return(
    <Text underline>The quick brown fox jumps over the lazy dog.</Text>
  )
}

export const UnderlineOffset = () => {
  return(
    <Text underline textUnderlineOffset="4">The quick brown fox jumps over the lazy dog.</Text>
  )
}

export const DecorationColor = () => {
  return(
    <Text underline textDecorationColor="blue" textDecorationColorContrast="500">The quick brown fox jumps over the lazy dog.</Text>
  )
}

export const DecorationWidth = () => {
  return(
    <Text underline textDecorationWidth="4" textDecorationColor="blue" textDecorationColorContrast="500">The quick brown fox jumps over the lazy dog.</Text>
  )
}

export const DecorationStyle = () => {
  return(
    <Text underline textDecorationColor="pink" textDecorationColorContrast="500" textDecorationStyle="wavy">The quick brown fox jumps over the lazy dog.</Text>
  )
}

export const Delete = () => {
  return(
    <Text delete>The quick brown fox jumps over the lazy dog.</Text>
  )
}

export const Strong = () => {
  return(
    <Text>The quick brown <Text strong>fox</Text> jumps over the lazy dog.</Text>
  )
}

export const Italic = () => {
  return(
    <Text>The quick brown <Text italic>fox</Text> jumps over the lazy dog.</Text>
  )
}

export const Indent = () => {
  return(
    <Text textIndent="8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
  )
}

export const FirstLetter = () => {
  return(
    <div className="w-1/2">
      <Text
      color="gray" colorContrast="700"
      firstLetterFontSize="7xl" firstLetterFontWeight="bold" firstLetterTextTransform="uppercase"
      firstLetterTextColor="black" firstLetterSpacing={{
        mr: "2"
      }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
    </div>
  )
}

export const FirstLetterFloat = () => {
  return(
    <div className="w-1/2">
      <Text
      color="gray" colorContrast="700"
      firstLetterFontSize="7xl" firstLetterFontWeight="bold" firstLetterTextTransform="uppercase"
      firstLetterFloat="left" firstLetterTextColor="black" firstLetterSpacing={{
        mr: "2"
      }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
    </div>
  )
}
