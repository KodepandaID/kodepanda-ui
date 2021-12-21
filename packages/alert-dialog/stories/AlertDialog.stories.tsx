import * as React from 'react'
import { AlertDialog } from "../src"
import { Button } from "../../button/src"
import { Text } from "../../typography/src"

export default { title: 'Components/Alert Dialog' }

export const Basic = () => {
  const [visible, setVisible] = React.useState(false)

  return(
    <React.Fragment>
      <Button onClick={() => setVisible(true)}>Show Alert</Button>
      <AlertDialog
      visible={visible}
      okText="Yes, delete account" cancelText="Cancel"
      onOk={() => setVisible(false)} onCancel={() => setVisible(false)}>
        <Text fontSize="base" fontWeight="bold" mb="3">Are you absolutely sure?</Text>
        <Text fontSize="sm" color="gray" colorContrast="500">
          This action cannot be undone. This will permanently delete your account and remove your data from our servers.
        </Text>
      </AlertDialog>
    </React.Fragment>
  )
}

export const NoBorder = () => {
  const [visible, setVisible] = React.useState(false)

  return(
    <React.Fragment>
      <Button onClick={() => setVisible(true)}>Show Alert</Button>
      <AlertDialog
      visible={visible} border={false}
      okText="Yes, delete account" cancelText="Cancel"
      onOk={() => setVisible(false)} onCancel={() => setVisible(false)}>
        <Text fontSize="base" fontWeight="bold" mb="3">Are you absolutely sure?</Text>
        <Text fontSize="sm" color="gray" colorContrast="500">
          This action cannot be undone. This will permanently delete your account and remove your data from our servers.
        </Text>
      </AlertDialog>
    </React.Fragment>
  )
}

export const CustomFooter = () => {
  const [visible, setVisible] = React.useState(false)

  return(
    <React.Fragment>
      <Button onClick={() => setVisible(true)}>Show Alert</Button>
      <AlertDialog
      visible={visible} border={false}
      footer={(
        <div className="w-full flex justify-end space-x-3">
          <Button color="gray" colorContrast="200" onClick={() => setVisible(false)}>Cancel</Button>
          <Button color="red" colorContrast="600" icon="trash-solid" onClick={() => setVisible(false)}>Yes, delete account</Button>
        </div>
      )}
      onOk={() => setVisible(false)} onCancel={() => setVisible(false)}>
        <Text fontSize="base" fontWeight="bold" mb="3">Are you absolutely sure?</Text>
        <Text fontSize="sm" color="gray" colorContrast="500">
          This action cannot be undone. This will permanently delete your account and remove your data from our servers.
        </Text>
      </AlertDialog>
    </React.Fragment>
  )
}
