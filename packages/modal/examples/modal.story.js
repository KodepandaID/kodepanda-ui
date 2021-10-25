import React, { useState } from "react";
import { Modal } from "../src";
import { Button } from "../../button/src";

export default {
  title: 'Modal',
  component: Modal,
};

export const basic = () => {
  const [open, setOpen] = useState(false);

  return(
    <div className="w-full">
      <Modal
      title="Delete Project"
      content={(
        <div>
          <b className="font-bold text-black text-md">Are you sure?</b>
          <p className="text-sm text-gray-600">All projects that you delete cannot be restored. Make sure you do not delete the data incorrectly.</p>
        </div>
      )}
      visible={open}
      onClose={() => setOpen(false)}
    />
    <Button onClick={() => setOpen(true)}>Show Modal</Button>
    </div>
  )
}

export const simple= () => {
  const [open, setOpen] = useState(false);

  return(
    <div className="w-full">
      <Modal
      simple
      title="Delete Project"
      content={(
        <div>
          <b className="font-bold text-md">Are you sure?</b>
          <p className="text-sm">All projects that you delete cannot be restored. Make sure you do not delete the data incorrectly.</p>
        </div>
      )}
      visible={open}
      onClose={() => setOpen(false)}
    />
    <Button onClick={() => setOpen(true)}>Show Modal</Button>
    </div>
  )
}

export const closeIconPosition = () => {
  const [open, setOpen] = useState(false);

  return(
    <div className="w-full">
      <Modal
      closeIconPosition="outside"
      title="Delete Project"
      content={(
        <div>
          <b className="font-bold text-black text-md">Are you sure?</b>
          <p className="text-sm text-gray-600">All projects that you delete cannot be restored. Make sure you do not delete the data incorrectly.</p>
        </div>
      )}
      visible={open}
      onClose={() => setOpen(false)}
    />
    <Button onClick={() => setOpen(true)}>Show Modal</Button>
    </div>
  )
}

export const withoutClosable = () => {
  const [open, setOpen] = useState(false);

  return(
    <div className="w-full">
      <Modal
      closable={false}
      title="Delete Project"
      content={(
        <div>
          <b className="font-bold text-black text-md">Are you sure?</b>
          <p className="text-sm text-gray-600">All projects that you delete cannot be restored. Make sure you do not delete the data incorrectly.</p>
        </div>
      )}
      visible={open}
      onClose={() => setOpen(false)}
    />
    <Button onClick={() => setOpen(true)}>Show Modal</Button>
    </div>
  )
}

export const withoutCloseClickOutside = () => {
  const [open, setOpen] = useState(false);

  return(
    <div className="w-full">
      <Modal
      closable={false}
      closeOutside={false}
      title="Delete Project"
      content={(
        <div>
          <b className="font-bold text-black text-md">Are you sure?</b>
          <p className="text-sm text-gray-600">All projects that you delete cannot be restored. Make sure you do not delete the data incorrectly.</p>
        </div>
      )}
      visible={open}
      onClose={() => setOpen(false)}
    />
    <Button onClick={() => setOpen(true)}>Show Modal</Button>
    </div>
  )
}

export const coverImage = () => {
  const [open, setOpen] = useState(false);
  return(
    <div className="w-full">
      <Modal
        closeIconPosition="outside"
        cover="https://kodepanda.com/assets/strawberry-short-cake.jpg"
        content={(
          <div className="mt-1">
            <b className="font-bold text-black text-lg">Strawberry Cake</b>
            <p className="text-sm text-gray-600 mt-3">Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer.</p>
            <Button fluid mt={2}>Order Now</Button>
          </div>
        )}
        visible={open}
        okButton={false}
        onClose={() => setOpen(false)}
      />
      <Button onClick={() => setOpen(true)}>Show Modal</Button>
    </div>
  )
}

export const coverImagePosition = () => {
  const [open, setOpen] = useState(false);
  return(
    <div className="w-full">
      <Modal
        closeIconPosition="outside"
        cover="https://kodepanda.com/assets/strawberry-short-cake.jpg"
        coverPosition="top"
        content={(
          <div className="mt-1">
            <b className="font-bold text-black text-lg">Strawberry Cake</b>
            <p className="text-sm text-gray-600 mt-3">Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer.</p>
            <Button fluid mt={2}>Order Now</Button>
          </div>
        )}
        visible={open}
        okButton={false}
        onClose={() => setOpen(false)}
      />
      <Button onClick={() => setOpen(true)}>Show Modal</Button>
    </div>
  )
}

export const backgroundImage = () => {
  const [open, setOpen] = useState(false);

  return(
    <div className="w-full">
      <Modal
      size="lg"
      bgImage="https://kodepanda.com/assets/strawberry-short-cake.jpg"
      bgImageOverlay
      content={(
        <div className="flex flex-wrap justify-center mt-5">
          <b className="font-bold text-white text-2xl">Strawberry Cake</b>
          <p className="text-md text-white text-center mt-3">Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer.</p>
          <Button fluid mt={2}>Order Now</Button>
        </div>
      )}
      visible={open}
      okButton={false}
      closeIconColor="white"
      onClose={() => setOpen(false)}
    />
    <Button onClick={() => setOpen(true)}>Show Modal</Button>
    </div>
  )
}

export const titleBgColor = () => {
  const [open, setOpen] = useState(false);

  return(
    <div className="w-full">
      <Modal
      title="Delete Project"
      titleBgColor="blue"
      titleBgColorContrast={600}
      titleColor="white"
      closeIconColor="white"
      content={(
        <div>
          <b className="font-bold text-black text-md">Are you sure?</b>
          <p className="text-sm text-gray-600">All projects that you delete cannot be restored. Make sure you do not delete the data incorrectly.</p>
        </div>
      )}
      visible={open}
      onClose={() => setOpen(false)}
    />
    <Button onClick={() => setOpen(true)}>Show Modal</Button>
    </div>
  )
}
