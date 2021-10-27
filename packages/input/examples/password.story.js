import React from "react";
import { Input } from "../index";

export default {
  title: 'Input Password',
  component: Input.Password
};

export const basic = () => (
  <Input.Password placeholder="Password..." />
)
