import React from "react";

import Rating from "../rating";

export default {
  title: 'Example/Rating',
  component: Rating,
}

export const basic = () => (
  <Rating count={5} />
)

export const defaultValue = () => (
  <Rating defaultValue={3} count={5} />
)

export const size = () => (
  <>
    <Rating count={5} size="xs" mb={3} />
    <Rating count={5} size="sm" mb={3} />
    <Rating count={5} size="md" mb={3} />
    <Rating count={5} size="lg" mb={3} />
  </>
)

export const coloring = () => (
  <Rating count={5} color="red" />
)

export const heart = () => (
  <Rating defaultValue={3} count={5} heart />
)