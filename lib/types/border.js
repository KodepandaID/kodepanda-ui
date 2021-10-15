import PropTypes from "prop-types";

import { BorderSize, BorderSizeNum, BorderPosition, BorderType } from "../utils/border";
import { RoundedSize, RoundedPosition } from "../utils/rounded";
import { ShadowSize } from "../utils/shadow";
import { Rotate } from "../utils/rotate";

const { bool, oneOf } = PropTypes;

const border = {
  border: bool,
  borderSize: oneOf(Object.keys(BorderSize)),
  borderPosition: oneOf(Object.keys(BorderPosition)),
  borderStyle: oneOf(Object.keys(BorderType)),
  rounded: oneOf(Object.keys(RoundedSize)),
  roundedPosition: oneOf(Object.keys(RoundedPosition)),
  borderActiveSize: oneOf(Object.keys(BorderSizeNum)),
  borderHoverSize: oneOf(Object.keys(BorderSizeNum)),
  focus: bool,
  focusBorderSize: oneOf(Object.keys(BorderSize)),
  rotate:oneOf(Object.keys(Rotate)),
  shadow: oneOf(Object.keys(ShadowSize))
}

export default border;