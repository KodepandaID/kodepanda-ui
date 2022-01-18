import { AriaProps, base, BorderRadius, BorderStyle, BorderWidth, Color, ColorContrast, ColorProps, FontWeight, ModelProps, PositionScale, SpacingProps, StandardProps, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { Icon } from "@zenbu-ui/icon"
import { ThemeCtx } from "@zenbu-ui/provider"
import { createContext, useId } from "@zenbu-ui/react-id"
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
  const { dark } = React.useContext(ThemeCtx)
  const id = useId("sidebar")
  const node = React.useRef<HTMLDivElement>(null)

  const [collapse, setCollapse] = React.useState(props.collapse)
  const [collapseMargin, setCollapseMargin] = React.useState(0)
  const [collapseMini] = React.useState(props.collapseMini)
  const [MenuSidebarProvider, MenuSidebarContext] = createContext<MenuSidebarProps>(PROVIDER_NAME, {
    id: id,
    dark: dark,
    iconOnly: props.iconOnly,
    fontSize: props.fontSize,
    fontWeight: props.fontWeight,
    itemPosition: props.itemPosition,
    itemRounded: props.itemRounded,
    itemActiveFontWeight: props.itemActiveFontWeight,
    itemBorder: props.itemBorder,
    itemBorderHoverWidth: props.itemBorderHoverWidth,
    itemBorderHoverStyle: props.itemBorderHoverStyle,
    itemBorderHoverColor: props.itemBorderHoverColor,
    itemBorderHoverColorContrast: props.itemBorderHoverColorContrast,
    itemTextColor: props.itemTextColor,
    itemTextColorContrast: props.itemTextColorContrast,
    itemTextColorHover: props.itemTextColorHover,
    itemTextColorHoverContrast: props.itemTextColorHoverContrast,
    darkItemTextColor: props.itemTextColor,
    darkItemTextColorContrast: props.itemTextColorContrast,
    darkItemTextColorHover: props.itemTextColorHover,
    darkItemTextColorHoverContrast: props.itemTextColorHoverContrast,
    itemBgColor: props.itemBgColor,
    itemBgColorContrast: props.itemBgColorContrast,
    itemBgColorHover: props.itemBgColorHover,
    itemBgColorHoverContrast: props.itemBgColorHoverContrast,
    darkItemBgColor: props.itemBgColor,
    darkItemBgColorContrast: props.itemBgColorContrast,
    darkItemBgColorHover: props.itemBgColorHover,
    darkItemBgColorHoverContrast: props.itemBgColorHoverContrast,
    itemPX: props.itemPX,
    itemPY: props.itemPY,
    itemPB: props.itemPB,
    itemPL: props.itemPL,
    itemPR: props.itemPR,
    itemPT: props.itemPT
  })
  useSidebarContext = MenuSidebarContext(PROVIDER_NAME)

  const clsWrapper = base({
    spacing: {
      px: props.px,
      py: props.py,
      pb: props.pb,
      pl: props.pl,
      pr: props.pr,
      pt: props.pt
    }
  })

  const cls = base({
    model: {
      display: "block",
      width: ((props.collapseButton && !collapse) || props.iconOnly) ? "max" : props.width,
      height: props.height
    },
    responsive: (props.responsive && !collapse) ? {
      md: { width: "0" }
    } : (props.responsive && collapseMini) ? {
      md: { width: "max" }
    } : undefined,
    flexbox: {
      flex: true,
      direction: "col"
    },
    positioning: {
      position: props.fixed ? "fixed" : "relative",
      top: props.fixed ? "0" : undefined,
      left: (props.fixed && props.fixedPosition === "left") ? "0" : undefined,
      right:(props.fixed && props.fixedPosition === "right") ? "0" : undefined,
      zIndex: props.fixed ? "50" : undefined
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
      borderPosition: !props.fixed ? undefined : props.fixedPosition === "left" ? "right" : "left",
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
      bgColor: props.color,
      bgColorContrast: props.colorContrast,
      darkBgColor: props.darkColor,
      darkBgColorContrast: props.darkColorContrast,
      borderRadius: "full",
      shadow: "md"
    }
  })

  React.useEffect(() => {
    if (node.current !== undefined && !collapseMini) {
      setCollapseMargin(node.current?.clientWidth === undefined ? 0 : collapse ? node.current.clientWidth - 10 : node.current.clientWidth + 10)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collapse, node])

  return(
    <MenuSidebarProvider>
      <nav className="min-h-screen flex flex-col flex-auto flex-shrink-0">
        {(props.collapseButton && collapseMargin !== 0) && (
          <button
          className={clsCollapse}
          aria-label="Collapse button"
          style={{marginLeft: `${collapseMargin}px`}}
          onClick={() => setCollapse(!collapse)}>
            {collapse ? (
              <Icon icon="chevron-left" height="3" color={props.itemTextColor} colorContrast={props.itemTextColorContrast} darkColor={props.darkItemTextColor} darkColorContrast={props.darkItemTextColorContrast}  />
            ) : (
              <Icon icon="chevron-right" height="3" color={props.itemTextColor} colorContrast={props.itemTextColorContrast} darkColor={props.darkItemTextColor} darkColorContrast={props.darkItemTextColorContrast}  />
            )}
          </button>
        )}

        {(!props.collapseButton && props.responsive && !collapse) && (
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
                <Icon icon="chevron-left" height="3" color={props.itemTextColor} colorContrast={props.itemTextColorContrast} darkColor={props.darkItemTextColor} darkColorContrast={props.darkItemTextColorContrast}  />
              ) : (
                <Icon icon="chevron-right" height="3" color={props.itemTextColor} colorContrast={props.itemTextColorContrast} darkColor={props.darkItemTextColor} darkColorContrast={props.darkItemTextColorContrast}  />
              )}
            </button>
          </div>
        )}

        <div ref={node} className={[
          cls,
          props.collapseButton ? "transition-transform duration-700 delay-300 ease-in-out" : ""
        ].join(" ")}>
          {(!props.collapseButton && props.responsive && collapse) && (
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
                  <Icon icon="chevron-left" height="3" color={props.itemTextColor} colorContrast={props.itemTextColorContrast} darkColor={props.darkItemTextColor} darkColorContrast={props.darkItemTextColorContrast}  />
                ) : (
                  <Icon icon="chevron-right" height="3" color={props.itemTextColor} colorContrast={props.itemTextColorContrast} darkColor={props.darkItemTextColor} darkColorContrast={props.darkItemTextColorContrast}  />
                )}
              </button>
            </div>
          )}
          {props.logo !== undefined && (
            <div className={[
              "flex items-center md:content-center",
              (props.iconOnly || (!props.iconOnly && !collapse)) ? "py-4" : clsWrapper
            ].join(" ").trim()}>
              {props.logo}
            </div>
          )}

          {(!props.responsive || (props.responsive && collapse)) && (
            React.Children.map(props.children, (elm) => {
              const e = elm as React.ReactElement<any>
              if (e.type === MenuContent && e.props.position === "top") {
                return(
                  <div className="w-full" style={{flexBasis: "auto"}}>
                    <MenuContent id={`${id}-0`} {...e.props} />
                  </div>
                )
              }
            })
          )}

          <div className={[
            "overflow-y-auto overflow-x-hidden flex-grow",
            (props.iconOnly || (!props.iconOnly && !collapse)) ? "" : clsWrapper
          ].join(" ").trim()}>
            <ul role="menubar">
              {React.Children.map(props.children, (elm, idx) => {
                const e = elm as React.ReactElement<any>
                if (e.type === MenuItem) {
                  return(
                    <MenuItem
                    sidebar={props.responsive && collapseMini ? true : undefined}
                    orientation="vertical"
                    iconOnly={(props.collapseButton && !collapse) || props.iconOnly ? true : false}
                    id={`${id}-item-${idx+1}`} key={`${id}-item-${idx+1}`} {...e.props} />
                  )
                } else if (e.type === MenuItems) {
                  return(
                    <MenuItems
                    id={`${id}-item-${idx+1}`}
                    {...e.props}
                    orientation="vertical"
                    sidebar={props.responsive && collapseMini ? true : undefined} mini={collapseMini}
                    iconOnly={(props.collapseButton && !collapse) || props.iconOnly ? true : false} />
                  )
                } else if (e.type === MenuDropdown) {
                  return(
                    <MenuDropdown sidebar orientation="vertical" id={`${id}-item-${idx+1}`} key={`${id}-item-${idx+1}`} {...e.props} />
                  )
                }
              })}
            </ul>
          </div>

          {(!props.responsive || (props.responsive && collapse)) && (
            React.Children.map(props.children, (elm) => {
              const e = elm as React.ReactElement<any>
              if (e.type === MenuContent && e.props.position === "bottom") {
                return(
                  <div className={[
                    "w-full",
                    base({
                      spacing: {
                        px: props.px,
                        py: props.py,
                        pb: props.pb,
                        pl: props.pl,
                        pr: props.pr,
                        pt: props.pt
                      }
                    })
                  ].join(" ")} style={{flexBasis: "auto"}}>
                    <MenuContent id={`${id}-0`} {...e.props} />
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
