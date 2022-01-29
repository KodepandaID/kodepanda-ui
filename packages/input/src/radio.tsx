import { AriaProps, base, coloring, ColorProps, ModelProps, ResponsiveProps, SpacingProps, StandardProps, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@zenbu-ui/react-id"
import * as React from "react"
import styled from "styled-components"

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
  const { theme } = React.useContext(ThemeCtx)
  const id = useId("input-radio")

  const ti = theme?.inputRadio?.[`${props.componentName}`]

  const clsWrapper = base({
    model: {
      display: (ti?.inline || (props.inline && ti?.inline === undefined)) ? "inline-flex" : undefined,
      width: ti?.width !== undefined ? ti.width : props.width
    },
    flexbox: {
      flex: (ti?.inline || (props.inline && ti?.inline === undefined)) ? false : true,
      alignItems: "center"
    },
    spacing: {
      mx: ti?.mx !== undefined ? ti.mx : props.mx,
      my: ti?.my !== undefined ? ti.my : props.my,
      mb: ti?.mb !== undefined ? ti.mb : props.mb,
      ml: ti?.ml !== undefined ? ti.ml : props.ml,
      mr: (ti?.inline || (props.inline && ti?.inline === undefined)) ? "3" : ti?.mr !== undefined ? ti.mr : props.mr,
      mt: ti?.mt !== undefined ? ti.mt : props.mt,
    }
  })

  const FormRadio = styled.input`
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
    border-radius: 100%;
    height: 1em;
    width: 1em;
    background-color: #fff;
    border-color: #e2e8f0;
    border-width: 1px;
    box-sizing: border-box;
    padding: 0;

    &:checked {
      background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
      border-color: transparent;
      background-color: currentColor;
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
    }
  `

  return(
    <div className={clsWrapper}>
      <FormRadio
      id={id}
      className={[
        "float-left",
        "cursor-pointer",
        coloring("text", ti?.color !== undefined ? ti.color : props.color, ti?.colorContrast !== undefined ? ti.colorContrast : props.colorContrast)
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
