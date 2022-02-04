import { base, BorderWidth, Color, ColorContrast, ColorProps, ModelProps, SpacingProps, StandardProps, text, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { Input } from "@zenbu-ui/input"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@reach/auto-id"
import * as React from "react"

type Columns = {
  header: string,
  accessor: string,
  position?: string,
  width?: string
}

interface TableProps extends StandardProps, ColorProps, ModelProps, VisualProps, VisualTextProps, SpacingProps {
  stripe?: boolean,
  numbering?: boolean,
  checkbox?: boolean,
  colNumber?: React.ReactNode,
  rowNumber?: (idx: number) => React.ReactNode,
  columns: Array<Columns>,
  rows: Array<any>,
  colColor?: Color,
  colColorContrast?: ColorContrast,
  darkColColor?: Color,
  darkColColorContrast?: ColorContrast,
  colBorderWidth?: BorderWidth,
  colBorderColor?: Color,
  colBorderColorContrast?: ColorContrast,
  rowColor?: Color,
  rowColorContrast?: ColorContrast,
  rowColorHover?: Color,
  rowColorHoverContrast?: ColorContrast,
  darkRowColor?: Color,
  darkRowColorContrast?: ColorContrast,
  darkRowColorHover?: Color,
  darkRowColorHoverContrast?: ColorContrast,
  rowBorderWidth?: BorderWidth,
  rowBorderColor?: Color,
  rowBorderColorContrast?: ColorContrast,
  stripeColor?: Color,
  stripeColorContrast?: ColorContrast,
  darkStripeColor?: Color,
  darkStripeColorContrast?: ColorContrast,
  checkboxColor?: Color,
  checkboxColorContrast?: ColorContrast,
  darkCheckboxColor?: Color,
  darkCheckboxColorContrast?: ColorContrast,
  onSelected?: (selected: Array<number>) => void
}

export const Table: React.FC<TableProps> = (props) => {
  const { dark, theme } = React.useContext(ThemeCtx)
  const id = useId("table")

  const tb = theme?.table?.[`${props.componentName}`]

  const [checkedAll, setCheckedAll] = React.useState<boolean>(false)
  const [checked, setChecked] = React.useState<Array<number>>([])
  const columns = React.useMemo(() => props.columns, [props.columns])
  const rows = React.useMemo(() => props.rows, [props.rows])

  const cls = base({
    model: {
      width: tb?.width !== undefined ? tb.width : props.width,
      height: tb?.height !== undefined ? tb.height : props.height,
      overflow: "hidden"
    },
    visual: {
      dark: dark,
      bgColor: tb?.color !== undefined ? tb.color : props.color,
      bgColorContrast: tb?.colorContrast !== undefined ? tb.colorContrast : props.colorContrast,
      darkBgColor: tb?.darkColor !== undefined ? tb.darkColor : props.darkColor,
      darkBgColorContrast: tb?.darkColorContrast !== undefined ? tb.darkColorContrast : props.darkColorContrast,
      borderWidth: (tb?.border && tb.borderWidth !== undefined) ? tb.borderWidth : (props.border && tb?.border === undefined) ? props.borderWidth : undefined,
      borderStyle: (tb?.border && tb.borderStyle !== undefined) ? tb.borderStyle : (props.border && tb?.border === undefined) ? props.borderStyle : undefined,
      borderColor: (tb?.border && tb.borderColor !== undefined) ? tb.borderColor : (props.border && tb?.border === undefined) ? props.borderColor : undefined,
      borderColorContrast: (tb?.border && tb.borderColorContrast !== undefined) ? tb.borderColorContrast : (props.border && tb?.border === undefined) ? props.borderColorContrast : undefined,
      borderRadius: tb?.rounded !== undefined ? tb.rounded : props.rounded,
      borderRadiusPosition: tb?.roundedPosition !== undefined ? tb.roundedPosition : props.roundedPosition,
      shadow: tb?.shadow !== undefined ? tb.shadow : props.shadow,
      shadowColor: (tb?.shadow !== undefined && tb.shadowColor !== undefined) ? tb.shadowColor : props.shadow !== undefined ? props.shadowColor : undefined,
      shadowColorContrast: (tb?.shadow !== undefined && tb.shadowColorContrast !== undefined) ? tb.shadowColorContrast : props.shadow !== undefined ? props.shadowColorContrast : undefined,
      shadowOpacity: (tb?.shadow !== undefined && tb.shadowOpacity !== undefined) ? tb.shadowOpacity : props.shadow !== undefined ? props.shadowOpacity : undefined,
      darkShadowColor: (tb?.shadow !== undefined && tb.darkShadowColor !== undefined) ? tb.darkShadowColor : props.shadow !== undefined ? props.darkShadowColor : undefined,
      darkShadowColorContrast: (tb?.shadow !== undefined && tb.darkShadowColorContrast) ? tb.darkShadowColorContrast : props.shadow !== undefined ? props.darkShadowColorContrast : undefined,
      darkShadowOpacity: (tb?.shadow !== undefined && tb.darkShadowOpacity !== undefined) ? tb.darkShadowOpacity : props.shadow !== undefined ? props.darkShadowOpacity : undefined,
    },
    spacing: {
      mx: tb?.mx !== undefined ? tb.mx : props.mx,
      my: tb?.my !== undefined ? tb.my : props.my,
      mb: tb?.mb !== undefined ? tb.mb : props.mb,
      ml: tb?.ml !== undefined ? tb.ml : props.ml,
      mr: tb?.mr !== undefined ? tb.mr : props.mr,
      mt: tb?.mt !== undefined ? tb.mt : props.mt
    }
  })

  const clsText = text({
    visualText: {
      dark: dark,
      textColor: tb?.textColor !== undefined ? tb.textColor : props.textColor,
      textColorContrast: tb?.textColorContrast !== undefined ? tb.textColorContrast : props.textColorContrast,
      darkTextColor: tb?.darkTextColor !== undefined ? tb.darkTextColor : props.darkTextColor,
      darkTextColorContrast: tb?.darkTextColorContrast !== undefined ? tb.darkTextColorContrast : props.darkTextColorContrast,
      fontSize: tb?.fontSize !== undefined ? tb.fontSize : props.fontSize
    }
  })

  const clsThead = base({
    visual: {
      dark: false,
      borderWidth: tb?.colBorderWidth !== undefined ? tb.colBorderWidth : props.colBorderWidth !== undefined ? props.colBorderWidth : props.borderWidth,
      borderStyle: tb?.borderStyle !== undefined ? tb.borderStyle : props.borderStyle,
      borderColor: tb?.colBorderColor !== undefined ? tb.colBorderColor : props.colBorderColor !== undefined ? props.colBorderColor : props.borderColor,
      borderColorContrast: tb?.colBorderColorContrast !== undefined ? tb.colBorderColorContrast : props.colBorderColorContrast !== undefined ? props.colBorderColorContrast : props.borderColorContrast,
      borderPosition: "bottom"
    }
  })

  const clsTH = (idx: number): string => {
    const cls = base({
      visual: {
        dark: dark,
        bgColor: tb?.colColor !== undefined ? tb.colColor : props.colColor,
        bgColorContrast: tb?.colColorContrast !== undefined ? tb.colColorContrast : props.colColorContrast,
        darkBgColor: tb?.darkColColor !== undefined ? tb.darkColColor : props.darkColColor,
        darkBgColorContrast: tb?.darkColColorContrast !== undefined ? tb.darkColColorContrast : props.darkColColorContrast,
        borderWidth: ((tb?.border && idx === 0) || (tb?.border === false) || (props.border && tb?.border === undefined && idx === 0) || (!props.border && tb?.border === undefined)) ? undefined : tb?.colBorderWidth !== undefined ? tb.colBorderWidth : props.colBorderWidth !== undefined ? props.colBorderWidth : tb?.borderWidth !== undefined ? tb.borderWidth : props.borderWidth,
        borderStyle: ((tb?.border && idx === 0) || (tb?.border === false) || (props.border && tb?.border === undefined && idx === 0) || (!props.border && tb?.border === undefined)) ? undefined : tb?.borderStyle !== undefined ? tb.borderStyle : props.borderStyle,
        borderColor: ((tb?.border && idx === 0) || (tb?.border === false) || (props.border && tb?.border === undefined && idx === 0) || (!props.border && tb?.border === undefined)) ? undefined : tb?.colBorderColor !== undefined ? tb.colBorderColor : props.colBorderColor !== undefined ? props.colBorderColor : tb?.borderColor !== undefined ? tb.borderColor : props.borderColor,
        borderColorContrast: ((tb?.border && idx === 0) || (tb?.border === false) || (props.border && tb?.border === undefined && idx === 0) || (!props.border && tb?.border === undefined)) ? undefined : tb?.colBorderColorContrast !== undefined ? tb.colBorderColorContrast : props.colBorderColorContrast !== undefined ? props.colBorderColorContrast : tb?.borderColorContrast !== undefined ? tb.borderColorContrast : props.borderColorContrast,
        borderPosition: ((tb?.border && idx > 0) || (props.border && tb?.border === undefined && idx > 0)) ? "left" : undefined
      }
    })

    return cls
  }

  const clsTbodyTr = base({
    visual: {
      dark: false,
      borderWidth: tb?.rowBorderWidth !== undefined ? tb.rowBorderWidth : props.rowBorderWidth !== undefined ? props.rowBorderWidth : tb?.borderWidth !== undefined ? tb.borderWidth : props.borderWidth,
      borderStyle: tb?.borderStyle !== undefined ? tb.borderStyle : props.borderStyle,
      borderColor: tb?.rowBorderColor !== undefined ? tb.rowBorderColor : props.rowBorderColor !== undefined ? props.rowBorderColor : tb?.borderColor !== undefined ? tb.borderColor : props.borderColor,
      borderColorContrast: tb?.rowBorderColorContrast !== undefined ? tb.rowBorderColorContrast : props.rowBorderColorContrast !== undefined ? props.rowBorderColorContrast : tb?.borderColorContrast !== undefined ? tb.borderColorContrast : props.borderColorContrast,
      borderPosition: "bottom"
    }
  })

  const clsTD = (idx: number, first: boolean, rowColor: Color | undefined, rowColorContrast: ColorContrast | undefined): string => {
    const cls = base({
      visual: {
        dark: dark,
        bgColor: tb?.rowColor !== undefined ? tb.rowColor : rowColor !== undefined ? rowColor : (props.stripe && isEven(idx)) ? tb?.stripeColor !== undefined ? tb.stripeColor : props.stripeColor : tb?.rowColor !== undefined ? tb.rowColor : props.rowColor,
        bgColorContrast: tb?.rowColorContrast !== undefined ? tb.rowColorContrast : rowColorContrast !== undefined ? rowColorContrast : (props.stripe && isEven(idx)) ? tb?.stripeColorContrast !== undefined ? tb.stripeColorContrast : props.stripeColorContrast : tb?.rowColorContrast !== undefined ? tb.rowColorContrast : props.rowColorContrast,
        darkBgColor: (props.stripe && isEven(idx)) ? tb?.darkStripeColor !== undefined ? tb.darkStripeColor : props.darkStripeColor : tb?.darkRowColor !== undefined ? tb.darkRowColor : props.darkRowColor,
        darkBgColorContrast: (props.stripe && isEven(idx)) ? tb?.darkStripeColorContrast !== undefined ? tb.darkStripeColorContrast : props.darkStripeColorContrast : tb?.darkRowColorContrast !== undefined ? tb.darkRowColorContrast : props.darkRowColorContrast,
        borderWidth: ((tb?.border && first) || (tb?.border === false) || (props.border && tb?.border === undefined && first )|| (!props.border && tb?.border === undefined)) ? undefined : tb?.rowBorderWidth !== undefined ? tb.rowBorderWidth : props.rowBorderWidth !== undefined ? props.rowBorderWidth : tb?.borderWidth !== undefined ? tb.borderWidth : props.borderWidth,
        borderStyle: ((tb?.border && first) || (tb?.border === false) || (props.border && tb?.border === undefined && first )|| (!props.border && tb?.border === undefined)) ? undefined : tb?.borderStyle !== undefined ? tb.borderStyle : props.borderStyle,
        borderColor: ((tb?.border && first) || (tb?.border === false) || (props.border && tb?.border === undefined && first )|| (!props.border && tb?.border === undefined)) ? undefined : tb?.rowBorderColor !== undefined ? tb.rowBorderColor : props.rowBorderColor !== undefined ? props.rowBorderColor : tb?.borderColor !== undefined ? tb.borderColor : props.borderColor,
        borderColorContrast: ((tb?.border && first) || (tb?.border === false) || (props.border && tb?.border === undefined && first )|| (!props.border && tb?.border === undefined)) ? undefined : tb?.rowBorderColorContrast !== undefined ? tb.rowBorderColorContrast : props.rowBorderColorContrast !== undefined ? props.rowBorderColorContrast : tb?.borderColorContrast !== undefined ? tb.borderColorContrast : props.borderColorContrast,
        borderPosition: ((tb?.border && !first) || (props.border && tb?.border === undefined && !first)) ? "left" : undefined
      }
    })

    return cls
  }

  const clsContent = base({
    spacing: {
      px: tb?.px !== undefined ? tb.px : props.px,
      py: tb?.py !== undefined ? tb.py : props.py,
      pb: tb?.pb !== undefined ? tb.pb : props.pb,
      pl: tb?.pl !== undefined ? tb.pl : props.pl,
      pr: tb?.pr !== undefined ? tb.pr : props.pr,
      pt: tb?.pt !== undefined ? tb.pt : props.pt
    }
  })

  const isEven = (n: number) => {
    return Math.abs(n % 2) === 1
  }

  const removeChecked = (idx: number): Array<number> => {
    const tmp = checked
    const index = tmp.indexOf(idx, 0)
    if (index > -1) {
      tmp.splice(index, 1)
    }

    return tmp
  }

  return(
    <table id={id} className={[cls, clsText].join(" ").trim()}>
      <thead className={clsThead}>
        <tr>
          {props.checkbox &&  (
            <th className={[clsTH(0), "w-14", clsContent].join(" ")}>
              <Input.Checkbox name="checkbox_all"
              color={tb?.checkboxColor !== undefined ? tb.checkboxColor : props.checkboxColor}
              colorContrast={tb?.checkboxColorContrast !== undefined ? tb.checkboxColorContrast : props.checkboxColorContrast}
              darkColor={tb?.darkCheckboxColor !== undefined ? tb.darkCheckboxColor : props.darkCheckboxColor}
              darkColorContrast={tb?.darkCheckboxColorContrast !== undefined ? tb.darkCheckboxColorContrast : props.darkCheckboxColorContrast}
              onChange={(val) => {
                if (val) {
                  setCheckedAll(val)
                  setChecked([...Array(rows.length).keys()])
                  if (props.onSelected !== undefined) props.onSelected([...Array(rows.length).keys()])
                } else {
                  setCheckedAll(false)
                  setChecked([])
                  if (props.onSelected !== undefined) props.onSelected([])
                }
              }} />
            </th>
          )}

          {props.numbering && (
            <th className={[clsTH(0), "w-14", "text-center", clsContent].join(" ")}>
              {props.colNumber}
            </th>
          )}

          {columns.map((col, idx) => {
            const cls = props.numbering ? clsTH(idx+1) : clsTH(idx)
            return(
              <th
              key={idx}
              className={[
                cls,
                clsContent,
                col.width !== undefined ? `w-${col.width}` : "",
                col.position === "left" ? "text-left" : col.position === "right" ? "text-right" : "text-center"
              ].join(" ").trim()}>{col.header}</th>
            )
          })}
        </tr>
      </thead>

      {rows.length > 0 && (
        <tbody>
          {rows.map((row, idx) => {
            return(
              <tr
              key={idx}
              className={[
                base({
                  visual: {
                    dark: dark,
                    bgHoverColor: tb?.rowColorHover !== undefined ? tb.rowColorHover : props.rowColorHover,
                    bgHoverColorContrast: tb?.rowColorHoverContrast !== undefined ? tb.rowColorHoverContrast : props.rowColorHoverContrast,
                    darkBgHoverColor: tb?.darkRowColorHover !== undefined ? tb.darkRowColorHover :  props.darkRowColorHover,
                    darkBgHoverColorContrast: tb?.darkRowColorHoverContrast !== undefined ? tb.darkRowColorHoverContrast :  props.darkRowColorHoverContrast,
                  },
                  misc: {
                    cursor: row.onClick !== undefined ? "pointer" : undefined
                  }
                }),
                idx !== rows.length - 1 ? clsTbodyTr : ""
              ].join(" ")}
              onClick={() => {
                if (row.onClick !== undefined) row.onClick()
              }}>
                {props.checkbox && (
                  <td className={[
                    clsTD(idx, true, undefined, undefined),
                    "text-center",
                    clsContent
                  ].join(" ")}>
                    <Input.Checkbox name={`checkbox-${idx}`} checked={(checkedAll || checked.includes(idx)) ? true : false}
                    color={tb?.checkboxColor !== undefined ? tb.checkboxColor : props.checkboxColor}
                    colorContrast={tb?.checkboxColorContrast !== undefined ? tb.checkboxColorContrast : props.checkboxColorContrast}
                    darkColor={tb?.darkCheckboxColor !== undefined ? tb.darkCheckboxColor : props.darkCheckboxColor}
                    darkColorContrast={tb?.darkCheckboxColorContrast !== undefined ? tb.darkCheckboxColorContrast : props.darkCheckboxColorContrast}
                    onChange={(val) => {
                      if (!val) {
                        const tmp = removeChecked(idx)
                        if (props.onSelected !== undefined) props.onSelected(tmp)
                        setChecked(tmp)
                      } else {
                        if (props.onSelected !== undefined) props.onSelected([...checked, idx])
                        setChecked((old) => [...old, idx])
                      }
                    }} />
                  </td>
                )}

                {props.numbering && (
                  <td className={[
                    clsTD(idx, true, undefined, undefined),
                    "text-center",
                    clsContent
                  ].join(" ")}>
                    {props.rowNumber !== undefined ? (
                      props.rowNumber(idx+1)
                    ) : (idx+1)}
                  </td>
                )}

                {columns.map((data, dataIdx) => {
                  const cls = props.numbering ?
                  clsTD(idx, false, row["rowColor"], row["rowColorContrast"]) :
                  clsTD(idx, dataIdx === 0 ? true : false, row["rowColor"], row["rowColorContrast"])

                  return(
                    <td
                    key={`${data.accessor}-${dataIdx}`}
                    className={[
                      cls,
                      clsContent,
                      (props.border && !tb?.border && dataIdx > 0) ? "border-l" : "",
                      (tb?.border && dataIdx > 0) ? "border-l" : ""
                    ].join(" ").trim()}>
                      {(row as any)?.[data.accessor]}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      )}
    </table>
  )
}

Table.defaultProps = {
  width: "full",
  stripe: false,
  numbering: false,
  colNumber: "#",
  border: false,
  borderWidth: "normal",
  borderStyle: "solid",
  borderColor: "gray",
  borderColorContrast: "200",
  px: "4",
  py: "2"
}
