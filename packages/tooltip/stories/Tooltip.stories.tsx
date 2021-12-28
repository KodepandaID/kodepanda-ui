import * as React from 'react'
import { Tooltip } from "../src"
import { Button } from "../../button/src"

export default { title: 'Components/Tooltip' }

export const Basic = () => {
  return(
    <div className="w-screen h-screen flex items-center justify-center">
      <Tooltip
      trigger={(
        <Button>Tooltip Button</Button>
      )}
      content={(
        <p className="text-sm text-black">Bottom tooltip</p>
      )} />
    </div>
  )
}

export const Disabled = () => {
  return(
    <div className="w-screen h-screen flex items-center justify-center">
      <Tooltip
      disabled
      trigger={(
        <Button>Tooltip Button</Button>
      )}
      content={(
        <p className="text-sm text-black">Bottom tooltip</p>
      )} />
    </div>
  )
}

export const Popup = () => {
  return(
    <div className="w-screen h-screen flex items-center justify-center">
      <Tooltip
      popup
      trigger={(
        <Button>Tooltip Button</Button>
      )}
      content={(
        <p className="text-sm text-black">Bottom tooltip</p>
      )} />
    </div>
  )
}

export const Position = () => {
  return(
    <div className="w-screen h-screen flex items-center justify-center space-x-5">
      <Tooltip
      trigger={(
        <Button>Tooltip Bottom</Button>
      )}
      content={(
        <p className="text-sm text-black">Bottom popover</p>
      )} />

      <Tooltip
      position="top"
      trigger={(
        <Button>Tooltip Top</Button>
      )}
      content={(
        <p className="text-sm text-black">Top popover</p>
      )} />

      <Tooltip
      position="left"
      trigger={(
        <Button>Tooltip Left</Button>
      )}
      content={(
        <p className="text-sm text-black">Left popover</p>
      )} />

      <Tooltip
      position="right"
      trigger={(
        <Button>Tooltip Right</Button>
      )}
      content={(
        <p className="text-sm text-black">Right popover</p>
      )} />
    </div>
  )
}
