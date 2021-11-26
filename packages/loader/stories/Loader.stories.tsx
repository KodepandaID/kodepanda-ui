import * as React from 'react'
import { Loader } from "../src"

export default { title: 'Components/Loader' }

export const Basic = () => {
  return(
    <Loader visible />
  )
}

export const Trigger = () => {
  const [show, setShow] = React.useState(false)

  return(
    <React.Fragment>
      <button
      className="bg-blue-600 border border-solid border-blue-700 font-bold text-white rounded-lg px-2 py-2"
      onClick={() => setShow(true)}>
        Show Loader
      </button>
      <Loader visible={show} />
    </React.Fragment>
  )
}

export const Coloring = () => {
  return(
    <Loader visible bgColor="red" bgColorContrast="400" />
  )
}

export const Text = () => {
  return(
    <Loader visible text="Loading" />
  )
}

export const Width = () => {
  return(
    <Loader visible width="14" fontSize="lg" text="Loading" />
  )
}
