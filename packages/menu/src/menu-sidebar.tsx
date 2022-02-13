import { AriaProps, base, BorderRadius, BorderStyle, BorderWidth, Color, ColorContrast, ColorProps, FontWeight, ModelProps, PositionScale, SpacingProps, StandardProps, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { Icon } from "@zenbu-ui/icon"
import { ThemeCtx } from "@zenbu-ui/provider"
import { createContext } from "@zenbu-ui/context"
import { useId } from "@reach/auto-id"
import * as React from "react"
import { MenuDropdown } from "."
import { MenuContent } from "./menu-content"
import { MenuItem } from "./menu-item"
import { MenuItems } from "./menu-items"

const PROVIDER_NAME = "Sidebar"

interface MenuSidebarProps extends AriaProps, StandardProps, ModelProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {
  collapse?: boolean,
  collapseButton?: boolean,
  collapseMini?: boolean,
  iconOnly?: boolean,
  dropdownMode?: "click",
  fixed?: boolean,
  fixedPosition?: "left" | "right",
  responsive?: boolean,
  logo?: React.ReactNode,
  itemPosition?: "top" | "bottom",
  itemRounded?: BorderRadius,
  itemActiveFontWeight?: FontWeight,
  itemBorder?: boolean,
  itemBorderHoverWidth?: BorderWidth,
  itemBorderHoverStyle?: BorderStyle,
  itemBorderHoverColor?: Color,
  itemBorderHoverColorContrast?: ColorContrast,
  itemTextColor?: Color,
  itemTextColorContrast?: ColorContrast,
  itemTextColorHover?: Color,
  itemTextColorHoverContrast?: ColorContrast,
  darkItemTextColor?: Color,
  darkItemTextColorContrast?: ColorContrast,
  darkItemTextColorHover?: Color,
  darkItemTextColorHoverContrast?: ColorContrast,
  itemBgColor?: Color,
  itemBgColorContrast?: ColorContrast,
  itemBgColorHover?: Color,
  itemBgColorHoverContrast?: ColorContrast
  darkItemBgColor?: Color,
  darkItemBgColorContrast?: ColorContrast,
  darkItemBgColorHover?: Color,
  darkItemBgColorHoverContrast?: ColorContrast,
  itemPX?: PositionScale,
  itemPY?: PositionScale,
  itemPB?: PositionScale,
  itemPL?: PositionScale,
  itemPR?: PositionScale,
  itemPT?: PositionScale
}

export let useSidebarContext: MenuSidebarProps
export const MenuSidebar: React.FC<MenuSidebarProps> = (props) => {
  const { dark, theme } = React.useContext(ThemeCtx)
  const id = useId()
  const node = React.useRef<HTMLDivElement>(null)

  const tm = theme?.menuSidebar?.[`${props.componentName}`]

  const [collapse, setCollapse] = React.useState(tm?.collapse !== undefined ? tm.collapse : props.collapse)
  const [collapseMargin, setCollapseMargin] = React.useState(0)
  const [collapseMini] = React.useState(tm?.collapseMini !== undefined ? tm.collapseMini : props.collapseMini)

  React.useEffect(() => {
    if (node.current !== undefined && !collapseMini) {
      setCollapseMargin(node.current?.clientWidth === undefined ? 0 : collapse ? node.current.clientWidth - 10 : node.current.clientWidth + 10)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collapse, node])

  const [MenuSidebarProvider, MenuSidebarContext] = createContext<MenuSidebarProps>(PROVIDER_NAME, {
    id: `zenbu-sidebar-${id}`,
    dark: dark,
    iconOnly: tm?.iconOnly !== undefined ? tm.iconOnly : props.iconOnly,
    dropdownMode: props.dropdownMode,
    fontSize: tm?.fontSize !== undefined ? tm.fontSize : props.fontSize,
    fontWeight: tm?.fontWeight !== undefined ? tm.fontWeight : props.fontWeight,
    itemPosition: tm?.itemPosition !== undefined ? tm.itemPosition : props.itemPosition,
    itemRounded: tm?.itemRounded !== undefined ? tm.itemRounded : props.itemRounded,
    itemActiveFontWeight: tm?.itemActiveFontWeight !== undefined ? tm.itemActiveFontWeight : props.itemActiveFontWeight,
    itemBorder: tm?.itemBorder !== undefined ? tm.itemBorder : props.itemBorder,
    itemBorderHoverWidth: tm?.itemBorderHoverWidth !== undefined ? tm.itemBorderHoverWidth : props.itemBorderHoverWidth,
    itemBorderHoverStyle: tm?.itemBorderHoverStyle !== undefined ? tm.itemBorderHoverStyle : props.itemBorderHoverStyle,
    itemBorderHoverColor: tm?.itemBorderHoverColor !== undefined ? tm.itemBorderHoverColor : props.itemBorderHoverColor,
    itemBorderHoverColorContrast: tm?.itemBorderHoverColorContrast !== undefined ? tm.itemBorderHoverColorContrast : props.itemBorderHoverColorContrast,
    itemTextColor: tm?.itemTextColor !== undefined ? tm.itemTextColor : props.itemTextColor,
    itemTextColorContrast: tm?.itemTextColorContrast !== undefined ? tm.itemTextColorContrast : props.itemTextColorContrast,
    itemTextColorHover: tm?.itemTextColorHover !== undefined ? tm.itemTextColorHover : props.itemTextColorHover,
    itemTextColorHoverContrast: tm?.itemTextColorHoverContrast !== undefined ? tm.itemTextColorHoverContrast : props.itemTextColorHoverContrast,
    darkItemTextColor: tm?.darkItemTextColor !== undefined ? tm.darkItemTextColor : props.darkItemTextColor,
    darkItemTextColorContrast: tm?.darkItemTextColorContrast !== undefined ? tm.darkItemTextColorContrast : props.darkItemTextColorContrast,
    darkItemTextColorHover: tm?.darkItemTextColorHover !== undefined ? tm.darkItemTextColorHover : props.darkItemTextColorHover,
    darkItemTextColorHoverContrast: tm?.darkItemTextColorHoverContrast !== undefined ? tm.darkItemTextColorHoverContrast : props.darkItemTextColorHoverContrast,
    itemBgColor: tm?.itemBgColor !== undefined ? tm.itemBgColor : props.itemBgColor,
    itemBgColorContrast: tm?.itemBgColorContrast !== undefined ? tm.itemBgColorContrast : props.itemBgColorContrast,
    itemBgColorHover: tm?.itemBgColorHover !== undefined ? tm.itemBgColorHover : props.itemBgColorHover,
    itemBgColorHoverContrast: tm?.itemBgColorHoverContrast !== undefined ? tm.itemBgColorHoverContrast : props.itemBgColorHoverContrast,
    darkItemBgColor: tm?.darkItemBgColor !== undefined ? tm.darkItemBgColor : props.darkItemBgColor,
    darkItemBgColorContrast: tm?.darkItemBgColorContrast !== undefined ? tm.darkItemBgColorContrast : props.darkItemBgColorContrast,
    darkItemBgColorHover: tm?.darkItemBgColorHover !== undefined ? tm.darkItemBgColorHover : props.darkItemBgColorHover,
    darkItemBgColorHoverContrast: tm?.darkItemBgColorHoverContrast !== undefined ? tm.darkItemBgColorHoverContrast : props.darkItemBgColorHoverContrast,
    itemPX: tm?.itemPX !== undefined ? tm.itemPX : props.itemPX,
    itemPY: tm?.itemPY !== undefined ? tm.itemPY : props.itemPY,
    itemPB: tm?.itemPB !== undefined ? tm.itemPB : props.itemPB,
    itemPL: tm?.itemPL !== undefined ? tm.itemPL : props.itemPL,
    itemPR: tm?.itemPR !== undefined ? tm.itemPR : props.itemPR,
    itemPT: tm?.itemPT !== undefined ? tm.itemPT : props.itemPT
  })
  useSidebarContext = MenuSidebarContext(PROVIDER_NAME)

  const clsWrapper = base({
    spacing: {
      px: tm?.px !== undefined ? tm.px : props.px,
      py: tm?.py !== undefined ? tm.py : props.py,
      pb: tm?.pb !== undefined ? tm.pb : props.pb,
      pl: tm?.pl !== undefined ? tm.pl : props.pl,
      pr: tm?.pr !== undefined ? tm.pr : props.pr,
      pt: tm?.pt !== undefined ? tm.pt : props.pt
    }
  })

  const cls = base({
    model: {
      display: "block",
      width: ((tm?.collapseButton && !collapse) || (props.collapseButton && !collapse && tm?.collapseButton === undefined) || tm?.iconOnly || (props.iconOnly && !tm?.iconOnly)) ? "max" : tm?.width !== undefined ? tm.width : props.width,
      height: tm?.height !== undefined ? tm.height : props.height
    },
    responsive: ((tm?.responsive && !collapse) || (props.responsive && !collapse && tm?.responsive === undefined)) ? {
      md: { width: "0" }
    } : ((tm?.responsive && collapseMini) || (props.responsive && collapseMini && tm?.responsive === undefined)) ? {
      md: { width: "max" }
    } : undefined,
    flexbox: {
      flex: true,
      direction: "col"
    },
    positioning: {
      position: (tm?.fixed || (props.fixed && tm?.fixed === undefined)) ? "fixed" : "relative",
      top: (tm?.fixed || (props.fixed && tm?.fixed === undefined)) ? "0" : undefined,
      left: ((tm?.fixed && tm.fixedPosition === "left") || (props.fixed && props.fixedPosition === "left" &&  tm?.fixed === undefined && tm?.fixedPosition === undefined)) ? "0" : undefined,
      right: ((tm?.fixed && tm.fixedPosition === "right") || (props.fixed && props.fixedPosition === "right" && tm?.fixed === undefined && tm?.fixedPosition === undefined)) ? "0" : undefined,
      zIndex: (tm?.fixed || (props.fixed && tm?.fixed === undefined)) ? "50" : undefined
    },
    visual: {
      dark: dark,
      bgColor: tm?.color !== undefined ? tm.color : props.color,
      bgColorContrast: tm?.colorContrast !== undefined ? tm.colorContrast : props.colorContrast,
      darkBgColor: tm?.darkColor !== undefined ? tm.darkColor : props.darkColor,
      darkBgColorContrast: tm?.darkColorContrast !== undefined ? tm.darkColorContrast : props.darkColorContrast,
      borderWidth: (tm?.border || (props.border && tm?.border === undefined)) ? "normal" : undefined,
      borderStyle: (tm?.border || (props.border && tm?.border === undefined)) ? "solid" : undefined,
      borderColor: (tm?.border || (props.border && tm?.border === undefined)) ? tm?.borderColor !== undefined ? tm.borderColor : props.borderColor : undefined,
      borderColorContrast: (tm?.border || (props.border && tm?.border === undefined)) ? tm?.borderColorContrast !== undefined ? tm.borderColorContrast : props.borderColorContrast : undefined,
      darkBorderColor: (tm?.border || (props.border && tm?.border === undefined)) ? tm?.darkBorderColor !== undefined ? tm.darkBorderColor : props.darkBorderColor : undefined,
      darkBorderColorContrast: (tm?.border || (props.border && tm?.border === undefined)) ? tm?.darkBorderColorContrast !== undefined ? tm.darkBorderColorContrast : props.darkBorderColorContrast : undefined,
      borderPosition: !props.border ? undefined : ((tm?.border && tm.fixedPosition === "left") || (props.fixedPosition === "left" && tm?.fixedPosition === undefined)) ? "right" : "left",
      borderRadius: tm?.rounded !== undefined ? tm.rounded : props.rounded,
      shadow: tm?.shadow !== undefined ? tm.shadow : props.shadow,
      shadowColor: (tm?.shadow !== undefined && tm.shadowColor !== undefined) ? tm.shadowColor : props.shadow !== undefined ? props.shadowColor : undefined,
      shadowColorContrast: (tm?.shadow !== undefined && tm.shadowColorContrast !== undefined) ? tm.shadowColorContrast : props.shadow !== undefined ? props.shadowColorContrast : undefined,
      shadowOpacity: (tm?.shadow !== undefined && tm.shadowOpacity !== undefined) ? tm.shadowOpacity : props.shadow !== undefined ? props.shadowOpacity : undefined,
      darkShadowColor: (tm?.shadow !== undefined && tm.darkShadowColor !== undefined) ? tm.darkShadowColor : props.shadow !== undefined ? props.darkShadowColor : undefined,
      darkShadowColorContrast: (tm?.shadow !== undefined && tm.darkShadowColorContrast) ? tm.darkShadowColorContrast : props.shadow !== undefined ? props.darkShadowColorContrast : undefined,
      darkShadowOpacity: (tm?.shadow !== undefined && tm.darkShadowOpacity !== undefined) ? tm.darkShadowOpacity : props.shadow !== undefined ? props.darkShadowOpacity : undefined,
    },
    spacing: {
      mx: tm?.mx !== undefined ? tm.mx : props.mx,
      my: tm?.my !== undefined ? tm.my : props.my,
      mb: tm?.mb !== undefined ? tm.mb : props.mb,
      ml: tm?.ml !== undefined ? tm.ml : props.ml,
      mr: tm?.mr !== undefined ? tm.mr : props.mr,
      mt: tm?.mt !== undefined ? tm.mt : props.mt
    }
  })

  const clsCollapse = base({
    model: {
      width: "6",
      height: "6"
    },
    positioning: {
      position: "fixed",
      zIndex: "50"
    },
    flexbox: {
      flex: true,
      alignItems: "center",
      justify: "center"
    },
    visual: {
      dark: dark,
      bgColor: tm?.color !== undefined ? tm.color : props.color,
      bgColorContrast: tm?.colorContrast !== undefined ? tm.colorContrast : props.colorContrast,
      darkBgColor: tm?.darkColor !== undefined ? tm.darkColor : props.darkColor,
      darkBgColorContrast: tm?.darkColorContrast !== undefined ? tm.darkColorContrast : props.darkColorContrast,
      borderRadius: "full",
      shadow: "md"
    }
  })

  return(
    <MenuSidebarProvider>
      <nav className="min-h-screen flex flex-col flex-auto flex-shrink-0">
        {((tm?.collapseButton && collapseMargin !== 0) || (props.collapseButton && tm?.collapseButton === undefined && collapseMargin !== 0)) && (
          <button
          className={clsCollapse}
          aria-label="Collapse button"
          style={{marginLeft: `${collapseMargin}px`}}
          onClick={() => setCollapse(!collapse)}>
            {collapse ? (
              <Icon icon="chevron-left" height="3"
              color={tm?.itemTextColor !== undefined ? tm.itemTextColor : props.itemTextColor}
              colorContrast={tm?.itemTextColorContrast !== undefined ? tm.itemTextColorContrast : props.itemTextColorContrast}
              darkColor={tm?.darkItemTextColor !== undefined ? tm.darkItemTextColor : props.darkItemTextColor}
              darkColorContrast={tm?.darkItemTextColorContrast !== undefined ? tm.darkItemTextColorContrast : props.darkItemTextColorContrast}  />
            ) : (
              <Icon icon="chevron-right" height="3"
              color={tm?.itemTextColor !== undefined ? tm.itemTextColor : props.itemTextColor}
              colorContrast={tm?.itemTextColorContrast !== undefined ? tm.itemTextColorContrast : props.itemTextColorContrast}
              darkColor={tm?.darkItemTextColor !== undefined ? tm.darkItemTextColor : props.darkItemTextColor}
              darkColorContrast={tm?.darkItemTextColorContrast !== undefined ? tm.darkItemTextColorContrast : props.darkItemTextColorContrast}  />
            )}
          </button>
        )}

        {((tm?.collapseButton === false && tm.responsive && !collapse) ||
          (!props.collapseButton && tm?.collapseButton === undefined && tm?.responsive === undefined && props.responsive && !collapse)) && (
          <div
          className={[
            "flex lg:hidden absolute left-0",
            !collapse ? "ml-3" : ""
          ].join(" ")}>
            <button
            className={clsCollapse}
            aria-label="Collapse button"
            onClick={() => setCollapse(!collapse)}>
              {collapse ? (
                <Icon icon="chevron-left" height="3"
                color={tm?.itemTextColor !== undefined ? tm.itemTextColor : props.itemTextColor}
                colorContrast={tm?.itemTextColorContrast !== undefined ? tm.itemTextColorContrast : props.itemTextColorContrast}
                darkColor={tm?.darkItemTextColor !== undefined ? tm.darkItemTextColor : props.darkItemTextColor}
                darkColorContrast={tm?.darkItemTextColorContrast !== undefined ? tm.darkItemTextColorContrast : props.darkItemTextColorContrast} />
              ) : (
                <Icon icon="chevron-right" height="3"
                color={tm?.itemTextColor !== undefined ? tm.itemTextColor : props.itemTextColor}
                colorContrast={tm?.itemTextColorContrast !== undefined ? tm.itemTextColorContrast : props.itemTextColorContrast}
                darkColor={tm?.darkItemTextColor !== undefined ? tm.darkItemTextColor : props.darkItemTextColor}
                darkColorContrast={tm?.darkItemTextColorContrast !== undefined ? tm.darkItemTextColorContrast : props.darkItemTextColorContrast} />
              )}
            </button>
          </div>
        )}

        <div ref={node} className={[
          cls,
          (tm?.collapseButton || (props.collapseButton && tm?.collapseButton === undefined)) ? "transition-transform duration-700 delay-300 ease-in-out" : ""
        ].join(" ")}>
          {((tm?.collapseButton === false && tm.responsive && collapse) ||
          (!props.collapseButton && tm?.collapseButton === undefined && tm?.responsive === undefined && props.responsive && collapse)) && (
            <div
            className={[
              "flex lg:hidden absolute left-full",
              collapse ? "ml-3 mt-3" : ""
            ].join(" ")}>
              <button
              className={clsCollapse}
              aria-label="Collapse button"
              onClick={() => setCollapse(!collapse)}>
                {collapse ? (
                  <Icon icon="chevron-left" height="3"
                  color={tm?.itemTextColor !== undefined ? tm.itemTextColor : props.itemTextColor}
                  colorContrast={tm?.itemTextColorContrast !== undefined ? tm.itemTextColorContrast : props.itemTextColorContrast}
                  darkColor={tm?.darkItemTextColor !== undefined ? tm.darkItemTextColor : props.darkItemTextColor}
                  darkColorContrast={tm?.darkItemTextColorContrast !== undefined ? tm.darkItemTextColorContrast : props.darkItemTextColorContrast}  />
                ) : (
                  <Icon icon="chevron-right" height="3"
                  color={tm?.itemTextColor !== undefined ? tm.itemTextColor : props.itemTextColor}
                  colorContrast={tm?.itemTextColorContrast !== undefined ? tm.itemTextColorContrast : props.itemTextColorContrast}
                  darkColor={tm?.darkItemTextColor !== undefined ? tm.darkItemTextColor : props.darkItemTextColor}
                  darkColorContrast={tm?.darkItemTextColorContrast !== undefined ? tm.darkItemTextColorContrast : props.darkItemTextColorContrast}  />
                )}
              </button>
            </div>
          )}
          {props.logo !== undefined && (
            <div className={[
              "flex items-center md:content-center",
              (tm?.iconOnly || (props.iconOnly && tm?.iconOnly === undefined) || (!props.iconOnly && tm?.iconOnly === undefined && !collapse)) ? "py-4" : clsWrapper
            ].join(" ").trim()}>
              {props.logo}
            </div>
          )}

          {((tm?.responsive && collapse) || (!props.responsive && tm?.responsive === undefined) || (props.responsive && tm?.responsive === undefined && collapse)) && (
            React.Children.map(props.children, (elm) => {
              const e = elm as React.ReactElement<any>
              if (e.type === MenuContent && e.props.position === "top") {
                return(
                  <div className="w-full" style={{flexBasis: "auto"}}>
                    <MenuContent id={`zenbu-sidebar-${id}-0`} {...e.props} />
                  </div>
                )
              }
            })
          )}

          <div className={[
            "overflow-y-auto overflow-x-hidden flex-grow",
            (tm?.iconOnly || (props.iconOnly && tm?.iconOnly === undefined) || (!props.iconOnly && tm?.iconOnly === undefined && !collapse)) ? "" : clsWrapper
          ].join(" ").trim()}>
            <ul role="menubar">
              {React.Children.map(props.children, (elm, idx) => {
                const e = elm as React.ReactElement<any>
                if (e.type === MenuItem) {
                  return(
                    <MenuItem
                    sidebar={((tm?.responsive && collapseMini) || (props.responsive && tm?.responsive === undefined && collapseMini)) ? true : undefined}
                    orientation="vertical"
                    iconOnly={(tm?.collapseButton && !collapse) || (props.collapseButton && tm?.collapseButton === undefined && !collapse) || (props.iconOnly && tm?.iconOnly === undefined) || tm?.iconOnly ? true : false}
                    id={`zenbu-sidebar-${id}-item-${idx+1}`} key={`${id}-item-${idx+1}`} {...e.props} />
                  )
                } else if (e.type === MenuItems) {
                  return(
                    <MenuItems
                    id={`zenbu-sidebar-${id}-item-${idx+1}`}
                    {...e.props}
                    orientation="vertical"
                    sidebar={((tm?.responsive && collapseMini) || (props.responsive && tm?.responsive === undefined && collapseMini)) ? true : undefined} mini={collapseMini}
                    iconOnly={(tm?.collapseButton && !collapse) || (props.collapseButton && tm?.collapseButton === undefined && !collapse) || (props.iconOnly && tm?.iconOnly === undefined) || tm?.iconOnly ? true : false} />
                  )
                } else if (e.type === MenuDropdown) {
                  return(
                    <MenuDropdown sidebar orientation="vertical" id={`zenbu-sidebar-${id}-item-${idx+1}`} key={`${id}-item-${idx+1}`} {...e.props} />
                  )
                }
              })}
            </ul>
          </div>

          {((tm?.responsive && collapse) || (!props.responsive && tm?.responsive === undefined) || (props.responsive && tm?.responsive === undefined && collapse)) && (
            React.Children.map(props.children, (elm) => {
              const e = elm as React.ReactElement<any>
              if (e.type === MenuContent && e.props.position === "bottom") {
                return(
                  <div className={[
                    "w-full",
                    base({
                      spacing: {
                        px: tm?.px !== undefined ? tm.px : props.px,
                        py: tm?.py !== undefined ? tm.py : props.py,
                        pb: tm?.pb !== undefined ? tm.pb : props.pb,
                        pl: tm?.pl !== undefined ? tm.pl : props.pl,
                        pr: tm?.pr !== undefined ? tm.pr : props.pr,
                        pt: tm?.pt !== undefined ? tm.pt : props.pt
                      }
                    })
                  ].join(" ")} style={{flexBasis: "auto"}}>
                    <MenuContent id={`zenbu-sidebar-${id}-0`} {...e.props} />
                  </div>
                )
              }
            })
          )}
        </div>
      </nav>
    </MenuSidebarProvider>
  )
}

MenuSidebar.defaultProps = {
  width: "64",
  collapse: true,
  collapseButton: false,
  collapseMini: false,
  iconOnly: false,
  fixed: false,
  fixedPosition: "left",
  responsive: false,
  color: "white",
  itemTextColor: "gray",
  itemTextColorContrast: "500",
  itemTextColorHover: "gray",
  itemTextColorHoverContrast: "700",
  border: true,
  borderWidth: "normal",
  borderStyle: "solid",
  borderColor: "gray",
  borderColorContrast: "100",
  itemBorder: false,
  itemBorderHoverWidth: "normal",
  itemBorderHoverStyle: "solid",
  fontSize: "sm",
  px: "5",
  py: "3",
  itemPX: "5",
  itemPY: "3"
}
