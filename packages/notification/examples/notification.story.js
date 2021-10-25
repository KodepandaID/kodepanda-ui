import React, { useState } from "react";
import { Notification } from "../src";
import { Button } from "../../button/src";

export default {
  title: 'Notification',
  component: Notification,
};

export const basic = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false)
  return(
    <div className="w-full h-screen bg-gray-500 px-4 py-4">
      <div className="flex flex-col w-56">
        <Button onClick={() => setOpen(true)} mb={2}>Show Notification</Button>
        <Button onClick={() => setOpen2(true)}>Show Notification 2</Button>
      </div>
      <Notification
        visible={open}
        title="Notification Title was Here"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        onClose={() => setOpen(false)} />


      <Notification
        visible={open2}
        title="Notification Title was Here2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        onClose={() => setOpen2(false)} />
    </div>
  )
}

export const coloring = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false)
  return(
    <div className="w-full h-screen bg-gray-500 px-4 py-4">
      <div className="flex flex-col w-56">
        <Button onClick={() => setOpen(true)} mb={2}>Red</Button>
        <Button onClick={() => setOpen2(true)}>Blue</Button>
      </div>
      <Notification
        color="red"
        colorContrast={600}
        titleColor="white"
        descriptionColor="white"
        closeIconColor="white"
        visible={open}
        title="Notification Title was Here"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        onClose={() => setOpen(false)} />


      <Notification
        color="blue"
        colorContrast={600}
        titleColor="white"
        descriptionColor="white"
        closeIconColor="white"
        visible={open2}
        title="Notification Title was Here2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        onClose={() => setOpen2(false)} />
    </div>
  )
}

export const icon = () => {
  const [open, setOpen] = useState(false);

  return(
    <div className="w-full h-screen bg-gray-500 px-4 py-4">
      <Button onClick={() => setOpen(true)}>Show Notification</Button>
      <Notification
        icon="speakerphone"
        visible={open}
        title="Notification Title was Here"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        onClose={() => setOpen(false)} />
    </div>
  )
}

export const iconBackground = () => {
  const [open, setOpen] = useState(false);

  return(
    <div className="w-full h-screen bg-gray-500 px-4 py-4">
      <Button onClick={() => setOpen(true)}>Show Notification</Button>
      <Notification
        icon="speakerphone"
        iconColor="white"
        iconBackgroundColor="red"
        iconBackgroundColorContrast={600}
        visible={open}
        title="Notification Title was Here"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        onClose={() => setOpen(false)} />
    </div>
  )
}

export const duration = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  return(
    <div className="w-full h-screen bg-gray-500 px-4 py-4">
      <div className="flex flex-col w-56">
        <Button onClick={() => setOpen(true)} mb={2}>Show Notification</Button>
        <Button onClick={() => setOpen2(true)}>Show Notification 2</Button>
      </div>
      <Notification
        duration={3000}
        visible={open}
        title="Notification Title was Here"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        onClose={() => setOpen(false)} />


      <Notification
        duration={6000}
        visible={open2}
        title="Notification Title was Here2"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        onClose={() => setOpen2(false)} />
    </div>
  )
}
