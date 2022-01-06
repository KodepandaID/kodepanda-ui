// Following the listbox guideline WAI-ARIA 1.2
// https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox-collapsible.html

import { AriaProps, arrowNavigation, base, BorderWidth, Color, ColorContrast, coloring, ColorProps, element, ModelProps, ResponsiveProps, SpacingProps, StandardProps, text, useEscKeyboardEvent, useOnClickOutside, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { Icon } from "@zenbu-ui/icon"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@zenbu-ui/react-id"
import { motion, AnimatePresence } from "framer-motion"
import * as React from "react"

interface SelectData {
  key: string,
  value: any,
  text: React.ReactNode
}

export interface SelectProps extends AriaProps, StandardProps, ModelProps, ResponsiveProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {
  value?: any,
  data: Array<SelectData>,
  search?: boolean,
  disabled?: boolean,
  required?: boolean,
  fluid?: boolean,
  label?: React.ReactNode,
  labelPosition?: "left" | "top" | "inside",
  name: string,
  placeholder?: string,
  placeholderColor?: Color,
  placeholderColorContrast?: ColorContrast,
  borderFocusWidth?: BorderWidth,
  borderFocusColor?: Color,
  borderFocusColorContrast?: ColorContrast,
  dropdownItemColorHover?: Color,
  dropdownItemColorHoverContrast?: ColorContrast,
  darkDropdownItemColorHover?: Color,
  darkDropdownItemColorHoverContrast?: ColorContrast,
  dropdownTextColor?: Color,
  dropdownTextColorContrast?: ColorContrast,
  darkDropdownTextColor?: Color,
  darkDropdownTextColorContrast?: ColorContrast,
  dropdownTextColorHover?: Color,
  dropdownTextColorHoverContrast?: ColorContrast,
  darkDropdownTextColorHover?: Color,
  darkDropdownTextColorHoverContrast?: ColorContrast,
  onChange?: (value: string) => void
}

export const Select: React.FC<SelectProps> = (props) => {
  const { dark } = React.useContext(ThemeCtx)
  const nodeWrapper = React.useRef<HTMLDivElement>(null)
  const nodeInput = React.useRef<HTMLInputElement>(null)
  const id = useId("input-select")
  const idDropdown = useId("select-dropdown")

  const [value, setValue] = React.useState<any>(props.value !== undefined ? props.value : "")
  const [expand, setExpand] = React.useState<boolean>(false)
  const [expandWithEnter, setExpandWithEnter] = React.useState<boolean>(false)
  const [expandData, setExpandData] = React.useState(props.data)

  const clsWrapper = base({
    model: {
      width: props.fluid ? "full" : props.width
    },
    responsive: {
      sm: props.sm,
      md: props.md,
      lg: props.lg,
      xl: props.xl,
      "2xl": props["2xl"]
    },
    positioning: {
      position: "relative"
    },
    spacing: {
      mx: props.mx,
      my: props.my,
      mb: props.mb,
      ml: props.ml,
      mr: props.mr,
      mt: props.mt
    }
  })

  const cls = base({
    model: {
      display: "block",
      width: props.fluid ? "full" : props.width,
    },
    positioning: {
      position: "relative"
    },
    responsive: {
      sm: props.sm,
      md: props.md,
      lg: props.lg,
      xl: props.xl,
      "2xl": props["2xl"]
    },
    visual: {
      dark: dark,
      bgColor: props.color,
      bgColorContrast: props.colorContrast,
      darkBgColor: props.darkColor,
      darkBgColorContrast: props.darkColorContrast,
      borderWidth: props.border ? props.borderWidth : undefined,
      borderStyle: props.border ? props.borderStyle : undefined,
      borderColor: props.border ? props.borderColor : undefined,
      borderColorContrast: props.border ? props.borderColorContrast : undefined,
      borderPosition: props.borderPosition,
      borderRadius: props.rounded,
      shadow: props.shadow,
      shadowColor: props.shadow !== undefined ? props.shadowColor : undefined,
      shadowColorContrast: props.shadow !== undefined ? props.shadowColorContrast : undefined,
      shadowOpacity: props.shadow !== undefined ? props.shadowOpacity : undefined,
      darkShadowColor: props.shadow !== undefined ? props.darkShadowColor : undefined,
      darkShadowColorContrast: props.shadow !== undefined ? props.darkShadowColorContrast : undefined,
      darkShadowOpacity: props.shadow !== undefined ? props.darkShadowOpacity : undefined,
    },
    misc: {
      opacity: props.disabled ? "50" : undefined
    },
    spacing: {
      px: props.px,
      py: props.py,
      pb: props.pb,
      pl: props.pl,
      pr: props.search ? "12" : props.pr,
      pt: props.pt
    }
  })

  const clsValue = text({
    visualText: {
      dark: dark,
      textColor: props.textColor,
      textColorContrast: props.textColorContrast,
      darkTextColor: props.darkTextColor,
      darkTextColorContrast: props.darkTextColorContrast,
      fontSize: props.fontSize,
      fontWeight: props.fontWeight
    },
    spacing: {
      px: props.px
    }
  })

  const clsText = text({
    visualText: {
      dark: dark,
      textColor: props.textColor,
      textColorContrast: props.textColorContrast,
      darkTextColor: props.darkTextColor,
      darkTextColorContrast: props.darkTextColorContrast,
      fontSize: props.fontSize,
      fontWeight: props.fontWeight
    }
  })

  const clsElm = element({
    focus: {
      dark: false,
      focusBorderWidth: props.borderPosition === undefined ? props.borderFocusWidth : undefined,
      focusBorderColor: props.borderFocusColor,
      focusBorderColorContrast: props.borderFocusColorContrast,
      focusBorderPosition: props.borderPosition
    }
  })

  const clsDropdownWrapper = base({
    model: {
      display: "block",
      width: "full"
    },
    positioning: {
      position: "absolute",
      top: "full",
      zIndex: "40"
    },
    visual: {
      dark: dark,
      bgColor: props.color,
      bgColorContrast: props.colorContrast,
      darkBgColor: props.darkColor,
      darkBgColorContrast: props.darkColorContrast,
      borderWidth: props.border ? props.borderWidth : undefined,
      borderStyle: props.border ? props.borderStyle : undefined,
      borderColor: props.border ? props.borderColor : undefined,
      borderColorContrast: props.border ? props.borderColorContrast : undefined,
      borderPosition: props.borderPosition,
      borderRadius: props.rounded,
      shadow: props.shadow,
      shadowColor: props.shadow !== undefined ? props.shadowColor : undefined,
      shadowColorContrast: props.shadow !== undefined ? props.shadowColorContrast : undefined,
      shadowOpacity: props.shadow !== undefined ? props.shadowOpacity : undefined,
      darkShadowColor: props.shadow !== undefined ? props.darkShadowColor : undefined,
      darkShadowColorContrast: props.shadow !== undefined ? props.darkShadowColorContrast : undefined,
      darkShadowOpacity: props.shadow !== undefined ? props.darkShadowOpacity : undefined,
    },
    spacing: {
      mt: "1",
    }
  })

  const clsDropdownItem = base({
    model: {
      overflow: "hidden"
    },
    flexbox: {
      flex: true,
      alignItems: "center",
      justify: "between"
    },
    visual: {
      dark: dark,
      bgHoverColor: props.dropdownItemColorHover,
      bgHoverColorContrast: props.dropdownItemColorHoverContrast,
      darkBgHoverColor: props.darkDropdownItemColorHover,
      darkBgHoverColorContrast: props.darkDropdownItemColorHoverContrast
    },
    misc: {
      cursor: "pointer",
      opacity: props.disabled ? "25" : undefined,
      userSelect: "none"
    },
    spacing: {
      px: "3",
      py: "0.5",
      mb: "1"
    }
  })

  const clsDropdownItemText = text({
    visualText: {
      dark: dark,
      textColor: props.dropdownTextColor,
      textColorContrast: props.dropdownTextColorContrast,
      textHoverColor: props.dropdownTextColorHover,
      textHoverColorContrast: props.dropdownTextColorHoverContrast,
      darkTextColor: props.darkDropdownTextColor,
      darkTextColorContrast: props.darkDropdownTextColorContrast,
      darkTextHoverColor: props.darkDropdownTextColorHover,
      darkTextHoverColorContrast: props.darkDropdownTextColorHoverContrast,
      fontSize: "sm"
    }
  })

  const clsDropdownItemFocus = element({
    focus: {
      dark: dark,
      focusColor: props.dropdownItemColorHover,
      focusColorContrast: props.dropdownItemColorHoverContrast,
      focusDarkColor: props.darkDropdownItemColorHover,
      focusDarkColorContrast: props.darkDropdownItemColorHoverContrast,
      focusTextColor: props.dropdownTextColorHover,
      focusTextColorContrast: props.dropdownTextColorHoverContrast
    }
  })

  const clsChevron = element({
    transition: {
      transition: "transform",
      duration: "500",
    },
    element: {
      rotate: expand ? "180" : undefined
    }
  })

  useOnClickOutside(nodeWrapper, () => {
    if (expand) {
      setExpandWithEnter(false)
      setExpand(false)
    }
  })

  useEscKeyboardEvent(nodeWrapper, () => {
    if (expand) {
      setExpandWithEnter(false)
      setExpand(false)
    }
  })

  React.useEffect(() => {
    if (expand && expandWithEnter && !props.search) {
      document.getElementById(`${idDropdown}-1`)?.focus()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expand])

  return(
    <div
    ref={nodeWrapper}
    className={clsWrapper}>
      {(props.label !== undefined && props.labelPosition === "top") && (
        <label htmlFor={id} className="pl-1">{props.label}</label>
      )}
      <div className="flex items-center">
        {(props.label !== undefined && props.labelPosition === "left") && (
          <label htmlFor={id} className="pr-1">{props.label}</label>
        )}

        <input
        ref={nodeInput}
        id={id}
        className={[
          cls,
          (props.placeholderColor !== undefined && value === "") ? coloring("placeholder", props.placeholderColor, props.placeholderColorContrast) : "",
          value !== "" ? "placeholder-transparent" : "",
          clsText,
          clsElm,
          !props.search ? "cursor-pointer" : "",
          "focus:outline-none",
        ].join(" ").trim()}
        aria-label={props.ariaLabel}
        aria-labelledby={idDropdown}
        aria-haspopup="listbox"
        aria-disabled={props.disabled ? "true" : undefined}
        type="text" name={props.name}
        placeholder={props.placeholder}
        disabled={props.disabled}
        readOnly={!props.search} required={props.required}
        onKeyDown={(e) => {
          if (e.code === "Enter") {
            setExpandWithEnter(true)
            setExpand(true)
          }
        }}
        onClick={() => {
          setExpandWithEnter(false)
          setExpand(!expand)
        }}
        onChange={(e) => {
          if (e.target.value !== "") {
            const tmp = props.data.filter((o) => o.value.includes(e.target.value))
            setExpandData(tmp)
          } else {
            setExpandData(props.data)
          }
        }} />
        {value !== "" && (
          <span className={[
            "absolute",
            "left-0",
            clsValue,
          ].join(" ").trim()}>{value}</span>
        )}
        {((props.search && nodeInput.current?.value !== "") && (props.search && nodeInput.current?.value !== undefined)) && (
          <span
          role="button"
          tabIndex={0}
          className="absolute right-8"
          onClick={() => {
            setExpandData(props.data)
            if (nodeInput.current?.value !== undefined) nodeInput.current.value = ""
          }}
          onKeyDown={(e) => {
            if (e.code === "Enter" && nodeInput.current?.value !== undefined) {
              setExpandData(props.data)
              nodeInput.current.value = ""
            }
          }}>
            <Icon icon="x-circle-solid" color="gray" colorContrast="400" height="3" />
          </span>
        )}
        <span className={[
          "absolute right-2",
          props.search ? "border-l border-gray-200" : "",
          "pl-1"
        ].join(" ").trim()}>
          <Icon className={clsChevron} icon="chevron-down-solid" color={props.textColor} colorContrast={props.textColorContrast} height="4" />
        </span>
      </div>

      {expand && (
        <AnimatePresence initial={false}>
          <motion.div
          className={clsDropdownWrapper}
          style={{
            left: "calc(50% - 0)",
            transform: "translate(-50%, 155px) !important"
          }}
          initial={{opacity: 0}}
          animate={{scale: 1, opacity: 1, transition: {
            duration: 0.5,
            ease: [0, 0.2, 0.4, 1]
          }}}
          exit={{opacity: 0, scale: 0.95, transition: {
            duration: 0.1,
            ease: [0.4, 0, 1, 1]
          }}}>
            <div
            className="my-1"
            id={idDropdown}
            aria-labelledby={id}
            role="listbox">
              {expandData.map((data, i) => {
                return(
                  <div
                  id={`${idDropdown}-${i+1}`}
                  key={data.key}
                  className={[
                    clsDropdownItem,
                    clsDropdownItemText,
                    clsDropdownItemFocus,
                    "focus:outline-none",
                  ].join(" ").trim()}
                  role="option"
                  aria-selected={data.value === value ? "true" : undefined}
                  tabIndex={0}
                  onClick={() => {
                    if (props.search && nodeInput.current?.value !== undefined) nodeInput.current.value = ""
                    setValue(data.text)
                    setExpand(false)
                    if (props.onChange !== undefined) props.onChange(data.value)
                  }}
                  onKeyDown={(e) => arrowNavigation(e, `${idDropdown}-${i+1}`, (code) => {
                    if (code === "Enter") {
                      if (props.search && nodeInput.current?.value !== undefined) nodeInput.current.value = ""
                      setValue(data.text)
                      setExpand(false)
                      if (props.onChange !== undefined) props.onChange(data.value)
                    }
                  })}>
                    {typeof data.text === "string" ? (
                      <span>{data.text}</span>
                    ) : (data.text)}
                  </div>
                )
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  )
}

Select.defaultProps = {
  width: "max",
  search: false,
  disabled: false,
  required: false,
  color: "white",
  textColor: "gray",
  textColorContrast: "700",
  placeholderColor: "gray",
  placeholderColorContrast: "300",
  dropdownItemColorHover: "blue",
  dropdownItemColorHoverContrast: "500",
  dropdownTextColor: "gray",
  dropdownTextColorContrast: "600",
  dropdownTextColorHover: "white",
  border: true,
  borderWidth: "normal",
  borderStyle: "solid",
  borderColor: "gray",
  borderColorContrast: "200",
  borderFocusWidth: "normal",
  borderFocusColor: "blue",
  borderFocusColorContrast: "600",
  fontSize: "sm",
  rounded: "md",
  labelPosition: "top",
  px: "3",
  py: "1"
}
