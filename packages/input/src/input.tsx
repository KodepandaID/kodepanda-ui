import { AriaProps, base, BorderWidth, Color, ColorContrast, coloring, ColorProps, element, ModelProps, ResponsiveProps, SpacingProps, StandardProps, text, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { Icon, Outline, Solid } from "@zenbu-ui/icon"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@zenbu-ui/react-id"
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
  const { dark } = React.useContext(ThemeCtx)
  const node = React.useRef<HTMLInputElement>(null)
  const id = useId("input")

  const [value, setValue] = React.useState("")
  const [showPassword, setShowPassword] = React.useState(false)

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
      pl: (props.iconPosition === "left" && props.icon !== undefined) ? "8" : props.pl,
      pr: ((props.iconPosition === "right" && props.icon !== undefined) || props.iconAction !== undefined) ? "8" :  props.pr,
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

  if (props.error || props.success) {
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
        bgColor: props.error ? "red" : props.color,
        bgColorContrast: props.error ? "200" : props.colorContrast,
        darkBgColor: props.darkColor,
        darkBgColorContrast: props.darkColorContrast,
        borderWidth: props.borderWidth,
        borderStyle: props.borderStyle,
        borderColor: props.error ? "red" : props.success ? "green" : undefined,
        borderColorContrast: "500",
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
        mx: props.icon === undefined ? props.mx : undefined,
        my: props.icon === undefined ? props.my : undefined,
        mb: props.icon === undefined ? props.mb : undefined,
        ml: props.icon === undefined ? props.ml : undefined,
        mr: props.icon === undefined ? props.mr : undefined,
        mt: props.icon === undefined ? props.mt : undefined,
        px: props.px,
        py: props.py,
        pb: props.pb,
        pl: (props.iconPosition === "left" && props.icon !== undefined) ? "8" : props.pl,
        pr: ((props.iconPosition === "right" && props.icon !== undefined) || props.iconAction !== undefined) ? "8" :  props.pr,
        pt: (props.label !== undefined && props.labelPosition === "inside") ? "5" : props.pt
      }
    })

    const clsElm = element({
      focus: {
        dark: false,
        focusBorderWidth: props.borderFocusWidth,
        focusBorderColor: props.error ? "red" : props.success ? "green" : undefined,
        focusBorderColorContrast: (props.error || props.success) ? "500" : undefined
      }
    })

    const clsIcon = base({
      positioning: {
        position: "absolute",
        left: (props.iconPosition === "left" || props.iconAction !== undefined)? "2" : undefined,
        right: (props.iconPosition === "right" && props.iconAction === undefined) ? "2" : undefined
      }
    })

    return(
      <div className="flex flex-col">
        <div className="relative inline-flex items-center">
          <input
          id={id}
          className={[
            cls,
            props.placeholderColor !== undefined ? coloring("placeholder", props.placeholderColor, props.placeholderColorContrast) : "",
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
              <Icon icon={props.icon} color={props.iconColor} colorContrast={props.iconColorContrast} height="4" />
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
              <Icon icon={props.iconAction} color={props.iconActionColor} colorContrast={props.iconActionColorContrast} height="4"  />
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
              <Icon icon={showPassword ? "eye" : "eye-off"} color={props.iconColor} colorContrast={props.iconColorContrast} height="4" />
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
              <Icon icon="x-circle-solid" color={props.iconColor} colorContrast={props.iconColorContrast} height="4" />
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
        mx: props.mx,
        my: props.my,
        mb: props.mb,
        ml: props.ml,
        mr: props.mr,
        mt: props.mt,
      }
    })

    const clsIcon = base({
      positioning: {
        position: "absolute",
        left: (props.iconPosition === "left" || props.iconAction !== undefined)? "2" : undefined,
        right: (props.iconPosition === "right" && props.iconAction === undefined) ? "2" : undefined
      }
    })

    return(
      <React.Fragment>
        {(props.label !== undefined && props.labelPosition === "top") && (
          <label htmlFor={id} className="pl-1">{props.label}</label>
        )}

        <div className={clsWrapper}>
          {(props.label !== undefined && props.labelPosition === "left") && (
            <label htmlFor={id} className="pr-1">{props.label}</label>
          )}

          <div className={[
            "relative inline-flex items-center",
            base({model: {
              width: props.fluid ? "full" : props.width
            }})
          ].join(" ").trim()}>
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
                <Icon icon={props.icon} color={props.iconColor} colorContrast={props.iconColorContrast} height="4" />
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
                <Icon icon={props.iconAction} color={props.iconActionColor} colorContrast={props.iconActionColorContrast} height="4"  />
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
                <Icon icon={showPassword ? "eye" : "eye-off"} color={props.iconColor} colorContrast={props.iconColorContrast} height="4" />
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
      </React.Fragment>
    )
  }

  return(
    <input
    id={id}
    className={[
      cls,
      props.placeholderColor !== undefined ? coloring("placeholder", props.placeholderColor, props.placeholderColorContrast) : "",
      clsText,
      clsElm,
      base({
        spacing: {
          mx: props.mx,
          my: props.my,
          mb: props.mb,
          ml: props.ml,
          mr: props.mr,
          mt: props.mt,
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
