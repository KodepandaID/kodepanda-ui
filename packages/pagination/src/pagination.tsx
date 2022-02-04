/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/anchor-is-valid */
// Following the navigation guideline WAI-ARIA 1.2
// https://www.w3.org/TR/wai-aria-practices-1.2/#aria_lh_navigation

import { AriaProps, base, ColorProps, element, SpacingProps, StandardProps, text, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { Icon } from "@zenbu-ui/icon"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@reach/auto-id"
import * as React from "react"

interface PaginationProps extends AriaProps, StandardProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {
  total: number,
  showTotal?: (total: number, range: Array<number>) => string | React.ReactNode,
  pageSize?: number,
  defaultPage?: number,
  onChange?: (currentPage: number) => void
}

export const Pagination: React.FC<PaginationProps> = (props) => {
  const { dark, theme } = React.useContext(ThemeCtx)
  const id = useId()
  const pageSize = props.pageSize !== undefined ? props.pageSize : 10
  const defaultPage = props.defaultPage !== undefined ? props.defaultPage : 1

  const tp = theme?.pagination?.[`${props.componentName}`]

  const [totalPage] = React.useState<number>(Math.floor((props.total - 1) / pageSize) + 1)
  const [page, setPage] = React.useState<Array<number>>([])
  const [size] = React.useState<number>(pageSize)
  const [currentPage, setCurrentPage] = React.useState<number>(defaultPage)
  const [totalText, setTotalText] = React.useState<string | React.ReactNode>("")

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

  const clsWrapper = base({
    model: {
      display: "block",
      width: "max",
      overflow: "hidden"
    },
    visual: {
      dark: false,
      borderWidth: (tp?.border && tp.borderWidth !== undefined) ? tp.borderWidth : (props.border && tp?.border === undefined) ? props.borderWidth : undefined,
      borderStyle: (tp?.border && tp.borderStyle !== undefined) ? tp.borderStyle : (props.border && tp?.border === undefined) ? props.borderStyle : undefined,
      borderColor: (tp?.border && tp.borderColor !== undefined) ? tp.borderColor : (props.border && tp?.border === undefined) ? props.borderColor : undefined,
      borderColorContrast: (tp?.border && tp.borderColorContrast !== undefined) ? tp.borderColorContrast : (props.border && tp?.border === undefined) ? props.borderColorContrast : undefined,
      borderPosition: "top",
      borderRadius: tp?.rounded !== undefined ? tp.rounded : props.rounded,
      borderRadiusPosition: tp?.roundedPosition !== undefined ? tp.roundedPosition : props.roundedPosition,
      shadow: tp?.shadow !== undefined ? tp.shadow : props.shadow,
      shadowColor: (tp?.shadow !== undefined && tp.shadowColor !== undefined) ? tp.shadowColor : props.shadow !== undefined ? props.shadowColor : undefined,
      shadowColorContrast: (tp?.shadow !== undefined && tp.shadowColorContrast !== undefined) ? tp.shadowColorContrast : props.shadow !== undefined ? props.shadowColorContrast : undefined,
      shadowOpacity: (tp?.shadow !== undefined && tp.shadowOpacity !== undefined) ? tp.shadowOpacity : props.shadow !== undefined ? props.shadowOpacity : undefined,
      darkShadowColor: (tp?.shadow !== undefined && tp.darkShadowColor !== undefined) ? tp.darkShadowColor : props.shadow !== undefined ? props.darkShadowColor : undefined,
      darkShadowColorContrast: (tp?.shadow !== undefined && tp.darkShadowColorContrast) ? tp.darkShadowColorContrast : props.shadow !== undefined ? props.darkShadowColorContrast : undefined,
      darkShadowOpacity: (tp?.shadow !== undefined && tp.darkShadowOpacity !== undefined) ? tp.darkShadowOpacity : props.shadow !== undefined ? props.darkShadowOpacity : undefined,
    }
  })

  const cls = base({
    model: {
      display: "flex"
    },
    spacing: {
      mx: tp?.mx !== undefined ? tp.mx : props.mx,
      my: tp?.my !== undefined ? tp.my : props.my,
      mb: tp?.mb !== undefined ? tp.mb : props.mb,
      ml: tp?.ml !== undefined ? tp.ml : props.ml,
      mr: tp?.mr !== undefined ? tp.mr : props.mr,
      mt: tp?.mt !== undefined ? tp.mt : props.mt
    },
    misc: {
      userSelect: "none"
    }
  })

  const clsList = base({
    visual: {
      dark: dark,
      bgColor: tp?.color !== undefined ? tp.color : props.color,
      bgColorContrast: tp?.colorContrast !== undefined ? tp.colorContrast : props.colorContrast,
      darkBgColor: tp?.darkColor !== undefined ? tp.darkColor : props.darkColor,
      darkBgColorContrast: tp?.darkColorContrast !== undefined ? tp.darkColorContrast : props.darkColorContrast,
      bgHoverColor: tp?.colorHover !== undefined ? tp.colorHover : props.colorHover,
      bgHoverColorContrast: tp?.colorHoverContrast !== undefined ? tp.colorHoverContrast : props.colorHoverContrast,
      darkBgHoverColor: tp?.darkColorHover !== undefined ? tp.darkColorHover : props.darkColorHover,
      darkBgHoverColorContrast: tp?.darkColorHoverContrast !== undefined ? tp.darkColorHoverContrast : props.darkColorHoverContrast,
      borderWidth: (tp?.border && tp?.borderWidth !== undefined) ? tp.borderWidth : props.border ? props.borderWidth : undefined,
      borderPosition: "left",
      borderStyle: (tp?.border && tp?.borderStyle !== undefined) ? tp.borderStyle : props.border ? props.borderStyle : undefined,
      borderColor: (tp?.border && tp?.borderColor !== undefined) ? tp.borderColor : props.border ? props.borderColor : undefined,
      borderColorContrast: (tp?.border && tp?.borderColorContrast !== undefined) ? tp.borderColorContrast : props.border ? props.borderColorContrast : undefined,
    },
    misc: {
      cursor: "pointer"
    },
    spacing: {
      px: tp?.px !== undefined ? tp.px : props.px,
      py: tp?.py !== undefined ? tp.py : props.py,
      pb: tp?.pb !== undefined ? tp.pb : props.pb,
      pl: tp?.pl !== undefined ? tp.pl : props.pl,
      pr: tp?.pr !== undefined ? tp.pr : props.pr,
      pt: tp?.pt !== undefined ? tp.pt : props.pt
    }
  })

  const clsListActive = base({
    visual: {
      dark: dark,
      bgColor: tp?.colorHover !== undefined ? tp.colorHover : props.colorHover,
      bgColorContrast: tp?.colorHoverContrast !== undefined ? tp.colorHoverContrast : props.colorHoverContrast,
      darkBgColor: tp?.darkColorHover !== undefined ? tp.darkColorHover : props.darkColorHover,
      darkBgColorContrast: tp?.darkColorHoverContrast !== undefined ? tp.darkColorHoverContrast : props.darkColorHoverContrast,
      borderWidth: (tp?.border && tp?.borderWidth !== undefined) ? tp.borderWidth : props.border ? props.borderWidth : undefined,
      borderPosition: "left",
      borderStyle: (tp?.border && tp?.borderStyle !== undefined) ? tp.borderStyle : props.border ? props.borderStyle : undefined,
      borderColor: (tp?.border && tp?.borderColor !== undefined) ? tp.borderColor : props.border ? props.borderColor : undefined,
      borderColorContrast: (tp?.border && tp?.borderColorContrast !== undefined) ? tp.borderColorContrast : props.border ? props.borderColorContrast : undefined,
    },
    misc: {
      cursor: "pointer"
    },
    spacing: {
      px: tp?.px !== undefined ? tp.px : props.px,
      py: tp?.py !== undefined ? tp.py : props.py,
      pb: tp?.pb !== undefined ? tp.pb : props.pb,
      pl: tp?.pl !== undefined ? tp.pl : props.pl,
      pr: tp?.pr !== undefined ? tp.pr : props.pr,
      pt: tp?.pt !== undefined ? tp.pt : props.pt
    }
  })

  const clsListElm = element({
    focus: {
      dark: dark,
      focusColor: tp?.colorHover !== undefined ? tp.colorHover : props.colorHover,
      focusColorContrast: tp?.colorHoverContrast !== undefined ? tp.colorHoverContrast : props.colorHoverContrast,
      focusDarkColor: tp?.darkColorHover !== undefined ? tp.darkColorHover : props.darkColorHover,
      focusDarkColorContrast: tp?.darkColorHoverContrast !== undefined ? tp.darkColorHoverContrast : props.darkColorHoverContrast,
      focusOutline: "none"
    }
  })

  const clsListText = text({
    visualText: {
      dark: dark,
      textColor: tp?.textColor !== undefined ? tp.textColor : props.textColor,
      textColorContrast: tp?.textColorContrast !== undefined ? tp.textColorContrast : props.textColorContrast,
      darkTextColor: tp?.darkTextColor !== undefined ? tp.darkTextColor : props.darkTextColor,
      darkTextColorContrast: tp?.darkTextColorContrast !== undefined ? tp.darkTextColorContrast : props.darkTextColorContrast,
      textHoverColor: tp?.textColorHover !== undefined ? tp.textColorHover : props.textColorHover,
      textHoverColorContrast: tp?.textColorHoverContrast !== undefined ? tp.textColorHoverContrast : props.textColorHoverContrast,
      darkTextHoverColor: tp?.darkTextColorHover !== undefined ? tp.darkTextColorHover : props.darkTextColorHover,
      darkTextHoverColorContrast: tp?.darkTextColorHoverContrast !== undefined ? tp.darkTextColorHoverContrast : props.darkTextColorHoverContrast,
      fontSize: tp?.fontSize !== undefined ? tp.fontSize : props.fontSize
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

  return(
    <div className="flex items-center space-x-3">
      {(props.showTotal !== undefined && typeof totalText === "string") && (<p className="text-sm">{totalText}</p>)}
      {(props.showTotal !== undefined && typeof totalText !== "string") && (totalText)}
      <nav
      className={[
        clsWrapper,
        (props.border && tp?.border === undefined) ? `border-r${props.borderWidth !== "normal" ? `-${props.borderWidth}` : ""}` : "",
        (props.border && tp?.border === undefined) ? `border-b${props.borderWidth !== "normal" ? `-${props.borderWidth}` : ""}` : "",
        (tp?.border && tp?.borderWidth !== undefined) ? `border-r${tp.borderWidth !== "normal" ? `-${tp.borderWidth}` : ""}` : "",
        (tp?.border && tp?.borderWidth !== undefined) ? `border-b${tp.borderWidth !== "normal" ? `-${tp.borderWidth}` : ""}` : ""
      ].join(" ").trim()}
      id={`zenbu-pagination-${id}`}
      aria-label={props.ariaLabel}>
        <ul className={cls}>
          <li
          key={`zenbu-pagination-${id}-0`}
          id={`zenbu-pagination-${id}-0`}
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
            key={`zenbu-pagination-${id}-1`}
            id={`zenbu-pagination-${id}-1`}
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
                  key={`zenbu-pagination-${id}-${d}`}
                  id={`zenbu-pagination-${id}-${d}`}
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
              key={`zenbu-pagination-${id}-${page.length+1}`}
              id={`zenbu-pagination-${id}-${page.length+1}`}
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
