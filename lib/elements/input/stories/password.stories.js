import React from "react";

import Input from "../input";

export default {
  title: 'Example/Input Password',
  component: Input.Password
}

export const basic = () => (
  <Input.Password placeholder="Password..." />
)