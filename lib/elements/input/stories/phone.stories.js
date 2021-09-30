import React from "react";

import Input from "../input";

export default {
  title: 'Example/Input Phone',
  component: Input.Phone
}

export const basic = () => (
  <Input.Phone placeholder="Phone number..." />
)