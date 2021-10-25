import React from "react";
import { Input } from "../src";

export default {
  title: 'Input Password',
  component: Input.Password
};

export const basic = () => (
  <Input.Password placeholder="Password..." />
)
