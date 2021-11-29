import * as React from 'react'
import { Badge } from "../src"

export default { title: 'Components/Badge' }

export const Basic = () => {
  return(
    <Badge count={5}>
      <div className="bg-gray-400 w-20 h-20 rounded-lg"></div>
    </Badge>
  )
}

export const MoreOneDigit = () => {
  return(
    <div className="flex space-x-3">
      <Badge count={99}>
        <div className="bg-gray-400 w-20 h-20 rounded-lg"></div>
      </Badge>
      <Badge count={100}>
        <div className="bg-gray-400 w-20 h-20 rounded-lg"></div>
      </Badge>
    </div>
  )
}

export const PrefixAndSuffix = () => {
  return(
    <div className="flex space-x-3">
      <Badge count={100} preffix=">">
        <div className="bg-gray-400 w-20 h-20 rounded-lg"></div>
      </Badge>
      <Badge count={100} suffix="K">
        <div className="bg-gray-400 w-20 h-20 rounded-lg"></div>
      </Badge>
    </div>
  )
}

export const FontSize = () => {
  return(
    <Badge count={100} fontSize="xs">
      <div className="bg-gray-400 w-20 h-20 rounded-lg"></div>
    </Badge>
  )
}

export const Overflow = () => {
  return(
    <Badge count={100} overflowCount={99}>
      <div className="bg-gray-400 w-20 h-20 rounded-lg"></div>
    </Badge>
  )
}
