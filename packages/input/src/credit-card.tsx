import { AriaProps, base, BorderWidth, Color, ColorContrast, coloring, ColorProps, element, ModelProps, ResponsiveProps, SpacingProps, StandardProps, text, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@reach/auto-id"
import * as React from "react"
import CardValidator from "card-validator"
import { CreditCardIcon } from "./credit-card/index"
import { MastercardIcon } from "./credit-card/mastercard"
import { VisaIcon } from "./credit-card/visa"
import { JCBIcon } from "./credit-card/jsb"
import { AmericanExpressIcon } from "./credit-card/american-express"

export interface CreditCardProps extends AriaProps, StandardProps, ModelProps, ResponsiveProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {
  value?: string,
  disabled?: boolean,
  required?: boolean,
  fluid?: boolean,
  label?: React.ReactNode,
  labelPosition?: "left" | "top",
  name: string,
  placeholder?: string,
  placeholderColor?: Color,
  placeholderColorContrast?: ColorContrast,
  borderFocusWidth?: BorderWidth,
  borderFocusColor?: Color,
  borderFocusColorContrast?: ColorContrast,
  errorMessage?: string,
  onChange?: (cardNumber: string, valid: boolean, type: string) => void
}

export const CreditCard: React.FC<CreditCardProps> = (props) => {
  const { dark, theme } = React.useContext(ThemeCtx)
  const node = React.useRef<HTMLInputElement>(null)
  const id = useId("input-credit-card-number")

  const ti = theme?.inputCreditCard?.[`${props.componentName}`]

  const [cardValue, setCardValue] = React.useState<string | undefined>(props.value)
  const [cardType, setCardType] = React.useState<string>("")
  const [cardValid, setCardValid] = React.useState<boolean>(false)

  const clsWrapper = base({
    model: {
      display: "block",
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
      pl: ti?.pl !== undefined ? ti.pl : props.pl,
      pr: "8",
      pt: ti?.px !== undefined ? ti.px : props.pt
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
      focusBorderWidth: (!cardValid && cardValue !== undefined && cardValue !== "") ? ti?.borderWidth !== undefined ? ti.borderWidth : props.borderWidth : ti?.borderFocusWidth !== undefined ? ti.borderFocusWidth : props.borderPosition === undefined ? props.borderFocusWidth : undefined,
      focusBorderColor: (!cardValid && cardValue !== undefined && cardValue !== "") ? "red" : ti?.borderFocusColor !== undefined ? ti.borderFocusColor : props.borderFocusColor,
      focusBorderColorContrast: (!cardValid && cardValue !== undefined && cardValue !== "") ? "500" : ti?.borderFocusColorContrast !== undefined ? ti.borderFocusColorContrast : props.borderFocusColorContrast,
      focusBorderPosition: ti?.borderPosition !== undefined ? ti.borderPosition : props.borderPosition
    }
  })

  const clsIcon = base({
    model: {
      width: (cardType === "mastercard" || cardType === "american-express") ? "8" : undefined
    },
    positioning: {
      position: "absolute",
      right: "2",
    }
  })

  const removeNonNumeric = (num: string): string => num.toString().replace(/[^0-9]/g, "")

  const formatCardNumber = (num: string, type: string): string | null => {
    if ((type === "mastercard" && num.length <= 16) ||
      (type === "visa" && num.length <= 16) ||
      (type === "jcb" && num.length <= 16) ||
      type === undefined) {
      const regex = /^(\d{0,4})(\d{0,4})(\d{0,4})(\d{0,4})$/g;

      return num.replace(regex, (regex, $1, $2, $3, $4) =>
        [$1, $2, $3, $4].filter((group) => !!group).join(' ')
      )
    } else if (type === "american-express" && num.length <= 15) {
      const regex = /^(\d{0,4})(\d{0,6})(\d{0,5})$/g;

      return num.replace(regex, (regex, $1, $2, $3) =>
        [$1, $2, $3].filter((group) => !!group).join(' ')
      )
    }

    return null
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    let cardNumber: string | null
    const num = removeNonNumeric(e.target.value)
    let cv = CardValidator.number(num)
    setCardType(cv.card?.type === undefined ? "" : cv.card.type)

    if (cv.card === null) {
      setCardValid(cv.isValid)
      cardNumber = formatCardNumber(num, "")
      if (cardNumber !== null) setCardValue(cardNumber)
      else setCardValue(num)
    } else {
      cardNumber = formatCardNumber(num, cv.card.type)
      if (cardNumber !== null) {
        setCardValid(cv.isValid)
        cv = CardValidator.number(removeNonNumeric(cardNumber))
        setCardValue(cardNumber)
      }
    }

    if (props.onChange !== undefined) props.onChange(removeNonNumeric(cardNumber === null ? "" : cardNumber), cv.isValid, cv.card?.type === undefined ? "" : cv.card.type)
  }

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
          "relative inline-flex items-center",
          base({model: {
            width: (ti?.fluid || (props.fluid && !ti?.fluid)) ? "full" : ti?.width !== undefined ? ti.width : props.width
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
          defaultValue={props.value}
          aria-label={props.ariaLabel}
          aria-labelledby={props.ariaLabelledBy}
          aria-disabled={props.disabled ? "true" : undefined}
          type="text" name={props.name} value={cardValue === undefined ? "" : cardValue}
          placeholder={props.placeholder}
          disabled={props.disabled} required={props.required}
          onChange={(e) => onChangeHandler(e)} />
          <span className={clsIcon}>
            {(cardType === "") && (<CreditCardIcon />)}
            {cardType === "american-express" && (<AmericanExpressIcon />)}
            {cardType === "mastercard" && (<MastercardIcon />)}
            {cardType === "visa" && (<VisaIcon />)}
            {cardType === "jcb" && (<JCBIcon />)}
          </span>
        </div>
        {(!cardValid && cardValue !== undefined && cardValue !== "") && (<p className="text-xs text-red-500 mt-0.5">{props.errorMessage}</p>)}
      </div>
    </React.Fragment>
  )
}

CreditCard.defaultProps = {
  width: "56",
  disabled: false,
  required: false,
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
  labelPosition: "top",
  errorMessage: "Card number not valid",
  px: "3",
  py: "1"
}
