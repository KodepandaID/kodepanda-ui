import { AriaProps, base, BorderWidth, Color, ColorContrast, coloring, ColorProps, element, ModelProps, ResponsiveProps, SpacingProps, StandardProps, text, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@reach/auto-id"
import * as React from "react"

export interface TextareaProps extends AriaProps, StandardProps, ModelProps, ResponsiveProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {
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
  minLength?: number,
  maxLength?: number,
  placeholderColor?: Color,
  placeholderColorContrast?: ColorContrast,
  borderFocusWidth?: BorderWidth,
  borderFocusColor?: Color,
  borderFocusColorContrast?: ColorContrast,
  onChange?: (value: string) => void
}

export const Textarea: React.FC<TextareaProps> = (props) => {
  const { dark, theme } = React.useContext(ThemeCtx)
  const id = useId()

  const ti = theme?.inputTextarea?.[`${props.componentName}`]

  const cls = base({
    model: {
      display: "block",
      width: (ti?.fluid || (props.fluid && ti?.fluid === undefined)) ? "full" : ti?.width !== undefined ? ti.width : props.width,
      height: ti?.height !== undefined ? ti.height : props.height
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
      pl: ti?.pl !== undefined ? ti.pl : props.pl,
      pr: ti?.pr !== undefined ? ti.pr : props.pr,
      pt: ti?.pt !== undefined ? ti.pt : props.pt
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
        mx: ti?.mx !== undefined ? ti.mx : props.mx,
        my: ti?.my !== undefined ? ti.my : props.my,
        mb: ti?.mb !== undefined ? ti.mb : props.mb,
        ml: ti?.ml !== undefined ? ti.ml : props.ml,
        mr: ti?.mr !== undefined ? ti.mr : props.mr,
        mt: ti?.mt !== undefined ? ti.mt : props.mt,
        px: ti?.px !== undefined ? ti.px : props.px,
        py: ti?.py !== undefined ? ti.py : props.py,
        pb: ti?.pb !== undefined ? ti.pb : props.pb,
        pl: ti?.pl !== undefined ? ti.pl : props.pl,
        pr: ti?.pr !== undefined ? ti.pr : props.pr,
        pt: ti?.pt !== undefined ? ti.pt : props.pt
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

    return(
      <div className="flex flex-col">
        <textarea
        id={`zenbu-textarea-${id}`}
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
        name={props.name}
        placeholder={props.placeholder}
        disabled={props.disabled}
        minLength={props.minLength} maxLength={props.maxLength}
        readOnly={props.readOnly} required={props.required}
        onChange={(e) => {
          if (props.onChange !== undefined) props.onChange(e.target.value)
        }} />
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

  if (props.label !== undefined) {
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
        mx: ti?.mx !== undefined ? ti.mx : props.mx,
        my: ti?.my !== undefined ? ti.my : props.my,
        mb: ti?.mb !== undefined ? ti.mb : props.mb,
        ml: ti?.ml !== undefined ? ti.ml : props.ml,
        mr: ti?.mr !== undefined ? ti.mr : props.mr,
        mt: ti?.mt !== undefined ? ti.mt : props.mt
      }
    })

    return(
      <React.Fragment>
        {((props.label !== undefined && ti?.labelPosition === "top") || (props.label !== undefined && props.labelPosition === "top" && ti?.labelPosition === undefined)) && (
          <label htmlFor={`zenbu-textarea-${id}`} className="pl-1">{props.label}</label>
        )}

        <div className={clsWrapper}>
          {((props.label !== undefined && ti?.labelPosition === "left") || (props.label !== undefined && props.labelPosition === "left" && ti?.labelPosition === undefined)) && (
            <label htmlFor={`zenbu-textarea-${id}`} className="pr-1">{props.label}</label>
          )}

        <textarea
        id={`zenbu-textarea-${id}`}
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
        name={props.name}
        placeholder={props.placeholder}
        disabled={props.disabled}
        minLength={props.minLength} maxLength={props.maxLength}
        readOnly={props.readOnly} required={props.required}
        onChange={(e) => {
          if (props.onChange !== undefined) props.onChange(e.target.value)
        }} />
          {((props.label !== undefined && ti?.labelPosition === "inside") || (props.label !== undefined && props.labelPosition === "inside" && ti?.labelPosition === undefined)) && (
            <label htmlFor={`zenbu-textarea-${id}`} className={[
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
    <textarea
    id={`zenbu-textarea-${id}`}
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
    name={props.name}
    placeholder={props.placeholder}
    disabled={props.disabled}
    minLength={props.minLength} maxLength={props.maxLength}
    readOnly={props.readOnly} required={props.required}
    onChange={(e) => {
      if (props.onChange !== undefined) props.onChange(e.target.value)
    }} />
  )
}

Textarea.defaultProps = {
  width: "max",
  disabled: false,
  readOnly: false,
  required: false,
  color: "white",
  textColor: "gray",
  textColorContrast: "700",
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
