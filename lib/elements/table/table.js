import React, { useEffect, useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import RcTable from 'rc-table';

import { Palletes, Color, Contrast } from "../../utils/color";
import { BorderSize } from "../../utils/border";
import { ShadowSize } from "../../utils/shadow";

const Table = ({ columns, columnsColor, columnsColorContrast, stripe,
  rows, rowsColor, rowsColorContrast, rowsStripeColor, rowsStripeColorContrast,
  textColor, textColorContrast, border, borderSize, borderColor, borderColorContrast }) => {
  const [mounted, setMounted] = useState(false);
  const [dataColumns, setDataColumns] = useState([]);

  if (stripe) {
    if (rowsStripeColor === "white") {
      rowsStripeColor = "gray"
      rowsStripeColorContrast = 100
    }
  }

  const baseClasses = cx(
    Color("bg", rowsColor, rowsColorContrast),
    border && BorderSize[borderSize],
    border && Color("border", borderColor, borderColorContrast),
  )

  const columnClasses = cx(
    Color("bg", columnsColor, columnsColorContrast),
    "py-2 px-3",
    "text-left",
    "text-gray-500",
    "border-b",
    border && Color("border", borderColor, borderColorContrast),
  )
  const rowClasses = cx(
    "py-2 px-3",
    Color("text", textColor, textColorContrast)
  )

  const cell = (props) => <th {...props} className={columnClasses} />
  const components = {
    header: {
      cell: cell
    }
  }

  useEffect(async () => {
    if (!mounted) {
      columns.map((col) => {
        if (col.textPosition === undefined) col.className = `${rowClasses} text-left`
        else col.className = `${rowClasses} text-${col.textPosition}`
        setDataColumns(dataColumns => [...dataColumns, col]);
      })

      setMounted(true)
    }
  }, [columns, rows])

  return(
    <div>
      {mounted && (
        <RcTable
        columns={dataColumns}
        data={rows}
        className={baseClasses}
        rowClassName={(r, i) => (i+1) % 2  !== 0 ? Color("bg", rowsColor, rowsColorContrast) : Color("bg", rowsStripeColor, rowsStripeColorContrast)}
        components={components}
        />
      )}
    </div>
  )
}

Table.propTypes = {
  columns: PropTypes.array,
  columnsColor: PropTypes.oneOf(Palletes),
  columnsColorContrast: PropTypes.oneOf(Contrast),
  rows: PropTypes.array,
  rowsColor: PropTypes.oneOf(Palletes),
  rowsColorContrast: PropTypes.oneOf(Contrast),
  rowsStripeColor: PropTypes.oneOf(Palletes),
  rowsStripeColorContrast: PropTypes.oneOf(Contrast),
  textColor: PropTypes.oneOf(Palletes),
  textColorContrast: PropTypes.oneOf(Contrast),
  stripe: PropTypes.bool,
  border: PropTypes.bool,
  borderSize: PropTypes.oneOf(Object.keys(BorderSize)),
  borderColor: PropTypes.oneOf(Palletes),
  borderColorContrast: PropTypes.oneOf(Contrast),
  shadow: PropTypes.oneOf(Object.keys(ShadowSize))
}

Table.defaultProps = {
  columnsColor: "gray",
  columnsColorContrast: 100,
  rowsColor: "white",
  rowsColorContrast: 200,
  rowsStripeColor: "white",
  rowsStripeColorContrast: 100,
  textColor: "gray",
  textColorContrast: 500,
  border: true,
  borderSize: "xs",
  borderColor: "gray",
  borderColorContrast: 200,
  stripe: false
}

export default Table;