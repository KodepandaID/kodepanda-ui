import { AriaProps, base, BorderWidth, Color, ColorContrast, coloring, ColorProps, element, ModelProps, ResponsiveProps, SpacingProps, StandardProps, text, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@zenbu-ui/react-id"
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
  const { dark } = React.useContext(ThemeCtx)
  const id = useId("input-textarea")

  const cls = base({
    model: {
      display: "block",
      width: props.fluid ? "full" : props.width,
      height: props.height
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
      pl: props.pl,
      pr: props.pr,
      pt: props.pt
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
        mx: props.mx,
        my: props.my,
        mb: props.mb,
        ml: props.ml,
        mr: props.mr,
        mt: props.mt,
        px: props.px,
        py: props.py,
        pb: props.pb,
        pl: props.pl,
        pr: props.pr,
        pt: props.pt
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

    return(
      <div className="flex flex-col">
        <textarea
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
        width: props.fluid ? "full" : props.width,
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

    return(
      <React.Fragment>
        {(props.label !== undefined && props.labelPosition === "top") && (
          <label htmlFor={id} className="pl-1">{props.label}</label>
        )}

        <div className={clsWrapper}>
          {(props.label !== undefined && props.labelPosition === "left") && (
            <label htmlFor={id} className="pr-1">{props.label}</label>
          )}

        <textarea
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
        name={props.name}
        placeholder={props.placeholder}
        disabled={props.disabled}
        minLength={props.minLength} maxLength={props.maxLength}
        readOnly={props.readOnly} required={props.required}
        onChange={(e) => {
          if (props.onChange !== undefined) props.onChange(e.target.value)
        }} />
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
    <textarea
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
