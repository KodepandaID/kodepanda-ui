import PropTypes from "prop-types";

import { BorderSize, BorderSizeNum, BorderPosition, BorderType } from "../utils/border";
import { RoundedSize, RoundedPosition } from "../utils/rounded";

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
}

export default border;