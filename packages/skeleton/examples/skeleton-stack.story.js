import React from "react";
import { Skeleton } from "../index";

export default {
  title: 'Skeleton Stack',
  component: Skeleton.Stack,
};

export const basic = () => (
  <Skeleton.Stack total={3} />
)

export const custom = () => (
  <Skeleton.Stack>
    <Skeleton width="1/2" />
    <Skeleton />
    <Skeleton />
  </Skeleton.Stack>
)
