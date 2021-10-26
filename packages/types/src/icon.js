import PropTypes from "prop-types";

import { Height } from "@zenbu-ui/utils";

const Icons = {
  iconSize: PropTypes.oneOf(Height),
  iconPosition: PropTypes.oneOf(["left", "right", "center"]),
}

export {
  Icons
}
