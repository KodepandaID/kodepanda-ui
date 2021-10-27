import React from "react";
import { Popover } from "../index";
import { Button } from "../../button";

export default {
  title: 'Popover',
  component: Popover,
};

export const basic = () => (
  <div className="fixed w-screen h-screen bg-gray-700 flex items-center justify-center content-center">
    <div className="text-white mt-72 mr-6">
      <Popover
      title="Strawberry Cake"
      description="Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer."
      cover="https://kodepanda.com/assets/strawberry-short-cake.jpg"
      footer={(
        <Button size="sm" fluid>ORDER</Button>
      )}
      >
        Move your cursor here...
      </Popover>
    </div>
  </div>
)

export const position = () => (
  <div className="fixed w-screen h-screen bg-gray-700 flex flex-row">
    <div className="text-white mt-72 mr-6">
      <Popover
      title="Strawberry Cake"
      description="Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer."
      cover="https://kodepanda.com/assets/strawberry-short-cake.jpg"
      footer={(
        <Button size="sm" fluid>ORDER</Button>
      )}
      position="top"
      >
        Move your cursor here...
      </Popover>
    </div>

    <div className="text-white mt-72 mr-6">
      <Popover
      title="Strawberry Cake"
      description="Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer."
      cover="https://kodepanda.com/assets/strawberry-short-cake.jpg"
      footer={(
        <Button size="sm" fluid>ORDER</Button>
      )}
      position="bottom"
      >
        Move your cursor here...
      </Popover>
    </div>

    <div className="text-white mt-72">
      <Popover
      title="Strawberry Cake"
      description="Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer."
      cover="https://kodepanda.com/assets/strawberry-short-cake.jpg"
      footer={(
        <Button size="sm" fluid>ORDER</Button>
      )}
      position="left"
      >
        Move your cursor here...
      </Popover>
    </div>

    <div className="text-white mt-72">
      <Popover
      title="Strawberry Cake"
      description="Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer."
      cover="https://kodepanda.com/assets/strawberry-short-cake.jpg"
      footer={(
        <Button size="sm" fluid>ORDER</Button>
      )}
      position="right"
      >
        Move your cursor here...
      </Popover>
    </div>
  </div>
)

export const withoutTriangle = () => (
  <div className="fixed w-screen h-screen bg-gray-700 flex items-center justify-center content-center">
    <div className="text-white mt-72">
      <Popover
      title="Strawberry Cake"
      description="Three layer strawberry dessert is not only beautiful looking, but also delicious! Perfect dessert for spring and summer."
      cover="https://kodepanda.com/assets/strawberry-short-cake.jpg"
      footer={(
        <Button size="sm" fluid>ORDER</Button>
      )}
      triangle={false}
      >
        Move your cursor here...
      </Popover>
    </div>
  </div>
)
