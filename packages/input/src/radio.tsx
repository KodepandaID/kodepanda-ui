import { AriaProps, base, coloring, ColorProps, ModelProps, ResponsiveProps, SpacingProps, StandardProps, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { useId } from "@zenbu-ui/react-id"
import * as React from "react"

export interface RadioProps extends AriaProps, StandardProps, ModelProps, ResponsiveProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {
  name: string,
  label: React.ReactNode,
  value: any,
  inline?: boolean,
  checked?: boolean,
  disabled?: boolean,
  required?: boolean,
  onChange?: (checked: boolean, value: any) => void
}

export const Radio: React.FC<RadioProps> = (props) => {
  const id = useId("input-radio")

  const clsWrapper = base({
    model: {
      display: props.inline ? "inline-flex" : undefined,
      width: props.width
    },
    flexbox: {
      flex: props.inline ? false : true,
      alignItems: "center"
    },
    spacing: {
      mx: props.mx,
      my: props.my,
      mb: props.mb,
      ml: props.ml,
      mr: props.inline ? "3" : props.mr,
      mt: props.mt
    }
  })

  return(
    <div className={clsWrapper}>
      <input
      id={id}
      className={[
        "float-left",
        "form-radio",
        "cursor-pointer",
        coloring("text", props.color, props.colorContrast)
      ].join(" ").trim()}
      name={props.name}
      aria-label={props.ariaLabel}
      aria-labelledby={props.ariaLabelledBy}
      aria-disabled={props.disabled ? "true" : undefined}
      type="radio" value={props.value} defaultChecked={props.checked}
      disabled={props.disabled} required={props.required}
      onChange={(e) => {
        if (props.onChange !== undefined) props.onChange(e.target.checked, props.value)
      }} />

      <label htmlFor={props.name} className="pl-1.5">{props.label}</label>
    </div>
  )
}

Radio.defaultProps = {
  width: "max",
  color: "blue",
  colorContrast: "600"
}
