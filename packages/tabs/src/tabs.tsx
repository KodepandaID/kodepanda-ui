import { AriaProps, base, Color, ColorContrast, ColorProps, element, ModelProps, SpacingProps, StandardProps, VisualProps } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { createContext, useId } from "@zenbu-ui/react-id"
import * as React from "react"
import { TabsItem, TabsItemProps } from "./tabs-item"

const PROVIDER_NAME = "Tabs"

interface TabsProps extends AriaProps, StandardProps, ColorProps, ModelProps, VisualProps, SpacingProps {
  simple?: boolean,
  defaultActiveIndex?: number,
  borderActiveColor?: Color,
  borderActiveColorContrast?: ColorContrast,
  focusColor?: Color,
  focusColorContrast?: ColorContrast,
  darkFocusColor?: Color,
  darkFocusColorContrast?: ColorContrast
}

export let useContext: TabsProps
export const Tabs: React.FC<TabsProps> & {
  Item: React.FC<TabsItemProps>
} = (props) => {
  const { dark, theme } = React.useContext(ThemeCtx)
  const id = useId("tabs")

  const tt = theme?.tabs?.[`${props.componentName}`]

  const [activeIndex, setActiveIndex] = React.useState<number>(props.defaultActiveIndex === undefined ? 0 : props.defaultActiveIndex)

  const [TabsProvider, TabsContext] = createContext<TabsProps>(PROVIDER_NAME, {
    id: id,
    dark: dark,
    px: tt?.px !== undefined ? tt.px : props.px,
    py: tt?.py !== undefined ? tt.py : props.py,
    pb: tt?.pb !== undefined ? tt.pb : props.pb,
    pl: tt?.pl !== undefined ? tt.pl : props.pl,
    pr: tt?.pr !== undefined ? tt.pr : props.pr,
    pt: tt?.pt !== undefined ? tt.pt : props.pt
  })
  useContext = TabsContext(PROVIDER_NAME)

  React.useEffect(() => {
    if (activeIndex !== undefined) {
      document.getElementById(`${id}-${activeIndex}`)?.focus()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex])

  const clsWrapper = base({
    model: {
      width: tt?.width !== undefined ? tt.width : props.width
    },
    flexbox: {
      flex: true,
      direction: "col"
    },
    visual: (tt?.simple === false || (!props.simple && tt?.simple === undefined)) ? {
      dark: dark,
      bgColor: tt?.color !== undefined ? tt.color : props.color,
      bgColorContrast: tt?.colorContrast !== undefined ? tt.colorContrast : props.colorContrast,
      darkBgColor: tt?.darkColor !== undefined ? tt.darkColor : props.darkColor,
      darkBgColorContrast: tt?.darkColorContrast !== undefined ? tt.darkColorContrast : props.darkColorContrast,
      borderWidth: (tt?.border && tt.borderWidth !== undefined) ? tt.borderWidth : (props.border && tt?.border === undefined) ? props.borderWidth : undefined,
      borderStyle: (tt?.border && tt.borderStyle !== undefined) ? tt.borderStyle : (props.border && tt?.border === undefined) ? props.borderStyle : undefined,
      borderColor: (tt?.border && tt.borderColor !== undefined) ? tt.borderColor : (props.border && tt?.border === undefined) ? props.borderColor : undefined,
      borderColorContrast: (tt?.border && tt.borderColorContrast !== undefined) ? tt.borderColorContrast : (props.border && tt?.border === undefined) ? props.borderColorContrast : undefined,
      borderRadius: tt?.rounded !== undefined ? tt.rounded : props.rounded,
      borderRadiusPosition: tt?.roundedPosition !== undefined ? tt.roundedPosition : props.roundedPosition,
      shadow: tt?.shadow !== undefined ? tt.shadow : props.shadow,
      shadowColor: (tt?.shadow !== undefined && tt.shadowColor !== undefined) ? tt.shadowColor : props.shadow !== undefined ? props.shadowColor : undefined,
      shadowColorContrast: (tt?.shadow !== undefined && tt.shadowColorContrast !== undefined) ? tt.shadowColorContrast : props.shadow !== undefined ? props.shadowColorContrast : undefined,
      shadowOpacity: (tt?.shadow !== undefined && tt.shadowOpacity !== undefined) ? tt.shadowOpacity : props.shadow !== undefined ? props.shadowOpacity : undefined,
      darkShadowColor: (tt?.shadow !== undefined && tt.darkShadowColor !== undefined) ? tt.darkShadowColor : props.shadow !== undefined ? props.darkShadowColor : undefined,
      darkShadowColorContrast: (tt?.shadow !== undefined && tt.darkShadowColorContrast) ? tt.darkShadowColorContrast : props.shadow !== undefined ? props.darkShadowColorContrast : undefined,
      darkShadowOpacity: (tt?.shadow !== undefined && tt.darkShadowOpacity !== undefined) ? tt.darkShadowOpacity : props.shadow !== undefined ? props.darkShadowOpacity : undefined,
    } : undefined
  })

  const clsTabList = base({
    model: {
      display: "flex"
    },
    visual: {
      dark: false,
      borderWidth: "normal",
      borderStyle: "solid",
      borderPosition: "bottom",
      borderColor: "gray",
      borderColorContrast: "200"
    }
  })

  const tabList = (e: React.ReactElement<any>, idx: number) => {
    const cls = base({
      flexbox: {
        flex: true,
        alignItems: "center",
        justify: "center"
      },
      visual: {
        dark: false,
        borderWidth: activeIndex === idx ? "2" : undefined,
        borderStyle: activeIndex === idx ? "solid" : undefined,
        borderPosition: activeIndex === idx ? "bottom" : undefined,
        borderColor: activeIndex === idx ? tt?.borderActiveColor !== undefined ? tt.borderActiveColor : props.borderActiveColor : undefined,
        borderColorContrast: activeIndex === idx ? tt?.borderActiveColorContrast !== undefined ? tt.borderActiveColorContrast : props.borderActiveColorContrast : undefined
      },
      misc: {
        userSelect: "none"
      },
      spacing: {
        px: "3",
        py: "3",
      }
    })

    const clsFocus = element({
      focus: {
        dark: dark,
        focusColor: tt?.focusColor !== undefined ? tt.focusColor : props.focusColor,
        focusColorContrast: tt?.focusColorContrast !== undefined ? tt.focusColorContrast : props.focusColorContrast,
        focusDarkColor: tt?.darkFocusColor !== undefined ? tt.darkFocusColor : props.darkFocusColor,
        focusDarkColorContrast: tt?.darkFocusColorContrast !== undefined ? tt?.darkFocusColorContrast : props.darkFocusColorContrast
      }
    })

    return(
      <button
      id={`${id}-${idx}`}
      className={[
        cls,
        clsFocus,
        "focus:outline-none"
      ].join(" ").trim()}
      role="tab"
      tabIndex={activeIndex === idx ? 0 : -1}
      aria-selected={activeIndex === idx ? "true" : "false"}
      aria-controls={`${id}-content-${idx}`}
      onClick={() => setActiveIndex(idx)}
      onKeyDown={(e) => {
        if (e.code === "ArrowRight" && idx+1 < React.Children.count(props.children)) setActiveIndex(idx+1)
        else if (e.code === "ArrowLeft" && idx-1 >= 0) setActiveIndex(idx-1)
      }}
      style={{flex: "1 1 0%"}}>
        {e.props.title}
      </button>
    )
  }

  return(
    <TabsProvider>
      <div className="block">
        <div className={clsWrapper}>
          <div
          className={[clsTabList, "shrink-0", "focus:outline-none"].join(" ").trim()}
          role="tablist"
          aria-label={props.ariaLabel}
          tabIndex={0}>
            {React.Children.map(props.children, (elm, idx) => {
              const e = elm as React.ReactElement<any>
              if (e.type === TabsItem) {
                return tabList(e, idx)
              }
            })}
          </div>

          {React.Children.map(props.children, (elm, idx) => {
            const e = elm as React.ReactElement<any>
            if (e.type === TabsItem) {
              return(
                <TabsItem id={`${id}-content-${idx}`} active={activeIndex === idx ? false : true} {...e.props} />
              )
            }
          })}
        </div>
      </div>
    </TabsProvider>
  )
}

Tabs.Item = TabsItem

Tabs.defaultProps = {
  width: "80",
  simple: false,
  color: "white",
  borderActiveColor: "blue",
  borderActiveColorContrast: "600",
  focusColor: "gray",
  focusColorContrast: "100",
  rounded: "md",
  px: "3",
  py: "3"
}
