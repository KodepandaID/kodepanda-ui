import { AriaProps, arrowNavigation, base, BorderWidth, Color, ColorContrast, coloring, ColorProps, element, ModelProps, ResponsiveProps, SpacingProps, StandardProps, text, useEscKeyboardEvent, useOnClickOutside, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@zenbu-ui/react-id"
import { CountryCode } from "./phone/code"
import { Icon } from "@zenbu-ui/icon"
import { motion, AnimatePresence } from "framer-motion"
import * as React from "react"
import PhoneNumber from "awesome-phonenumber"
import countryJSON from "./phone/country.json"
import Flag from "react-country-flag"

export interface PhoneProps extends AriaProps, StandardProps, ModelProps, ResponsiveProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {
  defaultCountry?: CountryCode,
  value?: any,
  disabled?: boolean,
  required?: boolean,
  error?: boolean,
  errorText?: React.ReactNode,
  success?: boolean,
  successText?: React.ReactNode,
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
  iconColor?: Color,
  iconColorContrast?: ColorContrast,
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
  onChange?: (value: string | undefined) => void
}

export const Phone: React.FC<PhoneProps> = (props) => {
  const { dark } = React.useContext(ThemeCtx)
  const nodeWrapper = React.useRef<HTMLDivElement>(null)
  const node = React.useRef<HTMLInputElement>(null)
  const id = useId("input-phone")
  const idDropdown = useId("select-phone-country")

  const [expand, setExpand] = React.useState<boolean>(false)
  const [expandWithEnter, setExpandWithEnter] = React.useState<boolean>(false)
  const [value, setValue] = React.useState<string>("")
  const [expandData, setExpandData] = React.useState(countryJSON)
  const [countrySelect, setCountrySelect] = React.useState<string | CountryCode | undefined>(props.defaultCountry)
  const [countryDetail, setCountryDetail] = React.useState<{
    name: string,
    code: string
  } | undefined>(undefined)

  const clsWrapper = base({
    model: {
      width: "max"
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
      mt: props.mt,
    }
  })

  const cls = base({
    model: {
      display: "block",
      width: props.fluid ? "full" : props.width
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
      pl: "8",
      pr: "4",
      pt: (props.label !== undefined && props.labelPosition === "inside") ? "5" : props.pt
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

  const clsIcon = base({
    positioning: {
      position: "absolute",
      left: "2",
    }
  })

  const clsDropdownWrapper = base({
    model: {
      display: "block",
      width: "full",
      height: "64",
      overflowY: "scroll"
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
    if (countrySelect !== undefined) {
      const c = countryJSON.find((o) => o.code === countrySelect)
      setCountryDetail(c)
    }
  }, [countrySelect])

  React.useEffect(() => {
    if (expand && expandWithEnter) {
      document.getElementById(`${idDropdown}-0`)?.focus()
    }

    if (!expand) {
      setExpandData(countryJSON)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expand])

  return(
    <div ref={nodeWrapper} className="relative w-max">
      {(props.label !== undefined && props.labelPosition === "top") && (
        <label htmlFor={id} className="pl-1">{props.label}</label>
      )}

      <div className={clsWrapper}>
        {(props.label !== undefined && props.labelPosition === "left") && (
          <label htmlFor={id} className="pr-1">{props.label}</label>
        )}

        <div className="relative w-max inline-flex items-center">
          <input
          ref={node}
          id={id}
          className={[
            cls,
            props.placeholderColor !== undefined ? coloring("placeholder", props.placeholderColor, props.placeholderColorContrast) : "",
            clsText,
            clsElm,
            "focus:outline-none",
          ].join(" ").trim()}
          aria-label={props.ariaLabel}
          aria-labelledby={props.ariaLabelledBy}
          aria-disabled={props.disabled ? "true" : undefined}
          type="text" name={props.name}
          placeholder={props.placeholder}
          disabled={props.disabled} required={props.required}
          onChange={(e) => {
            const phone = PhoneNumber(e.target.value, countrySelect).getNumber()
            if (phone !== undefined && e.target.value.length === 3 && node.current?.value !== undefined) {
              const tmp = node.current.value.substring(1)
              node.current.value = PhoneNumber(tmp, countrySelect).getNumber()
            }
            setValue(node.current?.value === undefined ? "" : node.current.value)

            if (props.onChange !== undefined) props.onChange(node.current?.value)
          }} />

          <span
          className={clsIcon}
          role="button"
          tabIndex={0}
          aria-label={`Choose a country for phone number. Currently selected is ${countryDetail?.name}`}
          onClick={() => {
            setExpand(!expand)
          }}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              setExpand(!expand)
              setExpandWithEnter(true)
            }
          }}>
            <Flag title={countryDetail?.name} aria-label={countryDetail?.name} countryCode={countrySelect === undefined ? "ID" : countrySelect} svg />
          </span>

          {value !== "" && (
            <span
            className="absolute right-2"
            aria-label="clear value from input field"
            role="button"
            tabIndex={0}
            onClick={() => {
              setValue("")
              if (node.current?.value !== undefined) node.current.value = ""
            }}
            onKeyDown={(e) => {
              setValue("")
              if (e.code === "Enter" && node.current?.value !== undefined) node.current.value = ""
            }}>
              <Icon icon="x-circle-solid" color={props.iconColor} colorContrast={props.iconColorContrast} height="4" />
            </span>
          )}
        </div>

        {(props.label !== undefined && props.labelPosition === "inside") && (
          <label htmlFor={id} className={[
            "absolute",
            "top-0",
            `px-${props.px}`
          ].join(" ").trim()}>{props.label}</label>
        )}
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
              <div className="px-3 py-0.5 pb-1.5 mb-1 border-b border-gray-200">
                <input
                id={`${idDropdown}-0`}
                className="w-full px-2 py-1 bg-transparent border border-gray-200 text-gray-600 placeholder-gray-200 text-sm"
                aria-label="Search country"
                placeholder="Search country..."
                onChange={(e) => {
                  if (e.target.value !== "") {
                    const tmp = countryJSON.filter((o) => o.name.toLowerCase().includes(e.target.value))
                    setExpandData(tmp)
                  } else {
                    setExpandData(countryJSON)
                  }
                }} />
              </div>
              {expandData.map((data, i) => {
                return(
                  <div
                  id={`${idDropdown}-${i+1}`}
                  key={data.code}
                  className={[
                    clsDropdownItem,
                    clsDropdownItemText,
                    clsDropdownItemFocus,
                    "focus:outline-none",
                  ].join(" ").trim()}
                  role="option"
                  aria-selected={data.code === countrySelect ? "true" : undefined}
                  tabIndex={0}
                  onClick={() => {
                    setCountrySelect(data.code)
                    setExpand(false)
                  }}
                  onKeyDown={(e) => arrowNavigation(e, `${idDropdown}-${i+1}`, (code) => {
                    if (code === "Enter") {
                      setCountrySelect(data.code)
                      setExpand(false)
                      setExpandWithEnter(false)
                    }
                  })}>
                    <span>
                      <Flag title={data.name} aria-label={data.name} countryCode={data.code} svg />
                      <span className="ml-2">{data.name} ({data.code})</span>
                    </span>
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

Phone.defaultProps = {
  defaultCountry: "ID",
  width: "max",
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
  iconColor: "gray",
  iconColorContrast: "300",
  fontSize: "sm",
  rounded: "md",
  labelPosition: "top",
  px: "3",
  py: "1"
}
