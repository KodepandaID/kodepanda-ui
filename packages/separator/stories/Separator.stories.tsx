import * as React from "react"
import { Separator } from "../src"

export default { title: 'Components/Separator' }

export const Basic = () => {
  return(
    <React.Fragment>
      <h2 className="font-bold text-lg">Title was Here</h2>
      <Separator />
    </React.Fragment>
  )
}

export const Coloring = () => {
  return(
    <React.Fragment>
      <h2 className="font-bold text-lg">Title was Here</h2>
      <Separator borderColor="blue" borderColorContrast="700" />
    </React.Fragment>
  )
}

export const Style = () => {
  return(
    <React.Fragment>
      <h2 className="font-bold text-lg">Title was Here</h2>
      <Separator borderStyle="dashed" />
    </React.Fragment>
  )
}

export const Width = () => {
  return(
    <React.Fragment>
      <h2 className="font-bold text-lg">Title was Here</h2>
      <Separator borderWidth="2" borderStyle="dashed" />
    </React.Fragment>
  )
}

export const WithText = () => {
  return(
    <React.Fragment>
      <Separator
      text={(
        <h2 className="font-bold text-lg">Title was Here</h2>
      )} />
    </React.Fragment>
  )
}
