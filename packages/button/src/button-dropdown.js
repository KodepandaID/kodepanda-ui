import React, { useEffect, useState, useRef } from "react";
import cx from "clsx";
import PropTypes from "prop-types";

import { Dropdown } from "@zenbu-ui/dropdown";

const ButtonDropdown = ({ children }) => {
  const node = useRef();

  const [mounted, setMounted] = useState(false);
  const [button, setButton] = useState(null);
  const [dropdown, setDropdown] = useState(null);
  const [open, setOpen] = useState(false);

  const handleClickOutside = (e) => {
    if (node.current.contains(e.target)) {
      return;
    }
    setOpen(false);
  }

  useEffect(() => {
    if (!mounted) {
      if (children.length === undefined) {
        throw new Error("You can't render this component, you should use two elements, button and dropdown")
      } else if (children.length !== undefined) {
        children.map((el) => {
          if (el.type.name === "Button") setButton(el)
          else if (el.type.name === "Dropdown") setDropdown(el)
        })
        setMounted(true)
      }
    }

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [children, open])

  const wrapperClasses = cx(
    "flex-initial",
    "overflow-hidden"
  )

  return(
    mounted && (
      <div ref={node} className={wrapperClasses} onClick={() => setOpen(!open)}>
        {button}
        {open && (<Dropdown {...dropdown.props} visible={open} />)}    
      </div>
    )
  )
}

ButtonDropdown.propTypes ={
  children: PropTypes.node,
}

export {
  ButtonDropdown
}
