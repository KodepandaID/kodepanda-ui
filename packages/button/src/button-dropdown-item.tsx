import { base, ColorProps, element, SpacingProps, StandardProps, text, arrowNavigation, VisualTextProps, Size } from "@zenbu-ui/core"
import { Icon, Outline, Solid } from "@zenbu-ui/icon"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@zenbu-ui/react-id"
import { AnimatePresence, motion } from "framer-motion"
import * as React from "react"
import { useDropdownContext } from "."
import { ButtonDropdownHorizontal } from "./button-dropdown-horizontal"

export interface ButtonDropdownItemProps extends StandardProps, ColorProps, VisualTextProps, SpacingProps {
  disabled?: boolean,
  focus?: boolean,
  icon?: Outline | Solid,
  iconHeight?: Size,
  onClick?: () => void
}

export const ButtonDropdownItem: React.FC<ButtonDropdownItemProps> = (props) => {
  const { dark } = React.useContext(ThemeCtx)
  const dropdown = useDropdownContext

  const [positionHorizontal, setPositionHorizontal] = React.useState(0)
  const [hasHorizontal, setHasHorizontal] = React.useState(false)
  const [expand, setExpand] = React.useState(false)
  const [expandArrowRight, setExpandArrowRight] = React.useState(false)
  const node = React.useRef<HTMLDivElement>(null)
  const nodeDropdown = React.useRef<HTMLDivElement>(null)
  const idMenu = useId("menudropdown-horizontal")

  const cls = base({
    flexbox: {
      flex: true,
      alignItems: "center",
      justify: "between"
    },
    visual: {
      dark: dark,
      bgHoverColor: props.colorHover !== undefined ? props.colorHover : dropdown.dropdownBgHoverColor,
      bgHoverColorContrast: props.colorHoverContrast !== undefined ? props.colorHoverContrast : dropdown.dropdownBgHoverColorContrast,
      darkBgHoverColor: props.darkColorHover !== undefined ? props.darkColorHover : dropdown.darkDropdownBgHoverColor,
      darkBgHoverColorContrast: props.darkColorHoverContrast !== undefined ? props.darkColorHoverContrast : dropdown.darkDropdownBgHoverColorContrast,
      borderRadius: dropdown.dropdownRounded
    },
    misc: {
      opacity: props.disabled ? "25" : undefined,
      userSelect: "none"
    },
    spacing: {
      px: "3",
      py: "0.5",
      mb: "1"
    }
  })

  const clsElm = element({
    focus: {
      dark: dark,
      focusColor: props.colorHover !== undefined ? props.colorHover : dropdown.dropdownBgHoverColor,
      focusColorContrast: props.colorHoverContrast !== undefined ? props.colorHoverContrast : dropdown.dropdownBgHoverColorContrast,
      focusDarkColor: props.darkColorHover !== undefined ? props.darkColorHover : dropdown.darkDropdownBgHoverColor,
      focusDarkColorContrast: props.darkColorHoverContrast !== undefined ? props.darkColorHoverContrast : dropdown.darkDropdownBgHoverColorContrast,
      focusTextColor: props.textColorHover !== undefined ? props.textColorHover : dropdown.dropdownTextHoverColor,
      focusTextColorContrast: props.textColorHoverContrast !== undefined ? props.textColorHoverContrast : dropdown.dropdownTextHoverColorContrast,
      focusDarkTextColor: props.darkTextColorHover !== undefined ? props.darkTextColorHover : dropdown.dropdownTextHoverColor,
      focusDarkTextColorContrast: props.darkTextColorHoverContrast !== undefined ? props.darkTextColorHoverContrast : dropdown.darkTextColorHoverContrast
    }
  })

  const clsText = text({
    visualText: {
      dark: dark,
      fontSize: props.fontSize !== undefined ? props.fontSize : dropdown.dropdownFontSize,
      textColor: props.textColor !== undefined ? props.textColor : dropdown.dropdownTextColor,
      textColorContrast: props.textColorContrast !== undefined ? props.textColorContrast : dropdown.dropdownTextColorContrast,
      darkTextColor: props.darkTextColor !== undefined ? props.darkTextColor : dropdown.darkDropdownTextColor,
      darkTextColorContrast: props.darkTextColorContrast !== undefined ? props.darkTextColorContrast : dropdown.darkDropdownTextColorContrast,
      textHoverColor: props.textColorHover !== undefined ? props.textColorHover : dropdown.dropdownTextHoverColor,
      textHoverColorContrast: props.textColorHoverContrast !== undefined ? props.textColorHoverContrast : dropdown.dropdownTextHoverColorContrast,
      darkTextHoverColor: props.darkTextColorHover !== undefined ? props.darkTextColorHover : dropdown.dropdownTextHoverColor,
      darkTextHoverColorContrast: props.darkTextColorHoverContrast !== undefined ? props.darkTextColorHoverContrast : dropdown.darkTextColorHoverContrast
    }
  })

  const clsDropdown = base({
    model: {
      overflow: "hidden"
    },
    visual: {
      dark: dark,
      bgColor: dropdown.dropdownBgColor,
      bgColorContrast: dropdown.dropdownBgColorContrast,
      darkBgColor: dropdown.darkDropdownBgColor,
      darkBgColorContrast: dropdown.darkBgColorContrast,
      borderWidth: dropdown.dropdownBorder ? "normal" : undefined,
      borderStyle: dropdown.dropdownBorder ? "solid" : undefined,
      borderColor: dropdown.dropdownBorder ? dropdown.dropdownBorderColor : undefined,
      borderColorContrast: dropdown.dropdownBorder ? dropdown.dropdownBorderColorContrast : undefined,
      borderRadius: dropdown.dropdownRounded,
      shadow: dropdown.dropdownShadow
    },
    misc: {
      cursor: "pointer",
      userSelect: "none"
    },
    spacing: {
      px: "0.5",
      py: "0.5"
    }
  })

  const clsDropdownWrapper = base({
    model: {
      width: "max"
    },
    positioning: {
      position: "absolute",
      left: "full"
    },
    misc: {
      cursor: "pointer",
      userSelect: "none"
    },
    spacing: {
      ml: "-1.5"
    }
  })

  const DropdownMenu = () => {
    return(
      <AnimatePresence initial={false}>
        <motion.div
        key={idMenu}
        ref={nodeDropdown}
        className={clsDropdownWrapper}
        style={{
          marginTop: `${positionHorizontal}px`
        }}
        initial={{opacity: 0}}
        animate={{scale: 1, opacity: 1, transition: {
          duration: 0.5,
          ease: [0, 0.2, 0.4, 1]
        }}}
        exit={{opacity: 0, scale: 0.95, transition: {
          duration: 0.1,
          ease: [0.4, 0, 1, 1]
        }}}
        >
          {React.Children.map(props.children, (elm, idx) => {
            const e = elm as React.ReactElement<any>
            if (e.type === ButtonDropdownHorizontal) {
              return(
                <ButtonDropdownHorizontal
                id={`${idMenu}`}
                key={`${idMenu}-${idx}`}
                className={clsDropdown}
                {...e.props} />
              )
            }
          })}
        </motion.div>
      </AnimatePresence>
    )
  }

  React.useEffect(() => {
    if (node.current !== null) {
      setPositionHorizontal(node.current.clientHeight + 30)
    }

    if (nodeDropdown.current !== null && expandArrowRight) {
      document.getElementById(`${idMenu}-1`)?.focus()
    }

    if (nodeDropdown.current === null && expandArrowRight) setExpandArrowRight(false)

    React.Children.map(props.children, (elm) => {
      const e = elm as React.ReactElement<any>
      if (e.type === ButtonDropdownHorizontal) setHasHorizontal(true)
    })
  }, [nodeDropdown, expand, expandArrowRight, idMenu, props.children])

  return(
    // eslint-disable-next-line jsx-a11y/mouse-events-have-key-events
    <div
    id={props.id}
    ref={node}
    className={[
      cls,
      "focus:outline-none",
      clsElm,
      clsText,
      props.disabled ? "pointer-events-none" : ""].join(" ").trim()}
    tabIndex={-1}
    role="menuitem"
    data-disabled={props.disabled ? "true" : undefined}
    onClick={() => {
      if (props.onClick !== undefined && !props.disabled) props.onClick()
    }}
    onKeyDown={(e) => arrowNavigation(e, expand ? idMenu : props.id, (code) => {
      if (code === "ArrowRight" && hasHorizontal && !expand) {
        setExpand(true)
        setExpandArrowRight(true)
      } else if (code === "ArrowLeft" && expand) {
        if (props.id !== undefined) document.getElementById(props.id)?.focus()
        setExpand(false)
        setExpandArrowRight(false)
      }
    })}
    onMouseOver={() => {
      if (hasHorizontal) setExpand(true)
    }}
    onMouseLeave={() => {
      if (hasHorizontal) setExpand(false)
    }}>
      {React.Children.map(props.children, (elm: React.ReactNode) => {
        const e = elm as React.ReactElement<any>
        if (e.type !== ButtonDropdownHorizontal) {
          return(
            <>
              {elm}

              {hasHorizontal && (
                <div className="ml-auto pl-5">
                  <Icon icon="chevron-right-solid" height={dropdown.dropdownIconHeight !== undefined ? dropdown.dropdownIconHeight : props.iconHeight} />
                </div>
              )}

              {props.icon !== undefined && (
                <div className="ml-auto pl-5">
                  <Icon icon={props.icon} height={dropdown.dropdownIconHeight !== undefined ? dropdown.dropdownIconHeight : props.iconHeight} />
                </div>
              )}
            </>
          )
        }
      })}

      {expand && (<DropdownMenu />)}
    </div>
  )
}

ButtonDropdownItem.defaultProps = {
  disabled: false,
  iconHeight: "3"
}
