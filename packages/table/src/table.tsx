import { base, BorderWidth, Color, ColorContrast, ColorProps, ModelProps, SpacingProps, StandardProps, text, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { Input } from "@zenbu-ui/input"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@zenbu-ui/react-id"
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
  const { dark } = React.useContext(ThemeCtx)
  const id = useId("table")

  const [checkedAll, setCheckedAll] = React.useState<boolean>(false)
  const [checked, setChecked] = React.useState<Array<number>>([])
  const columns = React.useMemo(() => props.columns, [props.columns])
  const rows = React.useMemo(() => props.rows, [props.rows])

  const cls = base({
    model: {
      width: props.width,
      height: props.height,
      overflow: "hidden"
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
      borderRadius: props.rounded,
      shadow: props.shadow,
      shadowColor: props.shadowColor,
      shadowColorContrast: props.shadowColorContrast,
      shadowOpacity: props.shadowOpacity,
      darkShadowColor: props.darkShadowColor,
      darkShadowColorContrast: props.darkShadowColorContrast,
      darkShadowOpacity: props.darkShadowOpacity
    },
    spacing: {
      mx: props.mx,
      my: props.my,
      mb: props.mb,
      ml: props.ml,
      mr: props.mr,
      mt: props.mt
    }
  })

  const clsText = text({
    visualText: {
      dark: dark,
      textColor: props.textColor,
      textColorContrast: props.textColorContrast,
      darkTextColor: props.darkTextColor,
      darkTextColorContrast: props.darkTextColorContrast,
      fontSize: props.fontSize
    }
  })

  const clsThead = base({
    visual: {
      dark: false,
      borderWidth: props.colBorderWidth !== undefined ? props.colBorderWidth : props.borderWidth,
      borderStyle: props.borderStyle,
      borderColor: props.colBorderColor !== undefined ? props.colBorderColor : props.borderColor,
      borderColorContrast: props.colBorderColorContrast !== undefined ? props.colBorderColorContrast : props.borderColorContrast,
      borderPosition: "bottom"
    }
  })

  const clsTH = (idx: number): string => {
    const cls = base({
      visual: {
        dark: dark,
        bgColor: props.colColor,
        bgColorContrast: props.colColorContrast,
        darkBgColor: props.darkColColor,
        darkBgColorContrast: props.darkColColorContrast,
        borderWidth: ((props.border && idx === 0) || !props.border) ? undefined : props.colBorderWidth !== undefined ? props.colBorderWidth : props.borderWidth,
        borderStyle: ((props.border && idx === 0) || !props.border) ? undefined : props.borderStyle,
        borderColor: ((props.border && idx === 0) || !props.border) ? undefined : props.colBorderColor !== undefined ? props.colBorderColor : props.borderColor,
        borderColorContrast: ((props.border && idx === 0) || !props.border) ? undefined : props.colBorderColorContrast !== undefined ? props.colBorderColorContrast : props.borderColorContrast,
        borderPosition: props.border && idx > 0 ? "left" : undefined
      }
    })

    return cls
  }

  const clsTbodyTr = base({
    visual: {
      dark: false,
      borderWidth: props.rowBorderWidth !== undefined ? props.rowBorderWidth : props.borderWidth,
      borderStyle: props.borderStyle,
      borderColor: props.rowBorderColor !== undefined ? props.rowBorderColor : props.borderColor,
      borderColorContrast: props.rowBorderColorContrast !== undefined ? props.rowBorderColorContrast : props.borderColorContrast,
      borderPosition: "bottom"
    }
  })

  const clsTD = (idx: number, first: boolean, rowColor: Color | undefined, rowColorContrast: ColorContrast | undefined): string => {
    const cls = base({
      visual: {
        dark: dark,
        bgColor: rowColor !== undefined ? rowColor : (props.stripe && isEven(idx)) ? props.stripeColor : props.rowColor,
        bgColorContrast: rowColorContrast !== undefined ? rowColorContrast : (props.stripe && isEven(idx)) ? props.stripeColorContrast : props.rowColorContrast,
        darkBgColor: (props.stripe && isEven(idx)) ? props.darkStripeColor : props.darkRowColor,
        darkBgColorContrast: (props.stripe && isEven(idx)) ? props.darkStripeColorContrast : props.darkRowColorContrast,
        borderWidth: ((props.border && first )|| !props.border) ? undefined : props.rowBorderWidth !== undefined ? props.rowBorderWidth : props.borderWidth,
        borderStyle: ((props.border && first )|| !props.border) ? undefined : props.borderStyle,
        borderColor: ((props.border && first )|| !props.border) ? undefined : props.rowBorderColor !== undefined ? props.rowBorderColor : props.borderColor,
        borderColorContrast: ((props.border && first )|| !props.border) ? undefined : props.rowBorderColorContrast !== undefined ? props.rowBorderColorContrast : props.borderColorContrast,
        borderPosition: props.border && !first ? "left" : undefined
      }
    })

    return cls
  }

  const clsContent = base({
    spacing: {
      px: props.px,
      py: props.py,
      pb: props.pb,
      pl: props.pl,
      pr: props.pr,
      pt: props.pt
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
              color={props.checkboxColor} colorContrast={props.checkboxColorContrast}
              darkColor={props.darkCheckboxColor} darkColorContrast={props.darkCheckboxColorContrast} onChange={(val) => {
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
                    bgHoverColor: props.rowColorHover,
                    bgHoverColorContrast: props.rowColorHoverContrast,
                    darkBgHoverColor: props.darkRowColorHover,
                    darkBgHoverColorContrast: props.darkRowColorHoverContrast,
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
                    color={props.checkboxColor} colorContrast={props.checkboxColorContrast}
                    darkColor={props.darkCheckboxColor} darkColorContrast={props.darkCheckboxColorContrast}
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
                      props.border && dataIdx > 0 ? "border-l" : ""
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
