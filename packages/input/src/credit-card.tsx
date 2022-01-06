import { AriaProps, base, BorderWidth, Color, ColorContrast, coloring, ColorProps, element, ModelProps, ResponsiveProps, SpacingProps, StandardProps, text, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@zenbu-ui/react-id"
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
  const { dark } = React.useContext(ThemeCtx)
  const node = React.useRef<HTMLInputElement>(null)
  const id = useId("input-credit-card-number")

  const [cardValue, setCardValue] = React.useState<string | undefined>(props.value)
  const [cardType, setCardType] = React.useState<string>("")
  const [cardValid, setCardValid] = React.useState<boolean>(false)

  const clsWrapper = base({
    model: {
      display: "block",
      width: props.fluid ? "full" : props.width
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
      borderWidth: (props.border || (!cardValid && cardValue !== undefined)) ? props.borderWidth : undefined,
      borderStyle: (props.border || (!cardValid && cardValue !== undefined)) ? props.borderStyle : undefined,
      borderColor: (!cardValid && cardValue !== undefined) ? "red" : props.border ? props.borderColor : undefined,
      borderColorContrast: (!cardValid && cardValue !== undefined) ? "500" : props.border ? props.borderColorContrast : undefined,
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
      pl: props.pl,
      pr: "8",
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
      focusBorderWidth: (!cardValid && cardValue !== undefined && cardValue !== "") ? props.borderWidth : props.borderPosition === undefined ? props.borderFocusWidth : undefined,
      focusBorderColor: (!cardValid && cardValue !== undefined && cardValue !== "") ? "red" : props.borderFocusColor,
      focusBorderColorContrast: (!cardValid && cardValue !== undefined && cardValue !== "") ? "500" : props.borderFocusColorContrast,
      focusBorderPosition: props.borderPosition
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
