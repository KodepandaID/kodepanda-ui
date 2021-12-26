import * as React from 'react'
import { Popover } from "../src"
import { Button } from "../../button/src"

export default { title: 'Components/Popover' }

export const Basic = () => {
  return(
    <div className="w-screen h-screen flex items-center justify-center">
      <Popover
      trigger={(
        <Button>Popover Button</Button>
      )}
      content={(
        <p className="text-sm text-black">Bottom popover</p>
      )} />
    </div>
  )
}

export const Position = () => {
  return(
    <div className="w-screen h-screen flex items-center justify-center space-x-5">
      <Popover
      trigger={(
        <Button>Popover Bottom</Button>
      )}
      content={(
        <p className="text-sm text-black">Bottom popover</p>
      )} />

      <Popover
      position="top"
      trigger={(
        <Button>Popover Top</Button>
      )}
      content={(
        <p className="text-sm text-black">Top popover</p>
      )} />

      <Popover
      position="left"
      trigger={(
        <Button>Popover Left</Button>
      )}
      content={(
        <p className="text-sm text-black">Left popover</p>
      )} />

      <Popover
      position="right"
      trigger={(
        <Button>Popover Right</Button>
      )}
      content={(
        <p className="text-sm text-black">Right popover</p>
      )} />
    </div>
  )
}

export const Disabled = () => {
  return(
    <div className="w-screen h-screen flex items-center justify-center">
      <Popover
      disabled
      trigger={(
        <Button>Popover Button</Button>
      )}
      content={(
        <p className="text-sm text-black">Bottom popover</p>
      )} />
    </div>
  )
}

export const Closable = () => {
  return(
    <div className="w-screen h-screen flex items-center justify-center">
      <Popover
      closable
      trigger={(
        <Button>Popover Button</Button>
      )}
      content={(
        <p className="text-sm text-black">Bottom popover</p>
      )} />
    </div>
  )
}

export const WithoutPointerArrow = () => {
  return(
    <div className="w-screen h-screen flex items-center justify-center">
      <Popover
      pointerArrow={false}
      trigger={(
        <Button>Popover Button</Button>
      )}
      content={(
        <p className="text-sm text-black">Bottom popover</p>
      )} />
    </div>
  )
}

export const Shadow = () => {
  return(
    <div className="w-screen h-screen flex items-center justify-center">
      <Popover
      border={false} shadow="lg"
      trigger={(
        <Button>Popover Button</Button>
      )}
      content={(
        <p className="text-sm text-black">Bottom popover</p>
      )} />
    </div>
  )
}

export const Coloring = () => {
  return(
    <div className="w-screen h-screen flex items-center justify-center">
      <Popover
      color="blue" colorContrast="400"
      border={false}
      trigger={(
        <Button>Popover Button</Button>
      )}
      content={(
        <p className="text-sm text-white">Bottom popover</p>
      )} />
    </div>
  )
}
