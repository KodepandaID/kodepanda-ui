import PropTypes from "prop-types";

import { Palletes, Contrast } from "../utils/color";

const { oneOf } = PropTypes;

const color = {
  color: oneOf(Palletes),
  colorContrast: oneOf(Contrast),
  colorHover: oneOf(Palletes),
  colorHoverContrast: oneOf(Contrast),
  colorActive: oneOf(Palletes),
  colorActiveContrast: oneOf(Contrast),
  bgColor: oneOf(Palletes),
  bgColorContrast: oneOf(Contrast),
  bgColorHover: oneOf(Palletes),
  bgColorHoverContrast: oneOf(Contrast),
  textColor: oneOf(Palletes),
  textColorContrast: oneOf(Contrast),
  textColorHover: oneOf(Palletes),
  textColorHoverContrast: oneOf(Contrast),
  textColorActive: oneOf(Palletes),
  textColorActiveContrast: oneOf(Contrast),
  borderColor: oneOf(Palletes),
  borderColorContrast: oneOf(Contrast),
  borderColorHover: oneOf(Palletes),
  borderColorHoverContrast: oneOf(Contrast),
  borderColorActive: PropTypes.oneOf(Palletes),
  borderColorActiveContrast: PropTypes.oneOf(Contrast),
  placeholderColor: oneOf(Palletes),
  placeholderColorContrast: oneOf(Contrast),
  responsiveColor: oneOf(Palletes),
  responsiveColorContrast: oneOf(Contrast),
  responsiveColorHover: oneOf(Palletes),
  responsiveColorHoverContrast: oneOf(Contrast),
  responsiveTextColor: oneOf(Palletes),
  responsiveTextColorContrast: oneOf(Contrast),
  responsiveTextColorHover: oneOf(Palletes),
  responsiveTextColorHoverContrast: oneOf(Contrast),
  responsiveIconColor: oneOf(Palletes),
  responsiveIconColorContrast: oneOf(Contrast),
}

export default color;