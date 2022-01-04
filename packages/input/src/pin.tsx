import { AriaProps, base, BorderWidth, Color, ColorContrast, ColorProps, ModelProps, ResponsiveProps, SpacingProps, StandardProps, text, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@zenbu-ui/react-id"
import * as React from "react"

export interface PinProps extends AriaProps, StandardProps, ModelProps, ResponsiveProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {
  length?: number,
  name: string,
  fluid?: boolean,
  placeholderColor?: Color,
  placeholderColorContrast?: ColorContrast,
  borderFocusWidth?: BorderWidth,
  borderFocusColor?: Color,
  borderFocusColorContrast?: ColorContrast,
  onComplete?: (pin: string) => void
}

export const Pin: React.FC<PinProps> = (props) => {
  const { dark } = React.useContext(ThemeCtx)
  const id = useId("input-pin")

  const [pin, setPin] = React.useState<Array<string>>([])
  const [length] = React.useState<number>(props.length === undefined ? 0 : props.length)

  const clsWrapper = base({
    model: {
      width: props.width,
      display: "block"
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
      width: "10"
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
    spacing: {
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
      textAlign: "center",
      fontSize: props.fontSize,
      fontWeight: props.fontWeight
    }
  })

  const removeNonNumeric = (num: string): string => num.toString().replace(/[^0-9]/g, "")

  React.useEffect(() => {
    for (let i = 0; i < length; i++) {
      setPin((old) => [...old, ""])
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(() => {
    const f = pin.filter((o) => o === "")
    if (f.length === 0 && props.onComplete !== undefined) props.onComplete(pin.join(""))
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pin])

  return(
    <div className={clsWrapper}>
      <div className="flex items-center space-x-2">
        {[...Array(length)].map((el, i) => {
          const ref = React.createRef<HTMLInputElement>()
          return(
            <input
            ref={ref}
            id={`${id}-${i+1}`}
            key={`${id}-${i+1}`}
            name={props.name}
            className={[
              cls,
              clsText
            ].join(" ").trim()}
            aria-label={props.ariaLabel}
            aria-required="true"
            maxLength={1}
            min={0}
            max={9}
            type="numeric"
            tabIndex={0}
            onChange={(e) => {
              const tmp = [...pin]
              tmp[i] = removeNonNumeric(e.target.value)
              setPin(tmp)
              if (ref.current?.value !== undefined) ref.current.value = removeNonNumeric(e.target.value)
              if (e.target.value !== "" && i < length-1) document.getElementById(`${id}-${i+2}`)?.focus()
            }}
            onKeyDown={(e) => {
              if (e.code === "Backspace" && i > 0 && ref.current?.value === "") document.getElementById(`${id}-${i}`)?.focus()
            }} />
          )
        })}
      </div>
    </div>
  )
}

Pin.defaultProps = {
  ariaLabel: "Enter pin code",
  width: "max",
  length: 4,
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
  px: "3",
  py: "1"
}
