import { AriaProps, base, BorderRadius, BorderStyle, BorderWidth, Color, ColorContrast, ColorProps, content, FontWeight, ModelProps, PositionScale, ResponsiveProps, SpaceBetween, SpacingProps, StandardProps, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { createContext } from "@zenbu-ui/context"
import { useId } from "@reach/auto-id"
import * as React from "react"
import { MenuFooterContent, MenuFooterContentProps } from "./menu-footer-content"
import { MenuItems } from "./menu-items"

const PROVIDER_NAME = "Footer"

export let useFooterContext: MenuFooterProps
interface MenuFooterProps extends AriaProps, ResponsiveProps, StandardProps, ModelProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {
  fixed?: boolean,
  responsive?: boolean,
  iconOnly?: boolean,
  logo?: React.ReactNode,
  logoPosition?: "left" | "right",
  footer?: React.ReactNode,
  itemPosition?: "left" | "right" | "center",
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
  itemPT?: PositionScale,
  spaceX?: SpaceBetween,
  spaceY?: SpaceBetween
}

export const MenuFooter: React.FC<MenuFooterProps> & {
  Content: React.FC<MenuFooterContentProps>
} = (props) => {
  const { dark, theme } = React.useContext(ThemeCtx)
  const id = useId()

  const tm = theme?.menuFooter?.[`${props.componentName}`]

  const [MenuFooterProvider, MenuFooterContext] = createContext<MenuFooterProps>(PROVIDER_NAME, {
    id: `zenbu-footer-${id}`,
    dark: dark,
    iconOnly: tm?.iconOnly !== undefined ? tm.iconOnly : props.iconOnly,
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
  useFooterContext = MenuFooterContext(PROVIDER_NAME)

  const cls = base({
    model: {
      width: tm?.width !== undefined ? tm.width : props.width
    },
    positioning: {
      position: (tm?.fixed || (props.fixed && tm?.fixed === undefined)) ? "fixed" : "relative",
      bottom: (tm?.fixed || (props.fixed && tm?.fixed === undefined)) ? "0" : undefined,
      left: (tm?.fixed || (props.fixed && tm?.fixed === undefined)) ? "0" : undefined,
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
      borderRadius: tm?.rounded !== undefined ? tm.rounded : props.rounded,
      shadow: tm?.shadow !== undefined ? tm.shadow : props.shadow,
      shadowColor: (tm?.shadow !== undefined && tm.shadowColor !== undefined) ? tm.shadowColor : props.shadow !== undefined ? props.shadowColor : undefined,
      shadowColorContrast: (tm?.shadow !== undefined && tm.shadowColorContrast !== undefined) ? tm.shadowColorContrast : props.shadow !== undefined ? props.shadowColorContrast : undefined,
      shadowOpacity: (tm?.shadow !== undefined && tm.shadowOpacity !== undefined) ? tm.shadowOpacity : props.shadow !== undefined ? props.shadowOpacity : undefined,
      darkShadowColor: (tm?.shadow !== undefined && tm.darkShadowColor !== undefined) ? tm.darkShadowColor : props.shadow !== undefined ? props.darkShadowColor : undefined,
      darkShadowColorContrast: (tm?.shadow !== undefined && tm.darkShadowColorContrast) ? tm.darkShadowColorContrast : props.shadow !== undefined ? props.darkShadowColorContrast : undefined,
      darkShadowOpacity: (tm?.shadow !== undefined && tm.darkShadowOpacity !== undefined) ? tm.darkShadowOpacity : props.shadow !== undefined ? props.darkShadowOpacity : undefined,
    }
  })

  const clsMenu = content({
    flexbox: {
      flex: true,
      direction: "col",
    }
  })

  return(
    <MenuFooterProvider>
      <nav className={cls}>
        <div className={[
          "flex flex-col lg:flex-row md:space-x-0",
          content({
            flexbox: {
              flex: false,
              justify: (tm?.itemPosition === "center" || (props.itemPosition === "center" && tm?.itemPosition === undefined)) ? "center" : (tm?.itemPosition === "right" || (props.itemPosition === "right" && tm?.itemPosition === undefined)) ? "end" : undefined
            },
            responsive: {
              sm: tm?.sm !== undefined ? tm.sm : props.sm,
              md: tm?.md !== undefined ? tm.md : props.md,
              lg: tm?.lg !== undefined ? tm.lg : props.lg,
              xl: tm?.xl !== undefined ? tm.xl : props.xl,
              "2xl": tm?.["2xl"] !== undefined ? tm["2xl"] : props["2xl"]
            },
            spacing: {
              px: tm?.px !== undefined ? tm.px : props.px,
              py: tm?.py !== undefined ? tm.py : props.py,
              pb: tm?.pb !== undefined ? tm.pb : props.pb,
              pl: tm?.pl !== undefined ? tm.pl : props.pl,
              pr: tm?.pr !== undefined ? tm.pr : props.pr,
              pt: tm?.pt !== undefined ? tm.pt : props.pt
            }
          }),
          `lg:${content({spaceBetween: {
            x: tm?.spaceX !== undefined ? tm.spaceX : props.spaceX,
            y: tm?.spaceY !== undefined ? tm.spaceY : props.spaceY
          }})}`
        ].join(" ").trim()}>
          {React.Children.map(props.children, (elm, idx) => {
            const e = elm as React.ReactElement<any>
            if (e.type === MenuItems) {
              return(
                <div className={clsMenu}>
                  <ul>
                    <MenuItems
                    id={`zenbu-footer-${id}-item-${idx+1}`}
                    {...e.props}
                    orientation="vertical" iconOnly={false} sidebar />
                  </ul>
                </div>
              )
            } else if (e.type === MenuFooterContent) {
              return(
                <MenuFooterContent id={`zenbu-footer-${id}-item-${idx+1}`} {...e.props} />
              )
            }
          })}
        </div>

        {props.footer !== undefined && (props.footer)}
      </nav>
    </MenuFooterProvider>
  )
}

MenuFooter.Content = MenuFooterContent

MenuFooter.defaultProps = {
  width: "full",
  color: "white",
  textColor: "gray",
  textColorContrast: "700",
  fixed: false,
  responsive: false,
  logoPosition: "left",
  border: true,
  borderWidth: "normal",
  borderStyle: "solid",
  borderColor: "gray",
  borderColorContrast: "100",
  fontSize: "sm",
  px: "5",
  py: "5",
  itemPY: "1.5",
  spaceX: "24",
}
