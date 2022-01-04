import { AriaProps, base, BorderWidth, Color, ColorContrast, coloring, ColorProps, element, ModelProps, ResponsiveProps, SpacingProps, StandardProps, text, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { Icon } from "@zenbu-ui/icon"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@zenbu-ui/react-id"
import * as React from "react"
import moment from "moment"

export interface DateProps extends AriaProps, StandardProps, ModelProps, ResponsiveProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {
  value?: number,
  disabled?: boolean,
  required?: boolean,
  fluid?: boolean,
  label?: React.ReactNode,
  labelPosition?: "left" | "top" | "inside",
  name: string,
  format?: string,
  time?: boolean,
  lang?: string,
  placeholder?: string,
  placeholderColor?: Color,
  placeholderColorContrast?: ColorContrast,
  borderFocusWidth?: BorderWidth
  borderFocusColor?: Color,
  borderFocusColorContrast?: ColorContrast,
  iconColor?: Color,
  iconColorContrast?: ColorContrast,
  onChange?: (unixtime: number, value: string) => void
}

export const Date: React.FC<DateProps> = (props) => {
  const { dark } = React.useContext(ThemeCtx)
  const node = React.useRef<HTMLInputElement>(null)
  const id = useId("input-date")

  const [lang] = React.useState(props.lang === undefined ? "" : props.lang)
  const [value, setValue] = React.useState<string>("")

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

  const removeNonNumeric = (num: string): string => num.toString().replace(/[^0-9]/g, "")

  const formatDate = (num: string): string => {
    const regex = /^(\d{0,2})(\d{0,2})(\d{0,4})$/g;

    if (num.length <= 8) {
      return num.replace(regex, (regex, $1, $2, $3) =>
        [$1, $2, $3].filter((group) => !!group).join('/')
      )
    } else return value
  }

  const formatDateTime = (num: string): string => {
    const regex = /^(\d{0,2})(\d{0,2})(\d{0,4})(\d{0,2})(\d{0,2})$/g;

    if (num.length <= 12) {
      const d = num.replace(regex, (regex, $1, $2, $3) =>
        [$1, $2, $3].filter((group) => !!group).join('/')
      )

      const t = num.replace(regex, (regex, $1, $2, $3, $4, $5) =>
        [$4, $5].filter((group) => !!group).join(':')
      )

      return `${d} ${t}`
    } else return value
  }

  React.useEffect(() => {
    if (props.value !== undefined) setValue(moment.unix(props.value).locale(lang).format(props.format))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.value])

  return(
    <React.Fragment>
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
          type="text" name={props.name} value={value}
          placeholder={props.time ? "DD/MM/YYYY HH:mm" : props.placeholder}
          disabled={props.disabled} required={props.required}
          onChange={(e) => {
            const num = removeNonNumeric(e.target.value)
            if (!props.time) {
              const fmt = formatDate(num)
              setValue(fmt)
              if (fmt.length === 10 && props.onChange !== undefined) {
                const m = moment(fmt, "DD/MM/YYYY")
                props.onChange(m.unix(), m.format(props.format))
              }
            } else {
              const fmt = formatDateTime(num);
              setValue(formatDateTime(num))
              if (fmt.length === 16 && props.onChange !== undefined) {
                const m = moment(fmt, "DD/MM/YYYY HH:mm")
                props.onChange(m.unix(), m.format(props.format))
              }
            }
          }}
          onKeyDown={(e) => {
            if (e.code === "Backspace") {
              setValue(value.substring(0, value.length - 1))
            }
          }}/>

          <span className={clsIcon}>
            <Icon icon="calendar" color={props.iconColor} colorContrast={props.iconColorContrast} height="4" />
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
    </React.Fragment>
  )
}

Date.defaultProps = {
  width: "max",
  lang: "en",
  time: false,
  format: "DD/MM/YYYY",
  disabled: false,
  required: false,
  color: "white",
  textColor: "gray",
  textColorContrast: "700",
  placeholder: "DD/MM/YYYY",
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
  labelPosition: "top",
  px: "3",
  py: "1"
}
