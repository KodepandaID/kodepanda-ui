import PropTypes from "prop-types";

import { FontSize, FontWeight } from "@zenbu-ui/utils";

const Texts = {
  textSize: PropTypes.oneOf(Object.keys(FontSize)),
  textWeight: PropTypes.oneOf(Object.keys(FontWeight)),
  textAlign: PropTypes.oneOf(["left", "center", "right", "justify"]),
  labelSize: PropTypes.oneOf(Object.keys(FontSize)),
  labelPosition: PropTypes.oneOf(["outside", "inside"]),
}

export {
  Texts
}
