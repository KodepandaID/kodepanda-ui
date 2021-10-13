import PropTypes from "prop-types";

const { bool, string, oneOf } = PropTypes;

const attribute = {
  active: bool,
  disabled: bool,
  href: string,
  target: oneOf(["_blank", "_self"])
}

export default attribute;