import PropTypes from "prop-types";

import { Width, Height } from "../utils/size";

const { oneOf } = PropTypes;

const size = {
  width: oneOf(Width),
  height: oneOf(Height),
  widthSM: oneOf(Width),
  widthMD: oneOf(Width),
  widthLG: oneOf(Width),
  widthXL: oneOf(Width),
  width2XL: oneOf(Width),
  heightSM: oneOf(Height),
  heightMD: oneOf(Height),
  heightLG: oneOf(Height),
  heightXL: oneOf(Height),
  height2XL: oneOf(Height),
  responsiveIconSize: oneOf(Height),
}

export default size;