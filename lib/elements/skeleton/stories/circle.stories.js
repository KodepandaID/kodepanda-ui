import React from "react";

import Skeleton from "../skeleton";

export default {
  title: 'Example/Skeleton Circle',
  component: Skeleton.Circle,
}

export const basic = () => (
  <Skeleton.Circle />
)

export const size = () => (
  <Skeleton.Circle size={24} />
)