import React, { useState } from "react";
import PropTypes from "prop-types";
import { border, color, icons, size, spacing, text } from "../../types"; 

import Input from "./input";

const Password = (props) => {
  const [show, setShow] = useState(false);

  return(
    <Input {...props} type={show ? "text" : "password"}
    iconAction={show ? "eye-off" : "eye"} iconActionClick={() => setShow(!show)} />
  )
}

Password.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.node,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  fluid: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  success: PropTypes.bool,
  successMessage: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
  ...size,
  ...border,
  ...color,
  ...text,
  ...icons,
  ...spacing
}

export default Password;