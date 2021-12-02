import * as React from 'react'
import { Progress } from "../src"

export default { title: 'Components/Progress' }

export const Basic = () => {
  return(
    <Progress />
  )
}

export const BasicWithValue = () => {
  return(
    <Progress percentage={50} />
  )
}

export const Coloring = () => {
  return(
    <Progress color="red" colorContrast="400" percentage={50} />
  )
}

export const Rounded = () => {
  return(
    <Progress rounded="none" percentage={50} />
  )
}

export const ProgressValue = () => {
  const [value, setValue] = React.useState(0)

  return(
    <React.Fragment>
      <button
      className="flex items-center justify-center px-4 py-1 mb-2 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600" type="button"
      onClick={() => {
        if (value < 100) setValue(value+10)
      }}>+</button>
      <Progress percentage={value} />
    </React.Fragment>
  )
}

export const ShowPercentage = () => {
  const [value, setValue] = React.useState(0)

  return(
    <React.Fragment>
      <button
      className="flex items-center justify-center px-4 py-1 mb-2 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600" type="button"
      onClick={() => {
        if (value < 100) setValue(value+10)
      }}>+</button>
      <Progress percentage={value} showPercentage />
    </React.Fragment>
  )
}

export const DifferentColorAfterCompleted = () => {
  const [value, setValue] = React.useState(0)

  return(
    <React.Fragment>
      <button
      className="flex items-center justify-center px-4 py-1 mb-2 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600" type="button"
      onClick={() => {
        if (value < 100) setValue(value+10)
      }}>+</button>
      <Progress completeColor="green" completeColorContrast="500" percentage={value} showPercentage />
    </React.Fragment>
  )
}

export const ChangeTextAfterCompleted = () => {
  const [value, setValue] = React.useState(0)

  return(
    <React.Fragment>
      <button
      className="flex items-center justify-center px-4 py-1 mb-2 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600" type="button"
      onClick={() => {
        if (value < 100) setValue(value+10)
      }}>+</button>
      <Progress completeText="Completed" completeColor="green" completeColorContrast="500" percentage={value} showPercentage />
    </React.Fragment>
  )
}

export const CustomFont = () => {
  const [value, setValue] = React.useState(0)

  return(
    <React.Fragment>
      <button
      className="flex items-center justify-center px-4 py-1 mb-2 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600" type="button"
      onClick={() => {
        if (value < 100) setValue(value+10)
      }}>+</button>
      <Progress
      height="6"
      fontSize="sm" fontWeight="semibold"
      completeText="Completed" completeColor="green" completeColorContrast="500"
      percentage={value} showPercentage />
    </React.Fragment>
  )
}
