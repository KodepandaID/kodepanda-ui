import React from "react";

import Input from "../input";
import "../../../style.css"; 

export default {
  title: 'Example/Input Radio',
  component: Input.Radio
}

export const basic = () => (
  <Input.Radio.Group defaultValue="B" onChange={(e) => console.log(e)}>
    <Input.Radio name="alphabet" value="A">A</Input.Radio>
    <Input.Radio name="alphabet" value="B" color="red">B</Input.Radio>
    <Input.Radio name="alphabet" value="C" color="green">C</Input.Radio>
  </Input.Radio.Group>
)
