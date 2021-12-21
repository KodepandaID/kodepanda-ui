import * as React from 'react'
import { Modal } from "../src"
import { Button } from "../../button/src"
import { Image } from "../../image/src"
import { Text } from "../../typography/src"

export default { title: 'Components/Modal' }

export const Basic = () => {
  const [visible, setVisible] = React.useState(false)

  return(
    <React.Fragment>
      <Button onClick={() => setVisible(true)}>Show Modal</Button>

      <Modal visible={visible} onClose={() => setVisible(false)}>
        <Text color="gray" colorContrast="800" fontSize="2xl" fontWeight="semibold" mb="2">Show Basic Modal</Text>
        <Text color="gray" colorContrast="500" fontSize="sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
      </Modal>
    </React.Fragment>
  )
}

export const Title = () => {
  const [visible, setVisible] = React.useState(false)

  return(
    <React.Fragment>
      <Button onClick={() => setVisible(true)}>Show Modal</Button>

      <Modal
      title={(
        <Text fontSize="sm" fontWeight="semibold">Show Modal Dialog</Text>
      )}
      visible={visible} onClose={() => setVisible(false)}>
        <Text color="gray" colorContrast="500" fontSize="sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
      </Modal>
    </React.Fragment>
  )
}

export const Footer = () => {
  const [visible, setVisible] = React.useState(false)

  return(
    <React.Fragment>
      <Button onClick={() => setVisible(true)}>Show Modal</Button>

      <Modal
      title={(
        <Text fontSize="sm" fontWeight="semibold">Show Modal Dialog</Text>
      )}
      footer={(
        <div className="w-full flex justify-end space-x-3">
          <Button color="red" colorContrast="500" onClick={() => setVisible(false)}>Cancel</Button>
          <Button color="green" colorContrast="600">Ok</Button>
        </div>
      )}
      visible={visible} onClose={() => setVisible(false)}>
        <Text color="gray" colorContrast="500" fontSize="sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
      </Modal>
    </React.Fragment>
  )
}

export const FooterColor = () => {
  const [visible, setVisible] = React.useState(false)

  return(
    <React.Fragment>
      <Button onClick={() => setVisible(true)}>Show Modal</Button>

      <Modal
      title={(
        <Text fontSize="sm" fontWeight="semibold">Show Modal Dialog</Text>
      )}
      footer={(
        <div className="w-full flex justify-end space-x-3">
          <Button color="red" colorContrast="500" onClick={() => setVisible(false)}>Cancel</Button>
          <Button color="green" colorContrast="600">Ok</Button>
        </div>
      )} footerColor="gray" footerColorContrast="400"
      visible={visible} onClose={() => setVisible(false)}>
        <Text color="gray" colorContrast="500" fontSize="sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
      </Modal>
    </React.Fragment>
  )
}

export const ShowModalImage = () => {
  const [visible, setVisible] = React.useState(false)

  return(
    <React.Fragment>
      <Button onClick={() => setVisible(true)}>Show Modal</Button>

      <Modal
      color="transparent"
      visible={visible} onClose={() => setVisible(false)}>
        <Image
        fluid
        src="https://images.unsplash.com/photo-1593642532454-e138e28a63f4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80" alt="Laptop XPS by unsplash" />
      </Modal>
    </React.Fragment>
  )
}
