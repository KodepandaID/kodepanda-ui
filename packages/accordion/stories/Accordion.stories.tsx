import * as React from 'react'
import { Accordion } from "../src"

export default { title: 'Components/Accordion' }

export const Basic = () => {
  return(
    <Accordion>
      <Accordion.Item title="Is it accessible?">
        Yes. It adheres to the WAI-ARAI design pattern.
      </Accordion.Item>
      <Accordion.Item title="Is it unstyled?">
        Yes. It's unstyled by default, giving you freedom over the look and feel.
      </Accordion.Item>
      <Accordion.Item title="Can it be animated?">
        Yes! You can animate the Accordion with CSS or JavaScript.
      </Accordion.Item>
    </Accordion>
  )
}

export const Active = () => {
  return(
    <Accordion>
      <Accordion.Item active title="Is it accessible?">
        Yes. It adheres to the WAI-ARAI design pattern.
      </Accordion.Item>
      <Accordion.Item title="Is it unstyled?">
        Yes. It's unstyled by default, giving you freedom over the look and feel.
      </Accordion.Item>
      <Accordion.Item title="Can it be animated?">
        Yes! You can animate the Accordion with CSS or JavaScript.
      </Accordion.Item>
    </Accordion>
  )
}

export const CustomTitle = () => {
  return(
    <Accordion>
      <Accordion.Item title={(<b className="text-sm font-semibold text-red-500">Is it accessible</b>)}>
        Yes. It adheres to the WAI-ARAI design pattern.
      </Accordion.Item>
      <Accordion.Item title="Is it unstyled?">
        Yes. It's unstyled by default, giving you freedom over the look and feel.
      </Accordion.Item>
      <Accordion.Item title="Can it be animated?">
        Yes! You can animate the Accordion with CSS or JavaScript.
      </Accordion.Item>
    </Accordion>
  )
}

export const Simple = () => {
  return(
    <Accordion simple>
      <Accordion.Item title="Is it accessible?">
        Yes. It adheres to the WAI-ARAI design pattern.
      </Accordion.Item>
      <Accordion.Item title="Is it unstyled?">
        Yes. It's unstyled by default, giving you freedom over the look and feel.
      </Accordion.Item>
      <Accordion.Item title="Can it be animated?">
        Yes! You can animate the Accordion with CSS or JavaScript.
      </Accordion.Item>
    </Accordion>
  )
}
