import PropTypes from "prop-types";
import Icon from "../elements/icon/icon";

import { Height } from "../utils/size";

const { oneOf } = PropTypes

const icon = {
  icon: oneOf(Object.keys(Icon.Index)),
  iconSize: oneOf(Height),
  iconPosition: oneOf(["left", "right", "center"]),
  dividerIcon: oneOf(Object.keys(Icon.Index)),
  lastDividerIcon: oneOf(Object.keys(Icon.Index)),
  iconAction: oneOf(Object.keys(Icon.Index)),
}

export default icon;