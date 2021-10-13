import PropTypes from "prop-types";
import Icon from "../elements/icon/icon";

import { Height } from "../utils/size";

const icon = {
  icon: PropTypes.oneOf(Object.keys(Icon.Index)),
  iconSize: PropTypes.oneOf(Height),
}

export default icon;