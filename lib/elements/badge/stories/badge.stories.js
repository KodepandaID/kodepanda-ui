import React from "react";

import { default as Badge } from "../badge";

export default {
  title: 'Example/Badge',
  component: Badge,
}

export const basic = () => (
  <Badge count={9}>
    <div className="w-16 h-16 bg-gray-400 rounded-sm"></div>
  </Badge>
)

export const overflowCount = () => (
  <div className="flex flex-row">
    <div className="mr-3">
      <Badge count={99}>
        <div className="w-16 h-16 bg-gray-400 rounded-sm"></div>
      </Badge>
    </div>

    <div className="mr-5">
      <Badge count={999} overflowCount={100}>
        <div className="w-16 h-16 bg-gray-400 rounded-sm"></div>
      </Badge>
    </div>

    <div>
      <Badge count={1000} overflowCount={999}>
        <div className="w-16 h-16 bg-gray-400 rounded-sm"></div>
      </Badge>
    </div>
  </div>
)

export const zeroCount = () => (
  <Badge count={0}>
    <div className="w-16 h-16 bg-gray-400 rounded-sm"></div>
  </Badge>
)

export const ping = () => (
  <Badge count={0} ping={true}>
    <div className="w-16 h-16 bg-gray-400 rounded-sm"></div>
  </Badge>
)

export const icon = () => (
  <Badge count={0} icon="bell-solid" ping={true}>
    <div className="w-16 h-16 bg-gray-400 rounded-sm"></div>
  </Badge>
)