import PropTypes from "prop-types";

import { FontSize, FontWeight } from "../utils/font";

const { oneOf } = PropTypes;

const text = {
  textSize: oneOf(Object.keys(FontSize)),
  textWeight: oneOf(Object.keys(FontWeight)),
}

export default text;