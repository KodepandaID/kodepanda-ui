import * as React from 'react'
import { Message } from "../src"

export default { title: 'Components/Message' }

export const Basic = () => {
  return(
    <Message>
      <p className="text-sm">This is a message</p>
    </Message>
  )
}

export const Coloring = () => {
  return(
    <Message
    border={false}
    color="indigo" colorContrast="600">
      <div className="flex items-center justify-center space-x-4">
        <p className="text-sm text-white">This website uses cookies and similar technologies and ensure the website works properly. Learn more about our privacy policy.</p>
        <button className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50" type="button">Ok, got it</button>
      </div>
    </Message>
  )
}

export const Width = () => {
  return(
    <Message
    width="full"
    border={false} rounded="none"
    color="indigo" colorContrast="600">
      <div className="flex items-center justify-center space-x-4">
        <p className="text-sm text-white">This website uses cookies and similar technologies and ensure the website works properly. Learn more about our privacy policy.</p>
        <button className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50" type="button">Ok, got it</button>
      </div>
    </Message>
  )
}

export const Fixed = () => {
  return(
    <Message
    fixed position="bottom"
    width="screen"
    border={false} rounded="none"
    color="indigo" colorContrast="600">
      <div className="flex items-center justify-center space-x-4">
        <p className="text-sm text-white">This website uses cookies and similar technologies and ensure the website works properly. Learn more about our privacy policy.</p>
        <button className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50" type="button">Ok, got it</button>
      </div>
    </Message>
  )
}

export const Closable = () => {
  const [visible, setVisible] = React.useState(true)

  return(
    <Message
    closable visible={visible}
    fixed position="bottom" contentCenter
    width="screen"
    border={false} rounded="none"
    color="indigo" colorContrast="600">
      <p className="text-sm text-white mr-8">This website uses cookies and similar technologies and ensure the website works properly. Learn more about our privacy policy.</p>
      <button className="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-indigo-600 bg-white hover:bg-indigo-50" type="button" onClick={() => {
        setVisible(false)
      }}>Ok, got it</button>
    </Message>
  )
}

export const HeaderAndDescription = () => {
  return(
    <Message
      header="Welcome back!"
      description="This is a special notification which you can dismiss if you're bored with it."
    />
  )
}

export const HeaderAndDescriptionCustom = () => {
  return(
    <Message
      header={(
        <h2 className="text-xl font-bold text-black">New Site Features</h2>
      )}
      description={(
        <ul className="list-disc list-inside text-sm text-black">
          <li>You can now have cover images on blog pages</li>
          <li>Drafts will now auto-save while writing</li>
        </ul>
      )}
    />
  )
}

export const MessageWithIcon = () => {
  return(
    <Message
      icon={(
        <img src="https://www.svgrepo.com/show/138522/mailbox.svg" alt="Mailbox Icon" className="w-16" />
      )}
      header="Have you heard about our mailing list?"
      description="Get the best news in your e-mail every day."
    />
  )
}
