import PropTypes from "prop-types";

const Attributes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  href: PropTypes.string,
  target: PropTypes.oneOf(["_blank", "_self"])
}

export {
  Attributes
}