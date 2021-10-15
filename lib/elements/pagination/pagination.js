import React, { useEffect, useState } from "react";
import cx from "clsx";
import PropTypes from "prop-types";
import { Margin } from "../../classes";
import { color, spacing  } from "../../types";

import Button from "../button/button";
import Icon from "../icon/icon";
import Input from "../input/input";

import { Palletes, Color, Contrast } from "../../utils/color";

const Pagination = ({
  color, colorContrast, border, borderColor, borderColorContrast, textColor, textColorContrast,
  borderColorHover, borderColorHoverContrast, textColorActive, textColorActiveContrast,
  colorActive, colorActiveContrast,
  total, showTotal, pageSize, defaultCurrent, showSizeChanger, sizeChangerText, sizeChangerWidth, onChange,
  mx, my, mb, ml, mr, mt }) => {
  const [totalPage, setTotalPage] = useState(Math.floor((total - 1) / pageSize) + 1);
  const [page, setPage] = useState([]);
  const [size, setSize] = useState(pageSize);
  const [currentPage, setCurrentPage] = useState(defaultCurrent);
  const [totalText, setTotalText] = useState("");
  const [sizeChanger, setSizeChanger] = useState([{
    key: 10,
    value: 10,
    text: "10 / " + sizeChangerText
  }]);

  const wrapperClasses = cx(
    Margin(mx, my, mb, ml, mr, mt)
  )

  const baseClasses = cx(
    "text-xs",
    "px-3",
    "py-1",
    "mr-1"
  )

  const prevClasses = cx(
    "text-xs",
    currentPage !== 1 && Color("text", textColor, textColorContrast),
    currentPage === 1 && Color("text", borderColor, 200),
    (color !== "white" && currentPage === 1) ? Color("bg", color, 300) : Color("bg", color, colorContrast),
    (color === "white" && border) && "border",
    (currentPage === 1 && color === "white") ? Color("border", borderColor, 200) : Color("border", borderColor, borderColorContrast),
    (currentPage !== 1 && color === "white") && `hover:${Color("border", borderColorHover, borderColorHoverContrast)}`,
    currentPage !== 1 && `hover:${Color("text", textColor, 400)}`,
    color !== "white" && `hover:${Color("bg", color, 700)}`,
    "px-2",
    "py-1",
    "mr-1",
    currentPage === 1 && "pointer-events-none",
  )

  const nextClasses = cx(
    "text-xs",
    (currentPage !== page[page.length - 1] && page.length > 0) && Color("text", textColor, textColorContrast),
    (currentPage === page[page.length - 1] || page.length === 0) && Color("text", borderColor, 200),
    (color !== "white" && currentPage === page[page.length - 1]) ? Color("bg", color, 300) : Color("bg", color, colorContrast),
    (color === "white" && border) && "border",
    (currentPage === page[page.length - 1] || page.length === 0) ? Color("border", borderColor, 200) : Color("border", borderColor, borderColorContrast),
    (currentPage !== page[page.length - 1] && page.length > 0 && color === "white") && `hover:${Color("border", borderColorHover, borderColorHoverContrast)}`,
    (currentPage !== page[page.length - 1] && page.length > 0 ) && `hover:${Color("text", textColor, textColorContrast)}`,
    color !== "white" && `hover:${Color("bg", color, 700)}`,
    "px-2",
    "py-1",
    "mr-1",
    (currentPage === page[page.length - 1] || page.length === 0) && "pointer-events-none",
  )

  const buildClasses = (d) => {
    return cx(
      currentPage !== d && Color("bg", color, colorContrast),
      currentPage === d && Color("bg", color, 700),
      textColor !== undefined && Color("text", textColor, textColorContrast),
      (border && color === "white") && "border",
      (!border && currentPage === d && colorActive === undefined) && "border",
      (color === "white" && currentPage !== d && border) && Color("border", borderColor, borderColorContrast),
      (currentPage === d && border) && Color("border", borderColorHover, borderColorHoverContrast),
      (colorActive !== undefined && currentPage === d) && Color("bg", colorActive, colorActiveContrast),
      (textColorActive !== undefined && currentPage === d) && Color("text", textColorActive, textColorActiveContrast),
      (color === "white" && currentPage === d && colorActive === undefined) && Color("bg", color, colorContrast),
      (color === "white" && border) && `hover:${Color("border", borderColorHover, borderColorHoverContrast)}`,
      textColorActive === undefined && `hover:${Color("text", textColor, textColorContrast)}`,
      (currentPage === d && textColorActive !== undefined) && `hover:${Color("text", textColorActive, textColorActiveContrast)}`,
      color !== "white" && `hover:${Color("bg", color, 700)}`,
      (!border && color === "white") && `hover:${Color("text", "blue", 700)}`,
      (!border && color !== "white") && `hover:${Color("text", color, colorContrast)}`,
      (!border && color !== "white" && colorActive !== undefined) && `hover:${Color("text", colorActive, colorActiveContrast)}`
    )
  }

  const next = () => {
    const cp = currentPage + 1
    createPage(cp)
    setCurrentPage(cp)
    if (onChange !== undefined) onChange(cp)
    if (showTotal !== undefined) {
      const text = showTotal(total, [((cp * size) - size + 1), cp * size])
      setTotalText(text)
    }
  }

  const prev = () => {
    const cp = currentPage - 1
    createPage(cp)
    setCurrentPage(cp)
    if (onChange !== undefined) onChange(cp)
    if (showTotal !== undefined) {
      const text = showTotal(total, [((cp * size) - size + 1), cp * size])
      setTotalText(text)
    }
  }

  const changePage = (d) => {
    createPage(d)
    setCurrentPage(d)
    if (onChange !== undefined) onChange(d)
    if (showTotal !== undefined) {
      const text = showTotal(total, [((d * size) - size + 1), d * size])
      setTotalText(text)
    }
  }

  const createPage = (d) => {
    setPage([])
    let start = d-2
    let end = start+4
    if (start < 3) {
      setPage([])
      start = 0
      if (totalPage >= 5) end = 5
      else end = totalPage
    }
    if (end <= totalPage) {
      for (let i = start; i < end; i++) {
        setPage((old) => [...old, i+1])
      }
    } else {
      start = totalPage - 4
      for (let i = start; i < totalPage; i++) {
        setPage((old) => [...old, i+1])
      }
    }
  }

  useEffect(() => {
    if (totalPage > 0) {
      setPage([])
      for (let i = 0; i < totalPage; i++) {
        if (i === 5) break
        else setPage((old) => [...old, i+1])
      }

      if (showSizeChanger && sizeChanger.length === 1 && total >= 20) {
        [20, 50, 100].map((size) => {
          if (size >= totalPage) setSizeChanger((old) => [...old, {
            key: size,
            value: size,
            text: size + " / " + sizeChangerText
          }])
        })
      }
    }
    
    if (showTotal !== undefined) {
      const text = showTotal(total, [((currentPage * size) - size + 1), currentPage * size])
      setTotalText(text)
    }
  }, [totalPage])

  return(
    <div className={wrapperClasses}>
      <Button.Group>
        {showTotal !== undefined && (<p className="text-sm mr-2 py-1">{totalText}</p>)}
        {total > 0 && (
          <>
            <button className={prevClasses} onClick={() => {
              if (currentPage !== 1) prev()
            }} disabled={currentPage === 1 ? true : false}><Icon icon="chevron-left" size="sm"/></button>
            {page[0] > 1 && (
              <>
                <button className={`${baseClasses} ${buildClasses(1)}`} onClick={() => changePage(1)}>1</button>
                {!page.includes(2) && <Icon icon="dots-horizontal" size="sm" mt={2} mr={1} color="gray" contrast={300} />}
              </>
            )}
            {page.map((d) => {
              return(
                <button key={d} className={`${baseClasses} ${buildClasses(d)}`} onClick={() => changePage(d)}>{d}</button>
              )
            })}
            {!page.includes(totalPage) && (
              <>
                <Icon icon="dots-horizontal" size="sm" mt={2} mr={1} color="gray" contrast={300} />
                <button className={`${baseClasses} ${buildClasses(totalPage)}`} onClick={() => changePage(totalPage)}>{totalPage}</button>
              </>
            )}
            <button className={nextClasses} onClick={() => {
              if (currentPage !== page[page.length - 1]) next()
            }} disabled={currentPage === page[page.length - 1] ? true : false}><Icon icon="chevron-right" size="sm"/></button>
            {showSizeChanger && (
              <Input.Select width={sizeChangerWidth} placeholder={sizeChanger[0].text} options={sizeChanger} defaultValue={10} size={"sm"} bgColor={color} bgColorContrast={colorContrast} textColor={textColor} textColorContrast={textColorContrast} borderColorContrast={borderColorContrast} onChange={(s) => {
                setTotalPage(Math.floor((total - 1) / s) + 1)
                setSize(s)
                setCurrentPage(1)
              }} />
            )}
          </>
        )}
        {total === 0 && (
          <>
            <button className={prevClasses} disabled={true}><Icon icon="chevron-left" size="sm"/></button>
            <button className={`${baseClasses} ${buildClasses(1)}`} disabled={true}>1</button>
            <button className={nextClasses} disabled={true}><Icon icon="chevron-right" size="sm"/></button>
          </>
        )}
      </Button.Group>
    </div>
  )
}

Pagination.propTypes = {
  className: PropTypes.string,
  border: PropTypes.bool,
  defaultCurrent: PropTypes.number,
  pageSize: PropTypes.number,
  total: PropTypes.number,
  showTotal: PropTypes.func,
  showSizeChanger: PropTypes.bool,
  sizeChangerWidth: PropTypes.number,
  sizeChangerText: PropTypes.string,
  onChange: PropTypes.func,
  ...color,
  ...spacing
}

Pagination.defaultProps = {
  color: "white",
  colorContrast: 500,
  colorActive: "blue",
  colorActiveContrast: 500,
  border: true,
  borderColor: "gray",
  borderColorContrast: 300,
  borderColorHover: "blue",
  borderColorHoverContrast: 400,
  textColor: "black",
  textColorContrast: 500,
  textColorActive: "white",
  textColorActiveContrast: 500,
  defaultCurrent: 1,
  pageSize: 10,
  total: 0,
  showSizeChanger: false,
  sizeChangerWidth: 32,
  sizeChangerText: "Page"
}

export default Pagination;