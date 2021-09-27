import React, { useState } from "react";
import PropTypes from "prop-types";

import Input from "./input";
import Icon from "../icon/icon";

import { Palletes, Contrast } from "../../utils/color";
import { BorderSize, BorderType, BorderPosition} from "../../utils/border";
import { RoundedSize, RoundedPosition } from "../../utils/rounded";
import { Width } from "../../utils/size";
import { ShadowSize } from "../../utils/shadow";
import { FontSize } from "../../utils/font";

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
  width: PropTypes.oneOf(Width),
  rounded: PropTypes.oneOf(Object.keys(RoundedSize)),
  roundedPosition: PropTypes.oneOf(Object.keys(RoundedPosition)),
  fluid: PropTypes.bool,
  color: PropTypes.oneOf(Palletes),
  colorContrast: PropTypes.oneOf(Contrast),
  textSize: PropTypes.oneOf(Object.keys(FontSize)),
  textColor: PropTypes.oneOf(Palletes),
  textColorContrast: PropTypes.oneOf(Contrast),
  placeholderColor: PropTypes.oneOf(Palletes),
  placeholderColorContrast: PropTypes.oneOf(Contrast),
  labelColor: PropTypes.oneOf(Palletes),
  labelColorContrast: PropTypes.oneOf(Contrast),
  labelSize: PropTypes.oneOf(Object.keys(FontSize)),
  labelPosition: PropTypes.oneOf(["outside", "inside"]),
  border: PropTypes.bool,
  borderStyle: PropTypes.oneOf(Object.keys(BorderType)),
  borderSize: PropTypes.oneOf(Object.keys(BorderSize)),
  borderColor: PropTypes.oneOf(Palletes),
  borderColorContrast: PropTypes.oneOf(Contrast),
  borderPosition: PropTypes.oneOf(Object.keys(BorderPosition)),
  focus: PropTypes.bool,
  focusBorderSize: PropTypes.oneOf(Object.keys(BorderSize)),
  focusBorderColor: PropTypes.oneOf(Palletes),
  focusBorderColorContrast: PropTypes.oneOf(Contrast),
  disabled: PropTypes.bool,
  value: PropTypes.any,
  defaultValue: PropTypes.any,
  shadow: PropTypes.oneOf(Object.keys(ShadowSize)),
  icon: PropTypes.oneOf(Object.keys(Icon.Index)),
  iconPosition: PropTypes.oneOf(["left", "right"]),
  iconColor: PropTypes.oneOf(Palletes),
  iconColorContrast: PropTypes.oneOf(Contrast),
  success: PropTypes.bool,
  successMessage: PropTypes.string,
  error: PropTypes.bool,
  errorMessage: PropTypes.string,
  onChange: PropTypes.func,
  iconActionColor: "gray",
  iconActionColorContrast: 400,
  iconActionColorHover: "gray",
  iconActionColorHoverContrast: 700,
  mt: PropTypes.number,
  mb: PropTypes.number,
  ml: PropTypes.number,
  mr: PropTypes.number,
  px: PropTypes.number,
  py: PropTypes.number,
  pb: PropTypes.number,
  pl: PropTypes.number,
  pr: PropTypes.number,
  pt: PropTypes.number,
}

export default Password;