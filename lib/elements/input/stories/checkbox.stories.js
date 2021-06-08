import React from "react";

import { default as Input } from "../input";
import "../../../style.css"; 

export default {
  title: 'Example/Input Checkbox',
  component: Input.Checkbox
}

export const basic = () => (
  <>
    <Input.Checkbox checked>I agree to the Terms and Conditions</Input.Checkbox>
    <Input.Checkbox checked color="red">I agree to the Terms and Conditions</Input.Checkbox>
    <Input.Checkbox checked color="green">I agree to the Terms and Conditions</Input.Checkbox>
    <Input.Checkbox checked color="yellow">I agree to the Terms and Conditions</Input.Checkbox>
  </>
)
