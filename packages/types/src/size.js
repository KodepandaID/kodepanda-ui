import PropTypes from "prop-types";

import { Width, Height } from "@zenbu-ui/utils";

const Sizes = {
  width: PropTypes.oneOf(Width),
  height: PropTypes.oneOf(Height),
  widthSM: PropTypes.oneOf(Width),
  widthMD: PropTypes.oneOf(Width),
  widthLG: PropTypes.oneOf(Width),
  widthXL: PropTypes.oneOf(Width),
  width2XL: PropTypes.oneOf(Width),
  heightSM: PropTypes.oneOf(Height),
  heightMD: PropTypes.oneOf(Height),
  heightLG: PropTypes.oneOf(Height),
  heightXL: PropTypes.oneOf(Height),
  height2XL: PropTypes.oneOf(Height),
  responsiveIconSize: PropTypes.oneOf(Height),
  listWidth: PropTypes.oneOf(Width),
}

export {
  Sizes
}
