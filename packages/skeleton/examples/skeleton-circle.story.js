import React from "react";
import { Skeleton } from "../src";

export default {
  title: 'Skeleton Circle',
  component: Skeleton.Circle,
};

export const basic = () => (
  <Skeleton.Circle />
)

export const size = () => (
  <Skeleton.Circle size={24} />
)
