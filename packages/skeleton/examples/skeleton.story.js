import React from "react";
import { Skeleton } from "../index";

export default {
  title: 'Skeleton',
  component: Skeleton,
};

export const basic = () => (
  <Skeleton />
)

export const width = () => (
  <Skeleton width="1/2" />
)

export const height = () => (
  <Skeleton width="1/2" height={4} />
)

export const rounded = () => (
  <Skeleton rounded="md" width="1/2" height={4} />
)

export const coloring = () => (
  <Skeleton color="blue" colorContrast={200} />
)
