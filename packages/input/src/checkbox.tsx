import { AriaProps, base, coloring, ColorProps, ModelProps, ResponsiveProps, SpacingProps, StandardProps, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { useId } from "@zenbu-ui/react-id"
import * as React from "react"

export interface CheckboxProps extends AriaProps, StandardProps, ModelProps, ResponsiveProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {
  name: string,
  label?: React.ReactNode,
  checked?: boolean,
  disabled?: boolean,
  required?: boolean,
  onChange?: (value: boolean) => void
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const id = useId("input-checkbox")

  const [checked, setChecked] = React.useState<boolean>(props.checked === undefined ? false : props.checked)

  const clsWrapper = base({
    model: {
      width: props.width
    },
    flexbox: {
      flex: true,
      alignItems: "center"
    }
  })

  React.useEffect(() => {
    setChecked(props.checked === undefined ? false : props.checked)
  }, [props.checked])

  return(
    <div className={clsWrapper}>
      <input
      id={id}
      className={[
        "float-left",
        "form-checkbox",
        "cursor-pointer",
        coloring("text", props.color, props.colorContrast)
      ].join(" ").trim()}
      name={props.name}
      aria-label={props.ariaLabel}
      aria-labelledby={props.ariaLabelledBy}
      aria-disabled={props.disabled ? "true" : undefined}
      type="checkbox" checked={checked}
      disabled={props.disabled} required={props.required}
      onChange={(e) => {
        setChecked(e.target.checked)
        if (props.onChange !== undefined) props.onChange(e.target.checked)
      }} />

      <label htmlFor={props.name} className="pl-1.5">{props.label}</label>
    </div>
  )
}

Checkbox.defaultProps = {
  width: "full",
  color: "blue",
  colorContrast: "600"
}
