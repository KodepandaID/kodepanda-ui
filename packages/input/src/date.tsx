import { AriaProps, base, BorderWidth, Color, ColorContrast, coloring, ColorProps, element, ModelProps, ResponsiveProps, SpacingProps, StandardProps, text, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { Icon } from "@zenbu-ui/icon"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@reach/auto-id"
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
  const { dark, theme } = React.useContext(ThemeCtx)
  const node = React.useRef<HTMLInputElement>(null)
  const id = useId()

  const ti = theme?.inputDate?.[`${props.componentName}`]

  const [lang] = React.useState(props.lang === undefined ? "" : props.lang)
  const [value, setValue] = React.useState<string>("")

  const clsWrapper = base({
    model: {
      width: (ti?.fluid || (props.fluid && ti?.fluid === undefined)) ? "full" : ti?.width !== undefined ? ti.width : props.width
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
      px: ti?.px !== undefined ? ti.px : props.px,
      py: ti?.py !== undefined ? ti.py : props.py,
      pb: ti?.pb !== undefined ? ti.pb : props.pb,
      pl: "8",
      pr: "4",
      pt: ((props.label !== undefined && ti?.labelPosition === "inside") || (props.label !== undefined && props.labelPosition === "inside" && ti?.labelPosition === undefined)) ? "5" : ti?.pt !== undefined ? ti.pt : props.pt
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
      focusBorderWidth: ti?.borderFocusWidth !== undefined ? ti.borderFocusWidth : props.borderPosition === undefined ? props.borderFocusWidth : undefined,
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
      {((props.label !== undefined && ti?.labelPosition === "top") || (props.label !== undefined && props.labelPosition === "top" && ti?.labelPosition === undefined)) && (
        <label htmlFor={`zenbu-date-${id}`} className="pl-1">{props.label}</label>
      )}

      <div className={clsWrapper}>
        {((props.label !== undefined && ti?.labelPosition === "left") || (props.label !== undefined && props.labelPosition === "left" && ti?.labelPosition === "left")) && (
          <label htmlFor={`zenbu-date-${id}`} className="pr-1">{props.label}</label>
        )}

        <div className={[
            "relative inline-flex items-center",
            base({model: {
              width: (ti?.fluid || (props.fluid && ti?.fluid === undefined)) ? "full" : ti?.width !== undefined ? ti.width : props.width
            }})
          ].join(" ").trim()}>
          <input
          ref={node}
          id={`zenbu-date-${id}`}
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
            <Icon icon="calendar"
            color={ti?.iconColor !== undefined ? ti.iconColor : props.iconColor}
            colorContrast={ti?.iconColorContrast !== undefined ? ti.iconColorContrast : props.iconColorContrast} height="4" />
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

        {((props.label !== undefined && ti?.labelPosition === "inside") || (props.label !== undefined && props.labelPosition === "inside" && ti?.labelPosition === "inside")) && (
          <label htmlFor={`zenbu-date-${id}`} className={[
            "absolute",
            "top-0",
            `px-${ti?.px !== undefined ? ti.px : props.px}`
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
