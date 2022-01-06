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
  const { dark } = React.useContext(ThemeCtx)
  const id = useId("tabs")

  const [activeIndex, setActiveIndex] = React.useState<number>(props.defaultActiveIndex === undefined ? 0 : props.defaultActiveIndex)

  const [TabsProvider, TabsContext] = createContext<TabsProps>(PROVIDER_NAME, {
    id: id,
    dark: dark,
    px: props.px,
    py: props.py,
    pb: props.pb,
    pl: props.pl,
    pr: props.pr,
    pt: props.pt
  })
  useContext = TabsContext(PROVIDER_NAME)

  const clsWrapper = base({
    model: {
      width: props.width
    },
    flexbox: {
      flex: true,
      direction: "col"
    },
    visual: !props.simple ? {
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
        borderColor: activeIndex === idx ? props.borderActiveColor : undefined,
        borderColorContrast: activeIndex === idx ? props.borderActiveColorContrast : undefined
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
        focusColor: props.focusColor,
        focusColorContrast: props.focusColorContrast,
        focusDarkColor: props.darkFocusColor,
        focusDarkColorContrast: props.darkFocusColorContrast
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

  React.useEffect(() => {
    if (activeIndex !== undefined) {
      document.getElementById(`${id}-${activeIndex}`)?.focus()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex])

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
