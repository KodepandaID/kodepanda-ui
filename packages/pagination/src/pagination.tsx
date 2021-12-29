/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
// Following the navigation guideline WAI-ARIA 1.2
// https://www.w3.org/TR/wai-aria-practices-1.2/#aria_lh_navigation

import { AriaProps, base, ColorProps, element, SpacingProps, StandardProps, text, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { Icon } from "@zenbu-ui/icon"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@zenbu-ui/react-id"
import * as React from "react"

interface PaginationProps extends AriaProps, StandardProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {
  total: number,
  showTotal?: (total: number, range: Array<number>) => string | React.ReactNode,
  pageSize?: number,
  defaultPage?: number,
  onChange?: (currentPage: number) => void
}

export const Pagination: React.FC<PaginationProps> = (props) => {
  const { dark } = React.useContext(ThemeCtx)
  const id = useId("pagination")
  const pageSize = props.pageSize !== undefined ? props.pageSize : 10
  const defaultPage = props.defaultPage !== undefined ? props.defaultPage : 1

  const [totalPage] = React.useState<number>(Math.floor((props.total - 1) / pageSize) + 1)
  const [page, setPage] = React.useState<Array<number>>([])
  const [size] = React.useState<number>(pageSize)
  const [currentPage, setCurrentPage] = React.useState<number>(defaultPage)
  const [totalText, setTotalText] = React.useState<string | React.ReactNode>("")

  const clsWrapper = base({
    model: {
      display: "block",
      width: "max",
      overflow: "hidden"
    },
    visual: {
      dark: false,
      borderWidth: props.border ? props.borderWidth : undefined,
      borderPosition: "top",
      borderStyle: props.border ? props.borderStyle : undefined,
      borderColor: props.border ? props.borderColor : undefined,
      borderColorContrast: props.border ? props.borderColorContrast : undefined,
      shadow: props.shadow,
      shadowColor: props.shadowColor,
      shadowColorContrast: props.shadowColorContrast,
      shadowOpacity: props.shadowOpacity,
      darkShadowColor: props.darkShadowColor,
      darkShadowColorContrast: props.darkShadowColorContrast,
      darkShadowOpacity: props.darkShadowOpacity
    }
  })

  const cls = base({
    model: {
      display: "flex"
    },
    spacing: {
      mx: props.mx,
      my: props.my,
      mb: props.mb,
      ml: props.ml,
      mr: props.mr,
      mt: props.mt
    },
    misc: {
      userSelect: "none"
    }
  })

  const clsList = base({
    visual: {
      dark: dark,
      bgColor: props.color,
      bgColorContrast: props.colorContrast,
      darkBgColor: props.darkColor,
      darkBgColorContrast: props.darkColorContrast,
      bgHoverColor: props.colorHover,
      bgHoverColorContrast: props.colorHoverContrast,
      darkBgHoverColor: props.darkColorHover,
      darkBgHoverColorContrast: props.darkColorHoverContrast,
      borderWidth: props.border ? props.borderWidth : undefined,
      borderPosition: "left",
      borderStyle: props.border ? props.borderStyle : undefined,
      borderColor: props.border ? props.borderColor : undefined,
      borderColorContrast: props.border ? props.borderColorContrast : undefined,
    },
    misc: {
      cursor: "pointer"
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

  const clsListActive = base({
    visual: {
      dark: dark,
      bgColor: props.colorHover,
      bgColorContrast: props.colorHoverContrast,
      darkBgColor: props.darkColorHover,
      darkBgColorContrast: props.darkColorHoverContrast,
      borderWidth: props.border ? props.borderWidth : undefined,
      borderPosition: "left",
      borderStyle: props.border ? props.borderStyle : undefined,
      borderColor: props.border ? props.borderColor : undefined,
      borderColorContrast: props.border ? props.borderColorContrast : undefined,
    },
    misc: {
      cursor: "pointer"
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

  const clsListElm = element({
    focus: {
      dark: dark,
      focusColor: props.colorHover,
      focusColorContrast: props.colorHoverContrast,
      focusDarkColor: props.darkColorHover,
      focusDarkColorContrast: props.darkColorHoverContrast,
      focusOutline: "none"
    }
  })

  const clsListText = text({
    visualText: {
      dark: dark,
      textColor: props.textColor,
      textColorContrast: props.textColorContrast,
      darkTextColor: props.darkTextColor,
      darkTextColorContrast: props.darkTextColorContrast,
      textHoverColor: props.textColorHover,
      textHoverColorContrast: props.textColorHoverContrast,
      darkTextHoverColor: props.darkTextColorHover,
      darkTextHoverColorContrast: props.darkTextColorHoverContrast,
      fontSize: props.fontSize
    }
  })

  const next = () => {
    const cp = currentPage + 1
    createPage(cp)
    setCurrentPage(cp)
    if (props.onChange !== undefined) props.onChange(cp)
    if (props.showTotal !== undefined) {
      const text = props.showTotal(props.total, [((cp * size) - size + 1), cp * size])
      setTotalText(text)
    }
  }

  const prev = () => {
    const cp = currentPage - 1
    createPage(cp)
    setCurrentPage(cp)
    if (props.onChange !== undefined) props.onChange(cp)
    if (props.showTotal !== undefined) {
      const text = props.showTotal(props.total, [((cp * size) - size + 1), cp * size])
      setTotalText(text)
    }
  }

  const changePage = (d: number) => {
    createPage(d)
    setCurrentPage(d)
    if (props.onChange !== undefined) props.onChange(d)
    if (props.showTotal !== undefined) {
      const text = props.showTotal(props.total, [((d * size) - size + 1), d * size])
      setTotalText(text)
    }
  }

  const createPage = (d: number) => {
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

  React.useEffect(() => {
    if (totalPage > 0) {
      setPage([])
      for (let i = 0; i < totalPage; i++) {
        if (i === 5) break
        else setPage((old) => [...old, i+1])
      }
    }

    if (props.showTotal !== undefined) {
      const text = props.showTotal(props.total, [((currentPage * size) - size + 1), currentPage * size])
      setTotalText(text)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalPage])

  return(
    <div className="flex items-center space-x-3">
      {(props.showTotal !== undefined && typeof totalText === "string") && (<p className="text-sm">{totalText}</p>)}
      {(props.showTotal !== undefined && typeof totalText !== "string") && (totalText)}
      <nav
      className={[
        clsWrapper,
        props.border ? `border-r${props.borderWidth !== "normal" ? `-${props.borderWidth}` : ""}` : "",
        props.border ? `border-b${props.borderWidth !== "normal" ? `-${props.borderWidth}` : ""}` : ""
      ].join(" ").trim()}
      id={id}
      aria-label={props.ariaLabel}>
        <ul className={cls}>
          <li
          key={`${id}-0`}
          id={`${id}-0`}
          className={[
            "flex items-center",
            currentPage === 1 ? "pointer-events-none opacity-50" : "",
            clsList,
            clsListElm,
            clsListText].join(" ").trim()}
          tabIndex={0}
          aria-label="Previous"
          onClick={() => {
            if (currentPage !== 1) prev()
          }}
          onKeyDown={(e) => {
            if (e.code === "Enter" && currentPage !== 1) prev()
          }}>
            <Icon icon="chevron-left" height="4" />
          </li>
          {props.total === 0 && (
            <li
            key={`${id}-1`}
            id={`${id}-1`}
            className={[
              clsList,
              clsListElm,
              clsListText].join(" ").trim()}
            tabIndex={0}>1</li>
          )}
          {props.total > 0 && (
            <React.Fragment>
              {page.map((d) => {
                return(
                  <li
                  key={`${id}-${d}`}
                  id={`${id}-${d}`}
                  className={[
                    currentPage === d ? clsListActive : clsList,
                    clsListElm,
                    clsListText].join(" ").trim()}
                  tabIndex={0}
                  onClick={() => changePage(d)}
                  onKeyDown={(e) => {
                    if (e.code === "Enter") changePage(d)
                  }}>
                    {d}
                  </li>
                )
              })}
              <li
              key={`${id}-${page.length+1}`}
              id={`${id}-${page.length+1}`}
              className={[
                "flex items-center",
                currentPage === page[page.length - 1] ? "pointer-events-none opacity-50" : "",
                clsList,
                clsListElm,
                clsListText].join(" ").trim()}
              tabIndex={page.length+1}
              aria-label="Next"
              onClick={() => {
                if (currentPage !== page[page.length - 1]) next()
              }}
              onKeyDown={(e) => {
                if (e.code === "Enter" && currentPage !== page[page.length - 1]) next()
              }}>
                <Icon icon="chevron-right" height="4" />
              </li>
            </React.Fragment>
          )}
        </ul>
      </nav>
    </div>
  )
}

Pagination.defaultProps = {
  pageSize: 10,
  defaultPage: 1,
  color: "white",
  colorHover: "gray",
  colorHoverContrast: "200",
  textColor: "gray",
  textColorContrast: "700",
  border: true,
  borderWidth: "normal",
  borderStyle: "solid",
  borderColor: "gray",
  borderColorContrast: "200",
  fontSize: "sm",
  px: "3",
  py: "1.5"
}
