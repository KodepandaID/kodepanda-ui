import React from "react";

import Input from "../input";
import "../../../style.css"; 

export default {
  title: 'Example/Input TextArea',
  component: Input.TextArea
}

export const basic = () => (
  <>
    <Input.TextArea placeholder="Write anything you want here..." size="xs" />
    <Input.TextArea placeholder="Write anything you want here..." size="sm" />
    <Input.TextArea placeholder="Write anything you want here..." size="md" />
    <Input.TextArea placeholder="Write anything you want here..." size="lg" />
    <Input.TextArea placeholder="Write anything you want here..." size="xl" />
  </>
)
