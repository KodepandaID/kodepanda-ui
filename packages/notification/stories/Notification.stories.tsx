import * as React from "react"
import { NotificationProvider, Notification, useNotification } from "../src"

export default { title: 'Components/Notification' }

const Add = () => {
  const notify = useNotification()

  return(
    <button
    className="flex items-center justify-center px-4 py-1 mb-2 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600" type="button"
    onClick={() => {
      notify.add(Date.now().toString(), {
        description: <p className="text-sm text-gray-800">Hello, world! This is a notification message.</p>
      })
    }}>+</button>
  )
}

const AddCustom = () => {
  const notify = useNotification()

  return(
    <button
    className="flex items-center justify-center px-4 py-1 mb-2 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600" type="button"
    onClick={() => {
      const id = Date.now().toString()
      notify.addCustom(id, {
        custom: (
          <Notification id={id} closable
          color="green" colorContrast="500" borderColor="green" borderColorContrast="600"
          description={(
            <p className="text-sm text-white">Hello, world! This is a notification message.</p>
          )} />
        )
      })
    }}>+</button>
  )
}

const AddwithTitle = () => {
  const notify = useNotification()

  return(
    <button
    className="flex items-center justify-center px-4 py-1 mb-2 rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600" type="button"
    onClick={() => {
      notify.add(Date.now().toString(), {
        title: (
          <span className="flex space-x-2 items-center">
            <div className="bg-blue-500 rounded-md w-5 h-5"></div>
            <strong className="text-sm">Notification</strong>
          </span>
        ),
        description: <p className="text-sm text-gray-800">Hello, world! This is a notification message.</p>
      })
    }}>+</button>
  )
}

export const Basic = () => {
  return(
    <NotificationProvider closable>
      <Add />
    </NotificationProvider>
  )
}

export const Coloring = () => {
  return(
    <NotificationProvider closable color="gray" colorContrast="100">
      <Add />
    </NotificationProvider>
  )
}

export const AutoHide = () => {
  return(
    <NotificationProvider autoHide>
      <Add />
    </NotificationProvider>
  )
}

export const Position = () => {
  return(
    <NotificationProvider closable position="top-right">
      <Add />
    </NotificationProvider>
  )
}

export const PositionCenter = () => {
  return(
    <NotificationProvider closable position="top-center">
      <Add />
    </NotificationProvider>
  )
}

export const Title = () => {
  return(
    <NotificationProvider closable>
      <AddwithTitle />
    </NotificationProvider>
  )
}

export const Custom = () => {
  return(
    <NotificationProvider>
      <AddCustom />
    </NotificationProvider>
  )
}
