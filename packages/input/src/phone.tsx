import { AriaProps, arrowNavigation, base, BorderWidth, Color, ColorContrast, coloring, ColorProps, element, ModelProps, ResponsiveProps, SpacingProps, StandardProps, text, useEscKeyboardEvent, useOnClickOutside, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@reach/auto-id"
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
  const { dark, theme } = React.useContext(ThemeCtx)
  const nodeWrapper = React.useRef<HTMLDivElement>(null)
  const node = React.useRef<HTMLInputElement>(null)
  const id = useId("input-phone")
  const idDropdown = useId("select-phone-country")

  const ti = theme?.inputPhone?.[`${props.componentName}`]

  const [expand, setExpand] = React.useState<boolean>(false)
  const [expandWithEnter, setExpandWithEnter] = React.useState<boolean>(false)
  const [value, setValue] = React.useState<string>("")
  const [expandData, setExpandData] = React.useState(countryJSON)
  const [countrySelect, setCountrySelect] = React.useState<string | CountryCode | undefined>(props.defaultCountry)
  const [countryDetail, setCountryDetail] = React.useState<{
    name: string,
    code: string
  } | undefined>(undefined)

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

  const clsWrapper = base({
    model: {
      width: (ti?.fluid || (props.fluid && !ti?.fluid)) ? "full" : ti?.width !== undefined ? ti.width : props.width
    },
    positioning: {
      position: "relative"
    },
    spacing: {
      mx: ti?.mx !== undefined ? ti.mx : props.mx,
      my: ti?.my !== undefined ? ti.my : props.my,
      mb: ti?.mb !== undefined ? ti.mb : props.mb,
      ml: ti?.ml !== undefined ? ti.ml : props.ml,
      mr: ti?.mr !== undefined ? ti.mr : props.mr,
      mt: ti?.mt !== undefined ? ti.mt : props.mt,
    }
  })

  const cls = base({
    model: {
      display: "block",
      width: (ti?.fluid || (props.fluid && !ti?.fluid)) ? "full" : ti?.width !== undefined ? ti.width : props.width
    },
    responsive: {
      sm: ti?.sm !== undefined ? ti.sm : props.sm,
      md: ti?.md !== undefined ? ti.md : props.md,
      lg: ti?.lg !== undefined ? ti.lg : props.lg,
      xl: ti?.xl !== undefined ? ti.xl : props.xl,
      "2xl": ti?.["2xl"] !== undefined ? ti["2xl"] : props["2xl"]
    },
    visual: {
      dark: dark,
      bgColor: ti?.color !== undefined ? ti.color : props.color,
      bgColorContrast: ti?.colorContrast !== undefined ? ti.colorContrast : props.colorContrast,
      darkBgColor: ti?.darkColor !== undefined ? ti.darkColor : props.darkColor,
      darkBgColorContrast: ti?.darkColorContrast !== undefined ? ti.darkColorContrast : props.darkColorContrast,
      borderWidth: (ti?.border && ti?.borderWidth !== undefined) ? ti.borderWidth : (props.border && ti?.border === undefined) ? props.borderWidth : undefined,
      borderStyle: (ti?.border && ti?.borderStyle !== undefined) ? ti.borderStyle : (props.border && ti?.border === undefined) ? props.borderStyle : undefined,
      borderColor: (ti?.border && ti?.borderColor !== undefined) ? ti.borderColor : (props.border && ti?.border === undefined) ? props.borderColor : undefined,
      borderColorContrast: (ti?.border && ti?.borderColorContrast !== undefined) ? ti.borderColorContrast : (props.border && ti?.border === undefined) ? props.borderColorContrast : undefined,
      borderPosition: ti?.borderPosition !== undefined ? ti.borderPosition : props.borderPosition,
      borderRadius: ti?.rounded !== undefined ? ti.rounded : props.rounded,
      shadow: ti?.shadow !== undefined ? ti.shadow : props.shadow,
      shadowColor: (ti?.shadow !== undefined && ti?.shadowColor !== undefined) ? ti.shadowColor : props.shadow !== undefined ? props.shadowColor : undefined,
      shadowColorContrast: (ti?.shadow !== undefined && ti?.shadowColorContrast !== undefined) ? ti.shadowColorContrast : props.shadow !== undefined ? props.shadowColorContrast : undefined,
      shadowOpacity: (ti?.shadow !== undefined && ti?.shadowOpacity !== undefined) ? ti.shadowOpacity : props.shadow !== undefined ? props.shadowOpacity : undefined,
      darkShadowColor: (ti?.shadow !== undefined && ti?.darkShadowColor !== undefined) ? ti.darkShadowColor : props.shadow !== undefined ? props.darkShadowColor : undefined,
      darkShadowColorContrast: (ti?.shadow !== undefined && ti?.darkShadowColorContrast !== undefined) ? ti.darkShadowColorContrast : props.shadow !== undefined ? props.darkShadowColorContrast : undefined,
      darkShadowOpacity: (ti?.shadow !== undefined && ti?.darkShadowOpacity !== undefined) ? ti.darkShadowOpacity : props.shadow !== undefined ? props.darkShadowOpacity : undefined,
    },
    misc: {
      opacity: props.disabled ? "50" : undefined
    },
    spacing: {
      px: ti?.px !== undefined ? ti.px : props.px,
      py: ti?.py !== undefined ? ti.py : props.py,
      pb: ti?.pb !== undefined ? ti.pb : props.pb,
      pl: "8",
      pr: "4",
      pt: ((ti?.labelPosition === "inside" && props.label !== undefined) || (props.label !== undefined && ti?.labelPosition === undefined && props.labelPosition === "inside")) ? "5" : ti?.pt !== undefined ? ti.pt : props.pt
    }
  })

  const clsText = text({
    visualText: {
      dark: dark,
      textColor: ti?.textColor !== undefined ? ti.textColor : props.textColor,
      textColorContrast: ti?.textColorContrast !== undefined ? ti.textColorContrast : props.textColorContrast,
      darkTextColor: ti?.darkTextColor !== undefined ? ti.darkTextColor : props.darkTextColor,
      darkTextColorContrast: ti?.darkTextColorContrast !== undefined ? ti.darkTextColorContrast : props.darkTextColorContrast,
      fontSize: ti?.fontSize !== undefined ? ti.fontSize : props.fontSize,
      fontWeight: ti?.fontWeight !== undefined ? ti.fontWeight : props.fontWeight
    }
  })

  const clsElm = element({
    focus: {
      dark: false,
      focusBorderWidth: (ti?.borderPosition === undefined && ti?.borderFocusWidth !== undefined) ? ti.borderFocusWidth : props.borderPosition === undefined ? props.borderFocusWidth : undefined,
      focusBorderColor: ti?.borderFocusColor !== undefined ? ti.borderFocusColor : props.borderFocusColor,
      focusBorderColorContrast: ti?.borderFocusColorContrast !== undefined ? ti.borderFocusColorContrast : props.borderFocusColorContrast,
      focusBorderPosition: ti?.borderPosition !== undefined ? ti.borderPosition : props.borderPosition
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
      bgColor: ti?.color !== undefined ? ti.color : props.color,
      bgColorContrast: ti?.colorContrast !== undefined ? ti.colorContrast : props.colorContrast,
      darkBgColor: ti?.darkColor !== undefined ? ti.darkColor : props.darkColor,
      darkBgColorContrast: ti?.darkColorContrast !== undefined ? ti.darkColorContrast : props.darkColorContrast,
      borderWidth: (ti?.border && ti?.borderWidth !== undefined) ? ti.borderWidth : (props.border && ti?.border === undefined) ? props.borderWidth : undefined,
      borderStyle: (ti?.border && ti?.borderStyle !== undefined) ? ti.borderStyle : (props.border && ti?.border === undefined) ? props.borderStyle : undefined,
      borderColor: (ti?.border && ti?.borderColor !== undefined) ? ti.borderColor : (props.border && ti?.border === undefined) ? props.borderColor : undefined,
      borderColorContrast: (ti?.border && ti?.borderColorContrast !== undefined) ? ti.borderColorContrast : (props.border && ti?.border === undefined) ? props.borderColorContrast : undefined,
      borderPosition: ti?.borderPosition !== undefined ? ti.borderPosition : props.borderPosition,
      borderRadius: ti?.rounded !== undefined ? ti.rounded : props.rounded,
      shadow: ti?.shadow !== undefined ? ti.shadow : props.shadow,
      shadowColor: (ti?.shadow !== undefined && ti?.shadowColor !== undefined) ? ti.shadowColor : props.shadow !== undefined ? props.shadowColor : undefined,
      shadowColorContrast: (ti?.shadow !== undefined && ti?.shadowColorContrast !== undefined) ? ti.shadowColorContrast : props.shadow !== undefined ? props.shadowColorContrast : undefined,
      shadowOpacity: (ti?.shadow !== undefined && ti?.shadowOpacity !== undefined) ? ti.shadowOpacity : props.shadow !== undefined ? props.shadowOpacity : undefined,
      darkShadowColor: (ti?.shadow !== undefined && ti?.darkShadowColor !== undefined) ? ti.darkShadowColor : props.shadow !== undefined ? props.darkShadowColor : undefined,
      darkShadowColorContrast: (ti?.shadow !== undefined && ti?.darkShadowColorContrast !== undefined) ? ti.darkShadowColorContrast : props.shadow !== undefined ? props.darkShadowColorContrast : undefined,
      darkShadowOpacity: (ti?.shadow !== undefined && ti?.darkShadowOpacity !== undefined) ? ti.darkShadowOpacity : props.shadow !== undefined ? props.darkShadowOpacity : undefined,
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
      bgHoverColor: ti?.dropdownItemColorHover !== undefined ? ti.dropdownItemColorHover : props.dropdownItemColorHover,
      bgHoverColorContrast: ti?.dropdownItemColorHoverContrast !== undefined ? ti.dropdownItemColorHoverContrast : props.dropdownItemColorHoverContrast,
      darkBgHoverColor: ti?.darkDropdownItemColorHover !== undefined ? ti.darkDropdownItemColorHover : props.darkDropdownItemColorHover,
      darkBgHoverColorContrast: ti?.darkDropdownItemColorHoverContrast !== undefined ? ti.darkDropdownItemColorHoverContrast : props.darkDropdownItemColorHoverContrast
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
      textColor: ti?.dropdownTextColor !== undefined ? ti.dropdownTextColor : props.dropdownTextColor,
      textColorContrast: ti?.dropdownTextColorContrast !== undefined ? ti.dropdownTextColorContrast : props.dropdownTextColorContrast,
      textHoverColor: ti?.dropdownTextColorHover !== undefined ? ti.dropdownTextColorHover : props.dropdownTextColorHover,
      textHoverColorContrast: ti?.dropdownTextColorHoverContrast !== undefined ? ti.dropdownTextColorHoverContrast : props.dropdownTextColorHoverContrast,
      darkTextColor: ti?.darkDropdownTextColor !== undefined ? ti.darkDropdownTextColor : props.darkDropdownTextColor,
      darkTextColorContrast: ti?.darkDropdownItemColorHoverContrast !== undefined ? ti.darkDropdownTextColorContrast : props.darkDropdownTextColorContrast,
      darkTextHoverColor: ti?.darkDropdownTextColorHover !== undefined ? ti.darkDropdownTextColorHover : props.darkDropdownTextColorHover,
      darkTextHoverColorContrast: ti?.darkDropdownTextColorHoverContrast !== undefined ? ti.darkDropdownTextColorHoverContrast : props.darkDropdownTextColorHoverContrast,
      fontSize: "sm"
    }
  })

  const clsDropdownItemFocus = element({
    focus: {
      dark: dark,
      focusColor: ti?.dropdownItemColorHover !== undefined ? ti.dropdownItemColorHover : props.dropdownItemColorHover,
      focusColorContrast: ti?.dropdownItemColorHoverContrast !== undefined ? ti.dropdownItemColorHoverContrast : props.dropdownItemColorHoverContrast,
      focusDarkColor: ti?.darkDropdownItemColorHover !== undefined ? ti.darkDropdownItemColorHover : props.darkDropdownItemColorHover,
      focusDarkColorContrast: ti?.darkDropdownItemColorHoverContrast !== undefined ? ti.darkDropdownItemColorHoverContrast : props.darkDropdownItemColorHoverContrast,
      focusTextColor: ti?.dropdownTextColorHover !== undefined ? ti.dropdownTextColorHover : props.dropdownTextColorHover,
      focusTextColorContrast: ti?.dropdownTextColorHoverContrast !== undefined ? ti.dropdownTextColorHoverContrast : props.dropdownTextColorHoverContrast
    }
  })

  return(
    <div ref={nodeWrapper} className="relative">
      {((props.label !== undefined && ti?.labelPosition === "top") || (props.label !== undefined && props.labelPosition === "top" && ti?.labelPosition === undefined)) && (
        <label htmlFor={id} className="pl-1">{props.label}</label>
      )}

      <div className={clsWrapper}>
        {((props.label !== undefined && ti?.labelPosition === "left") || (props.label !== undefined && props.labelPosition === "left" && ti?.labelPosition === undefined)) && (
          <label htmlFor={id} className="pr-1">{props.label}</label>
        )}

          <div className={[
            "relative inline-flex items-center",
            base({model: {
              width: (ti?.fluid || (props.fluid && ti?.fluid === undefined)) ? "full" : ti?.width !== undefined ? ti.width : props.width
            }})
          ].join(" ").trim()}>
          <input
          ref={node}
          id={id}
          className={[
            cls,
            (props.placeholderColor !== undefined && ti?.placeholderColor === undefined) ? coloring("placeholder", props.placeholderColor, props.placeholderColorContrast) : "",
            ti?.placeholderColor !== undefined ? coloring("placeholder", ti.placeholderColor, ti.placeholderColorContrast) : "",
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
              <Icon icon="x-circle-solid"
              color={ti?.iconColor !== undefined ? ti.iconColor : props.iconColor}
              colorContrast={ti?.iconColorContrast !== undefined ? ti.iconColorContrast : props.iconColorContrast} height="4" />
            </span>
          )}
        </div>

        {((props.label !== undefined && ti?.labelPosition === "inside") || (props.label !== undefined && props.labelPosition === "inside" && ti?.labelPosition === undefined)) && (
          <label htmlFor={id} className={[
            "absolute",
            "top-0",
            `px-${ti?.px !== undefined ? ti.px : props.px}`
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
