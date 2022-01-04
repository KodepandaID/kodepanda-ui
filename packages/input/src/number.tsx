import { AriaProps, base, BorderWidth, Color, ColorContrast, coloring, ColorProps, element, ModelProps, ResponsiveProps, SpacingProps, StandardProps, text, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { Icon, Outline, Solid } from "@zenbu-ui/icon"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@zenbu-ui/react-id"
import * as React from "react"

export interface NumberProps extends AriaProps, StandardProps, ModelProps, ResponsiveProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {
  value?: string | number,
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
  placeholder?: string,
  placeholderColor?: Color,
  placeholderColorContrast?: ColorContrast,
  borderFocusWidth?: BorderWidth,
  borderFocusColor?: Color,
  borderFocusColorContrast?: ColorContrast,
  icon?: Outline | Solid,
  iconPosition?: "left" | "right",
  iconColor?: Color,
  iconColorContrast?: ColorContrast,
  min?: number,
  max?: number,
  keyboard?: boolean,
  separator?: "none" | "dot" | "comma",
  currency?: boolean,
  currencyText?: React.ReactNode,
  onChange?: (value: number) => void
}

export const Number: React.FC<NumberProps> = (props) => {
  const { dark } = React.useContext(ThemeCtx)
  const node = React.useRef<HTMLInputElement>(null)
  const id = useId("input-number")

  const [value, setValue] = React.useState<number | string>("")

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
      mx: props.mx,
      my: props.my,
      mb: props.mb,
      ml: props.ml,
      mr: props.mr,
      mt: props.mt,
      px: props.px,
      py: props.py,
      pb: props.pb,
      pl: ((props.iconPosition === "left" && props.icon !== undefined) || props.currency) ? "8" : props.pl,
      pr: (props.iconPosition === "right" && props.icon !== undefined) ? "8" :  props.pr,
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

  const addCommas = (num: string): string => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, props.separator === "dot" ? "." : ",")
  const removeNonNumeric = (num: string): string => num.toString().replace(/[^0-9]/g, "")

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (parseInt(removeNonNumeric(e.target.value.charAt(0))) === 0 || isNaN(parseInt(removeNonNumeric(e.target.value.charAt(0))))) {
      setValue(removeNonNumeric(e.target.value.charAt(1)))
    } else {
      if (props.max === undefined || props.max >= parseInt(removeNonNumeric(e.target.value)) || e.target.value === "") {
        if (props.separator !== "none") setValue(addCommas(removeNonNumeric(e.target.value)))
        else setValue(removeNonNumeric(e.target.value))

        if (props.onChange !== undefined) props.onChange(parseInt(removeNonNumeric(e.target.value)))
      }
    }
  }

  const onKeyDownHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (props.keyboard && e.code === "ArrowUp") {
      let val = parseInt(removeNonNumeric(`${value}`)) + 1
      if (props.max !== undefined && val > props.max) val = props.max

      if (props.separator !== "none") setValue(addCommas(removeNonNumeric(`${val}`)))
      else setValue(removeNonNumeric(`${val}`))
      if (props.onChange !== undefined) props.onChange(val)
    } else if (props.keyboard && e.code === "ArrowDown") {
      let val = parseInt(removeNonNumeric(`${value}`)) - 1
      if (props.min !== undefined && val < props.min) val = props.min

      if (props.separator !== "none") setValue(addCommas(removeNonNumeric(`${val}`)))
      else setValue(removeNonNumeric(`${val}`))
      if (props.onChange !== undefined) props.onChange(val)
    }
  }

  const onBlurHandler = () => {
    if (props.min !== undefined && props.min > value) {
      setValue(props.min)
    }
  }

  React.useEffect(() => {
    if (props.min !== undefined && value === "") {
      setValue(props.min)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

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
        pr: ((props.iconPosition === "right" && props.icon !== undefined)) ? "8" :  props.pr,
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
        left: props.iconPosition === "left" ? "2" : undefined,
        right: props.iconPosition === "right" ? "2" : undefined
      }
    })

    return(
      <div className="flex flex-col">
        <div className="relative w-max inline-flex items-center">
          <input
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
          type="text" name={props.name} value={value}
          placeholder={props.placeholder}
          disabled={props.disabled}
          readOnly={props.readOnly} required={props.required}
          onBlur={() => onBlurHandler()}
          onChange={(e) => onChangeHandler(e)}
          onKeyDown={(e) => onKeyDownHandler(e)} />
          {props.icon !== undefined && (
            <span className={clsIcon}>
              <Icon icon={props.icon} color={props.iconColor} colorContrast={props.iconColorContrast} height="4" />
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

  if (props.icon !== undefined || props.label !== undefined || props.currency) {
    const clsWrapper = base({
      model: {
        width: "max"
      },
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
        left: props.iconPosition === "left" ? "2" : undefined,
        right: props.iconPosition === "right" ? "2" : undefined
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

          <div className="w-max relative overflow-hidden">
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
            type="text" name={props.name} value={value}
            placeholder={props.placeholder}
            disabled={props.disabled}
            readOnly={props.readOnly} required={props.required}
            onBlur={() => onBlurHandler()}
            onChange={(e) => onChangeHandler(e)}
            onKeyDown={(e) => onKeyDownHandler(e)} />
            {props.currency && (
              <span className="absolute top-0.5 left-2">
                {props.currencyText}
              </span>
            )}

            {((props.icon !== undefined && !props.currency) || (props.icon !== undefined && props.currency && props.iconPosition === "right")) && (
              <span className={clsIcon}>
                <Icon icon={props.icon} color={props.iconColor} colorContrast={props.iconColorContrast} height="4" />
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
      "focus:outline-none",
    ].join(" ").trim()}
    aria-label={props.ariaLabel}
    aria-labelledby={props.ariaLabelledBy}
    aria-disabled={props.disabled ? "true" : undefined}
    type="text" name={props.name} value={value}
    placeholder={props.placeholder}
    disabled={props.disabled}
    readOnly={props.readOnly} required={props.required}
    onBlur={() => onBlurHandler()}
    onChange={(e) => onChangeHandler(e)}
    onKeyDown={(e) => onKeyDownHandler(e)} />
  )
}

Number.defaultProps = {
  width: "max",
  min: 0,
  disabled: false,
  readOnly: false,
  required: false,
  keyboard: false,
  currency: false,
  separator: "none",
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
  iconPosition: "left",
  labelPosition: "top",
  px: "3",
  py: "1"
}
