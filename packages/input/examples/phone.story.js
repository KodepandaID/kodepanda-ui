import React from "react";
import { Input } from "../index";

export default {
  title: 'Input Phone',
  component: Input.Phone
};

export const basic = () => (
  <Input.Phone placeholder="Phone number..." />
)
