import { AriaProps, base, BorderRadius, BorderStyle, BorderWidth, Color, ColorContrast, ColorProps, content, FontWeight, ModelProps, PositionScale, SpaceBetween, SpacingProps, StandardProps, VisualProps, VisualTextProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { createContext, useId } from "@zenbu-ui/react-id"
import * as React from "react"
import { MenuFooterContent, MenuFooterContentProps } from "./menu-footer-content"
import { MenuItems } from "./menu-items"

const PROVIDER_NAME = "Footer"

export let useFooterContext: MenuFooterProps
interface MenuFooterProps extends AriaProps, StandardProps, ModelProps, ColorProps, VisualProps, VisualTextProps, SpacingProps {
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
  const { dark } = React.useContext(ThemeCtx)
  const id = useId("footer")

  const [MenuFooterProvider, MenuFooterContext] = createContext<MenuFooterProps>(PROVIDER_NAME, {
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
  useFooterContext = MenuFooterContext(PROVIDER_NAME)

  const cls = base({
    model: {
      width: props.width
    },
    positioning: {
      position: props.fixed ? "fixed" : "relative",
      bottom: props.fixed ? "0" : undefined,
      left: props.fixed ? "0" : undefined,
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
      borderRadius: props.rounded,
      shadow: props.shadow,
      shadowColor: props.shadowColor,
      shadowColorContrast: props.shadowColorContrast,
      shadowOpacity: props.shadowOpacity,
      darkShadowColor: props.darkShadowColor,
      darkShadowColorContrast: props.darkShadowColorContrast,
      darkShadowOpacity: props.darkShadowOpacity
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
              justify: props.itemPosition === "center" ? "center" : props.itemPosition === "right" ? "end" : undefined
            },
            spacing: {
              px: props.px,
              py: props.py,
              pb: props.pb,
              pl: props.pl,
              pr: props.pr,
              pt: props.pt
            }
          }),
          `lg:${content({spaceBetween: {
            x: props.spaceX,
            y: props.spaceY
          }})}`
        ].join(" ").trim()}>
          {React.Children.map(props.children, (elm, idx) => {
            const e = elm as React.ReactElement<any>
            if (e.type === MenuItems) {
              return(
                <div className={clsMenu}>
                  <ul>
                    <MenuItems
                    id={`${id}-item-${idx+1}`}
                    {...e.props}
                    orientation="vertical" iconOnly={false} sidebar />
                  </ul>
                </div>
              )
            } else if (e.type === MenuFooterContent) {
              return(
                <MenuFooterContent id={`${id}-item-${idx+1}`} {...e.props} />
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
