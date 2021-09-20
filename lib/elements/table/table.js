import React, { useMemo, useEffect, useState, forwardRef } from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import { useTable, useRowSelect } from "react-table";

import { RoundedSize, RoundedPosition } from "../../utils/rounded";
import { Palletes, Color, Contrast } from "../../utils/color";
import { ShadowSize } from "../../utils/shadow";

import TableBox from "./table-box";
import Icon from "../icon/icon";

const IndeterminateCheckbox = forwardRef(
  ({ indeterminate, ...rest }, ref) => {
    const defaultRef = React.useRef()
    const resolvedRef = ref || defaultRef

    useEffect(() => {
      resolvedRef.current.indeterminate = indeterminate
    }, [resolvedRef, indeterminate])

    return (
      <>
        <input className="form-checkbox h-5 w-5 text-blue-600" type="checkbox" ref={resolvedRef} {...rest} />
      </>
    )
  }
)

const ReactTable = ({ height, columns, data, setSelected, columnsColor, columnsColorContrast, columnsTextColor, columnsTextColorContrast,
  stripe, line, scroll, rowsColor, rowsColorContrast, rowsStripeColor,  rowsStripeColorContrast, textColor, textColorContrast, border, borderColor, borderColorContrast, emptyState, emptyStateIcon, emptyStateText, emptyStateImage,
emptyStateTextColor, emptyStateTextColorContrast, checkbox }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    selectedFlatRows,
  } = useTable({
    columns,
    data,
  },
  useRowSelect,
  hooks => {
    if (checkbox) {
      hooks.visibleColumns.push((columns) => [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => (
            <div>
              <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
            </div>
          ),
          Cell: ({ row }) => (
            <div>
              <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
            </div>
          ),
        },
        ...columns,
      ])
    }
  })

  if (stripe) {
    if (rowsStripeColor === "white") {
      rowsStripeColor = "gray"
      rowsStripeColorContrast = 100
    }
  }

  const baseClasses = cx(
    "border-collapse",
    "w-full",
    "whitespace-no-wrap",
    Color("bg", "white"),
  )

  const columnClasses = cx(
    !line && Color("bg", columnsColor, columnsColorContrast),
    line && Color("bg", "white", 0),
    scroll && "sticky top-0",
    line && "border-b",
    line && Color("border", borderColor, borderColorContrast),
    (border && !line) && "border-b",
    (border && !line)&& Color("border", borderColor, borderColorContrast),
    "py-2 px-6",
    "text-left",
    "font-bold",
    "uppercase",
    Color("text", columnsTextColor, columnsTextColorContrast),
    "tracking-wider"
  )

  const rowClasses = cx(
    "py-2 px-6",
    Color("text", textColor, textColorContrast),
    (border && !line) && "border-dashed border-t",
    (border && !line)&& Color("border", borderColor, borderColorContrast),
  )

  useEffect(()=>{
    setSelected(selectedFlatRows.map((d) => d.original))
  },[selectedFlatRows])

  return (
    <>
      <table {...getTableProps()} className={baseClasses}>
        <thead style={{minWidth: "auto !important"}} className={scroll ? "w-full table table-fixed" : null}>
          {headerGroups.map((headerGroup, i) => (
            <tr key={i} {...headerGroup.getHeaderGroupProps()} className="text-left">
              {headerGroup.headers.map((column, j) => (
                <th key={j} {...column.getHeaderProps()} className={`${columnClasses} ${column.id === "selection" ? "w-10":""}`} style={column.width > 0 ? {width: column.width} : null}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className={scroll ? "block overflow-auto" : null} style={{minWidth: "auto !important", height: height > 0 ? `${height}px` : `100%`}}>
          {rows.map((row, i) => {
            const trClasses = cx(
              (line && (i+1) % 2  !== 0) && "border-b",
              (line && (i+1) % 2  !== 0) && Color("border", borderColor, borderColorContrast),
              (i+1) % 2  !== 0 ? Color("bg", rowsColor, rowsColorContrast) : Color("bg", rowsStripeColor, rowsStripeColorContrast)
            )

            prepareRow(row)
            return (
              <tr key={i} {...row.getRowProps()} className={`${trClasses} ${scroll ? "w-full table table-fixed" : null}`}>
                {row.cells.map((cell, j) => {
                  return <td key={j} {...cell.getCellProps()} className={rowClasses}>{cell.render('Cell')}</td>
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
      {(emptyState && rows.length === 0) && (
        <div className="m-auto grid justify-items-center">
          {emptyStateImage === undefined && (
            <Icon icon={emptyStateIcon} color={"gray"} colorContrast={200} size="lg" mt={10} mb={2} />
          )}
          {emptyStateImage !== undefined && emptyStateImage}
          <p className={Color("text", emptyStateTextColor, emptyStateTextColorContrast)}>{emptyStateText}</p>
        </div>
      )}
    </>
  )
}

const Table = ({ shadow, rounded, roundedPosition, columns, columnsColor, columnsColorContrast, columnsTextColor, columnsTextColorContrast,
  stripe, line, scroll, checkbox, height,
  rows, rowsColor, rowsColorContrast, rowsStripeColor, rowsStripeColorContrast,
  textColor, textColorContrast, border, borderColor, borderColorContrast, emptyState, emptyStateIcon, emptyStateImage, emptyStateText,
  emptyStateTextColor, emptyStateTextColorContrast, selectedRows }) => {
  columns = useMemo(() => columns, [])
  rows = useMemo(() => rows, [])

  const [selected, setSelected] = useState([]);

  const wrapper = cx(
    "bg-white",
    "overflow-x-auto",
    "overflow-y-auto",
    (rounded !== undefined && roundedPosition === undefined && !line) && RoundedSize[rounded],
    (roundedPosition !== undefined && !line) && `${RoundedPosition[roundedPosition]}-${rounded}`,
    !line && ShadowSize[shadow],
    "relative"
  )

  useEffect(() => {
    selectedRows(selected)
  }, [selected])

  return(
    <div className={wrapper}>
      <ReactTable columns={columns} data={rows} height={height}
      columnsColor={columnsColor} columnsColorContrast={columnsColorContrast} columnsTextColor={columnsTextColor} columnsTextColorContrast={columnsTextColorContrast}
      stripe={stripe} line={line} scroll={scroll}
      rowsColor={rowsColor} rowsColorContrast={rowsColorContrast} rowsStripeColor={rowsStripeColor} rowsStripeColorContrast={rowsStripeColorContrast}
      textColor={textColor} textColorContrast={textColorContrast} borderColor={borderColor} borderColorContrast={borderColorContrast}
      border={border} line={line} emptyState={emptyState} emptyStateIcon={emptyStateIcon} emptyStateImage={emptyStateImage} emptyStateText={emptyStateText}
      emptyStateTextColor={emptyStateTextColor} emptyStateTextColorContrast={emptyStateTextColorContrast} checkbox={checkbox} setSelected={setSelected} />
    </div>
  )
}

Table.propTypes = {
  height: PropTypes.number,
  rounded: PropTypes.oneOf(Object.keys(RoundedSize)),
  roundedPosition: PropTypes.oneOf(Object.keys(RoundedPosition)),
  shadow: PropTypes.oneOf(Object.keys(ShadowSize)),
  columns: PropTypes.array,
  columnsColor: PropTypes.oneOf(Palletes),
  columnsColorContrast: PropTypes.oneOf(Contrast),
  columnsTextColor: PropTypes.oneOf(Palletes),
  columnsTextColorContrast: PropTypes.oneOf(Contrast),
  rows: PropTypes.array,
  rowsColor: PropTypes.oneOf(Palletes),
  rowsColorContrast: PropTypes.oneOf(Contrast),
  rowsStripeColor: PropTypes.oneOf(Palletes),
  rowsStripeColorContrast: PropTypes.oneOf(Contrast),
  textColor: PropTypes.oneOf(Palletes),
  textColorContrast: PropTypes.oneOf(Contrast),
  stripe: PropTypes.bool,
  line: PropTypes.bool,
  border: PropTypes.bool,
  borderColor: PropTypes.oneOf(Palletes),
  borderColorContrast: PropTypes.oneOf(Contrast),
  shadow: PropTypes.oneOf(Object.keys(ShadowSize)),
  scroll: PropTypes.bool,
  checkbox: PropTypes.bool,
  emptyState: PropTypes.bool,
  emptyStateIcon: PropTypes.oneOf(Object.keys(Icon.Index)),
  emptyStateImage: PropTypes.element,
  emptyStateText: PropTypes.string,
  emptyStateTextColor: PropTypes.oneOf(Palletes),
  emptyStateTextColorContrast: PropTypes.oneOf(Contrast),
  selectedRows: PropTypes.func
}

Table.defaultProps = {
  columnsColor: "gray",
  columnsColorContrast: 100,
  columnsTextColor: "gray",
  columnsTextColorContrast: 500,
  rowsColor: "white",
  rowsColorContrast: 200,
  rowsStripeColor: "white",
  rowsStripeColorContrast: 100,
  textColor: "gray",
  textColorContrast: 500,
  border: true,
  borderColor: "gray",
  borderColorContrast: 200,
  stripe: false,
  line: false,
  scroll: false,
  checkbox: false,
  emptyState: false,
  emptyStateIcon: "archive",
  emptyStateText: "No Data",
  emptyStateTextColor: "gray",
  emptyStateTextColorContrast: 300,
  rounded: "none",
  shadow: "none",
  selectedRows: () => {
    return []
  }
}

Table.Box = TableBox;

export default Table;