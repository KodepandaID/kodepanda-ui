import { base, Color, ColorContrast, SpacingProps, StandardProps, text } from "@zenbu-ui/core"
import { ThemeCtx } from "@zenbu-ui/provider"
import { useId } from "@zenbu-ui/react-id"
import * as React from "react"

interface StatisticProps extends StandardProps, SpacingProps {
  separator?: "dot" | "comma",
  prefix?: React.ReactNode,
  suffix?: React.ReactNode,
  title: string,
  titleColor?: Color,
  titleColorContrast?: ColorContrast,
  darkTitleColor?: Color,
  darkTitleColorContrast?: ColorContrast,
  value: number,
  valueColor?: Color,
  valueColorContrast?: ColorContrast,
  darkValueColor?: Color,
  darkValueColorContrast?: ColorContrast,
  icon?: React.ReactNode
}

export const Statistic: React.FC<StatisticProps> = (props) => {
  const { dark } = React.useContext(ThemeCtx)
  const id = useId("statistic")

  const cls = text({
    className: props.className,
    visualText: {
      dark: false,
      lineHeight: "relaxed"
    },
    spacing: {
      mx: props.mx,
      my: props.my,
      mb: props.mb,
      ml: props.ml,
      mr: props.mr,
      mt: props.mt,
      px: props.px,
      py: props.py,
      pb: props.pb,
      pl: props.pl,
      pr: props.pr,
      pt: props.pt
    }
  })

  const clsTitle = text({
    visualText: {
      dark: dark,
      textColor: props.titleColor,
      textColorContrast: props.titleColorContrast,
      darkTextColor: props.darkTitleColor,
      darkTextColorContrast: props.darkTitleColorContrast,
      fontSize: "sm",
      fontWeight: "light"
    }
  })

  const clsValue = text({
    visualText: {
      dark: dark,
      textColor: props.valueColor,
      textColorContrast: props.valueColorContrast,
      darkTextColor: props.darkValueColor,
      darkTextColorContrast: props.darkValueColorContrast,
      fontSize: "xl",
      fontWeight: "bold"
    }
  })

  if (props.icon !== undefined) {
    const cls = base({
      className: props.className,
      flexbox: {
        flex: true,
        direction: "row",
        verticalAlign: "middle"
      },
    })

    const clsBase = text({
      visualText: {
        dark: false,
        lineHeight: "relaxed"
      },
      spacing: {
        mx: props.mx,
        my: props.my,
        mb: props.mb,
        ml: props.ml,
        mr: props.mr,
        mt: props.mt,
        px: props.px,
        py: props.py,
        pb: props.pb,
        pl: props.pl,
        pr: props.pr,
        pt: props.pt
      }
    })

    return(
      <div id={id} className={[cls, "space-x-3", clsBase].join(" ").trim()}>
        <div className="flex items-center">
          {props.icon}
        </div>
        <div className="block">
          <div className={clsTitle}>
            {props.title}
          </div>
          <div className={clsValue}>
            {props.prefix !== undefined && (
              <span>{props.prefix}</span>
            )}
            <span>{props.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, props.separator === "dot" ? "." : ",")}</span>
            {props.suffix !== undefined && (
              <span>{props.suffix}</span>
            )}
          </div>
        </div>
      </div>
    )
  }

  return(
    <div id={props.id} className={cls}>
      <div className={clsTitle}>
        {props.title}
      </div>
      <div className={clsValue}>
        {props.prefix !== undefined && (
          <span>{props.prefix}</span>
        )}
        <span>{props.value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, props.separator === "dot" ? "." : ",")}</span>
        {props.suffix !== undefined && (
          <span>{props.suffix}</span>
        )}
      </div>
    </div>
  )
}

Statistic.defaultProps = {
  separator: "dot",
  titleColor: "gray",
  titleColorContrast: "400",
  valueColor: "black"
}
