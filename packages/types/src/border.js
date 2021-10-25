import PropTypes from "prop-types";

import { 
  BorderSize, BorderSizeNum, BorderPosition, BorderType,
  Rotate,
  RoundedSize, RoundedPosition,
  ShadowSize
} from "@kodepanda-ui/utils";

const Borders = {
  border: PropTypes.bool,
  borderSize: PropTypes.oneOf(Object.keys(BorderSize)),
  borderPosition: PropTypes.oneOf(Object.keys(BorderPosition)),
  borderStyle: PropTypes.oneOf(Object.keys(BorderType)),
  rounded: PropTypes.oneOf(Object.keys(RoundedSize)),
  roundedPosition: PropTypes.oneOf(Object.keys(RoundedPosition)),
  borderActiveSize: PropTypes.oneOf(Object.keys(BorderSizeNum)),
  borderHoverSize: PropTypes.oneOf(Object.keys(BorderSizeNum)),
  focus: PropTypes.bool,
  focusBorderSize: PropTypes.oneOf(Object.keys(BorderSize)),
  rotate: PropTypes.oneOf(Object.keys(Rotate)),
  shadow: PropTypes.oneOf(Object.keys(ShadowSize))
}

export {
  Borders
}