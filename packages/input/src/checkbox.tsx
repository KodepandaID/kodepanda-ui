import { AriaProps, base, coloring, ColorProps, ModelProps, ResponsiveProps, SpacingProps, StandardProps, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@reach/auto-id"
import * as React from "react"
import styled from "styled-components"

export interface CheckboxProps extends AriaProps, StandardProps, ModelProps, ResponsiveProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {
  name: string,
  label?: React.ReactNode,
  checked?: boolean,
  disabled?: boolean,
  required?: boolean,
  onChange?: (value: boolean) => void
}

export const Checkbox: React.FC<CheckboxProps> = (props) => {
  const { theme } = React.useContext(ThemeCtx)
  const id = useId()

  const ti = theme?.inputCheckbox?.[`${props.componentName}`]

  const [checked, setChecked] = React.useState<boolean>(props.checked === undefined ? false : props.checked)

  const clsWrapper = base({
    model: {
      width: ti?.width !== undefined ? ti.width : props.width
    },
    flexbox: {
      flex: true,
      alignItems: "center"
    }
  })

  React.useEffect(() => {
    setChecked(props.checked === undefined ? false : props.checked)
  }, [props.checked])

  const FormCheckbox = styled.input`
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
    display: inline-block;
    vertical-align: middle;
    background-origin: border-box;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    flex-shrink: 0;
    height: 1em;
    width: 1em;
    background-color: #fff;
    border-color: #e2e8f0;
    border-width: 1px;
    border-radius: 0.25rem;
    box-sizing: border-box;
    padding: 0;

    &:checked {
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M5.707 7.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L7 8.586 5.707 7.293z'/%3e%3c/svg%3e");
      border-color: transparent;
      background-color: currentColor;
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
    }
  `

  return(
    <div className={clsWrapper}>
      <FormCheckbox
      id={`zenbu-checkbox-${id}`}
      className={[
        "float-left",
        "cursor-pointer",
        coloring("text", ti?.color !== undefined ? ti.color : props.color, ti?.colorContrast !== undefined ? ti.colorContrast : props.colorContrast)
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
