import { AriaProps, base, BorderWidth, Color, ColorContrast, coloring, ColorProps, element, ModelProps, ResponsiveProps, SpacingProps, StandardProps, text, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { Icon, Outline, Solid } from "@zenbu-ui/icon"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@reach/auto-id"
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
  const { dark, theme } = React.useContext(ThemeCtx)
  const node = React.useRef<HTMLInputElement>(null)
  const id = useId("input-number")

  const ti = theme?.input?.[`${props.componentName}`]

  const [value, setValue] = React.useState<number | string>("")

  React.useEffect(() => {
    if (props.min !== undefined && value === "") {
      setValue(props.min)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value])

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
      mx: ti?.mx !== undefined ? ti.mx : props.mx,
      my: ti?.my !== undefined ? ti.my : props.my,
      mb: ti?.mb !== undefined ? ti.mb : props.mb,
      ml: ti?.ml !== undefined ? ti.ml : props.ml,
      mr: ti?.mr !== undefined ? ti.mr : props.mr,
      mt: ti?.mt !== undefined ? ti.mt : props.mt,
      px: ti?.px !== undefined ? ti.px : props.px,
      py: ti?.py !== undefined ? ti.py : props.py,
      pb: ti?.pb !== undefined ? ti.pb : props.pb,
      pl: ((ti?.iconPosition === "left" && props.icon !== undefined) || (props.iconPosition === "left" && ti?.iconPosition === undefined && props.icon !== undefined) || props.currency) ? "8" : ti?.pl !== undefined ? ti.pl : props.pl,
      pr: (ti?.iconPosition === "right" || (props.iconPosition === "right" && ti?.iconPosition === undefined && props.icon !== undefined)) ? "8" : ti?.pr !== undefined ? ti.pr : props.pr,
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
        pl: ((ti?.iconPosition === "left" && props.icon !== undefined) || (props.iconPosition === "left" && ti?.iconPosition === undefined && props.icon !== undefined) || props.currency) ? "8" : ti?.pl !== undefined ? ti.pl : props.pl,
        pr: (ti?.iconPosition === "right" || (props.iconPosition === "right" && ti?.iconPosition === undefined && props.icon !== undefined)) ? "8" : ti?.pr !== undefined ? ti.pr : props.pr,
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
        left: (ti?.iconPosition === "left" || (props.iconPosition === "left" && ti?.iconPosition === undefined)) ? "2" : undefined,
        right: (ti?.iconPosition === "right" || (props.iconPosition === "right" && ti?.iconPosition === undefined)) ? "2" : undefined
      }
    })

    return(
      <div className="flex flex-col">
        <div className="relative w-max inline-flex items-center">
          <input
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
          type="text" name={props.name} value={value}
          placeholder={props.placeholder}
          disabled={props.disabled}
          readOnly={props.readOnly} required={props.required}
          onBlur={() => onBlurHandler()}
          onChange={(e) => onChangeHandler(e)}
          onKeyDown={(e) => onKeyDownHandler(e)} />
          {props.icon !== undefined && (
            <span className={clsIcon}>
              <Icon icon={props.icon}
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

  if (props.icon !== undefined || props.label !== undefined || props.currency) {
    const clsWrapper = base({
      model: {
        width: (ti?.fluid || (props.fluid && ti?.fluid === undefined)) ? "full" : ti?.width !== undefined ? ti.width : props.width
      },
      flexbox: {
        flex: true,
        alignItems: "center"
      },
      positioning: {
        position: "relative"
      },
      spacing: {
        mx: props.icon === undefined ? ti?.mx !== undefined ? ti.mx : props.mx : undefined,
        my: props.icon === undefined ? ti?.my !== undefined ? ti.my : props.my : undefined,
        mb: props.icon === undefined ? ti?.mb !== undefined ? ti.mb : props.mb : undefined,
        ml: props.icon === undefined ? ti?.ml !== undefined ? ti.ml : props.ml : undefined,
        mr: props.icon === undefined ? ti?.mr !== undefined ? ti.mr : props.mr : undefined,
        mt: props.icon === undefined ? ti?.mt !== undefined ? ti.mt : props.mt : undefined
      }
    })

    const clsIcon = base({
      positioning: {
        position: "absolute",
        left: (ti?.iconPosition === "left" || (props.iconPosition === "left" && ti?.iconPosition === undefined)) ? "2" : undefined,
        right: (ti?.iconPosition === "right" || (props.iconPosition === "right" && ti?.iconPosition === undefined)) ? "2" : undefined
      }
    })

    return(
      <React.Fragment>
        {((props.label !== undefined && ti?.labelPosition === "top") || (props.label !== undefined && props.labelPosition === "top" && ti?.labelPosition === undefined)) && (
          <label htmlFor={id} className="pl-1">{props.label}</label>
        )}

        <div className={clsWrapper}>
          {((props.label !== undefined && ti?.labelPosition === "left") || (props.label !== undefined && props.labelPosition === "left" && ti?.labelPosition === undefined)) && (
            <label htmlFor={id} className="pr-1">{props.label}</label>
          )}

          <div className={[
            "w-max relative overflow-hidden",
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

            {((props.icon !== undefined && !props.currency) || (props.icon !== undefined && props.currency && ti?.iconPosition === "right") || (props.icon !== undefined && props.currency && props.iconPosition === "right" && ti?.iconPosition === undefined)) && (
              <span className={clsIcon}>
                <Icon icon={props.icon}
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
      </React.Fragment>
    )
  }

  return(
    <input
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
