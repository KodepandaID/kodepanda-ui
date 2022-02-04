import { AriaProps, base, BorderWidth, Color, ColorContrast, coloring, ColorProps, element, ModelProps, ResponsiveProps, SpacingProps, StandardProps, text, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { Icon, Outline, Solid } from "@zenbu-ui/icon"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@reach/auto-id"
import * as React from "react"
import { Checkbox, CheckboxProps } from "./checkbox"
import { CreditCard, CreditCardProps } from "./credit-card"
import { Date, DateProps } from "./date"
import { InputFile, FileProps } from "./file"
import { Number, NumberProps } from "./number"
import { Phone, PhoneProps } from "./phone"
import { Pin, PinProps } from "./pin"
import { Radio, RadioProps } from "./radio"
import { Select, SelectProps } from "./select"
import { Textarea, TextareaProps } from "./textarea"

export interface InputProps extends AriaProps, StandardProps, ModelProps, ResponsiveProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {
  value?: any,
  clearValue?: boolean,
  disabled?: boolean,
  readOnly?: boolean,
  required?: boolean,
  error?: boolean,
  errorText?: React.ReactNode,
  success?: boolean,
  successText?: React.ReactNode,
  fluid?: boolean,
  label?: React.ReactNode,
  labelPosition?: "left" | "top" | "inside",
  name: string,
  type?: "text" | "password" | "email" | "tel" | "url" | "number" | "file",
  placeholder?: string,
  minLength?: number,
  maxLength?: number,
  placeholderColor?: Color,
  placeholderColorContrast?: ColorContrast,
  borderFocusWidth?: BorderWidth,
  borderFocusColor?: Color,
  borderFocusColorContrast?: ColorContrast,
  icon?: Outline | Solid,
  iconPosition?: "left" | "right",
  iconColor?: Color,
  iconColorContrast?: ColorContrast,
  iconAction?: Outline | Solid,
  iconActionColor?: Color,
  iconActionColorContrast?: ColorContrast,
  iconActionAriaLabel?: string,
  iconActionClick?: () => void,
  onChange?: (value: string) => void
}

export const Input: React.FC<InputProps> & {
  Checkbox: React.FC<CheckboxProps>,
  CreditCard: React.FC<CreditCardProps>,
  Date: React.FC<DateProps>,
  File: React.FC<FileProps>,
  Number: React.FC<NumberProps>,
  Pin: React.FC<PinProps>,
  Phone: React.FC<PhoneProps>,
  Radio: React.FC<RadioProps>,
  Select: React.FC<SelectProps>,
  Textarea: React.FC<TextareaProps>
} = (props) => {
  const { dark, theme } = React.useContext(ThemeCtx)
  const node = React.useRef<HTMLInputElement>(null)
  const id = useId()

  const ti = theme?.input?.[`${props.componentName}`]

  const [value, setValue] = React.useState("")
  const [showPassword, setShowPassword] = React.useState(false)

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
      pl: ((ti?.iconPosition === "left" && props.icon !== undefined) || (props.iconPosition === "left" && ti?.iconPosition === undefined && props.icon !== undefined)) ? "8" : ti?.pl !== undefined ? ti.pl : props.pl,
      pr: ((ti?.iconPosition === "right" && props.icon !== undefined) || (props.iconPosition === "right" && ti?.iconPosition === undefined && props.icon !== undefined) || props.iconAction !== undefined) ? "8" : ti?.pr !== undefined ? ti.pr : props.pr,
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

  if (props.error || props.success) {
    const cls = base({
      model: {
        display: "block",
        width: (ti?.fluid || (props.fluid && ti?.fluid === undefined)) ? "full" : ti?.width !== undefined ? ti.width : props.width
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
        bgColor: props.error ? "red" : ti?.color !== undefined ? ti.color : props.color,
        bgColorContrast: props.error ? "200" : ti?.colorContrast !== undefined ? ti.colorContrast : props.colorContrast,
        darkBgColor: ti?.darkColor !== undefined ? ti.darkColor : props.darkColor,
        darkBgColorContrast: ti?.darkColorContrast !== undefined ? ti.darkColorContrast : props.darkColorContrast,
        borderWidth: ti?.borderWidth !== undefined ? ti.borderWidth : props.borderWidth,
        borderStyle: ti?.borderStyle !== undefined ? ti.borderStyle : props.borderStyle,
        borderColor: props.error ? "red" : props.success ? "green" : undefined,
        borderColorContrast: "500",
        borderRadius: ti?.rounded !== undefined ? ti.rounded : props.rounded,
        shadow: ti?.shadow !== undefined ? ti.shadow : props.shadow,
        shadowColor: (ti?.shadow !== undefined && ti.shadowColor !== undefined) ? ti.shadowColor : props.shadow !== undefined ? props.shadowColor : undefined,
        shadowColorContrast: (ti?.shadow !== undefined && ti.shadowColorContrast !== undefined) ? ti.shadowColorContrast : props.shadow !== undefined ? props.shadowColorContrast : undefined,
        shadowOpacity: (ti?.shadow !== undefined && ti.shadowOpacity !== undefined) ? ti.shadowOpacity : props.shadow !== undefined ? props.shadowOpacity : undefined,
        darkShadowColor: (ti?.shadow !== undefined && ti.darkShadowColor !== undefined) ? ti.darkShadowColor : props.shadow !== undefined ? props.darkShadowColor : undefined,
        darkShadowColorContrast: (ti?.shadow !== undefined && ti.darkShadowColorContrast !== undefined) ? ti.darkShadowColorContrast : props.shadow !== undefined ? props.darkShadowColorContrast : undefined,
        darkShadowOpacity: (ti?.shadow !== undefined && ti.darkShadowOpacity !== undefined) ? ti.darkShadowOpacity : props.shadow !== undefined ? props.darkShadowOpacity : undefined,
      },
      misc: {
        opacity: props.disabled ? "50" : undefined
      },
      spacing: {
        mx: props.icon === undefined ? ti?.mx !== undefined ? ti.mx : props.mx : undefined,
        my: props.icon === undefined ? ti?.my !== undefined ? ti.my : props.my : undefined,
        mb: props.icon === undefined ? ti?.mb !== undefined ? ti.mb : props.mb : undefined,
        ml: props.icon === undefined ? ti?.ml !== undefined ? ti.ml : props.ml : undefined,
        mr: props.icon === undefined ? ti?.mr !== undefined ? ti.mr : props.mr : undefined,
        mt: props.icon === undefined ? ti?.mt !== undefined ? ti.mt : props.mt : undefined,
        px: ti?.px !== undefined ? ti.px : props.px,
        py: ti?.py !== undefined ? ti.py : props.py,
        pb: ti?.pb !== undefined ? ti.pb : props.pb,
        pl: ((ti?.iconPosition === "left" && props.icon !== undefined) || (props.iconPosition === "left" && ti?.iconPosition === undefined && props.icon !== undefined)) ? "8" : ti?.pl !== undefined ? ti.pl : props.pl,
        pr: ((ti?.iconPosition === "right" && props.icon !== undefined) || (props.iconPosition === "right" && ti?.iconPosition === undefined && props.icon !== undefined) || props.iconAction !== undefined) ? "8" : ti?.pr !== undefined ? ti.pr : props.pr,
        pt: ((ti?.labelPosition === "inside" && props.label !== undefined) || (props.label !== undefined && ti?.labelPosition === undefined && props.labelPosition === "inside")) ? "5" : ti?.pt !== undefined ? ti.pt : props.pt
      }
    })

    const clsElm = element({
      focus: {
        dark: false,
        focusBorderWidth: ti?.borderFocusWidth !== undefined ? ti.borderFocusWidth : props.borderFocusWidth,
        focusBorderColor: props.error ? "red" : props.success ? "green" : undefined,
        focusBorderColorContrast: (props.error || props.success) ? "500" : undefined
      }
    })

    const clsIcon = base({
      positioning: {
        position: "absolute",
        left: (ti?.iconPosition === "left" || (props.iconPosition === "left" && ti?.iconPosition === undefined) || props.iconAction !== undefined)? "2" : undefined,
        right: ((ti?.iconPosition === "right" && props.iconAction === undefined) || (props.iconPosition === "right" && ti?.iconPosition === undefined && props.iconAction === undefined)) ? "2" : undefined
      }
    })

    return(
      <div className="flex flex-col">
        <div className="relative inline-flex items-center">
          <input
          id={`zenbu-input-${id}`}
          className={[
            cls,
            (props.placeholderColor !== undefined && ti?.placeholderColor === undefined) ? coloring("placeholder", props.placeholderColor, props.placeholderColorContrast) : "",
            ti?.placeholderColor !== undefined ? coloring("placeholder", ti.placeholderColor, ti.placeholderColorContrast) : "",
            clsText,
            clsElm,
            "focus:outline-none",
          ].join(" ").trim()}
          defaultValue={props.value}
          aria-label={props.ariaLabel}
          aria-labelledby={props.ariaLabelledBy}
          aria-disabled={props.disabled ? "true" : undefined}
          type={props.type} name={props.name}
          placeholder={props.placeholder}
          disabled={props.disabled}
          minLength={props.minLength} maxLength={props.maxLength}
          readOnly={props.readOnly} required={props.required}
          onChange={(e) => {
            if (props.onChange !== undefined) props.onChange(e.target.value)
          }}/>
          {props.icon !== undefined && (
            <span className={clsIcon}>
              <Icon icon={props.icon}
              color={ti?.iconColor !== undefined ? ti.iconColor : props.iconColor}
              colorContrast={ti?.iconColorContrast !== undefined ? ti.iconColorContrast : props.iconColorContrast} height="4" />
            </span>
          )}

          {props.iconAction !== undefined && (
            <span
            className="absolute right-2"
            aria-label={props.iconActionAriaLabel}
            role="button"
            tabIndex={0}
            onClick={() => {
              if (props.iconActionClick !== undefined) props.iconActionClick()
            }}
            onKeyDown={(e) => {
              if (e.code === "Enter" && props.iconActionClick !== undefined) props.iconActionClick()
            }}>
              <Icon icon={props.iconAction}
              color={ti?.iconActionColor !== undefined ? ti.iconActionColor : props.iconActionColor}
              colorContrast={ti?.iconActionColorContrast !== undefined ? ti.iconActionColorContrast : props.iconActionColorContrast} height="4"  />
            </span>
          )}

          {(props.type === "password" && value !== "") && (
            <span
            className="absolute right-2"
            aria-label="clear value from input field"
            role="button"
            tabIndex={0}
            onClick={() => {
              setShowPassword(!showPassword)
              if (node.current?.type === "password") node.current.type = "text"
              else if (node.current?.type === "text") node.current.type = "password"
            }}
            onKeyDown={(e) => {
              if (e.code === "Enter") {
                setShowPassword(!showPassword)
                if (node.current?.type === "password") node.current.type = "text"
                else if (node.current?.type === "text") node.current.type = "password"
              }
            }}>
              <Icon icon={showPassword ? "eye" : "eye-off"}
              color={ti?.iconColor !== undefined ? ti.iconColor : props.iconColor}
              colorContrast={ti?.iconColorContrast !== undefined ? ti.iconColorContrast : props.iconColorContrast} height="4" />
            </span>
          )}

          {(props.clearValue && value !== "") && (
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
        {(props.errorText !== undefined && props.error) && (
          <p className={[
            "text-xs",
            coloring("text", "red", "500"),
          ].join(" ").trim()}>{props.errorText || props.successText}</p>
        )}

        {(props.successText !== undefined && props.success) && (
          <p className={[
            "text-xs",
            coloring("text", "green", "600"),
          ].join(" ").trim()}>{props.errorText || props.successText}</p>
        )}
      </div>
    )
  }

  if (props.icon !== undefined || props.clearValue || props.label !== undefined || props.type === "password") {
    const clsWrapper = base({
      flexbox: {
        flex: true,
        alignItems: "center"
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

    const clsIcon = base({
      positioning: {
        position: "absolute",
        left: ((ti?.iconPosition === "left" && props.iconAction !== undefined) || (props.iconPosition === "left" && ti?.iconPosition === undefined) || props.iconAction !== undefined)? "2" : undefined,
        right: ((ti?.iconPosition === "right" && props.iconAction === undefined) || (props.iconPosition === "right" && ti?.iconPosition === undefined && props.iconAction === undefined)) ? "2" : undefined
      }
    })

    return(
      <React.Fragment>
        {((props.label !== undefined && ti?.labelPosition === "top") ||
          (props.label !== undefined && props.labelPosition === "top" && ti?.labelPosition === undefined)) && (
          <label htmlFor={`zenbu-input-${id}`} className="pl-1">{props.label}</label>
        )}

        <div className={clsWrapper}>
          {((props.label !== undefined && ti?.labelPosition === "left") ||
          (props.label !== undefined && props.labelPosition === "left" && ti?.labelPosition === undefined)) && (
            <label htmlFor={`zenbu-input-${id}`} className="pr-1">{props.label}</label>
          )}

          <div className={[
            "relative inline-flex items-center",
            base({model: {
              width: (ti?.fluid || (props.fluid && ti?.fluid === undefined)) ? "full" : ti?.width !== undefined ? ti.width : props.width
            }})
          ].join(" ").trim()}>
            <input
            ref={node}
            id={`zenbu-input-${id}`}
            className={[
              cls,
              (props.placeholderColor !== undefined && ti?.placeholderColor === undefined) ? coloring("placeholder", props.placeholderColor, props.placeholderColorContrast) : "",
              ti?.placeholderColor !== undefined ? coloring("placeholder", ti.placeholderColor, ti.placeholderColorContrast) : "",
              clsText,
              clsElm,
              "focus:outline-none",
            ].join(" ").trim()}
            defaultValue={props.value}
            aria-label={props.ariaLabel}
            aria-labelledby={props.ariaLabelledBy}
            aria-disabled={props.disabled ? "true" : undefined}
            type={props.type} name={props.name}
            placeholder={props.placeholder}
            disabled={props.disabled}
            minLength={props.minLength} maxLength={props.maxLength}
            readOnly={props.readOnly} required={props.required}
            onChange={(e) => {
              setValue(e.target.value)
              if (props.onChange !== undefined) props.onChange(e.target.value)
            }} />
            {props.icon !== undefined && (
              <span className={clsIcon}>
                <Icon icon={props.icon}
                color={ti?.iconActionColor !== undefined ? ti.iconActionColor : props.iconActionColor}
                colorContrast={ti?.iconActionColorContrast !== undefined ? ti.iconActionColorContrast : props.iconActionColorContrast} height="4" />
              </span>
            )}

            {props.iconAction !== undefined && (
              <span
              className="absolute right-2"
              aria-label={props.iconActionAriaLabel}
              role="button"
              tabIndex={0}
              onClick={() => {
                if (props.iconActionClick !== undefined) props.iconActionClick()
              }}
              onKeyDown={(e) => {
                if (e.code === "Enter" && props.iconActionClick !== undefined) props.iconActionClick()
              }}>
                <Icon icon={props.iconAction}
                color={ti?.iconActionColor !== undefined ? ti.iconActionColor : props.iconActionColor}
                colorContrast={ti?.iconActionColorContrast !== undefined ? ti.iconActionColorContrast : props.iconActionColorContrast} height="4" />
              </span>
            )}

            {(props.type === "password" && value !== "") && (
              <span
              className="absolute right-2"
              aria-label="clear value from input field"
              role="button"
              tabIndex={0}
              onClick={() => {
                setShowPassword(!showPassword)
                if (node.current?.type === "password") node.current.type = "text"
                else if (node.current?.type === "text") node.current.type = "password"
              }}
              onKeyDown={(e) => {
                if (e.code === "Enter") {
                  setShowPassword(!showPassword)
                  if (node.current?.type === "password") node.current.type = "text"
                  else if (node.current?.type === "text") node.current.type = "password"
                }
              }}>
                <Icon icon={showPassword ? "eye" : "eye-off"}
                color={ti?.iconColor !== undefined ? ti.iconColor : props.iconColor}
                colorContrast={ti?.iconColorContrast !== undefined ? ti.iconColorContrast : props.iconColorContrast} height="4" />
              </span>
            )}

            {(props.clearValue && value !== "") && (
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
            <label htmlFor={`zenbu-input-${id}`} className={[
              "absolute",
              "top-0",
              `px-${ti?.px !== undefined ? ti.px : props.px}`
            ].join(" ").trim()}>{props.label}</label>
          )}
        </div>
      </React.Fragment>
    )
  }

  return(
    <input
    id={`zenbu-input-${id}`}
    className={[
      cls,
      (props.placeholderColor !== undefined && ti?.placeholderColor === undefined) ? coloring("placeholder", props.placeholderColor, props.placeholderColorContrast) : "",
      ti?.placeholderColor !== undefined ? coloring("placeholder", ti.placeholderColor, ti.placeholderColorContrast) : "",
      clsText,
      clsElm,
      base({
        spacing: {
          mx: ti?.mx !== undefined ? ti.mx : props.mx,
          my: ti?.my !== undefined ? ti.my : props.my,
          mb: ti?.mb !== undefined ? ti.mb : props.mb,
          ml: ti?.ml !== undefined ? ti.ml : props.ml,
          mr: ti?.mr !== undefined ? ti.mr : props.mr,
          mt: ti?.mt !== undefined ? ti.mt : props.mt,
        }
      }),
      "focus:outline-none",
    ].join(" ").trim()}
    defaultValue={props.value}
    aria-label={props.ariaLabel}
    aria-labelledby={props.ariaLabelledBy}
    aria-disabled={props.disabled ? "true" : undefined}
    type={props.type} name={props.name}
    placeholder={props.placeholder}
    disabled={props.disabled}
    minLength={props.minLength} maxLength={props.maxLength}
    readOnly={props.readOnly} required={props.required}
    onChange={(e) => {
      if (props.onChange !== undefined) props.onChange(e.target.value)
    }} />
  )
}

Input.Checkbox = Checkbox
Input.CreditCard = CreditCard
Input.Date = Date
Input.File = InputFile
Input.Number = Number
Input.Pin = Pin
Input.Phone = Phone
Input.Radio = Radio
Input.Select = Select
Input.Textarea = Textarea

Input.defaultProps = {
  width: "max",
  disabled: false,
  readOnly: false,
  required: false,
  type: "text",
  color: "white",
  textColor: "gray",
  textColorContrast: "700",
  placeholderColor: "gray",
  placeholderColorContrast: "300",
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
  iconColor: "gray",
  iconColorContrast: "500",
  iconActionColor: "gray",
  iconActionColorContrast: "500",
  iconPosition: "left",
  labelPosition: "top",
  px: "3",
  py: "1"
}
